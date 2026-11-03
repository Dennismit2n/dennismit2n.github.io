/*
 * Rendert jedes Werbebild für jedes Werkzeug — aus einer Vorlage, nicht per Hand.
 *
 *   node make-bilder.mjs                 alles nach ../Bilder/
 *   node make-bilder.mjs --nur wifi-qr   nur ein Werkzeug
 *   node make-bilder.mjs --verteilen     zusätzlich og/instagram/github-social in die Repos legen
 *
 * Warum als Vorlage und nicht als fertige Grafik: Ändert sich ein Claim, eine
 * Farbe oder kommt ein siebtes Werkzeug dazu, läuft das hier einmal neu — statt
 * dass jemand vierundachtzig Bilder nachzieht. Genau dieselbe Entscheidung wie
 * bei wifi-qr und Collective-Calc, nur für alle Auftritte zusammen.
 *
 * Playwright wird dort gesucht, wo es ohnehin liegt (Collective-Calc braucht es
 * für seine Browser-Tests). Nichts wird nachinstalliert.
 *
 * Seit 02.11.2026 im Design der Startseite vom 30.10.2026: dunkler Grund mit
 * den vier Aurora-Wolken und dem Bauplanraster, Namen und Überschriften in
 * Fraunces, der Inhalt in einer Kachel mit Farbkappe und Leuchten. Die Regeln
 * dafür stehen in css/style.css der Startseite und sind hier nachgebaut, nicht
 * erfunden: dieselben Farben, dieselbe Kappe (Maske aus Rand- minus Innen-Box),
 * derselbe Schein von der Kappe in die Kachel.
 */

import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { mkdir, writeFile, readFile, stat, copyFile } from 'node:fs/promises';
import { MARKE, TOOLS, FORMATE, MARKENFORMATE, KACHELN, iconSvg, KISTE_UMRISS } from './marke.mjs';

const hier = dirname(fileURLToPath(import.meta.url));
const ZIEL = resolve(hier, '..', 'Bilder');
const REPOS = 'C:/Users/nutzer/source/repos';

const argv = process.argv.slice(2);
const nur = argv.includes('--nur') ? argv[argv.indexOf('--nur') + 1] : null;
const verteilen = argv.includes('--verteilen');
/* Verkleinert wird nach dem Rendern von verkleinern.py. Wer nur verteilt, will
 * die verkleinerten Dateien kopieren — nicht sie vorher wieder überschreiben. */
const ohneRendern = argv.includes('--ohne-rendern');

/* Maßstab je Format. Ein Quadrat verträgt größere Schrift als ein flaches
 * Rechteck, deshalb steht das hier von Hand und wird nicht gerechnet. */
const SKALA = { og: 1, social: 1.06, ig: 1.16, li: 1, x: 1.33 };

const QUELLEN = [
  process.env.PLAYWRIGHT_MODULE,
  `${REPOS}/collective-calc/node_modules/@playwright/test/index.mjs`,
  `${REPOS}/collective-calc/node_modules/@playwright/test/index.js`,
  `${REPOS}/collective-calc/node_modules/playwright-core/index.js`,
  '@playwright/test',
  'playwright',
].filter(Boolean);

async function ladeChromium() {
  for (const q of QUELLEN) {
    try {
      const modul = await import(q.startsWith('C:') || q.startsWith('/') ? pathToFileURL(q).href : q);
      const chromium = modul.chromium ?? modul.default?.chromium;
      if (chromium) return { chromium, herkunft: q };
    } catch { /* nächste Quelle */ }
  }
  throw new Error('Playwright nicht gefunden. Entweder in einem Nachbarprojekt installieren oder PLAYWRIGHT_MODULE setzen.');
}

/* Fraunces kommt aus der Startseite selbst (SIL OFL 1.1, Lizenz liegt dort
 * neben der Datei) und wird eingebettet: setContent läuft auf about:blank, und
 * von dort lädt Chromium keine file://-Schriften. Nur der lateinische Schnitt,
 * er deckt Umlaute, „ “ und ’ ab. */
const FRAUNCES = (await readFile(`${REPOS}/dennismit2n.github.io/assets/fonts/fraunces/fraunces-latin-wght-normal.woff2`)).toString('base64');

