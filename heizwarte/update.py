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


def get(url, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "heizwarte-buerg/1.0"})
            with urllib.request.urlopen(req, timeout=25) as r:
                return json.load(r)
        except Exception as e:  # noqa: BLE001
            if i == tries - 1:
                raise
            time.sleep(5 * (i + 1))


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

    d = om["daily"]
    print("OK", now.strftime("%d.%m.%Y %H:%M"), "| Tage:", list(zip(d["time"], d["temperature_2m_min"],
          d["temperature_2m_max"])), "| Warnungen:", len(alerts or []))


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "index.html")
