# MW4 Rüstkammer – Quelltext

Die App liegt unter [`/mw4/`](https://dennismit2n.github.io/mw4/) und funktioniert wie das BL4-Vault-Handbuch unter `/bl4/`: eine installierbare PWA, offline nutzbar, Start ohne Netz aus dem Cache, Updates kommen von selbst. Die Startseite verlinkt sie bewusst nicht.

Inhalt: alle 33 Waffen aus Call of Duty: Modern Warfare 4 mit deutschen und englischen Namen, Meta-Builds je Modus, Apex-Aufsätzen, ZV-Zeit, Sprint→Feuer und Time to Kill (Standard nach Distanz, Hardcore geschätzt, Gesamt-TTK, Kopf zuerst), Tierlisten, fünf empfohlene Klassen, Katalog aller Extras, Ausrüstung und Abschussserien, Patch-Chronik und Quellen.

## Dateien

| Datei | Zweck |
|---|---|
| `build_data.py` | **Alle Werte.** Hier wird nach einem Patch gepflegt |
| `head.html` | Styles der Oberfläche |
| `body.html` | Markup und App-Logik |
| `sw.template.js` | Vorlage für den Service Worker |
| `build.py` | Baut alles nach `mw4/` |
| `screenshots.py` | Optional: rendert die Bilder fürs Install-Fenster |

In `mw4/` nichts von Hand ändern – das sind Build-Ergebnisse.

## Nach einem Patch

1. In `build_data.py` die Werte anpassen.
2. Im Block `info`: `datenVersion`, `datenstand`, `gueltigBis` und `patch` setzen, oben in `aenderungen` einen Satz ergänzen.
3. Aus dem Repo-Stamm: `python tools/mw4/build.py`
4. Committen und pushen.

`build.py` prüft die Querverweise (Loadouts, Builds, Extras), schreibt `mw4/daten/waffen.json`, `index.html`, `sw.js`, `manifest.webmanifest` und `version.json`. Der Build-Stempel ändert sich nur, wenn sich wirklich etwas geändert hat.

Haben sich Optik oder Inhalt der Startansicht stark geändert: `python tools/mw4/screenshots.py`, danach noch einmal `build.py`.

## So kommt das Update an

- Seite, Manifest und Daten lädt der Service Worker **zuerst aus dem Netz**, nach 4,5 s ohne Antwort aus dem Cache.
- Neuer Build = neue `sw.js` → wird sofort aktiv und meldet „Neuer Stand vom … ist da“ mit **Neu laden**.
- Kommt die App in den Vordergrund, prüft sie `version.json`. Im Bereich **Intel** gibt es „Nach Updates suchen“.
- Ab dem Tag nach `gueltigBis` zeigt die Statusleiste „Werte prüfen“.

## Lokal testen

```bash
node tools/dev-server.js
```

Dann `http://localhost:8615/mw4/` öffnen.

## Datenqualität

Jeder Wert trägt Quelle, Patch und Konfidenz: **hoch** = offizielle Quelle, **mittel** = Community-Messung (CODMunity, ggranked), **niedrig** = geschätzt oder nur teilweise öffentlich, **Datenlücke** = bewusst leer statt geraten. Die Hardcore-TTK ist eine Rechnung (60.000 ÷ RPM plus Open-Bolt-Verzögerung, zwei Treffer angenommen), keine Messung. Keine der Stat-Seiten bietet eine öffentliche API, deshalb wird von Hand gepflegt.