const SCHILD = `'Fraunces Werkstatt', Georgia, serif`;

/* Farbe mit Deckkraft, wie color-mix(in srgb, X p%, transparent). */
const mit = (farbe, p) => `color-mix(in srgb, ${farbe} ${p}%, transparent)`;
const vollton = (farbe) => `linear-gradient(${farbe}, ${farbe})`;
const fluss = (t) => t.flow ?? vollton(t.farbe);

/* k ist der Maßstab der Kachel gegenüber der Startseite (dort 8 px Rundung,
 * 4 px Kappe, 40 px Ausklang). Die Bilder sind drei- bis viermal so groß wie
 * eine Kachel; die Rundung voll mitzuziehen sähe nach Knopf aus, deshalb
 * wächst sie nur mit k, nicht mit der Bildbreite. */
const kopf = (b, h) => `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>
  @font-face{font-family:'Fraunces Werkstatt';font-weight:100 900;src:url(data:font/woff2;base64,${FRAUNCES}) format('woff2')}
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${b}px;height:${h}px;overflow:hidden}
  body{background:${MARKE.grund};color:${MARKE.text};
       font-family:system-ui,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
       -webkit-font-smoothing:antialiased}
  .buehne{position:relative;width:${b}px;height:${h}px;display:flex;overflow:hidden;isolation:isolate}
  .aurora{position:absolute;inset:0;z-index:-1;overflow:hidden;pointer-events:none}
  .aurora i{position:absolute;display:block;border-radius:50%}
  .raster{position:absolute;inset:0}
  .schild{font-family:${SCHILD};font-weight:560}
  .kachel{position:relative;isolation:isolate;border-radius:calc(8px * var(--k));
          background:${MARKE.schleier};border:1px solid ${MARKE.linie};
          box-shadow:0 calc(10px * var(--k)) calc(30px * var(--k)) rgba(0,0,0,.5),
                     0 calc(-10px * var(--k)) calc(30px * var(--k)) calc(-16px * var(--k)) ${mit('var(--tool)', 62)}}
  .kachel::after{content:'';position:absolute;inset:0;z-index:-1;border-radius:inherit;background:var(--tool-flow);
          opacity:.17;filter:blur(calc(12px * var(--k)));
          -webkit-mask-image:radial-gradient(130% 80% at 50% 0%,#000,transparent 72%);
          mask-image:radial-gradient(130% 80% at 50% 0%,#000,transparent 72%)}
  .kachel::before{content:'';position:absolute;inset:-1px;border-radius:inherit;pointer-events:none;
          border:1px solid transparent;border-top-width:calc(4px * var(--k));
          background:var(--tool-flow) border-box top / 100% calc(40px * var(--k)) no-repeat;
          mask:linear-gradient(#000 calc(12px * var(--k)), transparent calc(40px * var(--k))) border-box,
               linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0) border-box;
          mask-composite:intersect, exclude}
  .name{color:var(--tool);text-shadow:0 0 calc(16px * var(--k)) ${mit('var(--tool)', 55)}}
  .name.verlauf{text-shadow:none;background-image:var(--tool-flow);-webkit-background-clip:text;background-clip:text;color:transparent}
  .ikon{filter:drop-shadow(0 0 calc(10px * var(--k)) ${mit('var(--tool)', 62)})}
  .balken{position:absolute;display:flex;border-radius:99px;overflow:hidden}
  .balken span{height:100%}
</style></head><body>`;

const fuss = '</body></html>';

/* Der Grund aller Bilder: die vier Aurora-Wolken der Startseite (Lage und Größe
 * in Bildanteilen statt vw/vh) und darüber das Bauplanraster, fein alle 24 px,
 * grob alle 120 px, nach unten auslaufend. Die Unschärfe wächst mit der
 * Bildfläche: 70 px auf einem 1440er Fenster. */
