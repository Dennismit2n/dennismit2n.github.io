# dennismit2n.github.io

Landing page for the small tools by Dennis_mit_2n — in your browser and for Windows, no sign-up, no uploads. Your data stays on your device. Most of them are free and open source; fontART is the exception.

Startseite für die kleinen Tools von Dennis_mit_2n — im Browser und für Windows, ohne Anmeldung, ohne Uploads. Deine Daten bleiben auf deinem Gerät. Die meisten kostenlos und quelloffen; fontART ist die Ausnahme.

**➡️ [dennismit2n.github.io](https://dennismit2n.github.io/)**

## Tools

- [Real_RAM_cooler](https://github.com/Dennismit2n/Real_RAM_cooler) — an honest RAM tool for Windows (download, not a browser tool)
- [shrinkling](https://dennismit2n.github.io/shrinkling/) — shrink photos right in your browser
- [WiFi QR Card](https://dennismit2n.github.io/wifi-qr/) — create a WiFi QR code card, guests scan and connect
- [Collective-Calc](https://dennismit2n.github.io/collective-calc/) — split group expenses, no account, shareable as a link
- [bigday](https://dennismit2n.github.io/bigday/) — pretty shareable countdown page
- [Dreh das Rad](https://dennismit2n.github.io/dreh-das-rad/) — a decision wheel: options in, fate decides
- [Zählwerk](https://dennismit2n.github.io/zaehlwerk/) — where your Claude Code usage goes, by day, model and project
- [Besucher-Ticker](https://github.com/Dennismit2n/besucher-ticker) — your GoatCounter visitor numbers floating on the Windows desktop (download, not a browser tool)
- [fontART Designer](https://dennismit2n.github.io/fontART-demo/) — turn your handwriting into a real font (trial version: in the browser, or as a Windows download)

Same order as the tiles on the page. Real_RAM_cooler and Besucher-Ticker are Windows downloads and fontART comes both ways — which is why the headline says "on your own device" and not "in your browser". fontART is also the only tile with three mini tiles instead of two: its main button opens the browser version, and "For Windows" leads to the release.

**fontART is the odd one out**, and the tile says so rather than hiding it: it is the only tool here that is neither open source nor meant to stay free. What this repository links to is the free trial; the full version is being worked on, with no date and no price settled. The reasoning is spelled out in the guide on `werkstatt.html`, because a workshop whose footer says "open source on GitHub" owes an explanation for the one exception.

## News and guides

`werkstatt.html` carries, for every tool, a short guide (what it is for, three steps, what to watch out for) and its dated release notes. Each tile on the start page holds two mini tiles linking straight to the matching section, the news one showing the date of the newest entry.

That is why a tile is a `<div>` rather than a link: `.tool-open` is stretched across the whole card via `::after`, so clicking anywhere still opens the tool, while the mini tiles stay clickable on top of it. A tile built from nested `<a>` elements would be invalid HTML.

Both come from hand-maintained data files, not from a feed: `js/news.js` and `js/guides.js`. **Only Real_RAM_cooler, fontART and Besucher-Ticker have real GitHub releases** — the browser tools carry no tags, so their entries are written by hand and dated by the commit they describe. A guide may carry one optional extra section (`full`, an array of paragraphs); so far only fontART uses it, to say what the trial leaves out and why there is a price tag at all. Guides are written for people who want to *use* the tool; the READMEs stay what they are, developer documents, and are linked from each section.

The interface words exist in all 12 languages. The texts themselves are German and English; the other ten languages get the English version plus a notice in their own language saying so.

*Analytics:* the page uses [GoatCounter](https://www.goatcounter.com) for anonymous, cookieless visit counting (disclosed in the footer). The script is vendored locally in `js/vendor/count.js`, so no third-party script runs here and no CDN is contacted; the only external request is the count pixel. Beyond page views, **each tile click is counted as its own event** (`kachel-ram`, `kachel-shrink`, …) so it is visible which tool people actually open. The links to the news and guides page are counted the same way (`werkstatt-ram-news`, `werkstatt-ram-anleitung`, `werkstatt-gesamt`, …) — without cookies, without an account, and without anything that identifies a visitor across visits.

*Deliberately absent:* no service worker and no web manifest. The sister projects have both; this page does not, to avoid the cache-version trap on every deploy. So the page is not installable and does not work offline.

## Development

No build step — plain HTML, CSS, and JavaScript. 27 files make up the site: two pages, one stylesheet, eight scripts (one of them GoatCounter's, vendored), thirteen images and three icons. No npm dependencies.

```
node tools/dev-server.js
```

Then open http://localhost:8615

## Preview and promo images

`tools/promo/` renders the preview and promo images for **all** projects of the workshop from one shared template — 113 images: ten formats per tool (link preview, GitHub social preview, Instagram, LinkedIn, X, three story cards, Twitch panel, Twitch banner) plus thirteen brand images (avatars and profile banners). Colours come straight from `css/style.css`, the icons are the same SVGs as the tiles. Everything editable lives in `tools/promo/marke.mjs`; see `tools/promo/README.md`.

## Translations

The page speaks 12 languages (`js/i18n.js`). Some translations are machine-generated — corrections are very welcome!

## License

[MIT](LICENSE) for everything in this repository, with one exception: `js/vendor/count.js` is GoatCounter's counter script and is released under the ISC license, as stated in its file header.
