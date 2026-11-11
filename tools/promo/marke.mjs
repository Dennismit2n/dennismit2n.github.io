/*
 * Einzige Quelle der Wahrheit für alle Werbebilder.
 *
 * DIESE DATEI LIEGT ZWEIMAL — in werkstatt/ des Launchkits und in tools/promo/
 * des Startseiten-Repos — und muss an beiden Stellen Byte für Byte gleich sein.
 * Der Ausgabeordner ergibt sich von selbst aus dem Ablageort, weil
 * make-bilder.mjs nach ../Bilder schreibt. Bis zum 14.09.2026 waren die beiden
 * Fassungen anderthalb Monate auseinandergelaufen: die eine trug die Werkzeuge
 * und die geprüften Zusagen, die andere die neuen Farben — und ausgeliefert
 * wurde die mit den alten. Wer hier etwas ändert, kopiert es sofort hinüber.
 *
 * Farben stammen 1:1 aus css/style.css der Startseite — die Dunkel-Variante,
 * weil alle Werbebilder auf dem dunklen Grund stehen; der fotografiert sich auf
 * Instagram besser als der helle. Seit dem Farbwechsel auf die Palette
 * ggaallaaxxyy77 ist das der violette Grund #0F0F21 statt des alten
 * Marineblaus #0D1226. Wer hier etwas ändert, ändert es auch in style.css — und
 * umgekehrt.
 *
 * Die Icons sind dieselben SVGs, die auf der Startseite in den Kacheln stecken.
 * Nicht nachzeichnen, nicht "verbessern" — die Wiedererkennung ist der Zweck.
 *
 * Seit 02.11.2026 tragen die Bilder das Design der Startseite vom 30.10.2026
 * (Aurora mit vier Wolken, Bauplanraster, Fraunces, Kachel mit Farbkappe und
 * Leuchten, alle Kachelfarben neu gerechnet) und kennen die fünf neuen
 * Auftritte (Heizwarte, Pocketsum, Fadenkreuz, Werkstatt-Mods, Gaming). Am
 * 03.11.2026 nach tools/promo/ im Startseiten-Repo nachgezogen und in die Repos
 * verteilt, beide Kopien sind seitdem wieder gleich. Verteilen in die Repos
 * gehört weiter in den Startseiten-Chat, nicht in den Launchkit-Chat
 * (öffentlich gegen privat).
 */

export const MARKE = {
  name: 'Dennis_mit_2n',
  koenigsblau: '#524AAB',
  koenigsblauTief: '#464480',
  eisblau: '#75C7FF',
  lavendel: '#AFA1FF',
  grund: '#0F0F21',
  flaeche: '#181831',
  /* --panel-veil der Dunkel-Variante: die Kacheln sind leicht durchscheinend,
   * die Aurora dahinter schimmert durch. */
  schleier: 'rgba(24, 24, 49, 0.86)',
  text: '#E2E2F6',
  /* --text-soft seit 30.10.2026 (vorher #9C9ECD). */
  weich: '#B7B9DC',
  linie: '#2D2C4F',
  /* --accent der Dunkel-Variante seit 30.10.2026 (primary-200). */
  akzent: '#B4B5FF',
  /* Der Claim im Verlauf des README-Banners, wie .hero h1 auf der Startseite. */
  claim: ['#A5A5FF', '#75C7FF', '#AFA1FF'],
  /* Die vier Aurora-Wolken (--au-1 … --au-4) mit ihrer Deckkraft. */
  aurora: [['#4B3CAB', 0.7], ['#502684', 0.75], ['#015BA6', 0.55], ['#781B7E', 0.4]],
  rasterFein: 'rgba(165, 165, 255, 0.05)',
  rasterGrob: 'rgba(165, 165, 255, 0.1)',
  /* --accent-fill der Dunkel-Variante: der helle Akzent verschwindet auf
   * dem dunklen Grund fast, deshalb trägt der Balken eine Stufe mehr. */
  fuellung: '#6D54FB',
  h1De: 'Kleine Werkzeuge, die nichts von dir wollen',
  h1En: 'Small tools that want nothing from you',
  untertitel: 'Eine Werkstatt von Dennis_mit_2n.',
  url: 'dennismit2n.github.io',
};

/* Die Werkzeugkiste als Glyphe. Bewusst mit durchgehender Deckelfuge und
 * breiter, flacher Griffmulde: ein zentriertes Kästchen liest sich als
 * Vorhängeschloss, und ein Schloss ist die falsche Botschaft. */
export const KISTE = `
  <path d="M17 14.6v-1.9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1.9" fill="none" stroke="COLOR" stroke-width="3.4" stroke-linecap="round"/>
  <rect x="7.5" y="14.6" width="33" height="22" rx="3.6" fill="COLOR"/>
  <path d="M7.5 25.6h33" stroke="BG" stroke-width="3"/>
  <rect x="19" y="22.1" width="10" height="3.4" rx="1.7" fill="BG"/>`;

/* Die gezeichnete Kiste der Startseite (.tb-icon, seit 30.10.2026): Umriss im
 * Claim-Verlauf, Feld 2 5 84 63. Die id wird je Aufruf übergeben, damit zwei
 * Kisten auf einem Bild sich nicht den Verlauf wegnehmen. */
export const KISTE_UMRISS = (id) => `<defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="8" y1="11" x2="80" y2="62"><stop offset="0" stop-color="${MARKE.claim[0]}"/><stop offset="0.55" stop-color="${MARKE.claim[1]}"/><stop offset="1" stop-color="${MARKE.claim[2]}"/></linearGradient></defs><g fill="none" stroke="url(#${id})" stroke-linecap="round" stroke-linejoin="round"><path d="M28 20V14Q28 11 31 11H57Q60 11 60 14V20M34 20V16H54V20" stroke-width="4.6"/><rect x="8" y="20" width="72" height="42" rx="8" stroke-width="5"/><path d="M8 33H80" stroke-width="4.2"/><path d="M18 29v8M70 29v8" stroke-width="6.4"/></g>`;