function grund(b, h) {
  const r = Math.sqrt(b * h) / 1138;
  const blur = Math.round(70 * r);
  const [a1, a2, a3, a4] = MARKE.aurora;
  const wolke = (stil, [farbe, a]) => `<i style="${stil};background:${farbe};opacity:${a};filter:blur(${blur}px)"></i>`;
  const m = Math.max(0.8, Math.min(1.4, b / 1200));
  const fein = 24 * m, grob = 120 * m;
  return `<div class="aurora">
    ${wolke('width:64%;height:62%;top:-18%;left:-16%', a1)}
    ${wolke('width:60%;height:62%;bottom:-20%;right:-14%', a2)}
    ${wolke('width:40%;height:44%;top:8%;right:-8%', a3)}
    ${wolke('width:38%;height:42%;bottom:-4%;left:-10%', a4)}
    <div class="raster" style="background-image:
      linear-gradient(${MARKE.rasterGrob} 1px, transparent 1px),
      linear-gradient(90deg, ${MARKE.rasterGrob} 1px, transparent 1px),
      linear-gradient(${MARKE.rasterFein} 1px, transparent 1px),
      linear-gradient(90deg, ${MARKE.rasterFein} 1px, transparent 1px);
      background-size:${grob}px ${grob}px, ${grob}px ${grob}px, ${fein}px ${fein}px, ${fein}px ${fein}px;
      -webkit-mask-image:linear-gradient(#000 45%, transparent 100%);mask-image:linear-gradient(#000 45%, transparent 100%)"></div>
  </div>`;
}

/* Werkzeugfarbe und -verlauf als Variablen, k als Maßstab der Kachel. */
const vars = (t, k) => `--tool:${t.farbe};--tool-flow:${fluss(t)};--k:${k}`;
const kachelStil = (t) => t.kachelGrund ? `background:${t.kachelGrund};border-color:${mit(t.farbe, 40)}` : '';
const nameKlasse = (t) => `name schild${t.nameFlow ? ' verlauf' : ''}`;

/* Der 3-Segment-Farbbalken, die Familien-Signatur der Startseite —
 * vorn immer die Farbe des jeweiligen Werkzeugs. */
const balken = (farbe, stil) => `<div class="balken" style="${stil}">
  <span style="flex:3;background:${farbe}"></span>
  <span style="flex:2;background:${MARKE.eisblau}"></span>
  <span style="flex:2;background:${MARKE.lavendel}"></span></div>`;

const zeile = (zusagen, gr) => zusagen
  .map(z => `<b style="color:${MARKE.text};font-weight:600">${z}</b>`)
  .join(`<span style="color:${MARKE.weich};opacity:.6">·</span>`)
  .replace(/^/, `<div style="display:flex;gap:${0.56 * gr}px;align-items:center;justify-content:center;flex-wrap:wrap;font-size:${gr}px;color:${MARKE.weich}">`) + '</div>';

/* Gaming hat unter dem Namen die drei Icons der Gaming-Seite. */
const unterIcons = (t, g) => t.unterIcons
  ? `<div style="display:flex;gap:${g * 0.35}px;justify-content:center;margin-top:${g * 0.45}px">${t.unterIcons.map(i => `<div style="width:${g}px;height:${g}px">${iconSvg(i, g)}</div>`).join('')}</div>`
  : '';

