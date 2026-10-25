# Erzeugt mw4/daten/waffen.json – die einzige Datenquelle der App.
# Pflege: Werte hier ändern, datenVersion hochzählen, dann `python tools/mw4/build.py` (ruft dieses Skript auf).
import json, sys, pathlib

OUT = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else pathlib.Path(__file__).resolve().parents[2] / "mw4" / "daten" / "waffen.json"

PATCH = "launch-2026-10-23"

Q = {
    "cod_launch": ("Call of Duty – Launch-Patchnotes MW4", "https://www.callofduty.com/patchnotes/2026/10/call-of-duty-modern-warfare-4-launch-patch-notes"),
    "cod_de_blog": ("Call of Duty – Launch-Blog (DE): Waffen, Ausrüstung, Klassen", "https://www.callofduty.com/de/blog/2026/10/call-of-duty-modern-warfare-4-launch-multiplayer-operators-weapons-equipment-create-a-class"),
    "cod_beta": ("Call of Duty – Beta-Patchnotes MW4", "https://www.callofduty.com/patchnotes/2026/08/call-of-duty-modern-warfare-4-beta-patch-notes"),
    "codmunity": ("CODMunity – MW4 Meta", "https://codmunity.gg/mw4"),
    "codmunity_ttk": ("CODMunity – MW4 TTK", "https://codmunity.gg/ttk/mw4"),
    "codmunity_stats": ("CODMunity – MW4 Waffenwerte", "https://codmunity.gg/weapon-stats/mw4"),
    "codmunity_tier": ("CODMunity – MW4 Tierliste", "https://codmunity.gg/tier-list/mw4"),
    "codmunity_perks": ("CODMunity – MW4 Extras-Tierliste", "https://codmunity.gg/perk-tier-list/mw4"),
    "codmunity_dmz": ("CODMunity – MW4 DMZ-Meta", "https://codmunity.gg/mw4-dmz"),
    "codmunity_api": ("CODMunity – Hilfe (keine Activision-API)", "https://codmunity.gg/help/en"),
    "ggranked": ("ggranked – MW4 Meta (ZV, Sprint→Feuer, Gesamt-TTK)", "https://ggranked.com/games/call-of-duty-modern-warfare-4/meta"),
    "mobalytics": ("Mobalytics – MW4 beste Waffen", "https://mobalytics.gg/gamebase/guides/mw4-best-weapons"),
    "wzstats_m4": ("WZStats – M4 Loadout", "https://wzstats.gg/best-loadouts/m4-mw4"),
    "wzstats_perks": ("WZStats – Extras-Tierliste", "https://wzstats.gg/mw4/loadouts/best-perks-tier-list"),
    "gamespot": ("GameSpot – Beste MW4-Loadouts", "https://www.gamespot.com/articles/best-loadouts-in-call-of-duty-modern-warfare-4-multiplayer/"),
    "gamerant_han": ("GameRant – Han 86 Build", "https://gamerant.com/call-of-duty-cod-modern-warfare-4-mw4-best-meta-han-86-loadout-build/"),
    "gamerant_vel": ("GameRant – VEL 46 Build", "https://gamerant.com/call-of-duty-cod-modern-warfare-4-mw4-best-meta-vel-46-loadout-build/"),
    "gamerant_kg7": ("GameRant – KG-7 Vulcan Build", "https://gamerant.com/call-of-duty-cod-modern-warfare-4-mw4-best-meta-kg-7-vulcan-loadout-build/"),
    "game8": ("Game8 – MW4-Guides", "https://game8.co/games/Call-of-Duty-Modern-Warfare-4/archives/630961"),
    "dotesports_unlock": ("Dot Esports – Waffen freischalten", "https://dotesports.com/call-of-duty/guides/all-mw4-weapons-unlock-guide"),
    "dotesports_rezi": ("Dot Esports – Rezi 12 Loadout", "https://dotesports.com/call-of-duty/guides/best-rezi-12-loadout-mw4"),
    "fourfansites": ("4fansites – Meta-Tierliste mit Builds (DE)", "https://www.4fansites.de/news,1682,Modern-Warfare-4-Meta-Tier-Liste-mit-den-besten-Builds"),
    "gamesgg_vel": ("games.gg – VEL 46 Loadout", "https://games.gg/call-of-duty-modern-warfare-4/guides/vel-46-best-loadout/"),
    "gamesgg_modes": ("games.gg – Alle Spielmodi", "https://games.gg/call-of-duty-modern-warfare-4/guides/call-of-duty-modern-warfare-4-all-game-modes/"),
    "gamerfuzion": ("GamerFuzion – Update 24. Oktober", "https://www.gamerfuzion.com/modern-warfare-4-october-24-patch-notes-dmz-mia-fix-exfil-helicopter-weapon-tuning/"),
    "timesaver_s1": ("Timesaver – Season-1-Roadmap", "https://timesaver.gg/blog/modern-warfare-4-season-1-release-date-november-6-roadmap"),
    "beebom": ("Beebom – Launch-Patchnotes", "https://beebom.com/call-of-duty-modern-warfare-4-launch-patch-notes/"),
    "gamesatlas": ("GamesAtlas – Waffenliste", "https://www.gamesatlas.com/cod-modern-warfare-4/weapons/"),
}


def q(key):
    t, u = Q[key]
    return {"titel": t, "url": u}


def teil(slot, name, wl=None, effekt=None):
    return {"slot": slot, "name": name, "wl": wl, "effekt": effekt}


def build(modus, titel, quellen, teile, konfidenz="mittel", vollstaendig=True, hinweis=None):
    return {"modus": modus, "titel": titel, "quellen": quellen, "konfidenz": konfidenz,
            "vollstaendig": vollstaendig, "patch": PATCH, "teile": teile, "hinweis": hinweis}


def apex(en, de, effekt, blockt, extra=None):
    return {"name": {"en": en, "de": de}, "effekt": effekt, "blockt": blockt, "extra": extra}


WAFFEN = []


def W(id, klasse, de, en=None, *, unlock, unlock_alt=None, maxlvl, mag=None, res=None, rpm=None,
      feuer=None, tier=None, tier_abw=None, pick=None, werte=None, ttk=None, abfall=None,
      kopf15=None, apx=None, builds=None, hinweise=None, beta=None, hc=False, quellen=None):
    WAFFEN.append({
        "id": id, "klasse": klasse, "name": {"de": de, "en": en or de},
        "freischaltung": {"level": unlock, "alt": unlock_alt},
        "maxLevel": maxlvl, "magazin": mag, "reserve": res, "rpm": rpm, "feuerart": feuer,
        "tier": tier, "tierAbweichung": tier_abw, "nutzung": pick,
        "werte": werte or {}, "ttk": {"core": ttk, "abfall": abfall, "kopfZuerst15": kopf15,
                                       "quelle": "CODMunity (Launch-Daten, 23.10.2026)", "patch": PATCH,
                                       "konfidenz": "mittel"} if (ttk or kopf15) else None,
        "hcModell": hc, "apex": apx, "builds": builds or [], "hinweise": hinweise or [],
        "beta": beta or [], "quellen": quellen or [],
    })


def werte(quelle="CODMunity / ggranked", **kw):
    d = {k: v for k, v in kw.items() if v is not None}
    d["quelle"] = quelle
    d["patch"] = PATCH
    d["konfidenz"] = "mittel"
    return d


