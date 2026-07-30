# dennismit2n.github.io

Landing page for the small tools by Dennis_mit_2n — in your browser and for Windows, free, no sign-up, no uploads. Your data stays on your device.

Startseite für die kleinen Tools von Dennis_mit_2n — im Browser und für Windows, kostenlos, ohne Anmeldung, ohne Uploads. Deine Daten bleiben auf deinem Gerät.

**➡️ [dennismit2n.github.io](https://dennismit2n.github.io/)**

## Tools

- [Real_RAM_cooler](https://github.com/Dennismit2n/Real_RAM_cooler) — an honest RAM tool for Windows (download, not a browser tool)
- [shrinkling](https://dennismit2n.github.io/shrinkling/) — shrink photos right in your browser
- [WiFi QR Card](https://dennismit2n.github.io/wifi-qr/) — create a WiFi QR code card, guests scan and connect
- [Collective-Calc](https://dennismit2n.github.io/collective-calc/) — split group expenses, no account, shareable as a link
- [bigday](https://dennismit2n.github.io/bigday/) — pretty shareable countdown page
- [Dreh das Rad](https://dennismit2n.github.io/dreh-das-rad/) — a decision wheel: options in, fate decides

Same order as the tiles on the page. Five run in the browser; Real_RAM_cooler is a Windows download — which is why the headline says "on your own device" and not "in your browser".

*Analytics:* the page uses [GoatCounter](https://www.goatcounter.com) for anonymous, cookieless visit counting (disclosed in the footer). The script is vendored locally in `js/vendor/count.js`, so no third-party script runs here and no CDN is contacted; the only external request is the count pixel. Beyond page views, **each tile click is counted as its own event** (`kachel-ram`, `kachel-shrink`, …) so it is visible which tool people actually open — without cookies, without an account, and without anything that identifies a visitor across visits.

*Deliberately absent:* no service worker and no web manifest. The sister projects have both; this page does not, to avoid the cache-version trap on every deploy. So the page is not installable and does not work offline.

## Development

No build step — plain HTML, CSS, and JavaScript. 19 files, no npm dependencies.

```
node tools/dev-server.js
```

Then open http://localhost:8615

## Preview and promo images

`tools/promo/` renders the preview and promo images for **all** projects of the workshop from one shared template — 76 images in 12 formats (link preview, GitHub social preview, Instagram, story, LinkedIn, X, Twitch panel, avatars, banners). Colours come straight from `css/style.css`, the icons are the same SVGs as the tiles. Everything editable lives in `tools/promo/marke.mjs`; see `tools/promo/README.md`.

## Translations

The page speaks 12 languages (`js/i18n.js`). Some translations are machine-generated — corrections are very welcome!

## License

[MIT](LICENSE) for everything in this repository, with one exception: `js/vendor/count.js` is GoatCounter's counter script and is released under the ISC license, as stated in its file header.
