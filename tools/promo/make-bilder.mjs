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
 */

import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { mkdir, writeFile, readFile, stat, copyFile } from 'node:fs/promises';
import { MARKE, TOOLS, FORMATE, MARKENFORMATE, iconSvg, KISTE } from './marke.mjs';

const hier = dirname(fileURLToPath(import.meta.url));
const ZIEL = resolve(hier, '..', 'Bilder');
const REPOS = 'C:/Users/danyr/source/repos';

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

const kopf = (b, h) => `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${b}px;height:${h}px;overflow:hidden}
  body{background:${MARKE.grund};color:${MARKE.text};
       font-family:system-ui,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
       -webkit-font-smoothing:antialiased}
  .buehne{position:relative;width:${b}px;height:${h}px;display:flex;overflow:hidden}
  .schein{position:absolute;border-radius:50%;pointer-events:none}
  .balken{position:absolute;display:flex;border-radius:99px;overflow:hidden}
  .balken span{height:100%}
</style></head><body>`;

const fuss = '</body></html>';

/* Der 3-Segment-Farbbalken, die Familien-Signatur der Startseite —
 * vorn immer die Farbe des jeweiligen Werkzeugs. */
const balken = (farbe, stil) => `<div class="balken" style="${stil}">
  <span style="flex:3;background:${farbe}"></span>
  <span style="flex:2;background:${MARKE.eisblau}"></span>
  <span style="flex:2;background:${MARKE.lavendel}"></span></div>`;

const zeile = (zusagen, gr) => zusagen
  .map(z => `<b style="color:${MARKE.text};font-weight:600">${z}</b>`)
  .join(`<span style="color:${MARKE.linie}">·</span>`)
  .replace(/^/, `<div style="display:flex;gap:${0.56 * gr}px;align-items:center;justify-content:center;flex-wrap:wrap;font-size:${gr}px;color:${MARKE.weich}">`) + '</div>';

function karte(t, f) {
  const s = SKALA[f.id] ?? 1;
  const zeilen = t.claimDe.split('\n').length;
  /* Bei zwei Zeilen Claim muss der Name etwas nachgeben, sonst wird es eng. */
  const nameGr = (zeilen > 1 ? 74 : 86) * s;
  /* Das untere Polster hält den Inhalt vom Farbbalken weg — sonst klebt die
   * Zusagen-Zeile am Balken. */
  return kopf(f.b, f.h) + `<div class="buehne" style="align-items:center;justify-content:center;text-align:center;padding-bottom:${52 * s}px">
    <div class="schein" style="width:${900 * s}px;height:${900 * s}px;top:${-300 * s}px;left:50%;transform:translateX(-50%);
         background:radial-gradient(circle,${t.farbe}22,transparent 65%)"></div>
    <div style="position:relative;display:flex;flex-direction:column;align-items:center;max-width:${f.b - 120 * s}px">
      <div style="width:${132 * s}px;height:${132 * s}px;margin-bottom:${40 * s}px">${iconSvg(t.icon, 132 * s)}</div>
      <div style="font-size:${nameGr}px;font-weight:800;letter-spacing:-.03em;line-height:1">${t.name}</div>
      <div style="font-size:${42 * s}px;font-weight:600;color:${t.farbe};margin-top:${24 * s}px;line-height:1.14;white-space:pre-line;letter-spacing:-.01em">${t.claimDe}</div>
      <div style="font-size:${27 * s}px;color:${MARKE.weich};margin-top:${12 * s}px">${t.claimEn}</div>
      <div style="margin-top:${42 * s}px">${zeile(t.zusagen, 25 * s)}</div>
    </div>
    ${balken(t.farbe, `bottom:${50 * s}px;left:50%;transform:translateX(-50%);width:${260 * s}px;height:${7 * s}px`)}
  </div>` + fuss;
}