# ---------- Sturmgewehre ----------
W("han-86", "ar", "Han 86", unlock=4, maxlvl=72, mag=30, res=90, rpm=740, tier="S", pick=36.6, hc=True,
  werte=werte(zv=250, zvBuild=263, stf=210, stfBuild=225, geschossBuild=738, nachladen=3133, bewegungBuild=4.53),
  ttk=[243, 254, 355, 409], abfall="36,1 m", kopf15=243,
  apx=apex("Han X20 Skybreaker", "Han X20 Himmelsbrecher", "20-mm-Airburst-Granatwerfer", ["Visier", "Schaft", "Lauf"]),
  builds=[
      build("Core", "Vielseitig", [q("codmunity")], [
          teil("Mündung", "XRK Mil-Tac Suppressor", 44),
          teil("Lauf", "SA H86 465mm", 68, "−4 % Rückstoß, +29 % Reichweite, +20 % Geschossgeschw."),
          teil("Laser", "XRK Clutch-LS", 3),
          teil("Visier", "ZLR Type C", 27),
          teil("Griff", "XRK Justice II Grip", 14)], hinweis="EaseScore 8,7 – am leichtesten zu kontrollieren."),
      build("Core", "Alternative (DE-Namen)", [q("fourfansites")], [
          teil("Mündung", "FSS IS300"), teil("Laser", "Schlager Visiv-5"), teil("Unterlauf", "FSS-Fireline-Griff"),
          teil("Schaft", "Meiko-L9P-Klappschaft"), teil("Griff", "Hanbit H86-Griff")]),
      build("DMZ", "DMZ", [q("gamerant_han")], [
          teil("Mündung", "FSS IS300"), teil("Lauf", "Hanbit RK8 406mm"), teil("Unterlauf", "FSS Fireline Grip"),
          teil("Magazin", "60-Schuss-Trommel"), teil("Visier", "SZ SRE-7")]),
  ],
  hinweise=["Höchste Nutzungsrate und schnellste AR-TTK bis 40 m – wahrscheinlichstes Ziel des ersten Nerfs.",
            "Der Apex blockiert Visier, Schaft und Lauf: Nutzwert, kein Gunfight-Meta."],
  beta=["Kopfschuss-Multiplikator in der Beta 1,4 → 1,25 gesenkt (Launch-Wert nicht veröffentlicht).",
        "Beta-Patch 31.08.: Sprint→Feuer 210 → 185 ms. Zum Launch wieder 210 ms gemessen – 185 ms ist veraltet."],
  quellen=[q("codmunity"), q("ggranked"), q("cod_de_blog")])

W("m4", "ar", "M4", unlock=14, maxlvl=72, mag=30, res=90, rpm=810, tier="S", pick=16.5, hc=True,
  werte=werte(zv=240, zvBuild=249, stf=210, stfBuild=225, geschoss=590, geschossBuild=702, nachladen=2600,
              bewegung=4.70, rueckH=17.1, rueckV=40.6, kopf=1.2),
  ttk=[296, 320, 405, 462], abfall="31 m", kopf15=296,
  apx=apex("M4 Hurricane", "M4 Hurricane", "5,7×28-mm-Toploader mit höherer Kadenz", ["Lauf", "Magazin"],
           "Mit Apex: ZV 250 ms, Sprint→Feuer 168 ms (ggranked)."),
  builds=[
      build("Core", "Vielseitig", [q("codmunity")], [
          teil("Mündung", "XRK Mil-Tac Suppressor"), teil("Lauf", '18" LE Crosswind'), teil("Laser", "SA Laz-500"),
          teil("Visier", "ZLR Type C"), teil("Schaft", "Demo Dozer Stock")]),
      build("Core", "Alternative (DE-Namen)", [q("wzstats_m4"), q("fourfansites")], [
          teil("Mündung", "FSS IS300"), teil("Unterlauf", "FSS-Fireline-Griff"), teil("Griff", "ZLR-Phasengriff"),
          teil("Schaft", "ZLR ASP50-Schaft"), teil("Laser", "SA LAZ-500")]),
      build("Apex", "Hurricane", [q("game8")], [
          teil("Apex", "M4 Hurricane", 72), teil("Mündung", "FTAC Dominion"),
          teil("Aufsatz", "Hurricane Grip", None, "Slot in der Quelle nicht genannt"),
          teil("Griff", "ZLR Phase Grip"), teil("Schaft", "Demo Dozer Stock"), teil("Laser", "SA Laz-500")]),
      build("DMZ", "DMZ", [q("codmunity_dmz"), q("wzstats_m4")], [
          teil("Mündung", "FSS IS300"), teil("Lauf", '18" LE Crosswind'), teil("Unterlauf", "FSS Fireline Grip"),
          teil("Magazin", "60 Schuss"), teil("Visier", "IOTA-D")]),
      build("Hardcore", "Two-Shot-Kill", [q("codmunity")], [], konfidenz="niedrig", vollstaendig=False,
            hinweis="CODMunity listet zwei Hardcore-Two-Shot-Kill-Builds. Die Aufsätze sind nur in der CODMunity-App sichtbar."),
  ],
  hinweise=["Sicherster Allrounder – erste Wahl, falls die Han 86 generft wird.",
            "Kimme und Korn sind brauchbar: esports.gg spielt den Build ganz ohne Visier."],
  beta=["Kopfschuss-Multiplikator in der Beta 1,5 → 1,2 gesenkt."],
  quellen=[q("codmunity"), q("ggranked"), q("wzstats_m4"), q("game8")])

W("hyeon-burst", "ar", "Hyeon Salve", "Hyeon Burst", unlock=21, maxlvl=68, mag=30, res=90, rpm=375, feuer="Feuerstoß",
  tier="A", tier_abw="CODMunity: A · Mobalytics: C", pick=2.8,
  werte=werte("ggranked", zv=275, stf=210),
  ttk=[320, 439, 667, 719], abfall="19 / 38,9 m", kopf15=320,
  apx=apex("Hyeon Hyperburst", "Hyeon Hyperburst", "3er-Feuerstoß, danach Automatik", []),
  hinweise=["375 RPM beziehen sich auf den Feuerstoß-Modus.", "DMZ-Meta-Pick (CODMunity)."],
  quellen=[q("codmunity"), q("mobalytics"), q("ggranked")])

W("patriot-xmr", "ar", "Patriot XMR", unlock=27, maxlvl=72, mag=25, res=100, rpm=645, tier="A", pick=1.5, hc=True,
  werte=werte("ggranked", zv=280, stf=210),
  ttk=[279, 320, 419, 483], abfall="27,9 / 45 m", kopf15=279,
  apx=apex("Patriot XMR Volt", "Patriot XMR Volt", "Betäubungspfeil-Werfer", ["Lauf"]),
  quellen=[q("codmunity"), q("mobalytics"), q("ggranked")])

W("kastov-762", "ar", "Kastov 762", unlock=34, maxlvl=68, mag=30, res=90, rpm=600, tier="A", pick=3.8, hc=True,
  werte=werte("CODMunity", zv=280, stf=210, geschoss=560, nachladen=3467, sprint=6.05, rueckH=28.7, rueckV=51.9),
  ttk=[300, 317, 457, 529], abfall="21,8 / 36,4 m", kopf15=200,
  apx=apex("Kastov ARC", "Kastov ARC", "HF-Impuls-Disruptor", ["Lauf"]),
  builds=[build("Core", "Vielseitig (teilweise)", [q("codmunity")], [
      teil("Laser", "XRK Clutch-LS"), teil("Schaft", "Hanbit 655L-M Stock"), teil("Unterlauf", "FSS Fireline Grip")],
      vollstaendig=False, hinweis="Drei weitere Aufsätze sind öffentlich nicht einsehbar.")],
  hinweise=["Härtester Rückstoß aller Sturmgewehre – der FSS Fireline Grip ist Pflicht.",
            "Belohnt Kopf-zuerst-Zielen am stärksten: 200 ms auf 15 m (Basiswaffe, ohne Aufsätze).",
            "Der Beta-Apex „Kastov 545“ wurde zum Launch entfernt. Launch-Apex ist Kastov ARC."],
  beta=["Kopfschuss-Multiplikator in der Beta 1,48 → 1,35 gesenkt."],
  quellen=[q("codmunity"), q("cod_launch")])