const ICONS = {
  ram: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#0369a1"/>
  <g stroke="#fff" stroke-width="2.5" stroke-linecap="round" fill="none">
    <g><path d="M24 9.5V38.5"/><path d="M24 15.5l-4-4M24 15.5l4-4"/><path d="M24 32.5l-4 4M24 32.5l4 4"/></g>
    <g transform="rotate(60 24 24)"><path d="M24 9.5V38.5"/><path d="M24 15.5l-4-4M24 15.5l4-4"/><path d="M24 32.5l-4 4M24 32.5l4 4"/></g>
    <g transform="rotate(120 24 24)"><path d="M24 9.5V38.5"/><path d="M24 15.5l-4-4M24 15.5l4-4"/><path d="M24 32.5l-4 4M24 32.5l4 4"/></g>
  </g>`,
  zaehlwerk: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#2f4a08"/>
  <rect x="8" y="13" width="32" height="22" rx="4" fill="none" stroke="#a3e635" stroke-width="2.5"/>
  <rect x="13" y="18" width="6" height="12" rx="1.5" fill="#a3e635"/>
  <rect x="21" y="21" width="6" height="9" rx="1.5" fill="#a3e635" opacity=".7"/>
  <rect x="29" y="24" width="6" height="6" rx="1.5" fill="#a3e635" opacity=".45"/>`,
  /* Dieselbe Zeichnung wie assets/fontart.svg in der Kachel: ein Pinselstrich
   * als gemalte Grundlinie, darüber ein „fA". Die Farben stammen aus dem
   * Programm selbst (Icon-Grund #1c1530, gelbes fA #eac54f, pinker Strich
   * #f776a8) und nicht aus der Kachelfarbe — drinnen sieht es so aus. */
  fontart: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#1c1530"/>
  <path d="M9 35.5c4.5-3 9-3 13.5 0s9 3 13.5-1.5" fill="none" stroke="#f776a8" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M22 15h-2.6c-2 0-3.4 1.3-3.4 3.4V29" fill="none" stroke="#eac54f" stroke-width="3" stroke-linecap="round"/>
  <path d="M13.5 20.5h7" fill="none" stroke="#eac54f" stroke-width="3" stroke-linecap="round"/>
  <path d="M26 29l4.5-14L35 29" fill="none" stroke="#eac54f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M27.8 24.5h5.4" fill="none" stroke="#eac54f" stroke-width="3" stroke-linecap="round"/>`,
  /* Prismatical: Prisma-Dreieck mit aufgefaechertem Spektrum — dieselben
     Farbstopps wie die Staerke-Anzeige der App. Einziges Icon der Werkstatt
     mit mehr als zwei Farben, und genau das ist der Punkt. */
  prismatical: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#1c1b1f"/>
  <path d="M6 24h11" stroke="#f2efe9" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M24 10 13 36h22z" fill="none" stroke="#f2efe9" stroke-width="2.6" stroke-linejoin="round"/>
  <g stroke-width="2.6" stroke-linecap="round">
    <path d="M30 21 43 13" stroke="#e5484d"/>
    <path d="M31 24 44 19" stroke="#f76b15"/>
    <path d="M32 27 45 26" stroke="#e2c541"/>
    <path d="M31 30 44 34" stroke="#6fbf3b"/>
    <path d="M30 33 43 41" stroke="#7a5cff"/>
  </g>`,
  /* Besucher-Ticker: schwarzes Rundquadrat, drei blaue Saeulen, pinker Punkt —
     wie das Overlay selbst und sein Symbol im Infobereich der Taskleiste. */
  /* Dieselbe Zeichnung wie assets/spectroton.svg in der Kachel: EINE Farbe in
   * Stufen von hell nach dunkel statt vieler Farbtoene — genau das, was das
   * Werkzeug tut. Fuenf statt elf Balken, weil elf bei 44 px nur noch
   * Streifen waeren. */
  spectro: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#0c1c1b"/>
  <rect x="10" y="10.4" width="28" height="4.4" rx="2" fill="#d9fbf4"/>
  <rect x="10" y="16.1" width="28" height="4.4" rx="2" fill="#7fe8dc"/>
  <rect x="10" y="21.8" width="28" height="4.4" rx="2" fill="#2dd4bf"/>
  <rect x="10" y="27.5" width="28" height="4.4" rx="2" fill="#14a89c"/>
  <rect x="10" y="33.2" width="28" height="4.4" rx="2" fill="#0b7068"/>`,
  /* Dieselbe Zeichnung wie assets/masterprompt.svg in der Kachel: oben die
   * verstreuten Punkte der noch vagen Idee, darunter der Knick, der sie
   * zusammenfuehrt, unten das fertige Kontext-Paket als geordnete Zeilen.
   * Der tiefe Rostton ist der Icon-Grund der Kachel, nicht die Akzentfarbe. */
  masterprompt: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#7c2d12"/>
  <circle cx="14" cy="11" r="2.2" fill="#fb923c" opacity=".55"/>
  <circle cx="24" cy="8.5" r="2.2" fill="#fb923c" opacity=".85"/>
  <circle cx="34" cy="11.5" r="2.2" fill="#fb923c" opacity=".55"/>
  <path d="M17 17l7 6 7-6" fill="none" stroke="#fb923c" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="12" y="27.5" width="24" height="3.4" rx="1.7" fill="#fb923c"/>
  <rect x="12" y="33" width="24" height="3.4" rx="1.7" fill="#fb923c" opacity=".75"/>
  <rect x="12" y="38.5" width="16" height="3.4" rx="1.7" fill="#fb923c" opacity=".5"/>`,
  ticker: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#101321"/>
  <rect x="9" y="14" width="8" height="24" rx="1.5" fill="#2f6bff"/>
  <rect x="20" y="21" width="8" height="17" rx="1.5" fill="#38bdf8"/>
  <rect x="31" y="28" width="8" height="10" rx="1.5" fill="#2f6bff" opacity=".8"/>
  <circle cx="36.5" cy="13.5" r="4.5" fill="#ff2d95"/>`,
  shrink: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#7c3aed"/>
  <rect x="9" y="17" width="22" height="19" rx="3" fill="none" stroke="#fff" stroke-width="3"/>
  <circle cx="15.5" cy="23.5" r="2.2" fill="#fff"/>
  <path d="M11.5 33.5l5.5-6 4 4.2 2.8-3 4.7 4.8z" fill="#fff"/>
  <path d="M39 9l-8.2 8.2" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M30 11.5v6.5h6.5z" fill="#fff"/>`,
  wifi: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#0e7490"/>
  <path d="M12 21.5c6.6-6 17.4-6 24 0" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M16.5 27.5c4.2-3.8 10.8-3.8 15 0" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>
  <circle cx="24" cy="34" r="2.6" fill="#fff"/>`,
  collective: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#0d2a18"/>
  <circle cx="24" cy="24" r="15" fill="#4ade80"/>
  <g stroke="#0d2a18" stroke-width="3.4" stroke-linecap="round">
    <path d="M24 24 L24 9.5"/><path d="M24 24 L36.6 31.2"/><path d="M24 24 L11.4 31.2"/>
  </g>
  <circle cx="24" cy="24" r="3" fill="#0d2a18"/>`,
  bigday: `<defs><linearGradient id="bdg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a2540"/><stop offset="0.6" stop-color="#0e5a8a"/><stop offset="1" stop-color="#14b8a6"/>
    </linearGradient></defs>
  <rect x="2" y="2" width="44" height="44" rx="11" fill="url(#bdg)"/>
  <circle cx="24" cy="27" r="7.5" fill="#ffd166"/>
  <path d="M7 31.5c5.5-3.2 11.5-3.2 17 0s11.5 3.2 17 0" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M11 37.5c4.3-2.4 9-2.4 13 0s8.7 2.4 13 0" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity="0.75"/>
  <path d="M34.5 9l1.5 3.4 3.4 1.5-3.4 1.5-1.5 3.4-1.5-3.4-3.4-1.5 3.4-1.5z" fill="#fff"/>`,
  rad: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#7a2e12"/>
  <circle cx="24" cy="27" r="16.5" fill="#c62828"/>
  <path d="M24 27 L24 12 A15 15 0 0 1 36.99 19.5 Z" fill="#f5c518"/>
  <path d="M24 27 L36.99 34.5 A15 15 0 0 1 24 42 Z" fill="#f5c518"/>
  <path d="M24 27 L11.01 34.5 A15 15 0 0 1 11.01 19.5 Z" fill="#f5c518"/>
  <path d="M24 27 L36.99 19.5 A15 15 0 0 1 36.99 34.5 Z" fill="#0b7f8a"/>
  <path d="M24 27 L24 42 A15 15 0 0 1 11.01 34.5 Z" fill="#fdf1dd"/>
  <path d="M24 27 L11.01 19.5 A15 15 0 0 1 24 12 Z" fill="#0b7f8a"/>
  <circle cx="24" cy="27" r="3.6" fill="#fdf1dd"/>
  <path d="M24 15.5 L19.6 5.5 L28.4 5.5 Z" fill="#fdf1dd"/>`,
  /* Seit 30.10.2026 steht auf der Startseite die GEZEICHNETE Kiste (.tb-icon
   * vor „Die Werkzeugkiste“): Umriss im Claim-Verlauf statt gefüllter
   * Glyphe. Pfade 1:1 aus index.html, nur in das 48er-Feld gesetzt. */
  kiste: `<rect x="2.5" y="2.5" width="43" height="43" rx="11" fill="${MARKE.flaeche}" stroke="${MARKE.linie}"/>` +
    `<g transform="translate(6.2 9.2) scale(0.405)">${KISTE_UMRISS('kisteVerlauf')}</g>`,
  /* Ab hier die Icons, die seit dem 15.09.2026 auf die Startseite kamen. Jeweils
   * der Inhalt von assets/<name>.svg, unverändert. */
  heizwarte: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#0b6b93"/><path d="M10 24 24 12l14 12" fill="none" stroke="#e0f2fe" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 22v14h20V22" fill="none" stroke="#e0f2fe" stroke-width="3" stroke-linejoin="round"/><rect x="22.5" y="21" width="3" height="10" rx="1.5" fill="#fde047"/><circle cx="24" cy="31.5" r="3.5" fill="#f87171"/>`,
  /* follower-log.svg zeichnet auf 100, hier auf 48 verkleinert. */
  followerlog: `<g transform="scale(0.48)"><rect width="100" height="100" rx="18" fill="#0f1115"/><circle cx="38.8" cy="38.8" r="10.4" fill="#8fa3c4"/><path d="M19.6 74.8a19.2 19.2 0 0 1 38.4 0z" fill="#8fa3c4"/><rect x="59.6" y="38.4" width="20.8" height="4" fill="#7FE39B"/><rect x="68" y="30" width="4" height="20.8" fill="#7FE39B"/><rect x="59.6" y="60.8" width="20.8" height="4" fill="#FF9A92"/></g>`,
  /* pocketsum.svg hat als einziges ein 44er-Feld; um 2 verschoben sitzt es
   * genau wie die anderen. */
  pocketsum: `<g transform="translate(2 2)"><rect width="44" height="44" rx="11" fill="#181831"/>
  <path d="M11.5 12.5H32.5V26.2q0 2.2-1.9 3.4L22 35.2l-8.6-5.6q-1.9-1.2-1.9-3.4Z" fill="#1F1F3D" stroke="#A5A5FF" stroke-width="2" stroke-linejoin="round"/>
  <path d="M14 17.4V25.6q0 1.3 1.1 2L22 32.1l6.9-4.5q1.1-.7 1.1-2V17.4" fill="none" stroke="#A5A5FF" stroke-width=".9" stroke-dasharray="1.6 1.4" stroke-linecap="round" opacity=".6"/>
  <g stroke-width="2.6" stroke-linecap="butt"><path d="M11.5 14.3h4.2" stroke="#A5A5FF"/><path d="M15.7 14.3h4.2" stroke="#FFC97A"/><path d="M19.9 14.3h4.2" stroke="#75C7FF"/><path d="M24.1 14.3h4.2" stroke="#7EE0A0"/><path d="M28.3 14.3h4.2" stroke="#FF9FB5"/></g>
  <path d="M26.4 19.2H17.6l4.6 4.9-4.6 4.9h8.8" fill="none" stroke="#E2E2F6" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g>`,
  fadenkreuz: `<rect x="2.5" y="2.5" width="43" height="43" rx="11" fill="#0b0d0c" stroke="#33ff88" stroke-opacity=".4"/>
  <circle cx="24" cy="24" r="11.5" fill="none" stroke="#33ff88" stroke-width="2.2" opacity=".6"/>
  <path d="M24 8v9M24 31v9M8 24h9M31 24h9" stroke="#33ff88" stroke-width="3" stroke-linecap="square"/>
  <rect x="22" y="22" width="4" height="4" fill="#ffffff"/>`,
  mods: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#1b1030"/>
  <rect x="9" y="11" width="30" height="26" rx="3" fill="none" stroke="#e08ad0" stroke-width="2.4"/>
  <rect x="27.5" y="12.2" width="10.3" height="23.6" rx="2" fill="#e08ad0" opacity="0.85"/>
  <rect x="12.5" y="15.5" width="10" height="2.4" rx="1.2" fill="#e08ad0" opacity="0.6"/>
  <rect x="12.5" y="20.5" width="12" height="2.4" rx="1.2" fill="#e08ad0" opacity="0.6"/>
  <rect x="12.5" y="30.2" width="12" height="3.4" rx="1.7" fill="#e08ad0"/>`,
  gaming: `<defs><linearGradient id="gaming-verlauf" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff2bd6"/><stop offset="0.36" stop-color="#ff3b5c"/><stop offset="0.68" stop-color="#2f8bff"/><stop offset="1" stop-color="#33ff88"/></linearGradient></defs>
  <rect x="2" y="2" width="44" height="44" rx="11" fill="#26262b"/>
  <path d="M16.5 15.5h15a8 8 0 0 1 7.8 6.2l2 8.9a4.3 4.3 0 0 1-7.3 3.8l-3.4-3.7h-13.2l-3.4 3.7a4.3 4.3 0 0 1-7.3-3.8l2-8.9a8 8 0 0 1 7.8-6.2z" fill="none" stroke="url(#gaming-verlauf)" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M16 20.5v6.5M12.75 23.75h6.5" stroke="#f4f4f5" stroke-width="2.3" stroke-linecap="round"/>
  <circle cx="31" cy="26.2" r="1.8" fill="#ff3b5c"/><circle cx="34.6" cy="22.4" r="1.8" fill="#2f8bff"/>`,
  craftionary: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#20262b"/>
  <rect x="7.2" y="7.2" width="9.6" height="9.6" rx="1.2" fill="#c8693a"/><rect x="19.2" y="7.2" width="9.6" height="9.6" rx="1.2" fill="#b9c0c4"/><rect x="31.2" y="7.2" width="9.6" height="9.6" rx="1.2" fill="#b9c0c4"/>
  <rect x="7.2" y="19.2" width="9.6" height="9.6" rx="1.2" fill="#b9c0c4"/><rect x="19.2" y="19.2" width="9.6" height="9.6" rx="1.2" fill="#c8693a"/><rect x="31.2" y="19.2" width="9.6" height="9.6" rx="1.2" fill="#b9c0c4"/>
  <rect x="7.2" y="31.2" width="9.6" height="9.6" rx="1.2" fill="#b9c0c4"/><rect x="19.2" y="31.2" width="9.6" height="9.6" rx="1.2" fill="#b9c0c4"/><rect x="31.2" y="31.2" width="9.6" height="9.6" rx="1.2" fill="#4fa391"/>`,
  bl4: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#ffd400"/>
  <defs><pattern id="bl4-streifen" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="5" height="5" fill="#16120a"/><rect width="2.4" height="5" fill="#ffd400"/></pattern></defs>
  <rect x="37.5" y="7" width="4.5" height="34" fill="url(#bl4-streifen)" stroke="#16120a" stroke-width="1"/>
  <g transform="translate(4.4 0) skewX(-10)" stroke-linejoin="round">
    <g fill="#16120a" transform="translate(1.6 1.6)"><polygon points="7,13 12,13 15,27.5 18,13 23,13 17.6,35 12.4,35"/><polygon points="23.5,13 28,13 28,21.6 31.5,21.6 31.5,13 36,13 36,35 31.5,35 31.5,26 28,26 28,35 23.5,35"/></g>
    <g fill="#ffffff" stroke="#16120a" stroke-width="2"><polygon points="7,13 12,13 15,27.5 18,13 23,13 17.6,35 12.4,35"/><polygon points="23.5,13 28,13 28,21.6 31.5,21.6 31.5,13 36,13 36,35 31.5,35 31.5,26 28,26 28,35 23.5,35"/></g>
  </g>`,
  mw4: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#12171a"/>
  <polygon points="24,8.5 37.5,16.25 37.5,31.75 24,39.5 10.5,31.75 10.5,16.25" fill="none" stroke="#dcd0b0" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="24" cy="24" r="6.8" fill="none" stroke="#b5d334" stroke-width="2.3"/>
  <path d="M24 14.5v19M14.5 24h19" stroke="#b5d334" stroke-width="2.3" stroke-linecap="round"/>
  <circle cx="24" cy="24" r="2" fill="#f07d24"/>`,
};