function story(t, f) {
  const k = t.story[f.karte];
  const letzte = f.karte === 2;
  return kopf(f.b, f.h) + `<div class="buehne" style="flex-direction:column;align-items:center;justify-content:space-between;padding:150px 96px 130px;text-align:center">
    <div class="schein" style="width:1400px;height:1400px;top:-520px;left:50%;transform:translateX(-50%);
         background:radial-gradient(circle,${t.farbe}26,transparent 62%)"></div>
    <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:34px;flex:0 0 auto">
      <div style="width:168px;height:168px">${iconSvg(t.icon, 168)}</div>
      <div style="font-size:40px;font-weight:700;letter-spacing:.01em">${t.name}</div>
    </div>
    <!-- Der Mittelteil nimmt den ganzen Rest und zentriert sich darin. Mit
         space-between allein sackte er nach unten und riss ein Loch auf. -->
    <div style="position:relative;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center">
      <div style="font-size:34px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${t.farbe}">${k.ober}</div>
      <div style="font-size:${letzte ? 104 : 92}px;font-weight:800;line-height:1.1;letter-spacing:-.025em;margin-top:38px;text-wrap:balance">${k.gross}</div>
      <div style="font-size:${letzte ? 40 : 44}px;line-height:1.42;color:${letzte ? t.farbe : MARKE.weich};margin-top:38px;max-width:840px;text-wrap:pretty;${letzte ? 'font-weight:600;word-break:break-word' : ''}">${k.unter}</div>
    </div>
    <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:40px;flex:0 0 auto">
      <div style="font-size:32px;color:${MARKE.weich}">${MARKE.url}</div>
      ${balken(t.farbe, `position:relative;width:300px;height:9px`)}
    </div>
  </div>` + fuss;
}