function karte(t, f) {
  const s = SKALA[f.id] ?? 1;
  /* Seit 14.09.2026 steht Englisch oben: die Link-Vorschau reist weiter als
   * die Seite selbst, und Englisch erreicht mehr Leute als Deutsch. Die Seite
   * dahinter spricht ohnehin vierzehn Sprachen. Deutsch bleibt als zweite
   * Zeile stehen, nur kleiner und in Grau. */
  const zeilen = t.claimEn.split('\n').length;
  /* Die Namenslaenge muss mit rein, nicht nur der claimEn-Umbruch:
   * 'create-masterprompt' (19 Zeichen) bricht bei 86*1.16 auf
   * instagram-1080 sonst zweizeilig um. 'fontART Designer' hat genau 16. */
  const nameGr = (zeilen > 1 || t.name.length > 16 ? 70 : 82) * s;
  const k = 2 * s;
  const rand = 56 * s;
  return kopf(f.b, f.h) + `<div class="buehne" style="align-items:center;justify-content:center;padding:${rand}px ${rand}px ${rand + 34 * s}px">
    ${grund(f.b, f.h)}
    <div class="kachel" style="${vars(t, k)};${kachelStil(t)};width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:${28 * s}px ${44 * s}px">
      <div class="ikon" style="width:${120 * s}px;height:${120 * s}px;margin-bottom:${30 * s}px">${iconSvg(t.icon, 120 * s)}</div>
      <div class="${nameKlasse(t)}" style="font-size:${nameGr}px;letter-spacing:-.015em;line-height:1.05">${t.name}</div>
      ${unterIcons(t, 40 * s)}
      <div class="schild" style="font-size:${40 * s}px;color:${MARKE.text};margin-top:${22 * s}px;line-height:1.14;white-space:pre-line;text-wrap:balance">${t.claimEn}</div>
      <div style="font-size:${26 * s}px;color:${MARKE.weich};margin-top:${12 * s}px">${t.claimDe}</div>
      <div style="margin-top:${34 * s}px">${zeile(t.zusagen, 24 * s)}</div>
    </div>
    ${balken(t.farbe, `bottom:${(rand + 34 * s) / 2 - 3.5 * s}px;left:50%;transform:translateX(-50%);width:${260 * s}px;height:${7 * s}px`)}
  </div>` + fuss;
}

function story(t, f) {
  const k_ = t.story[f.karte];
  const letzte = f.karte === 2;
  return kopf(f.b, f.h) + `<div class="buehne" style="${vars(t, 2.6)};flex-direction:column;align-items:center;justify-content:space-between;padding:140px 70px 120px;text-align:center">
    ${grund(f.b, f.h)}
    <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:30px;flex:0 0 auto">
      <div class="ikon" style="width:160px;height:160px">${iconSvg(t.icon, 160)}</div>
      <div class="${nameKlasse(t)}" style="font-size:52px;letter-spacing:-.01em">${t.name}</div>
    </div>
    <!-- Der Mittelteil nimmt den Rest und zentriert die Kachel darin. Mit
         space-between allein sackte er nach unten und riss ein Loch auf. -->
    <div style="position:relative;flex:1;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:56px 0">
      <div class="kachel" style="${kachelStil(t)};width:100%;padding:84px 64px 92px;display:flex;flex-direction:column;align-items:center">
        <div style="font-size:32px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--tool)">${k_.ober}</div>
        <div class="schild" style="font-size:${letzte ? 100 : 88}px;line-height:1.1;letter-spacing:-.015em;margin-top:38px;text-wrap:balance">${k_.gross}</div>
        <div style="font-size:${letzte ? 40 : 42}px;line-height:1.42;color:${letzte ? 'var(--tool)' : MARKE.weich};margin-top:36px;max-width:820px;text-wrap:pretty;${letzte ? 'font-weight:600;word-break:break-word' : ''}">${k_.unter}</div>
      </div>
    </div>
    <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:40px;flex:0 0 auto">
      <div style="font-size:32px;color:${MARKE.weich}">${MARKE.url}</div>
      ${balken(t.farbe, `position:relative;width:300px;height:9px`)}
    </div>
  </div>` + fuss;
}

/* Das Twitch-Panel IST eine Kachel: 320 × 300 ist fast genau eine Kachel der
 * Startseite. Ein Rand von 10 px lässt die Aurora drumherum sehen. */
function panel(t, f) {
  return kopf(f.b, f.h) + `<div class="buehne" style="align-items:stretch;justify-content:stretch;padding:12px">
    ${grund(f.b, f.h)}
    <div class="kachel" style="${vars(t, 1)};${kachelStil(t)};flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;padding:18px">
      <div class="ikon" style="width:78px;height:78px">${iconSvg(t.icon, 78)}</div>
      <div class="${nameKlasse(t)}" style="font-size:${t.name.length > 16 ? 23 : 27}px;letter-spacing:-.01em;line-height:1.1">${t.name}</div>
      <div style="font-size:16px;color:${MARKE.weich};font-weight:600;line-height:1.3;white-space:pre-line">${t.claimDe}</div>
    </div>
  </div>` + fuss;
}

