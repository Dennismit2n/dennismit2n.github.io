#!/usr/bin/env python3
"""MW4 Rüstkammer – baut die App unter mw4/ (gleiches Prinzip wie bl4/).

Aufruf (aus dem Repo-Stamm):
    python tools/mw4/build.py                    # Daten + Seite + Worker + Manifest + version.json
    python tools/mw4/build.py --vorschau DATEI   # zusätzlich die Artefakt-Vorschau (ohne Dokument-Hülle)

Ablauf:
  1. build_data.py schreibt mw4/daten/waffen.json
  2. head.html + body.html werden zu mw4/index.html (data-pwa="1", Build-Stempel im <meta>)
  3. sw.template.js wird zu mw4/sw.js (VERSION = Build-Stempel)
  4. Manifest, Icons und version.json {build, page, daten}

Der Build-Stempel ändert sich nur, wenn sich Seite, Daten, Worker oder Manifest wirklich
geändert haben. Sonst würde jede installierte App ohne Grund „Neuer Stand“ melden.
Benötigt: Python 3.9+, Pillow (nur für die Icons: pip install pillow).
"""
import datetime as dt
import hashlib
import json
import pathlib
import runpy
import sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[1]
APP = ROOT / "mw4"
PLACEHOLDER = "__BUILD__"
ARGV = sys.argv[1:]