function panel(t, f) {
  return kopf(f.b, f.h) + `<div class="buehne" style="flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center;padding:22px">
    <div class="schein" style="width:300px;height:300px;top:-110px;left:50%;transform:translateX(-50%);
         background:radial-gradient(circle,${t.farbe}2b,transparent 62%)"></div>
    <div style="position:relative;width:84px;height:84px">${iconSvg(t.icon, 84)}</div>
    <div style="position:relative;font-size:27px;font-weight:800;letter-spacing:-.02em;line-height:1.1">${t.name}</div>
    <div style="position:relative;font-size:16px;color:${t.farbe};font-weight:600;line-height:1.3;white-space:pre-line">${t.claimDe}</div>
    ${balken(t.farbe, 'bottom:18px;left:50%;transform:translateX(-50%);width:120px;height:5px')}
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
  return kopf(f.b, f.h) + `<div class="buehne" style="align-items:center;justify-content:center;padding:0 96px 52px">
    <div class="schein" style="width:1100px;height:1100px;top:-520px;left:50%;transform:translateX(-50%);
         background:radial-gradient(circle,${t.farbe}26,transparent 63%)"></div>
    <div style="position:relative;display:flex;align-items:center;gap:46px">
      <div style="width:160px;height:160px;flex:0 0 auto">${iconSvg(t.icon, 160)}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <div style="font-size:72px;font-weight:800;letter-spacing:-.03em;line-height:1">${t.name}</div>
        <div style="font-size:34px;font-weight:600;color:${t.farbe};line-height:1.2;letter-spacing:-.01em;white-space:pre-line">${t.claimDe}</div>
        <div style="font-size:25px;color:${MARKE.weich};margin-top:6px">${t.url}</div>
      </div>
    </div>
    ${balken(t.farbe, 'bottom:0;left:0;width:100%;height:9px;border-radius:0')}
  </div>` + fuss;
}

function banner(f) {
  const hoch = f.h / f.b >= 0.45;
  const s = f.b / 1500;
  /* Die Werkzeuge der Startseite in EINER Reihe. Umbruch auf zwei Reihen sah
   * nach Versehen aus und ließ die Bannermitte leer.
   *
   * Der Zählwerk-Ticker fehlt hier bewusst: Er hat keine eigene Kachel (er
   * gehört zu Zählwerk) und trägt dasselbe Icon — zweimal dieselbe Zeichnung
   * nebeneinander liest sich als Fehler.
   *
   * Die Größe wird gerechnet, nicht gesetzt: Mit 76 px passten sechs Icons
   * neben den Markenblock, acht liefen über die Bannerbreite hinaus. Die
   * Reihe hält jetzt ihre Gesamtbreite und teilt sie auf, wie viele es auch
   * werden — das nächste Werkzeug sprengt das Banner also nicht. */
  const kacheln = TOOLS.filter(t => t.slug !== 'startseite' && t.slug !== 'zaehlwerk-ticker');
  const reiheBreit = 560 * s;
  const ikon = Math.min(76 * s, reiheBreit / (kacheln.length + 0.24 * (kacheln.length - 1)));
  const reihe = kacheln
    .map(t => `<div style="width:${ikon}px;height:${ikon}px;flex:0 0 auto">${iconSvg(t.icon, ikon)}</div>`).join('');
  const marke = `<div style="display:flex;flex-direction:column;${hoch ? 'align-items:center;text-align:center' : 'align-items:flex-start'};gap:${14 * s}px">
      <div style="display:flex;align-items:center;gap:${26 * s}px">
        <div style="width:${104 * s}px;height:${104 * s}px">${iconSvg('kiste', 104 * s)}</div>
        <div style="font-size:${64 * s}px;font-weight:800;letter-spacing:-.03em">${MARKE.name}</div>
      </div>
      <div style="font-size:${36 * s}px;color:${MARKE.eisblau};font-weight:600;letter-spacing:-.01em;white-space:nowrap">${MARKE.h1De}</div>
      <!-- Seit fontART (31.07.2026) ist "kostenlos · quelloffen" keine Aussage
           über die ganze Werkstatt mehr — sieben von acht sind beides, das
           achte keins von beidem. Hier steht deshalb dieselbe Zusage wie auf
           den Bildern der Startseite. -->
      <div style="font-size:${26 * s}px;color:${MARKE.weich}">${MARKE.url} · ohne Anmeldung · ohne Uploads</div>
    </div>`;
  return kopf(f.b, f.h) + `<div class="buehne" style="${hoch
    ? `flex-direction:column;align-items:center;justify-content:center;gap:${76 * s}px;padding:${60 * s}px`
    : `align-items:center;justify-content:space-between;padding:0 ${72 * s}px`}">
    <div class="schein" style="width:${1200 * s}px;height:${1200 * s}px;top:${-620 * s}px;left:${hoch ? '50%' : '22%'};transform:translateX(-50%);
         background:radial-gradient(circle,${MARKE.eisblau}1f,transparent 64%)"></div>
    <div style="position:relative;flex:0 0 auto">${marke}</div>
    <div style="position:relative;display:flex;gap:${18 * s}px;flex:0 0 auto">${reihe}</div>
    <!-- Königsblau in der Dunkel-Variante (#3B52D4, --accent-fill aus dem CSS);
         das helle #2439B2 verschwindet auf dem dunklen Grund fast. -->
    ${balken('#3B52D4', `bottom:0;left:0;width:100%;height:${9 * s}px;border-radius:0`)}
  </div>` + fuss;
}

function avatar(f) {
  const emoji = f.art.startsWith('avatarEmoji');
  /* Das echte 🧰 von Windows ist pink. Auf Königsblau beißt sich das; auf dem
   * dunklen Markengrund sitzt es ruhig. Beides wird gerendert, Dennis wählt. */
  const grund = f.art === 'avatarEmojiDunkel' ? MARKE.grund : MARKE.koenigsblau;
  const g = f.b;
  return kopf(g, g) + `<div class="buehne" style="align-items:center;justify-content:center;background:${grund}">
    <div class="schein" style="width:${g * 1.1}px;height:${g * 1.1}px;top:${-g * 0.42}px;left:50%;transform:translateX(-50%);
         background:radial-gradient(circle,#ffffff26,transparent 62%)"></div>
    ${emoji
      ? `<div style="position:relative;font-family:'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif;font-size:${g * 0.56}px;line-height:1">🧰</div>`
      : `<svg style="position:relative" width="${g * 0.66}" height="${g * 0.66}" viewBox="8 8 32 32" xmlns="http://www.w3.org/2000/svg">${KISTE.replaceAll('COLOR', '#ffffff').replaceAll('BG', MARKE.koenigsblau)}</svg>`}
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
  await seite.screenshot({ path: pfad });
  const { size } = await stat(pfad);
  bericht.push({ datei: pfad, b: f.b, h: f.h, kb: Math.round(size / 1024), zweck: f.zweck });
  return pfad;
}

/* 1) Markenbilder */
if (!nur && !ohneRendern) {
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