/* Twitch-Profilbanner, 1200×480 je Werkzeug.
 *
 * Zwei Eigenheiten von Twitch bestimmen das Layout, nicht der Geschmack:
 * schmale Fenster beschneiden das Banner an den Seiten, und je nach
 * Twitch-Fassung sitzt das Profilbild unten links darüber. Deshalb steht
 * alles mittig und die untere linke Ecke bleibt frei — was auch immer
 * Twitch dort einblendet, verdeckt nichts. */
function twitchBanner(t, f) {
  return kopf(f.b, f.h) + `<div class="buehne" style="${vars(t, 2)};align-items:center;justify-content:center;padding:0 96px 52px">
    ${grund(f.b, f.h)}
    <div style="position:relative;display:flex;align-items:center;gap:46px">
      <div class="ikon" style="width:150px;height:150px;flex:0 0 auto">${iconSvg(t.icon, 150)}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="${nameKlasse(t)}" style="font-size:70px;letter-spacing:-.015em;line-height:1.05">${t.name}</div>
        <div style="font-size:32px;font-weight:600;color:${MARKE.text};line-height:1.2;white-space:pre-line">${t.claimDe}</div>
        <div style="font-size:25px;color:${MARKE.weich};margin-top:6px">${t.url}</div>
      </div>
    </div>
    ${balken(t.farbe, 'bottom:0;left:0;width:100%;height:9px;border-radius:0')}
  </div>` + fuss;
}

/* Der Markenname und der Claim im Verlauf, wie .hero h1 der Startseite. */
const claimVerlauf = `background-image:linear-gradient(100deg, ${MARKE.claim[0]}, ${MARKE.claim[1]} 55%, ${MARKE.claim[2]});-webkit-background-clip:text;background-clip:text;color:transparent`;

function banner(f) {
  const hoch = f.h / f.b >= 0.45;
  const s = f.b / 1500;
  /* Alle Kacheln der Startseite, in ihrer Reihenfolge. Seit es siebzehn sind,
   * reicht eine Reihe nicht mehr: einzeln wären die Icons auf dem LinkedIn-
   * Banner kaum 25 px groß. Deshalb ein Raster wie die Kacheln selbst,
   * sechs breit, drei Reihen.
   *
   * Der Zählwerk-Ticker fehlt hier bewusst: Er hat keine eigene Kachel (er
   * gehört zu Zählwerk) und trägt dasselbe Icon. */
  const kacheln = KACHELN.map(slug => TOOLS.find(t => t.slug === slug)).filter(Boolean);
  const spalten = hoch ? 9 : 6;
  const reihen = Math.ceil(kacheln.length / spalten);
  const hoeheFrei = (hoch ? f.h * 0.34 : f.h * 0.62);
  const ikon = Math.min(70 * s, hoeheFrei / (reihen + 0.3 * (reihen - 1)));
  const raster = `<div style="display:grid;grid-template-columns:repeat(${spalten}, ${ikon}px);gap:${ikon * 0.3}px">${kacheln
    .map(t => `<div style="width:${ikon}px;height:${ikon}px;filter:drop-shadow(0 0 ${ikon * 0.16}px ${mit(t.farbe, 45)})">${iconSvg(t.icon, ikon)}</div>`).join('')}</div>`;
  const marke = `<div style="display:flex;flex-direction:column;${hoch ? 'align-items:center;text-align:center' : 'align-items:flex-start'};gap:${14 * s}px">
      <div style="display:flex;align-items:center;gap:${24 * s}px">
        <svg width="${118 * s}" height="${88 * s}" viewBox="2 5 84 63" style="filter:drop-shadow(0 0 ${10 * s}px ${mit(MARKE.claim[1], 62)})">${KISTE_UMRISS('bannerKiste')}</svg>
        <div class="schild" style="font-size:${68 * s}px;letter-spacing:-.01em;${claimVerlauf}">${MARKE.name}</div>
      </div>
      <div class="schild" style="font-size:${38 * s}px;letter-spacing:-.01em;white-space:nowrap;${claimVerlauf}">${MARKE.h1De}</div>
      <!-- Seit fontART (31.07.2026) ist "kostenlos · quelloffen" keine Aussage
           über die ganze Werkstatt mehr, und seit create-masterprompt
           (13.09.2026) auch "ohne Uploads" nicht. Übrig bleibt, was
           ausnahmslos für alle gilt. -->
      <div style="font-size:${26 * s}px;color:${MARKE.weich}">${MARKE.url} · ohne Anmeldung</div>
    </div>`;
  return kopf(f.b, f.h) + `<div class="buehne" style="${hoch
    ? `flex-direction:column;align-items:center;justify-content:center;gap:${60 * s}px;padding:${60 * s}px`
    : `align-items:center;justify-content:space-between;padding:0 ${80 * s}px`}">
    ${grund(f.b, f.h)}
    <div style="position:relative;flex:0 0 auto">${marke}</div>
    <div style="position:relative;flex:0 0 auto">${raster}</div>
    <!-- Der Markenton in der Dunkel-Variante (MARKE.fuellung, --accent-fill aus
         dem CSS); der helle Akzent verschwindet auf dem dunklen Grund fast. -->
    ${balken(MARKE.fuellung, `bottom:0;left:0;width:100%;height:${9 * s}px;border-radius:0`)}
  </div>` + fuss;
}

