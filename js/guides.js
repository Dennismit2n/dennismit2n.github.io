/*
 * dennismit2n.github.io — short guides per tool
 *
 * Deliberately NOT the README: that is a developer document (licence, layout,
 * build notes). What stands here is what someone needs who wants to use the
 * tool. The pointer to the README sits underneath.
 *
 * RULE: claim nothing that werkstatt/fakten.json rules out — no "no tracking",
 * no blanket "nothing leaves your device", no "offline" without the "after the
 * first visit" qualifier, no "encrypted". The pitfalls are not fine print,
 * they are the reason this page exists.
 *
 * Fields per tool: purpose, steps (exactly three), pitfalls, docs — each de/en.
 */
'use strict';

var GUIDES = {
  ram: {
    purpose: {
      de: 'Wenn Windows nach Stunden Spielzeit ruckelt, weil sich der Standby-Cache vollgelaufen hat: Real_RAM_cooler leert ihn über dieselbe Windows-Schnittstelle, die auch RAMMap und ISLC benutzen — und zeigt vorher und nachher, wie viel das gebracht hat.',
      en: 'When Windows starts stuttering after hours of gaming because the standby cache has filled up: Real_RAM_cooler purges it through the same Windows interface that RAMMap and ISLC use — and shows before and after how much that freed.'
    },
    steps: {
      de: [
        'Den Installer aus den Releases laden und ausführen. Windows meldet „Unbekannter Herausgeber“, weil die Datei nicht signiert ist — über „Weitere Informationen“ geht es weiter.',
        'Die App starten und die Rückfrage von Windows bestätigen. Ohne Administratorrechte zeigt die App nur an; leeren kann sie dann nichts.',
        'Auf „Standby-Liste leeren“ klicken. Darunter steht anschließend, wie viele Megabyte tatsächlich frei geworden sind.'
      ],
      en: [
        'Download the installer from the releases page and run it. Windows will say “unknown publisher” because the file is not signed — continue via “more info”.',
        'Start the app and confirm the Windows prompt. Without administrator rights the app only displays values; it cannot purge anything.',
        'Click “purge standby list”. Underneath you will then see how many megabytes were actually freed.'
      ]
    },
    pitfalls: {
      de: [
        'Der Placebo-Knopf daneben macht absichtlich nichts Messbares. Er ist da, um vorzuführen, was die meisten „RAM-Booster“ als Hauptfunktion verkaufen.',
        'Mehr Bilder pro Sekunde gibt es nicht. Behoben wird ausschließlich Ruckeln, das vom vollgelaufenen Standby-Cache kommt — ein RAM-Aufrüsten ersetzt das Programm nicht.',
        'Zu häufiges Leeren kann mehr Ruckler erzeugen statt weniger, weil der geleerte Cache von der Platte nachgelesen werden muss. Deshalb wartet die Automatik zwischen zwei Durchgängen.',
        'Nur Windows 10/11 in 64 Bit. Einen Update-Prüfer gibt es nicht — neue Fassungen holst du dir selbst auf der Releases-Seite.'
      ],
      en: [
        'The placebo button next to it deliberately does nothing measurable. It is there to demonstrate what most “RAM boosters” sell as their main feature.',
        'You will not get more frames per second. It only fixes stutter caused by a bloated standby cache — it is no substitute for more RAM.',
        'Purging too often can cause more stutter rather than less, because the emptied cache has to be read back from disk. That is why the automatic mode waits between runs.',
        'Windows 10/11, 64-bit only. There is no update checker — you fetch new versions from the releases page yourself.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md'
    }
  },

  shrink: {
    purpose: {
      de: 'Fotos kleiner machen, damit sie durch ein Uploadfeld oder an eine E-Mail passen — ohne sie irgendwohin hochzuladen. Jedes Bild wird im Browser neu berechnet; dabei fallen GPS-Ort, Kameramodell und Aufnahmezeit zwangsläufig weg.',
      en: 'Make photos smaller so they fit through an upload field or into an email — without uploading them anywhere. Every image is re-encoded in your browser, which necessarily strips GPS location, camera model and capture time.'
    },
    steps: {
      de: [
        'Bilder auf die Fläche ziehen, über die Dateiauswahl öffnen oder mit Strg+V einfügen.',
        'Eine Voreinstellung wählen — E-Mail, Bewerbung, Kleinanzeigen oder Web — oder Zielgröße, längste Kante und Format selbst setzen.',
        'Einzeln herunterladen. Ab zwei fertigen Bildern gibt es zusätzlich „Alle herunterladen“ als ZIP-Datei.'
      ],
      en: [
        'Drag images onto the drop area, pick them from the file dialog, or paste with Ctrl+V.',
        'Choose a preset — email, job application, classifieds or web — or set target size, longest edge and format yourself.',
        'Download them one by one. From two finished images onward there is also “download all” as a ZIP file.'
      ]
    },
    pitfalls: {
      de: [
        'War das Original schon kleiner als das Ziel, wird die Datei größer statt kleiner. Die Metadaten sind trotzdem weg, und die App sagt es selbst.',
        'HEIC-Fotos vom iPhone öffnet nur Safari. Andere Browser zeigen stattdessen einen Hinweis, wie man am iPhone JPEG bekommt.',
        'Höchstens 40 Bilder pro Durchgang. Gerechnet wird eins nach dem anderen — bei sehr großen Fotos kann die Oberfläche kurz stocken.',
        'Auch die Voreinstellungen mit Größenangabe in Megabyte begrenzen die längste Kante: E-Mail und Bewerbung auf 2560 Pixel, Kleinanzeigen auf 1920.'
      ],
      en: [
        'If the original was already smaller than the target, the file comes out larger, not smaller. The metadata is gone either way, and the app says so itself.',
        'HEIC photos from an iPhone only open in Safari. Other browsers show a hint on how to get JPEG out of your iPhone instead.',
        'Up to 40 images per batch. They are processed one after another — very large photos can briefly make the interface stall.',
        'The megabyte presets limit the longest edge too: email and job application to 2560 pixels, classifieds to 1920.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md'
    }
  },

  wifi: {
    purpose: {
      de: 'Ein QR-Code, den Gäste mit der Kamera scannen und sofort im WLAN sind — ohne ein Passwort abzutippen. Netzwerkname und Passwort bleiben dabei im Browser und werden an keinen Server geschickt.',
      en: 'A QR code your guests scan with the camera to join your WiFi — no typing out passwords. The network name and password stay in your browser and are never sent to a server.'
    },
    steps: {
      de: [
        'Netzwerknamen und Passwort eintragen und die Sicherheitsart wählen — in aller Regel WPA/WPA2/WPA3.',
        'In der Vorschau prüfen, wie die Karte aussieht. Auf Wunsch lässt sich das Passwort zusätzlich im Klartext aufdrucken, für Geräte ohne Kamera.',
        'Als PNG herunterladen oder direkt drucken: als Kärtchen oder als faltbarer Tischaufsteller.'
      ],
      en: [
        'Enter the network name and password and pick the security type — in most cases WPA/WPA2/WPA3.',
        'Check the preview to see how the card looks. If you like, the password can also be printed in plain text, for devices without a camera.',
        'Download it as a PNG or print it right away: as a small card or as a foldable table tent.'
      ]
    },
    pitfalls: {
      de: [
        'Der QR-Code ist nicht verschlüsselt. Wer die Karte abfotografiert, hat den WLAN-Zugang — also nicht ins Schaufenster hängen und nicht ins Netz stellen.',
        'Firmen- und Uni-Netze mit eigenem Anmeldenamen (WPA-Enterprise, eduroam) und Portal-Netze mit Gutscheincode lassen sich so nicht weitergeben.',
        'Kopieren und Teilen bietet nicht jeder Browser an; die Knöpfe erscheinen nur, wo das Gerät es kann. Der Download als PNG geht überall.',
        'Bei reinen WPA3-Netzen kann der Code auf einzelnen Geräten scheitern, weil die Karte immer den WPA-Typ einträgt.'
      ],
      en: [
        'The QR code is not encrypted. Anyone who photographs the card has access to your WiFi — so do not hang it in a shop window or post it online.',
        'Corporate and university networks with individual logins (WPA-Enterprise, eduroam) and captive-portal networks with voucher codes cannot be shared this way.',
        'Not every browser offers copy and share; those buttons only appear where the device supports them. Downloading a PNG works everywhere.',
        'On WPA3-only networks the code can fail on some devices, because the card always writes the WPA type.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md'
    }
  },

  collective: {
    purpose: {
      de: 'Wer schuldet wem was — nach Urlaub, Ferienhaus, Festival oder Restaurantabend. Die Abrechnung steckt komprimiert im Link; die anderen brauchen weder Konto noch App, um sie zu sehen.',
      en: 'Who owes whom what — after a holiday, a rented house, a festival or a dinner out. The ledger is compressed into the link itself; nobody else needs an account or an app to open it.'
    },
    steps: {
      de: [
        'Namen anlegen und Ausgaben eintragen: Betrag, Zweck, wer bezahlt hat und wie geteilt wird — zu gleichen Teilen, nach Anteilen, in Prozent oder mit genauen Beträgen.',
        'Das Ergebnis zeigt die Salden und die vorgeschlagenen Überweisungen. Schon Bezahltes trägst du als Rückzahlung nach; es verändert die Salden, zählt aber nicht in die Gesamtausgaben.',
        '„Ergebnis teilen“ verschickt die Übersicht zum Ansehen, „Abrechnung übergeben“ den ganzen Anlass zum Weiterrechnen.'
      ],
      en: [
        'Add the names and enter expenses: amount, purpose, who paid, and how it splits — evenly, by shares, by percentage, or with exact amounts.',
        'The result shows the balances and the suggested transfers. Anything already paid you add as a repayment; it changes the balances but does not count towards total spending.',
        '“Share result” sends the overview to look at, “hand over ledger” sends the whole event so someone else can carry on.'
      ]
    },
    pitfalls: {
      de: [
        'Der Link ist komprimiert, aber nicht verschlüsselt. Wer ihn hat, sieht alles — und der Messenger, über den du ihn schickst, transportiert ihn mit.',
        'Die Anlässe liegen im Speicher deines Browsers, nicht in einer Wolke. Safari räumt diesen Speicher nach etwa einer Woche ohne Besuch auf; deshalb bittet die App ab der fünften Ausgabe um eine Sicherung.',
        'Währungen ohne Untereinheit — Yen, Won, Forint — kann das Werkzeug nicht rechnen, obwohl es die Oberfläche auf Japanisch und Koreanisch gibt.',
        'Ältere Browser (Safari vor 16.4, Firefox vor 113) können die Teilen-Links weder erzeugen noch öffnen.'
      ],
      en: [
        'The link is compressed but not encrypted. Anyone holding it sees everything — and the messenger you send it through carries it along.',
        'Your events live in your browser’s storage, not in a cloud. Safari clears that storage after roughly a week without a visit, which is why the app asks for a backup from the fifth expense onward.',
        'Currencies without a subunit — yen, won, forint — cannot be calculated, even though the interface exists in Japanese and Korean.',
        'Older browsers (Safari before 16.4, Firefox before 113) can neither create nor open the sharing links.'
      ]
    },
    docs: {
      // Collective-Calc has no README.de.md; its single README is German.
      de: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      en: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md'
    }
  },

  bigday: {
    purpose: {
      de: 'Ein Countdown auf Urlaub, Geburtstag oder Hochzeitstag, der als Link verschickt wird. Titel und Datum stehen im Link selbst — es gibt keine Datenbank, in der sie liegen könnten.',
      en: 'A countdown to a holiday, a birthday or an anniversary that travels as a link. Title and date live inside the link itself — there is no database they could sit in.'
    },
    steps: {
      de: [
        'Titel und Datum eintragen, dazu wahlweise eine Uhrzeit und das Häkchen „jährlich wiederholen“.',
        'Eine der neun Stimmungen wählen. Sie bestimmt Farben, Titelschrift und Hintergrund.',
        'Link kopieren, QR-Code zeigen oder über das Teilen-Menü verschicken. Wer ihn öffnet, sieht genau diese Stimmung.'
      ],
      en: [
        'Enter a title and a date, optionally a time and the “repeat every year” checkbox.',
        'Pick one of the nine moods. It sets the colours, the display font and the background.',
        'Copy the link, show the QR code, or send it through the share menu. Whoever opens it sees exactly that mood.'
      ]
    },
    pitfalls: {
      de: [
        'Der Link ist nicht verschlüsselt: Wer ihn hat, liest den Titel in der Adresszeile. Auch der Messenger, über den du ihn schickst, und dein Browserverlauf sehen ihn.',
        'Hell oder Dunkel ergibt sich aus der gewählten Stimmung. Einen eigenen Umschalter gibt es bei diesem Werkzeug nicht.',
        'Nach dem Zieltag zählt die Seite vorwärts weiter — „seit dem großen Tag“. Verschickte Links bleiben also lebendig, statt ins Leere zu laufen.',
        'Der Teilen-Knopf erscheint nur, wo der Browser ihn anbietet; am Rechner also oft nicht. „Link kopieren“ gibt es dort trotzdem.'
      ],
      en: [
        'The link is not encrypted: anyone holding it reads the title in the address bar. So does the messenger you send it through, and your own browser history.',
        'Light or dark comes out of the mood you pick. This tool has no separate switch for it.',
        'After the big day the page counts forward — “since the big day”. Links you sent stay alive instead of running into nothing.',
        'The share button only appears where the browser offers it, so often not on a desktop. “Copy link” is there regardless.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/bigday/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/bigday/blob/main/README.md'
    }
  },

  rad: {
    purpose: {
      de: 'Wenn sich niemand entscheiden will: Optionen eintippen, Rad drehen, fertig. Gezogen wird mit dem Zufallsgenerator des Browsers, bevor sich das Rad überhaupt bewegt — die Animation zeigt das Ergebnis, sie erzeugt es nicht.',
      en: 'When nobody wants to decide: type in the options, spin the wheel, done. The winner is drawn with the browser’s random generator before the wheel even moves — the animation shows the result, it does not create it.'
    },
    steps: {
      de: [
        'Die Frage eintragen und die Optionen zeilenweise darunter. „Papa kocht x3“ belegt drei Felder statt einem.',
        'Auf „Drehen“ klicken, das Rad mit Maus oder Finger anwerfen, oder die Leertaste drücken.',
        'Den Gewinner vom Rad nehmen und weiterdrehen — so lost man eine ganze Reihenfolge aus. Oder den Link mit Frage und Optionen weitergeben.'
      ],
      en: [
        'Enter the question and the options, one per line. “Dad cooks x3” takes three slots instead of one.',
        'Click “spin”, flick the wheel with mouse or finger, or press the space bar.',
        'Take the winner off the wheel and keep spinning — that is how you draw a whole running order. Or pass on the link with question and options.'
      ]
    },
    pitfalls: {
      de: [
        'Höchstens 100 Felder, und die Frage darf 90 Zeichen lang sein. Darüber weist die App darauf hin und lässt den Rest weg.',
        'Vollbild gibt es nur dort, wo der Browser es beherrscht — auf dem iPhone zum Beispiel nicht; der Knopf wird dann gar nicht erst angezeigt.',
        'Die Liste „Letzte Drehs“ steht nur im Arbeitsspeicher und ist nach dem Schließen weg. Frage, Optionen und Farbwelt dagegen bleiben im Browser gespeichert.',
        'Bei sehr langen Optionslisten passt der Link nicht mehr in einen QR-Code. Die Meldung dazu ist derzeit irreführend — sie spricht vom Kopieren statt von der Länge.'
      ],
      en: [
        'At most 100 slots, and the question may be 90 characters long. Beyond that the app tells you and drops the rest.',
        'Full screen only exists where the browser supports it — not on an iPhone, for instance; the button is then hidden entirely.',
        'The “recent spins” list lives in memory only and is gone once you close the page. Question, options and colour scheme, on the other hand, stay stored in your browser.',
        'With very long option lists the link no longer fits into a QR code. The message you get is currently misleading — it talks about copying rather than about length.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md'
    }
  },

  zaehlwerk: {
    purpose: {
      de: 'Claude Code legt für jede Sitzung ein Protokoll auf der Festplatte an. Zählwerk liest diese Dateien und rechnet aus, wohin der Verbrauch geht: welcher Tag, welches Modell, welches Projekt, welche Uhrzeit. Gerechnet wird im Browser — die Protokolle werden nirgendwohin geschickt.',
      en: 'Claude Code writes a log for every session onto your disk. Zählwerk reads those files and works out where your usage goes: which day, which model, which project, which hour. All computation happens in the browser — the logs are never sent anywhere.'
    },
    steps: {
      de: [
        'Auf die Fläche klicken und den Ordner auswählen: unter Windows %USERPROFILE%\.claude\projects, sonst ~/.claude/projects. Er ist versteckt — den Pfad einfach oben in die Adreßzeile des Auswahlfensters eintippen.',
        'Kurz warten. Der Balken zeigt, wie viele Dateien schon gelesen sind; bei einigen hundert Megabyte dauert das ein paar Sekunden.',
        'Oben stehen die vier Kennzahlen, darunter die Aufschlüsselungen. Jeder Bereich hat ein Fragezeichen, das erklärt, wie er zu lesen ist.'
      ],
      en: [
        'Click the panel and pick the folder: on Windows %USERPROFILE%\.claude\projects, otherwise ~/.claude/projects. It is hidden — just type the path into the address bar of the file dialog.',
        'Wait a moment. The bar shows how many files have been read; with a few hundred megabytes this takes a couple of seconds.',
        'The four headline figures sit at the top, the breakdowns below. Every section has a question mark explaining how to read it.'
      ]
    },
    pitfalls: {
      de: [
        'Es gibt KEINE Prozentanzeige und keinen Hinweis auf dein verbleibendes Kontingent. Wie viel dir noch zusteht, steht in diesen Dateien schlicht nicht drin — Zählwerk kann nur zählen, was verbraucht wurde.',
        'Es gibt KEINE Kostenangabe. In den Protokollen stehen keine Preise, und im Abonnement kostet Claude Code ohnehin nichts zusätzlich. Ein Eurobetrag wäre erfunden.',
        'Gezählt wird ausschließlich Claude Code. Was du auf claude.ai im Browser tust, taucht hier nicht auf — dafür gibt es auf der Festplatte keine Protokolle.',
        'In den Protokollen steht jedes Wort jedes Gesprächs. Zählwerk liest davon nur die Abrechnungszeilen und zeigt nie Gesprächsinhalte an — wer das nachprüfen will, öffnet die Entwicklerwerkzeuge: außer der Seite selbst und dem Besucherzähler geht keine Anfrage hinaus.',
        'Das Dateiformat ist von Anthropic nicht dokumentiert. Ändert es sich, zeigt Zählwerk zu wenig an oder gar nichts mehr. Dann hilft nur eine neue Fassung.',
        'Die Ordnerauswahl braucht einen Browser, der ganze Ordner entgegennimmt — Chrome, Edge und Firefox können das, auf dem iPhone klappt es nicht.'
      ],
      en: [
        'There is NO percentage display and no indication of your remaining allowance. How much you have left simply is not in these files — Zählwerk can only count what has been used.',
        'There is NO cost figure. The logs contain no prices, and on a subscription Claude Code costs nothing extra anyway. Any euro amount would be invented.',
        'Only Claude Code is counted. What you do on claude.ai in the browser does not appear here — there are no logs for it on your disk.',
        'The logs contain every word of every conversation. Zählwerk reads only the accounting lines from them and never displays conversation content — to verify that, open the developer tools: apart from the page itself and the visitor counter, no request goes out.',
        'The file format is not documented by Anthropic. If it changes, Zählwerk will show too little or nothing at all. Only a new version helps then.',
        'Picking a folder requires a browser that accepts whole directories — Chrome, Edge and Firefox do; on an iPhone it does not work.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md'
    }
  }
};
