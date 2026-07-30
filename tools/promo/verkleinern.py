"""Verkleinert die gerenderten PNG ohne sichtbaren Verlust.

Die Bilder sind fast reine Farbflaechen plus zwei sanfte Verlaeufe. Eine Palette
mit 256 Farben trifft das praktisch exakt, spart aber ein Vielfaches. Damit das
nicht auf Zuruf passiert, wird jede Verkleinerung gemessen: der quadratische
Mittelwert der Abweichung muss unter der Schwelle bleiben, sonst bleibt das
Bild in Volltonfarbe und wird nur verlustfrei neu gepackt.

    python verkleinern.py ../Bilder
"""

import sys
import math
from pathlib import Path

from PIL import Image, ImageChops

SCHWELLE_RMS = 2.2       # von 255; darueber wird die Palette verworfen
ordner = Path(sys.argv[1] if len(sys.argv) > 1 else "../Bilder").resolve()


def rms(a: Image.Image, b: Image.Image) -> float:
    diff = ImageChops.difference(a.convert("RGB"), b.convert("RGB"))
    hist = diff.convert("L").histogram()
    summe = sum(w * (i ** 2) for i, w in enumerate(hist))
    anzahl = max(1, sum(hist))
    return math.sqrt(summe / anzahl)


vorher = nachher = 0
palette = volltonfarbe = 0
zeilen = []

for pfad in sorted(ordner.rglob("*.png")):
    alt = pfad.stat().st_size
    vorher += alt
    original = Image.open(pfad).convert("RGB")

    # Kandidat 1: verlustfrei neu packen.
    pfad_a = pfad.with_suffix(".a.png")
    original.save(pfad_a, "PNG", optimize=True)

    # Kandidat 2: Palette mit 256 Farben, mit Rasterung gegen Streifen im Verlauf.
    pfad_b = pfad.with_suffix(".b.png")
    pal = original.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG)
    pal.save(pfad_b, "PNG", optimize=True)

    abweichung = rms(original, pal)
    nutze_palette = abweichung < SCHWELLE_RMS and pfad_b.stat().st_size < pfad_a.stat().st_size

    gewinner = pfad_b if nutze_palette else pfad_a
    verlierer = pfad_a if nutze_palette else pfad_b
    neu = gewinner.stat().st_size
    verlierer.unlink()
    pfad.unlink()
    gewinner.rename(pfad)

    nachher += neu
    if nutze_palette:
        palette += 1
    else:
        volltonfarbe += 1
    zeilen.append((str(pfad.relative_to(ordner)), alt, neu, abweichung, nutze_palette))

for name, alt, neu, abw, p in zeilen:
    art = "Palette" if p else "Vollton"
    print(f"{name:<52} {alt // 1024:>5} KB -> {neu // 1024:>4} KB  {art}  Abw. {abw:.2f}")

print(
    f"\n{len(zeilen)} Bilder: {vorher / 1024 / 1024:.1f} MB -> {nachher / 1024 / 1024:.1f} MB "
    f"({100 - nachher * 100 / max(1, vorher):.0f} % gespart), "
    f"{palette} per Palette, {volltonfarbe} verlustfrei gepackt."
)