W("oden", "ar", "Oden", unlock=39, maxlvl=65, mag=20, res=60, rpm=413, tier="B", hc=True,
  werte=werte("ggranked", zv=320, stf=210),
  ttk=[290, 291, 327, 385], abfall="29,7 / 45 m",
  apx=apex("Oden Sentinel", "Oden-Wächter", "Halbautomatische Scharfschützen-Umrüstung", ["Lauf", "Mündung"]),
  hinweise=["Flachste TTK-Kurve aller Sturmgewehre ab 40 m."],
  quellen=[q("codmunity"), q("ggranked")])

W("axion", "ar", "Axion", unlock=52, maxlvl=69, mag=30, res=90, rpm=705, tier="A", hc=True,
  werte=werte("CODMunity", zv=260, stf=210, geschoss=400, nachladen=3333, sprint=6.11, rueckH=13.7, rueckV=48.9),
  ttk=[255, 327, 440, 540], abfall="20,7 / 30,6 m",
  apx=apex("Axion Reaver", "Axion Reaver", "Hüftfeuer-Umrüstung (auch als „Axion Clearcut“ gelistet)",
           ["Visier", "Laser", "Unterlauf", "Schaft", "Griff"]),
  quellen=[q("codmunity"), q("mobalytics")])

W("cronen-squall", "ar", "Cronen Squall", unlock=55, maxlvl=67, mag=20, res=80, rpm=673, tier="B", hc=True,
  werte=werte("ggranked / CODMunity", zv=305, stf=210, openBolt=45),
  ttk=[312, 312, 421, 482], abfall="30,7 / 43,7 m",
  apx=apex("Cronen Maelstrom", "Cronen Maelstrom", "Gelenkte Rakete", ["Laser", "Unterlauf"]),
  quellen=[q("codmunity"), q("ggranked")])

# ---------- Maschinenpistolen ----------
W("iso-nightshade", "smg", "ISO Nachtschatten", "ISO Nightshade", unlock=4, maxlvl=64, mag=30, res=90, rpm=923,
  tier="S", pick=7.1, hc=True,
  werte=werte("CODMunity", zv=240, stf=110, geschoss=530, nachladen=3267, bewegung=4.80, rueckH=13.3, rueckV=40.9, kopf=1.3),
  ttk=[260, 400, 518, 594], abfall="11 / 20 / 28 m",
  apx=apex("ISO Trace", "ISO Trace", "Zielverfolgungs-Munition", ["Visier", "Munition"]),
  builds=[
      build("Core", "Vielseitig (teilweise)", [q("codmunity")], [
          teil("Mündung", "XRK Herder 40", 17), teil("Schaft", "EXP G2-44 Stock", 5), teil("Griff", "Demo STP-1", 6),
          teil("Unterlauf", "FSS Fireline Grip", 23)], vollstaendig=False, hinweis="Fünfter Aufsatz nicht öffentlich."),
      build("Core", "Alternative (DE-Namen)", [q("fourfansites")], [
          teil("Mündung", "FSS Crackdown"), teil("Lauf", "ZLR Carbon-900"), teil("Unterlauf", "FSS-Tac90-Griff"),
          teil("Griff", "Demo STP-1"), teil("Schaft", "GI-80-Militärschaft")]),
  ],
  hinweise=["Gute Kimme und Korn (GameRant, noch vor dem Launch geschrieben) – erst ohne Visier testen.",
            "Zum Launch wurden MPs auf Nah- und Mitteldistanz verstärkt."],
  beta=["Beta-Patch 31.08.: max. Schaden 20 → 21, Kopf-Multiplikator 1,25 → 1,3."],
  quellen=[q("codmunity"), q("fourfansites")])

W("vel-46", "smg", "VEL 46", unlock=5, unlock_alt=13, maxlvl=60, mag=40, res=120, rpm=952, tier="S", pick=17.6, hc=True,
  werte=werte("CODMunity / games.gg", zv=230, stf=110, nachladen=2633, bewegung=4.77),
  ttk=[252, 367, 480, 539], abfall="12,8 / 21,8 / 32 m",
  apx=apex("VEL 46 Snap", "VEL 46 Snap", "Trageriemen für schnellen Waffenwechsel; mit Overkill Quick-Draw", ["Schaft"],
           "+4 % Bewegung, +8 % Bewegung beim Zielen, aber +30 % Rückstoß."),
  builds=[
      build("Core", "Vollständig", [q("gamespot")], [
          teil("Mündung", "XRK Herder 40"), teil("Lauf", "VB-46 Series 11"), teil("Laser", "XRK Clutch-LS"),
          teil("Griff", "V46 R-Skel Grip"), teil("Unterlauf", "FSS Fireline Grip")]),
      build("Apex", "Snap", [q("codmunity"), q("gamesgg_vel")], [
          teil("Mündung", "XRK Herder 40", 51),
          teil("Lauf", "VB-46 Series 11", 3, "+28 % Reichweite, +20 % Geschossgeschw."),
          teil("Unterlauf", "FSS Fireline Grip", 10),
          teil("Apex", "VEL 46 Snap", 60, "+4 % Bewegung, +8 % Bewegung beim Zielen, +30 % Rückstoß")],
          vollstaendig=False, hinweis="Laser und Griff nennt die Quelle nicht."),
      build("Hardcore", "Two-Shot-Kill", [q("codmunity")], [], konfidenz="niedrig", vollstaendig=False,
            hinweis="CODMunity listet einen Hardcore-Two-Shot-Kill-Build. Die Aufsätze sind nur in der CODMunity-App sichtbar."),
  ],
  hinweise=["Snap nur mit Overkill spielen – sonst frisst der Rückstoß-Malus den Bewegungsbonus.",
            "Freischaltung widersprüchlich: offizielle Tabelle Level 5, Waffenkarte Level 13."],
  quellen=[q("codmunity"), q("gamespot"), q("gamesgg_vel"), q("gamerant_vel")])

W("wz55-striga", "smg", "Wz.55 Striga", unlock=18, unlock_alt=21, maxlvl=60, mag=25, res=75, rpm=651, tier="B", pick=1.1, hc=True,
  werte=werte("ggranked / CODMunity", zv=196, stf=96, openBolt=64),
  ttk=[340, 473, 606, 694], abfall="13,9 / 26,5 / 37,8 m",
  apx=apex("WZ.55 Striga Rampage", "WZ.55 Striga Rampage", "Beidhändig (Akimbo)", ["Visier", "Schaft", "Unterlauf"]),
  hinweise=["Schnellste ZV-Zeit aller MPs (196 ms) und schnellstes Sprint→Feuer (96 ms)."],
  quellen=[q("codmunity"), q("ggranked")])

W("ppsh-41", "smg", "PPSh-41", unlock=30, unlock_alt=27, maxlvl=62, mag=71, res=71, rpm=1110, tier="B", hc=True,
  werte=werte("CODMunity", zv=300, stf=110, geschoss=550, nachladen=3900, sprint=6.18, rueckH=16.9, rueckV=38.6, openBolt=37),
  ttk=[307, 407, 517, 582], abfall="12,1 / 22 / 31,9 m",
  apx=apex("PPSh-41 Ember", "PPSh-41 Ember", "Brandgeschoss-Werfer", ["Lauf", "Unterlauf", "Magazin"]),
  builds=[build("Core", "Anker-Aufsatz", [q("codmunity")], [
      teil("Schaft", "Hanbit Janggun-H9", None, "−8 % Rückstoß, +7 % ZV-Geschwindigkeit")],
      vollstaendig=False, hinweis="Restlicher Build ist öffentlich nicht einsehbar.")],
  hinweise=["Höchste Kadenz im Spiel (1.110 RPM) – rechnerisch schnellste Hardcore-TTK.", "DMZ-Meta-Pick (CODMunity)."],
  beta=["Beta-Patch 31.08.: Reichweite für max. Schaden 0–10,4 → 0–10,8 m."],
  quellen=[q("codmunity"), q("codmunity_dmz")])

