/*
 * dennismit2n.github.io — per-tool release notes
 *
 * Hand-maintained, deliberately without fetch and without a build step: built
 * like i18n.js, so werkstatt.html behaves the same on tools/dev-server.js as
 * it does live.
 *
 * RULE: only what a visitor actually notices belongs here. Licence notes,
 * promo images, character counts and other internals do not. Every line must
 * be backed by a real commit or release, and the date is that of the change —
 * not of writing it down.
 *
 * Newest first per tool. Fields: date (ISO), de, en; optionally version and
 * link — only Real_RAM_cooler has real GitHub releases.
 */
'use strict';

var NEWS = {
  ram: [
    {
      date: '2026-07-30',
      version: 'v1.2',
      link: 'https://github.com/Dennismit2n/Real_RAM_cooler/releases/tag/v1.2',
      de: 'Die App spricht jetzt Deutsch und Englisch. Sie startet in der Sprache von Windows und lässt sich in den Einstellungen umstellen; der Wechsel greift nach einem Neustart der App. Auch der Installer führt durch beide Sprachen. Behoben: Das Häkchen „Jetzt starten“ am Ende des Setups schlug fehl.',
      en: 'The app now speaks German and English. It starts in your Windows language and can be switched in the settings; the change takes effect after you restart the app. The installer is bilingual too. Fixed: the “launch now” checkbox at the end of setup used to fail.'
    },
    {
      date: '2026-07-28',
      version: 'v1.1',
      link: 'https://github.com/Dennismit2n/Real_RAM_cooler/releases/tag/v1.1',
      de: 'Erste Veröffentlichung. Installer für Windows 10/11 mit dem dreifarbigen RAM-Balken, der Top-12-Liste der Speicherfresser und dem Placebo-Knopf, der ehrlich beschriftet ist.',
      en: 'First release. An installer for Windows 10/11 with the three-colour RAM bar, the top-12 list of memory hogs, and the placebo button that honestly says what it is.'
    }
  ],

  shrink: [
    {
      date: '2026-07-28',
      de: 'Darstellung wählbar: System, Hell oder Dunkel. Die Wahl wird gemerkt und greift, bevor die Seite zum ersten Mal gezeichnet wird — kein weißes Aufblitzen mehr.',
      en: 'Appearance is now a choice: system, light or dark. The choice is remembered and applied before the page is first drawn — no more white flash.'
    },
    {
      date: '2026-07-28',
      de: 'Portugiesisch, Russisch und Koreanisch sind dazugekommen. Damit sind es zwölf Sprachen — Fehlermeldungen und Zahlenformate wechseln mit.',
      en: 'Portuguese, Russian and Korean were added. That makes twelve languages — error messages and number formats switch along with them.'
    },
    {
      date: '2026-07-26',
      de: 'Neuer Knopf „Aus Zwischenablage einfügen“: Ein Bildschirmfoto landet ohne Umweg über eine Datei in der App. Der Knopf erscheint nur, wo der Browser das Lesen der Zwischenablage zulässt; Strg+V funktioniert überall.',
      en: 'New “paste from clipboard” button: a screenshot goes straight into the app without saving a file first. The button only appears where the browser allows reading the clipboard; Ctrl+V works everywhere.'
    },
    {
      date: '2026-07-26',
      de: 'Erste Veröffentlichung. Fotos im Browser verkleinern, mit vier Voreinstellungen für E-Mail, Bewerbung, Kleinanzeigen und Web.',
      en: 'First release. Shrink photos in your browser, with four presets for email, job applications, classifieds and web.'
    }
  ],

  wifi: [
    {
      date: '2026-07-28',
      de: 'Darstellung wählbar: System, Hell oder Dunkel. Die Wahl wird gemerkt und greift schon vor dem ersten Bildaufbau.',
      en: 'Appearance is now a choice: system, light or dark. The choice is remembered and applied before the page is first drawn.'
    },
    {
      date: '2026-07-28',
      de: 'Portugiesisch, Russisch und Koreanisch sind dazugekommen — jetzt zwölf Sprachen.',
      en: 'Portuguese, Russian and Korean were added — twelve languages now.'
    },
    {
      date: '2026-07-28',
      de: 'Aktualisierungen kommen schneller an: Die gespeicherte Fassung wird beim nächsten Besuch im Hintergrund erneuert, statt bis zum nächsten harten Neuladen alt zu bleiben.',
      en: 'Updates arrive sooner: the stored copy is refreshed in the background on your next visit instead of staying stale until a hard reload.'
    },
    {
      date: '2026-07-26',
      de: 'Erste Veröffentlichung. QR-Code fürs WLAN, dazu zwei Druckvorlagen: ein Kärtchen und ein faltbarer Tischaufsteller.',
      en: 'First release. A QR code for your WiFi, plus two print layouts: a small card and a foldable table tent.'
    }
  ],

  collective: [
    {
      date: '2026-07-30',
      de: 'Eine Formulierung berichtigt: Es heißt jetzt durchgängig „ohne eigenen Server“ statt „ohne Server“. Die Abrechnung geht an keinen Server — die Seite selbst wird aber von GitHub ausgeliefert, und das soll dastehen.',
      en: 'A wording fix: it now consistently says “no server of our own” instead of “no server”. Your ledger never goes to a server — but the page itself is delivered by GitHub, and that belongs in the sentence.'
    },
    {
      date: '2026-07-29',
      de: 'Erste Veröffentlichung. Gruppenausgaben aufteilen — vier Aufteilungsarten (gleich, Anteile, Prozent, genaue Beträge), Rückzahlungen und Fremdwährungen mit selbst eingetragenem Kurs.',
      en: 'First release. Split group expenses — four split modes (evenly, shares, percentages, exact amounts), repayments, and foreign currencies with a rate you enter yourself.'
    },
    {
      date: '2026-07-29',
      de: 'Der Ausgleich sucht möglichst wenige Überweisungen. Und der Cent, der sich nicht aufteilen lässt, wird namentlich ausgewiesen, statt still bei irgendwem zu landen.',
      en: 'The settle-up looks for as few transfers as possible. And the cent that will not divide is called out by name instead of quietly landing on somebody.'
    },
    {
      date: '2026-07-29',
      de: 'Zwölf Sprachen, Hell und Dunkel, und nach dem ersten Besuch läuft die Seite auch ohne Netz.',
      en: 'Twelve languages, light and dark, and after the first visit the page works without a connection.'
    }
  ],

  bigday: [
    {
      date: '2026-07-28',
      de: 'Tage werden als Kalendertage gezählt: Ein Tag mit Zeitumstellung zählt trotzdem als ein Tag, die Anzeige entspricht also den Nächten bis zum Ziel. Dazu ein vollständiger Durchgang zur Barrierefreiheit.',
      en: 'Days are counted as calendar days: a day with a clock change still counts as one day, so the number matches the nights until the date. Plus a full accessibility pass.'
    },
    {
      date: '2026-07-28',
      de: 'Portugiesisch, Russisch und Koreanisch sind dazugekommen — jetzt zwölf Sprachen.',
      en: 'Portuguese, Russian and Korean were added — twelve languages now.'
    },
    {
      date: '2026-07-27',
      de: 'Erste Veröffentlichung. Countdown mit neun Stimmungen, der vollständig im Link steckt und sich ohne Konto teilen lässt.',
      en: 'First release. A countdown in nine moods that lives entirely inside the link and can be shared without an account.'
    }
  ],

  rad: [
    {
      date: '2026-07-28',
      de: 'Zweite Fassung: Die letzten Drehs stehen jetzt unter dem Rad, es gibt einen Knopf zum Mischen und Vollbild für den Partytisch — dort, wo der Browser Vollbild beherrscht. Die Ergebniskarte sitzt nicht mehr auf dem Rad, sondern daneben.',
      en: 'Second version: recent spins are listed below the wheel, there is a shuffle button, and full screen for the party table — wherever the browser supports it. The result card sits beside the wheel now instead of on top of it.'
    },
    {
      date: '2026-07-28',
      de: 'Erste Veröffentlichung. Optionen eintippen, Rad drehen, das Los entscheidet. Gezogen wird mit dem Zufallsgenerator des Browsers, bevor sich das Rad bewegt — die Animation zeigt das Ergebnis, sie erzeugt es nicht.',
      en: 'First release. Type in the options, spin the wheel, let chance decide. The winner is drawn with the browser’s random generator before the wheel moves — the animation shows the result, it does not create it.'
    }
  ],

  zaehlwerk: [
    {
      date: '2026-07-31',
      de: 'Dazu gibt es jetzt den Zählwerk Ticker: eine kleine schwebende Anzeige für Windows mit dem laufenden Fünf-Stunden-Fenster, der Tagessumme und den stärksten Modellen — zum Mitschauen beim Arbeiten statt zum Nachschauen hinterher. Der Verweis darauf steht auf der Zählwerk-Seite; Quellcode und fertige Exe liegen auf GitHub.',
      en: 'There is now a Zählwerk Ticker to go with it: a small floating readout for Windows showing the current five-hour window, the daily total and the busiest models — to watch while working rather than to check afterwards. The link sits on the Zählwerk page; source code and a prebuilt exe are on GitHub.'
    },
    {
      date: '2026-07-31',
      de: 'Erste Veröffentlichung. Ordner auswählen, und Zählwerk rechnet aus, wohin der eigene Claude-Code-Verbrauch geht — nach Tag, Modell, Projekt, Wochentag und Uhrzeit. Gelesen wird ausschließlich im Browser; die Protokolle werden nicht hochgeladen.',
      en: 'First release. Pick a folder and Zählwerk works out where your Claude Code usage goes — by day, model, project, weekday and hour. Everything is read inside the browser; the logs are never uploaded.'
    }
  ]
};
