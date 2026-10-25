#!/usr/bin/env python3
"""Rendert die Store-Screenshots für das Manifest (mw4/icons/shot-narrow.webp, shot-wide.webp).

Aufruf (aus dem Repo-Stamm):  python tools/mw4/screenshots.py  und danach  python tools/mw4/build.py
Benötigt: pip install playwright pillow  und  python -m playwright install chromium
Optional – die App funktioniert auch ohne Screenshots, das Install-Fenster ist dann nur schlichter.
"""
import functools
import http.server
import io
import pathlib
import threading

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = ROOT / "mw4" / "icons"


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


def main():
    httpd = http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(Quiet, directory=str(ROOT)))
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    base = f"http://127.0.0.1:{httpd.server_address[1]}/mw4/index.html"
    shots = [("shot-narrow.webp", {"width": 390, "height": 844}, "#w-han-86"),
             ("shot-wide.webp", {"width": 1180, "height": 820}, "#w-vel-46")]
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for name, viewport, hash_ in shots:
            ctx = browser.new_context(viewport=viewport, device_scale_factor=2, service_workers="block")
            page = ctx.new_page()
            page.goto(base + hash_)
            page.wait_for_selector(".wd-name")
            page.evaluate("document.fonts.ready")
            page.wait_for_timeout(500)
            png = page.screenshot()
            Image.open(io.BytesIO(png)).convert("RGB").save(OUT / name, "WEBP", quality=82, method=6)
            print("geschrieben:", OUT / name)
            ctx.close()
        browser.close()
    httpd.shutdown()


if __name__ == "__main__":
    main()