W("x58-nyx", "smg", "X-58 Nyx", unlock=46, unlock_alt=34, maxlvl=53, mag=40, res=120, rpm=800, tier="A", hc=True,
  werte=werte("ggranked", zv=255, stf=110),
  ttk=[300, 462, 608, 697], abfall="11 / 20 / 30 m",
  apx=apex("X-58 Void", "X-58 Void", "Unterschall-Stealth-Umrüstung", ["Lauf", "Munition"]),
  hinweise=["Integrierter Schalldämpfer: Schüsse tauchen nicht auf der Minimap auf – stark in Hardcore."],
  quellen=[q("codmunity"), q("ggranked")])

# ---------- Schrotflinten ----------
W("rezi-12", "sg", "Rezi 12", unlock=4, maxlvl=60, mag=6, res=24, rpm=150, tier="A",
  werte=werte("CODMunity", zv=340, stf=160, nachladen=6131, bewegung=4.72, kopf=1.0),
  apx=apex("Rezi 12 Enforcer", "Rezi 12 Vollstrecker", "Pump-Action plus Explosiv-Slugs", []),
  builds=[build("Core", "Anker-Aufsatz", [q("codmunity")], [teil("Schaft", "ZLR Tac12 Pro")], vollstaendig=False,
                hinweis="Restliche Aufsätze öffentlich nicht einsehbar.")],
  hinweise=["Klassen-Setup laut Dot Esports: Ghost · Ninja · Kampfgestählt · Stim · Wurfmesser · Sucherdrohne.",
            "Keine Kopfschuss-Boni (Multiplikator 1,0)."],
  quellen=[q("codmunity"), q("dotesports_rezi")])

W("warlord", "sg", "Kriegsherr", "Warlord", unlock=32, maxlvl=60, mag=14, res=42, rpm=105, tier="B",
  apx=apex("Warlord Lumen", "Warlord Lumen", "Blendendes Stroboskop beim Zielen", ["Visier", "Laser"]),
  hinweise=["DMZ-Meta-Pick (CODMunity)."],
  quellen=[q("codmunity_dmz"), q("cod_de_blog")])

# ---------- LMGs ----------
W("finn-lmg", "lmg", "FiNN LMG", unlock=4, maxlvl=59, mag=100, res=100, rpm=587, tier="B", hc=True,
  werte=werte("CODMunity", zv=400, stf=237, geschoss=710, nachladen=6270, bewegung=4.38, rueckH=17.3, rueckV=49, openBolt=50),
  ttk=[356, 357, 391, 447], abfall="22 / 44 m",
  apx=apex("FiNN Adverse", "FiNN Adverse", "Höhere Kadenz, kann überhitzen", []),
  builds=[build("Core", "Vielseitig", [q("gamespot"), q("codmunity")], [
      teil("Mündung", "XRK Mil-Tac Suppressor"), teil("Laser", "SZ Gen.6 PEQ"), teil("Visier", "ZLR Type C"),
      teil("Aufsatz", "EXP Bulldog-9", None, "Slot in der Quelle nicht genannt"),
      teil("Aufsatz", "XRK Singularity-13", None, "Slot in der Quelle nicht genannt")])],
  hinweise=["Die CODMunity-Einzelseite zeigt 306 ms (0–10 m) statt 356 ms – anderer Build bzw. Trefferzone."],
  beta=["Max. Schaden in der Beta 39 → 33 → 30 gesenkt."],
  quellen=[q("codmunity"), q("gamespot")])

W("type-73", "lmg", "Typ 73", "Type 73", unlock=9, maxlvl=65, mag=60, res=60, rpm=821, tier="A",
  tier_abw="CODMunity: A · Mobalytics: C", hc=True,
  werte=werte("ggranked / CODMunity", zv=460, stf=245, openBolt=57),
  ttk=[276, 327, 386, 444], abfall="19,6 / 37,4 m",
  apx=apex("Type 73 Assault", "Typ 73 (Sturm)", "Explosives Top-Magazin", ["Magazin", "Munition"]),
  hinweise=["Die CODMunity-Einzelseite zeigt 219 ms (0–10 m) – anderer Build bzw. Trefferzone."],
  beta=["Beta-Patch 31.08.: max. Schaden 28 → 22."],
  quellen=[q("codmunity"), q("mobalytics")])

W("apoc-338", "lmg", "APOC-338", unlock=44, maxlvl=56, mag=50, res=100, rpm=554, tier="A", hc=True,
  werte=werte("ggranked / CODMunity", zv=510, stf=250, openBolt=75),
  ttk=[291, 292, 323, 378], abfall="20,9 / 45,5 m",
  apx=apex("APOC-338 Praetor", "APOC-338 Praetor", "Halbautomatischer 10-Schuss-Gurt", ["Magazin"]),
  hinweise=["Zusammen mit der Oden die flachste TTK-Kurve auf Distanz."],
  quellen=[q("codmunity"), q("mobalytics")])

# ---------- DMR ----------
W("mar-9", "dmr", "MAR-9", unlock=4, maxlvl=73, mag=20, res=60, rpm=315, tier="B",
  werte=werte("ggranked", zv=330, stf=249),
  ttk=[297, None, 411, None],
  apx=apex("MAR-9 Auto", "MAR-9 Autom.", "Vollautomatik", ["Abzug"]),
  quellen=[q("codmunity"), q("ggranked")])

W("oris-86", "dmr", "Oris 8,6", "Oris 8.6", unlock=11, maxlvl=70, mag=10, res=30, rpm=89, tier="A",
  werte=werte("CODMunity", zv=260, stf=150, nachladen=3000),
  ttk=[None, None, 692, None],
  apx=apex("Oris 8.6 Razor", "Oris 8.6 Razor", "Drei Wurfmesser", ["Unterlauf"]),
  builds=[build("Core", "Anker-Aufsätze", [q("codmunity"), q("fourfansites")], [
      teil("Laser", "XRK Clutch-LS"), teil("Visier", "SZ Micro D-3"), teil("Mündung", "EXP Undertow")],
      vollstaendig=False, hinweis="Restliche Aufsätze öffentlich nicht einsehbar.")],
  quellen=[q("codmunity"), q("fourfansites")])

W("mosin-nagant", "dmr", "Mosin-Nagant", unlock=36, maxlvl=69, mag=5, res=15, rpm=44, tier="A",
  werte=werte("CODMunity", zv=350, stf=240, geschoss=700, nachladen=3333, bewegung=4.57),
  apx=apex("Mosin Harpoon", "Mosin-Harpune", "Ballistisches Bajonett", ["Lauf", "Mündung"]),
  hinweise=["One-Shot-Fenster: 177 ms bei 15–40 m (CODMunity)."],
  quellen=[q("codmunity")])

# ---------- Scharfschützengewehre ----------
W("kg7-vulcan", "sniper", "KG-7 Vulcan", unlock=4, maxlvl=75, mag=10, res=20, rpm=41, tier="S", pick=5.1,
  werte=werte("ggranked / CODMunity", zv=550, stf=270, geschoss=636),
  apx=apex("KG-7 Drillcharge", "KG-7 Bohrladung", "Explosive Bohrgeschosse", []),
  builds=[
      build("Core", "Core", [q("gamerant_kg7")], [
          teil("Lauf", "Haebang Naseon V.5"), teil("Laser", "Schlager Visiv-5"), teil("Verschluss", "KT76 Light Bolt"),
          teil("Schaft", "TT G76-RP Stock"), teil("Schaftrücken", "Haebang YNC-45")]),
      build("DMZ", "DMZ", [q("gamerant_kg7")], [
          teil("Aufsatz", "TT Solgae F7", None, "Slot in der Quelle nicht genannt"), teil("Lauf", 'Haebang RMT762 29"'),
          teil("Laser", "XRK Clutch-LS"), teil("Munition", "7.62x54mmR High Velocity"), teil("Schaftrücken", "Haebang YNC-45")]),
  ],
  hinweise=["One-Shot-Reichweite unbegrenzt (CODMunity).", "Meistgenutzter Sniper mit der besten Handhabung seiner Klasse."],
  quellen=[q("codmunity"), q("gamerant_kg7"), q("ggranked")])

