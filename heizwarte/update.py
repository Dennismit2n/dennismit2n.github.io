#!/usr/bin/env python3
"""Heizwarte Bürg – holt Wetterdaten und schreibt sie in die HTML-Seite.

Aufruf:  python3 update.py <pfad/zur/index.html>
Quellen: Open-Meteo (DWD ICON, CC BY 4.0) + Bright Sky (DWD MOSMIX & Warnungen).
"""
import json, re, sys, time, urllib.request
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

LAT, LON, ELEV = 48.8813, 9.4412, 414
TZ = ZoneInfo("Europe/Berlin")

OM = ("https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&elevation={el}"
      "&timezone=Europe%2FBerlin&past_days=1&forecast_days=4&models=icon_seamless"
      "&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day"
      "&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,dew_point_2m,wind_speed_10m,"
      "wind_gusts_10m,precipitation_probability,precipitation,shortwave_radiation,weather_code,cloud_cover,is_day"
      "&daily=temperature_2m_max,temperature_2m_min,sunshine_duration,sunrise,sunset,weather_code,"
      "precipitation_sum,wind_gusts_10m_max").format(lat=LAT, lon=LON, el=ELEV)


def get(url, tries=5):
    # Open-Meteo zählt pro IP; Cloud-IPs teilen sich das Kontingent. Daher geduldig wiederholen.
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "heizwarte-buerg/1.0"})
            with urllib.request.urlopen(req, timeout=25) as r:
                return json.load(r)
        except Exception as e:  # noqa: BLE001
            if i == tries - 1:
                raise
            wait = 15 * (i + 1)
            ra = getattr(e, "headers", None) and e.headers.get("Retry-After")
            if ra and str(ra).isdigit():
                wait = max(wait, min(int(ra), 120))
            time.sleep(wait)


def main(path):
    now = datetime.now(TZ)
    om = get(OM)
    if om.get("error"):
        raise SystemExit("Open-Meteo-Fehler: %s" % om.get("reason"))

    start = (now - timedelta(days=1)).strftime("%Y-%m-%dT00:00%z")
    end = (now + timedelta(days=4)).strftime("%Y-%m-%dT00:00%z")
    bs_url = ("https://api.brightsky.dev/weather?lat=%s&lon=%s&date=%s&last_date=%s&tz=Europe/Berlin"
              % (LAT, LON, urllib.request.quote(start), urllib.request.quote(end)))
    try:
        bs = get(bs_url)
        mos = [[w["timestamp"][:16], w["temperature"]] for w in bs.get("weather", [])
               if w.get("temperature") is not None]
    except Exception:  # noqa: BLE001  – zweite Meinung ist optional
        mos = []
    try:
        al = get("https://api.brightsky.dev/alerts?lat=%s&lon=%s&tz=Europe/Berlin" % (LAT, LON))
        alerts = [{k: a.get(k) for k in ("event_de", "headline_de", "description_de",
                                          "severity", "onset", "expires")}
                  for a in al.get("alerts", [])]
    except Exception:  # noqa: BLE001
        alerts = None

    data = {"fetched": now.isoformat(timespec="minutes"), "om": om, "mos": mos, "alerts": alerts}
    blob = json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")

    html = open(path, encoding="utf-8").read()
    new, n = re.subn(r'(<script id="wx-data" type="application/json">)(.*?)(</script>)',
                     lambda m: m.group(1) + blob + m.group(3), html, count=1, flags=re.S)
    if n != 1:
        raise SystemExit("Datenblock <script id=\"wx-data\"> nicht gefunden")
    open(path, "w", encoding="utf-8").write(new)

    print(summary(om, alerts, now))


