# Werbebilder für alle Auftritte

Dieser Ordner rendert die Vorschau- und Werbebilder **aller** Werkzeuge der Werkstatt aus
einer gemeinsamen Vorlage — nicht nur die der Startseite.

```bash
node make-bilder.mjs
```

Legt 113 Bilder unter `Bilder/` ab (Zielordner steht oben im Skript): zehn Formate je
Werkzeug plus dreizehn Markenbilder.

```bash
python verkleinern.py ../../Bilder
```

Verkleinert die PNG ohne sichtbaren Verlust — Palette statt Volltonfarbe, mit gemessener
Abweichungsgrenze. Spart rund 60 %.

```bash
node make-bilder.mjs --verteilen --ohne-rendern
```

Legt `og.png`, `instagram.png` und `github-social.png` in die Schwester-Repos. Alle übrigen
Formate (Story, LinkedIn, X, Twitch-Panel, Banner, Profilbilder) bleiben bewusst außerhalb
der Repos: sie werden von keiner Seite abgerufen, und ein Projekt, das mit Schlankheit
wirbt, trägt keine Story-Bilder mit sich herum.

Real_RAM_cooler und der Zählwerk Ticker bekommen nur `github-social.png` — beide haben
keine Webseite, `og.png` hätte dort niemanden, der sie abruft. fontART bekommt seine drei
Bilder in die Wurzel des Repos, weil dort auch die ausgelieferte `index.html` liegt.

## Alles Änderbare steht in `marke.mjs`

Farben (aus `css/style.css` der Startseite übernommen), Namen, Claims, Zusagen, Story-Texte
und die Formatliste. Wer ein Bild ändern will, ändert dort — nicht im Renderer.

## Warum als Vorlage und nicht als fertige Grafik

Ändert sich ein Claim, läuft das hier einmal neu, statt dass jemand 113 Bilder nachzieht.
Genau der Grund, aus dem `assets/promo.png` der Startseite beim Wechsel der Überschrift
einmal falsch stehen blieb: der alte Claim war ins Bild eingebrannt.

## Verhältnis zu den älteren Einzel-Generatoren

`collective-calc/tools/promo.html` (versioniert) und `wifi-qr/tools/promo.html`
(unversioniert) sind die Vorläufer — dort ist der dunkle Familien-Entwurf entstanden, den
dieser Generator für alle sieben Auftritte fortführt.

**Sie erzeugen dieselben zwei Bilder wie dieser Ordner.** Wer eine der alten Vorlagen
ändert und danach `make-bilder.mjs` laufen lässt, verliert die Änderung wieder. Damit es
nur eine Quelle gibt, sollten die alten Vorlagen entweder gelöscht oder als überholt
gekennzeichnet werden — bewusst offen gelassen, weil das eine Entscheidung über
vorhandene, abgenommene Arbeit ist.

## Playwright

Wird nicht installiert, sondern dort gesucht, wo es ohnehin liegt: `collective-calc`
braucht es für seine Browser-Tests. Findet sich nichts, bricht das Skript mit einer
Anleitung ab, statt still etwas nachzuladen. Eigener Pfad per `PLAYWRIGHT_MODULE`.