function avatar(f) {
  const emoji = f.art.startsWith('avatarEmoji');
  /* Das echte 🧰 von Windows ist pink. Auf Königsblau beißt sich das; auf dem
   * dunklen Markengrund sitzt es ruhig. Beides wird gerendert, Dennis wählt.
   * Die Glyphe ist seit 02.11.2026 die gezeichnete Kiste der Startseite im
   * Claim-Verlauf auf dem Aurora-Grund, wie das Symbol vor „Die Werkzeugkiste“. */
  const g = f.b;
  if (!emoji) {
    return kopf(g, g) + `<div class="buehne" style="align-items:center;justify-content:center">
      ${grund(g, g)}
      <svg style="position:relative;filter:drop-shadow(0 0 ${g * 0.03}px ${mit(MARKE.claim[1], 70)})" width="${g * 0.7}" height="${g * 0.525}" viewBox="2 5 84 63">${KISTE_UMRISS('avatarKiste')}</svg>
    </div>` + fuss;
  }
  const dunkel = f.art === 'avatarEmojiDunkel';
  return kopf(g, g) + `<div class="buehne" style="align-items:center;justify-content:center;${dunkel ? '' : `background:${MARKE.koenigsblau}`}">
    ${dunkel ? grund(g, g) : ''}
    <div style="position:relative;font-family:'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif;font-size:${g * 0.56}px;line-height:1">🧰</div>
  </div>` + fuss;
}

const { chromium, herkunft } = await ladeChromium();
console.log(`Playwright aus: ${herkunft}\n`);
const browser = await chromium.launch();
const seite = await browser.newPage({ deviceScaleFactor: 1 });

const bericht = [];

async function schiess(html, f, ordner, dateiname) {
  await mkdir(ordner, { recursive: true });
  const pfad = join(ordner, `${dateiname}.png`);
  await seite.setViewportSize({ width: f.b, height: f.h });
  await seite.setContent(html, { waitUntil: 'load' });
  /* Ohne das Warten steht beim ersten Bild noch Georgia statt Fraunces. */
  await seite.evaluate(() => document.fonts.ready);
  await seite.screenshot({ path: pfad });
  const { size } = await stat(pfad);
  bericht.push({ datei: pfad, b: f.b, h: f.h, kb: Math.round(size / 1024), zweck: f.zweck });
  return pfad;
}

/* 1) Markenbilder */
if ((!nur || nur === '00-marke') && !ohneRendern) {
  const ordner = join(ZIEL, '00-marke');
  for (const f of MARKENFORMATE) {
    const html = f.art === 'banner' ? banner(f) : avatar(f);
    await schiess(html, f, ordner, f.datei);
    console.log(`00-marke/${f.datei}.png`.padEnd(48) + `${f.b}×${f.h}`);
  }
}