W("astaroth-57", "sniper", "Astaroth .57", unlock=25, unlock_alt=10, maxlvl=54, mag=3, res=9, rpm=34, tier="B",
  werte=werte("ggranked", zv=603, stf=500),
  apx=apex("Astaroth .57 Infiltrator", "Astaroth .57 Infiltrator", "Wanddurchdringendes Radar; Magazin auf 1 reduziert", ["Visier"]),
  quellen=[q("ggranked"), q("cod_de_blog")])

W("signal-50", "sniper", "Signal 50", unlock=50, unlock_alt=35, maxlvl=74, mag=7, res=21, rpm=111, tier="A",
  werte=werte("ggranked", zv=590, stf=283),
  apx=apex("Signal Inferno", "Signal-Inferno", "Brandmunition .50", ["Munition"]),
  hinweise=["One-Shot-Kandidat für Hardcore – im Schießstand prüfen."],
  quellen=[q("ggranked"), q("codmunity_tier")])

# ---------- Pistolen ----------
W("sang-9mm", "pistole", "SANG 9mm", unlock=4, maxlvl=38, mag=13, res=39, rpm=370, tier="A",
  werte=werte("ggranked", zv=170, stf=80),
  ttk=[364, None, 632, None],
  apx=apex("SANG Breach", "SANG-Durchbruch", "Unterlauf-Schrotflinte, Kaliber 12", ["Laser"]),
  hinweise=["GameSpot empfiehlt Aufsätze für Reichweite, Geschossgeschwindigkeit, Magazin und Schalldämpfer – die genauen Namen sind nicht verifiziert."],
  quellen=[q("gamespot"), q("ggranked")])

W("krait-p68", "pistole", "Krait P68", unlock=7, maxlvl=38, mag=10, res=40, rpm=260, tier="A",
  werte=werte("ggranked", zv=180, stf=80),
  ttk=[195, None, None, None],
  apx=apex("Krait P68 Commando", "Krait P68 Kommando", "Integriertes Messer", []),
  hinweise=["Schnellste Pistolen-TTK im Nahbereich (195 ms).", "Häufigste Sekundärwaffe in Klassen-Setups.",
            "Hieß in der Beta „Karit P68“."],
  quellen=[q("codmunity"), q("ggranked")])

W("gs-50", "pistole", ".50 GS", unlock=41, maxlvl=37, mag=7, res=21, rpm=166, tier="B",
  werte=werte("ggranked", zv=200, stf=80),
  apx=apex("GS Magna", "GS Magna", "Vollautomatik", ["Abzug"]),
  builds=[build("Hardcore", "One-Shot-Kill", [q("codmunity")], [], konfidenz="niedrig", vollstaendig=False,
                hinweis="CODMunity listet einen Hardcore-One-Shot-Kill-Build. Die Aufsätze sind nur in der CODMunity-App sichtbar.")],
  hinweise=["Mit Apex GS Magna die schnellste Gesamt-TTK aller gemessenen Waffen (674 ms, ggranked)."],
  quellen=[q("codmunity"), q("ggranked")])

W("mojave-357", "pistole", "Mojave .357", unlock=48, maxlvl=44, mag=8, res=32, rpm=141, tier="B",
  werte=werte("ggranked", zv=190, stf=80),
  ttk=[300, None, 720, None],
  apx=apex("Mojave Lawless", "Mojave Lawless", "Hammer-Fanning im Hüftfeuer", ["Abzug"]),
  quellen=[q("codmunity"), q("ggranked")])

# ---------- Werfer & Nahkampf ----------
for wid, name, ul, mag, res, rpm in [("pila", "PILA", 4, 1, 1, 8), ("rpg-8", "RPG-8", 23, 1, 1, 20),
                                     ("jokr", "JOKR", 43, 1, 1, 13), ("pm40-anvil", "PM-40 Anvil", 54, 3, 6, 38)]:
    W(wid, "werfer", name, unlock=ul, maxlvl=46, mag=mag, res=res, rpm=rpm,
      hinweise=["Keine Aufsätze und kein Apex – nur Tarnungen."], quellen=[q("cod_de_blog")])

W("fss-carbon-edge", "nahkampf", "FSS Carbon Edge 1095", unlock=4, maxlvl=46,
  hinweise=["Einzige Nahkampfwaffe zum Launch; nur Tarnungen.",
            "Mit dem Extra „Tödliche Reichweite“ nutzt die Nahkampftaste automatisch das Messer."],
  quellen=[q("cod_de_blog")])

KLASSEN = [
    {"id": "ar", "name": "Sturmgewehre", "einzahl": "Sturmgewehr", "en": "Assault Rifles", "kurz": "SG"},
    {"id": "smg", "name": "Maschinenpistolen", "einzahl": "MP", "en": "SMGs", "kurz": "MP"},
    {"id": "sg", "name": "Schrotflinten", "einzahl": "Schrotflinte", "en": "Shotguns", "kurz": "SF"},
    {"id": "lmg", "name": "Leichte MGs", "einzahl": "LMG", "en": "LMGs", "kurz": "LMG"},
    {"id": "dmr", "name": "Präzisionsgewehre", "einzahl": "DMR", "en": "Marksman Rifles", "kurz": "DMR"},
    {"id": "sniper", "name": "Scharfschützengewehre", "einzahl": "Scharfschützengewehr", "en": "Sniper Rifles", "kurz": "SSG"},
    {"id": "pistole", "name": "Pistolen", "einzahl": "Pistole", "en": "Pistols", "kurz": "PIS"},
    {"id": "werfer", "name": "Werfer", "einzahl": "Werfer", "en": "Launchers", "kurz": "WRF"},
    {"id": "nahkampf", "name": "Nahkampf", "einzahl": "Messer", "en": "Melee", "kurz": "NK"},
]


def E(id, de, en, lvl, slot, notiz=None):
    return {"id": id, "de": de, "en": en, "level": lvl, "slot": slot, "notiz": notiz}


EXTRAS = [
    E("quick-fix", "Zusammenflicken", "Quick Fix", 4, 1),
    E("overkill", "Overkill", "Overkill", 4, 1, "Ermöglicht mit der VEL 46 Snap den Quick-Draw."),
    E("high-alert", "Alarmiert", "High Alert", 8, 1),
    E("ghost", "Ghost", "Ghost", 24, 1, "Konter gegen UAVs – die halten seit Launch 150 statt 100 Schaden aus und sind schwerer abzuschießen."),
    E("resupply", "Nachschub", "Resupply", 31, 1),
    E("kill-chain", "Abschusskette", "Kill Chain", 48, 1),
    E("hardline", "Hardliner", "Hardline", 4, 2, "UAV schon nach 4 statt 5 Abschüssen."),
    E("blood-rush", "Blutrausch", "Blood Rush", 4, 2, "Enthält seit Launch den Taktischen Sprint – der ist nicht mehr Standard."),
    E("bomb-squad", "Bombenkommando", "Bomb Squad", 16, 2),
    E("fast-hands", "Flinke Hände", "Fast Hands", 20, 2),
    E("ninja", "Ninja", "Ninja", 30, 2, "Seit Launch in Extra 2 (Beta: Extra 1) – konkurriert mit Blutrausch und Flinke Hände."),
    E("birdseye", "Draufsicht", "Birdseye", 40, 2),
    E("lethal-reach", "Tödliche Reichweite", "Lethal Reach", 4, 3, "Nahkampftaste nutzt automatisch das Messer."),
    E("combat-grid", "Kampfraster", "Combat Grid", 4, 3),
    E("battle-hardened", "Kampfgestählt", "Battle Hardened", 12, 3, "Zum Launch verstärkt gegen Blend-, Erschütterungsgranate und Schreier-Mine."),
    E("scavenger", "Plünderer", "Scavenger", 28, 3),
    E("tracker", "Spurenleser", "Tracker", 32, 3),
    E("cold-blooded", "Kaltblütig", "Cold-Blooded", 36, 3),
]