/*
 * Ein Eintrag je Auftritt.
 *
 *   farbe      Akzent in der Dunkel-Variante aus css/style.css
 *   claimDe    Der Satz, der auf dem Bild groß steht. Nutzen, nicht Funktion.
 *   claimEn    Dieselbe Aussage englisch, klein darunter — Muster von Collective-Calc.
 *   zusagen    Drei geprüfte Zusagen. Nichts hier darf unwahr sein.
 *   story      Drei Story-Karten: Aufhänger, Ablauf, Aufforderung.
 *   repo       Zielordner für og.png / instagram.png, relativ zu source/repos.
 */
export const TOOLS = [
  {
    slug: 'real-ram-cooler',
    name: 'Real_RAM_cooler',
    icon: 'ram',
    farbe: '#6CB2FF',
    claimDe: 'Ein ehrliches RAM-Tool für Windows.',
    claimEn: 'An honest RAM tool for Windows',
    zusagen: ['Windows 10/11', 'quelloffen', 'kostenlos'],
    url: 'github.com/Dennismit2n/Real_RAM_cooler',
    story: [
      { ober: 'Windows', gross: 'Der Knopf, der wirklich etwas tut.', unter: 'Und daneben der Placebo-Knopf. Der heißt auch so.' },
      { ober: 'Was passiert', gross: 'Leert die Standby-Liste.', unter: 'Kein Zaubertrick, keine erfundene Zahl. Nur der eine Systemaufruf, den Windows dafür anbietet.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Herunterladen', unter: 'github.com/Dennismit2n/Real_RAM_cooler' },
    ],
    repo: 'Real_RAM_cooler v.1.2',
    repoBasis: 'C:/Projekte/CLAUDE',
    assetOrdner: 'assets',
    /* Windows-App ohne Webseite: og.png und instagram.png hätten dort keinen
     * Abnehmer. Nur die GitHub-Vorschau ist sinnvoll. */
    hatSeite: false,
  },
  {
    slug: 'shrinkling',
    name: 'shrinkling',
    icon: 'shrink',
    farbe: '#C28DFF',
    claimDe: 'Fotos verkleinern, ohne Upload.',
    claimEn: 'Shrink photos in your browser',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'ohne Upload'],
    url: 'dennismit2n.github.io/shrinkling',
    story: [
      { ober: '„Anhang zu groß“', gross: 'Kennst du.', unter: 'Bewerbung, Kleinanzeige, E-Mail: irgendwas ist immer ein paar Megabyte zu dick.' },
      { ober: 'So geht es', gross: 'Bild rein, Größe wählen, fertig.', unter: 'Dein Foto bleibt dabei auf deinem Gerät. Verkleinert wird im Browser selbst, hochgeladen wird nichts.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Jetzt ausprobieren', unter: 'dennismit2n.github.io/shrinkling' },
    ],
    repo: 'shrinkling',
    assetOrdner: 'assets',
  },
  {
    slug: 'wifi-qr',
    name: 'WLAN-QR-Karte',
    icon: 'wifi',
    farbe: '#23E3FA',
    claimDe: 'Gäste scannen und sind im WLAN.',
    claimEn: 'WiFi QR card: guests scan and they\u2019re in.',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'ohne Upload'],
    url: 'dennismit2n.github.io/wifi-qr',
    story: [
      { ober: 'Kein Buchstabieren mehr', gross: '„Wie war das WLAN-Passwort?“', unter: 'Groß-S, kleines l, Null oder O … jedes Mal dasselbe Theater.' },
      { ober: 'So geht es', gross: 'Karte erstellen, ausdrucken, hinstellen.', unter: 'Gäste halten die Kamera davor und sind verbunden. Dein Passwort wird dabei nie irgendwohin gesendet.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Karte erstellen', unter: 'dennismit2n.github.io/wifi-qr' },
    ],
    repo: 'wifi-qr',
    assetOrdner: 'assets',
  },
  {
    slug: 'prismatical',
    name: 'Prismatical',
    icon: 'prismatical',
    /* Die App hat keine feste Akzentfarbe, sie ist das Spektrum. Fuer die
     * Bilder braucht es trotzdem einen Vollton: der violette Endpunkt der
     * Staerke-Skala, derselbe Anker wie auf der Startseiten-Kachel. */
    farbe: '#CCC6FF',
    flow: 'linear-gradient(100deg, #ff9e95, #ffae55, #cfd149, #00e8df, #bfb9ff)',
    nameFlow: true,
    claimDe: 'Passwörter, deren Stärke man sieht.',
    claimEn: 'Passwords whose strength you can see',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'ohne Upload'],
    url: 'dennismit2n.github.io/prismatical',
    story: [
      { ober: '„Sommer2024!“', gross: 'Kennst du.', unter: 'Man denkt sich bei jeder Anmeldung ein neues aus und nimmt am Ende doch wieder eine Variante vom alten.' },
      { ober: 'So geht es', gross: 'Regler ziehen, Farbe wandert.', unter: 'Die ganze Oberfläche färbt sich nach der Stärke: rot ist schwach, violett ist stark. Du siehst beim Schieben, was Länge wirklich bringt.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Jetzt ausprobieren', unter: 'dennismit2n.github.io/prismatical' },
    ],
    repo: 'prismatical',
    assetOrdner: 'public',
  },
  {
    slug: 'spectroton',
    name: 'Spectroton',
    icon: 'spectro',
    /* Die App selbst hat kein Farbschema — ihre Farbe kommt einzig aus der
     * eingegebenen Basisfarbe. Die Kachel hat neben dem Verlauf --spectro-flow
     * aber sehr wohl einen Anker-Vollton, und fuers Bild braucht es genau den:
     * derselbe Ton wie die mittlere Stufe im Icon. */
    farbe: '#01DFC8',
    flow: 'linear-gradient(100deg, #8bfff8, #48e8e0, #13ccc5, #00b0a9, #129993)',
    nameFlow: true,
    claimDe: 'Eine Farbe rein, elf Stufen raus.',
    /* Der Vorbehalt "German only for now" stand hier bis zum 14.09.2026 —
     * seither spricht Spectroton dieselben vierzehn Sprachen wie die uebrigen
     * Web-Werkzeuge, und die Einschraenkung waere unwahr. */
    claimEn: 'One colour in, eleven matching shades out',
    /* Statt "ohne Upload": der Hex-Wert der Basisfarbe geht bei jeder Aenderung
     * an api.color.pizza, die uebliche Zeile waere hier schlicht falsch. Der
     * externe Aufruf steht dort, wo ein ganzer Satz Platz hat: Story 2.
     * An dritter Stelle stand bis zum 14.09.2026 die Sprache ("vorerst nur auf
     * Deutsch"); seit der Umstellung auf vierzehn Sprachen ist das erledigt.
     * Jetzt "quelloffen" — MIT, wie im Repo nachzulesen, und ein Wort ohne
     * Zahl, das nicht still veraltet. */
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'quelloffen'],
    url: 'dennismit2n.github.io/spectroton',
    story: [
      { ober: 'Website, Shop, Präsentation', gross: 'Eine Farbe reicht nie.', unter: 'Eine hellere für Flächen, eine dunklere für Rahmen und eine, auf der Text noch lesbar bleibt.' },
      { ober: 'So geht es', gross: 'Farbe eingeben, elf Stufen ablesen.', unter: 'Neben jeder Stufe steht ihr Kontrastwert. Du siehst sofort, ob Text darauf noch trägt. Gerechnet wird im Browser, nur der Farbname kommt von api.color.pizza.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Palette bauen', unter: 'dennismit2n.github.io/spectroton' },
    ],
    repo: 'spectroton',
    /* Die Bilder liegen in der Wurzel wie bei fontART-demo, nicht in assets/.
     * Das Repo ist seit 13.09.2026 geklont — vorher haette --verteilen den
     * Ordner stillschweigend selbst angelegt und Erfolg gemeldet. */
    assetOrdner: '',
    /* hatSeite bleibt ungesetzt, die Seite gibt es. Sie hat aber noch kein
     * og:image im Quelltext — og.png geht also mit, DAMIT index.html darauf
     * zeigen kann, nicht weil es schon jemand abruft. Nachzutragen sind
     * og:image, og:image:width und og:image:alt; genau die drei prueft
     * pruefliste.py, und seit das Repo lokal liegt, meldet sie sonst FEHLER. */
  },
  {
    slug: 'create-masterprompt',
    /* 19 Zeichen — der laengste name der Datei. Auf instagram-1080 bricht er
     * ohne Gegenmassnahme zweizeilig um ('create-' / 'masterprompt', liest
     * sich wie eine verunglueckte Silbentrennung); die Notbremse in karte()
     * haengt an claimDe-Umbruechen, nicht an der Namenslaenge. Deshalb dort
     * zusaetzlich t.name.length > 16. Der Name selbst bleibt: so heisst das
     * Repo und so heisst die Kachel. */
    name: 'create-masterprompt',
    icon: 'masterprompt',
    farbe: '#FF8F4B',
    claimDe: 'Der nächste Chat fängt nicht bei null an.',
    /* Englisch ebenfalls verneint statt 'starts where the last one stopped':
     * beide Zeilen stehen auf demselben Bild uebereinander, und die staerkere
     * englische Fassung wuerde mehr behaupten als die deutsche darueber. */
    claimEn: 'The next chat does not start from zero',
    /* Weder Browser-Werkzeug noch Programm, deshalb passt keine der beiden
     * eingespielten Zeilen: 'ohne Upload' waere falsch (fuer claude.ai laedt
     * man eine Zip hoch), 'Windows 10/11' auch. Uebrig bleibt die Zeile der
     * Kachel, ohne den Klammerzusatz. */
    zusagen: ['Für KI-Chats', 'quelloffen', 'kostenlos'],
    url: 'github.com/Dennismit2n/create-masterprompt',
    /* Texte/create-masterprompt.md sagt Instagram, Story und Reel ausdruecklich
     * ab ('lohnt hier nicht'): es gibt kein ehrliches Bildmotiv, solange der
     * Screenshot des Ausloesemoments fehlt. Die drei Karten stehen hier nur,
     * weil story() fuer jeden Eintrag auf t.story[f.karte] zugreift — das Feld
     * ist strukturell Pflicht. Sie werden nicht gepostet; wer sie spaeter im
     * Bilderkatalog findet, darf daraus NICHT schliessen, die Absage sei
     * zurueckgenommen. */
    story: [
      { ober: 'Für Claude Code & claude.ai', gross: 'Sitzung vier widerspricht Sitzung zwei.', unter: 'Weil die Entscheidung aus Sitzung zwei nur im Chatverlauf stand, und den liest niemand zurück.' },
      /* 'sechs Phasen' steht hier bewusst NICHT: fakten.json verlangt fuer jede
       * Nennung den Zusatz, dass Phase 0 ein Gate ist und S/M gar nicht alle
       * sechs durchlaufen — auf einer Werbekarte landet so ein Zusatz
       * zwangslaeufig als letzter Halbsatz und faellt beim Umbruch zuerst weg.
       * Ohne die Zahl entfaellt die Pflicht ganz. */
      { ober: 'So geht es', gross: 'Idee eintippen, Fragen beantworten.', unter: 'Heraus kommen drei Dateien: Briefing, Entscheidungslog und Übergabe. Die Übergabe entsteht, bevor das Kontextlimit kommt, nicht danach.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Herunterladen', unter: 'github.com/Dennismit2n/create-masterprompt' },
    ],
    repo: 'create-masterprompt',
    /* Liegt als einziges Werkzeug nicht unter source/repos, sondern beim
     * uebrigen Skill-Kram — derselbe Pfad, den pruefliste.py als Konstante
     * MASTERPROMPT schon kennt. Der Apostroph zwingt zu doppelten
     * Anfuehrungszeichen. */
    repoBasis: `${(globalThis.process?.env?.USERPROFILE ?? '').replace(/\\/g, '/')}/Claud_ins.Projects/CLAUDE/meine_Skill's`,
    /* NICHT 'docs': docs/ steckt in jedem `git clone --depth 1`, und genau so
     * installiert man diesen Skill. Ein Werbebild laege damit bei jedem Nutzer
     * im Skill-Ordner und risse zwei belegte Zahlen um. Deshalb promo/ daneben
     * (Vorbild: sozialOrdner 'promo' bei Collective-Calc), nicht versioniert,
     * sondern von Hand in den Repo-Einstellungen als Social Preview
     * hochgeladen. 'promo/' gehoert dafuer in die .gitignore des Skills. */
    assetOrdner: 'promo',
    /* Weder Webseite noch Programm: es gibt keine Seite, die og.png einbinden
     * koennte, und keinen Beitrag, der instagram.png braeuchte. Nur die
     * GitHub-Vorschau hat einen Abnehmer. */
    hatSeite: false,
  },
  {
    slug: 'collective-calc',
    name: 'Collective-Calc',
    icon: 'collective',
    farbe: '#00E698',
    claimDe: 'Wer schuldet wem was?',
    claimEn: 'Who owes whom?',
    zusagen: ['Ohne Konto', 'ohne App', 'ohne eigenen Server'],
    url: 'dennismit2n.github.io/collective-calc',
    story: [
      { ober: 'Nach jedem Urlaub', gross: 'Wer schuldet wem was?', unter: 'Einer hat das Haus bezahlt, jemand anders ständig den Einkauf.' },
      { ober: 'So geht es', gross: 'Eintragen, Link in die Gruppe, fertig.', unter: 'Die anderen brauchen kein Konto und keine App. Sie tippen auf den Link und sehen, was sie schulden.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Jetzt abrechnen', unter: 'dennismit2n.github.io/collective-calc' },
    ],
    repo: 'collective-calc',
    assetOrdner: 'public',
    /* Vite kopiert alles aus public/ in die Auslieferung. github-social.png
     * braucht nur GitHub und ruft kein Besucher ab — in public/ würde es die
     * ausgelieferte Seite um 80 KB aufblähen, die niemand lädt. Deshalb daneben. */
    sozialOrdner: 'promo',
  },
  {
    slug: 'bigday',
    name: 'bigday',
    icon: 'bigday',
    farbe: '#FFC334',
    claimDe: 'Der Countdown bis zum großen Tag.',
    claimEn: 'Countdown to your big day',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'als Link zum Teilen'],
    url: 'dennismit2n.github.io/bigday',
    story: [
      { ober: 'Urlaub, Geburtstag, Ruhestand', gross: 'Wie lange noch?', unter: 'Manche Tage will man zählen sehen.' },
      { ober: 'So geht es', gross: 'Titel, Datum, Stimmung wählen.', unter: 'Der ganze Countdown steckt im Link. Du verschickst ihn, und beim anderen läuft dieselbe Uhr, ohne Konto, ohne App.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Countdown bauen', unter: 'dennismit2n.github.io/bigday' },
    ],
    repo: 'bigday',
    assetOrdner: 'assets',
  },
  {
    slug: 'dreh-das-rad',
    name: 'Dreh das Rad',
    icon: 'rad',
    farbe: '#FF7886',
    claimDe: 'Optionen rein, das Los entscheidet.',
    claimEn: 'Let the wheel decide',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'als Link zum Teilen'],
    url: 'dennismit2n.github.io/dreh-das-rad',
    story: [
      { ober: 'Zwölfte Minute Diskussion', gross: 'Und, was essen wir?', unter: 'Irgendwann will keiner mehr entscheiden.' },
      { ober: 'So geht es', gross: 'Optionen rein, Rad drehen.', unter: 'Jedes Feld hat wirklich dieselbe Chance. Gezogen wird mit dem Zufallsgenerator des Browsers, nicht mit einer Animation, die hübsch aussieht.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Rad drehen', unter: 'dennismit2n.github.io/dreh-das-rad' },
    ],
    repo: 'dreh-das-rad',
    assetOrdner: 'assets',
  },
  {
    slug: 'startseite',
    name: 'Dennis_mit_2n',
    icon: 'kiste',
    farbe: MARKE.eisblau,
    flow: `linear-gradient(100deg, ${MARKE.claim[0]}, ${MARKE.claim[1]} 55%, ${MARKE.claim[2]})`,
    nameFlow: true,
    claimDe: 'Kleine Werkzeuge, die nichts von dir wollen.',
    claimEn: 'Small tools that want nothing from you',
    /* Diese drei Zeilen sind am 13.09.2026 einzeln gegen alle zwölf Werkzeuge
     * geprüft worden, nachdem reihenweise Kandidaten durchgefallen sind.
     * Was hier NICHT stehen darf und warum:
     *   "kostenlos"/"quelloffen"  — fontART ist beides nicht (seit 31.07.2026).
     *   "ohne Uploads"/"deine Daten bleiben bei dir" — für claude.ai lädt man
     *     eine Zip hoch, und fakten.json verbietet dem Skill ausdrücklich
     *     "läuft auf deinem Gerät" (seit 13.09.2026).
     *   "ohne Werbung" — fontART blendet zehn ausgegraute Knöpfe mit
     *     "nur in der Vollversion"-Tooltips ein und stempelt "fontART DEMO"
     *     als Schriftnamen in jede exportierte Schrift. Ein Mouseover genügt
     *     als Gegenbeweis. Deshalb "keine Anzeigen": kein Werbenetz,
     *     kein Affiliate-Link, kein Sponsorenhinweis, kein einziges <iframe>
     *     in allen zwölf Repos — das hält. ("keine fremde Werbung" wäre
     *     ebenso wahr, ergibt aber 64 Zeichen und bricht auf
     *     instagram-1080 um — gerendert nachgesehen, nicht gerechnet.)
     *   "ohne Tracker" — GoatCounter läuft auf mehreren; fakten.json verbietet
     *     "Kein Tracking" dort wörtlich.
     *   "ohne Cookies" — Collective-Calc lädt count.js live von gc.zgo.at,
     *     fontARTs Windows-Fassung ist Electron.
     *   "ohne Abo" — Zählwerk braucht ein Claude-Code-Abo, und fontARTs
     *     Bezahlmodell steht laut fakten.json bewusst nicht fest.
     *   "offline nutzbar" — Zählwerk hat keinen Service Worker, der
     *     Besucher-Ticker IST ein Live-Abruf.
     * "ohne Konto" stand hier bis 13.09. und war nur "Ohne Anmeldung" zweimal.
     * Platz 3 nennt fontART beim Namen, statt die Aussage zu verwässern:
     * "kostenlos ausprobieren" würde nahelegen, dass die anderen elf später
     * etwas kosten — und das ist ausdrücklich nicht der Fall (Dennis, 13.09.). */
    zusagen: ['Ohne Anmeldung', 'keine Anzeigen', 'kostenlos, außer fontART'],
    url: 'dennismit2n.github.io',
    story: [
      { ober: 'Eine Werkstatt', gross: 'Lauter kleine Werkzeuge.', unter: 'Für Sachen, die im Alltag nerven. Und ein paar fürs Zocken.' },
      { ober: 'Was sie gemeinsam haben', gross: 'Sie wollen nichts von dir.', unter: 'Kein Konto, keine Anmeldung, keine fremde Werbung. Die meisten laufen im Browser, ein paar unter Windows, dazu ein Skill für KI-Chats und Mods für Claude Code.' },
      { ober: 'Ohne Anmeldung, ohne fremde Werbung', gross: 'Werkzeugkiste öffnen', unter: 'dennismit2n.github.io' },
    ],
    repo: 'dennismit2n.github.io',
    assetOrdner: 'assets',
  },
  {
    slug: 'zaehlwerk',
    name: 'Zählwerk',
    icon: 'zaehlwerk',
    farbe: '#BEE800',
    claimDe: 'Wohin geht dein Claude-Code-Verbrauch?',
    claimEn: 'Where does your Claude Code usage go?',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'ohne Upload'],
    url: 'dennismit2n.github.io/zaehlwerk',
    story: [
      { ober: 'Für Claude-Code-Nutzer', gross: 'Viel gearbeitet. Aber woran?', unter: 'Claude Code legt für jede Sitzung ein Protokoll an. Darin steht alles, nur liest es niemand.' },
      { ober: 'So geht es', gross: 'Ordner auswählen, fertig.', unter: 'Aufgeschlüsselt nach Tag, Modell und Projekt. Gerechnet wird im Browser, deine Protokolle werden nicht hochgeladen.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Jetzt ansehen', unter: 'dennismit2n.github.io/zaehlwerk' },
    ],
    repo: 'zaehlwerk',
    assetOrdner: 'assets',
  },
  {
    slug: 'zaehlwerk-ticker',
    name: 'Zählwerk Ticker',
    icon: 'zaehlwerk',
    farbe: '#BEE800',
    claimDe: 'Der Verbrauch im Blick, während du arbeitest.',
    claimEn: 'Usage in view while you work',
    zusagen: ['Windows 10/11', 'quelloffen', 'kostenlos'],
    url: 'github.com/Dennismit2n/zaehlwerk-ticker',
    story: [
      { ober: 'Für Claude-Code-Nutzer', gross: 'Wie viel ist im Fenster schon weg?', unter: 'Eine kleine schwebende Anzeige beantwortet genau diese eine Frage, ohne dass man etwas aufrufen muss.' },
      { ober: 'So geht es', gross: 'Hinlegen, doppelklicken, fertig.', unter: 'Laufendes Fünf-Stunden-Fenster, Tagessumme, stärkste Modelle. Liest nur die Protokolle auf der eigenen Platte, ohne Netzzugriff.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Herunterladen', unter: 'github.com/Dennismit2n/zaehlwerk-ticker' },
    ],
    repo: 'zaehlwerk-ticker',
    assetOrdner: 'assets',
    /* Windows-App ohne Webseite: og.png und instagram.png haetten dort keinen
     * Abnehmer. Nur die GitHub-Vorschau ist sinnvoll. */
    hatSeite: false,
  },
  {
    slug: 'besucher-ticker',
    name: 'Besucher-Ticker',
    icon: 'ticker',
    farbe: '#7D95FF',
    claimDe: 'Deine Besucherzahlen, immer im Blick.',
    claimEn: 'Your visitor numbers, always in view',
    zusagen: ['Windows 10/11', 'quelloffen', 'kostenlos'],
    url: 'github.com/Dennismit2n/besucher-ticker',
    story: [
      { ober: 'Für GoatCounter-Nutzer', gross: 'Wie viele waren heute da?', unter: 'Eine kleine schwebende Anzeige beantwortet genau diese Frage, ohne dass man eine Seite aufrufen muss.' },
      { ober: 'So geht es', gross: 'Adresse und Token eintragen, fertig.', unter: 'Aufrufe im gewählten Zeitraum, Besucher je Seite als Balken, dazu Länder oder Verweise. Das Token bleibt verschlüsselt auf dem eigenen Rechner.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Herunterladen', unter: 'github.com/Dennismit2n/besucher-ticker' },
    ],
    repo: 'besucher-ticker',
    assetOrdner: 'assets',
    /* Windows-App ohne eigene Webseite — wie der Zaehlwerk Ticker. Nur die
     * GitHub-Vorschau hat einen Abnehmer. */
    hatSeite: false,
  },
  {
    slug: 'fontart-demo',
    name: 'fontART Designer',
    icon: 'fontart',
    farbe: '#F96EF0',
    flow: 'linear-gradient(100deg, #EAC54F, #F96EF0, #EAC54F, #F96EF0, #EAC54F)',
    claimDe: 'Deine Handschrift wird zur Schriftart.',
    claimEn: 'Your handwriting becomes a font',
    /* Der kommerzielle Sonderfall der Werkstatt. Hier darf NICHT die
     * Zusagen-Zeile der anderen sieben stehen:
     *   - "Kostenlos" ohne Zusatz wäre falsch — kostenlos ist die Testversion,
     *     die Vollversion soll Geld kosten.
     *   - "quelloffen" wäre falsch — im Repo liegen nur die READMEs und das
     *     gebaute Bündel, kein Quelltext und keine eingeräumten Rechte.
     * Was bleibt, ist wahr für beide Fassungen und steht wortgleich als
     * fontartMeta an der Kachel der Startseite. */
    zusagen: ['Im Browser & für Windows', 'Testversion', 'Vollversion in Arbeit'],
    url: 'dennismit2n.github.io/fontART-demo',
    story: [
      { ober: 'Karten, Etiketten, Kochbuch', gross: 'Deine eigene Handschrift.', unter: 'Nicht als Bild, sondern als echte Schriftdatei, die in Word einfach in der Liste steht.' },
      { ober: 'So geht es', gross: 'Buchstaben malen, Schrift herausbekommen.', unter: 'Mit Maus, Stift oder Finger. Am Handy wird gemalt und exportiert, installiert wird am Rechner.' },
      { ober: 'Testversion kostenlos', gross: 'Ausprobieren', unter: 'dennismit2n.github.io/fontART-demo' },
    ],
    repo: 'fontART-demo',
    /* Die Browser-Fassung liegt in der Wurzel des Repos — dort liegt auch die
     * index.html, die auf og.png verweist. Deshalb kein Unterordner. */
    assetOrdner: '',
  },
  /* Ab hier die fünf Auftritte, die seit dem 15.09.2026 dazukamen (eingetragen
   * am 02.11.2026). Claims und Zusagen stammen aus den Kacheltexten der
   * Startseite (heizwarteDesc/-Meta usw. in js/i18n.js), die schon geprüft und
   * live sind. Alle fünf Repos tragen eine MIT-Lizenz (nachgesehen). */
  {
    slug: 'heizwarte',
    name: 'Heizwarte',
    icon: 'heizwarte',
    farbe: '#A7E3FF',
    flow: 'linear-gradient(100deg, #7dd3fc, #86efac, #fde047, #fdba74, #f87171)',
    nameFlow: true,
    claimDe: 'Wann muss die Heizung hoch?',
    claimEn: 'When should the heating go up?',
    /* Die Meta-Zeile der Kachel ohne „14 Sprachen“: drei Teile wie überall. */
    zusagen: ['Im Browser', 'ohne Konto', 'Wetter von Open-Meteo & DWD'],
    url: 'dennismit2n.github.io/heizwarte',
    story: [
      { ober: 'Fußbodenheizung, Altbau, Estrich', gross: 'Die Heizung ist träge.', unter: 'Wenn die Kälte da ist, ist es zum Hochdrehen schon zu spät.' },
      { ober: 'So geht es', gross: 'Ort eintragen, Ampel ablesen.', unter: 'Die Heiz-Ampel schaut aufs Wetter von heute und den nächsten zwei Tagen und sagt dir, wann die Heizung hoch muss. Für bis zu fünf Orte.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Ampel ansehen', unter: 'dennismit2n.github.io/heizwarte' },
    ],
    repo: 'heizwarte',
    assetOrdner: 'assets',
  },
  {
    slug: 'pocketsum',
    name: 'Pocketsum',
    icon: 'pocketsum',
    farbe: '#E2E2F6',
    flow: 'linear-gradient(90deg, #A5A5FF 0 20%, #FFC97A 20% 40%, #75C7FF 40% 60%, #7EE0A0 60% 80%, #FF9FB5 80%)',
    nameFlow: true,
    claimDe: 'Fünf Rechner für die Hosentasche.',
    claimEn: 'Five calculators for your pocket',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'offline nach dem ersten Besuch'],
    url: 'dennismit2n.github.io/pocketsum',
    story: [
      { ober: 'Mehrwertsteuer, Trinkgeld, Sprit', gross: 'Schnell mal ausrechnen.', unter: 'Und dafür eine App mit Werbung und Konto installieren? Muss nicht sein.' },
      { ober: 'So geht es', gross: 'Reiter wählen, Zahl eintippen.', unter: 'Mehrwertsteuer, Trinkgeld, Spritpreis, Dividende und Trade-Kosten. Fünf Rechner in einer Datei, gerechnet wird auf deinem Gerät.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Jetzt rechnen', unter: 'dennismit2n.github.io/pocketsum' },
    ],
    repo: 'pocketsum',
    /* Wurzel, nicht assets/: index.html verweist auf og.png neben sich, einen
     * assets-Ordner hat Pocketsum nicht (nachgesehen 03.11.2026). */
    assetOrdner: '',
  },
  {
    slug: 'fadenkreuz',
    name: 'Fadenkreuz',
    icon: 'fadenkreuz',
    farbe: '#33ff88',
    /* Die Kachel ist in BEIDEN Darstellungen schwarz (#0d100e), nicht
     * durchscheinend. Das Bild übernimmt das. */
    kachelGrund: '#0d100e',
    claimDe: 'Dein eigenes Fadenkreuz, über deinem Spiel.',
    claimEn: 'Your own crosshair, over your game',
    zusagen: ['Windows 10/11', 'rund 1 MB RAM', 'kostenlos'],
    url: 'github.com/Dennismit2n/fadenkreuz',
    story: [
      { ober: 'Für Shooter', gross: 'Das Fadenkreuz im Spiel passt nicht?', unter: 'Zu dick, zu dünn, falsche Farbe. Oder es gibt gar keins.' },
      { ober: 'So geht es', gross: 'Selbst zeichnen, fertig.', unter: 'Im Editor zeichnest du es selbst oder nimmst eine Vorlage. Dann liegt es in der Bildschirmmitte über dem Spiel, und Klicks gehen durch.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Herunterladen', unter: 'github.com/Dennismit2n/fadenkreuz' },
    ],
    repo: 'fadenkreuz',
    /* docs/ trägt dort schon die README-Bilder (nachgesehen 03.11.2026). */
    assetOrdner: 'docs',
    /* Windows-Programm ohne eigene Webseite: nur die GitHub-Vorschau hat einen
     * Abnehmer. */
    hatSeite: false,
  },
  {
    /* Eingetragen am 11.11.2026 mit der Kachel. Rot und Grün im Wechsel wie
     * --followerlog-flow der Startseite (dunkle Fassung, Deckkraft 88 %). */
    slug: 'follower-log',
    name: 'Follower-Log',
    icon: 'followerlog',
    farbe: '#7FE39B',
    flow: 'linear-gradient(100deg, #FF9A92E0, #7FE39BE0, #FF9A92E0, #7FE39BE0, #FF9A92E0, #7FE39BE0)',
    nameFlow: true,
    claimDe: 'Wer folgt dir, wer ist gegangen?',
    claimEn: 'Who follows you, who has left?',
    zusagen: ['Kostenlos', 'GitHub-Vorlage', 'läuft in deinem eigenen Repo'],
    url: 'dennismit2n.github.io/follower-log-vorlage',
    story: [
      { ober: 'Für alle mit GitHub-Konto', gross: 'Wer ist eigentlich gegangen?', unter: 'GitHub zeigt dir nur die aktuelle Liste. Wer dir nicht mehr folgt, erfährst du dort nicht.' },
      { ober: 'So geht es', gross: 'Vorlage kopieren, App öffnen.', unter: 'Ein Workflow schreibt jeden Tag auf, wer neu ist und wer weg ist. Die App fürs Handy zeigt das Logbuch aus deinem privaten Repo.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Vorlage ansehen', unter: 'dennismit2n.github.io/follower-log-vorlage' },
    ],
    repo: 'follower-log-vorlage',
    /* docs/ ist die Wurzel der Seite auf GitHub Pages, dort liegt index.html. */
    assetOrdner: 'docs',
  },
  {
    slug: 'werkstatt-mods',
    name: 'Werkstatt-Mods',
    icon: 'mods',
    farbe: '#E08AD0',
    claimDe: 'Neun Mods für Claude Code.',
    claimEn: 'Nine mods for Claude Code',
    zusagen: ['Für Claude Code', 'Deutsch & Englisch', 'quelloffen (MIT)'],
    url: 'dennismit2n.github.io/mods.html',
    story: [
      { ober: 'Für Claude-Code-Nutzer', gross: 'Wie viel ist vom Limit noch übrig?', unter: 'Claude Code zeigt vieles, aber nicht alles auf einen Blick.' },
      { ober: 'So geht es', gross: 'Eine Zeile, und der Mod ist drin.', unter: 'Neun Mods von der Statistik-Leiste bis zum Sichtschutz. Jeder einzeln, mit einer Zeile nachinstalliert.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Mods ansehen', unter: 'dennismit2n.github.io/mods.html' },
    ],
    repo: 'werkstatt-mods',
    /* docs/ gibt es dort erst seit dem Verteilen am 03.11.2026 (Dennis' Wahl). */
    assetOrdner: 'docs',
    /* Die Seite mods.html liegt im Startseiten-Repo, nicht hier. Im Mod-Repo
     * selbst braucht nur GitHub ein Vorschaubild. */
    hatSeite: false,
  },
  {
    slug: 'gaming',
    name: 'Gaming',
    icon: 'gaming',
    /* Graphit wie --gaming, der Verlauf trägt die Farbe. */
    farbe: '#a1a1aa',
    flow: 'linear-gradient(90deg, #ff2bd6, #ff3b5c, #2f8bff, #33ff88)',
    /* Auf der Kachel steht der Name in Graphit. Im Bild wirkte das grau und
     * matt neben der bunten Kappe, deshalb hier im Verlauf der Kappe. */
    nameFlow: true,
    claimDe: 'Guides und Werkzeuge fürs Zocken.',
    claimEn: 'Guides and tools for gaming',
    /* Keine Zusagen im üblichen Sinn, sondern die drei Spiele: das ist die
     * Information, die beim Scrollen zählt. */
    zusagen: ['Minecraft', 'Borderlands 4', 'Modern Warfare 4'],
    url: 'dennismit2n.github.io/gaming.html',
    /* Die drei Icons der Gaming-Seite, auf den Karten unter dem Namen. */
    unterIcons: ['craftionary', 'bl4', 'mw4'],
    story: [
      { ober: 'Minecraft, Borderlands 4, MW4', gross: 'Wie ging nochmal das Rezept?', unter: 'Mitten im Spiel raus zum Browser und suchen, bis man es endlich hat.' },
      { ober: 'So geht es', gross: 'Öffnen, nachschlagen, weiterspielen.', unter: 'Craftionary für Minecraft, das Vault-Handbuch für Borderlands 4 und die Rüstkammer für Modern Warfare 4. Am Handy und am Rechner, installierbar.' },
      { ober: 'Kostenlos, ohne Anmeldung', gross: 'Jetzt reinschauen', unter: 'dennismit2n.github.io/gaming.html' },
    ],
    /* Die Gaming-Seite liegt im Startseiten-Repo, Craftionary im eigenen.
     * Kein Verteilen: es gibt kein Repo, das genau dieses Bild bräuchte. */
    repo: null,
    hatSeite: false,
  },
];