/* 2) Bilder je Werkzeug */
for (const t of TOOLS) {
  if (ohneRendern) break;
  if (nur && t.slug !== nur) continue;
  const ordner = join(ZIEL, t.slug);
  for (const f of FORMATE) {
    const html = f.art === 'story' ? story(t, f)
      : f.art === 'panel' ? panel(t, f)
        : f.art === 'twitchBanner' ? twitchBanner(t, f)
          : karte(t, f);
    await schiess(html, f, ordner, f.datei);
    console.log(`${t.slug}/${f.datei}.png`.padEnd(48) + `${f.b}×${f.h}`);
  }
}

await browser.close();

/* 3) Auf Wunsch die drei Dateien in die Repos legen, die dort hingehören:
 *    og.png (die Seite verweist darauf), instagram.png (Vorbild wifi-qr /
 *    Collective-Calc) und github-social.png (muss bei GitHub von Hand in den
 *    Repo-Einstellungen hochgeladen werden, gehört aber versioniert dazu).
 *    Alle übrigen Größen bleiben lokal — ein Repo, das mit Schlankheit wirbt,
 *    trägt keine Story-Bilder mit sich herum. */
if (verteilen) {
  console.log('\nVerteilen in die Repos:');
  for (const t of TOOLS) {
    if (nur && t.slug !== nur) continue;
    /* Gaming hat kein eigenes Repo (die Seite liegt im Startseiten-Repo). */
    if (!t.repo) { console.log(`  ÜBERSPRUNGEN ${t.slug} — kein Repo`); continue; }
    const basis = t.repoBasis ?? REPOS;
    /* Ohne eigene Webseite ist nur die GitHub-Vorschau sinnvoll — og.png und
     * instagram.png hätten dort niemanden, der sie abruft. */
    const noetig = t.hatSeite === false
      ? FORMATE.filter(x => x.inRepo === 'github-social.png')
      : FORMATE.filter(x => x.inRepo);
    for (const f of noetig) {
      const von = join(ZIEL, t.slug, `${f.datei}.png`);
      /* Bilder, die nur GitHub abruft, dürfen bei Projekten mit Bauschritt nicht
       * in den ausgelieferten Ordner. sozialOrdner überstimmt das dort. */
      const ordner = (f.inRepo === 'github-social.png' && t.sozialOrdner) || t.assetOrdner;
      const nach = join(basis, t.repo, ordner, f.inRepo);
      try {
        await mkdir(dirname(nach), { recursive: true });
        await copyFile(von, nach);
        console.log(`  ${t.repo}/${ordner}/${f.inRepo}`);
      } catch (e) {
        console.log(`  ÜBERSPRUNGEN ${t.repo}/${t.assetOrdner}/${f.inRepo} — ${e.code}`);
      }
    }
  }
}

/* Der Bericht enthält nur, was DIESER Lauf gerendert hat. Würde er das
 * Verzeichnis einfach überschreiben, verschwände alles andere daraus — bei
 * --nur die übrigen Werkzeuge, bei --ohne-rendern (also beim reinen Verteilen)
 * sogar der komplette Bestand: Der Bericht ist dann leer, und die Datei wäre
 * danach ein leeres Array. Genau das ist am 31.07.2026 passiert.
 *
 * Deshalb wird immer zusammengeführt statt überschrieben. Ein Vollrender
 * ersetzt dabei ohnehin jeden Eintrag, verliert also nichts. */
const verzeichnisPfad = join(ZIEL, 'bilder-verzeichnis.json');
let gesamt = bericht;
try {
  const alt = JSON.parse(await readFile(verzeichnisPfad, 'utf8'));
  const neuePfade = new Set(bericht.map(b => b.datei));
  gesamt = alt.filter(b => !neuePfade.has(b.datei)).concat(bericht);
} catch { /* noch kein Verzeichnis vorhanden — dann ist der Bericht alles */ }
gesamt.sort((a, b) => a.datei.localeCompare(b.datei, 'de'));
await writeFile(verzeichnisPfad, JSON.stringify(gesamt, null, 2), 'utf8');
const kb = gesamt.reduce((s, b) => s + b.kb, 0);
console.log(`\n${bericht.length} Bilder gerendert; Verzeichnis führt ${gesamt.length}, zusammen ${(kb / 1024).toFixed(1)} MB.`);
