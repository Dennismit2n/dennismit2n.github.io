/*
 * Einzige Quelle der Wahrheit für alle Werbebilder.
 *
 * Farben stammen 1:1 aus css/style.css der Startseite — die Dunkel-Variante,
 * weil alle Werbebilder auf dem dunklen Grund #0d1226 stehen; der fotografiert
 * sich auf Instagram besser als der helle.
 *
 * Die Icons sind dieselben SVGs, die auf der Startseite in den Kacheln stecken.
 * Nicht nachzeichnen, nicht "verbessern" — die Wiedererkennung ist der Zweck.
 */

export const MARKE = {
  name: 'Dennis_mit_2n',
  koenigsblau: '#2439B2',
  koenigsblauTief: '#1A2A8C',
  eisblau: '#8FD3F4',
  lavendel: '#A29CCB',
  grund: '#0D1226',
  flaeche: '#141B36',
  text: '#E6E9F7',
  weich: '#A29CCB',
  linie: '#263056',
  h1De: 'Kleine Tools, die auf deinem Gerät laufen',
  h1En: 'Small tools that run on your own device',
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
  kiste: `<rect x="2" y="2" width="44" height="44" rx="11" fill="#2439B2"/>` +
    KISTE.replaceAll('COLOR', '#ffffff').replaceAll('BG', '#2439B2'),
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
    farbe: '#66e0ff',
    claimDe: 'Ein ehrliches RAM-Tool für Windows.',
    claimEn: 'An honest RAM tool for Windows',
    zusagen: ['Windows 10/11', 'quelloffen', 'kostenlos'],
    url: 'github.com/Dennismit2n/Real_RAM_cooler',
    story: [
      { ober: 'Windows', gross: 'Der Knopf, der wirklich etwas tut.', unter: 'Und daneben der, der nichts tut — so beschriftet.' },
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
    farbe: '#a78bfa',
    claimDe: 'Fotos verkleinern – ohne Upload.',
    claimEn: 'Shrink photos in your browser',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'ohne Upload'],
    url: 'dennismit2n.github.io/shrinkling',
    story: [
      { ober: '„Anhang zu groß"', gross: 'Kennst du.', unter: 'Bewerbung, Kleinanzeige, E-Mail — irgendwas ist immer ein paar Megabyte zu dick.' },
      { ober: 'So geht es', gross: 'Bild rein, Größe wählen, fertig.', unter: 'Dein Foto bleibt dabei auf deinem Gerät. Verkleinert wird im Browser selbst — hochgeladen wird nichts.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Jetzt ausprobieren', unter: 'dennismit2n.github.io/shrinkling' },
    ],
    repo: 'shrinkling',
    assetOrdner: 'assets',
  },
  {
    slug: 'wifi-qr',
    name: 'WLAN-QR-Karte',
    icon: 'wifi',
    farbe: '#22d3ee',
    claimDe: 'Gäste scannen – und sind im WLAN.',
    claimEn: 'WiFi QR Card — guests scan and they\u2019re in.',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'ohne Upload'],
    url: 'dennismit2n.github.io/wifi-qr',
    story: [
      { ober: 'Kein Buchstabieren mehr', gross: '„Wie war das WLAN-Passwort?"', unter: 'Groß-S, kleines l, Null oder O … jedes Mal dasselbe Theater.' },
      { ober: 'So geht es', gross: 'Karte erstellen, ausdrucken, hinstellen.', unter: 'Gäste halten die Kamera davor und sind verbunden. Dein Passwort wird dabei nie irgendwohin gesendet.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Karte erstellen', unter: 'dennismit2n.github.io/wifi-qr' },
    ],
    repo: 'wifi-qr',
    assetOrdner: 'assets',
  },
  {
    slug: 'collective-calc',
    name: 'Collective-Calc',
    icon: 'collective',
    farbe: '#4ade80',
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
    farbe: '#fbbf24',
    claimDe: 'Der Countdown bis zum großen Tag.',
    claimEn: 'Countdown to your big day',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'als Link zum Teilen'],
    url: 'dennismit2n.github.io/bigday',
    story: [
      { ober: 'Urlaub, Geburtstag, Ruhestand', gross: 'Wie lange noch?', unter: 'Manche Tage will man zählen sehen.' },
      { ober: 'So geht es', gross: 'Titel, Datum, Stimmung wählen.', unter: 'Der ganze Countdown steckt im Link. Du verschickst ihn, und beim anderen läuft dieselbe Uhr — ohne Konto, ohne App.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Countdown bauen', unter: 'dennismit2n.github.io/bigday' },
    ],
    repo: 'bigday',
    assetOrdner: 'assets',
  },
  {
    slug: 'dreh-das-rad',
    name: 'Dreh das Rad',
    icon: 'rad',
    farbe: '#fb7185',
    claimDe: 'Optionen rein – das Los entscheidet.',
    claimEn: 'Let the wheel decide',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'als Link zum Teilen'],
    url: 'dennismit2n.github.io/dreh-das-rad',
    story: [
      { ober: 'Zwölfte Minute Diskussion', gross: 'Und, was essen wir?', unter: 'Irgendwann will keiner mehr entscheiden.' },
      { ober: 'So geht es', gross: 'Optionen rein, Rad drehen.', unter: 'Jedes Feld hat wirklich dieselbe Chance — gezogen wird mit dem Zufallsgenerator des Browsers, nicht mit einer Animation, die hübsch aussieht.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Rad drehen', unter: 'dennismit2n.github.io/dreh-das-rad' },
    ],
    repo: 'dreh-das-rad',
    assetOrdner: 'assets',
  },
  {
    slug: 'startseite',
    name: 'Dennis_mit_2n',
    icon: 'kiste',
    farbe: '#8FD3F4',
    claimDe: 'Kleine Tools, die auf deinem Gerät laufen.',
    claimEn: 'Small tools that run on your own device',
    zusagen: ['Kostenlos', 'quelloffen', 'deine Daten bleiben bei dir'],
    url: 'dennismit2n.github.io',
    story: [
      { ober: 'Eine Werkstatt', gross: 'Sechs kleine Werkzeuge.', unter: 'Für Sachen, die im Alltag nerven.' },
      { ober: 'Was sie gemeinsam haben', gross: 'Sie laufen auf deinem Gerät.', unter: 'Kein Konto, keine Anmeldung, keine Uploads. Fünf im Browser, eines für Windows.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Werkzeugkiste öffnen', unter: 'dennismit2n.github.io' },
    ],
    repo: 'dennismit2n.github.io',
    assetOrdner: 'assets',
  },
  {
    slug: 'zaehlwerk',
    name: 'Zählwerk',
    icon: 'zaehlwerk',
    farbe: '#a3e635',
    claimDe: 'Wohin geht dein Claude-Code-Verbrauch?',
    claimEn: 'Where does your Claude Code usage go?',
    zusagen: ['Kostenlos', 'ohne Anmeldung', 'ohne Upload'],
    url: 'dennismit2n.github.io/zaehlwerk',
    story: [
      { ober: 'Für Claude-Code-Nutzer', gross: 'Viel gearbeitet. Aber woran?', unter: 'Claude Code legt für jede Sitzung ein Protokoll an. Darin steht alles — nur liest es niemand.' },
      { ober: 'So geht es', gross: 'Ordner auswählen, fertig.', unter: 'Aufgeschlüsselt nach Tag, Modell und Projekt. Gerechnet wird im Browser — deine Protokolle werden nicht hochgeladen.' },
      { ober: 'Kostenlos & quelloffen', gross: 'Jetzt ansehen', unter: 'dennismit2n.github.io/zaehlwerk' },
    ],
    repo: 'zaehlwerk',
    assetOrdner: 'assets',
  },
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
