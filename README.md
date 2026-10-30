# dennismit2n.github.io

Landing page for the small tools by Dennis_mit_2n — no sign-up, no ads, free except fontART. Most of them run entirely on your device; where something leaves it, the tile says so. Most are open source; fontART is the exception.

Startseite für die kleinen Werkzeuge von Dennis_mit_2n — ohne Anmeldung, keine Anzeigen, kostenlos außer fontART. Die meisten rechnen komplett auf deinem Gerät; wo etwas es verlässt, steht es an der Kachel. Die meisten quelloffen; fontART ist die Ausnahme.

**➡️ [dennismit2n.github.io](https://dennismit2n.github.io/)**

## Tools

- [create-masterprompt](https://github.com/Dennismit2n/create-masterprompt) — turns a vague project idea into a context package a fresh AI chat can run from (a skill, not a program)
- [Real_RAM_cooler](https://github.com/Dennismit2n/Real_RAM_cooler) — an honest RAM tool for Windows (download, not a browser tool)
- [fontART Designer](https://dennismit2n.github.io/fontART-demo/) — turn your handwriting into a real font (trial version: in the browser, or as a Windows download)
- [Prismatical](https://dennismit2n.github.io/prismatical/) — passwords and passphrases whose strength is the colour of the interface
- [Spectroton](https://dennismit2n.github.io/spectroton/) — one colour in, eleven matching shades out, contrast-checked
- [shrinkling](https://dennismit2n.github.io/shrinkling/) — shrink photos right in your browser
- [WiFi QR Card](https://dennismit2n.github.io/wifi-qr/) — create a WiFi QR code card, guests scan and connect
- [Heizwarte](https://dennismit2n.github.io/heizwarte/) — weather with a heating traffic light: when to turn up slow heating (app in German for now)
- [Pocketsum](https://dennismit2n.github.io/pocketsum/) — five small calculators in one file: VAT, tips, fuel prices, dividends and trading costs, offline after the first visit
- [Zählwerk](https://dennismit2n.github.io/zaehlwerk/) — where your Claude Code usage goes, by day, model and project
- [Besucher-Ticker](https://github.com/Dennismit2n/besucher-ticker) — your GoatCounter visitor numbers floating on the Windows desktop (download, not a browser tool)
- [Collective-Calc](https://dennismit2n.github.io/collective-calc/) — split group expenses, no account, shareable as a link
- [Dreh das Rad](https://dennismit2n.github.io/dreh-das-rad/) — a decision wheel: options in, fate decides
- [Gaming](https://dennismit2n.github.io/gaming.html) — its own page for game guides, handbooks and gaming tools (see below)
- [bigday](https://dennismit2n.github.io/bigday/) — pretty shareable countdown page
- [Fadenkreuz](https://github.com/Dennismit2n/fadenkreuz) — your own crosshair in the exact centre of the screen, drawn in a small editor, on about 1 MB of RAM (Windows download, not a browser tool; on the gaming page as well)

Same order as the tiles on the page — hand-picked by Dennis, last reordered on 30 October 2026; new tools do not simply go to the end. Two further tiles sit at the end as placeholders, with no link and no mini tiles: there is nothing to open yet. Real_RAM_cooler, Besucher-Ticker and Fadenkreuz are Windows downloads and fontART comes both ways — which is why neither the headline nor the tiles promise a browser tool. fontART has three mini tiles instead of two: its main button opens the browser version, and "For Windows" leads to the release. create-masterprompt has three as well, its third one opening the one-page overview from `docs/` — in whichever of the fourteen languages the page is currently set to. create-masterprompt is the first entry that is neither a browser tool nor a Windows program: it is an Agent Skill that runs inside an AI chat, which is why its button leads to the repository and its meta line does not borrow the "no uploads" line of the others.

**fontART is the odd one out**, and the tile says so rather than hiding it: it is the only tool here that is neither open source nor meant to stay free. What this repository links to is the free trial; the full version is being worked on, with no date and no price settled. The reasoning is spelled out in the guide on `werkstatt.html`, because a workshop whose footer says "open source on GitHub" owes an explanation for the one exception.

## Gaming page

Since 30 October 2026 everything to do with games lives on its own page, `gaming.html`, so it stays apart from the other tools. On the start page it is one tile, “Gaming”, at position 14: name, border and button in graphite, the cap a gradient from magenta through cherry red and neon blue to neon green. It has no mini tiles, because it is a collection, not a single tool.

- [Craftionary](https://dennismit2n.github.io/craftionary/) — every Minecraft recipe, where to find items and ores, ready `/give` commands and a banner and pot workshop (English and German)
- [BL4 Vault-Handbuch](https://dennismit2n.github.io/bl4/) — Borderlands 4 handbook, lives in `bl4/` of this repository (app in German)
- [MW4 Rüstkammer](https://dennismit2n.github.io/mw4/) — Call of Duty: Modern Warfare 4 builds and time to kill, lives in `mw4/` of this repository (app in German)
- [Fadenkreuz](https://github.com/Dennismit2n/fadenkreuz) — your own crosshair in the exact centre of the screen, drawn in a small editor, on about 1 MB of RAM (Windows download, not a browser tool). Since the evening of 30 October 2026 it is back on the start page as well, at position 16.
- [Real_RAM_cooler](https://github.com/Dennismit2n/Real_RAM_cooler) — also on the start page; its “Clean up for gaming” button is why it belongs here too
- a placeholder for the game guides still to come, with no link

Fadenkreuz’s tile stays black in both themes, like the dark placeholder: its neon green would be unreadable on the light page (1.20:1), so the tile carries fixed colours, and only its section on `werkstatt.html` follows the theme. On `werkstatt.html` the order follows the start page: Craftionary, BL4 and MW4 take the place of the Gaming tile, each with news, a guide and three phone screenshots, and Fadenkreuz keeps its news and guide right after bigday. Their tiles and guides say what matters most for apps like these: they run in the browser on phones (Android and iOS) and on desktop, and an install button sets them up as an app (on an iPhone it is Safari’s Share and “Add to Home Screen”). The icons of BL4 and MW4 (`assets/bl4.svg`, `assets/mw4.svg`) are SVG redrawings of the apps’ own icons, so the profile README can embed them like every other tile icon. Since 30 October 2026, BL4 and MW4 carry their fonts in their own `fonts/` folders (Bangers, Barlow, Barlow Condensed and Share Tech Mono, SIL Open Font License, licence texts alongside) instead of loading them from Google Fonts, so opening them sends nothing to Google; their service workers store the Latin files on install, so the apps also look right offline. For MW4 the source is `tools/mw4/fonts/`, which `build.py` copies over. Tile clicks count as `kachel-craftionary`, `kachel-vault`, `kachel-ruestkammer` and `kachel-gaming` — the class names carry no digits because `main.js` only reads letters.

## News and guides

`werkstatt.html` carries, for every tool, a short guide (what it is for, three steps, what to watch out for) and its dated release notes. Most tiles on the start page hold two mini tiles linking straight to the matching section, the news one showing the date of the newest entry; fontART and create-masterprompt have three, and the two placeholder tiles have none because there is nothing to link to yet.

That is why a tile is a `<div>` rather than a link: `.tool-open` is stretched across the whole card via `::after`, so clicking anywhere still opens the tool, while the mini tiles stay clickable on top of it. A tile built from nested `<a>` elements would be invalid HTML.

Both come from hand-maintained data files, not from a feed: `js/news.js` and `js/guides.js`. **Only Real_RAM_cooler, fontART, Besucher-Ticker, create-masterprompt and Fadenkreuz have real GitHub releases** — the browser tools carry no tags, so their entries are written by hand and dated by the commit they describe. A guide may carry one optional extra section (`full`, an array of paragraphs); so far only fontART uses it, to say what the trial leaves out and why there is a price tag at all. Since 22 September 2026 a guide may also carry `shots`: screenshots shown under “What it looks like”, right after the purpose. The files are copies in `assets/anleitung/` rather than links into the tool repositories, so the page depends on no one else’s paths and the dev server shows them offline; every picture has its alt text in all 14 languages, and every screenshot opens at full size on click. create-masterprompt shows its overview in the reader’s language and Real_RAM_cooler its German or English window; the spinning wheel of Dreh das Rad plays once and stops (no full-size link: the file is only 360 px wide, wide screens already show it at nearly that size, and opening it would only replay it), and stays still for anyone who asked for reduced motion. Guides are written for people who want to *use* the tool; the READMEs stay what they are, developer documents, and are linked from each section.

The interface words exist in all 14 languages, and since 14 September 2026 so do the texts. Until then news and guides were German and English only, and every other language got the English version plus a notice saying so; that fallback and its notice are gone.

*Analytics:* the page uses [GoatCounter](https://www.goatcounter.com) for anonymous, cookieless visit counting (disclosed in the footer). The script is vendored locally in `js/vendor/count.js`, so no third-party script runs here and no CDN is contacted; the only external request is the count pixel. Beyond page views, **each tile click is counted as its own event** (`kachel-ram`, `kachel-shrink`, …) so it is visible which tool people actually open. The links to the news and guides page are counted the same way (`werkstatt-ram-news`, `werkstatt-ram-anleitung`, `werkstatt-gesamt`, …), and so is opening a screenshot there at full size (`werkstatt-ram-bild`, …) — without cookies, without an account, and without anything that identifies a visitor across visits.

*Look (since 30 October 2026):* the tiles fill the width of the window — one column on a phone, up to five on a wide screen (the page is at most 1680 px wide, the hero stays narrow). Behind everything, four soft colour clouds drift slowly over the construction grid of the blueprint drawing from the profile README; they stand still for anyone who has asked their system for reduced motion. The clouds carry a lot of colour but little brightness, so text that stands directly on them keeps 4.6:1 even where two of them overlap. Every tile glows in its own colour (a haze from its colour cap, a soft light around the top edge and its icon). The light theme is deliberately muted (background `#DADBE6` instead of near-white), and every tile colour was recalculated for it; the hues of tiles that looked alike (Real_RAM_cooler, Heizwarte and WiFi QR Card, shrinkling and Besucher-Ticker, Zählwerk and Collective-Calc) were pulled apart. The section headings carry drawn icons instead of emoji: the flat toolbox from the profile README, and a gamepad on the gaming page.

*Deliberately absent:* no service worker and no web manifest. The sister projects have both; this page does not, to avoid the cache-version trap on every deploy. So the page is not installable and does not work offline.

*Typeface:* names and headings are set in [Fraunces](https://github.com/undercasetype/Fraunces) (SIL Open Font License 1.1) — including the brand and the tool list in the navigation of `werkstatt.html`; running text, buttons and form controls stay in the system font. The font is self-hosted in `assets/fonts/fraunces/` next to its licence, so no font service is contacted. Only the weight axis ships: 36 KB for Latin, plus 33 KB where Polish, Turkish and the like need it. Fraunces has no Cyrillic, Devanagari or CJK letters, so Russian, Hindi, Chinese, Japanese and Korean headings — and translated tool names — stay in the system font.

## Development

No build step — plain HTML, CSS, and JavaScript. 80 files make up the site (not counting the apps in `bl4/` and `mw4/`): three pages, one stylesheet, eight scripts (one of them GoatCounter’s, vendored), twenty-three images, three icons, thirty-nine screenshots for the guides in `assets/anleitung/`, and two font files with their licence in `assets/fonts/fraunces/`. No npm dependencies.

```
node tools/dev-server.js
```

Then open http://localhost:8615

The stylesheet and every own script are pulled in with a `?v=<date>` suffix. GitHub Pages serves
HTML and code with `max-age=600` and caches them independently, so without the suffix a freshly
deployed `index.html` can meet a ten-minute-old `i18n.js` and render raw keys instead of text.
**Bump the date in both HTML files whenever a deploy changes CSS or JS**, and append a letter for a second deploy on the same day (`…-13b`). `js/vendor/count.js`
deliberately has no suffix — it is third-party code and never changes.

## Preview and promo images

`tools/promo/` renders the preview and promo images for the workshop from one shared template — 153 images: ten formats per tool (link preview, GitHub social preview, Instagram, LinkedIn, X, three story cards, Twitch panel, Twitch banner) plus thirteen brand images (avatars and profile banners). It knows all twelve tools on the homepage plus the Zählwerk Ticker. Colours come straight from `css/style.css`, the icons are the same SVGs as the tiles. Everything editable lives in `tools/promo/marke.mjs`; see `tools/promo/README.md`.

## Translations

The page speaks 14 languages (`js/i18n.js`), and so do the news and guides (`js/news.js`, `js/guides.js`). Some translations are machine-generated — corrections are very welcome!

## License

[MIT](LICENSE) for everything in this repository, with two exceptions: `js/vendor/count.js` is GoatCounter’s counter script and is released under the ISC license, as stated in its file header; and the font files in `assets/fonts/fraunces/` are Fraunces by The Fraunces Project Authors, licensed under the SIL Open Font License 1.1 (see `OFL.txt` there).
