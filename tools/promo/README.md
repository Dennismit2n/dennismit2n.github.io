# Werbebilder für alle Auftritte

Dieser Ordner rendert die Vorschau- und Werbebilder **aller** Werkzeuge der Werkstatt aus
einer gemeinsamen Vorlage — nicht nur die der Startseite.

```bash
node make-bilder.mjs
```

Legt 223 Bilder unter `Bilder/` ab (Zielordner steht oben im Skript): zehn Formate je
Auftritt plus dreizehn Markenbilder. Seit 02.11.2026 im Design der Startseite vom
30.10.2026: Aurora mit vier Wolken, Bauplanraster, Fraunces, Inhalt in einer Kachel mit
Farbkappe. Fraunces kommt aus `assets/fonts/fraunces/` der Startseite.

```bash
python verkleinern.py ../../Bilder
```

Verkleinert die PNG ohne sichtbaren Verlust — Palette statt Volltonfarbe, mit gemessener
Abweichungsgrenze. Beim alten Design sparte das rund 60 %. Die Aurora-Verläufe des neuen
Designs reißen die Grenze meist, dann bleibt das Bild in Volltonfarbe und wird nur neu
gepackt: alle 223 Bilder zusammen rund 55 MB statt vorher 13 MB, ein `og.png` rund 200 KB.

```bash
node make-bilder.mjs --verteilen --ohne-rendern
```

Legt `og.png`, `instagram.png` und `github-social.png` in die Schwester-Repos. Alle übrigen
Formate (Story, LinkedIn, X, Twitch-Panel, Banner, Profilbilder) bleiben bewusst außerhalb
der Repos: sie werden von keiner Seite abgerufen, und ein Projekt, das mit Schlankheit
wirbt, trägt keine Story-Bilder mit sich herum.

Real_RAM_cooler, create-masterprompt, der Zählwerk Ticker, der Besucher-Ticker, Fadenkreuz,
die Werkstatt-Mods und Hourbridge (das sein `og.png` selbst zeichnet) bekommen nur `github-social.png` — keines davon hat eine eigene Webseite, `og.png` hätte dort niemanden, der sie abruft. fontART bekommt seine drei
Bilder in die Wurzel des Repos, weil dort auch die ausgelieferte `index.html` liegt. Gaming
hat kein eigenes Repo (die Seite liegt hier im Startseiten-Repo) und wird nicht verteilt.

Der Zielordner je Repo steht als `assetOrdner` in `marke.mjs`. `--verteilen` legt einen
fehlenden Ordner ohne Rückfrage an. Vor dem Verteilen also nachsehen, ob der Ordner dort
der ist, auf den `og:image` der Seite zeigt.

## Alles Änderbare steht in `marke.mjs`

Farben (aus `css/style.css` der Startseite übernommen), Namen, Claims, Zusagen, Story-Texte
und die Formatliste. Wer ein Bild ändern will, ändert dort — nicht im Renderer.

## Warum als Vorlage und nicht als fertige Grafik

Ändert sich ein Claim, läuft das hier einmal neu, statt dass jemand 223 Bilder nachzieht.
Genau der Grund, aus dem `assets/promo.png` der Startseite beim Wechsel der Überschrift
einmal falsch stehen blieb: der alte Claim war ins Bild eingebrannt.

## Verhältnis zu den älteren Einzel-Generatoren

`collective-calc/tools/promo.html` (versioniert) und `wifi-qr/tools/promo.html`
(unversioniert) sind die Vorläufer — dort ist der dunkle Familien-Entwurf entstanden, den
dieser Generator für alle einundzwanzig Auftritte fortführt.

Dazu kommt `pocketsum/tools/bilder.mjs`: es rendert die Icons und ein `og.png` im alten
Entwurf. Seit 03.11.2026 liegt dort das `og.png` von hier, der Kopf des Skripts warnt davor.

**Sie erzeugen dieselben zwei Bilder wie dieser Ordner.** Wer eine der alten Vorlagen
ändert und danach `make-bilder.mjs` laufen lässt, verliert die Änderung wieder. Damit es
nur eine Quelle gibt, sollten die alten Vorlagen entweder gelöscht oder als überholt
gekennzeichnet werden — bewusst offen gelassen, weil das eine Entscheidung über
vorhandene, abgenommene Arbeit ist.

## Playwright

Wird nicht installiert, sondern dort gesucht, wo es ohnehin liegt: `collective-calc`
braucht es für seine Browser-Tests. Findet sich nichts, bricht das Skript mit einer
Anleitung ab, statt still etwas nachzuladen. Eigener Pfad per `PLAYWRIGHT_MODULE`.