AUSRUESTUNG = {
    "taktisch": [
        E("flash", "Blendgranate", "Flash Grenade", 4, "taktisch", "Reichweite und Dauer zum Launch leicht reduziert."),
        E("smoke", "Rauchgranate", "Smoke Grenade", 4, "taktisch"),
        E("snapshot", "Schnappschussgranate", "Snapshot Grenade", 10, "taktisch"),
        E("concussion", "Erschütterungsgranate", "Concussion Grenade", 15, "taktisch", "Reichweite und Dauer zum Launch leicht reduziert."),
        E("heartbeat", "Herzschlagsensor", "Heartbeat Sensor", 23, "taktisch"),
        E("shock-stick", "Schockstab", "Shock Stick", 29, "taktisch"),
        E("decoy", "Täuschgranate", "Decoy Grenade", 42, "taktisch"),
        E("stim", "Stim", "Stim", 47, "taktisch"),
        E("screamer", "Schreier-Mine", "Screamer Mine", 53, "taktisch"),
    ],
    "toedlich": [
        E("frag", "Splittergranate", "Frag Grenade", 4, "toedlich"),
        E("semtex", "Haftgranate", "Semtex", 4, "toedlich"),
        E("drill-charge", "Bohrladung", "Drill Charge", 7, "toedlich"),
        E("proximity-mine", "Näherungsmine", "Proximity Mine", 13, "toedlich"),
        E("zip-gun", "Einwegkanone", "Zip Gun", 17, "toedlich"),
        E("tripwire", "Stolperdraht", "Tripwire", 22, "toedlich"),
        E("thermite", "Thermit", "Thermite", 26, "toedlich"),
        E("molotov", "Molotow-Cocktail", "Molotov", 28, "toedlich"),
        E("claymore", "Claymore", "Claymore", 37, "toedlich"),
        E("c4", "C4", "C4", 43, "toedlich"),
        E("throwing-knife", "Wurfmesser", "Throwing Knife", 49, "toedlich"),
    ],
    "feld": [
        E("portable-radar", "Tragbares Radar", "Portable Radar", 4, "feld"),
        E("ddos", "DDOS", "DDOS", 4, "feld"),
        E("munitions-box", "Munitionskiste", "Munitions Box", 6, "feld"),
        E("sam-turret", "Boden-Luft-Geschütz", "SAM Turret", 8, "feld"),
        E("deployable-cover", "Einsatzschild", "Deployable Cover", 11, "feld"),
        E("trophy", "Trophy-System", "Trophy System", 14, "feld"),
        E("seeker-drone", "Sucherdrohne", "Seeker Drone", 19, "feld"),
        E("inflatable-decoy", "Aufblasbarer Täuschkörper", "Inflatable Decoy", 25, "feld"),
        E("smoke-wall", "Rauchwand", "Smoke Wall", 29, "feld"),
        E("recon-drone", "Aufklärungsdrohne", "Recon Drone", 33, "feld"),
        E("razor-wire", "Stacheldrahtfalle", "Razor Wire", 41, "feld"),
        E("tac-insert", "Taktikeinstieg", "Tactical Insertion", 45, "feld"),
    ],
}


def S(id, de, en, kosten, notiz=None):
    return {"id": id, "de": de, "en": en, "kosten": kosten, "notiz": notiz}


SERIEN = [
    S("uav", "Drohne", "UAV", 5, "Blog vom 19.10. nennt 4 Abschüsse, Patchnotes vom 21.10. nennen 5 (4 mit Hardliner). Die neuere Angabe gilt."),
    S("bomb-glider", "Bombengleiter", "Bomb Glider", 4),
    S("care-package", "Vorräte", "Care Package", 4),
    S("impact-warhead", "Aufprall-Sprengkopf", "Impact Warhead", 4),
    S("artillery", "Artilleriesignal", "Artillery Beacon", 6),
    S("crossfire", "Crossfire", "Crossfire", 6),
    S("assault-drone", "Kampfdrohne", "Assault Drone", 6),
    S("counter-uav", "Konterdrohne", "Counter-UAV", 6),
    S("wheelson", "Wheelson", "Wheelson", 8),
    S("missile-barrage", "Raketensalve", "Missile Barrage", 8),
    S("railgun", "Railgun-Geschütz", "Railgun Turret", 8),
    S("attack-heli", "Kampfhubschrauber", "Attack Helicopter", 10),
    S("deathstalker", "Todespirscher", "Deathstalker", 10),
    S("advanced-uav", "Verbesserte Drohne", "Advanced UAV", 10),
    S("argonaut", "Argonaut", "Argonaut", 10),
    S("gunship", "Kampfflugzeug", "Gunship", 12),
    S("airspace-denial", "Luftraumsperre", "Airspace Denial", 12),
]

LOADOUTS = [
    {"id": "core-allround", "name": "Core Allround", "rolle": "Standard-6v6, jede Karte",
     "primaer": {"waffe": "han-86", "build": "Vielseitig"}, "sekundaer": {"waffe": "krait-p68"},
     "nahkampf": "fss-carbon-edge", "taktik": "flash", "toedlich": "frag", "feld": "trophy",
     "extras": ["ghost", "blood-rush", "battle-hardened"], "serien": ["uav", "counter-uav", "attack-heli"],
     "gruende": ["Han 86: schnellste AR-TTK bis 40 m und am leichtesten zu kontrollieren.",
                 "Ghost, weil UAVs seit Launch mehr aushalten; Blutrausch für den Taktischen Sprint.",
                 "Fällt die Han 86 im ersten Tuning, einfach auf die M4 tauschen."]},
    {"id": "smg-flanker", "name": "SMG-Flanker", "rolle": "Aggressiv, Flanken, kleine Karten",
     "primaer": {"waffe": "vel-46", "build": "Vollständig"}, "sekundaer": {"waffe": "krait-p68"},
     "nahkampf": "fss-carbon-edge", "taktik": "concussion", "toedlich": "semtex", "feld": "seeker-drone",
     "extras": ["ghost", "ninja", "cold-blooded"], "serien": ["uav", "artillery", "attack-heli"],
     "gruende": ["VEL 46: zweitschnellste Nahbereichs-TTK und 110 ms Sprint→Feuer.",
                 "Ninja und Kaltblütig stehen bei CODMunity ganz oben; die Sucherdrohne passt zu Flankern.",
                 "Willst du lieber Tempo statt Lautlosigkeit: Ninja gegen Blutrausch tauschen."]},
    {"id": "lane-kontrolle", "name": "Lane-Kontrolle", "rolle": "Lange Sichtlinien halten",
     "primaer": {"waffe": "m4", "build": "Vielseitig"}, "sekundaer": {"waffe": "sang-9mm"},
     "nahkampf": "fss-carbon-edge", "taktik": "flash", "toedlich": "semtex", "feld": "portable-radar",
     "extras": ["quick-fix", "fast-hands", "cold-blooded"], "serien": ["uav", "counter-uav", "attack-heli"],
     "gruende": ["M4: sicherster Allrounder mit wenig Rückstoß (17,1 / 40,6).",
                 "Flinke Hände lohnt sich bei Sturmgewehren mit Standard-Magazin.",
                 "Tragbares Radar ist in Launch-Setups für Objective-Modi am häufigsten."]},
    {"id": "hardcore-objective", "name": "Hardcore Objective", "rolle": "Hardcore Herrschaft / Hardpoint",
     "primaer": {"waffe": "iso-nightshade", "build": "Alternative (DE-Namen)"}, "sekundaer": {"waffe": "gs-50"},
     "nahkampf": "fss-carbon-edge", "taktik": "concussion", "toedlich": "frag", "feld": "portable-radar",
     "extras": ["ghost", "ninja", "battle-hardened"], "serien": ["uav", "counter-uav", "attack-heli"],
     "gruende": ["In Hardcore schrumpfen TTK-Unterschiede auf wenige Millisekunden – ZV und Sprint→Feuer entscheiden.",
                 ".50 GS ist laut CODMunity ein Hardcore-One-Shot-Kandidat – vorher im Schießstand testen.",
                 "Ninja, weil man in Hardcore stärker auf Geräusche angewiesen ist."]},
    {"id": "scharfschuetze", "name": "Scharfschütze", "rolle": "Distanz, große Karten",
     "primaer": {"waffe": "kg7-vulcan", "build": "Core"}, "sekundaer": {"waffe": "krait-p68"},
     "nahkampf": "fss-carbon-edge", "taktik": "heartbeat", "toedlich": "claymore", "feld": "portable-radar",
     "extras": ["ghost", "fast-hands", "cold-blooded"], "serien": ["uav", "counter-uav", "attack-heli"],
     "gruende": ["KG-7 Vulcan: unbegrenzte One-Shot-Reichweite und beste Handhabung der Sniper.",
                 "Krait P68 als Notfall-Waffe: schnellste Pistolen-TTK im Nahbereich.",
                 "Claymore sichert die Flanke, während du zielst."]},
]