def sha(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def write_if_changed(path: pathlib.Path, data: bytes) -> bool:
    if path.exists() and path.read_bytes() == data:
        return False
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(data)
    return True


# 1 – Daten
sys.argv = [str(HERE / "build_data.py"), str(APP / "daten" / "waffen.json")]
runpy.run_path(str(HERE / "build_data.py"), run_name="__main__")
sys.argv = [sys.argv[0]] + ARGV
daten_bytes = (APP / "daten" / "waffen.json").read_bytes()
daten = json.loads(daten_bytes)

# 2 – Icons (vor dem Manifest, damit dessen Einträge stimmen)
ICONS = APP / "icons"


def draw_icons():
    import math
    from PIL import Image, ImageDraw

    def icon(size, maskable=False):
        s = 4
        S = size * s
        img = Image.new("RGBA", (S, S), (14, 18, 21, 255))
        d = ImageDraw.Draw(img)
        cx = cy = S / 2
        R = S / 2 * (0.62 if maskable else 0.84)  # maskable: Inhalt in der 80-%-Schutzzone

        def hexagon(r):
            return [(cx + r * math.sin(math.radians(a)), cy - r * math.cos(math.radians(a))) for a in range(0, 360, 60)]

        d.polygon(hexagon(R), fill=(228, 217, 189, 255))
        d.polygon(hexagon(R * 0.80), fill=(20, 26, 30, 255))
        w = max(2, int(R * (0.1 if size <= 48 else 0.075)))
        lime = (200, 224, 60, 255)
        gap, reach = R * 0.16, R * 0.56
        d.line([(cx, cy - reach), (cx, cy - gap)], fill=lime, width=w)
        d.line([(cx, cy + gap), (cx, cy + reach)], fill=lime, width=w)
        d.line([(cx - reach, cy), (cx - gap, cy)], fill=lime, width=w)
        d.line([(cx + gap, cy), (cx + reach, cy)], fill=lime, width=w)
        rr = R * 0.36
        d.ellipse([cx - rr, cy - rr, cx + rr, cy + rr], outline=lime, width=w)
        dot = R * 0.055
        d.ellipse([cx - dot, cy - dot, cx + dot, cy + dot], fill=(240, 125, 36, 255))
        return img.resize((size, size), Image.LANCZOS)

    ICONS.mkdir(parents=True, exist_ok=True)
    for name, size, mask in [("icon-192.png", 192, False), ("icon-512.png", 512, False),
                             ("maskable-192.png", 192, True), ("maskable-512.png", 512, True),
                             ("apple-touch-icon.png", 180, False), ("favicon-32.png", 32, False)]:
        if not (ICONS / name).exists():
            icon(size, mask).save(ICONS / name)


draw_icons()

# 3 – Manifest
shots = []
if (ICONS / "shot-narrow.webp").exists():
    shots.append({"src": "icons/shot-narrow.webp", "sizes": "780x1688", "type": "image/webp",
                  "form_factor": "narrow", "label": "Waffenkarte mit Werten, TTK und Meta-Build"})
if (ICONS / "shot-wide.webp").exists():
    shots.append({"src": "icons/shot-wide.webp", "sizes": "2360x1640", "type": "image/webp",
                  "form_factor": "wide", "label": "Arsenal im Querformat"})
shortcut_icon = [{"src": "icons/icon-192.png", "sizes": "192x192"}]
manifest = {
    "id": "/mw4/",
    "name": "MW4 Rüstkammer",
    "short_name": "Rüstkammer",
    "description": "Modern-Warfare-4-Handbuch: alle Waffen mit Meta-Builds, Aufsätzen, Apex, ZV-Zeit und Time to Kill für Standard und Hardcore.",
    "lang": "de",
    "dir": "ltr",
    "start_url": "./",
    "scope": "./",
    "display": "standalone",
    "display_override": ["standalone", "minimal-ui"],
    "orientation": "any",
    "background_color": "#0e1215",
    "theme_color": "#0e1215",
    "categories": ["games", "entertainment", "reference"],
    "icons": [
        {"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
        {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
        {"src": "icons/maskable-192.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable"},
        {"src": "icons/maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
    ],
    "shortcuts": [
        {"name": "Meta-Bericht", "url": "./#meta", "icons": shortcut_icon},
        {"name": "TTK-Analyse", "url": "./#ttk", "icons": shortcut_icon},
        {"name": "Klasseneditor", "url": "./#klassen", "icons": shortcut_icon},
        {"name": "Intel & Patches", "url": "./#intel", "icons": shortcut_icon},
    ],
}
if shots:
    manifest["screenshots"] = shots
manifest_bytes = json.dumps(manifest, ensure_ascii=False, indent=1).encode("utf-8")

# 4 – Seite
head = (HERE / "head.html").read_text(encoding="utf-8")
body = (HERE / "body.html").read_text(encoding="utf-8")
pwa_head = f"""<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="robots" content="noindex">
<meta name="theme-color" content="#0e1215">
<meta name="color-scheme" content="dark">
<meta name="mw4-build" content="{PLACEHOLDER}">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Rüstkammer">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<style>:root{{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}</style>
"""
page_tpl = "<!doctype html>\n<html lang=\"de\" data-pwa=\"1\">\n<head>\n" + pwa_head + head + "</head>\n<body>\n" + body + "</body>\n</html>\n"

core_files = ["./", "manifest.webmanifest", "version.json", "daten/waffen.json",
              "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/favicon-32.png"]
sw_tpl = (HERE / "sw.template.js").read_text(encoding="utf-8").replace("__CORE_FILES__", json.dumps(core_files))

# Build-Stempel nur erneuern, wenn sich etwas geändert hat
inhalt = sha(page_tpl.encode() + b"\0" + daten_bytes + b"\0" + sw_tpl.encode() + b"\0" + manifest_bytes)[:12]
old = {}
if (APP / "version.json").exists():
    try:
        old = json.loads((APP / "version.json").read_text(encoding="utf-8"))
    except ValueError:
        old = {}
if old.get("inhalt") == inhalt and old.get("build"):
    build = old["build"]
else:
    build = dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

page = page_tpl.replace(PLACEHOLDER, build, 1).encode("utf-8")
sw = sw_tpl.replace(PLACEHOLDER, build, 1).encode("utf-8")
version = {"build": build, "page": sha(page)[:12], "daten": daten["info"]["datenVersion"], "inhalt": inhalt}

changed = [name for name, path, data in [
    ("index.html", APP / "index.html", page),
    ("sw.js", APP / "sw.js", sw),
    ("manifest.webmanifest", APP / "manifest.webmanifest", manifest_bytes),
    ("version.json", APP / "version.json", json.dumps(version, ensure_ascii=False, indent=1).encode("utf-8")),
] if write_if_changed(path, data)]

if "--vorschau" in ARGV:
    target = pathlib.Path(ARGV[ARGV.index("--vorschau") + 1])
    write_if_changed(target, (head + body).encode("utf-8"))
    write_if_changed(target.parent / "daten" / "waffen.json", daten_bytes)

print(f"Build {build} · Daten {version['daten']} · geändert: {', '.join(changed) or 'nichts'}")