/* Reihenfolge der Kacheln auf der Startseite (Stand 02.11.2026, index.html),
 * für die Icon-Reihe der Banner. Der Zählwerk Ticker hat keine eigene Kachel. */
export const KACHELN = [
  'create-masterprompt', 'werkstatt-mods', 'real-ram-cooler', 'fontart-demo',
  'prismatical', 'spectroton', 'shrinkling', 'wifi-qr', 'heizwarte', 'follower-log', 'pocketsum',
  'zaehlwerk', 'besucher-ticker', 'collective-calc', 'dreh-das-rad', 'gaming',
  'bigday', 'fadenkreuz',
];

export function iconSvg(schluessel, groesse) {
  return `<svg class="marke" width="${groesse}" height="${groesse}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${ICONS[schluessel]}</svg>`;
}

/*
 * Alle Formate, die irgendwo gebraucht werden. Wer eine Größe sucht:
 * hier steht, wofür sie gut ist — das erspart das Nachschlagen bei der
 * jeweiligen Plattform.
 */
export const FORMATE = [
  { id: 'og', datei: 'og', b: 1200, h: 630, art: 'karte', zweck: 'Link-Vorschau in WhatsApp, Signal, Telegram, Facebook, Mastodon, Discord', inRepo: 'og.png' },
  { id: 'social', datei: 'github-social', b: 1280, h: 640, art: 'karte', zweck: 'GitHub Social Preview (Repo → Settings → Social preview)', inRepo: 'github-social.png' },
  { id: 'ig', datei: 'instagram-1080', b: 1080, h: 1080, art: 'karte', zweck: 'Instagram-Beitrag, Facebook-Beitrag, quadratisch', inRepo: 'instagram.png' },
  { id: 'li', datei: 'linkedin-1200x627', b: 1200, h: 627, art: 'karte', zweck: 'LinkedIn-Beitrag mit Bild' },
  { id: 'x', datei: 'x-1600x900', b: 1600, h: 900, art: 'karte', zweck: 'X/Twitter-Beitrag, 16:9' },
  { id: 'story1', datei: 'story-1-aufhaenger', b: 1080, h: 1920, art: 'story', karte: 0, zweck: 'Story/Reel, Karte 1 von 3 — der Aufhänger' },
  { id: 'story2', datei: 'story-2-ablauf', b: 1080, h: 1920, art: 'story', karte: 1, zweck: 'Story/Reel, Karte 2 von 3 — wie es funktioniert' },
  { id: 'story3', datei: 'story-3-aufforderung', b: 1080, h: 1920, art: 'story', karte: 2, zweck: 'Story/Reel, Karte 3 von 3 — Link' },
  { id: 'twitch', datei: 'twitch-panel-320x300', b: 320, h: 300, art: 'panel', zweck: 'Twitch-Panel unter dem Stream' },
  { id: 'twitchBanner', datei: 'twitch-banner-1200x480', b: 1200, h: 480, art: 'twitchBanner', zweck: 'Twitch-Profilbanner (Einstellungen → Kanal → Marke)' },
];