GLOSSAR = [
    ("Optic", "Visier", "Position auf der Schiene ist rein kosmetisch"), ("Muzzle", "Mündung", None),
    ("Barrel", "Lauf", None), ("Underbarrel", "Unterlauf", None), ("Magazine", "Magazin", None),
    ("Rear Grip", "Griff", None), ("Stock", "Schaft", None), ("Comb", "Schaftrücken", "Oden, Rezi 12, KG-7"),
    ("Laser", "Laser", "Schräge Laser schalten die Schräge Haltung frei"), ("Ammunition", "Munition", None),
    ("Bolt", "Verschluss", "Sniper, DMR, Schrotflinten"), ("Guard", "Schutz", "Rezi 12"),
    ("Trigger Action", "Abzug", "Pistolen, MAR-9"), ("Cylinder", "Zylinder", "Mojave .357"),
    ("Fire Mods", "Feuermodifikationen", "PPSh-41"), ("ADS speed", "ZV-Geschwindigkeit", "ZV = Zielvorrichtung"),
    ("Sprint-to-fire", "Nach-Sprint-Schusstempo", None), ("Apex Attachment", "Apex-Aufsatz", None),
    ("Firing Range", "Schießstand", "Dummies auf 10/25/50/100 m, zeigt TTK an"),
]

PICKS = [("han-86", 36.6), ("vel-46", 17.6), ("m4", 16.5), ("iso-nightshade", 7.1), ("kg7-vulcan", 5.1),
         ("kastov-762", 3.8), ("hyeon-burst", 2.8), ("patriot-xmr", 1.5), ("wz55-striga", 1.1)]

GESAMT_TTK = [("gs-50", "GS Magna (Apex)", 674), ("vel-46", None, 762), ("iso-nightshade", None, 774), ("m4", None, 819),
              ("wz55-striga", None, 831), ("x58-nyx", None, 837), ("ppsh-41", None, 842), ("axion", None, 853),
              ("han-86", None, 858), ("patriot-xmr", None, 861)]