def summary(om, alerts, now):
    """Gleiche Faustregel wie die Seite: Ampel + Heizstart für die kommende Nacht."""
    h = om["hourly"]
    hrs = [(datetime.fromisoformat(t), h["temperature_2m"][i], h["wind_speed_10m"][i], h["wind_gusts_10m"][i])
           for i, t in enumerate(h["time"])]
    days = {}
    for t, temp, *_ in hrs:
        days.setdefault(t.date(), []).append(temp)
    mean = {k: sum(v) / len(v) for k, v in days.items()}
    today = now.date()
    d = [today + timedelta(days=k) for k in range(3)]

    def night(day):
        a = datetime.combine(day, datetime.min.time()).replace(hour=18)
        b = a + timedelta(hours=15)
        hs = [x for x in hrs if a <= x[0] <= b]
        if len(hs) < 10:
            return None
        lo = min(hs, key=lambda x: x[1])
        return {"min": lo[1], "at": lo[0], "wind": max(x[2] for x in hs), "gust": max(x[3] for x in hs)}

    nights = [n for n in (night(x) for x in d) if n]
    min_n = min(n["min"] for n in nights[:2])
    gt = {k: (20 - v if v < 15 else 0) for k, v in mean.items()}
    drop48 = min(mean.get(d[1], 0) - mean.get(d[0], 0), mean.get(d[2], 0) - mean.get(d[0], 0))
    gt_rise = max(gt.get(d[1], 0) - gt.get(d[0], 0), gt.get(d[2], 0) - gt.get(d[1], 0))
    sun = {k: v / 3600 for k, v in zip(om["daily"]["time"], om["daily"]["sunshine_duration"])}
    cold_windy = any(n["min"] < 8 and n["wind"] > 20 for n in nights[:2]) and \
        any(sun.get(x.isoformat(), 9) < 2 for x in d[:2])
    lvl, why = 0, []
    if min_n < 5: lvl, _ = max(lvl, 1), why.append("Nacht bis %.1f °C" % min_n)
    if drop48 <= -4: lvl, _ = max(lvl, 1), why.append("Tagesmittel %.1f K in 48 h" % drop48)
    if cold_windy: lvl, _ = max(lvl, 1), why.append("kalt + windig")
    if min_n <= 0: lvl = max(lvl, 2)
    if drop48 <= -6: lvl = max(lvl, 2)
    if gt_rise >= 5: lvl, _ = max(lvl, 2), why.append("Gradtagzahl +%.1f Kd" % gt_rise)
    if min_n <= -5: lvl = 3
    import re as _re
    rel = [a for a in (alerts or []) if _re.search("frost|sturm|orkan|glätte|glatteis|kälte|schnee|wind",
                                                  (a.get("event_de") or ""), _re.I)]
    if rel:
        lvl = max(lvl, 3 if any(a.get("severity") in ("severe", "extreme") for a in rel) else 2)
        why.append("DWD: " + ", ".join(a.get("event_de") for a in rel))
    names = ["🟢 Ruhig", "🟡 Vorwarnung", "🟠 Heiz-Alarm", "🔴 Frost/Sturm"]
    n0 = nights[0]
    lead = min(6, max(3, 3 + max(0, (20 - n0["min"]) - 12) / 12 * 3 + (0.5 if n0["gust"] > 40 else 0)))
    dmax = max(days.get(today, [n0["min"]]))
    peak_t = max((x for x in hrs if x[0].date() == today and 10 <= x[0].hour <= 18), key=lambda x: x[1],
                 default=(n0["at"], dmax))
    mid = n0["min"] + (peak_t[1] - n0["min"]) / 2
    onset = next((x[0] for x in hrs if x[0] > peak_t[0] and x[1] <= mid), n0["at"])
    start = onset - timedelta(hours=lead)
    parts = ["%s · heute %.0f/%.0f °C" % (names[lvl], min(days[today]), max(days[today])),
             "Nacht bis %.1f °C gegen %s Uhr" % (n0["min"], n0["at"].strftime("%H:%M"))]
    if lvl:
        parts.append("Fußbodenheizung ab %s Uhr hochstellen" % start.strftime("%H:00"))
    if len(nights) > 1:
        parts.append("morgen Nacht %.1f °C" % nights[1]["min"])
    if why:
        parts.append("(" + "; ".join(why) + ")")
    return "AMPEL: " + " · ".join(parts)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "index.html")