/* Markenweite Bilder, unabhängig vom einzelnen Werkzeug. */
export const MARKENFORMATE = [
  { id: 'banner1200', datei: 'banner-1200x480', b: 1200, h: 480, art: 'banner', zweck: 'Profil-Banner, allgemein (von Dennis angefragte Größe)' },
  { id: 'bannerX', datei: 'banner-x-1500x500', b: 1500, h: 500, art: 'banner', zweck: 'Kopfbild bei X/Twitter (deren Sollmaß)' },
  { id: 'bannerLi', datei: 'banner-linkedin-1584x396', b: 1584, h: 396, art: 'banner', zweck: 'Kopfbild bei LinkedIn (deren Sollmaß)' },
  { id: 'bannerFb', datei: 'banner-facebook-1640x856', b: 1640, h: 856, art: 'banner', zweck: 'Kopfbild bei Facebook (deren Sollmaß)' },
  { id: 'avatarGlyph1024', datei: 'profilbild-glyphe-1024', b: 1024, h: 1024, art: 'avatarGlyph', zweck: 'Profilbild, gezeichnete Werkzeugkiste — überall gleich, auch wo Emoji fehlen' },
  { id: 'avatarGlyph512', datei: 'profilbild-glyphe-512', b: 512, h: 512, art: 'avatarGlyph', zweck: 'Profilbild 512, für Plattformen mit kleinerem Limit' },
  { id: 'avatarGlyph256', datei: 'profilbild-glyphe-256', b: 256, h: 256, art: 'avatarGlyph', zweck: 'Profilbild 256, Foren und alte Dienste' },
  { id: 'avatarEmoji1024', datei: 'profilbild-emoji-1024', b: 1024, h: 1024, art: 'avatarEmoji', zweck: 'Profilbild mit echtem 🧰 — dasselbe Zeichen wie in der Überschrift der Startseite' },
  { id: 'avatarEmoji512', datei: 'profilbild-emoji-512', b: 512, h: 512, art: 'avatarEmoji', zweck: 'Profilbild-Emoji 512' },
  { id: 'avatarEmoji256', datei: 'profilbild-emoji-256', b: 256, h: 256, art: 'avatarEmoji', zweck: 'Profilbild-Emoji 256' },
  { id: 'avatarEmojiD1024', datei: 'profilbild-emoji-dunkel-1024', b: 1024, h: 1024, art: 'avatarEmojiDunkel', zweck: 'Profilbild mit 🧰 auf dem dunklen Markengrund — das pinke Emoji beißt sich nicht mit Königsblau' },
  { id: 'avatarEmojiD512', datei: 'profilbild-emoji-dunkel-512', b: 512, h: 512, art: 'avatarEmojiDunkel', zweck: 'Profilbild-Emoji dunkel 512' },
  { id: 'avatarEmojiD256', datei: 'profilbild-emoji-dunkel-256', b: 256, h: 256, art: 'avatarEmojiDunkel', zweck: 'Profilbild-Emoji dunkel 256' },
];