DATA = {
    "info": {
        "schema": 1,
        "app": "MW4 Rüstkammer",
        "datenVersion": "2026.10.25-1",
        "datenstand": "2026-10-25",
        "gueltigBis": "2026-10-26",
        "patch": {"id": PATCH, "name": "Launch-Tuning", "live": "2026-10-23", "notizen": "2026-10-21"},
        "warnung": "Für die Woche ab 26.10. hat Infinity Ward das erste Waffen-Tuning angekündigt. Alle Werte stammen vom Launch-Stand und können danach abweichen.",
        "aenderungen": [
            {"version": "2026.10.25-1", "datum": "2026-10-25", "text": "Erste Version: 33 Waffen, Builds, TTK, Klassen-Setup – Launch-Stand vom 23.10.2026."}
        ],
        "release": [
            {"datum": "2026-10-16", "text": "Kampagne Early Access"},
            {"datum": "2026-10-20", "text": "DMZ Early Access"},
            {"datum": "2026-10-23", "text": "Weltweiter Release (PS5, Xbox Series X|S, PC über Battle.net, Steam, Xbox PC, Switch 2)"},
        ],
        "termine": [
            {"datum": "2026-10-26", "text": "Erstes MP-Waffen-Tuning", "status": "angekündigt", "notiz": "Woche ab 26.10., nicht bestätigt"},
            {"datum": "2026-10-27", "text": "Karte Shipment", "status": "geplant"},
            {"datum": "2026-10-29", "text": "Modus Possession", "status": "geplant"},
            {"datum": "2026-10-30", "text": "Modus Infected", "status": "ungefähr"},
            {"datum": "2026-11-06", "text": "Season 1 + Warzone-Integration", "status": "geplant"},
        ],
        "chronik": [
            {"datum": "21.–24.08.2026", "titel": "Beta-Wochenende 1 (Early Access)", "status": "veraltet",
             "punkte": ["Tägliche Nerfs, Kopfschuss-Multiplikatoren gesenkt (M4 1,5 → 1,2 · Kastov 762 1,48 → 1,35 · Han 86 1,4 → 1,25)",
                        "FiNN LMG max. Schaden 39 → 33"]},
            {"datum": "28.–31.08.2026", "titel": "Beta-Wochenende 2 (Open Beta)", "status": "veraltet",
             "punkte": ["Jede Waffe auf eine etwas längere TTK getrimmt", "Taktischer Sprint wandert auf das Extra Blutrausch",
                        "31.08.: ISO max. Schaden 20 → 21, Kopf 1,25 → 1,3 · PPSh-41 Reichweite 0–10,4 → 0–10,8 m · FiNN 33 → 30 · Typ 73 28 → 22",
                        "Zielhilfe (Aim Assist) global abgeschwächt, auch für Warzone"]},
            {"datum": "21.10.2026 (live 23.10.)", "titel": "Launch-Patchnotes", "status": "aktuell",
             "punkte": ["TTK von Beta-Wochenende 2 bleibt", "MPs auf Nah- und Mitteldistanz effizienter",
                        "One-Hit-Waffen mit Flinch und Schadens-Tuning gezähmt", "Alle Aufsätze neu getunt",
                        "UAV-Lebenspunkte 100 → 150", "Keine Einzelwerte pro Waffe veröffentlicht"]},
            {"datum": "23.10.2026", "titel": "Launch-Day-Update", "status": "aktuell",
             "punkte": ["Keine Waffenwerte geändert", "Waffen-Tuning für „nächste Woche“ angekündigt",
                        "Event- und Beta-Apex-Aufsätze vorübergehend entfernt („kommen bald zurück“)"]},
            {"datum": "24.10.2026", "titel": "Update 24. Oktober", "status": "aktuell",
             "punkte": ["Nur DMZ-Fixes (MIA-Bug, Exfil-Hubschrauber, Gunsmith-Geld)",
                        "Quelle GamerFuzion – auf callofduty.com nicht gegengeprüft"]},
        ],
        "texte": {
            "apex": ["Apex-Aufsätze sind die Endbelohnung, wenn du eine Waffe auf ihr Max.-Level bringst.",
                     "Sie haben einen eigenen Platz und verbrauchen keinen Aufsatz-Slot – viele blockieren aber trotzdem Standard-Slots.",
                     "Sie geben keine pauschalen Boni, sondern bauen die Waffe um: Umrüstungen, andere Feuermodi, integrierte Werfer, Spezialmunition.",
                     "Zum Launch gibt es 28 Apex-Aufsätze – für jede Primärwaffe und Pistole, nicht für Werfer und Messer.",
                     "Sie bleiben beim Waffen-Prestige erhalten."],
            "visier": ["MW4 lässt dich das Visier auf der Schiene nach vorne oder hinten schieben (Optic Rail Placement).",
                       "Laut Infinity Ward ist das rein kosmetisch: ZV-Zeit und alle Werte bleiben gleich.",
                       "Stell es so ein, dass du das Absehen am leichtesten verfolgen kannst.",
                       "Absehen lassen sich anpassen, inklusive Farbvarianten (auch der begehrte blaue Punkt).",
                       "Häufigste Meta-Visiere: ZLR Type C, Slimline Elite, SZ SRE-7, IOTA-D, SZ Micro D-3, SZ Prima-4 Dot.",
                       "ISO Nachtschatten und M4 haben gute Kimme und Korn – erst ohne Visier testen."],
            "prestige": ["Jede Waffe hat ein Max.-Level (37 bis 75). Danach gibt es den Apex und das Waffen-Prestige.",
                         "Waffen-Prestige setzt das Waffenlevel zurück und sperrt die Aufsätze dieser Waffe wieder.",
                         "Apex- und Blaupausen-Aufsätze, Tarnungen und Absehen bleiben erhalten.",
                         "Aufsätze werden geteilt: einmal freigeschaltet, auf jeder passenden Waffe nutzbar (über 500 zum Launch).",
                         "Spieler-Prestige: zwei Wege (klassisch mit Freischalt-Token oder ohne Zurücksetzen), 10 Prestige-Symbole, Level-Cap 55."],
            "pc": ["Auf dem PC sind TPM 2.0 und Secure Boot Pflicht (Activision Support)."],
            "luecken": ["Keine offiziellen Schadenstabellen pro Waffe – alle TTK- und ZV-Werte sind Community-Messungen.",
                        "Hardcore-Lebenspunkte für MW4 nicht offiziell bestätigt; Hardcore-TTK ist geschätzt.",
                        "Keine unterschiedlichen Builds für Controller und Maus/Tastatur veröffentlicht.",
                        "Warzone-Daten erst ab Season 1 (06.11.2026).",
                        "Für rund 15 Waffen gibt es noch keinen verifizierten vollständigen Build.",
                        "Freischalt-Level bei sechs Waffen im offiziellen DE-Blog widersprüchlich."],
            "hardcore": ["Keine offiziellen MW4-Hardcore-Daten. Die Lebenspunkte sind nicht bestätigt (in früheren Teilen 30).",
                         "Die Schätzung nimmt an, dass zwei Treffer töten: Zeit = ein Schussintervall (60.000 ÷ RPM) plus Open-Bolt-Verzögerung.",
                         "Hardcore-Varianten gibt es zum Launch für TDM, Herrschaft, Hardpoint, Abschuss bestätigt und FFA."],
        },
        "quellen": [{"titel": t, "url": u} for t, u in Q.values()],
    },
    "waffenklassen": KLASSEN,
    "waffen": WAFFEN,
    "nutzung": {"quelle": "CODMunity, Launch-Woche", "stand": "2026-10-25",
                "werte": [{"id": i, "prozent": p} for i, p in PICKS],
                "hinweis": "Andere Momentaufnahmen zeigen die Han 86 bei 34,2 % und 39,4 % – die Raten schwanken täglich."},
    "gesamtTtk": {"quelle": "ggranked, 24.10.2026", "erklaerung": "Sprint→Feuer + ZV + TTK auf 10–25 m",
                  "werte": [{"id": i, "label": l, "ms": ms} for i, l, ms in GESAMT_TTK]},
    "metaBericht": {
        "core": {"top": ["han-86", "m4", "vel-46", "iso-nightshade", "kg7-vulcan"],
                 "quelle": "CODMunity „Absolute Meta“ (23.10.) + Mobalytics S-Tier",
                 "text": "Han 86 und M4 führen die Sturmgewehre an, VEL 46 und ISO Nachtschatten die MPs, die KG-7 Vulcan die Sniper."},
        "hardcore": {
            "picks": [
                {"id": "vel-46", "rolle": "Objective-Modi", "grund": "952 RPM, 230 ms ZV, 110 ms Sprint→Feuer"},
                {"id": "iso-nightshade", "rolle": "Objective-Modi", "grund": "923 RPM, wenig Rückstoß"},
                {"id": "m4", "rolle": "Lanes", "grund": "810 RPM, sicherster Allrounder"},
                {"id": "x58-nyx", "rolle": "Stealth", "grund": "Integrierter Schalldämpfer"},
                {"id": "ppsh-41", "rolle": "Rusher", "grund": "1.110 RPM – rechnerisch schnellste Zwei-Treffer-Zeit"}],
            "oneShot": [
                {"id": "gs-50", "grund": "CODMunity listet einen Hardcore-One-Shot-Build (nur in der App)"},
                {"id": "kg7-vulcan", "grund": "Unbegrenzte One-Shot-Reichweite im Core-Modus"},
                {"id": "signal-50", "grund": ".50-Kaliber – im Schießstand prüfen"}],
            "prioritaeten": ["ZV-Geschwindigkeit", "Sprint→Feuer", "Wenig Rückstoß für die ersten zwei Treffer", "Schalldämpfer"]},
        "dmz": {"top": ["han-86", "vel-46", "hyeon-burst", "warlord", "ppsh-41"],
                "quelle": "CODMunity DMZ „Absolute Meta“",
                "hinweis": "DMZ hat ein eigenes Waffen-Tuning – Multiplayer-Werte gelten dort nicht 1:1."},
        "warzone": {"start": "2026-11-06",
                    "text": "MW4-Waffen kommen mit Season 1 nach Warzone. Bis dahin gibt es keine echten Warzone-Daten – Seiten mit „MW4 Warzone Meta“ sind Spekulation."},
    },
    "extras": EXTRAS,
    "extrasMeta": {"codmunityTop": ["ninja", "blood-rush", "cold-blooded"], "wzstatsMeta": ["ninja", "ghost", "quick-fix", "blood-rush"]},
    "ausruestung": AUSRUESTUNG,
    "abschussserien": SERIEN,
    "serienHinweis": "Abschussserien lassen sich pro Klasse festlegen. Ziel-Aktionen füllen zusätzlich die „Smart Streak“-Leiste.",
    "loadouts": LOADOUTS,
    "glossar": [{"en": e, "de": d, "notiz": n} for e, d, n in GLOSSAR],
}

# Konsistenzprüfungen
ids = {w["id"] for w in WAFFEN}
assert len(ids) == len(WAFFEN) == 33, len(WAFFEN)
for l in LOADOUTS:
    assert l["primaer"]["waffe"] in ids and l["sekundaer"]["waffe"] in ids
    w = next(x for x in WAFFEN if x["id"] == l["primaer"]["waffe"])
    assert any(b["titel"] == l["primaer"]["build"] for b in w["builds"]), (l["id"], l["primaer"])
for i, _ in PICKS:
    assert i in ids
for i, _, _ in GESAMT_TTK:
    assert i in ids
for k in DATA["metaBericht"]["core"]["top"] + DATA["metaBericht"]["dmz"]["top"]:
    assert k in ids
all_eq = {e["id"] for v in AUSRUESTUNG.values() for e in v}
for l in LOADOUTS:
    for k in ("taktik", "toedlich", "feld"):
        assert l[k] in all_eq, l[k]
    for e in l["extras"]:
        assert e in {x["id"] for x in EXTRAS}
    for s in l["serien"]:
        assert s in {x["id"] for x in SERIEN}
    slots = [next(x for x in EXTRAS if x["id"] == e)["slot"] for e in l["extras"]]
    assert slots == [1, 2, 3], (l["id"], slots)

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(DATA, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", OUT, OUT.stat().st_size, "Bytes,", len(WAFFEN), "Waffen")
