/*
 * dennismit2n.github.io — short guides per tool
 *
 * Deliberately NOT the README: that is a developer document (licence, layout,
 * build notes). What stands here is what someone needs who wants to use the
 * tool. The pointer to the README sits underneath.
 *
 * RULE: claim nothing the tools do not actually hold up — no "no tracking",
 * no blanket "nothing leaves your device", no "offline" without the "after the
 * first visit" qualifier, no "encrypted". The pitfalls are not fine print,
 * they are the reason this page exists.
 *
 * Fields per tool: purpose, steps (exactly three), pitfalls, docs — each with
 * one entry per language: de en es fr it nl pl pt tr ru hi zh ja ko, same order
 * as in i18n.js. Optional: full (an array of paragraphs), so far only used by
 * fontART, the one tool with a paid full version.
 *
 * Optional since 22.09.2026: shots — screenshots shown under "What it looks
 * like", right after purpose. Each one is either { file, w, h, alt } for one
 * picture in every language, or { files: { de: [file, w, h], … }, alt } for one
 * per language (English is the fallback). An animation adds still: the last
 * frame, shown instead to whoever asked for reduced motion. The files live in
 * assets/anleitung/ as copies; w and h must be the file's own pixels: they set
 * the aspect ratio, and w also caps the width so no picture is shown larger
 * than its file. alt describes the picture in the reader's language, even
 * where the interface in the picture speaks another one.
 */
'use strict';

var GUIDES = {
  ram: {
    purpose: {
      de: 'Wenn Windows nach Stunden Spielzeit ruckelt, weil der Standby-Cache vollgelaufen ist: Real_RAM_cooler leert ihn über dieselbe Windows-Schnittstelle, die auch RAMMap und ISLC benutzen — und zeigt vorher und nachher, wie viel das gebracht hat.',
      en: 'When Windows starts stuttering after hours of gaming because the standby cache has filled up: Real_RAM_cooler purges it through the same Windows interface that RAMMap and ISLC use — and shows before and after how much that freed.',
      es: 'Cuando Windows da tirones tras horas de juego porque la caché en espera se ha llenado: Real_RAM_cooler la vacía a través de la misma interfaz de Windows que usan también RAMMap e ISLC, y muestra antes y después cuánto se ha ganado con ello.',
      fr: 'Quand Windows saccade après des heures de jeu parce que le cache de veille s’est rempli : Real_RAM_cooler le vide par la même interface Windows qu’utilisent aussi RAMMap et ISLC — et montre, avant et après, ce que cela a rapporté.',
      it: 'Quando Windows comincia ad andare a scatti dopo ore di gioco perché la cache standby si è riempita: Real_RAM_cooler la svuota attraverso la stessa interfaccia di Windows che usano anche RAMMap e ISLC, e mostra prima e dopo quanto è servito.',
      nl: 'Als Windows na uren spelen gaat haperen omdat de standby-cache is volgelopen: Real_RAM_cooler leegt hem via dezelfde Windows-interface die RAMMap en ISLC ook gebruiken — en laat vooraf en achteraf zien hoeveel dat heeft opgeleverd.',
      pl: 'Kiedy Windows po godzinach grania zaczyna się szarpać, bo zapełniła się pamięć podręczna standby: Real_RAM_cooler opróżnia ją przez ten sam interfejs Windows, którego używają też RAMMap i ISLC — i pokazuje przed i po, ile to dało.',
      pt: 'Quando o Windows começa aos solavancos ao fim de horas de jogo porque a cache de standby encheu: o Real_RAM_cooler esvazia-a pela mesma interface do Windows que o RAMMap e o ISLC também usam — e mostra, antes e depois, quanto é que isso rendeu.',
      tr: 'Saatler süren oyunun ardından bekleme önbelleği dolup taştığı için Windows takılmaya başladığında: Real_RAM_cooler bu önbelleği, RAMMap ve ISLC’nin de kullandığı aynı Windows arabirimi üzerinden boşaltır — ve öncesiyle sonrasını göstererek bunun ne kadar yer açtığını ortaya koyar.',
      ru: 'Когда Windows начинает подтормаживать после нескольких часов игры, потому что переполнился кэш ожидания (standby): Real_RAM_cooler очищает его через тот же интерфейс Windows, которым пользуются RAMMap и ISLC, — и показывает значения до и после: сколько памяти это освободило.',
      hi: 'जब घंटों गेम खेलने के बाद Windows अटक-अटक कर चलने लगे, क्योंकि स्टैंडबाय कैश भर गया है: Real_RAM_cooler उसे उसी Windows इंटरफ़ेस के ज़रिए खाली करता है जिसे RAMMap और ISLC भी इस्तेमाल करते हैं — और पहले तथा बाद में दिखाता है कि इससे कितनी मेमोरी खाली हुई।',
      zh: '玩了几个小时游戏之后 Windows 开始卡顿，因为待机缓存被填满了：Real_RAM_cooler 通过 RAMMap 和 ISLC 也在用的那个 Windows 接口把它清空——并且显示清理前后各是多少，让你看到这究竟带来了什么。',
      ja: '何時間もゲームを続けたあと、スタンバイキャッシュがいっぱいになって Windows がカクつくとき: Real_RAM_cooler は、RAMMap や ISLC も使っているのと同じ Windows のインターフェースを通してそれを空にし、前と後でどれだけ空いたかを示します。',
      ko: '몇 시간 게임을 하고 나면 대기 캐시가 가득 차서 Windows가 끊기는 일이 있습니다. 그럴 때 Real_RAM_cooler는 RAMMap과 ISLC도 쓰는 바로 그 Windows 인터페이스를 통해 캐시를 비우고, 그것으로 얼마나 확보되었는지 전후를 보여 줍니다.'
    },
    shots: [
      {
        files: {
          de: ['ram-de.webp', 612, 802],
          en: ['ram-en.webp', 611, 806]
        },
        alt: {
          de: 'Das Fenster von Real_RAM_cooler: ein Balken, der zeigt, wie viel Arbeitsspeicher in Benutzung, im Standby und wirklich frei ist, darunter der Knopf zum Bereinigen fürs Gaming, ein Placebo-Knopf und die zwölf größten Speicherfresser mit den Spalten Berührt und Besitzt.',
          en: 'The Real_RAM_cooler window: a bar showing how much memory is in use, on standby and truly free, and below it the button that cleans up for gaming, a placebo button and the twelve biggest memory hogs with the columns Touches and Owns.',
          es: 'La ventana de Real_RAM_cooler: una barra que divide la memoria en ocupada, en espera y realmente libre; debajo, el botón que limpia la memoria para jugar, un botón placebo y los doce mayores devoradores de memoria, con las columnas «Touches» y «Owns».',
          fr: 'La fenêtre de Real_RAM_cooler : une barre qui sépare la mémoire utilisée, en veille et réellement libre ; en dessous, le bouton qui fait le ménage pour le jeu, un bouton placebo et les douze processus les plus gourmands en mémoire, avec les colonnes « Touches » et « Owns ».',
          it: 'La finestra di Real_RAM_cooler: una barra che divide la memoria in occupata, in standby e davvero libera; sotto, il pulsante che fa pulizia per giocare, un pulsante placebo e i dodici processi più affamati di memoria, con le colonne «Touches» e «Owns».',
          nl: 'Het venster van Real_RAM_cooler: een balk die het werkgeheugen opsplitst in bezet, standby en echt vrij, daaronder de knop die het geheugen opruimt voor het gamen, een placeboknop en de twaalf grootste geheugenvreters met de kolommen Touches en Owns.',
          pl: 'Okno Real_RAM_cooler: pasek dzielący pamięć RAM na zajętą, standby i naprawdę wolną, pod nim przycisk czyszczący pamięć przed grą, przycisk placebo oraz lista dwunastu największych pożeraczy pamięci z kolumnami Touches i Owns.',
          pt: 'A janela do Real_RAM_cooler: uma barra que divide a memória em ocupada, standby e realmente livre; por baixo, o botão que limpa a memória para jogar, um botão placebo e os doze maiores devoradores de memória, com as colunas Touches e Owns.',
          tr: 'Real_RAM_cooler penceresi: belleği kullanımda, beklemede (standby) ve gerçekten boş diye bölen bir çubuk; altında oyun için belleği temizleyen düğme, bir plasebo düğmesi ve Touches ile Owns sütunlarıyla en çok bellek yiyen on iki süreç.',
          ru: 'Окно Real_RAM_cooler: полоса, которая показывает, сколько памяти занято, сколько лежит в кэше ожидания (standby) и сколько действительно свободно; под ней кнопка очистки памяти для игр, кнопка-плацебо и список двенадцати самых прожорливых процессов со столбцами Touches и Owns.',
          hi: 'Real_RAM_cooler की विंडो: एक पट्टी, जो मेमोरी को इस्तेमाल हो रहे, स्टैंडबाय और सचमुच खाली हिस्सों में बाँटती है, उसके नीचे गेमिंग के लिए मेमोरी साफ़ करने वाला बटन, एक प्लेसीबो बटन और Touches व Owns कॉलम के साथ सबसे ज़्यादा मेमोरी खाने वाले बारह प्रोसेस।',
          zh: 'Real_RAM_cooler 的窗口：一根把内存分为已用、待机和真正空闲三段的横条；下面是为玩游戏清理内存的按钮、一个安慰剂按钮，以及占用内存最多的十二个进程，带有“Touches”和“Owns”两列。',
          ja: 'Real_RAM_cooler のウィンドウ: メモリを使用中・スタンバイ・本当の空きに分けて示すバー。その下に、ゲーム向けにメモリを片付けるボタン、プラセボボタン、そしてメモリを食っている上位12のプロセスが「Touches」と「Owns」の列付きで並びます。',
          ko: 'Real_RAM_cooler 창: 메모리를 사용 중, 대기, 정말로 비어 있는 부분으로 나눠 보여 주는 막대, 그 아래에 게임을 위해 메모리를 정리하는 버튼과 플라시보 버튼, 그리고 “Touches”와 “Owns” 열이 있는, 메모리를 가장 많이 잡아먹는 프로세스 열두 개.'
        }
      }
    ],
    steps: {
      de: [
        'Den Installer aus den Releases laden und ausführen. Windows meldet „Unbekannter Herausgeber“, weil die Datei nicht signiert ist — über „Weitere Informationen“ geht es weiter.',
        'Die App starten und die Rückfrage von Windows bestätigen. Ohne Administratorrechte zeigt die App nur an; leeren kann sie dann nichts.',
        'Auf „Fürs Gaming bereinigen“ klicken. Darüber steht anschließend, wie viele Megabyte tatsächlich frei geworden sind.'
      ],
      en: [
        'Download the installer from the releases page and run it. Windows will say “unknown publisher” because the file is not signed — continue via “more info”.',
        'Start the app and confirm the Windows prompt. Without administrator rights the app only displays values; it cannot purge anything.',
        'Click “Clean up for gaming”. Above it you will then see how many megabytes were actually freed.'
      ],
      es: [
        'Descarga el instalador desde las versiones y ejecútalo. Windows avisa de «Editor desconocido» porque el archivo no está firmado; se continúa con «Más información».',
        'Inicia la aplicación y confirma el aviso de Windows. Sin permisos de administrador la aplicación solo muestra datos: no puede vaciar nada.',
        'Haz clic en el botón para limpiar la memoria antes de jugar («Clean up for gaming»). Justo encima aparece después cuántos megabytes se han liberado realmente.'
      ],
      fr: [
        'Télécharger le programme d’installation depuis les releases et l’exécuter. Windows signale « Éditeur inconnu », parce que le fichier n’est pas signé — on continue via « Informations complémentaires ».',
        'Démarrer l’application et confirmer la demande de Windows. Sans droits d’administrateur, l’application se contente d’afficher les valeurs ; elle ne peut alors rien vider.',
        'Cliquer sur « Clean up for gaming » / « Fürs Gaming bereinigen » (faire le ménage pour le jeu). Au-dessus s’affiche ensuite le nombre de mégaoctets réellement libérés.'
      ],
      it: [
        'Scarica l’installer dalla pagina delle release ed eseguilo. Windows segnala «Editore sconosciuto» perché il file non è firmato: prosegui con «Ulteriori informazioni».',
        'Avvia l’app e conferma la richiesta di Windows. Senza diritti di amministratore l’app si limita a mostrare i valori: non può svuotare nulla.',
        'Fai clic su «Clean up for gaming». Sopra compare poi quanti megabyte sono stati effettivamente liberati.'
      ],
      nl: [
        'Download het installatieprogramma van de releases-pagina en voer het uit. Windows meldt “Onbekende uitgever”, omdat het bestand niet ondertekend is — via “Meer informatie” ga je verder.',
        'Start de app en bevestig de vraag van Windows. Zonder beheerdersrechten laat de app alleen waarden zien, maar hij kan dan niets legen.',
        'Klik op “Clean up for gaming” — in de Duitse versie “Fürs Gaming bereinigen”. Daarboven staat daarna hoeveel megabyte er werkelijk is vrijgekomen.'
      ],
      pl: [
        'Pobrać instalator ze strony wydań i uruchomić go. Windows zgłosi „Nieznany wydawca”, bo plik nie jest podpisany — dalej prowadzi „Więcej informacji”.',
        'Uruchomić aplikację i potwierdzić pytanie Windows. Bez uprawnień administratora aplikacja tylko pokazuje wartości; opróżnić nie może wtedy niczego.',
        'Kliknąć „Clean up for gaming” (wyczyść pamięć przed grą). Powyżej pojawi się potem, ile megabajtów rzeczywiście się zwolniło.'
      ],
      pt: [
        'Transferir o instalador da página de versões e executá-lo. O Windows avisa «Editor desconhecido», porque o ficheiro não está assinado — continua-se através de «Mais informações».',
        'Iniciar a aplicação e confirmar a pergunta do Windows. Sem direitos de administrador, a aplicação limita-se a mostrar valores; não consegue esvaziar nada.',
        'Clicar em «Clean up for gaming» — na versão alemã, «Fürs Gaming bereinigen»; a aplicação só fala alemão e inglês. Por cima fica depois escrito quantos megabytes ficaram realmente livres.'
      ],
      tr: [
        'Kurulum dosyasını sürümler sayfasından indirin ve çalıştırın. Dosya imzalı olmadığı için Windows “Bilinmeyen yayımcı” uyarısı verir — “Daha fazla bilgi” üzerinden devam edilir.',
        'Uygulamayı başlatın ve Windows’un sorduğu onayı verin. Yönetici hakları olmadan uygulama yalnızca değerleri gösterir; hiçbir şeyi boşaltamaz.',
        '“Clean up for gaming” düğmesine tıklayın. Hemen üstünde, kaç megabaytın gerçekten boşaldığı yazar.'
      ],
      ru: [
        'Скачайте установщик со страницы выпусков и запустите его. Windows сообщит «Неизвестный издатель», потому что файл не подписан, — продолжить можно через «Подробнее».',
        'Запустите приложение и подтвердите запрос Windows. Без прав администратора приложение только показывает значения; очистить оно тогда ничего не может.',
        'Нажмите «Clean up for gaming» (в немецкой версии — «Fürs Gaming bereinigen»). Над кнопкой затем написано, сколько мегабайт на самом деле освободилось.'
      ],
      hi: [
        'रिलीज़ पेज से इंस्टॉलर डाउनलोड करके चलाएँ। Windows “अज्ञात प्रकाशक” की चेतावनी देता है, क्योंकि फ़ाइल पर हस्ताक्षर नहीं हैं — “अधिक जानकारी” से आगे बढ़ा जा सकता है।',
        'ऐप शुरू करें और Windows का सवाल स्वीकार करें। प्रशासक अधिकारों के बिना ऐप सिर्फ़ आँकड़े दिखाती है; तब वह कुछ भी खाली नहीं कर सकती।',
        '“Clean up for gaming” पर क्लिक करें। उसके ऊपर फिर लिखा आता है कि सचमुच कितने मेगाबाइट खाली हुए।'
      ],
      zh: [
        '从发布页下载安装程序并运行。Windows 会提示“未知发布者”，因为这个文件没有签名——通过“更多信息”继续。',
        '启动应用并确认 Windows 的提示。没有管理员权限时，应用只能显示数值，什么也清不了。',
        '点击“Clean up for gaming”。按钮上方随后会写出实际释放了多少兆字节。'
      ],
      ja: [
        'リリースページからインストーラーをダウンロードして実行します。ファイルに署名がないため、Windows は「不明な発行元」と表示します — 「詳細情報」から先に進めます。',
        'アプリを起動して、Windows の確認に応じます。管理者権限がないと、アプリは表示するだけで、空にすることはできません。',
        '「Clean up for gaming」（ゲーム向けにメモリを片付ける）をクリックします — このアプリはドイツ語と英語しか話さないので、表示言語によってはドイツ語の同じボタン「Fürs Gaming bereinigen」が出ます。そのすぐ上に、実際に何メガバイト空いたかが表示されます。'
      ],
      ko: [
        '릴리스 페이지에서 설치 프로그램을 내려받아 실행합니다. 파일에 서명이 없어서 Windows가 “알 수 없는 게시자”라고 알립니다 — “추가 정보”를 거쳐 계속 진행하면 됩니다.',
        '앱을 실행하고 Windows의 확인 창을 승인합니다. 관리자 권한이 없으면 앱은 값을 보여 주기만 하고 아무것도 비우지 못합니다.',
        '“Clean up for gaming”을 누릅니다. 그 위에 실제로 몇 메가바이트가 비워졌는지 표시됩니다.'
      ]
    },
    pitfalls: {
      de: [
        'Der Placebo-Knopf daneben macht absichtlich nichts Messbares. Er ist da, um vorzuführen, was die meisten „RAM-Booster“ als Hauptfunktion verkaufen.',
        'Mehr Bilder pro Sekunde gibt es nicht. Behoben wird ausschließlich Ruckeln, das vom vollgelaufenen Standby-Cache kommt — das Programm ersetzt kein RAM-Aufrüsten.',
        'Zu häufiges Leeren kann mehr Ruckler erzeugen statt weniger, weil der geleerte Cache von der Platte nachgelesen werden muss. Deshalb wartet die Automatik zwischen zwei Durchgängen.',
        'Nur Windows 10/11 in 64 Bit. Einen Update-Prüfer gibt es nicht — neue Fassungen holst du dir selbst auf der Releases-Seite.'
      ],
      en: [
        'The placebo button next to it deliberately does nothing measurable. It is there to demonstrate what most “RAM boosters” sell as their main feature.',
        'You will not get more frames per second. It only fixes stutter caused by a bloated standby cache — it is no substitute for more RAM.',
        'Purging too often can cause more stutter rather than less, because the emptied cache has to be read back from disk. That is why the automatic mode waits between runs.',
        'Windows 10/11, 64-bit only. There is no update checker — you fetch new versions from the releases page yourself.'
      ],
      es: [
        'El botón placebo que hay al lado no hace nada medible, y es a propósito. Está ahí para enseñar lo que la mayoría de los «optimizadores de RAM» venden como función principal.',
        'Más fotogramas por segundo no vas a conseguir. Solo se corrigen los tirones que vienen de una caché en espera desbordada: el programa no sustituye a ampliar la RAM.',
        'Vaciar demasiado a menudo puede provocar más tirones en vez de menos, porque la caché vaciada hay que volver a leerla del disco. Por eso el modo automático espera entre dos pasadas.',
        'Solo Windows 10/11 de 64 bits. No hay comprobador de actualizaciones: las versiones nuevas las buscas tú mismo en la página de versiones.'
      ],
      fr: [
        'Le bouton placebo juste à côté ne fait volontairement rien de mesurable. Il est là pour montrer ce que la plupart des « boosters de RAM » vendent comme fonction principale.',
        'Vous n’aurez pas plus d’images par seconde. Ne sont corrigées que les saccades venant d’un cache de veille rempli — le programme ne remplace pas un ajout de RAM.',
        'Vider trop souvent peut produire plus de saccades au lieu de moins, parce que le cache vidé doit être relu depuis le disque. C’est pourquoi le mode automatique attend entre deux passages.',
        'Uniquement Windows 10/11 en 64 bits. Il n’y a pas de vérificateur de mises à jour — les nouvelles versions, vous allez les chercher vous-même sur la page des releases.'
      ],
      it: [
        'Il pulsante placebo qui accanto non fa apposta niente di misurabile. Sta lì per mostrare che cosa la maggior parte dei «RAM booster» vende come funzione principale.',
        'Fotogrammi al secondo in più non ce ne sono. Vengono risolti esclusivamente gli scatti dovuti alla cache standby piena: il programma non sostituisce un aumento di RAM.',
        'Svuotare troppo spesso può creare più scatti invece che meno, perché la cache svuotata va riletta dal disco. Per questo l’automatismo aspetta fra un passaggio e l’altro.',
        'Solo Windows 10/11 a 64 bit. Non c’è un controllo degli aggiornamenti: le versioni nuove te le prendi da solo sulla pagina delle release.'
      ],
      nl: [
        'De placeboknop ernaast doet met opzet niets meetbaars. Hij is er om voor te doen wat de meeste “RAM-boosters” als hoofdfunctie verkopen.',
        'Meer beelden per seconde krijg je er niet bij. Het programma verhelpt alleen het haperen dat door een volgelopen standby-cache komt — het is geen vervanging voor meer RAM.',
        'Te vaak legen kan meer gehaper opleveren in plaats van minder, omdat de geleegde cache weer van de schijf gelezen moet worden. Daarom wacht de automatische modus tussen twee rondes.',
        'Alleen Windows 10/11 in 64 bit. Een updatecontrole is er niet — nieuwe versies haal je zelf op de releases-pagina.'
      ],
      pl: [
        'Przycisk placebo obok celowo nie robi niczego mierzalnego. Jest po to, żeby pokazać, co większość „RAM-boosterów” sprzedaje jako główną funkcję.',
        'Więcej klatek na sekundę z tego nie będzie. Naprawiane jest wyłącznie szarpanie, które bierze się z zapełnionej pamięci podręcznej standby — program nie zastępuje dołożenia RAM-u.',
        'Zbyt częste opróżnianie może wywołać więcej szarpnięć zamiast mniej, bo opróżniona pamięć podręczna musi zostać doczytana z dysku. Dlatego tryb automatyczny czeka między dwoma przebiegami.',
        'Tylko Windows 10/11 w wersji 64-bitowej. Sprawdzania aktualizacji nie ma — nowe wersje pobierasz sobie sam ze strony wydań.'
      ],
      pt: [
        'O botão placebo ao lado não faz de propósito nada mensurável. Está ali para mostrar aquilo que a maioria dos «aceleradores de RAM» vende como função principal.',
        'Não há mais imagens por segundo. Só se corrige o engasgar que vem da cache de standby cheia — o programa não substitui a compra de mais RAM.',
        'Esvaziar demasiadas vezes pode gerar mais solavancos em vez de menos, porque a cache esvaziada tem de ser lida outra vez do disco. Por isso o modo automático espera entre duas passagens.',
        'Só Windows 10/11 em 64 bits. Não há verificador de atualizações — as versões novas vai buscá-las você mesmo à página de versões.'
      ],
      tr: [
        'Yanındaki plasebo düğmesi bilerek ölçülebilir hiçbir şey yapmaz. Çoğu “RAM hızlandırıcı”nın ana işlev diye sattığı şeyi göstermek için oradadır.',
        'Saniyedeki kare sayısı artmaz. Yalnızca dolup taşmış bekleme önbelleğinden kaynaklanan takılma giderilir — program, RAM yükseltmenin yerini tutmaz.',
        'Çok sık boşaltmak, takılmayı azaltmak yerine artırabilir; çünkü boşaltılan önbelleğin diskten yeniden okunması gerekir. Bu yüzden otomatik kip iki tur arasında bekler.',
        'Yalnızca 64 bit Windows 10/11. Güncelleme denetleyicisi yoktur — yeni sürümleri sürümler sayfasından kendiniz alırsınız.'
      ],
      ru: [
        'Кнопка-плацебо рядом намеренно не делает ничего измеримого. Она здесь, чтобы показать, что большинство «ускорителей оперативной памяти» продают как главную функцию.',
        'Кадров в секунду больше не станет. Устраняются исключительно подтормаживания от переполненного кэша ожидания — программа не заменяет установку дополнительной оперативной памяти.',
        'Слишком частая очистка может создавать больше рывков, а не меньше, потому что очищенный кэш приходится дочитывать с диска. Поэтому автоматика выжидает между двумя проходами.',
        'Только 64-разрядные Windows 10/11. Проверки обновлений нет — новые версии вы забираете сами со страницы выпусков.'
      ],
      hi: [
        'बग़ल वाला प्लेसीबो बटन जान-बूझकर कुछ भी मापने लायक नहीं करता। वह यह दिखाने के लिए है कि ज़्यादातर “RAM बूस्टर” किस चीज़ को अपनी मुख्य ख़ूबी बताकर बेचते हैं।',
        'इससे फ़्रेम प्रति सेकंड नहीं बढ़ते। ठीक केवल वही अटकन होती है जो भरे हुए स्टैंडबाय कैश से आती है — यह प्रोग्राम RAM बढ़ाने की जगह नहीं ले सकता।',
        'बहुत बार खाली करने से अटकन कम होने के बजाय बढ़ सकती है, क्योंकि खाली किए गए कैश को डिस्क से दोबारा पढ़ना पड़ता है। इसीलिए स्वचालित मोड दो दौरों के बीच रुककर इंतज़ार करता है।',
        'केवल Windows 10/11, 64 बिट में। अपडेट जाँचने वाला कोई हिस्सा नहीं है — नए संस्करण आपको खुद रिलीज़ पेज से लेने होते हैं।'
      ],
      zh: [
        '旁边那个安慰剂按钮故意不做任何可测量的事。它放在那里，是为了演示大多数“内存加速器”当作主要功能来卖的东西。',
        '不会有更高的帧数。它只解决由待机缓存被填满引起的卡顿——这个程序代替不了加内存条。',
        '清得太频繁反而可能带来更多卡顿而不是更少，因为被清空的缓存必须从硬盘重新读回来。所以自动模式会在两次清理之间等待。',
        '仅限 64 位的 Windows 10/11。没有更新检查器——新版本要你自己去发布页取。'
      ],
      ja: [
        '隣にあるプラセボボタンは、わざと測定できることを何もしません。ほとんどの「RAM ブースター」が主要機能として売っているものが何なのかを実演するために置いてあります。',
        'フレームレートが上がることはありません。直るのは、いっぱいになったスタンバイキャッシュから来るカクつきだけです — このプログラムは RAM の増設の代わりにはなりません。',
        '空にしすぎると、カクつきが減るどころか増えることがあります。空にしたキャッシュをディスクから読み直さなければならないからです。だから自動モードは2回の実行のあいだに間隔を置きます。',
        'Windows 10/11 の64ビットのみです。更新チェッカーはありません — 新しい版はリリースページから自分で取ってきてください。'
      ],
      ko: [
        '옆에 있는 플라시보 버튼은 일부러 측정 가능한 일을 아무것도 하지 않습니다. 대부분의 “RAM 부스터”가 주요 기능이라고 파는 것이 무엇인지 보여 주려고 있는 버튼입니다.',
        '초당 프레임 수가 늘어나지는 않습니다. 고쳐지는 것은 대기 캐시가 가득 차서 생긴 끊김뿐이며, 이 프로그램이 RAM 증설을 대신하지는 못합니다.',
        '너무 자주 비우면 끊김이 줄기는커녕 늘어날 수 있습니다. 비워진 캐시를 디스크에서 다시 읽어 와야 하기 때문입니다. 그래서 자동 모드는 두 번의 실행 사이에 기다립니다.',
        'Windows 10/11 64비트 전용입니다. 업데이트 검사기는 없습니다 — 새 버전은 릴리스 페이지에서 직접 가져와야 합니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/Real_RAM_cooler/blob/main/README.md'
    }
  },

  shrink: {
    purpose: {
      de: 'Fotos kleiner machen, damit sie durch ein Uploadfeld oder an eine E-Mail passen — ohne sie irgendwohin hochzuladen. Jedes Bild wird im Browser neu berechnet; dabei fallen GPS-Ort, Kameramodell und Aufnahmezeit zwangsläufig weg.',
      en: 'Make photos smaller so they fit through an upload field or into an email — without uploading them anywhere. Every image is re-encoded in your browser, which necessarily strips GPS location, camera model and capture time.',
      es: 'Hacer las fotos más pequeñas para que quepan en un campo de subida o en un correo, sin subirlas a ninguna parte. Cada imagen se vuelve a calcular en el navegador, y en ese proceso se pierden por fuerza la ubicación GPS, el modelo de cámara y la hora de la toma.',
      fr: 'Rendre des photos plus petites pour qu’elles passent par un champ d’envoi ou dans un e-mail — sans les téléverser où que ce soit. Chaque image est recalculée dans le navigateur ; ce faisant, le lieu GPS, le modèle d’appareil photo et l’heure de prise de vue disparaissent forcément.',
      it: 'Rimpicciolire le foto perché passino da un campo di caricamento o entrino in un’e-mail, senza caricarle da nessuna parte. Ogni immagine viene ricalcolata nel browser; così spariscono inevitabilmente la posizione GPS, il modello della fotocamera e l’ora dello scatto.',
      nl: 'Foto’s kleiner maken zodat ze door een uploadveld of in een e-mail passen — zonder ze ergens naartoe te uploaden. Elk beeld wordt in je browser opnieuw berekend; daarbij vallen gps-locatie, cameramodel en opnametijd onvermijdelijk weg.',
      pl: 'Zmniejszyć zdjęcia, żeby zmieściły się w formularzu przesyłania plików albo w e-mailu — bez wysyłania ich gdziekolwiek. Każde zdjęcie jest przeliczane na nowo w przeglądarce; przy tym siłą rzeczy znikają lokalizacja GPS, model aparatu i czas wykonania.',
      pt: 'Tornar fotografias mais pequenas para caberem num campo de carregamento ou num e-mail — sem as carregar para lado nenhum. Cada imagem é recodificada no navegador; nesse processo, o local do GPS, o modelo da câmara e a hora da captura desaparecem forçosamente.',
      tr: 'Fotoğrafları, bir yükleme alanından geçsinler ya da bir e-postaya sığsınlar diye küçültün — hiçbir yere yüklemeden. Her görsel tarayıcınızda yeniden hesaplanır; bu sırada GPS konumu, kamera modeli ve çekim zamanı kaçınılmaz olarak silinir.',
      ru: 'Уменьшить фотографии, чтобы они прошли через поле загрузки или поместились в письмо, — никуда их не загружая. Каждое изображение пересчитывается в браузере, и при этом неизбежно пропадают GPS-координаты, модель камеры и время съёмки.',
      hi: 'फ़ोटो छोटी करें, ताकि वे किसी अपलोड फ़ील्ड से गुज़र सकें या ईमेल में समा जाएँ — उन्हें कहीं अपलोड किए बिना। हर तस्वीर आपके ब्राउज़र में नए सिरे से बनाई जाती है; इस दौरान GPS स्थान, कैमरा मॉडल और खींचने का समय अनिवार्य रूप से हट जाते हैं।',
      zh: '把照片变小，好让它们过得了上传框的大小限制，或者塞得进一封邮件——而不用把它们上传到任何地方。每张图片都在你的浏览器里重新编码；这样一来，GPS 位置、相机型号和拍摄时间必然会丢掉。',
      ja: 'アップロード欄やメールに収まるように写真を小さくします — どこにもアップロードせずに。どの画像もブラウザーの中で計算し直されます。そのとき GPS の位置情報、カメラの機種、撮影日時は必然的に落ちます。',
      ko: '사진을 작게 만들어 업로드 칸이나 메일에 들어가게 합니다 — 어디에도 올리지 않고서 말입니다. 모든 이미지는 브라우저 안에서 다시 인코딩되며, 그 과정에서 GPS 위치, 카메라 모델, 촬영 시각은 필연적으로 사라집니다.'
    },
    shots: [
      {
        file: 'shrink-de.webp', w: 1600, h: 1408,
        alt: {
          de: 'shrinkling: die Fläche zum Hineinziehen, Auswählen oder Einfügen von Bildern, darunter die vier Zielgrößen für E-Mail, Bewerbungsportale, Kleinanzeigen und das Web.',
          en: 'shrinkling: the area for dropping, choosing or pasting images, and below it the four target sizes for email, job portals, classifieds and the web.',
          es: 'shrinkling: la zona para arrastrar, elegir o pegar imágenes y, debajo, los cuatro tamaños objetivo para correo, portales de empleo, anuncios y la web.',
          fr: 'shrinkling : la zone où déposer, choisir ou coller des images et, en dessous, les quatre tailles cibles pour l’e-mail, les portails de candidature, les petites annonces et le web.',
          it: 'shrinkling: l’area in cui trascinare, scegliere o incollare le immagini e, sotto, le quattro dimensioni obiettivo per e-mail, portali per le candidature, annunci e web.',
          nl: 'shrinkling: het vlak voor het slepen, kiezen of plakken van afbeeldingen, en daaronder de vier doelgroottes voor e-mail, sollicitatieportalen, kleine advertenties en het web.',
          pl: 'shrinkling: pole do przeciągania, wybierania lub wklejania zdjęć, a pod nim cztery rozmiary docelowe dla e-maila, portali rekrutacyjnych, ogłoszeń i stron internetowych.',
          pt: 'shrinkling: a área para arrastar, escolher ou colar imagens e, por baixo, os quatro tamanhos-alvo para e-mail, portais de emprego, classificados e a web.',
          tr: 'shrinkling: görselleri sürükleyip bırakmak, seçmek ya da yapıştırmak için alan; altında e-posta, başvuru portalları, ilan siteleri ve web için dört hedef boyut.',
          ru: 'shrinkling: поле для перетаскивания, выбора или вставки изображений, а под ним четыре целевых размера: для почты, откликов на вакансии, объявлений и веба.',
          hi: 'shrinkling: छवियाँ खींचकर छोड़ने, चुनने या पेस्ट करने की जगह, और उसके नीचे ईमेल, आवेदन पोर्टलों, पुराना सामान बेचने की साइटों और वेब के लिए चार लक्षित आकार।',
          zh: 'shrinkling：用来拖入、选择或粘贴图片的区域，下面是四种目标大小，分别用于邮件、求职申请网站、二手交易和网页。',
          ja: 'shrinkling: 画像をドロップ、選択、貼り付けできる枠と、その下のメール・応募サイト・フリマ・ウェブ向けの4つの目標サイズ。',
          ko: 'shrinkling: 이미지를 끌어다 놓거나 고르거나 붙여 넣는 영역, 그 아래에 이메일, 채용 사이트, 중고 거래, 웹용 목표 크기 네 가지.'
        }
      }
    ],
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
      ],
      es: [
        'Arrastra las imágenes a la zona indicada, ábrelas desde el selector de archivos o pégalas con Ctrl+V.',
        'Elige un ajuste predefinido —correo, solicitud de empleo, anuncios clasificados o web— o fija tú mismo el tamaño objetivo, el lado más largo y el formato.',
        'Descárgalas una a una. A partir de dos imágenes terminadas aparece además «Descargar todas» como archivo ZIP.'
      ],
      fr: [
        'Faire glisser les images sur la zone prévue, les ouvrir par le sélecteur de fichiers ou les coller avec Ctrl+V.',
        'Choisir un préréglage — e-mail, candidature, petites annonces ou web — ou régler soi-même la taille visée, le plus grand côté et le format.',
        'Les télécharger une par une. À partir de deux images terminées, il y a en plus « Tout télécharger » sous forme de fichier ZIP.'
      ],
      it: [
        'Trascina le immagini sull’area, aprile dalla finestra di scelta file oppure incollale con Ctrl+V.',
        'Scegli una preimpostazione — e-mail, candidatura, annunci o web — oppure imposta tu stesso la dimensione di destinazione, il lato più lungo e il formato.',
        'Scaricale una per una. Da due immagini pronte in poi c’è in più «Scarica tutte» come file ZIP.'
      ],
      nl: [
        'Sleep afbeeldingen naar het vlak, open ze via de bestandskiezer of plak ze met Ctrl+V.',
        'Kies een voorinstelling — e-mail, sollicitatie, kleine advertenties of web — of stel doelgrootte, langste zijde en formaat zelf in.',
        'Download ze één voor één. Vanaf twee klaargemaakte afbeeldingen is er ook “Alles downloaden” als ZIP-bestand.'
      ],
      pl: [
        'Przeciągnąć zdjęcia na pole, otworzyć je przez wybór plików albo wkleić skrótem Ctrl+V.',
        'Wybrać ustawienie wstępne — E-mail, Podanie o pracę, Ogłoszenia albo Web — albo samemu ustawić rozmiar docelowy, dłuższy bok i format.',
        'Pobierać pojedynczo. Od dwóch gotowych zdjęć jest dodatkowo „Pobierz wszystko” jako plik ZIP.'
      ],
      pt: [
        'Arrastar as imagens para a área, abri-las pelo seletor de ficheiros ou colá-las com Ctrl+V.',
        'Escolher uma predefinição — e-mail, candidatura, classificados ou web — ou definir você mesmo o tamanho alvo, o lado mais comprido e o formato.',
        'Transferir uma a uma. A partir de duas imagens prontas há ainda «Baixar tudo (ZIP)».'
      ],
      tr: [
        'Görselleri alana sürükleyin, dosya seçicisinden açın ya da Ctrl+V ile yapıştırın.',
        'Bir hazır ayar seçin — e-posta, iş başvurusu, ilan veya web — ya da hedef boyutu, en uzun kenarı ve biçimi kendiniz belirleyin.',
        'Tek tek indirin. İki bitmiş görselden itibaren ayrıca ZIP dosyası olarak “Tümünü indir” seçeneği çıkar.'
      ],
      ru: [
        'Перетащите изображения на поле, откройте их через диалог выбора файлов или вставьте сочетанием Ctrl+V.',
        'Выберите предустановку — «Почта», «Анкета / портал», «Объявления» или «Веб» — либо задайте целевой размер, длинную сторону и формат сами.',
        'Скачивайте по одному. Начиная с двух готовых изображений появляется дополнительно «Скачать всё (ZIP)».'
      ],
      hi: [
        'तस्वीरों को इस जगह पर खींचकर छोड़ें, फ़ाइल चयन से खोलें, या Ctrl+V से चिपकाएँ।',
        'एक तैयार सेटिंग चुनें — ईमेल, आवेदन, ख़रीद-बिक्री विज्ञापन या वेब — या लक्ष्य आकार, सबसे लंबा किनारा और फ़ॉर्मैट खुद तय करें।',
        'एक-एक करके डाउनलोड करें। दो तैयार तस्वीरों से आगे “सब डाउनलोड करें” भी मिलता है, ZIP फ़ाइल के रूप में।'
      ],
      zh: [
        '把图片拖到那块区域上、通过文件选择框打开，或者用 Ctrl+V 粘贴。',
        '选一个预设——邮件、求职申请、二手交易或网页——或者自己设定目标大小、最长边和格式。',
        '逐张下载。从两张处理完的图片开始，还会多出一个“全部下载”，打包成 ZIP 文件。'
      ],
      ja: [
        '画像を枠にドラッグするか、ファイル選択から開くか、Ctrl+V で貼り付けます。',
        'プリセットを選びます — メール、応募・申請、フリマアプリ、ウェブ — あるいは目標サイズ、長辺、形式を自分で決めます。',
        '1枚ずつダウンロードします。2枚以上仕上がると、さらに「すべてダウンロード」で ZIP ファイルにまとめられます。'
      ],
      ko: [
        '이미지를 영역 위로 끌어다 놓거나, 파일 선택 창에서 열거나, Ctrl+V로 붙여 넣습니다.',
        '프리셋을 고릅니다 — 메일, 지원서, 중고 거래, 웹 — 아니면 목표 용량, 긴 변의 길이, 형식을 직접 정합니다.',
        '하나씩 다운로드합니다. 완성된 이미지가 두 장부터는 “모두 다운로드”로 ZIP 파일도 받을 수 있습니다.'
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
      ],
      es: [
        'Si el original ya era más pequeño que el objetivo, el archivo sale más grande en vez de más pequeño. Los metadatos desaparecen igualmente, y la propia aplicación lo dice.',
        'Las fotos HEIC del iPhone solo las abre Safari. Los demás navegadores muestran en su lugar una indicación de cómo obtener JPEG en el iPhone.',
        'Como mucho 40 imágenes por pasada. Se calculan una detrás de otra: con fotos muy grandes la interfaz puede quedarse un momento parada.',
        'También los ajustes predefinidos que indican un tamaño en megabytes limitan el lado más largo: correo y solicitud de empleo a 2560 píxeles, anuncios clasificados a 1920.'
      ],
      fr: [
        'Si l’original était déjà plus petit que la cible, le fichier devient plus gros au lieu de plus petit. Les métadonnées ont malgré tout disparu, et l’application le dit elle-même.',
        'Les photos HEIC de l’iPhone ne s’ouvrent que dans Safari. Les autres navigateurs affichent à la place une indication sur la façon d’obtenir du JPEG sur l’iPhone.',
        '40 images au maximum par passage. Les images sont traitées l’une après l’autre — avec de très grandes photos, l’interface peut se figer brièvement.',
        'Même les préréglages exprimés en mégaoctets limitent le plus grand côté : e-mail et candidature à 2560 pixels, petites annonces à 1920.'
      ],
      it: [
        'Se l’originale era già più piccolo della dimensione di destinazione, il file diventa più grande invece che più piccolo. I metadati spariscono comunque, e l’app lo dice da sé.',
        'Le foto HEIC dell’iPhone le apre solo Safari. Gli altri browser mostrano invece un’indicazione su come ottenere un JPEG sull’iPhone.',
        'Al massimo 40 immagini per passaggio. Vengono elaborate una dopo l’altra: con foto molto grandi l’interfaccia può bloccarsi per un attimo.',
        'Anche le preimpostazioni con l’indicazione della dimensione in megabyte limitano il lato più lungo: e-mail e candidatura a 2560 pixel, annunci a 1920.'
      ],
      nl: [
        'Was het origineel al kleiner dan het doel, dan wordt het bestand groter in plaats van kleiner. De metadata zijn er hoe dan ook uit, en de app zegt het zelf.',
        'HEIC-foto’s van de iPhone opent alleen Safari. Andere browsers laten in plaats daarvan een aanwijzing zien hoe je op de iPhone JPEG krijgt.',
        'Hoogstens 40 afbeeldingen per ronde. Ze worden één voor één verwerkt — bij heel grote foto’s kan de interface even haperen.',
        'Ook de voorinstellingen met een grootte in megabyte begrenzen de langste zijde: e-mail en sollicitatie op 2560 pixels, kleine advertenties op 1920.'
      ],
      pl: [
        'Jeśli oryginał był już mniejszy niż cel, plik wyjdzie większy zamiast mniejszego. Metadane i tak znikają, a aplikacja sama to mówi.',
        'Zdjęcia HEIC z iPhone’a otwiera tylko Safari. Inne przeglądarki pokazują zamiast tego wskazówkę, jak na iPhonie uzyskać JPEG.',
        'Najwyżej 40 zdjęć na jeden przebieg. Przetwarzane są jedno po drugim — przy bardzo dużych zdjęciach interfejs może na chwilę przystanąć.',
        'Także ustawienia wstępne z podaniem rozmiaru w megabajtach ograniczają dłuższy bok: E-mail i Podanie o pracę do 2560 pikseli, Ogłoszenia do 1920.'
      ],
      pt: [
        'Se o original já era mais pequeno do que o alvo, o ficheiro fica maior em vez de mais pequeno. Os metadados desaparecem à mesma, e a aplicação di-lo ela própria.',
        'Fotografias HEIC do iPhone só o Safari as abre. Os outros navegadores mostram em vez disso uma indicação de como obter JPEG no iPhone.',
        'No máximo 40 imagens por passagem. O cálculo é feito uma a seguir à outra — com fotografias muito grandes, a interface pode engasgar por momentos.',
        'Também as predefinições com indicação de tamanho em megabytes limitam o lado mais comprido: e-mail e candidatura a 2560 píxeis, classificados a 1920.'
      ],
      tr: [
        'Özgün dosya zaten hedeften küçükse, dosya küçülmez, büyür. Üstveriler yine de gitmiş olur ve uygulama bunu kendisi söyler.',
        'iPhone’dan gelen HEIC fotoğraflarını yalnızca Safari açar. Diğer tarayıcılar bunun yerine iPhone’da JPEG’in nasıl elde edileceğine dair bir not gösterir.',
        'Bir seferde en fazla 40 görsel. Hesaplama tek tek yapılır — çok büyük fotoğraflarda arayüz kısa süre takılabilir.',
        'Boyutu megabayt olarak veren hazır ayarlar da en uzun kenarı sınırlar: e-posta ve iş başvurusu 2560 piksele, ilanlar 1920’ye.'
      ],
      ru: [
        'Если оригинал уже был меньше целевого размера, файл станет больше, а не меньше. Метаданные при этом всё равно исчезнут, и приложение само об этом говорит.',
        'Фотографии HEIC с iPhone открывает только Safari. Другие браузеры вместо этого показывают подсказку, как получить JPEG на iPhone.',
        'Не больше 40 изображений за один проход. Обрабатываются они по очереди — при очень больших фотографиях интерфейс может ненадолго подвиснуть.',
        'Предустановки с размером в мегабайтах тоже ограничивают длинную сторону: «Почта» и «Анкета / портал» — до 2560 пикселей, «Объявления» — до 1920.'
      ],
      hi: [
        'अगर मूल फ़ाइल पहले से ही लक्ष्य से छोटी थी, तो फ़ाइल छोटी नहीं, बड़ी निकलेगी। मेटाडेटा फिर भी हट जाता है, और ऐप खुद यह बता देती है।',
        'iPhone की HEIC तस्वीरें केवल Safari खोलता है। बाक़ी ब्राउज़र इसके बजाय बताते हैं कि iPhone पर JPEG कैसे पाया जाए।',
        'एक बार में ज़्यादा से ज़्यादा 40 तस्वीरें। गणना एक के बाद एक होती है — बहुत बड़ी तस्वीरों पर इंटरफ़ेस थोड़ी देर अटक सकता है।',
        'मेगाबाइट में आकार बताने वाली तैयार सेटिंग्स भी सबसे लंबे किनारे को सीमित करती हैं: ईमेल और आवेदन 2560 पिक्सेल पर, ख़रीद-बिक्री विज्ञापन 1920 पर।'
      ],
      zh: [
        '如果原图本来就比目标值还小，文件会变大而不是变小。元数据无论如何都没了，应用自己也会这么说。',
        'iPhone 的 HEIC 照片只有 Safari 能打开。别的浏览器会改为显示一条提示，告诉你怎么在 iPhone 上得到 JPEG。',
        '每批最多 40 张图片。计算是一张接一张进行的——照片非常大时，界面可能会短暂卡住。',
        '即使是以兆字节给出大小的那些预设，也会限制最长边：邮件和求职申请限制到 2560 像素，二手交易限制到 1920。'
      ],
      ja: [
        '元の画像がもともと目標より小さかった場合、ファイルは小さくならずに大きくなります。それでもメタデータは消えますし、アプリ自身がそのことを伝えます。',
        'iPhone の HEIC 写真を開けるのは Safari だけです。ほかのブラウザーでは代わりに、iPhone で JPEG を得る方法の案内が出ます。',
        '1回につき最大40枚です。処理は1枚ずつ順番に行われます — とても大きな写真では画面が一瞬止まることがあります。',
        'メガバイトで指定するプリセットも長辺を制限します: メールと応募・申請は2560ピクセル、フリマアプリは1920ピクセルです。'
      ],
      ko: [
        '원본이 이미 목표보다 작았다면 파일은 작아지지 않고 오히려 커집니다. 메타데이터는 어느 쪽이든 사라지며, 앱이 그 사실을 직접 알려 줍니다.',
        'iPhone의 HEIC 사진은 Safari에서만 열립니다. 다른 브라우저에서는 대신 iPhone에서 JPEG를 얻는 방법을 알려 주는 안내가 나옵니다.',
        '한 번에 최대 40장입니다. 하나씩 차례로 계산하므로, 아주 큰 사진에서는 화면이 잠깐 멈칫할 수 있습니다.',
        '메가바이트로 용량을 지정하는 프리셋도 긴 변을 함께 제한합니다: 메일과 지원서는 2560픽셀, 중고 거래는 1920픽셀입니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/shrinkling/blob/main/README.md'
    }
  },

  wifi: {
    purpose: {
      de: 'Ein QR-Code, den Gäste mit der Kamera scannen und sofort im WLAN sind — ohne ein Passwort abzutippen. Netzwerkname und Passwort bleiben dabei im Browser und werden an keinen Server geschickt.',
      en: 'A QR code your guests scan with the camera to join your WiFi — no typing out passwords. The network name and password stay in your browser and are never sent to a server.',
      es: 'Un código QR que los invitados escanean con la cámara y ya están en el WiFi, sin teclear ninguna contraseña. El nombre de la red y la contraseña se quedan en el navegador y no se envían a ningún servidor.',
      fr: 'Un code QR que les invités scannent avec l’appareil photo pour être aussitôt sur le Wi-Fi — sans recopier de mot de passe. Le nom du réseau et le mot de passe restent dans le navigateur et ne sont envoyés à aucun serveur.',
      it: 'Un codice QR che gli ospiti scansionano con la fotocamera e sono subito connessi, senza digitare una password. Il nome della rete e la password restano nel browser e non vengono mandati a nessun server.',
      nl: 'Een QR-code die gasten met de camera scannen en waarmee ze meteen op de wifi zitten — zonder een wachtwoord over te tikken. Netwerknaam en wachtwoord blijven daarbij in de browser en worden naar geen enkele server gestuurd.',
      pl: 'Kod QR, który goście skanują aparatem i od razu są w Wi-Fi — bez przepisywania hasła. Nazwa sieci i hasło zostają przy tym w przeglądarce i nie są wysyłane na żaden serwer.',
      pt: 'Um código QR que os convidados digitalizam com a câmara e ficam logo no Wi-Fi — sem escreverem uma palavra-passe. O nome da rede e a palavra-passe ficam no navegador e não são enviados para servidor nenhum.',
      tr: 'Misafirlerinizin kamerayla taratıp anında Wi-Fi ağınıza bağlandığı bir QR kodu — parola yazmadan. Ağ adı ve parola bu sırada tarayıcıda kalır ve hiçbir sunucuya gönderilmez.',
      ru: 'QR-код, который гости сканируют камерой и сразу оказываются в Wi-Fi, — без набора пароля вручную. Имя сети и пароль при этом остаются в браузере и не отправляются ни на какой сервер.',
      hi: 'एक QR कोड, जिसे मेहमान कैमरे से स्कैन करते हैं और तुरंत वाई-फ़ाई में आ जाते हैं — बिना पासवर्ड टाइप किए। नेटवर्क का नाम और पासवर्ड इस दौरान ब्राउज़र में ही रहते हैं और किसी सर्वर को नहीं भेजे जाते।',
      zh: '一个二维码，客人用相机一扫就连上了 WiFi——不用手打密码。网络名称和密码始终留在浏览器里，不会被发送到任何服务器。',
      ja: 'ゲストがカメラでスキャンするだけで、すぐ Wi-Fi につながる QR コードです — パスワードを打ち込む必要はありません。ネットワーク名とパスワードはブラウザーの中にとどまり、どのサーバーにも送られません。',
      ko: '손님이 카메라로 스캔하면 곧바로 Wi-Fi에 들어오는 QR 코드입니다 — 비밀번호를 받아 적을 필요가 없습니다. 네트워크 이름과 비밀번호는 그동안 브라우저 안에 머무르며 어떤 서버로도 전송되지 않습니다.'
    },
    shots: [
      {
        file: 'wifi-en.webp', w: 1600, h: 1198,
        alt: {
          de: 'WLAN-QR-Karte: links Netzwerkname, Verschlüsselung und Passwort, rechts die fertige Karte mit QR-Code, Netzwerkname und Passwort, darunter Teilen, PNG herunterladen, QR-Code als SVG, Kopieren und Drucken.',
          en: 'WiFi QR Card: network name, security and password on the left, the finished card with QR code, network name and password on the right, and below it share, download PNG, QR code as SVG, copy and print.',
          es: 'Tarjeta QR WiFi: a la izquierda, el nombre de la red, la seguridad y la contraseña; a la derecha, la tarjeta terminada con el código QR, el nombre de la red y la contraseña y, debajo, compartir, descargar como PNG, el código QR en SVG, copiar e imprimir.',
          fr: 'Carte QR Wi-Fi : à gauche, le nom du réseau, la sécurité et le mot de passe ; à droite, la carte terminée avec le code QR, le nom du réseau et le mot de passe et, en dessous, partager, télécharger en PNG, le code QR en SVG, copier et imprimer.',
          it: 'Tessera QR Wi-Fi: a sinistra nome della rete, sicurezza e password; a destra la tessera finita con codice QR, nome della rete e password e, sotto, condivisione, download in PNG, codice QR in SVG, copia e stampa.',
          nl: 'Wifi-QR-kaart: links netwerknaam, beveiliging en wachtwoord, rechts de kant-en-klare kaart met QR-code, netwerknaam en wachtwoord, en daaronder delen, PNG downloaden, QR-code als SVG, kopiëren en afdrukken.',
          pl: 'Karta QR Wi-Fi: po lewej nazwa sieci, zabezpieczenie i hasło, po prawej gotowa karta z kodem QR, nazwą sieci i hasłem, a pod nią udostępnianie, pobieranie PNG, kod QR jako SVG, kopiowanie i drukowanie.',
          pt: 'Cartão QR de Wi-Fi: à esquerda, o nome da rede, a segurança e a palavra-passe; à direita, o cartão pronto com código QR, nome da rede e palavra-passe e, por baixo, partilhar, transferir PNG, código QR em SVG, copiar e imprimir.',
          tr: 'Wi-Fi QR Kartı: solda ağ adı, güvenlik ve şifre; sağda QR kodu, ağ adı ve şifreyle hazır kart; altında paylaşma, PNG indirme, QR kodu SVG olarak alma, kopyalama ve yazdırma düğmeleri.',
          ru: 'QR-карточка для Wi-Fi: слева имя сети, защита и пароль, справа готовая карточка с QR-кодом, именем сети и паролем, а под ней кнопки: поделиться, скачать PNG, QR-код в SVG, скопировать и распечатать.',
          hi: 'वाई-फ़ाई QR कार्ड: बाईं ओर नेटवर्क का नाम, सुरक्षा और पासवर्ड, दाईं ओर QR कोड, नेटवर्क के नाम और पासवर्ड वाला तैयार कार्ड, और उसके नीचे साझा करने, PNG डाउनलोड करने, QR कोड को SVG में लेने, कॉपी करने और प्रिंट करने के बटन।',
          zh: 'WiFi 二维码卡片：左边是网络名称、加密方式和密码，右边是做好的卡片，上面有二维码、网络名称和密码；下面是分享、下载 PNG、以 SVG 格式下载二维码、复制和打印。',
          ja: 'Wi-Fi QRカード: 左にネットワーク名、セキュリティ、パスワード、右に QR コード、ネットワーク名、パスワードの入った完成したカード、その下に共有、PNG のダウンロード、QR コードの SVG 保存、コピー、印刷。',
          ko: 'Wi-Fi QR 카드: 왼쪽에는 네트워크 이름, 보안 방식, 비밀번호, 오른쪽에는 QR 코드와 네트워크 이름, 비밀번호가 담긴 완성된 카드, 그 아래에는 공유, PNG 다운로드, QR 코드 SVG 다운로드, 복사, 인쇄.'
        }
      }
    ],
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
      ],
      es: [
        'Escribe el nombre de la red y la contraseña y elige el tipo de seguridad: por regla general, WPA/WPA2/WPA3.',
        'Comprueba en la vista previa qué aspecto tiene la tarjeta. Si quieres, la contraseña se puede imprimir además en texto claro, para dispositivos sin cámara.',
        'Descárgala como PNG o imprímela directamente: como tarjetita o como expositor de mesa plegable.'
      ],
      fr: [
        'Saisir le nom du réseau et le mot de passe, puis choisir le type de sécurité — en règle générale WPA/WPA2/WPA3.',
        'Vérifier dans l’aperçu à quoi ressemble la carte. Si vous le souhaitez, le mot de passe peut en plus être imprimé en clair, pour les appareils dépourvus de caméra.',
        'Télécharger en PNG ou imprimer directement : en petite carte ou en chevalet de table pliable.'
      ],
      it: [
        'Inserisci il nome della rete e la password e scegli il tipo di sicurezza: di norma WPA/WPA2/WPA3.',
        'Nell’anteprima controlla come viene la tessera. Volendo, la password si può stampare anche in chiaro, per i dispositivi senza fotocamera.',
        'Scaricala come PNG oppure stampala subito: come tesserina o come espositore da tavolo pieghevole.'
      ],
      nl: [
        'Vul netwerknaam en wachtwoord in en kies het beveiligingstype — in de regel WPA/WPA2/WPA3.',
        'Controleer in de voorvertoning hoe de kaart eruitziet. Desgewenst kan het wachtwoord er ook leesbaar bij worden gedrukt, voor apparaten zonder camera.',
        'Download de kaart als PNG of druk hem meteen af: als kaartje of als opvouwbare tafelstandaard.'
      ],
      pl: [
        'Wpisać nazwę sieci i hasło oraz wybrać rodzaj zabezpieczenia — z reguły WPA/WPA2/WPA3.',
        'W podglądzie sprawdzić, jak wygląda karta. Na życzenie hasło można dodatkowo wydrukować otwartym tekstem, dla urządzeń bez aparatu.',
        'Pobrać jako PNG albo wydrukować od razu: jako karteczkę albo jako składany stojak na stół.'
      ],
      pt: [
        'Escrever o nome da rede e a palavra-passe e escolher o tipo de segurança — regra geral, WPA/WPA2/WPA3.',
        'Ver na pré-visualização o aspeto do cartão. Se quiser, a palavra-passe pode ainda ser impressa em texto simples, para aparelhos sem câmara.',
        'Transferir como PNG ou imprimir logo: como cartãozinho ou como cavalete de mesa dobrável.'
      ],
      tr: [
        'Ağ adını ve parolayı girin, güvenlik türünü seçin — çoğu durumda WPA/WPA2/WPA3.',
        'Kartın nasıl göründüğünü önizlemede kontrol edin. İsterseniz parola, kamerası olmayan cihazlar için ayrıca düz metin olarak da bastırılabilir.',
        'PNG olarak indirin ya da doğrudan yazdırın: küçük bir kart olarak veya katlanabilir bir masa kartı olarak.'
      ],
      ru: [
        'Впишите имя сети и пароль и выберите тип защиты — как правило, WPA/WPA2/WPA3.',
        'Посмотрите в предпросмотре, как выглядит карточка. При желании пароль можно дополнительно напечатать открытым текстом — для устройств без камеры.',
        'Скачайте как PNG или сразу распечатайте: «Карточка» или «Настольная табличка».'
      ],
      hi: [
        'नेटवर्क का नाम और पासवर्ड दर्ज करें और सुरक्षा का प्रकार चुनें — आमतौर पर WPA/WPA2/WPA3।',
        'पूर्वावलोकन में देखें कि कार्ड कैसा दिखता है। चाहें तो पासवर्ड साफ़ अक्षरों में भी छापा जा सकता है, उन उपकरणों के लिए जिनमें कैमरा नहीं है।',
        'PNG के रूप में डाउनलोड करें या सीधे छापें: छोटे कार्ड के रूप में या मोड़कर खड़े किए जाने वाले टेबल स्टैंड के रूप में।'
      ],
      zh: [
        '填写网络名称和密码，并选择加密方式——通常是 WPA/WPA2/WPA3。',
        '在预览里看看这张卡片长什么样。如果需要，还可以把密码以明文一并印上，供没有相机的设备使用。',
        '下载为 PNG，或者直接打印：做成小卡片，或做成可折叠的桌牌。'
      ],
      ja: [
        'ネットワーク名とパスワードを入力し、セキュリティの種類を選びます — たいていは WPA/WPA2/WPA3 です。',
        'プレビューでカードの見た目を確かめます。希望すれば、カメラのない機器のために、パスワードを平文で併せて印刷することもできます。',
        'PNG としてダウンロードするか、そのまま印刷します: 小さなカードとして、または折って立てる卓上カードとして。'
      ],
      ko: [
        '네트워크 이름과 비밀번호를 적고 보안 방식을 고릅니다 — 대개는 WPA/WPA2/WPA3입니다.',
        '미리 보기에서 카드가 어떻게 보이는지 확인합니다. 원한다면 카메라가 없는 기기를 위해 비밀번호를 평문으로 함께 인쇄할 수도 있습니다.',
        'PNG로 내려받거나 바로 인쇄합니다: 작은 카드로, 또는 접어 세우는 탁상 표지판으로.'
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
      ],
      es: [
        'El código QR no está cifrado. Quien fotografíe la tarjeta tendrá acceso al WiFi, así que no la cuelgues en el escaparate ni la publiques en internet.',
        'Las redes de empresa y de universidad con nombre de usuario propio (WPA-Enterprise, eduroam) y las redes con portal cautivo y código de acceso no se pueden compartir así.',
        'No todos los navegadores ofrecen copiar y compartir; esos botones solo aparecen donde el dispositivo puede hacerlo. La descarga como PNG funciona en todas partes.',
        'En redes solo WPA3 el código puede fallar en algunos dispositivos, porque la tarjeta escribe siempre el tipo WPA.'
      ],
      fr: [
        'Le code QR n’est pas chiffré. Quiconque photographie la carte a accès au Wi-Fi — ne l’accrochez donc pas en vitrine et ne la mettez pas en ligne.',
        'Les réseaux d’entreprise et d’université à identifiant personnel (WPA-Enterprise, eduroam) et les réseaux à portail avec code d’accès ne peuvent pas être transmis ainsi.',
        'Copier et partager ne sont pas proposés par tous les navigateurs ; les boutons n’apparaissent que là où l’appareil en est capable. Le téléchargement en PNG marche partout.',
        'Sur les réseaux purement WPA3, le code peut échouer sur certains appareils, parce que la carte inscrit toujours le type WPA.'
      ],
      it: [
        'Il codice QR non è cifrato. Chi fotografa la tessera ha accesso al Wi-Fi: quindi non appenderla in vetrina e non metterla in rete.',
        'Le reti aziendali e universitarie con nome utente personale (WPA-Enterprise, eduroam) e le reti con portale e codice voucher non si possono condividere in questo modo.',
        'Non tutti i browser offrono la copia e la condivisione; i pulsanti compaiono solo dove il dispositivo lo consente. Lo scaricamento come PNG funziona ovunque.',
        'Con reti solo WPA3 il codice può fallire su alcuni dispositivi, perché la tessera inserisce sempre il tipo WPA.'
      ],
      nl: [
        'De QR-code is niet versleuteld. Wie de kaart fotografeert, heeft toegang tot je wifi — hang hem dus niet in de etalage en zet hem niet op internet.',
        'Bedrijfs- en universiteitsnetwerken met een eigen inlognaam (WPA-Enterprise, eduroam) en portaalnetwerken met een vouchercode kun je zo niet doorgeven.',
        'Kopiëren en delen biedt niet elke browser aan; die knoppen verschijnen alleen waar het apparaat het kan. Het downloaden als PNG gaat overal.',
        'Bij zuivere WPA3-netwerken kan de code op sommige apparaten mislukken, omdat de kaart altijd het WPA-type invult.'
      ],
      pl: [
        'Kod QR nie jest zaszyfrowany. Kto sfotografuje kartę, ma dostęp do Wi-Fi — więc nie wieszać jej na wystawie i nie umieszczać w sieci.',
        'Sieci firmowych i uczelnianych z własną nazwą logowania (WPA-Enterprise, eduroam) oraz sieci z portalem i kodem-voucherem nie da się w ten sposób przekazać.',
        'Nie każda przeglądarka oferuje kopiowanie i udostępnianie; przyciski pojawiają się tylko tam, gdzie urządzenie to potrafi. Pobranie jako PNG działa wszędzie.',
        'Przy sieciach wyłącznie WPA3 kod może zawieść na niektórych urządzeniach, bo karta zawsze wpisuje typ WPA.'
      ],
      pt: [
        'O código QR não está cifrado. Quem fotografar o cartão fica com o acesso ao Wi-Fi — por isso, não o pendure na montra nem o ponha na Internet.',
        'Redes de empresas e de universidades com nome de utilizador próprio (WPA-Enterprise, eduroam) e redes com portal e código de voucher não se conseguem passar desta maneira.',
        'Nem todos os navegadores oferecem copiar e partilhar; os botões só aparecem onde o aparelho é capaz disso. A transferência como PNG funciona em todo o lado.',
        'Em redes só com WPA3, o código pode falhar em alguns aparelhos, porque o cartão escreve sempre o tipo WPA.'
      ],
      tr: [
        'QR kodu şifrelenmiş değildir. Kartın fotoğrafını çeken, Wi-Fi erişimini de almış olur — yani onu vitrine asmayın ve internete koymayın.',
        'Kendi kullanıcı adıyla girilen şirket ve üniversite ağları (WPA-Enterprise, eduroam) ile kupon kodlu portal ağları bu yolla paylaşılamaz.',
        'Kopyalamayı ve paylaşmayı her tarayıcı sunmaz; bu düğmeler yalnızca cihazın bunu yapabildiği yerlerde görünür. PNG olarak indirme her yerde çalışır.',
        'Yalnızca WPA3 kullanan ağlarda kod bazı cihazlarda başarısız olabilir, çünkü kart her zaman WPA türünü yazar.'
      ],
      ru: [
        'QR-код не зашифрован. Кто сфотографирует карточку, тот получит доступ к Wi-Fi — так что не вешайте её в витрину и не выкладывайте в сеть.',
        'Корпоративные и университетские сети с личным именем входа (WPA-Enterprise, eduroam) и сети с порталом и кодом-ваучером так передать нельзя.',
        'Копирование и «Поделиться» предлагает не каждый браузер; кнопки появляются только там, где устройство это умеет. Скачивание в PNG работает везде.',
        'В сетях только с WPA3 код на отдельных устройствах может не сработать, потому что карточка всегда записывает тип WPA.'
      ],
      hi: [
        'QR कोड एन्क्रिप्टेड नहीं है। जो भी कार्ड की तस्वीर खींच ले, उसके पास वाई-फ़ाई की पहुँच है — इसलिए इसे दुकान की खिड़की में न टाँगें और इंटरनेट पर न डालें।',
        'अलग-अलग लॉगिन नाम वाले कंपनी और विश्वविद्यालय नेटवर्क (WPA-Enterprise, eduroam) और वाउचर कोड वाले पोर्टल नेटवर्क इस तरह साझा नहीं किए जा सकते।',
        'कॉपी करना और साझा करना हर ब्राउज़र नहीं देता; ये बटन केवल वहीं दिखते हैं जहाँ डिवाइस यह कर सकता है। PNG के रूप में डाउनलोड हर जगह चलता है।',
        'केवल WPA3 वाले नेटवर्कों में कोड कुछ उपकरणों पर विफल हो सकता है, क्योंकि कार्ड हमेशा WPA प्रकार ही दर्ज करता है।'
      ],
      zh: [
        '二维码没有加密。谁把这张卡片拍下来，谁就有了 WiFi 的访问权——所以别挂到橱窗里，也别放到网上。',
        '使用各自登录名的公司和大学网络（WPA-Enterprise、eduroam），以及需要上网码的强制门户（Captive Portal）网络，没法用这种方式传出去。',
        '并不是每个浏览器都提供复制和分享；这些按钮只在设备支持的地方出现。下载 PNG 在哪里都行。',
        '在纯 WPA3 网络上，二维码可能在个别设备上失败，因为这张卡片写入的始终是 WPA 类型。'
      ],
      ja: [
        'QR コードは暗号化されていません。カードを写真に撮った人は、その Wi-Fi に接続できてしまいます — ショーウィンドウに貼ったり、ネットに上げたりしないでください。',
        '個別のログイン名を使う企業や大学のネットワーク（WPA-Enterprise、eduroam）や、利用コード（バウチャー）で入るポータル型のネットワークは、この方法では渡せません。',
        'コピーと共有はどのブラウザーでも用意されているわけではありません。ボタンは機器が対応している場所にだけ現れます。PNG のダウンロードはどこでもできます。',
        'WPA3 のみのネットワークでは、カードが常に WPA の種別を書き込むため、一部の機器でコードが読み取れないことがあります。'
      ],
      ko: [
        'QR 코드는 암호화되어 있지 않습니다. 카드를 사진으로 찍은 사람은 Wi-Fi에 접속할 수 있습니다 — 그러니 진열창에 걸지 말고 인터넷에 올리지도 마세요.',
        '개인 로그인 이름을 쓰는 회사·대학 네트워크(WPA-Enterprise, eduroam)와 쿠폰 코드를 쓰는 포털 네트워크는 이 방식으로 전달할 수 없습니다.',
        '복사와 공유는 모든 브라우저가 제공하지는 않습니다. 해당 버튼은 기기가 지원하는 곳에서만 나타납니다. PNG 내려받기는 어디서나 됩니다.',
        'WPA3 전용 네트워크에서는 일부 기기에서 코드가 작동하지 않을 수 있습니다. 카드가 언제나 WPA 유형을 적어 넣기 때문입니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/wifi-qr/blob/main/README.md'
    }
  },

  prismatical: {
    purpose: {
      de: 'Neue Passwörter erzeugen und dabei sehen, was sie taugen. Die Akzentfarbe der Seite ist die Stärkeanzeige: Sie wandert von Rot über Gelb und Grün bis Violett, während du an Länge und Zeichenarten drehst. Daneben stehen immer die nackten Zahlen — Bits und geschätzte Knackzeit in vier Angriffslagen. Erzeugt wird auf deinem Gerät, mit dem Zufallsgenerator des Betriebssystems.',
      en: 'Create new passwords and see what they are worth. The page’s accent colour is the strength meter: it travels from red through yellow and green to violet as you change length and character types. Next to it stand the bare numbers — bits and estimated crack time in four attack situations. Everything is generated on your device, using the operating system’s random generator.',
      es: 'Generar contraseñas nuevas y ver al mismo tiempo lo que valen. El color de acento de la página es el indicador de fuerza: va del rojo al violeta pasando por el amarillo y el verde mientras cambias la longitud y los tipos de caracteres. Al lado están siempre las cifras en bruto: bits y tiempo estimado para descifrar la contraseña en cuatro situaciones de ataque. Se genera en tu dispositivo, con el generador aleatorio del sistema operativo.',
      fr: 'Créer de nouveaux mots de passe et voir en même temps ce qu’ils valent. La couleur d’accent de la page est l’indicateur de robustesse : elle va du rouge au violet en passant par le jaune et le vert, pendant que vous jouez sur la longueur et les types de caractères. À côté figurent toujours les chiffres bruts — bits et temps estimé pour le casser dans quatre situations d’attaque. La génération se fait sur votre appareil, avec le générateur aléatoire du système d’exploitation.',
      it: 'Generare password nuove e vedere allo stesso tempo quanto valgono. Il colore d’accento della pagina è l’indicatore di robustezza: passa dal rosso al giallo e al verde fino al violetto mentre regoli la lunghezza e le categorie di caratteri. Accanto ci sono sempre i numeri puri e semplici: bit e tempo stimato per forzare la password in quattro scenari d’attacco. La generazione avviene sul tuo dispositivo, con il generatore casuale del sistema operativo.',
      nl: 'Nieuwe wachtwoorden maken en daarbij zien wat ze waard zijn. De accentkleur van de pagina is de sterktemeter: die loopt van rood via geel en groen tot violet terwijl je aan lengte en tekensoorten draait. Daarnaast staan altijd de kale getallen — bits en geschatte kraaktijd in vier aanvalssituaties. Er wordt op je eigen apparaat gegenereerd, met de toevalsgenerator van het besturingssysteem.',
      pl: 'Tworzyć nowe hasła i przy tym widzieć, ile są warte. Kolor akcentu strony jest wskaźnikiem siły: wędruje od czerwieni przez żółć i zieleń aż po fiolet, gdy zmieniasz długość i klasy znaków. Obok są zawsze podane suche liczby — bity i szacowany czas złamania w czterech scenariuszach ataku. Generowanie odbywa się na twoim urządzeniu, za pomocą generatora losowego systemu operacyjnego.',
      pt: 'Gerar palavras-passe novas e ver ao mesmo tempo o que elas valem. A cor de destaque da página é o indicador de força: percorre do vermelho, pelo amarelo e pelo verde, até ao violeta, enquanto você mexe no comprimento e nos tipos de caracteres. Ao lado estão sempre os números nus — bits e tempo estimado para a quebrar em quatro cenários de ataque. A geração acontece no seu dispositivo, com o gerador de números aleatórios do sistema operativo.',
      tr: 'Yeni parolalar üretin ve ne kadar işe yaradıklarını görün. Sayfanın vurgu rengi, güç göstergesidir: Uzunluğu ve karakter türlerini değiştirdikçe kırmızıdan sarıya, yeşile ve mora doğru ilerler. Yanında her zaman çıplak sayılar durur — bit sayısı ve dört saldırı durumunda tahmini kırılma süresi. Üretim, işletim sisteminin rastgele sayı üretecine dayanarak cihazınızda yapılır.',
      ru: 'Создавать новые пароли и сразу видеть, чего они стоят. Акцентный цвет страницы и есть индикатор надёжности: он идёт от красного через жёлтый и зелёный к фиолетовому, пока вы меняете длину и наборы символов. Рядом всегда видны голые цифры — биты и оценка времени взлома в четырёх сценариях атаки. Создаётся всё на вашем устройстве, генератором случайных чисел операционной системы.',
      hi: 'नए पासवर्ड बनाएँ और साथ ही देखें कि वे कितने काम के हैं। पेज का एक्सेंट रंग ही मज़बूती का पैमाना है: जैसे-जैसे आप लंबाई और वर्णों के प्रकार बदलते हैं, वह लाल से पीले और हरे होते हुए बैंगनी तक जाता है। बग़ल में हमेशा कोरे आँकड़े भी दिखते रहते हैं — बिट, और हमले की चार स्थितियों में तोड़ने का अनुमानित समय। सब कुछ आपके डिवाइस पर बनता है, ऑपरेटिंग सिस्टम के यादृच्छिक जनरेटर से।',
      zh: '生成新密码，同时看清它们到底顶不顶用。页面的强调色就是强度指示：当你调整长度和字符类型时，它会从红色经黄色、绿色一直走到紫色。旁边始终写着冷冰冰的数字——位数（bit）以及在四种攻击场景下估算出的破解时间。生成是在你的设备上完成的，用的是操作系统的随机数生成器。',
      ja: '新しいパスワードを作りながら、それがどれくらいのものなのかを目で見ます。ページのアクセントカラーがそのまま強度の表示です: 長さや文字種を動かすと、色が赤から黄色、緑を通って紫へと移っていきます。その横にはいつも生の数字も並びます — ビット数と、4つの攻撃状況での推定解読時間です。生成は端末の中で、OS の乱数生成器を使って行われます。',
      ko: '새 비밀번호를 만들면서 그것이 얼마나 쓸 만한지 함께 봅니다. 페이지의 강조색이 곧 강도 표시입니다: 길이와 문자 종류를 바꾸면 색이 빨강에서 노랑과 초록을 거쳐 보라까지 이동합니다. 그 옆에는 언제나 있는 그대로의 숫자가 놓입니다 — 비트 수와 네 가지 공격 상황에서의 예상 해독 시간입니다. 생성은 운영 체제의 난수 생성기를 써서 기기 안에서 이루어집니다.'
    },
    shots: [
      {
        file: 'prismatical-en.webp', w: 1174, h: 1438,
        alt: {
          de: 'Prismatical im Theme Cyber: oben ein erzeugtes Passwort mit der höchsten Stärkestufe und 116 Bit Entropie, darunter die sechs Arten vom Passwort bis zum deterministischen Modus, Länge, Zeichenklassen und Regeln.',
          en: 'Prismatical in the Cyber theme: a generated password at the highest strength level with 116 bits of entropy at the top, below it the six kinds from password to deterministic mode, length, character classes and rules.',
          es: 'Prismatical con el tema Cyber: arriba, una contraseña generada con el nivel de fortaleza más alto y 116 bits de entropía; debajo, los seis modos, de contraseña a determinista, la longitud, las clases de caracteres y las reglas.',
          fr: 'Prismatical avec le thème Cyber : en haut, un mot de passe généré au plus haut niveau de force, avec 116 bits d’entropie ; en dessous, les six modes, du mot de passe au mode déterministe, la longueur, les classes de caractères et les règles.',
          it: 'Prismatical con il tema Cyber: in alto una password generata al livello di robustezza più alto, con 116 bit di entropia; sotto, le sei modalità, dalla password a quella deterministica, la lunghezza, le classi di caratteri e le regole.',
          nl: 'Prismatical met het thema Cyber: bovenaan een gegenereerd wachtwoord met het hoogste sterkteniveau en 116 bits entropie, daaronder de zes soorten, van wachtwoord tot deterministische modus, en lengte, tekenklassen en regels.',
          pl: 'Prismatical w motywie Cyber: na górze wygenerowane hasło o najwyższym poziomie siły i entropii 116 bitów, pod nim sześć trybów, od hasła po deterministyczny, a także długość, klasy znaków i reguły.',
          pt: 'O Prismatical no tema Cyber: em cima, uma palavra-passe gerada com o nível de força mais alto e 116 bits de entropia; por baixo, os seis tipos, da palavra-passe ao modo determinístico, e ainda o comprimento, as classes de caracteres e as regras.',
          tr: 'Cyber temasında Prismatical: üstte en yüksek güç seviyesinde, 116 bit entropili oluşturulmuş bir parola; altında parolayla başlayıp deterministik modla biten altı tür, uzunluk, karakter sınıfları ve kurallar.',
          ru: 'Prismatical в теме Cyber: вверху сгенерированный пароль с наивысшим уровнем надёжности и 116 битами энтропии, ниже шесть режимов, от пароля до детерминированного, а также длина, классы символов и правила.',
          hi: 'Cyber थीम में Prismatical: ऊपर मज़बूती के सबसे ऊँचे स्तर और 116 बिट एंट्रॉपी वाला एक बनाया गया पासवर्ड, उसके नीचे पासवर्ड से लेकर नियतात्मक तक छह मोड, लंबाई, वर्ण श्रेणियाँ और नियम।',
          zh: '主题为 Cyber 的 Prismatical：上方是一个生成的密码，处于最高强度等级，熵为 116 比特；下面是从密码到确定性模式的六种类型，以及长度、字符类别和规则。',
          ja: 'Cyber テーマの Prismatical: 上には強度が最高レベルでエントロピー116ビットの生成済みパスワード、その下にパスワードから決定論的モードまでの6種類、長さ、文字種、ルール。',
          ko: 'Cyber 테마의 Prismatical: 위에는 강도가 가장 높은 단계이고 엔트로피가 116비트인 생성된 비밀번호, 그 아래에는 비밀번호부터 결정론적 생성까지 여섯 가지 모드, 길이, 문자 종류, 규칙.'
        }
      }
    ],
    steps: {
      de: [
        'Oben die Art wählen: Passwort, Passphrase, PIN, Aussprechbar, Nutzername oder Deterministisch. Für die meisten Konten ist „Passwort“ mit der Voreinstellung von 20 Zeichen richtig; zum Auswendiglernen nimm die Passphrase.',
        'Länge und Zeichenarten einstellen — oder oben ein Preset wählen, wenn die Webseite Regeln vorschreibt („höchstens 16 Zeichen“, „nur Buchstaben und Ziffern“). Bei jeder Änderung entsteht sofort ein neues Passwort.',
        'Auf Kopieren tippen und im Passwortspeicher einfügen. Die Zwischenablage leert sich von selbst wieder — voreingestellt nach 30 Sekunden, sichtbar als Countdown.'
      ],
      en: [
        'Pick the kind at the top: password, passphrase, PIN, pronounceable, username or deterministic. For most accounts “password” with the preset 20 characters is right; for something you have to memorise, take the passphrase.',
        'Set length and character types — or pick a preset at the top when a website imposes rules (“at most 16 characters”, “letters and digits only”). Every change immediately produces a new password.',
        'Tap copy and paste it into your password manager. The clipboard clears itself again — after 30 seconds by default, shown as a countdown.'
      ],
      es: [
        'Arriba, elige el tipo: contraseña, frase de contraseña, PIN, pronunciable, nombre de usuario o determinista. Para la mayoría de las cuentas, «contraseña» con los 20 caracteres predeterminados es lo adecuado; para aprendértela de memoria, coge la frase de contraseña.',
        'Ajusta la longitud y los tipos de caracteres, o elige arriba un preajuste cuando la página web imponga reglas («como mucho 16 caracteres», «solo letras y cifras»). Con cada cambio surge enseguida una contraseña nueva.',
        'Toca Copiar y pégala en tu gestor de contraseñas. El portapapeles se vacía solo: a los 30 segundos de forma predeterminada, visible como cuenta atrás.'
      ],
      fr: [
        'Choisir le type en haut : mot de passe, phrase secrète, code PIN, prononçable, nom d’utilisateur ou déterministe. Pour la plupart des comptes, « mot de passe » avec le réglage par défaut de 20 caractères est le bon choix ; pour apprendre par cœur, prenez la phrase secrète.',
        'Régler la longueur et les types de caractères — ou choisir un préréglage en haut quand le site impose des règles (« 16 caractères au maximum », « lettres et chiffres uniquement »). À chaque modification, un nouveau mot de passe apparaît aussitôt.',
        'Appuyer sur Copier et coller dans le gestionnaire de mots de passe. Le presse-papiers se vide de lui-même — au bout de 30 secondes par défaut, visible sous forme de compte à rebours.'
      ],
      it: [
        'In alto scegli il tipo: Password, Passphrase, PIN, Pronunciabile, Nome utente o Deterministico. Per la maggior parte degli account va bene «Password» con la preimpostazione di 20 caratteri; per impararla a memoria prendi la passphrase.',
        'Imposta la lunghezza e le categorie di caratteri, oppure scegli in alto un preset quando il sito impone regole («al massimo 16 caratteri», «solo lettere e cifre»). A ogni modifica nasce subito una password nuova.',
        'Tocca Copia e incolla nel gestore di password. Gli appunti si svuotano da soli: per impostazione predefinita dopo 30 secondi, con un conto alla rovescia visibile.'
      ],
      nl: [
        'Kies bovenaan de soort: wachtwoord, wachtwoordzin, pincode, uitspreekbaar, gebruikersnaam of deterministisch. Voor de meeste accounts is “wachtwoord” met de voorinstelling van 20 tekens juist; om uit je hoofd te leren neem je de wachtwoordzin.',
        'Stel lengte en tekensoorten in — of kies bovenaan een preset als de website regels voorschrijft (“hoogstens 16 tekens”, “alleen letters en cijfers”). Bij elke wijziging ontstaat meteen een nieuw wachtwoord.',
        'Tik op kopiëren en plak het in je wachtwoordkluis. Het klembord leegt zichzelf weer — standaard na 30 seconden, zichtbaar als aftelling.'
      ],
      pl: [
        'Na górze wybrać tryb: Hasło, Fraza hasłowa, PIN, Wymawialne, Nazwa użytkownika albo Deterministyczny. Do większości kont właściwe jest „Hasło” z domyślnymi 20 znakami; do nauczenia się na pamięć weź frazę hasłową.',
        'Ustawić długość i klasy znaków — albo wybrać na górze preset, gdy strona narzuca reguły („najwyżej 16 znaków”, „tylko litery i cyfry”). Przy każdej zmianie od razu powstaje nowe hasło.',
        'Stuknąć w „Kopiuj” i wkleić do menedżera haseł. Schowek czyści się potem sam — domyślnie po 30 sekundach, co widać jako odliczanie.'
      ],
      pt: [
        'Em cima, escolher o tipo: «Senha», «Frase secreta», «PIN», «Pronunciável», «Nome de usuário» ou «Determinístico». Para a maioria das contas, «Senha» com a predefinição de 20 caracteres é o que serve; para memorizar, use a «Frase secreta».',
        'Definir o comprimento e os tipos de caracteres — ou escolher em cima uma predefinição, quando o site impõe regras («no máximo 16 caracteres», «só letras e algarismos»). A cada alteração nasce logo uma palavra-passe nova.',
        'Tocar em Copiar e colar no gestor de palavras-passe. A área de transferência esvazia-se sozinha — por predefinição ao fim de 30 segundos, à vista como contagem decrescente.'
      ],
      tr: [
        'Yukarıdan türü seçin: Parola, Parola ifadesi, PIN, Telaffuz edilebilir, Kullanıcı adı veya Deterministik. Çoğu hesap için 20 karakterlik varsayılanıyla “Parola” doğru olanıdır; ezberlemeniz gereken bir şey içinse parola ifadesini alın.',
        'Uzunluğu ve karakter türlerini ayarlayın — ya da web sitesi kural dayatıyorsa yukarıdan bir hazır ayar seçin (“en fazla 16 karakter”, “yalnızca harf ve rakam”). Her değişiklikte hemen yeni bir parola oluşur.',
        'Kopyala düğmesine dokunun ve parola yöneticinize yapıştırın. Pano kendiliğinden yeniden boşalır — varsayılan olarak 30 saniye sonra, geri sayım hâlinde görünür.'
      ],
      ru: [
        'Наверху выберите режим: «Пароль», «Парольная фраза», «PIN-код», «Произносимый», «Имя пользователя» или «Детерминированный». Для большинства учётных записей подходит «Пароль» с предустановленными 20 символами; чтобы запомнить наизусть, берите парольную фразу.',
        'Настройте длину и наборы символов — или выберите наверху пресет, если сайт навязывает правила («не больше 16 символов», «только буквы и цифры»). При каждом изменении сразу создаётся новый пароль.',
        'Нажмите «Копировать» и вставьте пароль в менеджер паролей. Буфер обмена очищается сам — по умолчанию через 30 секунд, это видно по обратному отсчёту.'
      ],
      hi: [
        'ऊपर प्रकार चुनें: पासवर्ड, पासफ़्रेज़, PIN, बोलने योग्य, उपयोक्ता नाम या डिटर्मिनिस्टिक। ज़्यादातर खातों के लिए 20 वर्णों की पूर्व-निर्धारित सेटिंग वाला “पासवर्ड” सही है; याद रखने के लिए पासफ़्रेज़ लें।',
        'लंबाई और वर्णों के प्रकार तय करें — या ऊपर कोई प्रीसेट चुनें, अगर वेबसाइट नियम थोपती है (“ज़्यादा से ज़्यादा 16 वर्ण”, “केवल अक्षर और अंक”)। हर बदलाव पर तुरंत नया पासवर्ड बन जाता है।',
        'कॉपी पर टैप करें और अपने पासवर्ड मैनेजर में चिपका दें। क्लिपबोर्ड खुद ही फिर खाली हो जाता है — पूर्व-निर्धारित रूप से 30 सेकंड बाद, जो उलटी गिनती के रूप में दिखता है।'
      ],
      zh: [
        '在上方选择类型：密码、密码短语、PIN、可发音、用户名或确定性模式。对大多数账号来说，用默认 20 个字符的“密码”就对了；要背下来的话就选密码短语。',
        '设置长度和字符类型——或者当网站规定了规则时（“最多 16 个字符”“只能用字母和数字”），在上方选一个预设。每改动一次，都会立刻生成一个新密码。',
        '点一下复制，然后粘贴到你的密码管理器里。剪贴板会自己清空——默认是 30 秒之后，并以倒计时显示出来。'
      ],
      ja: [
        '上で種類を選びます: パスワード、パスフレーズ、PIN、発音しやすい、ユーザー名、決定論的。たいていのアカウントには、初期設定の20文字の「パスワード」が合っています。覚えて使いたいならパスフレーズにしてください。',
        '長さと文字種を設定します — あるいは、サイトが規則を課してくるとき（「16文字まで」「英数字のみ」）は上のプリセットを選びます。変更するたびにすぐ新しいパスワードができます。',
        'コピーを押して、パスワード管理ソフトに貼り付けます。クリップボードはひとりでに空になります — 初期設定では30秒後で、カウントダウンとして見えます。'
      ],
      ko: [
        '위에서 종류를 고릅니다: 비밀번호, 패스프레이즈, PIN, 발음 가능, 사용자 이름, 결정론적 생성. 대부분의 계정에는 기본값 20자의 “비밀번호”가 알맞습니다. 외워서 써야 한다면 패스프레이즈를 고릅니다.',
        '길이와 문자 종류를 설정합니다 — 아니면 웹사이트가 규칙을 강요할 때는 위에서 프리셋을 고릅니다(“최대 16자”, “글자와 숫자만”). 무언가를 바꿀 때마다 곧바로 새 비밀번호가 만들어집니다.',
        '복사를 누르고 비밀번호 관리자에 붙여 넣습니다. 클립보드는 저절로 다시 비워집니다 — 기본값은 30초이며, 카운트다운으로 보입니다.'
      ]
    },
    pitfalls: {
      de: [
        'Prismatical merkt sich nichts. Es ist ein Generator, kein Passwortspeicher — was du hier erzeugst, musst du selbst irgendwo sicher ablegen.',
        'Die automatisch geleerte Zwischenablage ist nur die halbe Miete: Windows merkt sich Kopiertes zusätzlich in seinem eigenen Verlauf (Win+V). Den kann eine Webseite nicht leeren.',
        'Der Verlauf ist ausgeschaltet und muss zweimal ausdrücklich eingeschaltet werden, bevor überhaupt etwas gespeichert wird. Der QR-Code ist ungeschützt: Wer ihn sieht, kennt das Passwort.',
        'Der deterministische Modus rechnet dasselbe Passwort immer wieder aus Merksatz, Domain und Login aus — dafür gibt es keine Wiederherstellung. Vergisst du den Merksatz, sind alle damit erzeugten Passwörter weg.',
        'Der Leak-Abgleich mit Have I Been Pwned ist der einzige Teil, der überhaupt ins Netz geht, und er ist ausgeschaltet. Schaltest du ihn ein, verlassen nur die ersten fünf Zeichen einer Prüfsumme das Gerät — nie das Passwort.'
      ],
      en: [
        'Prismatical remembers nothing. It is a generator, not a password manager — whatever you create here, you have to store somewhere safe yourself.',
        'The self-clearing clipboard is only half the job: Windows additionally keeps what you copied in its own history (Win+V). A website cannot clear that.',
        'The history is off and has to be switched on twice, explicitly, before anything is stored at all. The QR code is unprotected: whoever sees it knows the password.',
        'The deterministic mode recomputes the same password from a master phrase, domain and login — and there is no recovery for it. Forget the phrase and every password made with it is gone.',
        'The leak check against Have I Been Pwned is the only part that touches the internet at all, and it is switched off. If you turn it on, only the first five characters of a checksum leave the device — never the password.'
      ],
      es: [
        'Prismatical no recuerda nada. Es un generador, no un gestor de contraseñas: lo que crees aquí tienes que guardarlo tú mismo en algún sitio seguro.',
        'El portapapeles que se vacía solo es apenas la mitad del trabajo: Windows guarda además lo copiado en su propio historial (Win+V). Ese no lo puede vaciar una página web.',
        'El historial está desactivado y hay que activarlo dos veces de forma expresa antes de que se guarde nada. El código QR no está protegido: quien lo vea conocerá la contraseña.',
        'El modo determinista vuelve a calcular una y otra vez la misma contraseña a partir de una frase maestra, el dominio y el usuario, y para eso no hay ninguna recuperación. Si olvidas la frase maestra, todas las contraseñas creadas con ella se pierden.',
        'La comprobación de filtraciones con Have I Been Pwned es la única parte que sale a la red, y está desactivada. Si la activas, del dispositivo solo salen los cinco primeros caracteres de una suma de comprobación, nunca la contraseña.'
      ],
      fr: [
        'Prismatical ne retient rien. C’est un générateur, pas un gestionnaire de mots de passe — ce que vous produisez ici, vous devez le ranger vous-même quelque part en lieu sûr.',
        'Le presse-papiers vidé automatiquement ne règle que la moitié du problème : Windows garde en plus ce qui a été copié dans son propre historique (Win+V). Une page web ne peut pas le vider.',
        'L’historique est désactivé et doit être activé expressément deux fois avant que quoi que ce soit ne soit enregistré. Le code QR n’est pas protégé : quiconque le voit connaît le mot de passe.',
        'Le mode déterministe recalcule toujours le même mot de passe à partir d’une phrase maîtresse, d’un domaine et d’un identifiant — et il n’existe aucun moyen de le récupérer. Si vous oubliez la phrase maîtresse, tous les mots de passe créés avec elle sont perdus.',
        'La comparaison avec les fuites de Have I Been Pwned est la seule partie qui aille sur le réseau, et elle est désactivée. Si vous l’activez, seuls les cinq premiers caractères d’une somme de contrôle quittent l’appareil — jamais le mot de passe.'
      ],
      it: [
        'Prismatical non si ricorda niente. È un generatore, non un gestore di password: quello che crei qui devi salvarlo tu stesso da qualche parte al sicuro.',
        'Gli appunti svuotati in automatico sono solo metà dell’opera: Windows tiene quello che hai copiato anche nella propria cronologia (Win+V). Un sito web non può svuotarla.',
        'La cronologia è disattivata e va attivata due volte in modo esplicito, prima che venga salvato alcunché. Il codice QR non è protetto: chi lo vede conosce la password.',
        'La modalità deterministica ricalcola sempre la stessa password da frase chiave, dominio e login: per questo non esiste alcun ripristino. Se dimentichi la frase chiave, tutte le password create con essa sono perse.',
        'Il confronto con le fughe di dati di Have I Been Pwned è l’unica parte che vada davvero in rete, ed è spento. Se lo accendi, lasciano il dispositivo solo i primi cinque caratteri di una somma di controllo: mai la password.'
      ],
      nl: [
        'Prismatical onthoudt niets. Het is een generator, geen wachtwoordkluis — wat je hier maakt, moet je zelf ergens veilig opbergen.',
        'Het automatisch geleegde klembord is maar het halve werk: Windows onthoudt gekopieerde tekst daarnaast in zijn eigen geschiedenis (Win+V). Die kan een website niet legen.',
        'De geschiedenis staat uit en moet twee keer uitdrukkelijk worden aangezet voordat er überhaupt iets wordt bewaard. De QR-code is onbeschermd: wie hem ziet, kent het wachtwoord.',
        'De deterministische modus rekent hetzelfde wachtwoord steeds opnieuw uit geheugenzin, domein en login uit — daarvoor bestaat geen herstel. Vergeet je de geheugenzin, dan zijn alle daarmee gemaakte wachtwoorden weg.',
        'De lekcontrole bij Have I Been Pwned is het enige deel dat überhaupt het net op gaat, en het staat uit. Zet je het aan, dan verlaten alleen de eerste vijf tekens van een controlesom je apparaat — nooit het wachtwoord.'
      ],
      pl: [
        'Prismatical niczego nie zapamiętuje. To generator, nie menedżer haseł — to, co tu tworzysz, musisz sam gdzieś bezpiecznie zapisać.',
        'Automatyczne czyszczenie schowka to dopiero połowa sukcesu: Windows dodatkowo zapamiętuje skopiowane treści we własnej historii (Win+V). Strona internetowa nie może jej wyczyścić.',
        'Historia jest wyłączona i musi zostać dwukrotnie wyraźnie włączona, zanim cokolwiek w ogóle zostanie zapisane. Kod QR jest niezabezpieczony: kto go zobaczy, zna hasło.',
        'Tryb deterministyczny wylicza to samo hasło raz po raz z frazy nadrzędnej, domeny i loginu — nie ma na to odzyskiwania. Zapomnisz frazy i wszystkie utworzone nią hasła przepadają.',
        'Porównanie z wyciekami w Have I Been Pwned to jedyna część, która w ogóle wychodzi do sieci, i jest wyłączona. Jeśli ją włączysz, z urządzenia wychodzi tylko pięć pierwszych znaków sumy kontrolnej — nigdy hasło.'
      ],
      pt: [
        'O Prismatical não se lembra de nada. É um gerador, não um cofre de palavras-passe — o que aqui gerar, tem de ser você a guardá-lo em sítio seguro.',
        'A área de transferência esvaziada automaticamente é só meio caminho andado: o Windows guarda ainda o que foi copiado no seu próprio histórico (Win+V). Esse, uma página web não o pode esvaziar.',
        'O histórico está desligado e tem de ser ligado duas vezes, de forma expressa, antes de seja o que for ficar guardado. O código QR não está protegido: quem o vir, conhece a palavra-passe.',
        'O modo determinístico volta sempre a calcular a mesma palavra-passe a partir da senha mestra, do domínio e do login — e para isso não há recuperação nenhuma. Se esquecer a senha mestra, todas as palavras-passe geradas com ela desaparecem.',
        'A verificação de fugas com o Have I Been Pwned é a única parte que chega sequer a ir à rede, e está desligada. Se a ligar, só os primeiros cinco caracteres de uma soma de verificação saem do dispositivo — nunca a palavra-passe.'
      ],
      tr: [
        'Prismatical hiçbir şey hatırlamaz. O bir üreteçtir, parola yöneticisi değil — burada ürettiğinizi güvenli bir yere kendiniz koymanız gerekir.',
        'Kendiliğinden boşalan pano işin yalnızca yarısıdır: Windows, kopyaladığınızı ayrıca kendi geçmişinde tutar (Win+V). Bir web sitesi onu boşaltamaz.',
        'Geçmiş kapalıdır ve herhangi bir şey kaydedilmeden önce iki kez açıkça açılması gerekir. QR kodu korumasızdır: Onu gören parolayı bilir.',
        'Deterministik kip, aynı parolayı her seferinde akılda kalan cümleden, alan adından ve kullanıcı adından yeniden hesaplar — bunun bir kurtarma yolu yoktur. Cümleyi unutursanız onunla üretilmiş bütün parolalar gider.',
        'Have I Been Pwned üzerinden sızıntı karşılaştırması, ağa çıkan tek bölümdür ve kapalıdır. Açarsanız cihazdan yalnızca bir sağlama toplamının ilk beş karakteri çıkar — parola asla.'
      ],
      ru: [
        'Prismatical ничего не запоминает. Это генератор, а не хранилище паролей — то, что вы здесь создаёте, вам нужно самим где-то надёжно сохранить.',
        'Автоматически очищаемый буфер обмена — только половина дела: Windows дополнительно запоминает скопированное в собственном журнале (Win+V). Веб-страница очистить его не может.',
        'Журнал выключен, и его нужно дважды явно включить, прежде чем вообще что-то будет сохраняться. QR-код ничем не защищён: кто его видит, тот знает пароль.',
        'Детерминированный режим снова и снова вычисляет тот же пароль из мастер-фразы, домена и логина — восстановления для него нет. Забудете мастер-фразу — пропадут все созданные с ней пароли.',
        'Сверка с утечками через Have I Been Pwned — единственная часть, которая вообще выходит в сеть, и она выключена. Если вы её включите, устройство покинут только первые пять символов контрольной суммы — никогда сам пароль.'
      ],
      hi: [
        'Prismatical कुछ भी याद नहीं रखता। यह एक जनरेटर है, पासवर्ड मैनेजर नहीं — जो आप यहाँ बनाते हैं, उसे कहीं सुरक्षित रखना आपका अपना काम है।',
        'अपने-आप खाली होने वाला क्लिपबोर्ड आधा ही काम है: Windows कॉपी की गई चीज़ को अपने अलग इतिहास (Win+V) में भी रखता है। उसे कोई वेबसाइट खाली नहीं कर सकती।',
        'इतिहास बंद है और कुछ भी सहेजे जाने से पहले उसे दो बार साफ़ तौर पर चालू करना पड़ता है। QR कोड असुरक्षित है: जो उसे देख ले, वह पासवर्ड जान गया।',
        'डिटर्मिनिस्टिक मोड एक मूल वाक्य, डोमेन और लॉगिन से हर बार वही पासवर्ड दोबारा बना देता है — इसके लिए कोई रिकवरी नहीं है। मूल वाक्य भूले, तो उससे बने सारे पासवर्ड गए।',
        'Have I Been Pwned से लीक की जाँच ही अकेला हिस्सा है जो इंटरनेट तक जाता है, और वह बंद है। अगर आप उसे चालू करते हैं, तो डिवाइस से केवल एक चेकसम के पहले पाँच वर्ण बाहर जाते हैं — पासवर्ड कभी नहीं।'
      ],
      zh: [
        'Prismatical 什么都不记住。它是生成器，不是密码管理器——你在这里生成的东西，得自己找个安全的地方存起来。',
        '自动清空的剪贴板只完成了一半的活：Windows 还会把复制过的内容额外记在它自己的历史里（Win+V）。那个历史，网页是清不掉的。',
        '历史记录是关着的，必须明确地开启两次，才会真的开始保存任何东西。二维码是不设防的：谁看见它，谁就知道了密码。',
        '确定性模式每次都从记忆句、域名和登录名重新算出同一个密码——因此它没有任何找回手段。忘了记忆句，用它生成的所有密码就都没了。',
        '与 Have I Been Pwned 的泄露比对是唯一会联网的部分，而且它是关着的。如果你把它打开，离开设备的只有一段校验值的前五个字符——密码本身永远不会。'
      ],
      ja: [
        'Prismatical は何も覚えません。パスワード管理ソフトではなく生成ツールです — ここで作ったものは、自分でどこか安全なところに置く必要があります。',
        'クリップボードが自動で空になっても、それで安心とはいきません: Windows はコピーしたものを独自の履歴（Win+V）にも残します。ウェブページからそれを空にすることはできません。',
        '履歴の機能は切ってあり、何かが保存される前に2回はっきりと有効にする必要があります。QR コードは保護されていません: 見た人にはパスワードが分かります。',
        '決定論的モードは、合言葉・ドメイン・ログイン名から同じパスワードを何度でも計算し直します — その代わり復旧の手立てはありません。合言葉を忘れると、それで作ったパスワードはすべて失われます。',
        'Have I Been Pwned との漏えいチェックだけが、そもそもネットに出る唯一の部分で、これは切ってあります。有効にした場合でも、端末を出るのはチェックサムの最初の5文字だけです — パスワードそのものは決して出ません。'
      ],
      ko: [
        'Prismatical은 아무것도 기억하지 않습니다. 생성기이지 비밀번호 관리자가 아니므로, 여기서 만든 것은 직접 어딘가에 안전하게 보관해야 합니다.',
        '클립보드가 저절로 비워지는 것은 절반의 대책일 뿐입니다: Windows는 복사한 내용을 자기 기록(Win+V)에 따로 남깁니다. 그 기록은 웹사이트가 비울 수 없습니다.',
        '기록 기능은 꺼져 있으며, 무엇이든 저장되기 전에 두 번 분명하게 켜야 합니다. QR 코드는 보호되지 않습니다: 그것을 보는 사람은 비밀번호를 압니다.',
        '결정론적 방식은 암기 문구와 도메인과 로그인으로 같은 비밀번호를 몇 번이든 다시 계산해 냅니다 — 그 대신 복구 수단이 없습니다. 암기 문구를 잊으면 그것으로 만든 비밀번호가 모두 사라집니다.',
        'Have I Been Pwned 유출 대조는 인터넷으로 나가는 유일한 부분이며, 꺼져 있습니다. 켜더라도 기기를 떠나는 것은 체크섬의 앞 다섯 글자뿐이고, 비밀번호는 결코 나가지 않습니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      en: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/prismatical/blob/main/README.md'
    }
  },

  spectroton: {
    purpose: {
      de: 'Für eine Website oder App brauchst du selten nur eine Farbe, sondern eine ganze Treppe davon: hell für Flächen, mittig für Knöpfe, dunkel für Schrift. Spectroton rechnet diese elf Stufen aus einer einzigen Basisfarbe — gleichmäßig fürs Auge, nicht nur in den Zahlen — und schreibt zu jeder Stufe dazu, ob Text darauf noch lesbar ist.',
      en: 'For a website or an app you rarely need one colour, you need a whole staircase of it: light for surfaces, mid for buttons, dark for type. Spectroton computes those eleven shades from a single base colour — evenly spaced for the eye, not just in the numbers — and notes for every shade whether text on it is still readable.',
      es: 'Para una web o una aplicación rara vez necesitas un solo color: lo que hace falta es toda una escalera de él, con tonos claros para las superficies, medios para los botones y oscuros para el texto. Spectroton calcula esos once tonos a partir de un único color base —uniformes para el ojo, no solo en los números— y anota en cada tono si el texto encima sigue siendo legible.',
      fr: 'Pour un site web ou une application, vous avez rarement besoin d’une seule couleur, mais de toute une gamme de nuances de cette couleur : clair pour les surfaces, moyen pour les boutons, sombre pour le texte. Spectroton calcule ces onze nuances à partir d’une unique couleur de base — régulières pour l’œil, pas seulement dans les chiffres — et indique pour chaque nuance si un texte y reste lisible.',
      it: 'Per un sito web o un’app raramente ti serve un colore solo: te ne serve un’intera scala, chiara per le superfici, media per i pulsanti, scura per il testo. Spectroton calcola queste undici tonalità da un unico colore di base — uniformi per l’occhio, non solo nei numeri — e accanto a ogni tonalità annota se il testo sopra è ancora leggibile.',
      nl: 'Voor een website of app heb je zelden maar één kleur nodig, maar een hele trap ervan: licht voor vlakken, middentinten voor knoppen, donker voor tekst. Spectroton berekent die elf tinten uit één enkele basiskleur — gelijkmatig voor het oog, niet alleen in de getallen — en schrijft bij elke tint of tekst erop nog leesbaar is.',
      pl: 'Do strony internetowej albo aplikacji rzadko potrzebujesz tylko jednego koloru, raczej całych schodów z niego: jasny na powierzchnie, środkowy na przyciski, ciemny na tekst. Spectroton wylicza te jedenaście stopni z jednego jedynego koloru bazowego — równomiernie dla oka, nie tylko w liczbach — i przy każdym stopniu dopisuje, czy tekst na nim jest jeszcze czytelny.',
      pt: 'Para um site ou uma aplicação raramente chega uma cor; é precisa toda uma escala dela: clara para superfícies, média para botões, escura para o texto. O Spectroton calcula esses onze tons a partir de uma única cor base — regulares para o olho, não apenas nos números — e escreve junto de cada tom se o texto em cima dele ainda se consegue ler.',
      tr: 'Bir web sitesi ya da uygulama için nadiren tek bir renk gerekir; asıl gereken onun bütün bir merdivenidir: yüzeyler için açık, düğmeler için orta, yazı için koyu. Spectroton bu on bir tonu tek bir temel renkten hesaplar — yalnızca sayıca değil, göz için de eşit aralıklarla — ve her tonun yanına, üzerindeki metnin hâlâ okunabilir olup olmadığını yazar.',
      ru: 'Для сайта или приложения редко нужен один цвет — нужна целая лестница оттенков: светлые для фонов, средние для кнопок, тёмные для текста. Spectroton рассчитывает эти одиннадцать ступеней из одного-единственного базового цвета — равномерно для глаза, а не только в числах — и для каждой ступени указывает, читается ли ещё текст на ней.',
      hi: 'किसी वेबसाइट या ऐप के लिए आपको शायद ही कभी सिर्फ़ एक रंग चाहिए होता है, बल्कि उसकी पूरी सीढ़ी: सतहों के लिए हल्का, बटनों के लिए बीच का, लिखाई के लिए गहरा। Spectroton इन ग्यारह सीढ़ियों को एक ही आधार रंग से निकालता है — आँख के लिए बराबर दूरी पर, न कि केवल आँकड़ों में — और हर सीढ़ी के साथ यह भी लिख देता है कि उस पर रखा पाठ अब भी पढ़ा जा सकता है या नहीं।',
      zh: '做一个网站或应用时，你很少只需要一种颜色，而是需要一整道阶梯：浅色用于大面积、中间色用于按钮、深色用于文字。Spectroton 从单独一个基准色算出这十一级——对眼睛来说是均匀的，而不只是数字上均匀——并在每一级旁注明，放在上面的文字是不是还读得清。',
      ja: 'ウェブサイトやアプリに必要なのは、たいてい色ひとつではなく、その階段まるごとです: 面には明るい色、ボタンには中間、文字には暗い色。Spectroton はこの11段階をひとつの基本色から計算します — 数字の上だけでなく、見た目にも均等になるように — そして各段階について、その上の文字がまだ読めるかどうかを書き添えます。',
      ko: '웹사이트나 앱에는 색 하나가 아니라 색의 계단 전체가 필요할 때가 많습니다: 면에는 밝은 색, 버튼에는 중간 색, 글자에는 어두운 색. Spectroton은 그 열한 단계를 기준 색 하나에서 계산합니다 — 숫자상으로만이 아니라 눈으로 보기에 고르게 — 그리고 각 단계마다 그 위의 글자가 아직 읽을 만한지 함께 적어 줍니다.'
    },
    shots: [
      {
        file: 'spectroton-uebersicht-en.webp', w: 1600, h: 1092,
        alt: {
          de: 'Spectroton: die Basisfarbe als Farbfeld und HEX-Wert mit ihrer OKLCH-Angabe, darunter sieben Akzentfarben mit den vier Harmonie-Knöpfen und die Suche nach Farbnamen.',
          en: 'Spectroton: the base colour as a swatch and hex value with its OKLCH reading, below it seven accent colours with the four harmony buttons, and the search for colour names.',
          es: 'Spectroton: el color base como muestra y como valor HEX, con su equivalente en OKLCH; debajo, siete colores de acento con los cuatro botones de armonía y la búsqueda por nombre de color.',
          fr: 'Spectroton : la couleur de base en échantillon et en valeur HEX, avec son équivalent OKLCH ; en dessous, sept couleurs d’accent avec les quatre boutons d’harmonie, et la recherche par nom de couleur.',
          it: 'Spectroton: il colore base come campione e come valore HEX, con il suo equivalente OKLCH; sotto, sette colori d’accento con i quattro pulsanti di armonia e la ricerca per nome del colore.',
          nl: 'Spectroton: de basiskleur als kleurvlak en HEX-waarde met de bijbehorende OKLCH-waarden, daaronder zeven accentkleuren met de vier harmonieknoppen en het zoeken op kleurnaam.',
          pl: 'Spectroton: kolor bazowy jako próbka i wartość HEX wraz z zapisem OKLCH, pod nim siedem kolorów akcentowych z czterema przyciskami harmonii oraz wyszukiwanie nazw kolorów.',
          pt: 'Spectroton: a cor base como amostra e valor HEX, com a respetiva notação OKLCH; por baixo, sete cores de destaque com os quatro botões de harmonia e a procura de nomes de cores.',
          tr: 'Spectroton: renk örneği, HEX değeri ve OKLCH değeriyle ana renk; altında dört harmoni düğmesiyle yedi vurgu rengi ve renk adına göre arama.',
          ru: 'Spectroton: базовый цвет в виде образца и значения HEX вместе с записью в OKLCH, ниже семь акцентных цветов с четырьмя кнопками гармонии и поиск по названиям цветов.',
          hi: 'Spectroton: आधार रंग एक रंग-नमूने और HEX मान के रूप में, साथ में उसका OKLCH मान; उसके नीचे चार सामंजस्य बटनों के साथ सात एक्सेंट रंग और रंगों के नाम की खोज।',
          zh: 'Spectroton：基色显示为色块和 HEX 值，并附有它的 OKLCH 数值；下面是七个强调色和四个色彩和谐按钮，再往下是按颜色名称搜索。',
          ja: 'Spectroton: 色見本と HEX 値で示したベースカラーとその OKLCH 値、その下に7つのアクセントカラーと配色の調和を選ぶ4つのボタン、そして色の名前での検索。',
          ko: 'Spectroton: 색 견본과 HEX 값으로 나타낸 기본 색과 그 OKLCH 값, 그 아래에 강조 색 일곱 개와 배색 조화 버튼 네 개, 그리고 색 이름 검색.'
        }
      },
      {
        file: 'spectroton-rampe-en.webp', w: 1588, h: 1439,
        alt: {
          de: 'Die elf Stufen einer gelben Akzentfarbe von 50 bis 950, jede mit HEX-Wert, Kontrast gegen Weiß und gegen Schwarz und einem Schloss zum Sperren; an den meisten Stufen zeigt ein kleines Schild, dass die Buntheit für den Farbraum zurückgenommen wurde.',
          en: 'The eleven steps of a yellow accent colour from 50 to 950, each with its hex value, contrast against white and against black, and a lock; on most steps a small tag shows that the chroma had to be reduced to fit the gamut.',
          es: 'Los once pasos de un color de acento amarillo, de 50 a 950, cada uno con su valor HEX, el contraste con el blanco y con el negro y un candado; en la mayoría de los pasos, una pequeña etiqueta indica que hubo que reducir la saturación para que cupiera en el espacio de color.',
          fr: 'Les onze paliers d’une couleur d’accent jaune, de 50 à 950, chacun avec sa valeur HEX, le contraste avec le blanc et avec le noir, et un cadenas ; sur la plupart des paliers, une petite étiquette signale que la saturation a dû être réduite pour tenir dans l’espace colorimétrique.',
          it: 'Gli undici gradini di un colore d’accento giallo, da 50 a 950, ciascuno con il valore HEX, il contrasto con il bianco e con il nero e un lucchetto; sulla maggior parte dei gradini una piccola etichetta indica che la saturazione è stata ridotta per rientrare nello spazio colore.',
          nl: 'De elf stappen van een gele accentkleur van 50 tot 950, elk met HEX-waarde, contrast met wit en met zwart en een slotje; bij de meeste stappen geeft een klein label aan dat de verzadiging moest worden verlaagd om binnen de kleurruimte te passen.',
          pl: 'Jedenaście stopni żółtego koloru akcentowego od 50 do 950, każdy z wartością HEX, kontrastem względem bieli i czerni oraz kłódką; przy większości stopni mała etykieta pokazuje, że nasycenie trzeba było zmniejszyć, aby kolor zmieścił się w przestrzeni barw.',
          pt: 'Os onze níveis de uma cor de destaque amarela, de 50 a 950, cada um com o valor HEX, o contraste com o branco e com o preto e um cadeado; na maioria dos níveis, uma pequena etiqueta indica que a intensidade da cor teve de ser reduzida para caber no espaço de cor.',
          tr: 'Sarı bir vurgu renginin 50’den 950’ye on bir adımı; her birinde HEX değeri, beyaza ve siyaha karşı kontrast ve bir kilit; adımların çoğunda küçük bir etiket, renk yoğunluğunun renk gamına sığması için azaltıldığını gösterir.',
          ru: 'Одиннадцать ступеней жёлтого акцентного цвета от 50 до 950, у каждой значение HEX, контраст с белым и с чёрным и замок; на большинстве ступеней маленькая метка показывает, что насыщенность пришлось снизить, чтобы цвет уместился в цветовой охват.',
          hi: 'एक पीले एक्सेंट रंग की 50 से 950 तक ग्यारह सीढ़ियाँ, हर एक पर HEX मान, सफ़ेद और काले के मुक़ाबले कंट्रास्ट और एक ताला; ज़्यादातर सीढ़ियों पर एक छोटा लेबल बताता है कि गैमट में समाने के लिए संतृप्ति घटानी पड़ी।',
          zh: '一个黄色强调色从 50 到 950 的十一级，每一级都有 HEX 值、对白色和对黑色的对比度，以及一把锁；大多数级别上有个小标签，表示彩度为了落进色域而被调低了。',
          ja: '黄色のアクセントカラーの 50 から 950 までの11段階で、各段に HEX 値、白と黒それぞれに対するコントラスト、鍵が付いています。ほとんどの段には、色域に収めるために鮮やかさを抑えたことを示す小さなラベルがあります。',
          ko: '노란 강조 색의 50부터 950까지 열한 단계로, 단계마다 HEX 값, 흰색과 검정 각각에 대한 대비, 자물쇠가 있습니다. 대부분의 단계에는 색역에 맞추느라 채도를 낮췄음을 알리는 작은 표시가 붙어 있습니다.'
        }
      },
      {
        file: 'spectroton-feinjustage-en.webp', w: 1600, h: 1264,
        alt: {
          de: 'Die Feinjustage mit vier Reglern: hellste Stufe, dunkelste Stufe, Buntheit und Farbdrift über die Rampe.',
          en: 'Fine-tuning with four sliders: lightest step, darkest step, chroma and hue drift across the ramp.',
          es: 'El ajuste fino con cuatro deslizadores: paso más claro, paso más oscuro, saturación y deriva del tono a lo largo de la rampa.',
          fr: 'Le réglage fin avec quatre curseurs : palier le plus clair, palier le plus sombre, saturation et dérive de teinte sur la rampe.',
          it: 'La regolazione fine con quattro cursori: gradino più chiaro, gradino più scuro, saturazione e deriva di tonalità lungo la scala.',
          nl: 'De fijnafstelling met vier schuifregelaars: lichtste stap, donkerste stap, verzadiging en kleurdrift over de schaal.',
          pl: 'Dostrajanie z czterema suwakami: najjaśniejszy stopień, najciemniejszy stopień, nasycenie i dryf barwy w skali.',
          pt: 'O ajuste fino com quatro cursores: nível mais claro, nível mais escuro, intensidade da cor e deriva da cor ao longo da rampa.',
          tr: 'Dört kaydırıcılı ince ayar: en açık adım, en koyu adım, renk yoğunluğu ve rampa boyunca renk kayması.',
          ru: 'Тонкая настройка с четырьмя ползунками: самая светлая ступень, самая тёмная ступень, насыщенность и сдвиг оттенка по шкале.',
          hi: 'चार स्लाइडरों वाला बारीक समायोजन: सबसे उजली सीढ़ी, सबसे गहरी सीढ़ी, संतृप्ति और पूरी शृंखला में रंगत का बदलाव।',
          zh: '微调，共四个滑块：最亮的一级、最暗的一级、彩度，以及色相沿色阶的漂移。',
          ja: '4つのスライダーによる微調整: いちばん明るい段、いちばん暗い段、鮮やかさ、ランプ全体の色相のずれ。',
          ko: '슬라이더 네 개로 하는 미세 조정: 가장 밝은 단계, 가장 어두운 단계, 채도, 단계에 따른 색상 이동.'
        }
      },
      {
        file: 'spectroton-export-en.webp', w: 1600, h: 1231,
        alt: {
          de: 'Der Export: Name und Dateiname, die vier Formate CSS, Tailwind, Tokens und HEX, eine Vorschau der fertigen Liste und darunter Speichern, Kopieren, Teilen und Link kopieren.',
          en: 'Export: name and file name, the four formats CSS, Tailwind, Tokens and HEX, a preview of the finished list, and below it save, copy, share and copy link.',
          es: 'La exportación: nombre y archivo, los cuatro formatos CSS, Tailwind, Tokens y HEX, una vista previa de la lista final y, debajo, guardar el archivo, copiar, compartir y copiar el enlace.',
          fr: 'L’export : nom et nom de fichier, les quatre formats CSS, Tailwind, Tokens et HEX, un aperçu de la liste finale et, en dessous, enregistrer le fichier, copier, partager et copier le lien.',
          it: 'L’esportazione: nome e nome del file, i quattro formati CSS, Tailwind, Tokens e HEX, un’anteprima dell’elenco finale e, sotto, i pulsanti per salvare il file, copiare, condividere e copiare il link.',
          nl: 'De export: naam en bestandsnaam, de vier formaten CSS, Tailwind, Tokens en HEX, een voorvertoning van de kant-en-klare lijst en daaronder opslaan, kopiëren, delen en link kopiëren.',
          pl: 'Eksport: nazwa i nazwa pliku, cztery formaty CSS, Tailwind, Tokens i HEX, podgląd gotowej listy, a pod nim zapisywanie, kopiowanie, udostępnianie i kopiowanie linku.',
          pt: 'A exportação: nome e nome do ficheiro, os quatro formatos CSS, Tailwind, Tokens e HEX, uma pré-visualização da lista pronta e, por baixo, guardar, copiar, partilhar e copiar a ligação.',
          tr: 'Dışa aktarma: ad ve dosya adı, CSS, Tailwind, Tokens ve HEX olmak üzere dört biçim, hazır listenin önizlemesi, altında da kaydetme, kopyalama, paylaşma ve bağlantı kopyalama düğmeleri.',
          ru: 'Экспорт: имя и имя файла, четыре формата CSS, Tailwind, Tokens и HEX, предпросмотр готового списка, а под ним кнопки: сохранить файл, копировать, поделиться и копировать ссылку.',
          hi: 'निर्यात: नाम और फ़ाइल का नाम, चार फ़ॉर्मैट CSS, Tailwind, Tokens और HEX, तैयार सूची का पूर्वावलोकन, और उसके नीचे फ़ाइल सहेजने, कॉपी करने, साझा करने और लिंक कॉपी करने के बटन।',
          zh: '导出：名称和文件名，CSS、Tailwind、Tokens 和 HEX 四种格式，最终列表的预览，下面是保存文件、复制、分享和复制链接。',
          ja: '書き出し: 名前とファイル名、CSS・Tailwind・Tokens・HEX の4つの形式、できあがった一覧のプレビュー、その下にファイルの保存、コピー、共有、リンクのコピー。',
          ko: '내보내기: 이름과 파일 이름, CSS, Tailwind, Tokens, HEX 네 가지 형식, 완성된 목록 미리 보기, 그 아래에 파일 저장, 복사, 공유, 링크 복사.'
        }
      }
    ],
    steps: {
      de: [
        'Bei „Basisfarbe“ eine Farbe setzen: HEX-Wert eintippen, den Farbwähler benutzen oder unter „Farbname“ nach einem Namen suchen und aus den Treffern wählen. Die elf Stufen erscheinen sofort.',
        'Unter „Feinjustage“ nachschärfen und bei Bedarf „Akzentfarben“ dazunehmen — die schlägt Spectroton nach Harmonie-Regeln vor und gibt jeder eine eigene Rampe. Über das Schloss an einer Stufe frierst du deren Wert ein, sodass er Reglern und einem Wechsel der Basisfarbe standhält.',
        'Unter „Export“ das Format wählen — CSS, Tailwind, Tokens oder HEX — und kopieren oder als Datei speichern. Wer die Palette behalten will, legt sie unter „Bibliothek“ benannt ab; wer sie weitergeben will, kopiert bei „Teilen“ den Link, der die ganze Palette in sich trägt.'
      ],
      en: [
        'Set a colour under “Base color”: type a HEX value, use the colour picker, or search for a name under “Color name” and pick from the hits. The eleven shades appear at once.',
        'Refine under “Fine-tuning” and add “Accent colors” if you want — Spectroton suggests them by harmony rules and gives each its own ramp. The padlock on a shade freezes its value, so it survives the sliders and a change of base colour.',
        'Pick a format under “Export” — CSS, Tailwind, Tokens or HEX — then copy it or save it as a file. To keep a palette, store it by name under “Library”; to pass it on, copy the link under “Share”, which carries the whole palette inside it.'
      ],
      es: [
        'En «Color base» fija un color: escribe un valor HEX, usa el selector de color o busca un nombre en «Nombre del color» y elige entre los resultados. Los once tonos aparecen enseguida.',
        'Afina en «Ajuste fino» y, si hace falta, añade «Colores de acento»: Spectroton los propone según reglas de armonía y le da a cada uno su propia rampa. Con el candado de un tono congelas su valor, de modo que aguanta los controles y también un cambio del color base.',
        'En «Exportar» elige el formato —CSS, Tailwind, Tokens o HEX— y cópialo o guárdalo como archivo. Quien quiera conservar la paleta la guarda con nombre en «Biblioteca»; quien quiera pasarla, copia en «Compartir» el enlace que lleva dentro la paleta entera.'
      ],
      fr: [
        'Sous « Couleur de base », poser une couleur : taper une valeur HEX, utiliser le sélecteur de couleur, ou chercher un nom sous « Nom de couleur » et choisir parmi les résultats. Les onze nuances apparaissent aussitôt.',
        'Affiner sous « Réglage fin » et ajouter au besoin des « Couleurs d’accent » — Spectroton les propose selon des règles d’harmonie et donne à chacune sa propre gamme. Le cadenas sur une nuance en fige la valeur, de sorte qu’elle résiste aux curseurs et à un changement de couleur de base.',
        'Sous « Export », choisir le format — CSS, Tailwind, Tokens ou HEX — puis copier ou enregistrer comme fichier. Pour garder la palette, la ranger sous un nom dans « Bibliothèque » ; pour la transmettre, copier sous « Partager » le lien qui porte en lui la palette entière.'
      ],
      it: [
        'Sotto «Colore base» imposta un colore: digita un valore HEX, usa il selettore di colore oppure cerca un nome sotto «Nome del colore» e scegli fra i risultati. Le undici tonalità compaiono subito.',
        'Sotto «Regolazione fine» affina e, se serve, aggiungi i «Colori d’accento»: Spectroton li propone secondo regole di armonia e dà a ciascuno una rampa propria. Con il lucchetto su una tonalità ne congeli il valore, così resiste ai cursori e a un cambio del colore di base.',
        'Sotto «Esportazione» scegli il formato — CSS, Tailwind, Tokens o HEX — e copialo o salvalo come file. Chi vuole tenere la palette la salva con un nome sotto «Libreria»; chi vuole passarla ad altri copia il link sotto «Condividi», che porta dentro di sé l’intera palette.'
      ],
      nl: [
        'Zet bij “Basiskleur” een kleur: typ een HEX-waarde in, gebruik de kleurkiezer of zoek onder “Kleurnaam” naar een naam en kies uit de treffers. De elf tinten verschijnen meteen.',
        'Schaaf onder “Fijnafstelling” bij en neem zo nodig “Accentkleuren” erbij — die stelt Spectroton volgens harmonieregels voor en geeft elke accentkleur een eigen reeks. Met het slotje bij een tint bevries je de waarde ervan, zodat die bestand is tegen de schuifregelaars en tegen een wisseling van de basiskleur.',
        'Kies onder “Export” het formaat — CSS, Tailwind, Tokens of HEX — en kopieer het of sla het als bestand op. Wie het palet wil bewaren, legt het met een naam weg onder “Bibliotheek”; wie het wil doorgeven, kopieert bij “Delen” de link, die het hele palet in zich draagt.'
      ],
      pl: [
        'Przy „Kolor bazowy” ustawić kolor: wpisać wartość HEX, użyć próbnika kolorów albo poszukać nazwy pod „Nazwa koloru” i wybrać z trafień. Jedenaście stopni pojawia się natychmiast.',
        'Pod „Dostrajanie” doszlifować i w razie potrzeby dobrać „Kolory akcentowe” — te Spectroton proponuje według reguł harmonii i daje każdemu własną rampę. Kłódką przy stopniu zamrażasz jego wartość, tak że nie zmieniają jej ani suwaki, ani zmiana koloru bazowego.',
        'Pod „Eksport” wybrać format — CSS, Tailwind, Tokens albo HEX — i skopiować albo zapisać jako plik. Kto chce zachować paletę, zapisuje ją pod nazwą w „Biblioteka”; kto chce ją przekazać dalej, kopiuje przy „Udostępnij” link, który niesie w sobie całą paletę.'
      ],
      pt: [
        'Em «Cor base», definir uma cor: escrever um valor HEX, usar o seletor de cores ou procurar um nome em «Nome da cor» e escolher entre os resultados. Os onze tons aparecem de imediato.',
        'Afinar em «Ajuste fino» e, se for preciso, acrescentar «Cores de destaque» — o Spectroton propõe-nas por regras de harmonia e dá a cada uma a sua própria rampa. Com o cadeado de um tom congela o valor dele, de maneira que resiste aos cursores e a uma troca da cor base.',
        'Em «Exportar», escolher o formato — CSS, Tailwind, Tokens ou HEX — e copiar ou guardar como ficheiro. Quem quiser ficar com a paleta, guarda-a com um nome em «Biblioteca»; quem a quiser passar a outros, copia em «Partilhar» o link, que leva a paleta inteira dentro de si.'
      ],
      tr: [
        '“Ana renk” altında bir renk belirleyin: HEX değerini yazın, renk seçiciyi kullanın ya da “Renk adı” altında bir ad arayıp sonuçlardan seçin. On bir ton hemen belirir.',
        '“İnce ayar” altında keskinleştirin ve isterseniz “Vurgu renkleri” ekleyin — bunları Spectroton harmoni kurallarına göre önerir ve her birine kendi rampasını verir. Bir tonun yanındaki kilitle o tonun değerini dondurursunuz; böylece sürgülere ve temel rengin değişmesine dayanır.',
        '“Dışa aktarma” altında biçimi seçin — CSS, Tailwind, Tokens veya HEX — sonra kopyalayın ya da dosya olarak kaydedin. Paleti saklamak isteyen onu “Kitaplık” altında adlandırarak koyar; devretmek isteyen “Paylaş” altında, paletin tamamını içinde taşıyan bağlantıyı kopyalar.'
      ],
      ru: [
        'В поле «Базовый цвет» задайте цвет: впишите значение HEX, воспользуйтесь палитрой или поищите название в разделе «Название цвета» и выберите из найденных вариантов. Одиннадцать ступеней появляются сразу.',
        'В разделе «Тонкая настройка» подправьте результат и при необходимости добавьте «Акцентные цвета» — их Spectroton предлагает по правилам гармонии и каждому даёт собственную шкалу оттенков. Замком у ступени вы замораживаете её значение, так что оно не меняется ни от ползунков, ни при смене базового цвета.',
        'В разделе «Экспорт» выберите формат — CSS, Tailwind, Tokens или HEX — и скопируйте его или сохраните в файл. Кто хочет оставить палитру себе, сохраняет её под именем в разделе «Библиотека»; кто хочет её передать, копирует в разделе «Поделиться» ссылку, которая несёт в себе всю палитру.'
      ],
      hi: [
        '“आधार रंग” के पास एक रंग तय करें: HEX मान टाइप करें, रंग चुनने वाला औज़ार इस्तेमाल करें, या “रंग का नाम” के नीचे कोई नाम खोजें और नतीजों में से चुनें। ग्यारह सीढ़ियाँ तुरंत दिख जाती हैं।',
        '“बारीक समायोजन” के नीचे और पैना करें और ज़रूरत हो तो “एक्सेंट रंग” जोड़ लें — इन्हें Spectroton सामंजस्य नियमों के अनुसार सुझाता है और हर एक को उसकी अपनी रैंप देता है। किसी सीढ़ी पर लगे ताले से आप उसका मान जमा देते हैं, ताकि वह स्लाइडरों और आधार रंग बदलने, दोनों के आगे टिका रहे।',
        '“निर्यात” के नीचे फ़ॉर्मैट चुनें — CSS, Tailwind, टोकन या HEX — और उसे कॉपी करें या फ़ाइल के रूप में सहेजें। जो पैलेट रखना चाहे, वह उसे “संग्रह” के नीचे नाम देकर रख देता है; जो उसे आगे देना चाहे, वह “साझा करें” के पास वह लिंक कॉपी करता है जो पूरी पैलेट अपने भीतर लिए रहता है।'
      ],
      zh: [
        '在“基色”处设定一个颜色：输入 HEX 值、使用取色器，或者在“颜色名称”下搜一个名字并从结果里挑一个。十一级色阶会立刻出现。',
        '在“微调”下再修一修，需要的话加上“强调色”——它们由 Spectroton 按和谐规则给出建议，并且每一个都有自己的色阶。通过某一级上的锁把它的数值冻住，这样它就扛得住滑块和基准色的更换。',
        '在“导出”下选择格式——CSS、Tailwind、Tokens 或 HEX——然后复制，或者保存为文件。想留着这套调色板，就在“库”下命名存起来；想传给别人，就在“分享”处复制那条链接，整套调色板都装在它里面。'
      ],
      ja: [
        '「ベースカラー」で色を決めます: HEX 値を打ち込むか、カラーピッカーを使うか、「色の名前」で名前を検索して候補から選びます。11段階はすぐに現れます。',
        '「微調整」で詰め、必要なら「アクセントカラー」を加えます — これは Spectroton が調和の規則にしたがって提案し、それぞれに専用のランプを与えます。段階に付いた錠前でその値を凍らせると、スライダーを動かしても基本色を変えても保たれます。',
        '「書き出し」で形式を選び — CSS、Tailwind、Tokens、HEX — コピーするか、ファイルとして保存します。パレットを取っておきたいなら「ライブラリ」に名前を付けて置きます。人に渡したいなら「共有」でリンクをコピーします。そのリンクがパレットまるごとを抱えています。'
      ],
      ko: [
        '“기본 색”에서 색을 정합니다: HEX 값을 입력하거나, 색 선택기를 쓰거나, “색 이름”에서 이름으로 검색해 결과 중에서 고릅니다. 열한 단계가 곧바로 나타납니다.',
        '“미세 조정”에서 다듬고, 필요하면 “강조 색”을 더합니다 — Spectroton이 조화 규칙에 따라 제안하고 각각에 고유한 램프를 줍니다. 어떤 단계의 자물쇠를 누르면 그 값이 고정되어, 슬라이더를 움직이거나 기준 색을 바꿔도 그대로 버팁니다.',
        '“내보내기”에서 형식을 고르고 — CSS, Tailwind, Tokens, HEX — 복사하거나 파일로 저장합니다. 팔레트를 간직하려면 “보관함”에 이름을 붙여 넣어 두고, 남에게 건네려면 “공유”에서 팔레트 전체를 담고 있는 링크를 복사합니다.'
      ]
    },
    pitfalls: {
      de: [
        'Die Oberfläche spricht dieselben vierzehn Sprachen wie die übrigen Web-Werkzeuge — teils maschinell übersetzt, Korrekturen willkommen.',
        'Die Farbnamen kommen von api.color.pizza, einem fremden Dienst. Schon beim Öffnen fragt Spectroton dort nach dem Namen der aktuellen Farbe — dabei geht dieser Farbwert an den Dienst. Ohne Netz bleibt nur dieses eine Feld leer; alles andere rechnet weiter auf deinem Gerät.',
        'Nach dem ersten Besuch läuft Spectroton auch ohne Internet — die Farbnamen-Suche ausgenommen.',
        'Nicht jede Farbe lässt sich auf jedem Bildschirm zeigen. Statt hart abzuschneiden, weicht Spectroton auf den nächstmöglichen Ton aus und weist darauf hin, wenn eine Stufe Display-P3 braucht und auf einem sRGB-Schirm anders ankommt.',
        'Der Kontrastwert ist eine Rechnung, kein Freibrief: WCAG 2.2 und APCA bewerten dieselbe Paarung unterschiedlich, besonders bei hellem Text auf dunklem Grund. Wo es darauf ankommt, beide Maße ansehen und am Ende am echten Bildschirm prüfen.'
      ],
      en: [
        'The interface speaks the same fourteen languages as the other web tools — some of it machine-translated, corrections welcome.',
        'The colour names come from api.color.pizza, someone else’s service. Spectroton asks it for the name of the current colour as soon as the page opens — that colour value goes to the service. Without a connection only this one field stays empty; everything else keeps computing on your device.',
        'After the first visit Spectroton also runs without an internet connection — except for the colour-name search.',
        'Not every colour can be shown on every screen. Instead of clipping hard, Spectroton falls back to the nearest possible tone and points out when a shade needs Display-P3 and will land differently on an sRGB screen.',
        'A contrast value is a calculation, not a permit: WCAG 2.2 and APCA judge the same pairing differently, especially for light text on a dark ground. Where it matters, look at both measures and check on a real screen in the end.'
      ],
      es: [
        'La interfaz habla las mismas catorce lenguas que las demás herramientas web, en parte traducidas automáticamente; las correcciones son bienvenidas.',
        'Los nombres de color vienen de api.color.pizza, un servicio ajeno. Nada más abrir la página, Spectroton le pregunta el nombre del color actual, y con ello ese valor de color llega al servicio. Sin red solo se queda vacío ese único campo; todo lo demás sigue calculándose en tu dispositivo.',
        'Después de la primera visita, Spectroton funciona también sin internet, salvo la búsqueda de nombres de color.',
        'No todos los colores se pueden mostrar en todas las pantallas. En lugar de recortar bruscamente, Spectroton recurre al tono más cercano posible y avisa cuando un tono necesita Display-P3 y se ve distinto en una pantalla sRGB.',
        'El valor de contraste es un cálculo, no un salvoconducto: WCAG 2.2 y APCA juzgan la misma combinación de forma distinta, sobre todo con texto claro sobre fondo oscuro. Donde importe, mira las dos medidas y comprueba al final en una pantalla de verdad.'
      ],
      fr: [
        'L’interface parle les mêmes quatorze langues que les autres outils web — en partie traduites par machine ; les corrections sont les bienvenues.',
        'Les noms de couleurs viennent d’api.color.pizza, un service tiers. Dès l’ouverture, Spectroton lui demande le nom de la couleur actuelle — ce faisant, cette valeur de couleur est transmise au service. Sans réseau, seul ce champ-là reste vide ; tout le reste continue de se calculer sur votre appareil.',
        'Après la première visite, Spectroton fonctionne aussi sans Internet — la recherche de noms de couleurs exceptée.',
        'Toutes les couleurs ne peuvent pas être montrées sur tous les écrans. Plutôt que de couper net, Spectroton se rabat sur le ton le plus proche possible et signale quand une nuance a besoin de Display-P3 et s’affichera différemment sur un écran sRGB.',
        'La valeur de contraste est un calcul, pas un blanc-seing : WCAG 2.2 et APCA évaluent différemment la même paire, surtout pour du texte clair sur fond sombre. Là où cela compte, regardez les deux mesures et vérifiez à la fin sur un vrai écran.'
      ],
      it: [
        'L’interfaccia parla le stesse quattordici lingue degli altri strumenti web, in parte tradotte automaticamente; le correzioni sono benvenute.',
        'I nomi dei colori arrivano da api.color.pizza, un servizio altrui. Già all’apertura Spectroton gli chiede il nome del colore corrente: così questo valore di colore va al servizio. Senza rete resta vuoto solo questo unico campo; tutto il resto continua a calcolare sul tuo dispositivo.',
        'Dopo la prima visita Spectroton funziona anche senza internet, eccetto la ricerca dei nomi dei colori.',
        'Non tutti i colori si possono mostrare su qualsiasi schermo. Invece di tagliare di netto, Spectroton ripiega sul tono più vicino possibile e segnala quando una tonalità ha bisogno di Display-P3 e su uno schermo sRGB appare diversa.',
        'Il valore di contrasto è un calcolo, non un lasciapassare: WCAG 2.2 e APCA valutano la stessa coppia in modo diverso, soprattutto con testo chiaro su fondo scuro. Dove la cosa conta, guarda entrambe le misure e alla fine verifica su uno schermo reale.'
      ],
      nl: [
        'De interface spreekt dezelfde veertien talen als de overige webgereedschappen, deels machinaal vertaald — verbeteringen zijn welkom.',
        'De kleurnamen komen van api.color.pizza, een dienst van iemand anders. Al bij het openen vraagt Spectroton daar naar de naam van de huidige kleur — daarbij gaat die kleurwaarde naar die dienst. Zonder verbinding blijft alleen dit ene veld leeg; al het andere blijft op je eigen apparaat rekenen.',
        'Na het eerste bezoek draait Spectroton ook zonder internet — het zoeken van kleurnamen uitgezonderd.',
        'Niet elke kleur is op elk scherm te tonen. In plaats van hard af te kappen wijkt Spectroton uit naar de dichtstbijzijnde mogelijke tint en geeft aan wanneer een tint Display-P3 nodig heeft en op een sRGB-scherm anders overkomt.',
        'De contrastwaarde is een berekening, geen vrijbrief: WCAG 2.2 en APCA beoordelen hetzelfde paar verschillend, vooral bij lichte tekst op een donkere ondergrond. Waar het erop aankomt, bekijk je beide maten en controleer je het uiteindelijk op een echt scherm.'
      ],
      pl: [
        'Interfejs mówi tymi samymi czternastoma językami co pozostałe narzędzia sieciowe, po części w tłumaczeniu maszynowym — poprawki mile widziane.',
        'Nazwy kolorów pochodzą z api.color.pizza, zewnętrznej usługi. Już przy otwarciu Spectroton pyta ją o nazwę bieżącego koloru — przy tym ta wartość koloru trafia do tej usługi. Bez sieci puste zostaje tylko to jedno pole; cała reszta liczy dalej na twoim urządzeniu.',
        'Po pierwszej wizycie Spectroton działa też bez internetu — z wyjątkiem wyszukiwania nazw kolorów.',
        'Nie każdy kolor da się pokazać na każdym ekranie. Zamiast twardo obcinać, Spectroton przechodzi na najbliższy możliwy odcień i zwraca uwagę, gdy stopień potrzebuje Display-P3 i na ekranie sRGB wypadnie inaczej.',
        'Wartość kontrastu to rachunek, nie glejt: WCAG 2.2 i APCA oceniają tę samą parę różnie, zwłaszcza przy jasnym tekście na ciemnym tle. Tam, gdzie to ważne, popatrzeć na obie miary i na koniec sprawdzić na prawdziwym ekranie.'
      ],
      pt: [
        'A interface fala as mesmas catorze línguas que as restantes ferramentas web, em parte por tradução automática — correções são bem-vindas.',
        'Os nomes das cores vêm da api.color.pizza, um serviço alheio. Logo ao abrir, o Spectroton pergunta a esse serviço o nome da cor atual — e, nisso, esse valor de cor vai para o serviço. Sem rede, fica vazio só este campo; tudo o resto continua a ser calculado no seu dispositivo.',
        'Depois da primeira visita, o Spectroton funciona também sem Internet — com exceção da procura de nomes de cores.',
        'Nem toda a cor se consegue mostrar em todos os ecrãs. Em vez de cortar à bruta, o Spectroton recua para o tom mais próximo possível e avisa quando um tom precisa de Display-P3 e vai sair diferente num ecrã sRGB.',
        'O valor de contraste é uma conta, não um salvo-conduto: a WCAG 2.2 e a APCA avaliam o mesmo par de maneira diferente, sobretudo com texto claro sobre fundo escuro. Onde isso for importante, olhe para as duas medidas e verifique no fim num ecrã a sério.'
      ],
      tr: [
        'Arayüz, diğer web araçlarıyla aynı on dört dili konuşur; bir bölümü makine çevirisidir, düzeltmeler memnuniyetle karşılanır.',
        'Renk adları, başka birinin hizmeti olan api.color.pizza’dan gelir. Spectroton daha sayfa açılır açılmaz oraya geçerli rengin adını sorar — bu sırada bu renk değeri hizmete gider. Ağ bağlantısı yokken yalnızca bu tek alan boş kalır; geri kalan her şey cihazınızda hesaplanmayı sürdürür.',
        'İlk ziyaretten sonra Spectroton internet olmadan da çalışır — renk adı araması bunun dışındadır.',
        'Her renk her ekranda gösterilemez. Spectroton sert biçimde kırpmak yerine en yakın olası tona kayar ve bir tonun Display-P3 gerektirdiğini, bir sRGB ekranda farklı görüneceğini belirtir.',
        'Kontrast değeri bir hesaptır, izin belgesi değil: WCAG 2.2 ile APCA aynı eşleşmeyi farklı değerlendirir, özellikle koyu zemin üzerindeki açık metinde. Önemli olduğu yerde iki ölçüye de bakın ve sonunda gerçek ekranda kontrol edin.'
      ],
      ru: [
        'Интерфейс говорит на тех же четырнадцати языках, что и остальные веб-инструменты; часть переводов машинная, поправки приветствуются.',
        'Названия цветов приходят с api.color.pizza, стороннего сервиса. Уже при открытии Spectroton спрашивает там название текущего цвета — при этом значение цвета уходит к сервису. Без сети пустым остаётся только это одно поле; всё остальное продолжает считаться на вашем устройстве.',
        'После первого посещения Spectroton работает и без интернета — за исключением поиска названий цветов.',
        'Не всякий цвет можно показать на любом экране. Вместо резкого отсечения Spectroton переходит к ближайшему возможному оттенку и указывает, когда ступени нужен Display-P3 и на sRGB-экране она выглядит иначе.',
        'Значение контраста — это расчёт, а не индульгенция: WCAG 2.2 и APCA оценивают одну и ту же пару по-разному, особенно при светлом тексте на тёмном фоне. Где это важно, смотрите оба показателя и в конце проверяйте на настоящем экране.'
      ],
      hi: [
        'इंटरफ़ेस बाक़ी वेब औज़ारों जैसी उन्हीं चौदह भाषाओं में उपलब्ध है; इनमें से कुछ मशीनी अनुवाद हैं, सुधारों का स्वागत है।',
        'रंगों के नाम api.color.pizza से आते हैं, जो किसी और की सेवा है। पेज खुलते ही Spectroton वहाँ मौजूदा रंग का नाम पूछ लेता है — इसमें यह रंग मान उस सेवा तक जाता है। इंटरनेट के बिना केवल यही एक फ़ील्ड खाली रहता है; बाक़ी सबकी गणना आपके डिवाइस पर ही होती रहती है।',
        'पहली बार आने के बाद Spectroton बिना इंटरनेट के भी चलता है — रंगों के नाम की खोज को छोड़कर।',
        'हर रंग हर स्क्रीन पर दिखाया नहीं जा सकता। कठोरता से काट देने के बजाय Spectroton निकटतम संभव शेड पर चला जाता है और बता देता है कि कब किसी सीढ़ी को Display-P3 चाहिए और वह sRGB स्क्रीन पर अलग दिखेगी।',
        'कंट्रास्ट मान एक गणना है, छूट का परवाना नहीं: WCAG 2.2 और APCA एक ही जोड़ी को अलग-अलग आँकते हैं, ख़ासकर गहरी पृष्ठभूमि पर हल्के पाठ के मामले में। जहाँ यह मायने रखता हो, वहाँ दोनों पैमाने देखें और अंत में असली स्क्रीन पर जाँचें।'
      ],
      zh: [
        '界面和其余的网页工具一样，说同样的十四种语言，其中一部分是机器翻译的——欢迎指正。',
        '颜色名称来自 api.color.pizza，一个别人的服务。页面一打开，Spectroton 就会向它询问当前颜色的名字——这个颜色值因此会发给该服务。没有网络时只有这一个字段是空的；其余一切照旧在你的设备上计算。',
        '第一次访问之后，Spectroton 没有互联网也能运行——颜色名称搜索除外。',
        '不是每种颜色都能在每块屏幕上显示出来。Spectroton 不会硬生生截断，而是退到最接近的色调，并在某一级需要 Display-P3、在 sRGB 屏幕上会呈现得不一样时给出提示。',
        '对比度数值是一次计算，不是通行证：WCAG 2.2 和 APCA 对同一组搭配的评判并不相同，尤其是深色背景上的浅色文字。要紧的地方就两个标准都看一眼，最后再到真实屏幕上确认。'
      ],
      ja: [
        '画面はほかのウェブ道具と同じ十四の言語で表示されます。一部は機械による翻訳です — 直していただけるとありがたいです。',
        '色名は api.color.pizza という他社のサービスから来ています。ページを開いた時点で、Spectroton は現在の色の名前をそこに尋ねます — そのとき、この色の値がサービスに渡ります。ネットにつながっていないと、この欄だけが空のままになります。それ以外はすべて端末の中で計算され続けます。',
        '最初の訪問のあとは、Spectroton はインターネットなしでも動きます — 色名の検索だけは別です。',
        'どの色もどの画面で出せるわけではありません。Spectroton は乱暴に切り捨てるのではなく、出せるいちばん近い色に寄せ、ある段階が Display-P3 を必要としていて sRGB の画面では違って見えることを知らせます。',
        'コントラスト値は計算であって、お墨付きではありません: WCAG 2.2 と APCA は同じ組み合わせを違うふうに評価します。とくに暗い背景に明るい文字の場合はそうです。大事なところでは両方の尺度を見て、最後は実際の画面で確かめてください。'
      ],
      ko: [
        '화면은 나머지 웹 도구와 똑같이 열네 개 언어로 나옵니다. 그 가운데 일부는 기계 번역이며, 고쳐 주시면 고맙겠습니다.',
        '색 이름은 외부 서비스인 api.color.pizza에서 옵니다. Spectroton은 페이지를 열자마자 현재 색의 이름을 그곳에 묻습니다 — 그때 이 색 값이 그 서비스로 갑니다. 네트워크가 없으면 이 칸 하나만 비어 있고, 나머지는 모두 기기에서 계속 계산됩니다.',
        '첫 방문 뒤에는 Spectroton도 인터넷 없이 돌아갑니다 — 색 이름 검색은 예외입니다.',
        '모든 색을 모든 화면에서 보여 줄 수 있는 것은 아닙니다. Spectroton은 딱 잘라 버리는 대신 가장 가까운 색조로 비켜 가고, 어떤 단계가 Display-P3를 필요로 해서 sRGB 화면에서는 다르게 보인다는 점을 알려 줍니다.',
        '대비 값은 계산일 뿐 보증서가 아닙니다: WCAG 2.2와 APCA는 같은 조합을 다르게 평가하며, 특히 어두운 바탕의 밝은 글자에서 그렇습니다. 중요한 자리라면 두 척도를 모두 살펴보고, 마지막에는 실제 화면에서 확인하세요.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      en: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/spectroton/blob/main/README.md'
    }
  },

  collective: {
    purpose: {
      de: 'Wer schuldet wem was — nach Urlaub, Ferienhaus, Festival oder Restaurantabend. Die Abrechnung steckt komprimiert im Link; die anderen brauchen weder Konto noch App, um sie zu sehen.',
      en: 'Who owes whom what — after a holiday, a rented house, a festival or a dinner out. The ledger is compressed into the link itself; nobody else needs an account or an app to open it.',
      es: '¿Quién le debe qué a quién después de un viaje, una casa rural, un festival o una cena en un restaurante? La cuenta va comprimida dentro del enlace; los demás no necesitan registrarse ni instalar una aplicación para verla.',
      fr: 'Qui doit quoi à qui — après des vacances, une location de vacances, un festival ou une soirée au restaurant. Le décompte tient, compressé, dans le lien ; les autres n’ont besoin ni de compte ni d’application pour le voir.',
      it: 'Chi deve cosa a chi: dopo una vacanza, una casa in affitto, un festival o una serata al ristorante. Il conteggio è compresso nel link; gli altri non hanno bisogno né di un account né di un’app per vederlo.',
      nl: 'Wie is wie wat schuldig — na een vakantie, een vakantiehuis, een festival of een avond uit eten. De afrekening zit gecomprimeerd in de link; de anderen hebben geen account en geen app nodig om hem te bekijken.',
      pl: 'Kto komu ile jest winien — po urlopie, domku wakacyjnym, festiwalu albo wieczorze w restauracji. Rozliczenie tkwi skompresowane w linku; pozostali nie potrzebują ani konta, ani aplikacji, żeby je zobaczyć.',
      pt: 'Quem deve o quê a quem — depois das férias, da casa alugada, do festival ou do jantar fora. A conta vai comprimida dentro do link; os outros não precisam nem de conta nem de aplicação para a verem.',
      tr: 'Kim kime ne borçlu — tatilden, kiralık evden, festivalden ya da restoran akşamından sonra. Hesaplaşma sıkıştırılmış hâlde bağlantının içinde durur; diğerlerinin onu görmek için ne bir hesaba ne de bir uygulamaya ihtiyacı vardır.',
      ru: 'Кто кому сколько должен — после отпуска, аренды загородного дома, фестиваля или ужина в ресторане. Расчёт лежит в сжатом виде в самой ссылке; остальным не нужны ни аккаунт, ни приложение, чтобы его увидеть.',
      hi: 'किसे किसको क्या देना है — छुट्टी, किराए के घर, फ़ेस्टिवल या रेस्तराँ की शाम के बाद। पूरा हिसाब संपीड़ित रूप में लिंक में ही रहता है; बाक़ी लोगों को उसे देखने के लिए न खाता चाहिए, न ऐप।',
      zh: '谁欠谁多少——旅行、度假屋、音乐节或者一顿餐厅晚饭之后。整份账目压缩在链接里；别人既不需要账号也不需要应用就能看到它。',
      ja: '誰が誰にいくら払うのか — 旅行、貸別荘、フェス、外食の夜のあとで。精算の中身は圧縮されてリンクの中に入っています。ほかの人はそれを見るのに、アカウントもアプリも必要ありません。',
      ko: '누가 누구에게 얼마를 빚졌는지 — 여행, 별장, 축제, 저녁 식사가 끝난 뒤에. 정산 내용은 압축되어 링크 안에 들어 있고, 다른 사람들은 그것을 보려고 계정도 앱도 필요하지 않습니다.'
    },
    shots: [
      {
        file: 'collective-en.webp', w: 1577, h: 1438,
        alt: {
          de: 'Collective-Calc mit einer eingetragenen Ausgabe: oben die Personen der Runde, darunter die Liste der Ausgaben, unten die Eingabezeile, die „1234,50“ als 1.234,50 € liest.',
          en: 'Collective-Calc with one expense entered: the people in the group at the top, the list of expenses below, and at the bottom the input line, which reads “1234,50” as €1,234.50.',
          es: 'Collective-Calc con un gasto anotado: arriba, las personas del grupo; debajo, la lista de gastos; abajo del todo, la línea de entrada, que interpreta «1234,50» como 1234,50 €.',
          fr: 'Collective-Calc avec une dépense saisie : en haut, les personnes du groupe ; en dessous, la liste des dépenses ; tout en bas, la ligne de saisie, qui interprète « 1234,50 » comme 1 234,50 €.',
          it: 'Collective-Calc con una spesa inserita: in alto le persone del gruppo, sotto l’elenco delle spese e in fondo la riga di inserimento, che interpreta «1234,50» come 1234,50 €.',
          nl: 'Collective-Calc met één ingevoerde uitgave: bovenaan de mensen in de groep, daaronder de lijst met uitgaven en onderaan de invoerregel, die “1234,50” leest als € 1.234,50.',
          pl: 'Collective-Calc z jednym wpisanym wydatkiem: na górze osoby z grupy, pod nimi lista wydatków, a na dole wiersz do wpisywania kwot, który odczytuje „1234,50” jako 1234,50 €.',
          pt: 'O Collective-Calc com uma despesa lançada: no topo, as pessoas do grupo; a seguir, a lista de despesas; em baixo, a linha para lançar despesas, que lê «1234,50» como 1234,50 €.',
          tr: 'Bir harcama girilmiş Collective-Calc: üstte gruptaki kişiler, altında harcama listesi, en altta da “1234,50” yazısını €1.234,50 olarak okuyan giriş satırı.',
          ru: 'Collective-Calc с одним внесённым расходом: вверху участники, ниже список расходов, а в самом низу строка ввода, которая понимает «1234,50» как 1 234,50 €.',
          hi: 'एक दर्ज खर्च के साथ Collective-Calc: ऊपर समूह के लोग, उसके नीचे खर्चों की सूची, और सबसे नीचे इनपुट पंक्ति, जो “1234,50” को €1,234.50 के रूप में पढ़ती है।',
          zh: '已录入一笔支出的 Collective-Calc：上方是参加的成员，下面是支出列表，最底部是输入栏，它把“1234,50”识别为 €1,234.50。',
          ja: '支出を1件入力した Collective-Calc: 上に参加者、その下に支出の一覧、いちばん下には「1234,50」を €1,234.50 と読み取った入力欄。',
          ko: '지출 한 건을 입력한 Collective-Calc: 위에는 함께하는 사람들, 그 아래에는 지출 목록, 맨 아래에는 “1234,50”을 €1,234.50으로 읽는 입력 줄.'
        }
      }
    ],
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
      ],
      es: [
        'Crea los nombres y anota los gastos: importe, concepto, quién ha pagado y cómo se reparte — a partes iguales, por participaciones, en porcentaje o con importes exactos.',
        'El resultado muestra los saldos y las transferencias propuestas. Lo ya pagado lo añades después como devolución; cambia los saldos, pero no cuenta en el gasto total.',
        '«Compartir resultado» envía el resumen para mirarlo; «Entregar la cuenta», el evento entero para seguir calculando.'
      ],
      fr: [
        'Créer les noms et saisir les dépenses : montant, objet, qui a payé et comment on partage — à parts égales, par quotes-parts, en pourcentage ou avec des montants exacts.',
        'Le résultat montre les soldes et les virements proposés. Ce qui a déjà été payé, vous l’ajoutez après coup comme remboursement ; cela change les soldes, mais ne compte pas dans les dépenses totales.',
        '« Partager le résultat » envoie l’aperçu à consulter, « Transmettre le décompte » envoie l’événement entier pour continuer à compter.'
      ],
      it: [
        'Crea i nomi e inserisci le spese: importo, motivo, chi ha pagato e come si divide — in parti uguali, per quote, in percentuale o con importi esatti.',
        'Il risultato mostra i saldi e i bonifici proposti. Quello che è già stato pagato lo aggiungi come rimborso; cambia i saldi, ma non conta nella spesa totale.',
        '«Condividi il risultato» manda il riepilogo da guardare, «Consegna il conteggio» manda l’intero evento per continuare a calcolare.'
      ],
      nl: [
        'Maak namen aan en voer uitgaven in: bedrag, doel, wie betaald heeft en hoe er gedeeld wordt — in gelijke delen, naar aandelen, in procenten of met exacte bedragen.',
        'Het resultaat laat de saldi en de voorgestelde overboekingen zien. Wat al betaald is, voeg je achteraf toe als terugbetaling; het verandert de saldi, maar telt niet mee in de totale uitgaven.',
        '“Resultaat delen” verstuurt het overzicht om te bekijken, “Afrekening overdragen” de hele gebeurtenis om verder te rekenen.'
      ],
      pl: [
        'Dodać imiona i wpisać wydatki: kwota, cel, kto zapłacił i jak się dzieli — po równo, według udziałów, w procentach albo dokładnymi kwotami.',
        'Wynik pokazuje salda i proponowane przelewy. To, co już zapłacono, dopisujesz jako spłatę; zmienia ona salda, ale nie liczy się do sumy wydatków.',
        '„Udostępnij wynik” wysyła zestawienie do obejrzenia, „Przekaż rozliczenie” — całe wydarzenie do dalszego liczenia.'
      ],
      pt: [
        'Criar os nomes e lançar as despesas: valor, motivo, quem pagou e como se divide — em partes iguais, por quotas, em percentagem ou com valores exatos.',
        'O resultado mostra os saldos e as transferências propostas. O que já foi pago lança-se a seguir como reembolso; altera os saldos, mas não conta para as despesas totais.',
        '«Partilhar o resultado» envia a visão geral para ser vista, «Entregar as contas» envia o acontecimento inteiro para se continuar a calcular.'
      ],
      tr: [
        'Adları ekleyin ve harcamaları girin: tutar, amaç, kimin ödediği ve nasıl paylaşılacağı — eşit olarak, paylara göre, yüzdeyle ya da tam tutarlarla.',
        'Sonuç, bakiyeleri ve önerilen havaleleri gösterir. Önceden ödenmiş olanı geri ödeme olarak eklersiniz; bu, bakiyeleri değiştirir ama toplam harcamaya sayılmaz.',
        '“Sonucu paylaş”, genel görünümü görülmek üzere gönderir; “Hesabı devret” ise üzerine hesaplamaya devam edilsin diye bütün etkinliği gönderir.'
      ],
      ru: [
        'Заведите имена и внесите расходы: сумму, назначение, кто платил и как делится — поровну, по долям, в процентах или точными суммами.',
        'Результат показывает сальдо и предлагаемые переводы. Уже оплаченное вы вносите как возврат; оно меняет сальдо, но не засчитывается в общие расходы.',
        '«Поделиться итогом» отправляет обзор для просмотра, «Передать расчёт» — всё событие целиком, чтобы считать дальше.'
      ],
      hi: [
        'नाम जोड़ें और खर्च दर्ज करें: रकम, मक़सद, किसने चुकाया, और बँटवारा कैसे होगा — बराबर हिस्सों में, हिस्सों के अनुसार, प्रतिशत में या सटीक रकम के साथ।',
        'नतीजा शेष रकमें और सुझाए गए ट्रांसफ़र दिखाता है। जो पहले ही चुकाया जा चुका है, उसे आप वापसी भुगतान के रूप में बाद में दर्ज करते हैं; वह शेष रकमों को बदलता है, पर कुल खर्च में नहीं गिना जाता।',
        '“नतीजा साझा करें” अवलोकन को देखने के लिए भेजता है, “हिसाब सौंपें” पूरे आयोजन को आगे हिसाब करते रहने के लिए।'
      ],
      zh: [
        '先录入参与者的名字，再逐笔记下开销：金额、用途、谁付的钱，以及怎么分——平均分、按份额、按百分比，或者用精确金额。',
        '结果会显示各人的余额和建议的转账。已经付过的钱，你补录成一笔还款；它会改变余额，但不计入总开销。',
        '“分享结果”发出去的是供查看的总览，“移交账目”发出去的则是整个活动，好让别人接着算。'
      ],
      ja: [
        '名前を登録して支出を入力します: 金額、用途、誰が払ったか、どう分けるか — 全員で等分、取り分、パーセント、または金額を個別に。',
        '結果には残高と、提案された送金が出ます。すでに払ったものは返済としてあとから書き加えます。残高は変わりますが、支出の合計には数えられません。',
        '「結果を共有」は見てもらうための概要を送り、「精算をまるごと渡す」は続けて計算してもらうためにイベント全体を送ります。'
      ],
      ko: [
        '참가자 이름을 등록하고 지출을 적습니다: 금액, 용도, 누가 냈는지, 그리고 어떻게 나눌지 — 균등하게, 비율로, 퍼센트로, 또는 정확한 금액으로.',
        '결과에는 잔액과 제안된 송금이 나옵니다. 이미 지불한 것은 되갚기로 적어 넣습니다. 그러면 잔액은 바뀌지만 총지출에는 들어가지 않습니다.',
        '“결과 공유”는 보기용 개요를 보내고, “정산 전체 넘기기”는 이어서 계산할 수 있도록 행사 전체를 보냅니다.'
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
      ],
      es: [
        'El enlace está comprimido, pero no cifrado. Quien lo tenga lo ve todo, y la aplicación de mensajería por la que lo envías lo transporta consigo.',
        'Los eventos están en el almacenamiento de tu navegador, no en una nube. Safari limpia ese almacenamiento al cabo de aproximadamente una semana sin visitas; por eso la aplicación pide una copia de seguridad a partir del quinto gasto.',
        'Las monedas sin subunidad —yen, won, forinto— la herramienta no las sabe calcular, aunque la interfaz exista en japonés y en coreano.',
        'Los navegadores antiguos (Safari anterior a 16.4, Firefox anterior a 113) no pueden ni crear ni abrir los enlaces para compartir.'
      ],
      fr: [
        'Le lien est compressé, mais pas chiffré. Quiconque l’a voit tout — et la messagerie par laquelle vous l’envoyez le transporte aussi.',
        'Les événements se trouvent dans la mémoire de votre navigateur, pas dans le cloud. Safari fait le ménage dans cette mémoire après environ une semaine sans visite ; c’est pourquoi l’application demande une sauvegarde à partir de la cinquième dépense.',
        'Les monnaies sans subdivision — yen, won, forint — ne peuvent pas être calculées par l’outil, bien que l’interface existe en japonais et en coréen.',
        'Les navigateurs plus anciens (Safari avant 16.4, Firefox avant 113) ne peuvent ni créer ni ouvrir les liens de partage.'
      ],
      it: [
        'Il link è compresso, ma non cifrato. Chi ce l’ha vede tutto, e il messenger con cui lo invii se lo porta dietro.',
        'Gli eventi si trovano nella memoria del tuo browser, non nel cloud. Safari ripulisce questa memoria dopo circa una settimana senza visite; per questo dalla quinta spesa in poi l’app chiede una copia di sicurezza.',
        'Le valute senza sottounità — yen, won, fiorino ungherese — lo strumento non le sa calcolare, anche se l’interfaccia esiste in giapponese e in coreano.',
        'I browser più vecchi (Safari prima della 16.4, Firefox prima della 113) non riescono né a creare né ad aprire i link di condivisione.'
      ],
      nl: [
        'De link is gecomprimeerd, maar niet versleuteld. Wie hem heeft, ziet alles — en de messenger waarmee je hem verstuurt, vervoert hem mee.',
        'De gebeurtenissen staan in de opslag van je browser, niet in een wolk. Safari ruimt die opslag na ongeveer een week zonder bezoek op; daarom vraagt de app vanaf de vijfde uitgave om een reservekopie.',
        'Valuta zonder onderverdeling — yen, won, forint — kan de tool niet verwerken, hoewel de interface er in het Japans en het Koreaans is.',
        'Oudere browsers (Safari voor 16.4, Firefox voor 113) kunnen de deellinks niet maken en niet openen.'
      ],
      pl: [
        'Link jest skompresowany, ale nie zaszyfrowany. Kto go ma, widzi wszystko — a komunikator, przez który go wysyłasz, przenosi go razem z treścią.',
        'Wydarzenia są w pamięci twojej przeglądarki, nie w chmurze. Safari czyści tę pamięć po mniej więcej tygodniu bez wizyty; dlatego od piątego wydatku aplikacja prosi o kopię zapasową.',
        'Walut bez jednostki podrzędnej — jena, wona, forinta — narzędzie nie potrafi policzyć, mimo że interfejs istnieje po japońsku i koreańsku.',
        'Starsze przeglądarki (Safari przed 16.4, Firefox przed 113) nie potrafią linków do udostępniania ani utworzyć, ani otworzyć.'
      ],
      pt: [
        'O link está comprimido, mas não cifrado. Quem o tiver vê tudo — e a aplicação de mensagens por onde o envia leva-o consigo.',
        'Os acontecimentos ficam no armazenamento do seu navegador, não numa nuvem. O Safari limpa esse armazenamento ao fim de cerca de uma semana sem visitas; por isso, a partir da quinta despesa a aplicação pede uma cópia de segurança.',
        'Moedas sem subunidade — iene, won, forint — a ferramenta não as consegue calcular, apesar de a interface existir em japonês e coreano.',
        'Navegadores mais antigos (Safari anterior a 16.4, Firefox anterior a 113) não conseguem nem criar nem abrir os links de partilha.'
      ],
      tr: [
        'Bağlantı sıkıştırılmıştır ama şifrelenmiş değildir. Elinde tutan her şeyi görür — ve onu gönderdiğiniz mesajlaşma uygulaması da onu taşır.',
        'Etkinlikler bir bulutta değil, tarayıcınızın yerel deposunda durur. Safari bu depoyu yaklaşık bir hafta ziyaret edilmezse temizler; bu yüzden uygulama beşinci harcamadan itibaren bir yedek ister.',
        'Alt birimi olmayan para birimlerini — yen, won, forint — bu araç hesaplayamaz, arayüzü Japonca ve Korece olsa bile.',
        'Eski tarayıcılar (16.4’ten önceki Safari, 113’ten önceki Firefox) paylaşım bağlantılarını ne oluşturabilir ne de açabilir.'
      ],
      ru: [
        'Ссылка сжата, но не зашифрована. У кого она есть, тот видит всё — и мессенджер, через который вы её отправляете, переносит её вместе с содержимым.',
        'Ваши события хранятся в памяти браузера, а не в облаке. Safari очищает это хранилище примерно через неделю без посещений; поэтому начиная с пятого расхода приложение просит сделать резервную копию.',
        'Валюты без разменной единицы — иена, вона, форинт — инструмент считать не умеет, хотя интерфейс есть на японском и корейском.',
        'Старые браузеры (Safari до 16.4, Firefox до 113) не могут ни создавать ссылки для передачи, ни открывать их.'
      ],
      hi: [
        'लिंक संपीड़ित है, पर एन्क्रिप्टेड नहीं। जिसके पास वह है, वह सब कुछ देख लेता है — और जिस मैसेंजर से आप उसे भेजते हैं, वह उसे साथ ढोता है।',
        'आयोजन आपके ब्राउज़र की मेमोरी में रहते हैं, किसी क्लाउड में नहीं। बिना किसी विज़िट के लगभग एक हफ़्ते बाद Safari इस मेमोरी को साफ़ कर देता है; इसीलिए ऐप पाँचवें खर्च से आगे बैकअप के लिए कहती है।',
        'जिन मुद्राओं में उप-इकाई नहीं होती — येन, वॉन, फ़ोरिंट — उनका हिसाब यह औज़ार नहीं कर सकता, हालाँकि इसका इंटरफ़ेस जापानी और कोरियाई में भी है।',
        'पुराने ब्राउज़र (16.4 से पहले का Safari, 113 से पहले का Firefox) साझा करने वाले लिंक न बना सकते हैं, न खोल सकते हैं।'
      ],
      zh: [
        '链接是压缩过的，但没有加密。谁拿到它，谁就能看到全部——而且你用来发送它的那个聊天软件也一并经手。',
        '这些活动存在你浏览器的存储里，不在云端。Safari 大约一周没有访问就会清理这块存储；所以从第五笔开销起，应用会请你做一次备份。',
        '没有辅币单位的货币——日元、韩元、福林——这个工具算不了，尽管界面本身有日语和韩语。',
        '较旧的浏览器（Safari 16.4 之前、Firefox 113 之前）既生成不了也打不开这些分享链接。'
      ],
      ja: [
        'リンクは圧縮されていますが、暗号化はされていません。持っている人には全部見えます — そして送るのに使うメッセンジャーも、それを一緒に運びます。',
        'イベントはブラウザーの保存領域にあり、クラウドにはありません。Safari は訪問がないと1週間ほどでこの保存領域を片付けます。だからアプリは5件目の支出からバックアップを勧めます。',
        '補助単位のない通貨 — 円、ウォン、フォリント — はこの道具では計算できません。画面は日本語と韓国語でも用意されているのですが。',
        '古いブラウザー（Safari 16.4 より前、Firefox 113 より前）では、共有リンクを作ることも開くこともできません。'
      ],
      ko: [
        '링크는 압축되어 있지만 암호화되어 있지는 않습니다. 링크를 가진 사람은 전부를 보게 되고, 그것을 보내는 메신저도 함께 나릅니다.',
        '행사 기록은 클라우드가 아니라 브라우저의 저장소에 있습니다. Safari는 방문 없이 일주일쯤 지나면 이 저장소를 정리합니다. 그래서 앱은 다섯 번째 지출부터 백업을 부탁합니다.',
        '이 도구는 보조 단위가 없는 통화(엔, 원, 포린트)를 계산하지 못합니다. 화면이 일본어와 한국어로 제공되는데도 그렇습니다.',
        '오래된 브라우저(16.4 이전의 Safari, 113 이전의 Firefox)는 공유 링크를 만들지도 열지도 못합니다.'
      ]
    },
    docs: {
      // Collective-Calc has no README.de.md; its single README is German.
      de: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      en: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/collective-calc/blob/main/README.md'
    }
  },

  bigday: {
    purpose: {
      de: 'Ein Countdown auf Urlaub, Geburtstag oder Hochzeitstag, der als Link verschickt wird. Titel und Datum stehen im Link selbst — es gibt keine Datenbank, in der sie liegen könnten.',
      en: 'A countdown to a holiday, a birthday or an anniversary that travels as a link. Title and date live inside the link itself — there is no database they could sit in.',
      es: 'Una cuenta atrás para unas vacaciones, un cumpleaños o un aniversario, que se envía como enlace. El título y la fecha están en el propio enlace: no hay ninguna base de datos en la que pudieran estar.',
      fr: 'Un compte à rebours jusqu’aux vacances, à un anniversaire ou à une date de mariage, qui s’envoie sous forme de lien. Le titre et la date sont dans le lien lui-même — il n’y a pas de base de données où ils pourraient se trouver.',
      it: 'Un conto alla rovescia verso una vacanza, un compleanno o un anniversario, da inviare come link. Titolo e data sono nel link stesso: non c’è nessun database in cui potrebbero trovarsi.',
      nl: 'Een aftelklok naar een vakantie, verjaardag of trouwdag, die als link wordt verstuurd. Titel en datum staan in de link zelf — er is geen database waarin ze zouden kunnen staan.',
      pl: 'Odliczanie do urlopu, urodzin albo rocznicy ślubu, które wysyła się jako link. Tytuł i data są zapisane w samym linku — nie ma bazy danych, w której mogłyby się znajdować.',
      pt: 'Uma contagem decrescente para as férias, um aniversário ou uma data de casamento, que se envia como link. O título e a data estão dentro do próprio link — não existe base de dados nenhuma onde pudessem ficar.',
      tr: 'Tatile, doğum gününe ya da evlilik yıl dönümüne, bağlantı olarak gönderilen bir geri sayım. Başlık ve tarih bağlantının kendisinde durur — onları tutabilecek bir veritabanı yoktur.',
      ru: 'Обратный отсчёт до отпуска, дня рождения или годовщины свадьбы, который отправляется ссылкой. Название и дата записаны в самой ссылке — нет базы данных, в которой они могли бы лежать.',
      hi: 'छुट्टी, जन्मदिन या सालगिरह तक की उलटी गिनती, जो लिंक के रूप में भेजी जाती है। शीर्षक और तारीख़ लिंक में ही रहते हैं — कोई डेटाबेस है ही नहीं जिसमें वे पड़े हो सकें।',
      zh: '一个指向假期、生日或纪念日的倒计时，以链接的形式发出去。标题和日期就写在链接本身里——没有哪个数据库可以装着它们。',
      ja: '休暇、誕生日、記念日までのカウントダウンを、リンクとして送ります。タイトルと日付はリンクそのものの中にあります — それらが置かれうるデータベースは存在しません。',
      ko: '휴가, 생일, 기념일까지의 카운트다운을 링크로 보냅니다. 제목과 날짜는 링크 자체에 들어 있습니다 — 그것들이 놓일 데이터베이스가 아예 없습니다.'
    },
    shots: [
      {
        file: 'bigday-en.webp', w: 1147, h: 1435,
        alt: {
          de: 'bigday in der Stimmung Neon: oben der laufende Zähler in Jahren, Tagen, Stunden, Minuten und Sekunden, darunter das Formular mit Titel, Datum, Uhrzeit, den neun Stimmungen und dem Link zum Teilen.',
          en: 'bigday in the Neon mood: the live counter in years, days, hours, minutes and seconds at the top, below it the form with title, date, time, the nine moods and the link to share.',
          es: 'bigday con el ambiente Neón: arriba, el contador en marcha en años, días, horas, minutos y segundos; debajo, el formulario con título, fecha, hora, los nueve ambientes y el enlace para compartir.',
          fr: 'bigday dans l’ambiance Néon : en haut, le compteur en direct, en ans, jours, heures, minutes et secondes ; en dessous, le formulaire avec titre, date, heure, les neuf ambiances et le lien à partager.',
          it: 'bigday nell’atmosfera Neon: in alto il contatore in tempo reale in anni, giorni, ore, minuti e secondi; sotto, il modulo con titolo, data, ora, le nove atmosfere e il link da condividere.',
          nl: 'bigday in de sfeer Neon: bovenaan de lopende teller in jaren, dagen, uren, minuten en seconden, daaronder het formulier met titel, datum, tijd, de negen sferen en de link om te delen.',
          pl: 'bigday w nastroju Neon: na górze licznik na żywo w latach, dniach, godzinach, minutach i sekundach, pod nim formularz z tytułem, datą, godziną, dziewięcioma nastrojami i linkiem do udostępnienia.',
          pt: 'O bigday no clima Neon: em cima, o contador em tempo real em anos, dias, horas, minutos e segundos; por baixo, o formulário com título, data, hora, os nove climas e o link para partilhar.',
          tr: 'Neon tarzında bigday: üstte yıl, gün, saat, dakika ve saniye cinsinden canlı sayaç; altında başlık, tarih, saat, dokuz tarz ve paylaşma bağlantısıyla form.',
          ru: 'bigday в настроении «Неон»: вверху живой счётчик в годах, днях, часах, минутах и секундах, ниже форма с названием, датой, временем, девятью настроениями и ссылкой, чтобы поделиться.',
          hi: 'नियॉन अंदाज़ में bigday: ऊपर सालों, दिनों, घंटों, मिनटों और सेकंडों में चलता काउंटर, उसके नीचे शीर्षक, तारीख़, समय, नौ अंदाज़ों और साझा करने के लिंक वाला फ़ॉर्म।',
          zh: '氛围为霓虹的 bigday：上方是按年、天、小时、分钟和秒实时跳动的计数器，下面是表单，含标题、日期、时间、九种氛围和分享链接。',
          ja: '雰囲気をネオンにした bigday: 上には年・日・時間・分・秒で刻々と進むカウンター、その下にタイトル、日付、時刻、9つの雰囲気、シェア用のリンクを備えたフォーム。',
          ko: '네온 분위기의 bigday: 위에는 년, 일, 시간, 분, 초 단위로 실시간 흘러가는 카운터, 그 아래에는 제목, 날짜, 시간, 아홉 가지 분위기, 공유 링크가 있는 입력 양식.'
        }
      }
    ],
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
      ],
      es: [
        'Escribe el título y la fecha y, si quieres, una hora; también puedes marcar la casilla «Repetir cada año».',
        'Elige uno de los nueve ambientes. Determina los colores, la tipografía del título y el fondo.',
        'Copia el enlace, muestra el código QR o envíalo desde el menú de compartir. Quien lo abra verá exactamente ese ambiente.'
      ],
      fr: [
        'Saisir un titre et une date, éventuellement une heure, et cocher « Répéter chaque année » si besoin.',
        'Choisir l’une des neuf ambiances. Elle détermine les couleurs, la police du titre et l’arrière-plan.',
        'Copier le lien, montrer le code QR ou l’envoyer par le menu de partage. Qui l’ouvre voit exactement cette ambiance.'
      ],
      it: [
        'Inserisci titolo e data, se vuoi anche un orario, e spunta la casella «ripeti ogni anno».',
        'Scegli una delle nove atmosfere. È lei a stabilire colori, carattere del titolo e sfondo.',
        'Copia il link, mostra il codice QR oppure invialo tramite il menu di condivisione. Chi lo apre vede esattamente questa atmosfera.'
      ],
      nl: [
        'Vul titel en datum in, daarbij desgewenst een tijdstip en het vinkje “jaarlijks herhalen”.',
        'Kies een van de negen sferen. Die bepaalt kleuren, titelletter en achtergrond.',
        'Kopieer de link, toon de QR-code of verstuur hem via het deelmenu. Wie hem opent, ziet precies deze sfeer.'
      ],
      pl: [
        'Wpisać tytuł i datę, do tego opcjonalnie godzinę i pole wyboru „Powtarzaj co roku”.',
        'Wybrać jeden z dziewięciu nastrojów. Ustala on kolory, pismo tytułowe i tło.',
        'Skopiować link, pokazać kod QR albo wysłać przez menu udostępniania. Kto go otworzy, zobaczy dokładnie ten nastrój.'
      ],
      pt: [
        'Escrever o título e a data e, se quiser, uma hora e a opção «Repetir todo ano».',
        'Escolher um dos nove ambientes. É ele que determina as cores, a letra do título e o fundo.',
        'Copiar o link, mostrar o código QR ou enviá-lo pelo menu de partilha. Quem o abrir vê exatamente esse ambiente.'
      ],
      tr: [
        'Başlık ve tarih girin, isterseniz bir saat ve “her yıl yinele” onay kutusu.',
        'Dokuz ruh hâlinden birini seçin. Renkleri, başlık yazı tipini ve arka planı o belirler.',
        'Bağlantıyı kopyalayın, QR kodu gösterin ya da paylaşım menüsünden gönderin. Açan kişi tam olarak bu ruh hâlini görür.'
      ],
      ru: [
        'Впишите название и дату, при желании укажите время и поставьте галочку «Повторять каждый год».',
        'Выберите одно из девяти настроений. Оно задаёт цвета, заголовочный шрифт и фон.',
        'Скопируйте ссылку, покажите QR-код или отправьте через меню «Поделиться». Кто её откроет, увидит ровно это настроение.'
      ],
      hi: [
        'शीर्षक और तारीख़ दर्ज करें, साथ में चाहें तो समय और “हर साल दोहराएँ” का चेकबॉक्स।',
        'नौ मिज़ाजों में से एक चुनें। वही रंग, शीर्षक का फ़ॉन्ट और पृष्ठभूमि तय करता है।',
        'लिंक कॉपी करें, QR कोड दिखाएँ या साझा करने के मेन्यू से भेजें। जो उसे खोलेगा, उसे ठीक यही मिज़ाज दिखेगा।'
      ],
      zh: [
        '填写标题和日期，另外可以选填一个时间，以及“每年重复”的勾选项。',
        '从九种氛围里选一种。它决定颜色、标题字体和背景。',
        '复制链接、显示二维码，或者通过分享菜单发出去。打开它的人看到的正是这种氛围。'
      ],
      ja: [
        'タイトルと日付を入力します。必要に応じて、時刻や「毎年繰り返す」のチェックも設定できます。',
        '9つの雰囲気からひとつ選びます。色、見出しの書体、背景がこれで決まります。',
        'リンクをコピーするか、QR コードを表示するか、共有メニューから送ります。開いた人には、まさにこの雰囲気が見えます。'
      ],
      ko: [
        '제목과 날짜를 적고, 원하면 시각과 “매년 반복” 체크 상자도 함께 지정합니다.',
        '아홉 가지 분위기 가운데 하나를 고릅니다. 분위기가 색, 제목 글꼴, 배경을 정합니다.',
        '링크를 복사하거나, QR 코드를 보여 주거나, 공유 메뉴로 보냅니다. 그것을 여는 사람은 바로 그 분위기를 보게 됩니다.'
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
      ],
      es: [
        'El enlace no está cifrado: quien lo tenga lee el título en la barra de direcciones. También lo ven la aplicación de mensajería por la que lo envías y tu historial de navegación.',
        'Claro u oscuro se deduce del ambiente elegido. Esta herramienta no tiene un interruptor propio para eso.',
        'Pasado el día señalado, la página sigue contando hacia delante: «desde el gran día». Los enlaces enviados siguen vivos en vez de quedarse en nada.',
        'El botón de compartir solo aparece donde el navegador lo ofrece, así que en el ordenador muchas veces no. «Copiar enlace» está ahí de todos modos.'
      ],
      fr: [
        'Le lien n’est pas chiffré : quiconque l’a lit le titre dans la barre d’adresse. La messagerie par laquelle vous l’envoyez et l’historique de votre navigateur le voient aussi.',
        'Clair ou sombre découle de l’ambiance choisie. Cet outil ne possède pas son propre sélecteur.',
        'Après le jour visé, la page se met à compter dans l’autre sens — « depuis le grand jour ». Les liens envoyés restent donc vivants au lieu de tourner dans le vide.',
        'Le bouton de partage n’apparaît que là où le navigateur le propose ; sur ordinateur, donc souvent pas. « Copier le lien » y est malgré tout.'
      ],
      it: [
        'Il link non è cifrato: chi ce l’ha legge il titolo nella barra degli indirizzi. Lo vedono anche il messenger con cui lo invii e la cronologia del tuo browser.',
        'Chiaro o scuro deriva dall’atmosfera scelta. Questo strumento non ha un interruttore dedicato.',
        'Dopo la data stabilita la pagina continua a contare in avanti: «dal grande giorno». I link già inviati restano quindi vivi, invece di finire nel vuoto.',
        'Il pulsante di condivisione compare solo dove il browser lo offre, quindi sul computer spesso no. «Copia link» però lì c’è lo stesso.'
      ],
      nl: [
        'De link is niet versleuteld: wie hem heeft, leest de titel in de adresbalk. Ook de messenger waarmee je hem verstuurt en je browsergeschiedenis zien hem.',
        'Licht of donker volgt uit de gekozen sfeer. Een eigen schakelaar heeft deze tool niet.',
        'Na de doeldag telt de pagina vooruit verder — “sinds de grote dag”. Verstuurde links blijven dus leven in plaats van in het niets te lopen.',
        'De deelknop verschijnt alleen waar de browser hem aanbiedt; op de computer dus vaak niet. “Link kopiëren” is er daar hoe dan ook.'
      ],
      pl: [
        'Link nie jest zaszyfrowany: kto go ma, czyta tytuł w pasku adresu. Widzi go też komunikator, przez który go wysyłasz, i twoja historia przeglądarki.',
        'Jasny albo ciemny wynika z wybranego nastroju. Własnego przełącznika to narzędzie nie ma.',
        'Po dniu docelowym strona liczy dalej do przodu — „od wielkiego dnia”. Wysłane linki zostają więc żywe, zamiast trafiać w pustkę.',
        'Przycisk udostępniania pojawia się tylko tam, gdzie przeglądarka go oferuje, czyli na komputerze często go nie ma. „Kopiuj link” jest tam mimo to dostępny.'
      ],
      pt: [
        'O link não está cifrado: quem o tiver lê o título na barra de endereço. Também a aplicação de mensagens por onde o envia e o histórico do seu navegador o veem.',
        'Claro ou escuro resulta do ambiente escolhido. Esta ferramenta não tem um interruptor próprio.',
        'Depois do dia marcado, a página continua a contar para a frente — «desde o grande dia». Os links enviados continuam assim vivos, em vez de darem em nada.',
        'O botão de partilha só aparece onde o navegador o oferece; no computador, portanto, muitas vezes não. «Copiar o link» existe lá à mesma.'
      ],
      tr: [
        'Bağlantı şifrelenmiş değildir: Elinde tutan, başlığı adres çubuğunda okur. Onu gönderdiğiniz mesajlaşma uygulaması ve kendi tarayıcı geçmişiniz de görür.',
        'Açık ya da koyu, seçtiğiniz ruh hâlinden çıkar. Bu araçta bunun için ayrı bir düğme yoktur.',
        'Hedef günün ardından sayfa ileriye doğru saymayı sürdürür — “büyük günden bu yana”. Gönderilmiş bağlantılar böylece boşa düşmek yerine canlı kalır.',
        'Paylaş düğmesi yalnızca tarayıcının onu sunduğu yerlerde görünür; yani bilgisayarda çoğu zaman görünmez. “Bağlantıyı kopyala” orada yine de vardır.'
      ],
      ru: [
        'Ссылка не зашифрована: у кого она есть, тот читает название в адресной строке. Видят его и мессенджер, через который вы её отправляете, и история вашего браузера.',
        'Светлое или тёмное оформление зависит от выбранного настроения. Отдельного переключателя у этого инструмента нет.',
        'После целевого дня страница продолжает считать вперёд — «с того самого дня». Отправленные ссылки, таким образом, остаются живыми, а не уходят в пустоту.',
        'Кнопка «Поделиться» появляется только там, где браузер её предлагает, — то есть на компьютере часто её нет. «Скопировать ссылку» там есть в любом случае.'
      ],
      hi: [
        'लिंक एन्क्रिप्टेड नहीं है: जिसके पास वह है, वह पता-पट्टी में शीर्षक पढ़ लेता है। जिस मैसेंजर से आप उसे भेजते हैं और आपका अपना ब्राउज़र इतिहास भी उसे देखते हैं।',
        'हल्की या गहरी थीम चुने हुए मिज़ाज से तय होती है। इस औज़ार में उसके लिए अलग स्विच नहीं है।',
        'लक्ष्य दिन के बाद पेज आगे की ओर गिनता रहता है — “बड़े दिन के बाद से”। भेजे हुए लिंक इसलिए ज़िंदा रहते हैं, ख़ाली में नहीं चले जाते।',
        'साझा करने का बटन केवल वहीं दिखता है जहाँ ब्राउज़र उसे देता है; कंप्यूटर पर इसलिए अक्सर नहीं। “लिंक कॉपी करें” वहाँ फिर भी मौजूद रहता है।'
      ],
      zh: [
        '链接没有加密：谁拿到它，谁就能在地址栏里读到标题。你用来发送它的聊天软件，还有你自己的浏览器历史，也都看得到。',
        '浅色还是深色，取决于你选的氛围。这个工具没有单独的切换开关。',
        '过了目标日之后，页面会继续往前数——“自那个大日子以来”。所以发出去的链接不会落空，而是继续活着。',
        '分享按钮只在浏览器提供它的地方出现；在电脑上因此常常没有。“复制链接”在那里照样有。'
      ],
      ja: [
        'リンクは暗号化されていません: 持っている人はアドレス欄でタイトルを読めます。送るのに使うメッセンジャーも、自分のブラウザーの履歴も、それを見ています。',
        'ライトかダークかは選んだ雰囲気から決まります。この道具には専用の切り替えはありません。',
        '目標の日を過ぎても、ページはそのまま経過日数を数え続けます — 「あの日から」。送ったリンクは空振りにならず、生き続けます。',
        '共有ボタンはブラウザーが用意している場所にだけ現れます。パソコンでは出ないことが多いです。「リンクをコピー」はそこでも使えます。'
      ],
      ko: [
        '링크는 암호화되어 있지 않습니다: 링크를 가진 사람은 주소 표시줄에서 제목을 읽습니다. 그것을 보내는 메신저와 내 브라우저 기록도 마찬가지로 봅니다.',
        '라이트냐 다크냐는 고른 분위기에서 정해집니다. 이 도구에는 따로 전환 스위치가 없습니다.',
        '목표일이 지나면 페이지는 계속 앞으로 셉니다 — “그날로부터”. 그래서 보낸 링크는 허공으로 흘러가지 않고 살아 있습니다.',
        '공유 버튼은 브라우저가 제공하는 곳에서만 나타납니다. 그래서 컴퓨터에서는 없는 경우가 많습니다. “링크 복사”는 그런 곳에서도 있습니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/bigday/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/bigday/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/bigday/blob/main/README.md'
    }
  },

  rad: {
    purpose: {
      de: 'Wenn sich niemand entscheiden will: Optionen eintippen, Rad drehen, fertig. Gezogen wird mit dem Zufallsgenerator des Browsers, bevor sich das Rad überhaupt bewegt — die Animation zeigt das Ergebnis, sie erzeugt es nicht.',
      en: 'When nobody wants to decide: type in the options, spin the wheel, done. The winner is drawn with the browser’s random generator before the wheel even moves — the animation shows the result, it does not create it.',
      es: 'Cuando nadie quiere decidir: escribe las opciones, gira la ruleta y listo. El sorteo se hace con el generador aleatorio del navegador antes incluso de que la ruleta se mueva: la animación muestra el resultado, no lo genera.',
      fr: 'Quand personne ne veut décider : taper les options, tourner la roue, c’est réglé. Le tirage se fait avec le générateur aléatoire du navigateur avant même que la roue ne bouge — l’animation montre le résultat, elle ne le produit pas.',
      it: 'Quando nessuno vuole decidere: scrivi le opzioni, gira la ruota, fatto. L’estrazione avviene con il generatore casuale del browser prima ancora che la ruota si muova: l’animazione mostra il risultato, non lo produce.',
      nl: 'Als niemand wil beslissen: opties intypen, rad draaien, klaar. Er wordt getrokken met de toevalsgenerator van de browser, voordat het rad zich ook maar beweegt — de animatie laat de uitkomst zien, ze maakt hem niet.',
      pl: 'Kiedy nikt nie chce decydować: wpisać opcje, zakręcić kołem, gotowe. Losowania dokonuje generator losowy przeglądarki, zanim koło w ogóle się poruszy — animacja pokazuje wynik, nie tworzy go.',
      pt: 'Quando ninguém se quer decidir: escrever as opções, girar a roda, pronto. O sorteio é feito com o gerador de números aleatórios do navegador antes sequer de a roda se mexer — a animação mostra o resultado, não o cria.',
      tr: 'Kimse karar vermek istemediğinde: Seçenekleri yazın, çarkı çevirin, bitti. Kazanan, çark daha kıpırdamadan tarayıcının rastgele sayı üreteciyle çekilir — animasyon sonucu gösterir, onu üretmez.',
      ru: 'Когда никто не хочет решать: впишите варианты, крутите колесо, готово. Победителя определяет генератор случайных чисел браузера ещё до того, как колесо вообще тронется, — анимация показывает результат, а не создаёт его.',
      hi: 'जब कोई फ़ैसला नहीं करना चाहता: विकल्प टाइप करें, पहिया घुमाएँ, बस। विजेता ब्राउज़र के यादृच्छिक जनरेटर से निकाला जाता है, पहिए के हिलने से भी पहले — एनीमेशन नतीजा दिखाता है, बनाता नहीं।',
      zh: '当谁都不想做决定的时候：输入选项，转动转盘，完事。结果是在转盘还没开始动之前就用浏览器的随机数生成器抽出来的——动画只是展示结果，并不产生结果。',
      ja: '誰も決めたがらないときに: 選択肢を入力して、ルーレットを回して、おしまいです。当たりはルーレットが動き出す前にブラウザーの乱数生成器で引かれています — アニメーションは結果を見せるだけで、結果を作ってはいません。',
      ko: '아무도 결정하려 들지 않을 때: 선택지를 입력하고, 룰렛을 돌리면 끝입니다. 당첨은 룰렛이 움직이기도 전에 브라우저의 난수 생성기로 뽑습니다 — 애니메이션은 결과를 보여 줄 뿐, 만들어 내지 않습니다.'
    },
    shots: [
      {
        file: 'rad-de.webp', w: 1584, h: 1439,
        alt: {
          de: 'Dreh das Rad mit sechs Optionen in der Farbwelt Neon: links das Rad mit Zeiger und dem Knopf zum Drehen, rechts Frage, Optionen, Schnellstart-Vorlagen und Farbwelten, darunter der Link zum Teilen.',
          en: 'Dreh das Rad with six options in the Neon colours: the wheel with its pointer and the spin button on the left; question, options, quick-start presets and colour sets on the right, with the share link underneath.',
          es: 'Dreh das Rad con seis opciones y los colores Neón: a la izquierda, la ruleta con su puntero y el botón para girarla; a la derecha, la pregunta, las opciones, las plantillas de inicio rápido y la elección de colores, y debajo el enlace para compartir.',
          fr: 'Dreh das Rad avec six options dans les couleurs Néon : à gauche, la roue avec son pointeur et le bouton pour la faire tourner ; à droite, la question, les options, les modèles de démarrage rapide et le choix des couleurs, avec en dessous le lien de partage.',
          it: 'Dreh das Rad con sei opzioni nei colori Neon: a sinistra la ruota con l’indicatore e il pulsante per farla girare; a destra domanda, opzioni, modelli di avvio rapido e scelta dei colori, e sotto il link da condividere.',
          nl: 'Dreh das Rad met zes opties in de Neon-kleuren: links het rad met de wijzer en de knop om het te laten draaien, rechts vraag, opties, snelstart-sjablonen en kleurensets, met daaronder de link om te delen.',
          pl: 'Dreh das Rad z sześcioma opcjami w kolorach Neon: po lewej koło ze wskaźnikiem i przyciskiem do kręcenia, po prawej pytanie, opcje, szablony szybkiego startu i zestawy kolorów, a pod spodem link do udostępnienia.',
          pt: 'Dreh das Rad com seis opções nas cores Neon: à esquerda, a roda com o ponteiro e o botão para a girar; à direita, a pergunta, as opções, os modelos de início rápido e os conjuntos de cores, com o link de partilha por baixo.',
          tr: 'Neon renklerinde, altı seçenekli Dreh das Rad: solda ibresi ve çevirme düğmesiyle çark; sağda soru, seçenekler, hızlı başlangıç şablonları ve renkler, altında da paylaşma bağlantısı.',
          ru: 'Dreh das Rad с шестью вариантами в цветах «Неон»: слева колесо с указателем и кнопкой вращения, справа вопрос, варианты, шаблоны быстрого старта и цвета, а под ними ссылка, чтобы поделиться колесом.',
          hi: 'नियॉन रंगों में छह विकल्पों वाला Dreh das Rad: बाईं ओर सूचक और घुमाने के बटन के साथ पहिया; दाईं ओर सवाल, विकल्प, तुरंत शुरू करने के लिए तैयार सेट और रंग, और उनके नीचे साझा करने का लिंक।',
          zh: '有六个选项、配色为霓虹的 Dreh das Rad：左边是带指针的转盘和转动按钮；右边是问题、选项、快速开始预设和配色，下面是分享链接。',
          ja: '配色をネオンにし、選択肢を6つ入れた Dreh das Rad: 左に針の付いたルーレットと回すボタン、右に質問、選択肢、すぐに始められるプリセット、配色の選択、その下に共有用のリンク。',
          ko: '색상을 네온으로 하고 선택지 여섯 개를 넣은 Dreh das Rad: 왼쪽에는 바늘이 달린 룰렛과 돌리기 버튼, 오른쪽에는 질문, 선택지, 빠른 시작 프리셋, 색상 선택, 그 아래에 공유 링크.'
        }
      },
      {
        file: 'rad-dreh.webp', w: 360, h: 360, still: 'rad-dreh-still.webp',
        alt: {
          de: 'Ein Dreh am Rad mit sechs Essens-Optionen, der bei Pizza stehen bleibt: die Lampen am Rand gehen an und Konfetti fällt.',
          en: 'A spin of the wheel with six food options that stops on pizza: the lights around the rim come on and confetti falls.',
          es: 'Un giro de la ruleta con seis opciones de comida: se detiene en la pizza, se encienden las luces del borde y cae confeti.',
          fr: 'La roue tourne avec six options de repas et s’arrête sur la pizza : les lumières du pourtour s’allument et des confettis tombent.',
          it: 'Un giro di ruota con sei opzioni di cibo: si ferma sulla pizza, le luci lungo il bordo si accendono e cadono i coriandoli.',
          nl: 'Het rad met zes etensopties draait en blijft op pizza staan: de lampjes rond de rand gaan aan en er valt confetti.',
          pl: 'Koło z sześcioma opcjami jedzenia kręci się i zatrzymuje na pizzy: na obrzeżu zapalają się światełka i sypie się konfetti.',
          pt: 'A roda com seis opções de comida a girar até parar na pizza: acendem-se as luzes à volta do aro e caem confetes.',
          tr: 'Altı yemek seçenekli çark dönüyor ve pizzada duruyor: kenardaki ışıklar yanıyor, konfeti yağıyor.',
          ru: 'Колесо с шестью вариантами еды крутится и останавливается на пицце: загораются огоньки по ободу и падает конфетти.',
          hi: 'खाने के छह विकल्पों वाला पहिया घूमकर पिज़्ज़ा पर रुकता है: किनारे की बत्तियाँ जल उठती हैं और कंफ़ेटी गिरती है।',
          zh: '写着六种食物的转盘转了一次，停在披萨上：边缘的一圈灯亮了起来，五彩纸屑纷纷飘落。',
          ja: '食べ物の選択肢6つでルーレットを回すと、ピザで止まります: 縁のライトが灯り、紙吹雪が舞い落ちます。',
          ko: '음식 선택지 여섯 개로 룰렛을 돌리자 피자에서 멈춥니다: 가장자리의 전구가 켜지고 색종이 조각이 흩날립니다.'
        }
      }
    ],
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
      ],
      es: [
        'Escribe la pregunta y debajo las opciones, una por línea. «Papá cocina x3» ocupa tres casillas en vez de una.',
        'Haz clic en «Girar», lanza la ruleta con el ratón o con el dedo, o pulsa la barra espaciadora.',
        'Quita al ganador de la ruleta y sigue girando: así se sortea todo un orden. O pasa el enlace con la pregunta y las opciones.'
      ],
      fr: [
        'Saisir la question et, en dessous, les options ligne par ligne. « Papa cuisine x3 » occupe trois cases au lieu d’une.',
        'Cliquer sur « Tourner », lancer la roue à la souris ou au doigt, ou appuyer sur la barre d’espace.',
        'Retirer le gagnant de la roue et continuer à tourner — c’est ainsi qu’on tire au sort tout un ordre de passage. Ou transmettre le lien avec la question et les options.'
      ],
      it: [
        'Scrivi la domanda e sotto le opzioni, una per riga. «Papà cucina x3» occupa tre caselle invece di una.',
        'Fai clic su «Gira», lancia la ruota con il mouse o con il dito, oppure premi la barra spaziatrice.',
        'Togli il vincitore dalla ruota e continua a girare: così si sorteggia un ordine intero. Oppure passa ad altri il link con domanda e opzioni.'
      ],
      nl: [
        'Vul de vraag in en zet de opties er regel voor regel onder. “Papa kookt x3” bezet drie vakken in plaats van één.',
        'Klik op “Draaien”, zwengel het rad met muis of vinger aan, of druk op de spatiebalk.',
        'Haal de winnaar van het rad en draai verder — zo lot je een hele volgorde uit. Of geef de link met vraag en opties door.'
      ],
      pl: [
        'Wpisać pytanie, a pod nim opcje, po jednej w wierszu. „Tata gotuje x3” zajmuje trzy pola zamiast jednego.',
        'Kliknąć „Zakręć”, wprawić koło w ruch myszą albo palcem, albo nacisnąć spację.',
        'Zdjąć zwycięzcę z koła i kręcić dalej — tak losuje się całą kolejność. Albo przekazać dalej link z pytaniem i opcjami.'
      ],
      pt: [
        'Escrever a pergunta e, por baixo, as opções, uma por linha. «O pai cozinha x3» ocupa três fatias em vez de uma.',
        'Clicar em «Girar», atirar a roda com o rato ou com o dedo, ou carregar na barra de espaços.',
        'Tirar o vencedor da roda e continuar a girar — é assim que se sorteia uma ordem inteira. Ou passar a outros o link com a pergunta e as opções.'
      ],
      tr: [
        'Soruyu yazın, seçenekleri de altına satır satır. “Babam yemek yapıyor x3” bir dilim yerine üç dilim kaplar.',
        '“Çevir” düğmesine tıklayın, çarkı fareyle ya da parmakla fırlatın veya boşluk tuşuna basın.',
        'Kazananı çarktan alıp çevirmeyi sürdürün — bütün bir sıralama böyle kurayla belirlenir. Ya da soruyu ve seçenekleri taşıyan bağlantıyı iletin.'
      ],
      ru: [
        'Впишите вопрос, а под ним варианты — по одному в строке. «Папа готовит x3» займёт три сектора вместо одного.',
        'Нажмите «Крутить», раскрутите колесо мышью или пальцем — или воспользуйтесь клавишей пробела.',
        'Снимите победителя с колеса и крутите дальше — так разыгрывают целую очерёдность. Или передайте ссылку с вопросом и вариантами.'
      ],
      hi: [
        'सवाल दर्ज करें और उसके नीचे विकल्प, हर पंक्ति में एक। “पापा खाना बनाएँगे x3” पहिए के एक के बजाय तीन हिस्से घेरता है।',
        '“घुमाएँ” पर क्लिक करें, पहिए को माउस या उँगली से धकेलें, या स्पेस बार दबाएँ।',
        'विजेता को पहिए से हटाएँ और आगे घुमाते रहें — इस तरह पूरा क्रम निकाला जाता है। या सवाल और विकल्पों वाला लिंक आगे दे दें।'
      ],
      zh: [
        '填上问题，下面一行一个地写选项。“爸爸做饭 x3”会占三个扇区，而不是一个。',
        '点击“转动”，用鼠标或手指甩一下转盘，或者按空格键。',
        '把赢家从转盘上拿掉再接着转——这样就能抽出一整个顺序。或者把带着问题和选项的链接传出去。'
      ],
      ja: [
        '質問を入力し、その下に選択肢を1行ずつ書きます。「パパが料理 x3」と書くと、1マスではなく3マス分になります。',
        '「回す」をクリックするか、マウスや指でルーレットを弾くか、スペースキーを押します。',
        '当たった選択肢をルーレットから外して回し続けます — こうすると順番をまるごとくじで決められます。あるいは、質問と選択肢の入ったリンクを渡すこともできます。'
      ],
      ko: [
        '질문을 적고 그 아래에 선택지를 한 줄에 하나씩 적습니다. “아빠가 요리 x3”은 한 칸이 아니라 세 칸을 차지합니다.',
        '“돌리기”를 누르거나, 마우스나 손가락으로 룰렛을 튕기거나, 스페이스바를 누릅니다.',
        '당첨된 것을 룰렛에서 빼고 계속 돌립니다 — 그렇게 순서 전체를 뽑습니다. 아니면 질문과 선택지가 담긴 링크를 건네줍니다.'
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
      ],
      es: [
        'Como mucho 100 casillas, y la pregunta puede tener 90 caracteres. Por encima de eso, la aplicación avisa y deja fuera el resto.',
        'La pantalla completa solo existe donde el navegador la admite; en el iPhone, por ejemplo, no, y entonces el botón ni siquiera se muestra.',
        'La lista «Últimos giros» está solo en la memoria y desaparece al cerrar. La pregunta, las opciones y la gama de colores, en cambio, se quedan guardadas en el navegador.',
        'Con listas de opciones muy largas, el enlace ya no cabe en un código QR. El mensaje que sale es de momento engañoso: habla de copiar en lugar de la longitud.'
      ],
      fr: [
        '100 cases au maximum, et la question peut faire 90 caractères. Au-delà, l’application le signale et laisse tomber le reste.',
        'Le plein écran n’existe que là où le navigateur le prend en charge — pas sur l’iPhone, par exemple ; le bouton n’est alors même pas affiché.',
        'La liste « Derniers tours » n’est qu’en mémoire vive et disparaît une fois la page fermée. La question, les options et le jeu de couleurs, en revanche, restent enregistrés dans le navigateur.',
        'Avec des listes d’options très longues, le lien n’entre plus dans un code QR. Le message correspondant est actuellement trompeur — il parle de copie plutôt que de longueur.'
      ],
      it: [
        'Al massimo 100 caselle, e la domanda può essere lunga 90 caratteri. Oltre, l’app lo segnala e tralascia il resto.',
        'Lo schermo intero c’è solo là dove il browser lo sa fare: su iPhone per esempio no; il pulsante allora non viene proprio mostrato.',
        'L’elenco «Ultimi giri» si trova solo nella memoria volatile e va perso alla chiusura. Domanda, opzioni e mondo di colori restano invece salvati nel browser.',
        'Con elenchi di opzioni molto lunghi il link non entra più in un codice QR. Al momento il messaggio relativo è fuorviante: parla di copia invece che di lunghezza.'
      ],
      nl: [
        'Hoogstens 100 vakken, en de vraag mag 90 tekens lang zijn. Daarboven waarschuwt de app en laat de rest weg.',
        'Volledig scherm is er alleen waar de browser het aankan — op de iPhone bijvoorbeeld niet; de knop wordt dan helemaal niet getoond.',
        'De lijst “Laatste draaibeurten” staat alleen in het werkgeheugen en is na het sluiten weg. Vraag, opties en kleurenschema blijven daarentegen in de browser bewaard.',
        'Bij heel lange optielijsten past de link niet meer in een QR-code. De melding daarover is op dit moment misleidend — die spreekt over kopiëren in plaats van over de lengte.'
      ],
      pl: [
        'Najwyżej 100 pól, a pytanie może mieć 90 znaków. Powyżej aplikacja zwraca na to uwagę i resztę pomija.',
        'Pełny ekran istnieje tylko tam, gdzie przeglądarka go obsługuje — na iPhonie na przykład nie; przycisk nie jest wtedy w ogóle pokazywany.',
        'Lista „Ostatnie losowania” jest tylko w pamięci roboczej i po zamknięciu przepada. Pytanie, opcje i kolorystyka zostają natomiast zapisane w przeglądarce.',
        'Przy bardzo długich listach opcji link nie mieści się już w kodzie QR. Komunikat o tym jest obecnie mylący — mówi o kopiowaniu zamiast o długości.'
      ],
      pt: [
        'No máximo 100 fatias, e a pergunta pode ter 90 caracteres. Acima disso, a aplicação avisa e deixa o resto de fora.',
        'Ecrã inteiro só existe onde o navegador o suporta — no iPhone, por exemplo, não; nesse caso o botão nem sequer chega a ser mostrado.',
        'A lista «Últimos giros» fica apenas na memória e desaparece quando se fecha a página. Já a pergunta, as opções e o mundo de cores ficam guardados no navegador.',
        'Com listas de opções muito longas, o link deixa de caber num código QR. A mensagem que aparece é, de momento, enganadora — fala de copiar em vez de falar do comprimento.'
      ],
      tr: [
        'En fazla 100 dilim, soru ise 90 karakter olabilir. Bunun üzerinde uygulama uyarır ve fazlasını almaz.',
        'Tam ekran yalnızca tarayıcının desteklediği yerlerde vardır — örneğin iPhone’da yoktur; düğme o zaman hiç gösterilmez.',
        '“Son dönüşler” listesi yalnızca çalışma belleğindedir ve sayfayı kapattığınızda gider. Soru, seçenekler ve renk dünyası ise tarayıcıda kayıtlı kalır.',
        'Çok uzun seçenek listelerinde bağlantı artık bir QR koduna sığmaz. Bununla ilgili ileti şu an yanıltıcıdır — uzunluktan değil, kopyalamaktan söz eder.'
      ],
      ru: [
        'Не больше 100 вариантов, а вопрос может быть длиной до 90 символов. Всё, что сверх этого, приложение отбрасывает, предупредив об этом.',
        'Полный экран есть только там, где браузер это умеет — на iPhone, например, нет; кнопка тогда даже не показывается.',
        'Список «Последние вращения» хранится только в оперативной памяти и после закрытия пропадает. А вопрос, варианты и цветовая гамма остаются сохранёнными в браузере.',
        'При очень длинных списках вариантов ссылка больше не помещается в QR-код. Сообщение об этом сейчас сбивает с толку — оно говорит о копировании, а не о длине.'
      ],
      hi: [
        'ज़्यादा से ज़्यादा 100 हिस्से, और सवाल 90 वर्ण तक लंबा हो सकता है। इससे ऊपर ऐप बता देती है और बाक़ी छोड़ देती है।',
        'पूरी स्क्रीन केवल वहीं मिलती है जहाँ ब्राउज़र उसका समर्थन करता है — जैसे iPhone पर नहीं; तब बटन दिखाया ही नहीं जाता।',
        '“पिछले घुमाव” की सूची केवल मेमोरी (रैम) में रहती है और पेज बंद करते ही चली जाती है। सवाल, विकल्प और रंग-संसार इसके उलट ब्राउज़र में सहेजे रहते हैं।',
        'बहुत लंबी विकल्प-सूचियों पर लिंक QR कोड में नहीं समाता। इसका संदेश फ़िलहाल भ्रामक है — वह लंबाई के बजाय कॉपी करने की बात करता है।'
      ],
      zh: [
        '最多 100 个扇区，问题最长 90 个字符。超出的部分应用会提示你，并把多余的舍掉。',
        '全屏只在浏览器支持它的地方才有——比如 iPhone 上就没有；那时按钮根本不会显示出来。',
        '“最近几次转动”这个列表只待在内存里，页面一关就没了。而问题、选项和配色则会保存在浏览器中。',
        '选项列表非常长时，链接就塞不进二维码了。目前配套的那条提示有误导性——它说的是复制，而不是长度。'
      ],
      ja: [
        'マスは最大100個、質問は90文字までです。それを超えるとアプリが知らせて、残りは落とします。',
        '全画面表示はブラウザーが対応している場所にだけあります — たとえば iPhone にはありません。その場合はボタン自体がそもそも表示されません。',
        '「最近のスピン」の一覧はメモリの中だけにあり、閉じると消えます。一方、質問・選択肢・配色はブラウザーに保存されたまま残ります。',
        '選択肢の一覧がとても長いと、リンクが QR コードに収まらなくなります。そのときのメッセージは今のところ誤解を招くものです — 長さのことではなく、コピーのことを言っています。'
      ],
      ko: [
        '칸은 최대 100개이고 질문은 90자까지입니다. 그것을 넘으면 앱이 알려 주고 나머지는 버립니다.',
        '전체 화면은 브라우저가 지원하는 곳에만 있습니다 — 예를 들어 iPhone에는 없으며, 그럴 때는 버튼이 아예 표시되지 않습니다.',
        '“최근 스핀” 목록은 메모리에만 있고 창을 닫으면 사라집니다. 반면 질문, 선택지, 색 구성은 브라우저에 저장된 채 남습니다.',
        '선택지 목록이 아주 길면 링크가 더 이상 QR 코드에 들어가지 않습니다. 이때 나오는 메시지는 지금으로서는 오해를 부릅니다 — 길이가 아니라 복사 이야기를 하기 때문입니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/dreh-das-rad/blob/main/README.md'
    }
  },

  zaehlwerk: {
    purpose: {
      de: 'Claude Code legt für jede Sitzung ein Protokoll auf der Festplatte an. Zählwerk liest diese Dateien und rechnet aus, wohin der Verbrauch geht: welcher Tag, welches Modell, welches Projekt, welche Uhrzeit. Gerechnet wird im Browser — die Protokolle werden nirgendwohin geschickt.',
      en: 'Claude Code writes a log for every session onto your disk. Zählwerk reads those files and works out where your usage goes: which day, which model, which project, which hour. All computation happens in the browser — the logs are never sent anywhere.',
      es: 'Claude Code crea en el disco duro un registro para cada sesión. Zählwerk lee esos archivos y calcula a dónde va el consumo: qué día, qué modelo, qué proyecto, qué hora. El cálculo ocurre en el navegador: los registros no se envían a ninguna parte.',
      fr: 'Claude Code dépose sur le disque dur un journal pour chaque session. Zählwerk lit ces fichiers et calcule où passe la consommation : quel jour, quel modèle, quel projet, quelle heure. Le calcul se fait dans le navigateur — les journaux ne sont envoyés nulle part.',
      it: 'Claude Code crea un registro per ogni sessione sul disco. Zählwerk legge questi file e calcola dove va il consumo: quale giorno, quale modello, quale progetto, quale ora. Il calcolo avviene nel browser: i registri non vengono mandati da nessuna parte.',
      nl: 'Claude Code legt voor elke sessie een logbestand op de harde schijf aan. Zählwerk leest die bestanden en rekent uit waar het verbruik naartoe gaat: welke dag, welk model, welk project, welk uur. Er wordt in de browser gerekend — de logbestanden worden nergens naartoe gestuurd.',
      pl: 'Claude Code zapisuje na dysku twardym log każdej sesji. Zählwerk czyta te pliki i wylicza, dokąd idzie zużycie: który dzień, który model, który projekt, która godzina. Liczenie odbywa się w przeglądarce — logi nie są nigdzie wysyłane.',
      pt: 'O Claude Code cria no disco um registo para cada sessão. O Zählwerk lê esses ficheiros e calcula para onde vai o consumo: que dia, que modelo, que projeto, que hora. O cálculo é feito no navegador — os registos não são enviados para lado nenhum.',
      tr: 'Claude Code her oturum için sabit diske bir kayıt dosyası yazar. Zählwerk bu dosyaları okur ve tüketimin nereye gittiğini hesaplar: hangi gün, hangi model, hangi proje, hangi saat. Hesaplama tarayıcıda yapılır — kayıtlar hiçbir yere gönderilmez.',
      ru: 'Claude Code заводит для каждой сессии журнал на жёстком диске. Zählwerk читает эти файлы и рассчитывает, куда уходит расход: какой день, какая модель, какой проект, какой час. Считается в браузере — журналы никуда не отправляются.',
      hi: 'Claude Code हर सत्र के लिए हार्ड डिस्क पर एक लॉग लिखता है। Zählwerk इन फ़ाइलों को पढ़कर हिसाब लगाता है कि खपत कहाँ जाती है: कौन-सा दिन, कौन-सा मॉडल, कौन-सा प्रोजेक्ट, कौन-सा समय। गणना ब्राउज़र में होती है — लॉग कहीं नहीं भेजे जाते।',
      zh: 'Claude Code 会为每一次会话在硬盘上写下一份日志。Zählwerk 读取这些文件，算出用量都花在哪里：哪一天、哪个模型、哪个项目、哪个钟点。计算是在浏览器里进行的——日志不会被送到任何地方。',
      ja: 'Claude Code はセッションごとにログをハードディスクに置きます。Zählwerk はそのファイルを読んで、使用量がどこに行っているかを計算します: どの日、どのモデル、どのプロジェクト、どの時刻か。計算はブラウザーの中で行われます — ログはどこにも送られません。',
      ko: 'Claude Code는 세션마다 하드디스크에 기록을 남깁니다. Zählwerk은 그 파일들을 읽어 사용량이 어디로 가는지 계산합니다: 어느 날, 어느 모델, 어느 프로젝트, 몇 시. 계산은 브라우저 안에서 이루어집니다 — 기록은 어디로도 보내지지 않습니다.'
    },
    shots: [
      {
        file: 'zaehlwerk-de.webp', w: 1430, h: 1304,
        alt: {
          de: 'Zählwerk vor dem ersten Einlesen: die Fläche, auf die man den Ordner zieht oder über die man ihn auswählt, darunter, wo dieser Ordner unter Windows und unter macOS oder Linux liegt, und der Hinweis auf den Zählwerk Ticker.',
          en: 'Zählwerk before the first import: the area you drag the folder onto or click to pick it, below it where that folder lives on Windows and on macOS or Linux, and the pointer to Zählwerk Ticker.',
          es: 'Zählwerk antes de la primera lectura: la zona a la que arrastras la carpeta o en la que haces clic para elegirla; debajo, dónde está esa carpeta en Windows y en macOS o Linux, y la referencia a Zählwerk Ticker.',
          fr: 'Zählwerk avant la première lecture : la zone sur laquelle vous déposez le dossier ou cliquez pour le choisir ; en dessous, l’emplacement de ce dossier sous Windows et sous macOS ou Linux, et le renvoi vers Zählwerk Ticker.',
          it: 'Zählwerk prima di leggere i registri: l’area su cui trascini la cartella o fai clic per sceglierla; sotto, dove si trova quella cartella su Windows e su macOS o Linux, e il rimando a Zählwerk Ticker.',
          nl: 'Zählwerk vóór het eerste inlezen: het vlak waar je de map naartoe sleept of waarop je klikt om hem te kiezen, daaronder waar die map staat onder Windows en onder macOS of Linux, en de verwijzing naar de Zählwerk Ticker.',
          pl: 'Zählwerk przed pierwszym wczytaniem: pole, na które przeciągasz folder albo klikasz, żeby go wybrać, pod nim informacja, gdzie ten folder znajduje się w Windows oraz w macOS lub Linuksie, i odnośnik do programu Zählwerk Ticker.',
          pt: 'O Zählwerk antes da primeira leitura: a área para onde se arrasta a pasta ou onde se clica para a escolher; por baixo, onde fica essa pasta no Windows e no macOS ou Linux, e a referência ao Zählwerk Ticker.',
          tr: 'Zählwerk, kayıtlar ilk kez okunmadan önce: klasörü sürükleyip bırakacağınız ya da tıklayıp seçeceğiniz alan, altında bu klasörün Windows’ta ve macOS ya da Linux’ta nerede olduğu, bir de Zählwerk Ticker’a yönlendirme.',
          ru: 'Zählwerk до первого чтения журналов: поле, на которое перетаскивают папку или нажимают, чтобы её выбрать, ниже — где эта папка находится в Windows и в macOS или Linux, и указание на Zählwerk Ticker.',
          hi: 'पहली बार लॉग पढ़ने से पहले Zählwerk: वह जगह जहाँ फ़ोल्डर खींचकर छोड़ें या क्लिक करके चुनें, नीचे यह कि Windows पर और macOS या Linux पर वह फ़ोल्डर कहाँ है, और Zählwerk Ticker की ओर इशारा।',
          zh: '首次读取之前的 Zählwerk：把文件夹拖进来或点击选择的区域，下面是这个文件夹在 Windows 以及 macOS 或 Linux 上的位置，还有关于 Zählwerk Ticker 的提示。',
          ja: '最初の読み込み前の Zählwerk: フォルダーをドロップするかクリックして選ぶ枠、その下に Windows と macOS または Linux でのフォルダーの場所、そして Zählwerk Ticker への案内。',
          ko: '처음 불러오기 전의 Zählwerk: 폴더를 끌어다 놓거나 클릭해서 고르는 영역, 그 아래에 Windows와 macOS 또는 Linux에서 그 폴더가 있는 곳, 그리고 Zählwerk Ticker 안내.'
        }
      },
      {
        file: 'zaehlwerk-ticker-de.webp', w: 448, h: 424,
        alt: {
          de: 'Der Zählwerk Ticker, die schwebende Anzeige für Windows: der laufende Fünf-Stunden-Block mit der Zeit bis zu seinem Ende, die Tagessumme mit der Zahl der Antworten und der Verbrauch je Modell.',
          en: 'Zählwerk Ticker, the floating readout for Windows: the current five-hour block with the time until it ends, today’s total with the number of replies, and usage per model.',
          es: 'Zählwerk Ticker, el indicador flotante para Windows: el bloque de cinco horas en curso con el tiempo que falta para que termine, el total del día con el número de respuestas y el consumo por modelo.',
          fr: 'Zählwerk Ticker, l’affichage flottant pour Windows : le bloc de cinq heures en cours avec le temps restant avant sa fin, le total du jour avec le nombre de réponses, et la consommation par modèle.',
          it: 'Zählwerk Ticker, il riquadro flottante per Windows: il blocco di cinque ore in corso con il tempo che manca alla fine, il totale del giorno con il numero di risposte e il consumo per modello.',
          nl: 'De Zählwerk Ticker, de zwevende uitlezing voor Windows: het lopende blok van vijf uur met de tijd tot het afloopt, het dagtotaal met het aantal antwoorden en het verbruik per model.',
          pl: 'Zählwerk Ticker, pływające okienko dla Windows: bieżący blok pięciogodzinny z czasem do jego końca, dzienna suma z liczbą odpowiedzi i zużycie według modelu.',
          pt: 'O Zählwerk Ticker, o mostrador flutuante para Windows: o bloco de cinco horas em curso com o tempo até terminar, o total do dia com o número de respostas e o consumo por modelo.',
          tr: 'Zählwerk Ticker, Windows için yüzen gösterge: o anki beş saatlik blok ve bitmesine kalan süre, yanıt sayısıyla günlük toplam ve model başına tüketim.',
          ru: 'Zählwerk Ticker, плавающее окошко для Windows: текущий пятичасовой блок со временем до его конца, итог за сегодня с числом ответов и расход по моделям.',
          hi: 'Zählwerk Ticker, Windows के लिए तैरता हुआ पैनल: चालू पाँच घंटे का ब्लॉक और उसके ख़त्म होने तक बचा समय, उत्तरों की संख्या के साथ आज का जोड़, और हर मॉडल की खपत।',
          zh: 'Zählwerk Ticker，Windows 上的悬浮小窗：当前的五小时区块及其结束前的剩余时间，当日合计和回复次数，以及各模型的用量。',
          ja: 'Zählwerk Ticker、Windows 用の浮動表示: 進行中の5時間ブロックと終わるまでの残り時間、今日の合計と応答の数、そしてモデルごとの使用量。',
          ko: 'Zählwerk Ticker, Windows용 떠 있는 표시창: 진행 중인 다섯 시간 블록과 끝날 때까지 남은 시간, 오늘 합계와 응답 수, 그리고 모델별 사용량.'
        }
      }
    ],
    steps: {
      de: [
        'Auf die Fläche klicken und den Ordner auswählen: unter Windows %USERPROFILE%\\.claude\\projects, sonst ~/.claude/projects. Er ist versteckt — den Pfad einfach oben in die Adresszeile des Auswahlfensters eintippen.',
        'Kurz warten. Der Balken zeigt, wie viele Dateien schon gelesen sind; bei einigen hundert Megabyte dauert das ein paar Sekunden.',
        'Oben stehen die vier Kennzahlen, darunter die Aufschlüsselungen. Jeder Bereich hat ein Fragezeichen, das erklärt, wie er zu lesen ist.'
      ],
      en: [
        'Click the panel and pick the folder: on Windows %USERPROFILE%\\.claude\\projects, otherwise ~/.claude/projects. It is hidden — just type the path into the address bar of the file dialog.',
        'Wait a moment. The bar shows how many files have been read; with a few hundred megabytes this takes a couple of seconds.',
        'The four headline figures sit at the top, the breakdowns below. Every section has a question mark explaining how to read it.'
      ],
      es: [
        'Haz clic en la zona indicada y elige la carpeta: en Windows %USERPROFILE%\\.claude\\projects, en los demás sistemas ~/.claude/projects. Está oculta: escribe simplemente la ruta arriba, en la barra de direcciones de la ventana de selección.',
        'Espera un momento. La barra muestra cuántos archivos se han leído ya; con unos cientos de megabytes eso tarda unos segundos.',
        'Arriba están las cuatro cifras clave y debajo los desgloses. Cada apartado tiene un signo de interrogación que explica cómo hay que leerlo.'
      ],
      fr: [
        'Cliquer sur la zone et choisir le dossier : sous Windows %USERPROFILE%\\.claude\\projects, sinon ~/.claude/projects. Il est caché — taper simplement le chemin en haut, dans la barre d’adresse de la fenêtre de sélection.',
        'Patienter un instant. La barre indique combien de fichiers sont déjà lus ; avec quelques centaines de mégaoctets, cela prend quelques secondes.',
        'En haut figurent les quatre indicateurs, en dessous les ventilations. Chaque section a un point d’interrogation qui explique comment la lire.'
      ],
      it: [
        'Fai clic sull’area e scegli la cartella: su Windows %USERPROFILE%\\.claude\\projects, altrimenti ~/.claude/projects. È nascosta: digita semplicemente il percorso in alto, nella barra degli indirizzi della finestra di scelta.',
        'Aspetta un momento. La barra mostra quanti file sono già stati letti; con qualche centinaio di megabyte ci vogliono un paio di secondi.',
        'In alto ci sono i quattro valori principali, sotto le suddivisioni. Ogni sezione ha un punto interrogativo che spiega come si legge.'
      ],
      nl: [
        'Klik op het vlak en kies de map: onder Windows %USERPROFILE%\\.claude\\projects, anders ~/.claude/projects. Hij is verborgen — typ het pad gewoon bovenin de adresbalk van het keuzevenster.',
        'Wacht even. De balk laat zien hoeveel bestanden al gelezen zijn; bij een paar honderd megabyte duurt dat een paar seconden.',
        'Bovenaan staan de vier kengetallen, daaronder de uitsplitsingen. Elk onderdeel heeft een vraagteken dat uitlegt hoe je het moet lezen.'
      ],
      pl: [
        'Kliknąć w pole i wybrać folder: pod Windows %USERPROFILE%\\.claude\\projects, inaczej ~/.claude/projects. Jest ukryty — po prostu wpisać ścieżkę na górze, w pasku adresu okna wyboru.',
        'Chwilę poczekać. Pasek pokazuje, ile plików jest już przeczytanych; przy kilkuset megabajtach trwa to parę sekund.',
        'Na górze są cztery kluczowe liczby, pod nimi szczegółowe zestawienia. Każdy obszar ma znak zapytania, który wyjaśnia, jak go czytać.'
      ],
      pt: [
        'Clicar na área e escolher a pasta: no Windows %USERPROFILE%\\.claude\\projects, caso contrário ~/.claude/projects. Ela está escondida — basta escrever o caminho em cima, na barra de endereço da janela de seleção.',
        'Esperar um pouco. A barra mostra quantos ficheiros já foram lidos; com algumas centenas de megabytes isto demora alguns segundos.',
        'Em cima estão os quatro indicadores, por baixo os detalhes por categoria. Cada área tem um ponto de interrogação que explica como deve ser lida.'
      ],
      tr: [
        'Alana tıklayın ve klasörü seçin: Windows’ta %USERPROFILE%\\.claude\\projects, diğer sistemlerde ~/.claude/projects. Klasör gizlidir — yolu, seçim penceresinin üstündeki adres satırına yazmanız yeterlidir.',
        'Kısa bir süre bekleyin. Çubuk kaç dosyanın okunduğunu gösterir; birkaç yüz megabaytta bu birkaç saniye sürer.',
        'Yukarıda dört ana gösterge, altında dökümler durur. Her bölümde, o bölümün nasıl okunacağını açıklayan bir soru işareti var.'
      ],
      ru: [
        'Нажмите на поле и выберите папку: в Windows %USERPROFILE%\\.claude\\projects, иначе ~/.claude/projects. Она скрытая — просто впишите путь наверху в адресную строку окна выбора.',
        'Немного подождите. Полоса показывает, сколько файлов уже прочитано; при нескольких сотнях мегабайт это занимает пару секунд.',
        'Наверху — четыре ключевых показателя, под ними разбивки. У каждого раздела есть вопросительный знак, который объясняет, как его читать.'
      ],
      hi: [
        'इस जगह पर क्लिक करें और फ़ोल्डर चुनें: Windows पर %USERPROFILE%\\.claude\\projects, वरना ~/.claude/projects। वह छिपा हुआ है — चयन विंडो की ऊपर वाली पता-पट्टी में बस यह पथ टाइप कर दें।',
        'थोड़ा रुकें। पट्टी दिखाती है कि कितनी फ़ाइलें पढ़ी जा चुकी हैं; कुछ सौ मेगाबाइट पर इसमें कुछ सेकंड लगते हैं।',
        'ऊपर चार मुख्य आँकड़े हैं, उनके नीचे ब्योरे। हर हिस्से पर एक प्रश्नचिह्न है, जो बताता है कि उसे कैसे पढ़ा जाए।'
      ],
      zh: [
        '点击那块区域并选择文件夹：在 Windows 上是 %USERPROFILE%\\.claude\\projects，其他系统是 ~/.claude/projects。它是隐藏的——直接把路径打进选择窗口上方的地址栏就行。',
        '稍等一会儿。进度条会显示已经读了多少文件；有几百兆字节时，这要花上几秒钟。',
        '上面是四个关键数字，下面是各项细分。每个区块都有一个问号，解释它该怎么读。'
      ],
      ja: [
        '枠をクリックしてフォルダーを選びます: Windows では %USERPROFILE%\\.claude\\projects、それ以外では ~/.claude/projects です。隠しフォルダーなので、選択ウィンドウの上のアドレス欄にパスをそのまま打ち込んでください。',
        '少し待ちます。バーが、すでに読み込まれたファイルの数を示します。数百メガバイトあると数秒かかります。',
        '上に4つの主要な数値が、その下に内訳が並びます。どのセクションにも、読み方を説明する疑問符が付いています。'
      ],
      ko: [
        '영역을 눌러 폴더를 고릅니다: Windows에서는 %USERPROFILE%\\.claude\\projects, 그 밖에는 ~/.claude/projects. 숨김 폴더이므로, 선택 창 위쪽 주소 표시줄에 경로를 그대로 입력하면 됩니다.',
        '잠시 기다립니다. 막대가 파일을 몇 개나 읽었는지 보여 줍니다. 수백 메가바이트라면 몇 초쯤 걸립니다.',
        '위에는 네 가지 핵심 수치가, 그 아래에는 세부 분류가 있습니다. 각 영역에는 어떻게 읽어야 하는지 설명해 주는 물음표가 있습니다.'
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
      ],
      es: [
        'NO hay indicación de porcentaje ni ninguna referencia a tu cupo restante. Cuánto te queda sencillamente no está en estos archivos: Zählwerk solo puede contar lo que se ha consumido.',
        'NO hay indicación de costes. En los registros no hay precios y, con la suscripción, Claude Code no cuesta nada adicional de todos modos. Un importe en euros sería inventado.',
        'Se cuenta exclusivamente Claude Code. Lo que haces en claude.ai en el navegador no aparece aquí: para eso no hay registros en el disco duro.',
        'En los registros está cada palabra de cada conversación. Zählwerk lee de ellos únicamente las líneas de facturación y nunca muestra contenidos de conversación; quien quiera comprobarlo abre las herramientas de desarrollo: aparte de la propia página y del contador de visitas no sale ninguna petición.',
        'El formato de archivo no está documentado por Anthropic. Si cambia, Zählwerk mostrará demasiado poco o ya nada. Entonces la única solución es una versión nueva.',
        'La selección de carpeta necesita un navegador que acepte carpetas enteras: Chrome, Edge y Firefox pueden hacerlo; en el iPhone no funciona.'
      ],
      fr: [
        'Il n’y a AUCUN affichage en pourcentage et aucune indication sur votre quota restant. Ce qui vous reste encore ne figure tout simplement pas dans ces fichiers — Zählwerk ne peut compter que ce qui a été consommé.',
        'Il n’y a AUCUNE indication de coût. Les journaux ne contiennent pas de prix, et avec un abonnement, Claude Code ne coûte de toute façon rien de plus. Un montant en euros serait inventé.',
        'Seul Claude Code est compté. Ce que vous faites sur claude.ai dans le navigateur n’apparaît pas ici — il n’existe pas de journaux pour cela sur le disque dur.',
        'Dans les journaux figure chaque mot de chaque conversation. Zählwerk n’en lit que les lignes de décompte et n’affiche jamais de contenu de conversation — pour le vérifier, il suffit d’ouvrir les outils de développement : hormis la page elle-même et le compteur de visites, aucune requête ne sort.',
        'Le format de fichier n’est pas documenté par Anthropic. S’il change, Zählwerk affichera trop peu, voire plus rien du tout. Seule une nouvelle version aide alors.',
        'La sélection de dossier exige un navigateur qui accepte des dossiers entiers — Chrome, Edge et Firefox le peuvent, sur l’iPhone cela ne marche pas.'
      ],
      it: [
        'NON c’è nessuna indicazione in percentuale e nessun accenno al tuo contingente rimanente. In questi file semplicemente non c’è scritto quanto ti spetta ancora: Zählwerk può contare solo quello che è stato consumato.',
        'NON c’è nessuna indicazione di costo. Nei registri non ci sono prezzi, e con l’abbonamento Claude Code non costa comunque niente in più. Un importo in euro sarebbe inventato.',
        'Viene contato esclusivamente Claude Code. Quello che fai su claude.ai nel browser qui non compare: sul disco non ci sono registri per questo.',
        'Nei registri c’è ogni parola di ogni conversazione. Zählwerk ne legge solo le righe di conteggio e non mostra mai contenuti delle conversazioni: chi lo vuole verificare apre gli strumenti per sviluppatori — a parte la pagina stessa e il contatore delle visite non esce nessuna richiesta.',
        'Il formato dei file non è documentato da Anthropic. Se cambia, Zählwerk mostra troppo poco o non mostra più niente. In quel caso serve solo una nuova versione.',
        'La scelta della cartella richiede un browser che accetti cartelle intere: Chrome, Edge e Firefox ci riescono, su iPhone non funziona.'
      ],
      nl: [
        'Er is GEEN percentageweergave en geen aanwijzing over je resterende tegoed. Hoeveel je nog tegoed hebt, staat simpelweg niet in deze bestanden — Zählwerk kan alleen tellen wat verbruikt is.',
        'Er is GEEN kostenopgave. In de logbestanden staan geen prijzen, en binnen het abonnement kost Claude Code sowieso niets extra. Een bedrag in euro zou verzonnen zijn.',
        'Er wordt uitsluitend Claude Code geteld. Wat je op claude.ai in de browser doet, duikt hier niet op — daarvoor staan er geen logbestanden op de harde schijf.',
        'In de logbestanden staat elk woord van elk gesprek. Zählwerk leest daarvan alleen de afrekenregels en toont nooit gespreksinhoud — wie dat wil nagaan, opent de ontwikkelaarstools: behalve de pagina zelf en de bezoekersteller gaat er geen enkel verzoek naar buiten.',
        'Het bestandsformaat is door Anthropic niet gedocumenteerd. Verandert het, dan laat Zählwerk te weinig zien of helemaal niets meer. Dan helpt alleen een nieuwe versie.',
        'De mapkeuze heeft een browser nodig die hele mappen aanneemt — Chrome, Edge en Firefox kunnen dat, op de iPhone lukt het niet.'
      ],
      pl: [
        'NIE MA wskazania procentowego ani informacji o twoim pozostałym limicie. Ile ci jeszcze przysługuje, po prostu nie ma w tych plikach — Zählwerk potrafi policzyć tylko to, co zostało zużyte.',
        'NIE MA informacji o kosztach. W logach nie ma cen, a w abonamencie Claude Code i tak nie kosztuje nic dodatkowo. Kwota w euro byłaby zmyślona.',
        'Liczony jest wyłącznie Claude Code. To, co robisz na claude.ai w przeglądarce, tu się nie pojawia — na to nie ma na dysku twardym żadnych logów.',
        'W logach jest każde słowo każdej rozmowy. Zählwerk czyta z nich tylko wiersze rozliczeniowe i nigdy nie pokazuje treści rozmów — kto chce to sprawdzić, otwiera narzędzia dla programistów: poza samą stroną i licznikiem odwiedzin nie wychodzi żadne zapytanie.',
        'Format pliku nie jest udokumentowany przez Anthropic. Jeśli się zmieni, Zählwerk pokaże za mało albo już nic. Pomoże wtedy tylko nowa wersja.',
        'Wybór folderu wymaga przeglądarki, która przyjmuje całe foldery — Chrome, Edge i Firefox to potrafią, na iPhonie się nie uda.'
      ],
      pt: [
        'NÃO há indicação de percentagem nem qualquer aviso sobre a quota que lhe resta. O que ainda lhe cabe pura e simplesmente não consta destes ficheiros — o Zählwerk só pode contar aquilo que foi consumido.',
        'NÃO há indicação de custos. Nos registos não estão preços e, de qualquer maneira, na subscrição o Claude Code não acarreta custos adicionais. Um valor em euros seria inventado.',
        'Conta-se exclusivamente o Claude Code. O que faz no claude.ai, no navegador, não aparece aqui — para isso não há registos no disco.',
        'Nos registos está cada palavra de cada conversa. Disso, o Zählwerk lê apenas as linhas de contabilização e nunca mostra conteúdos de conversas — quem quiser confirmá-lo abre as ferramentas de programador: para além da própria página e do contador de visitas, não sai nenhum pedido.',
        'O formato dos ficheiros não está documentado pela Anthropic. Se mudar, o Zählwerk mostra menos do que devia ou deixa mesmo de mostrar seja o que for. Aí só ajuda uma versão nova.',
        'A seleção da pasta precisa de um navegador que aceite pastas inteiras — o Chrome, o Edge e o Firefox conseguem; no iPhone não resulta.'
      ],
      tr: [
        'Yüzde göstergesi YOKTUR ve kalan kotanıza dair bir bilgi de yoktur. Size ne kadar hak kaldığı bu dosyalarda düpedüz yazmaz — Zählwerk yalnızca tüketilmiş olanı sayabilir.',
        'Maliyet bilgisi YOKTUR. Kayıtlarda fiyat bulunmaz ve aboneliğinizde Claude Code zaten ek bir ücret getirmez. Bir avro tutarı uydurma olurdu.',
        'Yalnızca Claude Code sayılır. Tarayıcıda claude.ai üzerinde yaptıklarınız burada görünmez — bunun için sabit diskte kayıt yoktur.',
        'Kayıtlarda her konuşmanın her kelimesi durur. Zählwerk bunlardan yalnızca hesaplama satırlarını okur ve konuşma içeriğini asla göstermez — bunu sınamak isteyen geliştirici araçlarını açar: sayfanın kendisi ve ziyaretçi sayacı dışında dışarı hiçbir istek çıkmaz.',
        'Dosya biçimi Anthropic tarafından belgelenmiş değildir. Değişirse Zählwerk çok az şey gösterir ya da hiçbir şey göstermez. O zaman ancak yeni bir sürüm yardımcı olur.',
        'Klasör seçimi, bütün bir klasörü kabul eden bir tarayıcı ister — Chrome, Edge ve Firefox bunu yapabilir, iPhone’da olmaz.'
      ],
      ru: [
        'Индикатора процентов здесь НЕТ, как и сведений об остатке вашей квоты. Сколько вам ещё положено, в этих файлах попросту не написано — Zählwerk может считать только то, что уже израсходовано.',
        'Стоимость здесь НЕ показывается. В журналах нет цен, а по подписке Claude Code и так не стоит ничего сверх. Сумма в евро была бы выдумана.',
        'Считается исключительно Claude Code. То, что вы делаете на claude.ai в браузере, здесь не появляется — журналов для этого на диске нет.',
        'В журналах записано каждое слово каждого разговора. Zählwerk читает из них только строки учёта и никогда не показывает содержание разговоров — кто хочет это проверить, открывает инструменты разработчика: кроме самой страницы и счётчика посещений наружу не уходит ни один запрос.',
        'Формат файлов не документирован Anthropic. Если он изменится, Zählwerk будет показывать слишком мало или вообще ничего. Тогда поможет только новая версия.',
        'Для выбора папки нужен браузер, который принимает папки целиком — Chrome, Edge и Firefox это умеют, на iPhone не получается.'
      ],
      hi: [
        'प्रतिशत का कोई प्रदर्शन बिलकुल नहीं है और आपके बचे हुए कोटे का कोई संकेत भी नहीं। आपको कितना और मिलना है, यह इन फ़ाइलों में लिखा ही नहीं होता — Zählwerk केवल वही गिन सकता है जो खर्च हो चुका है।',
        'लागत का कोई आँकड़ा बिलकुल नहीं है। लॉग में क़ीमतें नहीं होतीं, और सदस्यता में Claude Code वैसे भी अतिरिक्त कुछ नहीं लेता। कोई भी रकम गढ़ी हुई होती।',
        'गिना केवल Claude Code जाता है। आप ब्राउज़र में claude.ai पर जो करते हैं, वह यहाँ नहीं दिखता — उसके लिए हार्ड डिस्क पर कोई लॉग होता ही नहीं।',
        'लॉग में हर बातचीत का हर शब्द लिखा होता है। Zählwerk उनमें से केवल हिसाब की पंक्तियाँ पढ़ता है और बातचीत की सामग्री कभी नहीं दिखाता — जो इसे परखना चाहे, वह डेवलपर टूल खोल ले: पेज खुद और विज़िट गणना के अलावा कोई अनुरोध बाहर नहीं जाता।',
        'फ़ाइल का प्रारूप Anthropic ने दस्तावेज़ में नहीं लिखा है। वह बदला, तो Zählwerk कम दिखाएगा या कुछ भी नहीं। तब केवल एक नया संस्करण ही काम आएगा।',
        'फ़ोल्डर चुनने के लिए ऐसा ब्राउज़र चाहिए जो पूरे फ़ोल्डर स्वीकार करे — Chrome, Edge और Firefox यह कर सकते हैं, iPhone पर यह नहीं चलता।'
      ],
      zh: [
        '这里根本没有百分比显示，也没有任何关于你剩余额度的提示。你还剩多少，这些文件里压根就没写——Zählwerk 只能数已经用掉的东西。',
        '这里根本没有费用数字。日志里没有价格，而且在订阅里 Claude Code 本来也不额外收费。写出一个欧元金额那就是编的。',
        '只统计 Claude Code。你在浏览器里用 claude.ai 做的事不会出现在这里——硬盘上没有相应的日志。',
        '日志里写着每一次对话的每一个字。Zählwerk 只从中读取计费行，从不显示对话内容——想验证这一点的人可以打开开发者工具：除了页面本身和访客计数器之外，不会有任何请求发出去。',
        '这个文件格式没有被 Anthropic 写进文档。一旦它变了，Zählwerk 显示的就会太少，或者干脆什么都不显示了。那时只有新版本才管用。',
        '选择文件夹需要一个能接收整个文件夹的浏览器——Chrome、Edge 和 Firefox 可以，在 iPhone 上行不通。'
      ],
      ja: [
        'パーセント表示は一切ありませんし、残りの利用枠の手がかりもありません。あとどれだけ使えるかは、これらのファイルには単に書かれていないのです — Zählwerk は使われた分を数えることしかできません。',
        '金額の表示も一切ありません。ログには価格が入っていませんし、そもそもサブスクリプションでは Claude Code に追加の費用はかかりません。金額を出せば、それは作り話になります。',
        '数えられるのは Claude Code だけです。ブラウザーで claude.ai を使った分はここには出てきません — それについてはハードディスクにログがないからです。',
        'ログにはすべての会話のすべての言葉が入っています。Zählwerk がそこから読むのは集計用の行だけで、会話の中身を表示することは決してありません — 確かめたい方は開発者ツールを開いてください: ページ自体と訪問者カウンターのほかには、外に出るリクエストはありません。',
        'ファイル形式は Anthropic が文書化しているものではありません。形式が変われば、Zählwerk の表示は足りなくなるか、何も出なくなります。そのときは新しい版を待つしかありません。',
        'フォルダーの選択には、フォルダーまるごとを受け取れるブラウザーが必要です — Chrome、Edge、Firefox は対応しています。iPhone ではうまくいきません。'
      ],
      ko: [
        '퍼센트 표시는 전혀 없고, 남은 할당량에 대한 안내도 없습니다. 얼마나 더 쓸 수 있는지는 이 파일들에 애초에 적혀 있지 않습니다 — Zählwerk은 이미 쓴 것만 셀 수 있습니다.',
        '비용 표시도 전혀 없습니다. 기록에는 가격이 들어 있지 않고, 구독에서는 어차피 Claude Code에 추가 요금이 붙지 않습니다. 금액을 적는다면 그것은 지어낸 숫자일 것입니다.',
        '세는 것은 오직 Claude Code뿐입니다. 브라우저에서 claude.ai로 하는 일은 여기에 나타나지 않습니다 — 그에 해당하는 기록이 하드디스크에 없기 때문입니다.',
        '기록에는 모든 대화의 모든 낱말이 들어 있습니다. Zählwerk은 그중에서 정산 줄만 읽고 대화 내용은 결코 표시하지 않습니다 — 확인하고 싶다면 개발자 도구를 열어 보면 됩니다: 페이지 자체와 방문자 집계를 빼면 밖으로 나가는 요청은 없습니다.',
        '파일 형식은 Anthropic이 문서로 공개하지 않았습니다. 형식이 바뀌면 Zählwerk은 너무 적게 보여 주거나 아무것도 보여 주지 못합니다. 그때는 새 버전만이 도움이 됩니다.',
        '폴더 선택에는 폴더 전체를 받아들이는 브라우저가 필요합니다 — Chrome, Edge, Firefox는 되고, iPhone에서는 되지 않습니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/zaehlwerk/blob/main/README.md'
    }
  },

  ticker: {
    purpose: {
      de: 'Für alle, die ihre eigene Webseite mit GoatCounter zählen lassen: Der Besucher-Ticker stellt die Zahlen des eigenen Kontos als kleines, immer sichtbares Fenster auf den Windows-Schreibtisch — Aufrufe im gewählten Zeitraum, Besucher je Seite als Balken, dazu Länder oder Verweise. Der Ticker zählt selbst nichts; er zeigt an, was GoatCounter schon weiß.',
      en: 'For everyone whose own website counts with GoatCounter: the Besucher-Ticker puts the numbers of your account on the Windows desktop as a small, always visible window — pageviews for the chosen period, visitors per page as bars, plus countries or referrers. The ticker does not count anything itself; it displays what GoatCounter already knows.',
      es: 'Para todos los que miden su propia web con GoatCounter: el Besucher-Ticker pone las cifras de tu propia cuenta en el escritorio de Windows como una ventana pequeña y siempre visible — páginas vistas en el periodo elegido, visitantes por página en forma de barras, además de países o referencias. El ticker no cuenta nada por sí mismo; muestra lo que GoatCounter ya sabe.',
      fr: 'Pour tous ceux qui font compter leur propre site web par GoatCounter : le Besucher-Ticker affiche les chiffres de leur compte sur le bureau Windows sous forme de petite fenêtre toujours visible — pages vues sur la période choisie, visiteurs par page sous forme de barres, plus les pays ou les référents. Le ticker ne compte rien lui-même ; il montre ce que GoatCounter sait déjà.',
      it: 'Per tutti quelli che fanno contare il proprio sito con GoatCounter: il Besucher-Ticker mette i numeri del proprio account sul desktop di Windows come una piccola finestra sempre visibile — visualizzazioni nel periodo scelto, visitatori per pagina come barre, più paesi o referrer. Il ticker non conta niente da sé; mostra quello che GoatCounter sa già.',
      nl: 'Voor iedereen die de eigen website door GoatCounter laat tellen: de Besucher-Ticker zet de cijfers van je eigen account als klein, altijd zichtbaar venster op het Windows-bureaublad — paginaweergaven in de gekozen periode, bezoekers per pagina als balken, plus landen of verwijzers. De ticker telt zelf niets; hij laat zien wat GoatCounter al weet.',
      pl: 'Dla wszystkich, którzy zliczają ruch na własnej stronie w usłudze GoatCounter: Besucher-Ticker stawia liczby z własnego konta na pulpicie Windows jako małe, zawsze widoczne okno — wyświetlenia w wybranym okresie, odwiedzający dla każdej strony w formie słupków, do tego kraje albo źródła wejść. Ticker sam niczego nie liczy; pokazuje to, co GoatCounter już wie.',
      pt: 'Para todos os que deixam a sua própria página ser contada pelo GoatCounter: o Besucher-Ticker põe os números da sua conta no ambiente de trabalho do Windows como uma janelinha sempre visível — visualizações no período escolhido, visitantes por página em barras, e ainda países ou referências. O ticker não conta nada por si próprio; mostra aquilo que o GoatCounter já sabe.',
      tr: 'Kendi web sitesini GoatCounter ile saydıran herkes için: Besucher-Ticker, kendi hesabınızın sayılarını küçük, her zaman görünen bir pencere olarak Windows masaüstüne koyar — seçilen dönemdeki görüntülenmeler, sayfa başına ziyaretçiler çubuk olarak, ayrıca ülkeler veya yönlendirenler. Ticker kendisi hiçbir şey saymaz; GoatCounter’ın zaten bildiğini gösterir.',
      ru: 'Для всех, кто считает посещения своего сайта через GoatCounter: Besucher-Ticker показывает цифры вашего аккаунта на рабочем столе Windows в небольшом, всегда видимом окне — просмотры за выбранный период, посетители по страницам в виде столбиков, плюс страны или источники переходов. Сам тикер ничего не считает; он показывает то, что GoatCounter уже знает.',
      hi: 'उन सबके लिए जो अपनी वेबसाइट GoatCounter से गिनवाते हैं: Besucher-Ticker आपके अपने खाते के आँकड़ों को एक छोटी, हमेशा दिखने वाली विंडो के रूप में Windows डेस्कटॉप पर रख देता है — चुनी हुई अवधि के पेजव्यू, प्रति पेज विज़िटर बार के रूप में, साथ में देश या रेफ़रर। टिकर खुद कुछ नहीं गिनता; वह वही दिखाता है जो GoatCounter पहले से जानता है।',
      zh: '给所有让 GoatCounter 统计自己网站的人：Besucher-Ticker 用一个小小的、始终可见的窗口，把你自己账号里的数字摆在 Windows 桌面上——所选时间段的浏览量、按页面的访客柱条，以及国家或来源。这个 Ticker 自己什么都不统计；它显示的是 GoatCounter 已经知道的东西。',
      ja: '自分のウェブサイトを GoatCounter で数えてもらっている方へ: Besucher-Ticker は、自分のアカウントの数字を、小さくて常に見えるウィンドウとして Windows のデスクトップに置きます — 選んだ期間のページビュー、ページごとの訪問者数をバーで、さらに国または参照元も。Ticker 自体は何も数えません。GoatCounter がすでに知っていることを表示するだけです。',
      ko: '자기 웹사이트를 GoatCounter로 집계하게 하는 분들을 위한 도구입니다. Besucher-Ticker는 자기 계정의 숫자를 Windows 바탕화면 위에 작고 늘 보이는 창으로 올려놓습니다 — 선택한 기간의 조회수, 페이지별 방문자를 막대로, 여기에 국가 또는 유입 경로. 티커 자체는 아무것도 세지 않습니다. GoatCounter가 이미 아는 것을 보여 줄 뿐입니다.'
    },
    steps: {
      de: [
        'Die ZIP-Datei aus den Releases laden, entpacken und die Exe doppelklicken. Windows meldet „Unbekannter Herausgeber“, weil die Datei nicht signiert ist — über „Weitere Informationen“ geht es weiter.',
        'Beim ersten Start die Adresse der eigenen GoatCounter-Seite eintippen und ein API-Token einfügen. Das Token legst du auf deiner GoatCounter-Seite an: Benutzername oben rechts → API → „Add new token“ — das Häkchen „Read statistics“ genügt.',
        'Das Overlay mit der Maus dorthin ziehen, wo es nicht stört. Rechtsklick aufs Symbol im Infobereich der Taskleiste: Zeitraum, Zusatzblock, Themes, Einstellungen.'
      ],
      en: [
        'Download the ZIP from the releases, unpack it and double-click the exe. Windows will say “unknown publisher” because the file is not signed — continue via “more info”.',
        'On first start, type in the address of your own GoatCounter site and paste an API token. You create the token on your GoatCounter site: username in the top right → API → “Add new token” — ticking “Read statistics” is enough.',
        'Drag the overlay wherever it does not get in the way. Right-click the tray icon for period, extra block, themes and settings.'
      ],
      es: [
        'Descarga el archivo ZIP desde las versiones, descomprímelo y haz doble clic en el exe. Windows avisa de «Editor desconocido» porque el archivo no está firmado; se continúa con «Más información».',
        'En el primer arranque, escribe la dirección de tu propia página de GoatCounter y pega un token de la API. El token lo creas en tu página de GoatCounter: nombre de usuario arriba a la derecha → API → «Add new token»; basta con la casilla «Read statistics».',
        'Arrastra la ventana flotante con el ratón a donde no moleste. Clic derecho en el icono del área de notificación de la barra de tareas: periodo, bloque adicional, temas, ajustes.'
      ],
      fr: [
        'Télécharger le fichier ZIP depuis les releases, le décompresser et double-cliquer sur l’exécutable. Windows signale « Éditeur inconnu », parce que le fichier n’est pas signé — on continue via « Informations complémentaires ».',
        'Au premier démarrage, taper l’adresse de votre propre page GoatCounter et coller un jeton d’API. Le jeton, vous le créez sur votre page GoatCounter : nom d’utilisateur en haut à droite → API → « Add new token » — la case « Read statistics » suffit.',
        'Faire glisser la fenêtre flottante à la souris là où elle ne gêne pas. Clic droit sur l’icône dans la zone de notification de la barre des tâches : « Zeitraum » (période), « Zusatzblock » (bloc supplémentaire), « Themes », « Einstellungen » (réglages).'
      ],
      it: [
        'Scarica il file ZIP dalle release, decomprimilo e fai doppio clic sull’eseguibile. Windows segnala «Editore sconosciuto» perché il file non è firmato: prosegui con «Ulteriori informazioni».',
        'Al primo avvio digita l’indirizzo della tua pagina GoatCounter e incolla un token API. Il token lo crei sulla tua pagina GoatCounter: nome utente in alto a destra → API → «Add new token» — basta la spunta «Read statistics».',
        'Trascina l’overlay con il mouse dove non dà fastidio. Clic destro sull’icona nell’area di notifica della barra delle applicazioni: periodo, blocco aggiuntivo, temi, impostazioni.'
      ],
      nl: [
        'Download het ZIP-bestand van de releases, pak het uit en dubbelklik op de exe. Windows meldt “Onbekende uitgever”, omdat het bestand niet ondertekend is — via “Meer informatie” ga je verder.',
        'Typ bij de eerste start het adres van je eigen GoatCounter-pagina in en plak een API-token. Het token maak je aan op je GoatCounter-pagina: gebruikersnaam rechtsboven → API → “Add new token” — het vinkje “Read statistics” is genoeg.',
        'Sleep de overlay met de muis naar een plek waar hij niet stoort. Rechtsklik op het pictogram in het systeemvak van de taakbalk: Zeitraum (periode), Zusatzblock (extra blok), Themes, Einstellungen (instellingen).'
      ],
      pl: [
        'Pobrać plik ZIP ze strony wydań, rozpakować i kliknąć dwukrotnie plik exe. Windows zgłosi „Nieznany wydawca”, bo plik nie jest podpisany — dalej prowadzi „Więcej informacji”.',
        'Przy pierwszym uruchomieniu wpisać adres własnej strony w GoatCounter i wkleić token API. Token zakładasz na swojej stronie w GoatCounter: nazwa użytkownika w prawym górnym rogu → API → „Add new token” — wystarczy zaznaczenie „Read statistics”.',
        'Przeciągnąć nakładkę myszą tam, gdzie nie przeszkadza. Prawy przycisk myszy na ikonie w obszarze powiadomień paska zadań: okres, blok dodatkowy, motywy, ustawienia.'
      ],
      pt: [
        'Transferir o ficheiro ZIP da página de versões, descompactá-lo e fazer duplo clique no executável. O Windows avisa «Editor desconhecido», porque o ficheiro não está assinado — continua-se através de «Mais informações».',
        'No primeiro arranque, escrever o endereço da sua própria página do GoatCounter e colar um token da API. O token cria-o na sua página do GoatCounter: nome de utilizador em cima à direita → API → «Add new token» — basta assinalar «Read statistics».',
        'Arrastar o overlay com o rato para onde não incomode. Clicar com o botão direito no ícone da área de notificação da barra de tarefas: «Zeitraum» (período), «Zusatzblock» (bloco adicional), «Themes» (temas), «Einstellungen» (definições).'
      ],
      tr: [
        'ZIP dosyasını sürümler sayfasından indirin, açın ve exe dosyasına çift tıklayın. Dosya imzalı olmadığı için Windows “Bilinmeyen yayımcı” uyarısı verir — “Daha fazla bilgi” üzerinden devam edilir.',
        'İlk başlatmada kendi GoatCounter sayfanızın adresini yazın ve bir API belirteci yapıştırın. Belirteci kendi GoatCounter sayfanızda oluşturursunuz: sağ üstteki kullanıcı adı → API → “Add new token” — “Read statistics” kutusunu işaretlemek yeterlidir.',
        'Kaplamayı fareyle rahatsız etmeyeceği bir yere sürükleyin. Görev çubuğunun bildirim alanındaki simgeye sağ tıklayın: dönem, ek blok, temalar, ayarlar.'
      ],
      ru: [
        'Скачайте ZIP-файл со страницы выпусков, распакуйте и дважды щёлкните по exe. Windows сообщит «Неизвестный издатель», потому что файл не подписан, — продолжить можно через «Подробнее».',
        'При первом запуске впишите адрес своей страницы GoatCounter и вставьте токен API. Токен вы создаёте на своей странице GoatCounter: имя пользователя вверху справа → API → «Add new token» — галочки «Read statistics» достаточно.',
        'Перетащите оверлей мышью туда, где он не мешает. Правый щелчок по значку в области уведомлений панели задач: период, дополнительный блок, темы, настройки.'
      ],
      hi: [
        'रिलीज़ से ZIP फ़ाइल डाउनलोड करें, खोलें और exe पर दो बार क्लिक करें। Windows “अज्ञात प्रकाशक” की चेतावनी देता है, क्योंकि फ़ाइल पर हस्ताक्षर नहीं हैं — “अधिक जानकारी” से आगे बढ़ा जा सकता है।',
        'पहली बार शुरू करते समय अपनी GoatCounter साइट का पता टाइप करें और एक API टोकन चिपकाएँ। टोकन आप अपनी GoatCounter साइट पर बनाते हैं: ऊपर दाईं ओर उपयोक्ता नाम → API → “Add new token” — “Read statistics” का चेकबॉक्स काफ़ी है।',
        'ओवरले को माउस से वहाँ खींच ले जाएँ जहाँ वह परेशान न करे। टास्कबार के सूचना क्षेत्र में उसके चिह्न पर दायाँ क्लिक: अवधि, अतिरिक्त खंड, थीम, सेटिंग्स।'
      ],
      zh: [
        '从发布页下载 ZIP 文件，解压后双击那个 exe。Windows 会提示“未知发布者”，因为这个文件没有签名——通过“更多信息”继续。',
        '首次启动时输入你自己 GoatCounter 站点的地址，并粘贴一个 API 令牌。令牌是在你的 GoatCounter 站点上创建的：右上角的用户名 → API → “Add new token”——勾上“Read statistics”就够了。',
        '用鼠标把这个悬浮窗拖到不碍事的地方。右键点击任务栏通知区域里的图标：时间段、附加板块、主题、设置。'
      ],
      ja: [
        'リリースページから ZIP ファイルをダウンロードして展開し、exe をダブルクリックします。ファイルに署名がないため、Windows は「不明な発行元」と表示します — 「詳細情報」から先に進めます。',
        '初回起動時に、自分の GoatCounter サイトのアドレスを打ち込み、API トークンを貼り付けます。トークンは自分の GoatCounter のページで作ります: 右上のユーザー名 → API → 「Add new token」 — 「Read statistics」のチェックだけで足ります。',
        'オーバーレイをマウスで、邪魔にならない場所へドラッグします。タスクバーの通知領域のアイコンを右クリックすると、期間、追加のブロック、テーマ、設定が出てきます。'
      ],
      ko: [
        '릴리스에서 ZIP 파일을 내려받아 압축을 풀고 exe를 두 번 누릅니다. 파일에 서명이 없어서 Windows가 “알 수 없는 게시자”라고 알립니다 — “추가 정보”를 거쳐 계속 진행하면 됩니다.',
        '처음 실행할 때 자기 GoatCounter 사이트의 주소를 입력하고 API 토큰을 붙여 넣습니다. 토큰은 자기 GoatCounter 페이지에서 만듭니다: 오른쪽 위의 사용자 이름 → API → “Add new token” — “Read statistics” 체크 하나면 충분합니다.',
        '오버레이를 마우스로 끌어서 방해되지 않는 자리에 둡니다. 작업 표시줄 알림 영역의 아이콘을 오른쪽 클릭하면 기간, 추가 블록, 테마, 설정이 나옵니다.'
      ]
    },
    pitfalls: {
      de: [
        'Ohne eigenes GoatCounter-Konto zeigt der Ticker nichts an — er ist ein Anzeigegerät für die eigenen Zahlen, kein Zählwerkzeug für fremde Seiten.',
        'Die Summe der Balken ergibt nicht die große Zahl, und das ist richtig so: Oben stehen Aufrufe, die Balken zählen Besucher — zwei verschiedene Größen.',
        'Das Token liegt in der config.json neben dem Programm — mit pywin32 verschlüsselt, gebunden an Benutzerkonto und Rechner. Exe und config.json müssen deshalb im selben Ordner bleiben.',
        'Nur Windows, Oberfläche nur auf Deutsch. Einen Update-Prüfer gibt es nicht — neue Fassungen holst du dir selbst auf der Releases-Seite.'
      ],
      en: [
        'Without your own GoatCounter account the ticker shows nothing — it is a display for your own numbers, not a counting tool for other people’s sites.',
        'The bars do not add up to the big number, and that is correct: the top shows pageviews, the bars count visitors — two different quantities.',
        'The token lives in config.json next to the program — encrypted with pywin32, bound to your user account and machine. The exe and config.json therefore have to stay in the same folder.',
        'Windows only, interface in German only. There is no update checker — you fetch new versions from the releases page yourself.'
      ],
      es: [
        'Sin una cuenta propia de GoatCounter el ticker no muestra nada: es un visor de tus propias cifras, no una herramienta de recuento para páginas ajenas.',
        'La suma de las barras no da la cifra grande, y está bien que sea así: arriba están las páginas vistas, las barras cuentan visitantes, dos magnitudes distintas.',
        'El token está en el config.json que hay junto al programa, cifrado con pywin32 y ligado a la cuenta de usuario y al ordenador. Por eso el exe y config.json tienen que quedarse en la misma carpeta.',
        'Solo Windows, interfaz solo en alemán. No hay comprobador de actualizaciones: las versiones nuevas las buscas tú mismo en la página de versiones.'
      ],
      fr: [
        'Sans compte GoatCounter à soi, le ticker n’affiche rien — c’est un appareil d’affichage pour ses propres chiffres, pas un outil de comptage pour les sites des autres.',
        'La somme des barres ne donne pas le grand nombre, et c’est normal : en haut figurent les pages vues, les barres comptent les visiteurs — deux grandeurs différentes.',
        'Le jeton se trouve dans le fichier config.json, à côté du programme — chiffré avec pywin32, lié au compte utilisateur et à la machine. L’exécutable et config.json doivent donc rester dans le même dossier.',
        'Windows uniquement, interface en allemand uniquement. Il n’y a pas de vérificateur de mises à jour — les nouvelles versions, vous allez les chercher vous-même sur la page des releases.'
      ],
      it: [
        'Senza un proprio account GoatCounter il ticker non mostra niente: è un visualizzatore dei propri numeri, non uno strumento di conteggio per siti altrui.',
        'La somma delle barre non dà il numero grande, ed è giusto così: in alto stanno le visualizzazioni, le barre contano i visitatori — due grandezze diverse.',
        'Il token si trova nel file config.json accanto al programma — cifrato con pywin32, legato all’account utente e al computer. Per questo l’eseguibile e config.json devono restare nella stessa cartella.',
        'Solo Windows, interfaccia solo in tedesco. Non c’è un controllo degli aggiornamenti: le versioni nuove te le prendi da solo sulla pagina delle release.'
      ],
      nl: [
        'Zonder een eigen GoatCounter-account laat de ticker niets zien — hij is een weergaveapparaat voor je eigen cijfers, geen telinstrument voor de pagina’s van anderen.',
        'De som van de balken levert niet het grote getal op, en dat hoort zo: bovenaan staan paginaweergaven, de balken tellen bezoekers — twee verschillende grootheden.',
        'Het token staat in de config.json naast het programma — met pywin32 versleuteld, gebonden aan gebruikersaccount en computer. De exe en config.json moeten daarom in dezelfde map blijven.',
        'Alleen Windows, interface alleen in het Duits. Een updatecontrole is er niet — nieuwe versies haal je zelf op de releases-pagina.'
      ],
      pl: [
        'Bez własnego konta w GoatCounter ticker nic nie pokazuje — jest urządzeniem wyświetlającym własne liczby, nie narzędziem do liczenia cudzych stron.',
        'Suma słupków nie daje dużej liczby — i tak właśnie ma być: na górze są wyświetlenia, słupki liczą odwiedzających — dwie różne wielkości.',
        'Token leży w pliku config.json obok programu — zaszyfrowany za pomocą pywin32, związany z kontem użytkownika i komputerem. Exe i config.json muszą dlatego zostać w tym samym folderze.',
        'Tylko Windows, interfejs tylko po niemiecku. Sprawdzania aktualizacji nie ma — nowe wersje pobierasz sobie sam ze strony wydań.'
      ],
      pt: [
        'Sem conta própria no GoatCounter, o ticker não mostra nada — é um mostrador para os seus próprios números, não uma ferramenta de contagem para páginas alheias.',
        'A soma das barras não dá o número grande, e é mesmo assim que deve ser: em cima estão visualizações, as barras contam visitantes — duas grandezas diferentes.',
        'O token fica no config.json ao lado do programa — cifrado com o pywin32, preso à conta de utilizador e ao computador. Por isso, o executável e o config.json têm de ficar na mesma pasta.',
        'Só Windows, interface só em alemão. Não há verificador de atualizações — as versões novas vai buscá-las você mesmo à página de versões.'
      ],
      tr: [
        'Kendi GoatCounter hesabınız olmadan Ticker hiçbir şey göstermez — o, kendi sayılarınız için bir gösterge aygıtıdır, başkalarının sayfaları için bir sayma aracı değil.',
        'Çubukların toplamı büyük sayıyı vermez ve bu böyle doğrudur: Yukarıda görüntülenmeler durur, çubuklar ise ziyaretçileri sayar — iki ayrı büyüklük.',
        'Belirteç, programın yanındaki config.json dosyasında durur — pywin32 ile şifrelenmiş, kullanıcı hesabına ve bilgisayara bağlı. Bu yüzden exe ile config.json aynı klasörde kalmalıdır.',
        'Yalnızca Windows, arayüz yalnızca Almanca. Güncelleme denetleyicisi yoktur — yeni sürümleri sürümler sayfasından kendiniz alırsınız.'
      ],
      ru: [
        'Без собственного аккаунта GoatCounter тикер ничего не показывает — он показывает ваши собственные цифры, а не считает чужие сайты.',
        'Сумма столбиков не совпадает с большим числом наверху, и это правильно: наверху просмотры, а столбики считают посетителей — две разные величины.',
        'Токен лежит в config.json рядом с программой — зашифрованный средствами pywin32, привязанный к учётной записи и компьютеру. Поэтому exe и config.json должны оставаться в одной папке.',
        'Только Windows, интерфейс только на немецком. Проверки обновлений нет — новые версии вы забираете сами со страницы выпусков.'
      ],
      hi: [
        'अपने GoatCounter खाते के बिना टिकर कुछ नहीं दिखाता — वह आपके अपने आँकड़ों के लिए एक प्रदर्शक है, दूसरों की साइटों के लिए गिनने का औज़ार नहीं।',
        'बारों का जोड़ उस बड़ी संख्या के बराबर नहीं होता, और यह ठीक ही है: ऊपर पेजव्यू लिखे होते हैं, बार विज़िटर गिनते हैं — दो अलग-अलग राशियाँ।',
        'टोकन प्रोग्राम के बग़ल में config.json में रहता है — pywin32 से एन्क्रिप्ट किया हुआ, आपके उपयोक्ता खाते और कंप्यूटर से बँधा हुआ। इसीलिए exe और config.json को एक ही फ़ोल्डर में रहना चाहिए।',
        'केवल Windows, इंटरफ़ेस केवल जर्मन में। अपडेट जाँचने वाला कोई हिस्सा नहीं है — नए संस्करण आपको खुद रिलीज़ पेज से लेने होते हैं।'
      ],
      zh: [
        '没有自己的 GoatCounter 账号，这个 Ticker 什么都显示不了——它是显示你自己数字的仪表，不是统计别人网站的工具。',
        '柱条加起来不等于上面那个大数字，这样才对：上面是浏览量，柱条数的是访客——两个不同的量。',
        '令牌放在程序旁边的 config.json 里——用 pywin32 加密，绑定到用户账号和这台电脑。所以 exe 和 config.json 必须留在同一个文件夹里。',
        '仅限 Windows，界面只有德语。没有更新检查器——新版本要你自己去发布页取。'
      ],
      ja: [
        '自分の GoatCounter アカウントがないと、Ticker は何も表示しません — 自分の数字のための表示装置であって、他人のサイトを数える道具ではありません。',
        'バーの合計は上の大きな数字にはなりませんが、それで正しいのです: 上に出ているのはページビュー、バーが数えているのは訪問者 — 別々の量です。',
        'トークンはプログラムの隣の config.json にあります — pywin32 で暗号化され、ユーザーアカウントとパソコンに結び付けられています。そのため exe と config.json は同じフォルダーに置いたままにする必要があります。',
        'Windows のみ、画面はドイツ語のみです。更新チェッカーはありません — 新しい版はリリースページから自分で取ってきてください。'
      ],
      ko: [
        '자기 GoatCounter 계정이 없으면 티커는 아무것도 보여 주지 않습니다 — 이것은 자기 숫자를 보는 표시 장치이지, 남의 사이트를 세는 도구가 아닙니다.',
        '막대의 합은 위의 큰 숫자와 맞지 않는데, 그게 맞습니다: 위에 있는 것은 조회수이고 막대는 방문자를 세기 때문입니다 — 서로 다른 두 가지 값입니다.',
        '토큰은 프로그램 옆의 config.json에 들어 있습니다 — pywin32로 암호화되어 사용자 계정과 컴퓨터에 묶여 있습니다. 그래서 exe와 config.json은 같은 폴더에 남아 있어야 합니다.',
        'Windows 전용이고 화면은 독일어로만 제공됩니다. 업데이트 검사기는 없습니다 — 새 버전은 릴리스 페이지에서 직접 가져와야 합니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/besucher-ticker/blob/main/README.md'
    }
  },

  fontart: {
    purpose: {
      de: 'Deine eigene Handschrift als richtige Schriftart: Du malst die Buchstaben mit Maus, Stift oder Finger, fontART rechnet sie in eine .ttf-Datei um — und die installierst du in Windows und schreibst damit in Word, LibreOffice oder Canva. Die kostenlose Testversion gibt es zweimal: als Seite, die im Browser läuft — auch am Handy —, und als Programm für Windows.',
      en: 'Your own handwriting as a real typeface: you draw the letters with a mouse, a pen or your finger, fontART turns them into a .ttf file — and you install that in Windows to write with it in Word, LibreOffice or Canva. The free trial comes twice over: as a page that runs in your browser, phones included, and as a program for Windows.',
      es: 'Tu propia letra como una fuente de verdad: dibujas las letras con el ratón, un lápiz o el dedo, fontART las convierte en un archivo .ttf, y ese archivo lo instalas en Windows y escribes con él en Word, LibreOffice o Canva. La versión de prueba gratuita existe en dos formas: como página que funciona en el navegador, también en el móvil, y como programa para Windows.',
      fr: 'Votre propre écriture comme véritable police : vous dessinez les lettres à la souris, au stylet ou au doigt, fontART les convertit en un fichier .ttf — et celui-ci, vous l’installez dans Windows pour vous en servir dans Word, LibreOffice ou Canva. La version d’essai gratuite existe en deux versions : comme page qui tourne dans le navigateur — sur téléphone aussi — et comme programme pour Windows.',
      it: 'La tua scrittura a mano come vero carattere tipografico: tu disegni le lettere con il mouse, un pennino o il dito, fontART le converte in un file .ttf, che poi installi in Windows per scrivere in Word, LibreOffice o Canva. La versione di prova gratuita esiste in due forme: come pagina che gira nel browser, anche sul telefono, e come programma per Windows.',
      nl: 'Je eigen handschrift als echt lettertype: jij tekent de letters met muis, stylus of vinger, fontART rekent ze om naar een .ttf-bestand — en dat installeer je in Windows om ermee te schrijven in Word, LibreOffice of Canva. De gratis proefversie is er twee keer: als pagina die in de browser draait — ook op de telefoon — en als programma voor Windows.',
      pl: 'Twoje własne pismo odręczne jako prawdziwy krój pisma: malujesz litery myszą, rysikiem albo palcem, fontART zamienia je w plik .ttf — a ten instalujesz w Windows i piszesz nim w Wordzie, LibreOffice albo Canvie. Darmowa wersja próbna występuje w dwóch postaciach: jako strona, która działa w przeglądarce — także na telefonie — i jako program dla Windows.',
      pt: 'A sua própria letra como uma fonte a sério: você desenha as letras com o rato, com uma caneta ou com o dedo, o fontART transforma-as num ficheiro .ttf — e depois instala-o no Windows e escreve com ele no Word, no LibreOffice ou no Canva. A versão de teste gratuita existe em duas versões: como página que corre no navegador — também no telemóvel — e como programa para Windows.',
      tr: 'Kendi el yazınız gerçek bir yazı tipi olarak: Harfleri fareyle, kalemle ya da parmakla çizersiniz, fontART bunları bir .ttf dosyasına dönüştürür — siz de onu Windows’a kurup Word, LibreOffice ya da Canva’da onunla yazarsınız. Ücretsiz deneme sürümü iki biçimde var: tarayıcıda çalışan bir sayfa olarak — telefonda da — ve Windows için bir program olarak.',
      ru: 'Ваш собственный почерк как настоящий шрифт: вы рисуете буквы мышью, стилусом или пальцем, fontART превращает их в файл .ttf — и его вы устанавливаете в Windows и пишете им в Word, LibreOffice или Canva. Бесплатная пробная версия существует в двух видах: как страница, которая работает в браузере — в том числе на телефоне, — и как программа для Windows.',
      hi: 'आपकी अपनी लिखावट एक असली फ़ॉन्ट के रूप में: आप अक्षरों को माउस, स्टाइलस या उँगली से बनाते हैं, fontART उन्हें .ttf फ़ाइल में बदल देता है — और उसे आप Windows में इंस्टॉल करके Word, LibreOffice या Canva में उससे लिखते हैं। मुफ़्त परीक्षण संस्करण दो रूपों में है: एक पेज के रूप में जो ब्राउज़र में चलता है — फ़ोन पर भी —, और Windows के लिए एक प्रोग्राम के रूप में।',
      zh: '把你自己的手写体变成一套真正的字体：你用鼠标、触控笔或手指画出字母，fontART 把它们算成一个 .ttf 文件——你把它装进 Windows，然后就能用它在 Word、LibreOffice 或 Canva 里写字。免费的试用版有两份：一个在浏览器里运行的页面——手机上也行——以及一个 Windows 程序。',
      ja: '自分の手書きを本物のフォントに: マウス、ペン、指で文字を描くと、fontART がそれを .ttf ファイルに計算し直します — それを Windows にインストールすれば、Word、LibreOffice、Canva でその字が書けます。無料の体験版は2通りあります: ブラウザーで動くページ — スマートフォンでも — と、Windows 用のプログラムです。',
      ko: '내 손글씨를 진짜 글꼴로: 마우스, 펜, 손가락으로 글자를 그리면 fontART가 그것을 .ttf 파일로 계산해 냅니다 — 그 파일을 Windows에 설치해 Word, LibreOffice, Canva에서 그 글씨로 씁니다. 무료 체험판은 두 가지로 있습니다: 브라우저에서 돌아가는 페이지로 — 휴대폰에서도 — 그리고 Windows용 프로그램으로.'
    },
    full: {
      de: [
        'Die Testversion lässt dich alles ausprobieren: malen, Konstruktionslinien, Geist-Glyph zum Vergleichen, Kerning-Vorschläge, Tipptest, Speichern und Laden deiner Arbeit. Kein Werkzeug ist beschnitten — zu ist allein der Ausgang. Der Export gibt die Kleinbuchstaben a–z aus, immer unter dem Namen „fontART DEMO“, und die übrigen Ausgabewege (.woff, Musterblatt, Komplett-Paket, Fett und Kursiv, Übungsblatt, Video-Mitschnitt) sind in dieser Fassung gar nicht erst eingebaut.',
        'Welche der beiden Fassungen? Im Browser bist du mit einem Klick am Malen, mit Finger oder Stift — am Berührbildschirm kommt das der Handschrift näher als jede Maus —, und dort läuft keine Uhr. Das Windows-Programm liegt näher an der Vollversion und läuft 60 Minuten je Start; dafür installierst du die fertige Schrift gleich und probierst sie in Word aus. Am Handy geht das nicht: Eine Schriftdatei lässt sich unter Android und iOS nicht als Systemschrift einrichten. Das Handy ist das bessere Malgerät, der Rechner das Installgerät — die .ttf schickst du dir einfach selbst.',
        'Die Vollversion zeichnet alle 333 Zeichen statt 26 — Groß- und Kleinbuchstaben, Zahlen, Umlaute, ß, Satzzeichen, dazu Griechisch, Kyrillisch und die japanischen Silbenschriften —, sie trägt den Namen, den du eintippst, und sie kennt die Ausgänge, die hier fehlen. Sie ist in Arbeit. Wann sie fertig ist und auf welchem Weg sie zu haben sein wird, steht noch nicht fest; sobald es feststeht, steht es hier.',
        'Bleibt die Frage, warum ausgerechnet dieses eine Werkzeug Geld kosten soll, wo unten in der Fußzeile „Quelloffen auf GitHub“ steht. Ehrliche Antwort: Die anderen tun jeweils eine Sache und waren an ein paar Abenden fertig. fontART baut echte TrueType-Dateien — Konturen, Seitenabstände, Kerning, Namenstabellen — und ist damit um ein Vielfaches größer als alles andere in dieser Werkstatt. Programme, die das können, kosten sämtlich Geld. Die Werkstatt bleibt kostenlos; dieses eine Werkzeug soll die Zeit tragen, die in ihr steckt.',
        'Was die Testversion ausdrücklich nicht tut: nach deiner E-Mail-Adresse fragen. Kein Konto, keine Anmeldung, keine Wartefrist, kein Newsletter — herunterladen, malen, selbst sehen, ob dir das Ergebnis gefällt.'
      ],
      en: [
        'The trial lets you try everything: drawing, construction lines, the ghost glyph for comparison, kerning suggestions, the typing test, saving and loading your work. No tool is cut down — only the exit is closed. The export produces the lowercase letters a–z, always under the name “fontART DEMO”, and the other ways out (.woff, specimen sheet, complete package, bold and italic, practice sheet, video capture) are simply not built into this version.',
        'Which of the two? In the browser you are drawing one click later, with a finger or a pen — on a touchscreen that is closer to handwriting than any mouse — and no clock runs there. The Windows program sits closer to the full version and runs 60 minutes per start; in exchange you install the finished font right away and try it in Word. On a phone that last part cannot happen: a font file cannot be set up as a system font on Android or iOS. The phone is the better drawing device, the computer the better installing one — you simply send the .ttf to yourself.',
        'The full version draws all 333 characters instead of 26 — upper and lower case, digits, umlauts, ß, punctuation, plus Greek, Cyrillic and the Japanese syllabaries — it carries the name you type in, and it has the exits that are missing here. It is being worked on. When it will be finished, and how it will be available, is not settled yet; as soon as it is, it will say so here.',
        'That leaves the question why this one tool of all things should cost money, when the footer below says “open source on GitHub”. The honest answer: the others each do one thing and were finished in a few evenings. fontART builds real TrueType files — outlines, sidebearings, kerning, name tables — which makes it many times larger than anything else in this workshop. The programs that can do this all cost money. The workshop stays free; this one tool is meant to carry the time that went into it.',
        'What the trial explicitly does not do: ask for your email address. No account, no sign-up, no waiting period, no newsletter — download it, draw, and see for yourself whether you like the result.'
      ],
      es: [
        'La versión de prueba te deja probarlo todo: dibujar, líneas de construcción, el glifo fantasma para comparar, sugerencias de kerning, prueba de escritura, guardar y cargar tu trabajo. Ninguna herramienta está recortada: lo único cerrado es la salida. La exportación entrega las minúsculas a–z, siempre bajo el nombre «fontART DEMO», y las demás vías de salida (.woff, muestrario, paquete completo, negrita y cursiva, hoja de ejercicios, grabación de vídeo) ni siquiera están incorporadas en esta versión.',
        '¿Cuál de las dos versiones? En el navegador estás dibujando con un solo clic, con el dedo o con un lápiz —en una pantalla táctil eso se acerca más a la escritura a mano que cualquier ratón— y allí no corre ningún reloj. El programa de Windows está más cerca de la versión completa y funciona 60 minutos por arranque; a cambio, instalas la fuente terminada al momento y la pruebas en Word. En el móvil eso no se puede: un archivo de fuente no se puede instalar como fuente del sistema ni en Android ni en iOS. El móvil es el mejor dispositivo para dibujar, el ordenador el dispositivo para instalar: el .ttf te lo envías simplemente a ti mismo.',
        'La versión completa dibuja los 333 caracteres en lugar de 26 —mayúsculas y minúsculas, cifras, diéresis, ß, signos de puntuación, además de griego, cirílico y los silabarios japoneses—, lleva el nombre que tú escribas y conoce las salidas que aquí faltan. Está en preparación. Cuándo estará lista y por qué vía se podrá conseguir todavía no está decidido; en cuanto se sepa, se dirá aquí.',
        'Queda la pregunta de por qué precisamente esta herramienta tiene que costar dinero, cuando abajo, en el pie de página, dice «Código abierto en GitHub». Respuesta honesta: las demás hacen una sola cosa cada una y estuvieron listas en un par de tardes. fontART construye archivos TrueType de verdad —contornos, espaciados laterales, kerning, tablas de nombres— y por eso es muchas veces mayor que todo lo demás de este taller. Todos los programas que saben hacer eso cuestan dinero. El taller sigue siendo gratuito; esta única herramienta debe sostener el tiempo que hay dentro de él.',
        'Lo que la versión de prueba expresamente no hace: preguntar por tu dirección de correo. Sin cuenta, sin registro, sin periodo de espera, sin boletín: descargar, dibujar y ver tú mismo si te gusta el resultado.'
      ],
      fr: [
        'La version d’essai vous laisse tout essayer : dessiner, lignes de construction, glyphe fantôme pour comparer, propositions de crénage, test de frappe, enregistrement et chargement de votre travail. Aucun outil n’est amputé — seule la sortie est fermée. L’export produit les minuscules a–z, toujours sous le nom « fontART DEMO », et les autres voies de sortie (.woff, planche de spécimen, paquet complet, gras et italique, feuille d’exercice, capture vidéo) ne sont tout simplement pas intégrées dans cette version.',
        'Laquelle des deux versions ? Dans le navigateur, un clic et vous dessinez, au doigt ou au stylet — sur un écran tactile, cela se rapproche plus de l’écriture manuscrite que n’importe quelle souris — et là, aucun chronomètre ne tourne. Le programme Windows est plus proche de la version complète et tourne 60 minutes par démarrage ; en échange, vous installez tout de suite la police terminée et l’essayez dans Word. Sur téléphone, cela n’est pas possible : un fichier de police ne peut pas être installé comme police système sous Android et iOS. Le téléphone est le meilleur appareil pour dessiner, l’ordinateur celui pour installer — le .ttf, vous vous l’envoyez simplement à vous-même.',
        'La version complète dessine les 333 caractères au lieu de 26 — majuscules et minuscules, chiffres, trémas, ß, signes de ponctuation, plus le grec, le cyrillique et les syllabaires japonais —, elle porte le nom que vous tapez, et elle connaît les sorties qui manquent ici. Elle est en préparation. Quand elle sera prête et par quelle voie elle sera disponible n’est pas encore fixé ; dès que ce sera le cas, ce sera écrit ici.',
        'Reste la question de savoir pourquoi cet outil-là précisément devrait coûter de l’argent, alors qu’en bas de page on lit « Open source sur GitHub ». Réponse honnête : les autres font chacun une seule chose et ont été bouclés en quelques soirées. fontART construit de vrais fichiers TrueType — contours, approches latérales, crénage, tables de noms — et il est ainsi plusieurs fois plus gros que tout le reste de cet atelier. Les programmes qui savent faire cela coûtent tous de l’argent. L’atelier reste gratuit ; cet outil-là doit porter le temps qui y a été investi.',
        'Ce que la version d’essai ne fait expressément pas : demander votre adresse e-mail. Pas de compte, pas d’inscription, pas de délai d’attente, pas de lettre d’information — télécharger, dessiner, et voir par vous-même si le résultat vous plaît.'
      ],
      it: [
        'La versione di prova ti lascia provare tutto: disegnare, linee di costruzione, glifo fantasma per confrontare, proposte di crenatura, prova di digitazione, salvataggio e caricamento del tuo lavoro. Nessuno strumento è ridotto: chiusa è solo l’uscita. L’esportazione dà le lettere minuscole a–z, sempre sotto il nome «fontART DEMO», e le altre vie d’uscita (.woff, foglio campione, pacchetto completo, grassetto e corsivo, foglio di esercizi, registrazione video) in questa versione non sono state realizzate affatto.',
        'Quale delle due versioni? Nel browser disegni dopo un solo clic, con il dito o con un pennino — su uno schermo tattile questo è più vicino alla scrittura a mano di qualsiasi mouse — e lì non c’è nessun timer. Il programma per Windows è più vicino alla versione completa e gira 60 minuti a ogni avvio; in cambio installi subito il carattere finito e lo provi in Word. Sul telefono questo non è possibile: un file di carattere non si può impostare come carattere di sistema su Android e iOS. Il telefono è il dispositivo migliore per disegnare, il computer quello per installare: il .ttf te lo mandi semplicemente da solo.',
        'La versione completa disegna tutti i 333 caratteri invece di 26 (maiuscole e minuscole, cifre, dieresi, ß, segni di punteggiatura, più greco, cirillico e i sillabari giapponesi), porta il nome che digiti tu e conosce le vie d’uscita che qui mancano. È in lavorazione. Quando sarà pronta e per quale via sarà disponibile non è ancora stabilito; appena sarà stabilito, sarà scritto qui.',
        'Resta la domanda del perché proprio questo strumento debba costare, mentre in basso, nel piè di pagina, c’è scritto «Open source su GitHub». Risposta onesta: gli altri fanno ciascuno una cosa sola ed erano finiti in poche serate. fontART costruisce veri file TrueType — contorni, distanze laterali, crenatura, tabelle dei nomi — ed è quindi molte volte più grande di tutto il resto in questa officina. I programmi che lo sanno fare costano tutti quanti. L’officina resta gratuita; questo unico strumento deve ripagare il tempo che ci è voluto.',
        'Quello che la versione di prova espressamente non fa: chiedere il tuo indirizzo e-mail. Nessun account, nessuna registrazione, nessun tempo di attesa, nessuna newsletter: scaricare, disegnare e vedere tu stesso se il risultato ti piace.'
      ],
      nl: [
        'De proefversie laat je alles uitproberen: tekenen, constructielijnen, de spookglyph om mee te vergelijken, kerningvoorstellen, typetest, je werk opslaan en laden. Geen enkel gereedschap is besnoeid — dicht is alleen de uitgang. De export levert de kleine letters a–z op, altijd onder de naam “fontART DEMO”, en de overige uitvoerwegen (.woff, proefblad, compleet pakket, vet en cursief, oefenblad, video-opname) zitten in deze versie helemaal niet ingebouwd.',
        'Welke van de twee versies? In de browser ben je met één klik aan het tekenen, met vinger of stylus — op een aanraakscherm komt dat dichter bij handschrift dan welke muis dan ook — en daar loopt geen klok. Het Windows-programma ligt dichter bij de volledige versie en draait 60 minuten per start; daar staat tegenover dat je het voltooide lettertype meteen installeert en het uitprobeert in Word. Op de telefoon gaat dat niet: een lettertypebestand kun je onder Android en iOS niet als systeemlettertype instellen. De telefoon is het betere tekenapparaat, de computer het installeerapparaat — de .ttf stuur je gewoon aan jezelf.',
        'De volledige versie tekent alle 333 tekens in plaats van 26 — hoofdletters en kleine letters, cijfers, umlauten, ß, leestekens, daarbij Grieks, Cyrillisch en de Japanse lettergreepschriften. Hij draagt de naam die je intypt, en hij kent de uitgangen die hier ontbreken. Hij is in de maak. Wanneer hij klaar is en hoe hij verkrijgbaar zal zijn, staat nog niet vast; zodra het vaststaat, staat het hier.',
        'Blijft de vraag waarom uitgerekend deze ene tool geld moet kosten, terwijl onderaan in de voettekst “Open source op GitHub” staat. Het eerlijke antwoord: de andere doen elk één ding en waren in een paar avonden klaar. fontART bouwt echte TrueType-bestanden — contouren, zijafstanden, kerning, naamtabellen — en is daarmee vele malen groter dan al het andere in deze werkplaats. Programma’s die dat kunnen, kosten stuk voor stuk geld. De werkplaats blijft gratis; deze ene tool moet de tijd dragen die erin zit.',
        'Wat de proefversie uitdrukkelijk niet doet: naar je e-mailadres vragen. Geen account, geen aanmelding, geen wachttijd, geen nieuwsbrief — downloaden, tekenen, zelf zien of het resultaat je bevalt.'
      ],
      pl: [
        'Wersja próbna pozwala wypróbować wszystko: malowanie, linie konstrukcyjne, glif-ducha do porównywania, propozycje kerningu, test pisania, zapisywanie i wczytywanie swojej pracy. Żadne narzędzie nie jest okrojone — zamknięte jest jedynie wyjście. Eksport daje małe litery a–z, zawsze pod nazwą „fontART DEMO”, a pozostałe sposoby eksportu (.woff, arkusz wzorcowy, pakiet kompletny, pogrubienie i kursywa, arkusz ćwiczeniowy, zapis wideo) w tej wersji w ogóle nie są wbudowane.',
        'Która z obu wersji? W przeglądarce zaczynasz malować po jednym kliknięciu, palcem albo rysikiem — na ekranie dotykowym jest to bliżej pisma odręcznego niż jakakolwiek mysz — i nie tyka tam żaden zegar. Program dla Windows jest bliższy pełnej wersji i działa 60 minut na każde uruchomienie; za to gotowy krój instalujesz od razu i próbujesz go w Wordzie. Na telefonie to nie przejdzie: pliku z krojem pisma nie da się pod Android ani iOS ustawić jako czcionki systemowej. Telefon jest lepszym urządzeniem do malowania, komputer urządzeniem do instalowania — plik .ttf wysyłasz sobie po prostu sam.',
        'Pełna wersja rysuje wszystkie 333 znaki zamiast 26 — wielkie i małe litery, cyfry, umlauty, ß, znaki interpunkcyjne, do tego grekę, cyrylicę i japońskie sylabariusze — nosi nazwę, którą wpiszesz, i ma te sposoby eksportu, których tutaj brakuje. Jest w przygotowaniu. Kiedy będzie gotowa i w jaki sposób będzie dostępna, jeszcze nie jest ustalone; gdy tylko będzie ustalone, będzie tu napisane.',
        'Pozostaje pytanie, dlaczego akurat to jedno narzędzie ma kosztować pieniądze, skoro na dole w stopce widnieje „Otwarty kod na GitHubie”. Uczciwa odpowiedź: każde z pozostałych robi jedną rzecz i było gotowe w parę wieczorów. fontART buduje prawdziwe pliki TrueType — kontury, odstępy boczne, kerning, tablice nazw — i jest przez to wielokrotnie większy niż wszystko inne w tym warsztacie. Wszystkie programy, które to potrafią, są płatne. Warsztat pozostaje darmowy; to jedno narzędzie ma udźwignąć czas, który w tym warsztacie tkwi.',
        'Czego wersja próbna wyraźnie nie robi: nie pyta o twój adres e-mail. Bez konta, bez rejestracji, bez okresu oczekiwania, bez newslettera — pobrać, malować, samemu zobaczyć, czy wynik ci się podoba.'
      ],
      pt: [
        'A versão de teste deixa-o experimentar tudo: desenhar, linhas de construção, glifo-fantasma para comparar, sugestões de kerning, teste de escrita, guardar e carregar o seu trabalho. Nenhuma ferramenta está limitada — fechada está apenas a exportação. A exportação entrega as minúsculas a–z, sempre com o nome «fontART DEMO», e os restantes caminhos de saída (.woff, folha de amostra, pacote completo, negrito e itálico, folha de exercícios, gravação em vídeo) nem sequer estão incluídos nesta versão.',
        'Qual das duas versões? No navegador está a desenhar com um clique, com o dedo ou com uma caneta — num ecrã tátil isso fica mais perto da escrita à mão do que qualquer rato — e ali não corre relógio nenhum. O programa para Windows está mais perto da versão completa e corre 60 minutos por arranque; em troca, instala logo a fonte acabada e experimenta-a no Word. No telemóvel isso não dá: um ficheiro de fonte não se consegue instalar como fonte do sistema no Android nem no iOS. O telemóvel é o melhor aparelho para desenhar, o computador o aparelho para instalar — o .ttf envia-o simplesmente a si mesmo.',
        'A versão completa desenha todos os 333 caracteres em vez de 26 — maiúsculas e minúsculas, algarismos, tremas, ß, sinais de pontuação, mais grego, cirílico e os silabários japoneses —, leva o nome que você escrever e conhece as saídas que aqui faltam. Está em preparação. Quando ficará pronta e por que via estará disponível ainda não está decidido; assim que estiver, ficará escrito aqui.',
        'Fica a pergunta de por que razão logo esta ferramenta há de custar dinheiro, quando lá em baixo, no rodapé, diz «Código aberto no GitHub». Resposta honesta: as outras fazem cada uma uma só coisa e ficaram prontas em algumas noites. O fontART constrói ficheiros TrueType a sério — contornos, espaçamentos laterais, kerning, tabelas de nomes — e é, por isso, muitas vezes maior do que tudo o resto nesta oficina. Os programas que sabem fazer isto custam todos dinheiro. A oficina continua gratuita; esta ferramenta é que há de compensar o tempo que está metido nela.',
        'O que a versão de teste expressamente não faz: pedir o seu endereço de e-mail. Sem conta, sem registo, sem período de espera, sem newsletter — transferir, desenhar e ver você mesmo se gosta do resultado.'
      ],
      tr: [
        'Deneme sürümü her şeyi denemenize izin verir: çizmek, yapı çizgileri, karşılaştırmak için hayalet glif, kerning önerileri, yazma testi, çalışmanızı kaydetmek ve geri yüklemek. Hiçbir araç kısılmamıştır — kapalı olan yalnızca çıkıştır. Dışa aktarma a–z küçük harflerini verir, her zaman “fontART DEMO” adı altında; kalan çıkış yolları (.woff, örnek sayfası, tam paket, kalın ve italik, alıştırma sayfası, video kaydı) bu sürüme hiç eklenmemiştir.',
        'Peki hangi sürüm? Tarayıcıda tek tıkla çizmeye başlarsınız, parmakla ya da kalemle — dokunmatik ekranda bu, el yazısına her fareden daha yakındır — ve orada saat işlemez. Windows programı tam sürüme daha yakındır ve her başlatmada 60 dakika çalışır; buna karşılık bitmiş yazı tipini hemen kurarsınız ve Word’de denersiniz. Telefonda bu olmaz: Bir yazı tipi dosyası Android ve iOS’ta sistem yazı tipi olarak kurulamaz. Telefon daha iyi çizim aygıtı, bilgisayar ise kurulum aygıtıdır — .ttf dosyasını kendinize gönderirsiniz, o kadar.',
        'Tam sürüm 26 yerine 333 karakterin hepsini çizer — büyük ve küçük harfler, rakamlar, umlautlu harfler (ä, ö, ü), ß, noktalama işaretleri, ayrıca Yunanca, Kiril ve Japon hece yazıları — yazdığınız adı taşır ve burada eksik olan çıkışları bilir. Üzerinde çalışılıyor. Ne zaman biteceği ve hangi yoldan edinilebileceği henüz belli değil; belli olduğu anda burada yazacak.',
        'Geriye şu soru kalıyor: Aşağıda, alt bilgide “GitHub’da açık kaynak” yazarken neden tam da bu tek araç para istesin? Dürüst yanıt: Diğerleri birer iş yapıyor ve birkaç akşamda bitmişti. fontART gerçek TrueType dosyaları üretir — konturlar, yan boşluklar, kerning, ad tabloları — ve bu yüzden bu atölyedeki her şeyden kat kat büyüktür. Bunu yapabilen programların hepsi para eder. Atölye ücretsiz kalıyor; bu tek araç, içine giren zamanı taşısın diye var.',
        'Deneme sürümünün açıkça yapmadığı şey: E-posta adresinizi sormak. Hesap yok, kayıt yok, bekleme süresi yok, bülten yok — indirin, çizin, sonucu beğenip beğenmediğinizi kendiniz görün.'
      ],
      ru: [
        'Пробная версия даёт попробовать всё: рисование, вспомогательные линии, глиф-призрак для сравнения, предложения по кернингу, тест набора, сохранение и загрузку своей работы. Ни один инструмент не урезан — закрыт только выход. Экспорт выдаёт строчные буквы a–z, всегда под именем «fontART DEMO», а остальные пути вывода (.woff, лист-образец, полный пакет, жирное и курсивное начертание, лист для упражнений, запись видео) в этой версии просто не встроены.',
        'Какая из двух версий? В браузере вы начинаете рисовать в один клик, пальцем или стилусом — на сенсорном экране это ближе к почерку, чем любая мышь, — и там время не ограничено. Программа для Windows ближе к полной версии и работает по 60 минут за запуск; зато готовый шрифт вы сразу устанавливаете и пробуете в Word. На телефоне так не выйдет: файл шрифта нельзя установить как системный шрифт ни в Android, ни в iOS. Телефон лучше подходит для рисования, компьютер — для установки; файл .ttf вы просто отправляете себе сами.',
        'Полная версия рисует все 333 символа вместо 26 — прописные и строчные буквы, цифры, умлауты, ß, знаки препинания, плюс греческий алфавит, кириллицу и японские слоговые азбуки, — она носит имя, которое вы впишете, и знает те пути вывода, которых здесь нет. Она в работе. Когда она будет готова и каким путём её можно будет получить, пока не решено; как только решится, здесь об этом будет написано.',
        'Остаётся вопрос, почему именно этот один инструмент должен стоить денег, когда внизу страницы написано «Открытый код на GitHub». Честный ответ: каждый из остальных делает одно дело и был готов за несколько вечеров. fontART строит настоящие файлы TrueType — контуры, боковые отступы, кернинг, таблицы имён — и потому во много раз больше всего остального в этой мастерской. Программы, которые это умеют, все до одной стоят денег. Мастерская остаётся бесплатной; этот один инструмент должен нести то время, которое в неё вложено.',
        'Чего пробная версия намеренно не делает: не спрашивает ваш адрес электронной почты. Ни аккаунта, ни регистрации, ни срока ожидания, ни рассылки — скачать, рисовать, самому увидеть, нравится ли результат.'
      ],
      hi: [
        'परीक्षण संस्करण आपको सब कुछ आज़माने देता है: बनाना, रचना-रेखाएँ, तुलना के लिए भूत-ग्लिफ़, कर्निंग के सुझाव, टाइपिंग जाँच, अपने काम को सहेजना और लोड करना। कोई औज़ार कटा-छँटा नहीं है — बंद सिर्फ़ निकास का रास्ता है। निर्यात छोटे अक्षर a–z देता है, हमेशा “fontART DEMO” नाम के नीचे, और बाक़ी निकास के रास्ते (.woff, नमूना-पत्रक, पूरा पैकेज, मोटा और तिरछा, अभ्यास-पत्रक, वीडियो रिकॉर्डिंग) इस संस्करण में बनाए ही नहीं गए हैं।',
        'दोनों में से कौन-सा? ब्राउज़र में आप एक क्लिक में बनाना शुरू कर देते हैं, उँगली या स्टाइलस से — टचस्क्रीन पर यह किसी भी माउस से लिखावट के ज़्यादा क़रीब है — और वहाँ कोई घड़ी नहीं चलती। Windows प्रोग्राम पूर्ण संस्करण के ज़्यादा क़रीब है और हर बार शुरू करने पर 60 मिनट चलता है; बदले में आप तैयार फ़ॉन्ट को तुरंत इंस्टॉल करके Word में आज़मा लेते हैं। फ़ोन पर यह नहीं होता: Android और iOS में किसी फ़ॉन्ट फ़ाइल को सिस्टम फ़ॉन्ट के रूप में नहीं लगाया जा सकता। फ़ोन बनाने का बेहतर उपकरण है, कंप्यूटर इंस्टॉल करने का — .ttf आप बस खुद को भेज देते हैं।',
        'पूर्ण संस्करण 26 के बजाय पूरे 333 वर्ण बनाता है — बड़े और छोटे अक्षर, अंक, उमलाउट, ß, विराम चिह्न, साथ में यूनानी, सिरिलिक और जापानी काना लिपियाँ — उसका नाम वही होता है जो आप टाइप करते हैं, और उसमें वे निकास भी हैं जो यहाँ नहीं हैं। वह तैयार हो रहा है। वह कब पूरा होगा और किस रास्ते मिलेगा, यह अभी तय नहीं है; जैसे ही तय होगा, यहीं लिखा मिलेगा।',
        'बचता है यह सवाल कि आख़िर यही एक औज़ार पैसे क्यों ले, जबकि नीचे फ़ुटर में “GitHub पर ओपन सोर्स” लिखा है। ईमानदार जवाब: बाक़ी औज़ार एक-एक काम करते हैं और कुछ शामों में बनकर तैयार हो गए थे। fontART असली TrueType फ़ाइलें बनाता है — कंटूर, अक्षरों के बीच की जगहें, कर्निंग, नाम-तालिकाएँ — और इससे वह इस वर्कशॉप की हर दूसरी चीज़ से कई गुना बड़ा हो जाता है। जो प्रोग्राम यह कर सकते हैं, वे सब पैसे लेते हैं। वर्कशॉप मुफ़्त बनी रहेगी; यह एक औज़ार उस समय का बोझ उठाए जो उसमें लगा है।',
        'परीक्षण संस्करण साफ़ तौर पर जो नहीं करता: आपका ईमेल पता माँगना। कोई खाता नहीं, कोई साइन-अप नहीं, कोई इंतज़ार की अवधि नहीं, कोई न्यूज़लेटर नहीं — डाउनलोड करें, बनाएँ, और खुद देखें कि नतीजा आपको पसंद आता है या नहीं।'
      ],
      zh: [
        '试用版让你把一切都试一遍：绘制、辅助线、用来比对的幽灵字形、字距建议、打字测试、保存和载入你的工作。没有哪个工具被削减——关上的只有出口。导出给出的是小写字母 a–z，名称永远是“fontART DEMO”，而其余那些输出方式（.woff、样本页、完整包、粗体和斜体、练习页、视频录制）在这个版本里根本就没做进去。',
        '两份里选哪一份？在浏览器里，你点一下就开始画了，用手指或触控笔——在触摸屏上，这比任何鼠标都更接近手写——而且那里没有计时。Windows 程序更接近完整版，每次启动可用 60 分钟；换来的是你能立刻把做好的字体装上，并在 Word 里试试它。在手机上这一步做不了：字体文件在 Android 和 iOS 上没法设为系统字体。手机是更好的绘制设备，电脑是安装设备——那个 .ttf 你自己发给自己就行。',
        '完整版画的是全部 333 个字符，而不是 26 个——大写和小写字母、数字、变音字母、ß、标点，另加希腊字母、西里尔字母和日语假名——它带着你自己输入的名称，也有这里缺的那些出口。它正在制作中。什么时候做完、以什么方式能拿到，都还没定；一旦定下来，这里就会写出来。',
        '那就还剩一个问题：既然下面页脚写着“GitHub 开源项目”，为什么偏偏这一个工具要收钱。老实的回答：其他那些各自只做一件事，几个晚上就做完了。fontART 生成的是真正的 TrueType 文件——轮廓、边距、字距、名称表——因此它比这间工坊里其他任何东西都要大上好几倍。能做到这件事的程序，无一例外都要钱。工坊会一直免费；这一个工具，要来撑起投进这间工坊里的那些时间。',
        '试用版明确不做的事：向你要电子邮箱地址。没有账号、没有注册、没有等待期、没有邮件订阅——下载、画、自己看看结果合不合你意。'
      ],
      ja: [
        '体験版ではすべてを試せます: 描画、補助線、比べるためのゴーストグリフ、カーニングの提案、タイピングテスト、作業の保存と読み込み。削られている道具はひとつもありません — 閉じているのは出口だけです。書き出しは小文字 a–z を、いつも「fontART DEMO」という名前で出します。そのほかの出口（.woff、見本シート、一式パッケージ、太字と斜体、練習シート、動画の記録）は、この版にはそもそも組み込まれていません。',
        'どちらの版を選ぶか。ブラウザーなら1クリックで描き始められて、指やペンが使えます — タッチ画面はどんなマウスよりも手書きに近いです — そしてそこには時間制限がありません。Windows 版のプログラムは製品版により近く、1回の起動につき60分動きます。その代わり、できあがったフォントをすぐインストールして Word で試せます。スマートフォンではそれができません: フォントファイルは Android でも iOS でもシステムフォントとして設定できないからです。スマートフォンは描くのに向いた機械、パソコンはインストールする機械です — .ttf は自分宛てに送ればすみます。',
        '製品版では26文字ではなく333文字すべてを描きます — 大文字と小文字、数字、ウムラウト、ß、句読点、さらにギリシャ文字、キリル文字、そして日本語の仮名です。名前は自分で打ち込んだものが入り、ここにない出口も備えています。現在制作中です。いつ完成するのか、どういう形で手に入るようになるのかは、まだ決まっていません。決まり次第、ここに書きます。',
        '残るのは、下のフッターに「GitHubでオープンソース公開中」と書いてあるのに、なぜよりによってこの道具だけがお金を取るのか、という問いです。正直に答えます: ほかの道具はそれぞれひとつのことをするもので、数晩で仕上がりました。fontART は本物の TrueType ファイルを作ります — アウトライン、サイドベアリング、カーニング、ネームテーブル — そのぶん、この工房のほかの何よりも何倍も大きいのです。これができるプログラムは、どれもお金がかかります。工房は無料のままです。この道具ひとつが、そこに注がれた時間を支えることになっています。',
        '体験版がはっきりとやらないこと: メールアドレスを尋ねることです。アカウントなし、登録なし、待ち時間なし、ニュースレターなし — ダウンロードして、描いて、結果が気に入るかどうか自分で見てください。'
      ],
      ko: [
        '체험판에서는 전부 해 볼 수 있습니다: 그리기, 보조선, 비교용 고스트 글리프, 커닝 제안, 타이핑 시험, 작업 저장과 불러오기. 잘려 나간 도구는 하나도 없습니다 — 닫혀 있는 것은 출구뿐입니다. 내보내기는 소문자 a–z를 언제나 “fontART DEMO”라는 이름으로 내놓으며, 나머지 출구(.woff, 견본지, 완성 꾸러미, 굵게와 기울임, 연습지, 화면 녹화)는 이 판에는 아예 들어 있지 않습니다.',
        '둘 중 어느 판을 쓸까요? 브라우저에서는 한 번 누르면 바로 그리기 시작이고, 손가락이나 펜으로 그립니다 — 터치 화면에서는 어떤 마우스보다 손글씨에 가깝습니다 — 그리고 거기에는 시계가 돌지 않습니다. Windows 프로그램은 정식판에 더 가깝고 실행할 때마다 60분 동안 돌아갑니다. 대신 완성된 글꼴을 곧바로 설치해 Word에서 시험해 볼 수 있습니다. 휴대폰에서는 그것이 되지 않습니다: 글꼴 파일은 Android와 iOS에서 시스템 글꼴로 설치할 수 없습니다. 휴대폰은 더 나은 그리기 도구이고 컴퓨터는 설치 도구입니다 — .ttf 파일은 자기 자신에게 보내면 그만입니다.',
        '정식판은 26자가 아니라 333자를 모두 그립니다 — 대문자와 소문자, 숫자, 움라우트, ß, 문장 부호, 여기에 그리스 문자, 키릴 문자, 일본어 음절 문자까지 — 직접 입력한 이름을 달고, 여기에 없는 출구들을 갖추고 있습니다. 지금 작업 중입니다. 언제 완성될지, 어떤 경로로 구할 수 있을지는 아직 정해지지 않았습니다. 정해지는 대로 여기에 적습니다.',
        '아래 바닥글에는 “GitHub 오픈 소스”라고 적혀 있는데 왜 하필 이 도구 하나만 돈을 받아야 하느냐는 물음이 남습니다. 정직한 대답은 이렇습니다: 다른 도구들은 각각 한 가지 일을 하고 며칠 저녁이면 끝났습니다. fontART는 진짜 TrueType 파일을 만듭니다 — 윤곽선, 좌우 여백, 커닝, 이름 테이블 — 그래서 이 작업실의 다른 무엇보다 몇 배는 큽니다. 이 일을 할 수 있는 프로그램은 하나같이 돈을 받습니다. 작업실은 계속 무료로 남습니다. 이 도구 하나가 거기에 들어간 시간을 떠받치라는 뜻입니다.',
        '체험판이 분명히 하지 않는 일: 이메일 주소를 묻지 않습니다. 계정도, 가입도, 대기 기간도, 뉴스레터도 없습니다 — 내려받고, 그리고, 결과가 마음에 드는지 직접 보면 됩니다.'
      ]
    },
    steps: {
      de: [
        'Die Seite öffnen — oder für Windows die .exe aus den Releases laden und starten. Dort meldet Windows „Unbekannter Herausgeber“, weil die Datei nicht signiert ist; über „Weitere Informationen“ und „Trotzdem ausführen“ geht es weiter. Installiert wird in keinem der beiden Fälle etwas.',
        'Ein Zeichen aus der Leiste wählen und die schwarze Fläche des Buchstabens malen, nicht die Linie. Fang mit n und o an — die beiden legen den Rhythmus deiner Schrift fest. Zittert die Hand, hilft der Regler „Stabilisator“.',
        'Über „⬇ Schrift exportieren…“ die .ttf erzeugen. In Windows Rechtsklick auf die Datei, „Für alle Benutzer installieren“ — danach steht deine Schrift in Word unter „fontART DEMO“.'
      ],
      en: [
        'Open the page — or, for Windows, download the .exe from the releases page and start it. There Windows will say “unknown publisher” because the file is not signed; continue via “more info” and “run anyway”. Either way, nothing gets installed.',
        'Pick a character from the bar and paint the black shape of the letter, not the line. Start with n and o — those two set the rhythm of your typeface. If your hand shakes, the “stabiliser” slider helps.',
        'Use “⬇ Export font…” to produce the .ttf. In Windows right-click the file and choose “install for all users” — after that your typeface shows up in Word as “fontART DEMO”.'
      ],
      es: [
        'Abre la página o, para Windows, descarga el .exe desde las versiones y ejecútalo. Allí Windows avisa de «Editor desconocido» porque el archivo no está firmado; se continúa con «Más información» y «Ejecutar de todas formas». En ninguno de los dos casos se instala nada.',
        'Elige un carácter de la barra y pinta la superficie negra de la letra, no la línea. Empieza con la n y la o: esas dos fijan el ritmo de tu letra. Si te tiembla la mano, ayuda el control «Stabilisator» (estabilizador).',
        'Con «⬇ Exportar la fuente…» generas el .ttf. En Windows, clic derecho en el archivo, «Instalar para todos los usuarios»; después tu letra aparece en Word como «fontART DEMO».'
      ],
      fr: [
        'Ouvrir la page — ou, pour Windows, télécharger le .exe depuis les releases et le lancer. Là, Windows signale « Éditeur inconnu », parce que le fichier n’est pas signé ; on continue via « Informations complémentaires » et « Exécuter quand même ». Dans les deux cas, rien n’est installé.',
        'Choisir un caractère dans la barre et peindre la surface noire de la lettre, pas le trait. Commencez par le n et le o — ces deux-là fixent le rythme de votre écriture. Si la main tremble, le curseur « Stabilisator » (stabilisateur) aide.',
        'Avec « ⬇ Exporter la police… », produire le .ttf. Dans Windows, clic droit sur le fichier, « Installer pour tous les utilisateurs » — ensuite votre police figure dans Word sous « fontART DEMO ».'
      ],
      it: [
        'Apri la pagina — oppure, per Windows, scarica il file .exe dalle release e avvialo. Lì Windows segnala «Editore sconosciuto» perché il file non è firmato; prosegui con «Ulteriori informazioni» ed «Esegui comunque». In nessuno dei due casi viene installato qualcosa.',
        'Scegli un carattere dalla barra e disegna la superficie nera della lettera, non la linea. Comincia con n e o: sono quelle due a fissare il ritmo della tua scrittura. Se la mano trema, ti aiuta il cursore «Stabilisator» (stabilizzatore).',
        'Con «⬇ Esporta il font…» genera il .ttf. In Windows fai clic destro sul file e scegli «Installa per tutti gli utenti»: dopodiché il tuo carattere compare in Word sotto «fontART DEMO».'
      ],
      nl: [
        'Open de pagina — of download voor Windows de .exe van de releases-pagina en start hem. Daar meldt Windows “Onbekende uitgever”, omdat het bestand niet ondertekend is; via “Meer informatie” en “Toch uitvoeren” ga je verder. In beide gevallen wordt er niets geïnstalleerd.',
        'Kies een teken uit de balk en teken het zwarte vlak van de letter, niet de lijn. Begin met n en o — die twee leggen het ritme van je lettertype vast. Trilt je hand, dan helpt de schuifregelaar “Stabilisator”.',
        'Maak via “⬇ Lettertype exporteren…” de .ttf. Klik in Windows met rechts op het bestand, “Voor alle gebruikers installeren” — daarna staat je lettertype in Word onder “fontART DEMO”.'
      ],
      pl: [
        'Otworzyć stronę — albo dla Windows pobrać plik .exe ze strony wydań i uruchomić go. Tam Windows zgłosi „Nieznany wydawca”, bo plik nie jest podpisany; dalej prowadzą „Więcej informacji” i „Uruchom mimo to”. W żadnym z tych dwóch przypadków nic się nie instaluje.',
        'Wybrać znak z paska i malować czarną powierzchnię litery, nie linię. Zacznij od n i o — te dwie ustalają rytm twojego pisma. Gdy drży ręka, pomaga suwak „Stabilisator” (stabilizator).',
        'Przez „⬇ Eksportuj czcionkę…” utworzyć plik .ttf. W Windows prawy przycisk myszy na pliku, „Zainstaluj dla wszystkich użytkowników” — potem twoje pismo pojawi się w Wordzie pod „fontART DEMO”.'
      ],
      pt: [
        'Abrir a página — ou, para Windows, transferir o .exe da página de versões e iniciá-lo. Aí o Windows avisa «Editor desconhecido», porque o ficheiro não está assinado; continua-se através de «Mais informações» e «Executar mesmo assim». Em nenhum dos dois casos se instala seja o que for.',
        'Escolher um caractere da barra e pintar a mancha preta da letra, não a linha. Comece pelo n e pelo o — são esses dois que fixam o ritmo da sua letra. Se a mão tremer, ajuda o cursor «Stabilisator» (estabilizador).',
        'Com «⬇ Exportar fonte…» criar o .ttf. No Windows, clicar com o botão direito no ficheiro e escolher «Instalar para todos os utilizadores» — depois disso a sua letra fica no Word com o nome «fontART DEMO».'
      ],
      tr: [
        'Sayfayı açın — ya da Windows için .exe dosyasını sürümler sayfasından indirip başlatın. Orada Windows, dosya imzalı olmadığı için “Bilinmeyen yayımcı” uyarısı verir; “Daha fazla bilgi” ve “Yine de çalıştır” üzerinden devam edilir. İki durumda da hiçbir şey kurulmaz.',
        'Çubuktan bir karakter seçin ve harfin çizgisini değil, siyah yüzeyini boyayın. n ve o ile başlayın — yazınızın ritmini bu ikisi belirler. Eliniz titriyorsa “Stabilisator” (sabitleyici) sürgüsü yardımcı olur.',
        '“⬇ Yazı tipini dışa aktar…” ile .ttf dosyasını üretin. Windows’ta dosyaya sağ tıklayıp “Tüm kullanıcılar için yükle” seçeneğini kullanın — ardından yazınız Word’de “fontART DEMO” adıyla görünür.'
      ],
      ru: [
        'Откройте страницу — или для Windows скачайте .exe со страницы выпусков и запустите. Там Windows сообщит «Неизвестный издатель», потому что файл не подписан; продолжить можно через «Подробнее» и «Выполнить в любом случае». Ни в том, ни в другом случае ничего не устанавливается.',
        'Выберите символ на панели и нарисуйте сплошную чёрную форму буквы, а не линию. Начните с n и o — эти две задают ритм вашего шрифта. Дрожит рука — поможет ползунок «Stabilisator» (стабилизатор).',
        'Через «⬇ Экспорт шрифта…» создайте .ttf. В Windows правый щелчок по файлу, «Установить для всех пользователей» — после этого ваш шрифт появится в Word под именем «fontART DEMO».'
      ],
      hi: [
        'पेज खोलें — या Windows के लिए रिलीज़ पेज से .exe डाउनलोड करके शुरू करें। वहाँ Windows “अज्ञात प्रकाशक” की चेतावनी देता है, क्योंकि फ़ाइल पर हस्ताक्षर नहीं हैं; “अधिक जानकारी” और “फिर भी चलाएँ” से आगे बढ़ा जा सकता है। दोनों में से किसी भी हाल में कुछ इंस्टॉल नहीं होता।',
        'पट्टी से एक वर्ण चुनें और अक्षर की काली सतह बनाएँ, रेखा नहीं। n और o से शुरू करें — यही दोनों आपकी लिखावट की लय तय करते हैं। हाथ काँपता हो, तो “Stabilisator” (स्टेबिलाइज़र) स्लाइडर मदद करता है।',
        '“⬇ फ़ॉन्ट एक्सपोर्ट करें…” से .ttf बनाएँ। Windows में फ़ाइल पर दायाँ क्लिक करके “सभी उपयोगकर्ताओं के लिए इंस्टॉल करें” चुनें — उसके बाद आपकी लिखावट Word में “fontART DEMO” के नाम से दिखती है।'
      ],
      zh: [
        '打开这个页面——或者对 Windows 来说，从发布页下载 .exe 并启动它。那时 Windows 会提示“未知发布者”，因为这个文件没有签名；通过“更多信息”和“仍要运行”继续。两种情况下都不会安装任何东西。',
        '从字符条里选一个字符，画出字母的黑色形状，而不是那条线。先从 n 和 o 开始——这两个定下了你这套字的节奏。手抖的话，“稳定器”滑块能帮上忙。',
        '通过“⬇ 导出字体…”生成 .ttf。在 Windows 里右键点击这个文件，选“为所有用户安装”——之后你的字体就会在 Word 里以“fontART DEMO”出现。'
      ],
      ja: [
        'ページを開きます — Windows 版なら、リリースページから .exe をダウンロードして起動します。そこでは、ファイルに署名がないため Windows が「不明な発行元」と表示します。「詳細情報」と「実行」から先に進めます。どちらの場合もインストールは行われません。',
        '並んだ文字からひとつ選び、線ではなく文字の黒い面を描きます。まず n と o から始めてください — この2つがあなたの書体のリズムを決めます。手が震えるなら「Stabilisator」（手ぶれ補正）のスライダーが助けになります。',
        '「⬇ フォントを書き出す…」で .ttf を作ります。Windows ではファイルを右クリックして「すべてのユーザーに対してインストール」を選びます — そのあと、あなたの書体が Word に「fontART DEMO」として並びます。'
      ],
      ko: [
        '페이지를 엽니다 — 아니면 Windows용으로 릴리스에서 .exe를 내려받아 실행합니다. 그때 파일에 서명이 없어서 Windows가 “알 수 없는 게시자”라고 알립니다. “추가 정보”와 “실행”을 거쳐 계속 진행하면 됩니다. 어느 쪽이든 설치되는 것은 없습니다.',
        '막대에서 글자를 하나 고르고 글자의 검은 면을 칠합니다. 선이 아니라 면입니다. n과 o부터 시작합니다 — 그 둘이 글씨의 리듬을 정합니다. 손이 떨린다면 “Stabilisator”(안정기) 슬라이더가 도와줍니다.',
        '“⬇ 글꼴 내보내기…”로 .ttf를 만듭니다. Windows에서 파일을 오른쪽 클릭하고 “모든 사용자용으로 설치”를 고릅니다 — 그다음부터 Word에 내 글꼴이 “fontART DEMO”로 나타납니다.'
      ]
    },
    pitfalls: {
      de: [
        'Die 60 Minuten gelten nur für das Windows-Programm. Sie laufen ab dem Start und lassen sich nicht anhalten — auch ein kleingeklapptes Fenster zählt weiter. Ist die Zeit um, kannst du nicht mehr malen und nicht mehr exportieren; speichern geht weiterhin. Danach fontART neu starten, die gespeicherte Datei laden und weitermachen. Im Browser läuft keine Uhr.',
        'Am iPhone bitte Safari benutzen. In den eingebauten Browsern von Instagram, Facebook oder WhatsApp scheitert das Herunterladen der fertigen Schrift — sie kommt schlicht nicht an. Wer einen solchen Link öffnet, tippt auf „In Safari öffnen“ und fängt dort an.',
        'Der Export gibt ausschließlich a–z aus. Großbuchstaben, Zahlen, Umlaute, ß und Satzzeichen kannst du malen, sie landen aber nicht in der Schriftdatei — Wörter mit ihnen erscheinen später in der Ersatzschrift des Programms.',
        'Der Schriftname ist fest „fontART DEMO“. Was du ins Namensfeld tippst, wird beim Export übergangen. Zwei Demo-Schriften nebeneinander zu installieren, klappt deshalb nicht: Windows sieht zweimal denselben Namen.',
        'Deine Arbeit liegt allein in der Datei, die du selbst über „💾 Speichern“ anlegst. Die Testversion merkt sich beim Schließen nichts von allein — vor Ablauf der Uhr also unbedingt speichern.',
        'Das Programm gibt es nur für Windows 10/11 in 64 Bit — für Mac und Linux nimmst du die Seite im Browser. Einen Update-Prüfer hat weder die eine noch die andere Fassung: neue Fassungen der .exe holst du dir selbst von der Releases-Seite, die Seite ist beim nächsten Aufruf von allein aktuell.'
      ],
      en: [
        'The 60 minutes apply to the Windows program only. They run from the start and cannot be paused — a minimised window keeps counting too. Once the time is up you can no longer draw or export; saving still works. After that, restart fontART, load your saved file and carry on. In the browser no clock runs.',
        'On an iPhone, please use Safari. Inside the built-in browsers of Instagram, Facebook or WhatsApp, downloading the finished font fails — it simply never arrives. If you opened such a link, tap “open in Safari” and start there.',
        'The export only produces a–z. You can draw capitals, digits, umlauts, ß and punctuation, but they do not end up in the font file — words containing them will later appear in the program’s fallback typeface.',
        'The font name is fixed at “fontART DEMO”. Whatever you type into the name field is ignored on export. Installing two demo fonts side by side therefore does not work: Windows sees the same name twice.',
        'Your work lives solely in the file you create yourself via “💾 Save”. The trial remembers nothing on its own when it closes — so do save before the clock runs out.',
        'The program is Windows 10/11, 64-bit only — on a Mac or on Linux you use the page in your browser. Neither version has an update checker: you fetch new builds of the .exe from the releases page yourself, while the page is simply current the next time you open it.'
      ],
      es: [
        'Los 60 minutos valen solo para el programa de Windows. Corren desde el arranque y no se pueden parar: una ventana minimizada también sigue contando. Cuando se acaba el tiempo ya no puedes dibujar ni exportar; guardar sí sigue funcionando. Después, reinicia fontART, carga el archivo guardado y sigue. En el navegador no corre ningún reloj.',
        'En el iPhone, usa Safari, por favor. En los navegadores integrados de Instagram, Facebook o WhatsApp falla la descarga de la fuente terminada: sencillamente no llega. Quien abra un enlace así, que toque «Abrir en Safari» y empiece allí.',
        'La exportación entrega exclusivamente la a–z. Las mayúsculas, las cifras, las diéresis, la ß y los signos de puntuación los puedes dibujar, pero no acaban en el archivo de fuente: las palabras que los lleven aparecerán después en la tipografía de reemplazo del programa.',
        'El nombre de la fuente es fijo, «fontART DEMO». Lo que escribas en el campo del nombre se pasa por alto al exportar. Por eso no funciona instalar dos fuentes de demostración a la vez: Windows ve dos veces el mismo nombre.',
        'Tu trabajo está únicamente en el archivo que creas tú mismo con «💾 Guardar». La versión de prueba no recuerda nada por sí sola al cerrarse: así que guarda sin falta antes de que se acabe el tiempo.',
        'El programa existe solo para Windows 10/11 de 64 bits; para Mac y Linux usas la página en el navegador. Ninguna de las dos versiones tiene comprobador de actualizaciones: las versiones nuevas del .exe las buscas tú mismo en la página de versiones, y la página está al día por sí sola la próxima vez que la abras.'
      ],
      fr: [
        'Les 60 minutes ne valent que pour le programme Windows. Elles courent à partir du démarrage et ne peuvent pas être mises en pause — même une fenêtre réduite continue de compter. Une fois le temps écoulé, vous ne pouvez plus dessiner ni exporter ; enregistrer reste possible. Ensuite, redémarrer fontART, charger le fichier enregistré et continuer. Dans le navigateur, aucun chronomètre ne tourne.',
        'Sur iPhone, utilisez Safari. Dans les navigateurs intégrés d’Instagram, de Facebook ou de WhatsApp, le téléchargement de la police terminée échoue — elle n’arrive tout simplement pas. Si vous avez ouvert un tel lien, touchez « Ouvrir dans Safari » et commencez là.',
        'L’export ne produit que a–z. Vous pouvez dessiner les majuscules, les chiffres, les trémas, le ß et les signes de ponctuation, mais ils n’atterrissent pas dans le fichier de police — les mots qui en contiennent apparaîtront plus tard dans la police de remplacement du programme.',
        'Le nom de la police est fixé à « fontART DEMO ». Ce que vous tapez dans le champ du nom est ignoré à l’export. Installer deux polices de démonstration côte à côte ne marche donc pas : Windows voit deux fois le même nom.',
        'Votre travail se trouve uniquement dans le fichier que vous créez vous-même via « 💾 Enregistrer ». La version d’essai ne retient rien d’elle-même à la fermeture — enregistrez donc impérativement avant la fin du chronomètre.',
        'Le programme n’existe que pour Windows 10/11 en 64 bits — pour Mac et Linux, vous prenez la page dans le navigateur. Ni l’une ni l’autre version n’a de vérificateur de mises à jour : les nouvelles versions du .exe, vous allez les chercher vous-même sur la page des releases, tandis que la page est à jour d’elle-même à la prochaine visite.'
      ],
      it: [
        'I 60 minuti valgono solo per il programma per Windows. Corrono dall’avvio e non si possono mettere in pausa: anche una finestra ridotta a icona continua a contare. Finito il tempo, non puoi più disegnare né esportare; salvare funziona ancora. Poi riavvia fontART, carica il file salvato e continua. Nel browser non c’è nessun timer.',
        'Su iPhone usa Safari. Nei browser incorporati di Instagram, Facebook o WhatsApp lo scaricamento del carattere finito fallisce: semplicemente non arriva. Chi apre un link del genere tocca «Apri in Safari» e comincia lì.',
        'L’esportazione dà esclusivamente a–z. Maiuscole, cifre, dieresi, ß e segni di punteggiatura li puoi disegnare, ma non finiscono nel file del carattere: le parole che li contengono compariranno poi nel carattere sostitutivo del programma.',
        'Il nome del carattere è fisso, «fontART DEMO». Quello che digiti nel campo del nome viene ignorato all’esportazione. Installare due caratteri demo contemporaneamente perciò non funziona: Windows vede due volte lo stesso nome.',
        'Il tuo lavoro si trova soltanto nel file che crei tu stesso con «💾 Salva». La versione di prova non ricorda nulla da sola alla chiusura: salva assolutamente prima che scada il tempo.',
        'Il programma esiste solo per Windows 10/11 a 64 bit: per Mac e Linux prendi la pagina nel browser. Nessuna delle due versioni ha un controllo degli aggiornamenti: le versioni nuove del file .exe te le prendi da solo dalla pagina delle release, mentre la pagina si aggiorna da sola alla visita successiva.'
      ],
      nl: [
        'De 60 minuten gelden alleen voor het Windows-programma. Ze lopen vanaf de start en zijn niet te pauzeren — ook een geminimaliseerd venster telt door. Is de tijd om, dan kun je niet meer tekenen en niet meer exporteren; opslaan gaat nog wel. Daarna fontART opnieuw starten, het opgeslagen bestand laden en verdergaan. In de browser loopt geen klok.',
        'Gebruik op de iPhone alsjeblieft Safari. In de ingebouwde browsers van Instagram, Facebook of WhatsApp mislukt het downloaden van het voltooide lettertype — het komt eenvoudigweg niet aan. Wie zo’n link opent, tikt op “In Safari openen” en begint daar.',
        'De export levert uitsluitend a–z op. Hoofdletters, cijfers, umlauten, ß en leestekens kun je wel tekenen, maar ze belanden niet in het lettertypebestand — woorden daarmee verschijnen later in het vervangende lettertype van het programma.',
        'De lettertypenaam ligt vast op “fontART DEMO”. Wat je in het naamveld typt, wordt bij de export genegeerd. Twee demo-lettertypen naast elkaar installeren lukt daarom niet: Windows ziet twee keer dezelfde naam.',
        'Je werk zit alleen in het bestand dat je zelf via “💾 Opslaan” aanmaakt. De proefversie onthoudt bij het sluiten uit zichzelf niets — sla dus beslist op voordat de klok afloopt.',
        'Het programma is er alleen voor Windows 10/11 in 64 bit — voor Mac en Linux neem je de pagina in de browser. Een updatecontrole heeft geen van beide versies: nieuwe versies van de .exe haal je zelf van de releases-pagina, de pagina is bij de volgende keer openen vanzelf actueel.'
      ],
      pl: [
        'Limit 60 minut dotyczy tylko programu dla Windows. Czas biegnie od uruchomienia i nie da się go zatrzymać — zegar tyka dalej także przy zminimalizowanym oknie. Gdy czas minie, nie możesz już malować ani eksportować; zapisywanie działa nadal. Potem uruchomić fontART na nowo, wczytać zapisany plik i pracować dalej. W przeglądarce nie tyka żaden zegar.',
        'Na iPhonie używaj Safari. We wbudowanych przeglądarkach Instagrama, Facebooka albo WhatsAppa pobranie gotowego kroju nie udaje się — po prostu nie dochodzi. Kto otworzy taki link, stuka w „Otwórz w Safari” i zaczyna tam.',
        'Eksport tworzy wyłącznie a–z. Wielkie litery, cyfry, umlauty, ß i znaki interpunkcyjne możesz malować, ale nie trafiają one do pliku z krojem — słowa z nimi pojawią się później w zastępczym kroju programu.',
        'Nazwa kroju jest na stałe „fontART DEMO”. To, co wpiszesz w pole nazwy, zostaje przy eksporcie pominięte. Zainstalowanie dwóch krojów demo obok siebie dlatego się nie uda: Windows widzi dwa razy tę samą nazwę.',
        'Twoja praca jest wyłącznie w pliku, który sam tworzysz przez „💾 Zapisz”. Wersja próbna przy zamykaniu nie zapamiętuje sama z siebie niczego — koniecznie więc zapisz, zanim skończy się czas.',
        'Program jest tylko dla Windows 10/11 w wersji 64-bitowej — na Maca i Linuksa bierzesz stronę w przeglądarce. Sprawdzania aktualizacji nie ma ani jedna, ani druga wersja: nowe wersje pliku .exe pobierasz sobie sam ze strony wydań, a strona przy następnym wywołaniu jest aktualna sama z siebie.'
      ],
      pt: [
        'Os 60 minutos valem só para o programa para Windows. Correm a partir do arranque e não se conseguem parar — mesmo uma janela minimizada continua a contar. Acabado o tempo, deixa de poder desenhar e de poder exportar; guardar continua a funcionar. Depois disso, reiniciar o fontART, carregar o ficheiro guardado e continuar. No navegador não corre relógio nenhum.',
        'No iPhone, use o Safari, por favor. Nos navegadores integrados do Instagram, do Facebook ou do WhatsApp, a transferência da fonte acabada falha — ela pura e simplesmente não chega. Quem abrir um link desses toca em «Abrir no Safari» e começa por ali.',
        'A exportação entrega exclusivamente a–z. Maiúsculas, algarismos, tremas, ß e sinais de pontuação pode desenhá-los, mas não vão parar ao ficheiro da fonte — as palavras que os levem aparecem depois na fonte de substituição do programa.',
        'O nome da fonte é fixo, «fontART DEMO». O que escrever no campo do nome é ignorado na exportação. Instalar duas fontes de demonstração lado a lado não resulta, por isso: o Windows vê duas vezes o mesmo nome.',
        'O seu trabalho fica apenas no ficheiro que você mesmo criar com «💾 Salvar». A versão de teste não guarda nada por si própria ao fechar — antes de o relógio acabar, guarde sem falta.',
        'O programa só existe para Windows 10/11 em 64 bits — para Mac e Linux usa-se a página no navegador. Nenhuma das duas versões tem verificador de atualizações: as versões novas do .exe vai buscá-las você mesmo à página de versões, e a página está atualizada por si própria da próxima vez que a abrir.'
      ],
      tr: [
        '60 dakika yalnızca Windows programı için geçerlidir. Başlangıçtan itibaren işler ve durdurulamaz — küçültülmüş bir pencere de saymayı sürdürür. Süre dolduğunda artık çizemez ve dışa aktaramazsınız; kaydetmek yine çalışır. Sonrasında fontART’ı yeniden başlatın, kaydettiğiniz dosyayı yükleyin ve devam edin. Tarayıcıda saat işlemez.',
        'iPhone’da lütfen Safari kullanın. Instagram, Facebook veya WhatsApp’ın yerleşik tarayıcılarında bitmiş yazı tipinin indirilmesi başarısız olur — dosya düpedüz ulaşmaz. Böyle bir bağlantı açan kişi “Safari’de aç” seçeneğine dokunup oradan başlar.',
        'Dışa aktarma yalnızca a–z verir. Büyük harfleri, rakamları, umlautlu harfleri (ä, ö, ü), ß’yi ve noktalama işaretlerini çizebilirsiniz, ama bunlar yazı tipi dosyasına girmez — onları içeren kelimeler sonradan programın yedek yazı tipiyle görünür.',
        'Yazı tipi adı sabittir: “fontART DEMO”. Ad alanına yazdığınız, dışa aktarmada göz ardı edilir. Bu yüzden iki demo yazı tipini yan yana kurmak işe yaramaz: Windows aynı adı iki kez görür.',
        'Çalışmanız yalnızca, “💾 Kaydet” ile kendiniz oluşturduğunuz dosyada durur. Deneme sürümü kapanırken kendiliğinden hiçbir şey hatırlamaz — yani saat dolmadan mutlaka kaydedin.',
        'Program yalnızca 64 bit Windows 10/11 için vardır — Mac ve Linux’ta tarayıcıdaki sayfayı kullanırsınız. Güncelleme denetleyicisi iki sürümde de yoktur: .exe dosyasının yeni sürümlerini sürümler sayfasından kendiniz alırsınız, sayfa ise bir sonraki açılışta kendiliğinden günceldir.'
      ],
      ru: [
        '60 минут относятся только к программе для Windows. Они идут с момента запуска и не останавливаются — свёрнутое окно тоже продолжает считать. Когда время выйдет, рисовать и экспортировать будет нельзя; сохранять по-прежнему можно. После этого перезапустите fontART, загрузите сохранённый файл и продолжайте. В браузере время не ограничено.',
        'На iPhone пользуйтесь, пожалуйста, Safari. Во встроенных браузерах Instagram, Facebook или WhatsApp скачивание готового шрифта не срабатывает — файл просто не доходит. Кто открыл такую ссылку, нажимает «Открыть в Safari» и начинает там.',
        'Экспорт выдаёт исключительно a–z. Прописные буквы, цифры, умлауты, ß и знаки препинания рисовать можно, но в файл шрифта они не попадают — слова с ними позже появятся в запасном шрифте программы.',
        'Имя шрифта жёстко задано: «fontART DEMO». То, что вы впишете в поле имени, при экспорте не учитывается. Поэтому установить два демо-шрифта рядом не получится: Windows видит одно и то же имя дважды.',
        'Ваша работа лежит только в том файле, который вы сами создаёте через «💾 Сохранить». Пробная версия при закрытии сама ничего не запоминает — так что до истечения времени обязательно сохраняйте.',
        'Программа есть только для 64-разрядных Windows 10/11 — для Mac и Linux берите страницу в браузере. Проверки обновлений нет ни у той, ни у другой версии: новые версии .exe вы забираете сами со страницы выпусков, а страница обновляется сама при следующем открытии.'
      ],
      hi: [
        '60 मिनट केवल Windows प्रोग्राम पर लागू होते हैं। वे शुरू होते ही चलने लगते हैं और रोके नहीं जा सकते — मिनिमाइज़ की हुई विंडो भी गिनती जाती है। समय पूरा होने पर आप न बना सकते हैं, न निर्यात कर सकते हैं; सहेजना आगे भी चलता रहता है। उसके बाद fontART दोबारा शुरू करें, सहेजी हुई फ़ाइल लोड करें और आगे बढ़ें। ब्राउज़र में कोई घड़ी नहीं चलती।',
        'iPhone पर कृपया Safari इस्तेमाल करें। Instagram, Facebook या WhatsApp के भीतर बने ब्राउज़रों में तैयार फ़ॉन्ट का डाउनलोड विफल हो जाता है — वह आता ही नहीं। जो ऐसा लिंक खोले, वह “Safari में खोलें” पर टैप करके वहीं से शुरू करे।',
        'निर्यात केवल a–z देता है। बड़े अक्षर, अंक, उमलाउट, ß और विराम चिह्न आप बना तो सकते हैं, पर वे फ़ॉन्ट फ़ाइल में नहीं पहुँचते — उनसे बने शब्द बाद में प्रोग्राम के विकल्प फ़ॉन्ट में दिखते हैं।',
        'फ़ॉन्ट का नाम पक्का “fontART DEMO” ही रहता है। नाम वाले खाने में आप जो टाइप करते हैं, उसे निर्यात के समय अनदेखा कर दिया जाता है। इसलिए दो डेमो फ़ॉन्ट साथ-साथ इंस्टॉल करना नहीं चलता: Windows को दो बार वही नाम दिखता है।',
        'आपका काम केवल उसी फ़ाइल में रहता है जो आप खुद “💾 सहेजें” से बनाते हैं। परीक्षण संस्करण बंद होते समय अपने-आप कुछ याद नहीं रखता — इसलिए घड़ी पूरी होने से पहले सहेजना ज़रूरी है।',
        'प्रोग्राम केवल Windows 10/11, 64 बिट के लिए है — Mac और Linux के लिए आप ब्राउज़र वाला पेज लें। अपडेट जाँचने वाला हिस्सा न एक संस्करण में है, न दूसरे में: .exe के नए संस्करण आपको खुद रिलीज़ पेज से लेने होते हैं, जबकि पेज अगली बार खोलने पर अपने-आप ताज़ा रहता है।'
      ],
      zh: [
        '那 60 分钟只对 Windows 程序有效。它从启动开始走，而且没法暂停——窗口最小化了也照样在数。时间到了之后，你就不能再画、也不能再导出了；保存仍然可以。之后把 fontART 重新启动，载入保存好的文件接着做。在浏览器里没有计时。',
        '在 iPhone 上请使用 Safari。在 Instagram、Facebook 或 WhatsApp 的内置浏览器里，下载做好的字体会失败——它根本就到不了。要是你从这样的链接打开的，就点“在 Safari 中打开”，从那里开始。',
        '导出只给出 a–z。大写字母、数字、变音字母、ß 和标点你都可以画，但它们不会进到字体文件里——包含它们的词以后会用程序的后备字体显示出来。',
        '字体名称固定为“fontART DEMO”。你在名称栏里输入的内容，在导出时会被忽略。因此并排装两份 DEMO 字体是行不通的：Windows 会看到两次同一个名字。',
        '你的工作只存在于你自己通过“💾 保存”建立的那个文件里。试用版关闭时不会自动记住任何东西——所以一定要在计时走完之前保存。',
        '这个程序只有 64 位的 Windows 10/11 版——Mac 和 Linux 上你就用浏览器里的那个页面。两份都没有更新检查器：新版本的 .exe 要你自己去发布页取，而页面在下次打开时自己就是最新的。'
      ],
      ja: [
        '60分という制限は Windows 版のプログラムにだけあります。起動時から進み、止めることはできません — 最小化したウィンドウも数え続けます。時間切れになると、描くことも書き出すこともできなくなります。保存は引き続きできます。そのあとは fontART を起動し直し、保存したファイルを読み込んで続けてください。ブラウザー版に時間制限はありません。',
        'iPhone では Safari をお使いください。Instagram、Facebook、WhatsApp の内蔵ブラウザーでは、できあがったフォントのダウンロードに失敗します — 単に届きません。そういうリンクを開いてしまった場合は、「Safari で開く」をタップして、そこから始めてください。',
        '書き出されるのは a–z だけです。大文字、数字、ウムラウト、ß、句読点も描けますが、フォントファイルには入りません — それらを含む単語は、あとでプログラムの代替書体で表示されます。',
        'フォント名は「fontART DEMO」に固定されています。名前の欄に打ち込んだものは、書き出しのときに無視されます。そのため、デモのフォントを2つ並べてインストールすることはできません: Windows には同じ名前が2回見えるからです。',
        'あなたの作業は、自分で「💾 保存」から作ったファイルの中にだけあります。体験版は閉じるときに何ひとつ勝手には覚えません — 時間切れになる前に必ず保存してください。',
        'プログラムは Windows 10/11 の64ビット版だけです — Mac や Linux ではブラウザーのページを使ってください。更新チェッカーはどちらの版にもありません: .exe の新しい版はリリースページから自分で取ってきてください。ページのほうは、次に開けばひとりでに最新になっています。'
      ],
      ko: [
        '60분은 Windows 프로그램에만 해당합니다. 시작할 때부터 흐르고 멈출 수 없습니다 — 창을 작게 내려 두어도 계속 셉니다. 시간이 다 되면 더는 그리거나 내보낼 수 없고, 저장은 여전히 할 수 있습니다. 그다음에는 fontART를 다시 시작해 저장한 파일을 불러와 이어 가면 됩니다. 브라우저에서는 시계가 돌지 않습니다.',
        'iPhone에서는 Safari를 써 주세요. Instagram, Facebook, WhatsApp의 내장 브라우저에서는 완성된 글꼴 내려받기가 실패합니다 — 파일이 아예 도착하지 않습니다. 그런 링크를 열었다면 “Safari에서 열기”를 누르고 거기서 시작합니다.',
        '내보내기는 오직 a–z만 내놓습니다. 대문자, 숫자, 움라우트, ß, 문장 부호는 그릴 수는 있지만 글꼴 파일에 담기지 않습니다 — 그것이 들어간 낱말은 나중에 프로그램의 대체 글꼴로 나타납니다.',
        '글꼴 이름은 “fontART DEMO”로 고정되어 있습니다. 이름 칸에 무엇을 입력하든 내보낼 때 무시됩니다. 그래서 데모 글꼴 두 개를 나란히 설치하는 것은 되지 않습니다: Windows에는 같은 이름이 두 번 보이기 때문입니다.',
        '작업물은 오직 “💾 저장”으로 직접 만든 파일에만 들어 있습니다. 체험판은 닫힐 때 스스로 아무것도 기억하지 않습니다 — 그러니 시계가 다 되기 전에 꼭 저장하세요.',
        '프로그램은 Windows 10/11 64비트용으로만 있습니다 — Mac과 Linux에서는 브라우저의 페이지를 쓰면 됩니다. 업데이트 검사기는 어느 쪽에도 없습니다: .exe의 새 판은 릴리스 페이지에서 직접 가져와야 하고, 페이지는 다음에 열 때 저절로 최신 상태입니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/fontART-demo/blob/main/README.md'
    }
  },

  masterprompt: {
    purpose: {
      de: 'Ein Chat verliert irgendwann den Faden: Das Kontextfenster läuft voll, oder man macht am nächsten Tag in einer neuen Sitzung weiter und die Hälfte der Entscheidungen ist weg. create-masterprompt setzt davor an. Es ist kein Programm, sondern ein Skill für KI-Chats: Er führt durch ein Größen-Gate und sechs Phasen — Recherche, Briefing, Entscheidungs-Interview, Plan, Bauen, Übergabe — und schreibt dabei drei Dateien. Das Briefing hält die dauerhaften Fakten des Vorhabens fest, das Entscheidungslog hält fest, was warum entschieden wurde, und die Übergabedatei sagt der nächsten Sitzung, wo es weitergeht.',
      en: 'A chat loses the thread sooner or later: the context window fills up, or you continue the next day in a new session and half the decisions are gone. create-masterprompt starts before that happens. It is not a program but a skill for AI chats: it walks you through a size gate and six phases — research, briefing, decision interview, plan, build, handoff — and writes three files along the way. The briefing holds the durable facts of the project, the decision log records what was decided and why, and the handoff tells the next session where to pick up.',
      es: 'Un chat acaba perdiendo el hilo en algún momento: la ventana de contexto se llena, o al día siguiente sigues en una sesión nueva y la mitad de las decisiones han desaparecido. create-masterprompt empieza antes de eso. No es un programa, sino un skill para chats de IA: te lleva por un control de tamaño y seis fases —investigación, briefing, entrevista de decisiones, plan, construcción, entrega— y va escribiendo tres archivos. El briefing recoge los hechos duraderos del proyecto, el registro de decisiones recoge qué se decidió y por qué, y el archivo de entrega le dice a la siguiente sesión por dónde se sigue.',
      fr: 'Une conversation finit par perdre le fil : la fenêtre de contexte se remplit, ou bien on reprend le lendemain dans une nouvelle session et la moitié des décisions a disparu. create-masterprompt intervient en amont. Ce n’est pas un programme, mais un skill pour les conversations avec une IA : il vous fait passer par un filtre de taille et six phases — recherche, briefing, entretien de décision, plan, construction, passation — et écrit au passage trois fichiers. Le briefing retient les faits durables du projet, le journal des décisions retient ce qui a été décidé et pourquoi, et le fichier de passation indique à la session suivante par où reprendre.',
      it: 'Una chat prima o poi perde il filo: la finestra di contesto si riempie, oppure il giorno dopo continui in una sessione nuova e metà delle decisioni è sparita. create-masterprompt interviene prima. Non è un programma, ma uno skill per le chat con l’IA: ti guida attraverso un controllo di dimensione e sei fasi — ricerca, briefing, intervista sulle decisioni, piano, costruzione, consegna — e nel farlo scrive tre file. Il briefing fissa i fatti duraturi del progetto, il registro delle decisioni annota che cosa è stato deciso e perché, e il file di consegna dice alla sessione successiva da dove si riparte.',
      nl: 'Een chat verliest op een gegeven moment de draad: het contextvenster loopt vol, of je gaat de volgende dag in een nieuwe sessie verder en de helft van de beslissingen is weg. create-masterprompt begint daarvóór. Het is geen programma, maar een skill voor AI-chats: hij leidt je door een omvangstoets en zes fasen — onderzoek, briefing, beslissingsinterview, plan, bouwen, overdracht — en schrijft daarbij drie bestanden. De briefing houdt de blijvende feiten van het project vast, het beslissingslogboek houdt vast wat waarom besloten is, en het overdrachtsbestand vertelt de volgende sessie waar het verdergaat.',
      pl: 'Czat w pewnym momencie gubi wątek: okno kontekstu się zapełnia albo następnego dnia pracuje się dalej w nowej sesji i połowy decyzji nie ma. create-masterprompt wkracza, zanim do tego dojdzie. To nie jest program, lecz skill do czatów z AI: prowadzi przez bramkę rozmiaru i sześć faz — research, briefing, wywiad decyzyjny, plan, budowanie, przekazanie — i zapisuje przy tym trzy pliki. Briefing zawiera trwałe fakty przedsięwzięcia, dziennik decyzji zapisuje, co i dlaczego zostało zdecydowane, a plik przekazania mówi następnej sesji, od czego ma zacząć.',
      pt: 'Um chat acaba por perder o fio à meada: a janela de contexto enche-se, ou continua-se no dia seguinte numa sessão nova e metade das decisões desapareceu. O create-masterprompt começa antes disso. Não é um programa, mas um skill para chats de IA: conduz por uma triagem de dimensão e por seis fases — pesquisa, briefing, entrevista de decisões, plano, construção, entrega — e escreve pelo caminho três ficheiros. O briefing fixa os factos duradouros do projeto, o registo de decisões fixa o que foi decidido e porquê, e o ficheiro de entrega diz à sessão seguinte por onde continuar.',
      tr: 'Bir sohbet er ya da geç ipin ucunu kaçırır: Bağlam penceresi dolar ya da ertesi gün yeni bir oturumda devam edersiniz ve kararların yarısı gitmiştir. create-masterprompt bundan önce devreye girer. O bir program değil, yapay zekâ sohbetleri için bir Skill’dir: Sizi bir büyüklük kapısından ve altı aşamadan geçirir — araştırma, brifing, karar görüşmesi, plan, yapım, devir teslim — ve bu sırada üç dosya yazar. Brifing, projenin kalıcı olgularını tutar; karar günlüğü, neyin neden kararlaştırıldığını kayda geçirir; devir dosyası ise bir sonraki oturuma nereden devam edileceğini söyler.',
      ru: 'Чат рано или поздно теряет нить: контекстное окно заполняется, или вы продолжаете на следующий день в новой сессии — и половина решений пропала. create-masterprompt вступает в дело раньше. Это не программа, а Skill для ИИ-чатов: он проводит через проверку размера и шесть этапов — исследование, бриф, интервью по решениям, план, сборка, передача — и попутно создаёт три файла. Бриф фиксирует долговременные факты о замысле, журнал решений фиксирует, что и почему было решено, а файл передачи говорит следующей сессии, где продолжать.',
      hi: 'कोई भी चैट कभी न कभी सूत्र खो देती है: कॉन्टेक्स्ट विंडो भर जाती है, या आप अगले दिन एक नए सत्र में आगे बढ़ते हैं और आधे फ़ैसले ग़ायब हो चुके होते हैं। create-masterprompt इससे पहले ही काम शुरू कर देता है। यह कोई प्रोग्राम नहीं, बल्कि AI चैट के लिए एक Skill है: वह एक आकार-जाँच और छह चरणों से गुज़ारता है — शोध, ब्रीफ़िंग, निर्णय-साक्षात्कार, योजना, निर्माण, सौंपना — और साथ-साथ तीन फ़ाइलें लिखता है। ब्रीफ़िंग प्रोजेक्ट के टिकाऊ तथ्य सँभालती है, निर्णय-लॉग रखता है कि क्या क्यों तय हुआ, और सौंपने वाली फ़ाइल अगले सत्र को बताती है कि आगे कहाँ से चलना है।',
      zh: '聊天聊到后来早晚会失去头绪：上下文窗口被填满，或者你第二天在一个新会话里接着做，而一半的决定已经没了。create-masterprompt 在这之前就介入。它不是一个程序，而是给 AI 聊天用的一个 Skill：它带你走过一道规模闸门和六个阶段——调研、简报、决策访谈、计划、构建、交接——并在这个过程中写出三个文件。简报记下这个项目里长期有效的事实，决策日志记下做了哪些决定、为什么这么定，交接文件则告诉下一个会话该从哪儿继续。',
      ja: 'チャットはいつか筋を見失います: コンテキストウィンドウがいっぱいになるか、翌日に新しいセッションで続けようとして、決めたことの半分が消えているか。create-masterprompt はその手前から始めます。これはプログラムではなく、AI チャットのための Skill です: 規模のゲートと6つの段階 — 調査、ブリーフィング、決定のためのインタビュー、計画、制作、引き継ぎ — を案内しながら、3つのファイルを書きます。ブリーフィングは計画の変わらない事実をとどめ、決定ログは何がなぜ決まったかを記録し、引き継ぎファイルは次のセッションにどこから続ければよいかを伝えます。',
      ko: '채팅은 언젠가 맥락을 놓칩니다: 컨텍스트 창이 가득 차거나, 다음 날 새 세션에서 이어 가려는데 결정의 절반이 사라져 있습니다. create-masterprompt는 그 앞에서 손을 씁니다. 프로그램이 아니라 AI 채팅용 Skill입니다: 규모 게이트와 여섯 단계 — 조사, 브리핑, 결정 인터뷰, 계획, 제작, 인수인계 — 를 거치도록 이끌면서 세 개의 파일을 씁니다. 브리핑은 프로젝트의 변하지 않는 사실을 붙들고, 결정 기록은 무엇을 왜 결정했는지 남기며, 인수인계 파일은 다음 세션에 어디서부터 이어 가면 되는지 알려 줍니다.'
    },
    shots: [
      {
        files: {
          de: ['masterprompt-de.webp', 1650, 1817],
          en: ['masterprompt-en.webp', 1650, 1778],
          es: ['masterprompt-es.webp', 1650, 1844],
          fr: ['masterprompt-fr.webp', 1650, 1778],
          it: ['masterprompt-it.webp', 1650, 1811],
          nl: ['masterprompt-nl.webp', 1650, 1746],
          pl: ['masterprompt-pl.webp', 1650, 1820],
          pt: ['masterprompt-pt.webp', 1650, 1850],
          tr: ['masterprompt-tr.webp', 1650, 1749],
          ru: ['masterprompt-ru.webp', 1650, 1815],
          hi: ['masterprompt-hi.webp', 1650, 1671],
          zh: ['masterprompt-zh.webp', 1650, 1671],
          ja: ['masterprompt-ja.webp', 1650, 1785],
          ko: ['masterprompt-ko.webp', 1650, 1718]
        },
        alt: {
          de: 'Übersicht auf einer Seite: was ein Masterprompt ist, die drei Dateien BRIEFING.md, DECISIONS.md und HANDOFF_vNN.md, der Ablauf vom Größen-Gate über sechs Phasen bis zur Übergabe und die Einrichtung in Claude Code und claude.ai.',
          en: 'One-page overview: what a master prompt is, the three files BRIEFING.md, DECISIONS.md and HANDOFF_vNN.md, the process from the size gate through six phases to the handoff, and setup in Claude Code and claude.ai.',
          es: 'Vista general en una página: qué es un prompt maestro, los tres archivos BRIEFING.md, DECISIONS.md y HANDOFF_vNN.md, el proceso desde el filtro de tamaño, a lo largo de seis fases, hasta el handoff, y la instalación en Claude Code y claude.ai.',
          fr: 'Aperçu sur une page : ce qu’est un masterprompt, les trois fichiers BRIEFING.md, DECISIONS.md et HANDOFF_vNN.md, le déroulement, du tri par taille à la passation en passant par six phases, et l’installation dans Claude Code et sur claude.ai.',
          it: 'Panoramica in una pagina: che cos’è un master prompt, i tre file BRIEFING.md, DECISIONS.md e HANDOFF_vNN.md, il percorso dal gate di dimensione attraverso sei fasi fino all’handoff e l’installazione in Claude Code e su claude.ai.',
          nl: 'Overzicht op één pagina: wat een masterprompt is, de drie bestanden BRIEFING.md, DECISIONS.md en HANDOFF_vNN.md, het verloop van de omvangscheck via zes fasen tot de handoff, en het installeren in Claude Code en claude.ai.',
          pl: 'Przegląd na jednej stronie: czym jest masterprompt, trzy pliki BRIEFING.md, DECISIONS.md i HANDOFF_vNN.md, przebieg od bramki rozmiaru przez sześć faz aż po handoff oraz instalacja w Claude Code i claude.ai.',
          pt: 'Visão geral numa página: o que é um master prompt, os três ficheiros BRIEFING.md, DECISIONS.md e HANDOFF_vNN.md, o processo desde a triagem de tamanho, passando por seis fases, até ao handoff, e a instalação no Claude Code e no claude.ai.',
          tr: 'Tek sayfalık genel bakış: masterprompt’un ne olduğu, üç dosya BRIEFING.md, DECISIONS.md ve HANDOFF_vNN.md, boyut kapısından altı aşama boyunca devir teslime kadar akış ve Claude Code ile claude.ai’de kurulum.',
          ru: 'Обзор на одной странице: что такое мастер-промпт, три файла BRIEFING.md, DECISIONS.md и HANDOFF_vNN.md, путь от гейта по размеру через шесть фаз до передачи и установка в Claude Code и claude.ai.',
          hi: 'एक पेज का अवलोकन: मास्टर प्रॉम्प्ट क्या है, तीन फ़ाइलें BRIEFING.md, DECISIONS.md और HANDOFF_vNN.md, साइज़-गेट से छह चरणों के रास्ते हैंडऑफ़ तक का क्रम, और Claude Code तथा claude.ai में इंस्टॉल करने का तरीक़ा।',
          zh: '单页概览：Masterprompt 是什么；BRIEFING.md、DECISIONS.md 和 HANDOFF_vNN.md 三个文件；从规模分级经过六个阶段直到交接的运行流程；以及在 Claude Code 和 claude.ai 中的安装。',
          ja: '1ページの概要: マスタープロンプトとは何か、BRIEFING.md・DECISIONS.md・HANDOFF_vNN.md の3つのファイル、サイズゲートから6つのフェーズを経てハンドオフに至る進め方、そして Claude Code と claude.ai でのインストール。',
          ko: '한 장짜리 개요: 마스터 프롬프트란 무엇인지, BRIEFING.md, DECISIONS.md, HANDOFF_vNN.md 세 파일, 크기 게이트에서 여섯 단계를 거쳐 핸드오프까지 이어지는 진행 방식, 그리고 Claude Code와 claude.ai에서의 설치.'
        }
      }
    ],
    steps: {
      de: [
        'Das Repo herunterladen und den Ordner create-masterprompt in den Skill-Ordner des Clients legen: unter Windows %USERPROFILE%\\.claude\\skills, sonst ~/.claude/skills. Der Ordnername muss genau so bleiben.',
        'Einen frischen Chat öffnen und das Vorhaben beschreiben. Der Skill meldet sich von selbst, sobald es nach einem Projekt über mehrere Sitzungen klingt — sonst genügt die Bitte um einen Masterprompt.',
        'Die drei Dateien am Ende aufheben. Beim nächsten Mal bekommt die frische Sitzung Briefing und Übergabedatei zu lesen und macht dort weiter, wo die letzte aufgehört hat.'
      ],
      en: [
        'Download the repository and put the create-masterprompt folder into the skills folder of your client: on Windows %USERPROFILE%\\.claude\\skills, otherwise ~/.claude/skills. The folder name has to stay exactly that.',
        'Open a fresh chat and describe what you are planning. The skill speaks up by itself as soon as it sounds like a project spanning several sessions — otherwise just ask for a master prompt.',
        'Keep the three files. Next time, hand the fresh session the briefing and the handoff, and it carries on where the last one stopped.'
      ],
      es: [
        'Descarga el repositorio y pon la carpeta create-masterprompt en la carpeta de skills de tu cliente: en Windows %USERPROFILE%\\.claude\\skills, en los demás sistemas ~/.claude/skills. El nombre de la carpeta tiene que quedarse exactamente así.',
        'Abre un chat nuevo y describe tu proyecto. El skill se presenta por sí mismo en cuanto lo que describes suena a un proyecto de varias sesiones; si no, basta con pedir un masterprompt.',
        'Guarda los tres archivos del final. La próxima vez, la sesión nueva recibe el briefing y el archivo de entrega para leerlos y sigue donde lo dejó la anterior.'
      ],
      fr: [
        'Télécharger le dépôt et placer le dossier create-masterprompt dans le dossier des skills du client : sous Windows %USERPROFILE%\\.claude\\skills, sinon ~/.claude/skills. Le nom du dossier doit rester exactement celui-là.',
        'Ouvrir une conversation toute fraîche et décrire le projet. Le skill se manifeste de lui-même dès que cela ressemble à un projet s’étendant sur plusieurs sessions — sinon, il suffit de demander un masterprompt.',
        'Conserver les trois fichiers à la fin. La prochaine fois, la session toute fraîche reçoit le briefing et le fichier de passation à lire et continue là où la précédente s’est arrêtée.'
      ],
      it: [
        'Scarica il repository e metti la cartella create-masterprompt nella cartella degli skill del tuo client: su Windows %USERPROFILE%\\.claude\\skills, altrimenti ~/.claude/skills. Il nome della cartella deve restare esattamente così.',
        'Apri una chat nuova e descrivi il tuo progetto. Lo skill si fa vivo da sé appena la cosa suona come un progetto su più sessioni; altrimenti basta chiedere un masterprompt.',
        'Alla fine conserva i tre file. La volta dopo dai da leggere alla nuova sessione il briefing e il file di consegna, e continua da dove si era fermata l’ultima.'
      ],
      nl: [
        'Download de repository en leg de map create-masterprompt in de skill-map van je client: onder Windows %USERPROFILE%\\.claude\\skills, anders ~/.claude/skills. De mapnaam moet precies zo blijven.',
        'Open een nieuwe chat en beschrijf het project. De skill meldt zich uit zichzelf zodra het klinkt als een project over meerdere sessies — anders volstaat de vraag om een masterprompt.',
        'Bewaar de drie bestanden aan het eind. De volgende keer krijgt de nieuwe sessie de briefing en het overdrachtsbestand te lezen en gaat verder waar de vorige is opgehouden.'
      ],
      pl: [
        'Pobrać repozytorium i umieścić folder create-masterprompt w folderze skills twojego klienta: pod Windows %USERPROFILE%\\.claude\\skills, inaczej ~/.claude/skills. Nazwa folderu musi pozostać dokładnie taka.',
        'Otworzyć nowy czat i opisać przedsięwzięcie. Skill odzywa się sam z siebie, gdy tylko brzmi to jak projekt na kilka sesji — poza tym wystarczy prośba o masterprompt.',
        'Trzy pliki na końcu zachować. Następnym razem nowa sesja dostaje do przeczytania briefing i plik przekazania, po czym pracuje dalej tam, gdzie poprzednia skończyła.'
      ],
      pt: [
        'Transferir o repositório e pôr a pasta create-masterprompt na pasta de skills do cliente: no Windows %USERPROFILE%\\.claude\\skills, caso contrário ~/.claude/skills. O nome da pasta tem de ficar exatamente assim.',
        'Abrir um chat novo e descrever o que se pretende fazer. O skill dá sinal de si sozinho assim que aquilo soar a um projeto ao longo de várias sessões — caso contrário, basta pedir um masterprompt.',
        'Guardar no fim os três ficheiros. Da próxima vez, a sessão nova recebe o briefing e o ficheiro de entrega para ler e continua onde a anterior parou.'
      ],
      tr: [
        'Depoyu indirin ve create-masterprompt klasörünü istemcinizin skill klasörüne koyun: Windows’ta %USERPROFILE%\\.claude\\skills, diğer sistemlerde ~/.claude/skills. Klasör adı tam olarak böyle kalmalıdır.',
        'Yeni bir sohbet açın ve tasarladığınız işi anlatın. Skill, birden çok oturuma yayılan bir proje gibi göründüğü anda kendiliğinden söz alır — yoksa bir masterprompt istemeniz yeterlidir.',
        'Sondaki üç dosyayı saklayın. Bir dahaki sefere yeni oturum brifingi ve devir dosyasını okur ve bir öncekinin bıraktığı yerden devam eder.'
      ],
      ru: [
        'Скачайте репозиторий и положите папку create-masterprompt в папку skills вашего клиента: в Windows %USERPROFILE%\\.claude\\skills, иначе ~/.claude/skills. Имя папки должно остаться в точности таким.',
        'Откройте новый чат и опишите свой замысел. Skill отзывается сам, как только это звучит как проект на несколько сессий, — иначе достаточно попросить мастер-промпт.',
        'Сохраните три файла в конце. В следующий раз новая сессия получает на прочтение бриф и файл передачи и продолжает там, где остановилась прошлая.'
      ],
      hi: [
        'रिपॉज़िटरी डाउनलोड करें और create-masterprompt फ़ोल्डर को अपने क्लाइंट के Skill फ़ोल्डर में रखें: Windows पर %USERPROFILE%\\.claude\\skills, वरना ~/.claude/skills। फ़ोल्डर का नाम बिलकुल यही रहना चाहिए।',
        'एक नई चैट खोलें और अपने इरादे का वर्णन करें। जैसे ही बात कई सत्रों तक चलने वाले प्रोजेक्ट जैसी लगती है, Skill खुद बोल पड़ता है — वरना मास्टरप्रॉम्प्ट माँग लेना ही काफ़ी है।',
        'अंत में बनी तीनों फ़ाइलें सँभालकर रखें। अगली बार नया सत्र ब्रीफ़िंग और सौंपने वाली फ़ाइल पढ़ता है और वहीं से आगे बढ़ता है जहाँ पिछला रुका था।'
      ],
      zh: [
        '把这个仓库下载下来，并把 create-masterprompt 文件夹放进你客户端的 skill 文件夹：在 Windows 上是 %USERPROFILE%\\.claude\\skills，其他系统是 ~/.claude/skills。文件夹的名字必须一模一样地保持不变。',
        '打开一个新的聊天，描述你的打算。只要听起来像是一个跨多个会话的项目，这个 Skill 就会自己站出来——否则，请它做一个 Masterprompt 就够了。',
        '把最后那三个文件留好。下一次，让新会话读一遍简报和交接文件，它就会从上一次停下的地方接着做。'
      ],
      ja: [
        'リポジトリをダウンロードして、create-masterprompt フォルダーをクライアントの Skill フォルダーに置きます: Windows では %USERPROFILE%\\.claude\\skills、それ以外では ~/.claude/skills です。フォルダー名はそのままでなければなりません。',
        '新しいチャットを開いて、やろうとしていることを説明します。複数のセッションにまたがるプロジェクトらしいと判断すると、Skill のほうから声をかけてきます — そうでなければ、マスタープロンプトが欲しいと頼むだけで足ります。',
        '最後にできる3つのファイルを取っておきます。次のときは、新しいセッションにブリーフィングと引き継ぎファイルを読ませれば、前回が終わったところから続けてくれます。'
      ],
      ko: [
        '저장소를 내려받아 create-masterprompt 폴더를 클라이언트의 Skill 폴더에 넣습니다: Windows에서는 %USERPROFILE%\\.claude\\skills, 그 밖에는 ~/.claude/skills. 폴더 이름은 정확히 그대로여야 합니다.',
        '새 채팅을 열고 무엇을 하려는지 설명합니다. 여러 세션에 걸친 프로젝트처럼 들리면 Skill이 스스로 나섭니다 — 그렇지 않다면 마스터프롬프트를 만들어 달라고 부탁하면 됩니다.',
        '끝에 남는 세 개의 파일을 보관합니다. 다음번에는 새 세션에 브리핑과 인수인계 파일을 읽히면, 지난 세션이 멈춘 자리에서 이어 갑니다.'
      ]
    },
    pitfalls: {
      de: [
        'Es ist kein Programm und keine Webseite. Ohne einen Client, der den SKILL.md-Standard versteht — Claude Code, claude.ai und andere —, passiert gar nichts.',
        'Der Ordnername muss create-masterprompt heißen und mit dem Feld name im Frontmatter übereinstimmen. Stimmen sie nicht überein, lädt der Skill stillschweigend nicht.',
        'Für claude.ai die Datei create-masterprompt.zip von der Releases-Seite hochladen. Das Archiv muss den Ordner create-masterprompt als Wurzel haben, nicht die losen Dateien — sonst lädt der Skill nicht.',
        'Vorlagen und Referenzdateien sind auf Englisch. Die Anleitung selbst gibt es zusätzlich in dreizehn weiteren Sprachen, von SKILL.de.md bis SKILL.ko.md, dazu je Sprache eine Übersicht auf einer Seite. Gelesen wird vom Programm aber immer die englische SKILL.md — bei Widerspruch gilt sie.',
        'Der Skill nimmt einem die Entscheidungen nicht ab, er stellt Fragen. Bei einer Kleinigkeit bremst das mehr, als es hilft — dafür steht das Größen-Gate ganz vorne, das genau diesen Fall abfangen soll.'
      ],
      en: [
        'It is neither a program nor a website. Without a client that understands the SKILL.md standard — Claude Code, claude.ai and others — nothing happens at all.',
        'The folder has to be called create-masterprompt and match the name field in the frontmatter. If they differ, the skill silently fails to load.',
        'For claude.ai, upload create-masterprompt.zip from the releases page. The archive must have the create-masterprompt folder as its root, not the loose files — otherwise the skill will not load.',
        'Templates and reference files are in English. The instructions themselves also come in thirteen other languages, from SKILL.de.md to SKILL.ko.md, plus a one-page overview per language. The program always reads the English SKILL.md, which wins in case of conflict.',
        'The skill does not make the decisions for you, it asks questions. On something small that slows you down more than it helps — which is what the size gate at the very front is there to catch.'
      ],
      es: [
        'No es un programa ni una página web. Sin un cliente que entienda el estándar SKILL.md —Claude Code, claude.ai y otros— no pasa absolutamente nada.',
        'La carpeta tiene que llamarse create-masterprompt y coincidir con el campo name del frontmatter. Si no coinciden, el skill no se carga y no dice nada.',
        'Para claude.ai, sube el archivo create-masterprompt.zip desde la página de versiones. El archivo comprimido tiene que tener la carpeta create-masterprompt como raíz, no los archivos sueltos; si no, el skill no se carga.',
        'Las plantillas y los archivos de referencia están en inglés. La guía en sí existe además en otros trece idiomas, de SKILL.de.md a SKILL.ko.md, junto con un resumen de una página por idioma. Pero el programa lee siempre el SKILL.md inglés: en caso de contradicción, prevalece ese.',
        'El skill no decide por ti, hace preguntas. Si el encargo es una nimiedad, eso frena más de lo que ayuda; para eso está el control de tamaño justo al principio, que debe atajar exactamente ese caso.'
      ],
      fr: [
        'Ce n’est ni un programme ni un site web. Sans un client qui comprend le standard SKILL.md — Claude Code, claude.ai et d’autres —, il ne se passe rien du tout.',
        'Le dossier doit s’appeler create-masterprompt et correspondre au champ name dans le frontmatter. S’ils ne correspondent pas, le skill ne se charge pas — et ce, sans le moindre message.',
        'Pour claude.ai, récupérer create-masterprompt.zip sur la page des releases et le téléverser. L’archive doit avoir le dossier create-masterprompt pour racine, et non les fichiers en vrac — sinon le skill ne se charge pas.',
        'Les gabarits et les fichiers de référence sont en anglais. Le guide lui-même existe en plus dans treize autres langues, de SKILL.de.md à SKILL.ko.md, avec un aperçu sur une page par langue. Mais le programme lit toujours le SKILL.md anglais — en cas de contradiction, c’est lui qui fait foi.',
        'Le skill ne prend pas les décisions à votre place, il pose des questions. Pour une broutille, cela freine plus que cela n’aide — c’est justement pour ce cas que le filtre de taille se trouve tout au début.'
      ],
      it: [
        'Non è un programma e non è un sito web. Senza un client che capisca lo standard SKILL.md — Claude Code, claude.ai e altri — non succede proprio niente.',
        'La cartella deve chiamarsi create-masterprompt e coincidere con il campo name nel frontmatter. Se non coincidono, lo skill non si carica e non lo dice.',
        'Per claude.ai carica il file create-masterprompt.zip dalla pagina delle release. L’archivio deve avere come radice la cartella create-masterprompt, non i singoli file, altrimenti lo skill non si carica.',
        'Modelli e file di riferimento sono in inglese. Le istruzioni stesse ci sono anche in altre tredici lingue, da SKILL.de.md a SKILL.ko.md, insieme a una panoramica di una pagina per ogni lingua. Il programma però legge sempre la SKILL.md inglese: in caso di contraddizione vale quella.',
        'Lo skill non decide al posto tuo, fa domande. Su una piccolezza questo frena più di quanto aiuti: per questo all’inizio c’è il controllo di dimensione, che deve intercettare proprio questo caso.'
      ],
      nl: [
        'Het is geen programma en geen website. Zonder een client die de SKILL.md-standaard begrijpt — Claude Code, claude.ai en andere — gebeurt er helemaal niets.',
        'De map moet create-masterprompt heten en overeenkomen met het veld name in de frontmatter. Komen ze niet overeen, dan laadt de skill stilzwijgend niet.',
        'Voor claude.ai upload je het bestand create-masterprompt.zip van de releases-pagina. Het archief moet de map create-masterprompt als wortel hebben, niet de losse bestanden — anders laadt de skill niet.',
        'Sjablonen en referentiebestanden zijn in het Engels. De handleiding zelf is er daarnaast in dertien andere talen, van SKILL.de.md tot SKILL.ko.md, plus per taal een overzicht van één pagina. Het programma leest echter altijd de Engelse SKILL.md — bij tegenspraak geldt die.',
        'De skill neemt je de beslissingen niet uit handen, hij stelt vragen. Bij een kleinigheid remt dat meer dan het helpt — daarvoor staat de omvangstoets helemaal vooraan, die precies dat geval moet opvangen.'
      ],
      pl: [
        'To nie jest program ani strona internetowa. Bez klienta, który rozumie standard SKILL.md — Claude Code, claude.ai i inne —, nie dzieje się w ogóle nic.',
        'Folder musi się nazywać create-masterprompt i zgadzać się z polem name we frontmatterze. Jeśli się nie zgadzają, skill po cichu się nie wczytuje.',
        'Dla claude.ai wgrać plik create-masterprompt.zip ze strony wydań. Archiwum musi mieć folder create-masterprompt jako korzeń, a nie luźne pliki — inaczej skill się nie wczyta.',
        'Szablony i pliki referencyjne są po angielsku. Sama instrukcja jest dostępna dodatkowo w trzynastu innych językach, od SKILL.de.md do SKILL.ko.md, do tego zestawienie na jednej stronie dla każdego języka. Program czyta jednak zawsze angielski plik SKILL.md — w razie sprzeczności to on obowiązuje.',
        'Skill nie podejmuje decyzji za ciebie — on zadaje pytania. Przy drobiazgu hamuje to bardziej, niż pomaga — po to na samym początku jest bramka rozmiaru, która ma wyłapać właśnie ten przypadek.'
      ],
      pt: [
        'Não é um programa nem um site. Sem um cliente que perceba a norma SKILL.md — Claude Code, claude.ai e outros —, não acontece nada de nada.',
        'A pasta tem de se chamar create-masterprompt e coincidir com o campo name no frontmatter. Se não coincidirem, o skill não carrega e não diz nada.',
        'Para o claude.ai, carregar o ficheiro create-masterprompt.zip da página de versões. O arquivo tem de ter a pasta create-masterprompt como raiz, e não os ficheiros soltos — senão o skill não carrega.',
        'Os modelos e os ficheiros de referência estão em inglês. As próprias instruções existem também em treze outras línguas, de SKILL.de.md a SKILL.ko.md, mais uma visão geral numa página por língua. O programa, porém, lê sempre o SKILL.md inglês — em caso de contradição, é ele que vale.',
        'O skill não lhe tira as decisões das mãos, faz perguntas. Numa coisa pequena isso trava mais do que ajuda — é para isso que está logo à frente a triagem de dimensão, que deve apanhar exatamente esse caso.'
      ],
      tr: [
        'O ne bir programdır ne de bir web sitesi. SKILL.md standardını anlayan bir istemci olmadan — Claude Code, claude.ai ve diğerleri — hiçbir şey olmaz.',
        'Klasörün adı create-masterprompt olmalı ve ön bilgideki name alanıyla örtüşmelidir. Örtüşmezlerse Skill sessizce yüklenmez.',
        'claude.ai için: sürümler sayfasındaki create-masterprompt.zip dosyasını claude.ai’ye yükleyin. Arşivin kökünde dosyalar tek tek değil, create-masterprompt klasörü bulunmalıdır — yoksa Skill yüklenmez.',
        'Şablonlar ve başvuru dosyaları İngilizcedir. Kılavuzun kendisi ayrıca on üç başka dilde de vardır, SKILL.de.md dosyasından SKILL.ko.md dosyasına kadar, yanında her dil için tek sayfalık bir genel bakış. Ama program her zaman İngilizce SKILL.md dosyasını okur — çelişki durumunda o geçerlidir.',
        'Skill kararları sizin yerinize vermez, sorular sorar. Küçük bir işte bu, yardım etmekten çok yavaşlatır — tam da bu durumu yakalamak için en başta büyüklük kapısı durur.'
      ],
      ru: [
        'Это не программа и не веб-страница. Без клиента, который понимает стандарт SKILL.md — Claude Code, claude.ai и другие, — не происходит вообще ничего.',
        'Папка должна называться create-masterprompt и совпадать с полем name во фронтматтере. Если они не совпадают, Skill молча не загружается.',
        'Для claude.ai скачайте файл create-masterprompt.zip со страницы выпусков и загрузите его в claude.ai. В архиве корнем должна быть папка create-masterprompt, а не россыпь файлов, — иначе Skill не загрузится.',
        'Шаблоны и справочные файлы на английском. Само руководство есть дополнительно на тринадцати других языках, от SKILL.de.md до SKILL.ko.md, к нему обзор на одной странице для каждого языка. Но программа всегда читает английский SKILL.md — при противоречии действует он.',
        'Skill не принимает решения за вас, он задаёт вопросы. Для мелкой задачи это скорее мешает, чем помогает, — для этого в самом начале и стоит проверка размера, которая как раз и должна отсекать такие случаи.'
      ],
      hi: [
        'यह न कोई प्रोग्राम है, न कोई वेबसाइट। ऐसे क्लाइंट के बिना जो SKILL.md मानक समझता हो — Claude Code, claude.ai और दूसरे —, कुछ भी नहीं होता।',
        'फ़ोल्डर का नाम create-masterprompt होना चाहिए और फ़्रंटमैटर के name फ़ील्ड से मेल खाना चाहिए। दोनों मेल न खाएँ, तो Skill चुपचाप लोड नहीं होता।',
        'claude.ai के लिए रिलीज़ पेज से create-masterprompt.zip फ़ाइल अपलोड करें। उस आर्काइव की जड़ में create-masterprompt फ़ोल्डर होना चाहिए, खुली फ़ाइलें नहीं — वरना Skill लोड नहीं होगा।',
        'टेम्पलेट और संदर्भ फ़ाइलें अंग्रेज़ी में हैं। निर्देश खुद तेरह अन्य भाषाओं में भी मिलते हैं, SKILL.de.md से SKILL.ko.md तक, साथ में हर भाषा के लिए एक पेज का अवलोकन। पर प्रोग्राम हमेशा अंग्रेज़ी वाली SKILL.md ही पढ़ता है — विरोध होने पर वही मान्य है।',
        'Skill आपके फ़ैसले आपसे नहीं लेता, वह सवाल पूछता है। किसी छोटी-सी बात पर यह मदद से ज़्यादा रोकता है — इसीलिए सबसे आगे वह आकार-जाँच खड़ी है, जो ठीक ऐसे ही मामले पकड़ने के लिए है।'
      ],
      zh: [
        '它不是程序，也不是网站。没有一个理解 SKILL.md 标准的客户端——Claude Code、claude.ai 等等——就什么都不会发生。',
        '文件夹必须叫 create-masterprompt，并且要和 frontmatter 里的 name 字段一致。两者对不上时，这个 Skill 会悄无声息地加载不上。',
        '用 claude.ai 的话，从发布页上传 create-masterprompt.zip 这个文件。压缩包的根必须是 create-masterprompt 文件夹，而不是那些散着的文件——否则 Skill 加载不了。',
        '模板和参考文件是英语的。使用说明本身另外还有十三种其他语言的版本（从 SKILL.de.md 到 SKILL.ko.md），外加每种语言各一页纸的概览。但程序读的始终是英语的 SKILL.md——有出入时以它为准。',
        '这个 Skill 不会替你做决定，它会提问。碰上小事情，这反而帮倒忙——所以最前面才立着那道规模闸门，它正是用来拦住这种情况的。'
      ],
      ja: [
        'プログラムでもウェブサイトでもありません。SKILL.md の規格を理解するクライアント — Claude Code、claude.ai など — がなければ、何も起きません。',
        'フォルダー名は create-masterprompt でなければならず、フロントマターの name の項目と一致している必要があります。食い違っていると、Skill は黙って読み込まれません。',
        'claude.ai の場合は、リリースページから create-masterprompt.zip をアップロードします。ZIP のルートには、ばらのファイルではなく create-masterprompt フォルダーが入っていなければなりません — そうでないと Skill は読み込まれません。',
        'テンプレートと参照用のファイルは英語です。説明そのものはほかに13の言語版（SKILL.de.md から SKILL.ko.md まで）もあり、あわせて言語ごとに1ページの概要も付いています。ただしプログラムが読むのはいつも英語の SKILL.md で、食い違った場合はそちらが有効です。',
        'Skill は決定を代わりにしてはくれません。質問をします。ちょっとしたことでは、助けになるよりも足かせになります — そのための規模のゲートがいちばん前に置かれていて、まさにこの場合を受け止めることになっています。'
      ],
      ko: [
        '프로그램도 웹사이트도 아닙니다. SKILL.md 규격을 이해하는 클라이언트 — Claude Code, claude.ai 등 — 가 없으면 아무 일도 일어나지 않습니다.',
        '폴더 이름은 create-masterprompt여야 하고 프런트매터의 name 항목과 일치해야 합니다. 서로 다르면 Skill은 말없이 로드되지 않습니다.',
        'claude.ai에서는 릴리스 페이지의 create-masterprompt.zip을 올립니다. 압축 파일은 낱개 파일이 아니라 create-masterprompt 폴더를 뿌리로 담고 있어야 합니다 — 그렇지 않으면 Skill이 로드되지 않습니다.',
        '템플릿과 참고 파일은 영어입니다. 사용 설명 자체는 다른 열세 개 언어로도 있고(SKILL.de.md부터 SKILL.ko.md까지), 언어마다 한 쪽짜리 개요도 딸려 있습니다. 다만 프로그램이 읽는 것은 언제나 영어 SKILL.md이며, 내용이 어긋나면 그쪽이 기준입니다.',
        'Skill은 결정을 대신해 주지 않고 질문을 던집니다. 사소한 일에서는 도움보다 방해가 되는데, 바로 그 경우를 걸러 내라고 맨 앞에 규모 게이트가 서 있습니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      en: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/create-masterprompt/blob/main/README.md'
    }
  },

  fadenkreuz: {
    purpose: {
      de: 'Für Spiele ohne gutes Fadenkreuz: Fadenkreuz legt dein eigenes exakt in die Mitte des Hauptbildschirms — immer im Vordergrund, und Klicks gehen ans Spiel durch. Ein winziges Windows-Programm mit rund 1 MB Arbeitsspeicher; das Kreuz zeichnest du selbst im Editor, mit Vorlagen, weichem Rand und eigenen Presets.',
      en: 'For games without a good crosshair: Fadenkreuz puts your own in the exact centre of the main screen — always in front, with clicks going straight through to the game. A tiny Windows program on about 1 MB of RAM; you draw the crosshair yourself in the editor, with templates, a soft outline and your own presets.',
      es: 'Para juegos sin una buena mira: Fadenkreuz coloca la tuya justo en el centro de la pantalla principal, siempre en primer plano y dejando pasar los clics al juego. Un programa diminuto para Windows que usa alrededor de 1 MB de RAM; la mira la dibujas tú en el editor, con plantillas, un borde suave y tus propios preajustes.',
      fr: 'Pour les jeux sans bon réticule : Fadenkreuz place le vôtre pile au centre de l’écran principal — toujours au premier plan, et les clics passent directement au jeu. Un tout petit programme Windows d’environ 1 Mo de mémoire vive ; le réticule, vous le dessinez vous-même dans l’éditeur, avec des modèles, un contour adouci et vos propres préréglages.',
      it: 'Per i giochi senza un buon mirino: Fadenkreuz mette il tuo esattamente al centro dello schermo principale, sempre in primo piano, e i clic passano dritti al gioco. Un programmino per Windows da circa 1 MB di RAM; il mirino lo disegni tu nell’editor, con modelli, un bordo morbido e preset tuoi.',
      nl: 'Voor games zonder goed vizier: Fadenkreuz zet je eigen vizier precies in het midden van het hoofdscherm — altijd op de voorgrond, en klikken gaan gewoon door naar de game. Een piepklein Windows-programma van ongeveer 1 MB werkgeheugen; het vizier teken je zelf in de editor, met sjablonen, een zachte rand en je eigen presets.',
      pl: 'Do gier bez dobrego celownika: Fadenkreuz umieszcza twój własny dokładnie na środku głównego ekranu — zawsze na wierzchu, a kliknięcia przechodzą prosto do gry. Malutki program dla Windows, który zajmuje około 1 MB pamięci RAM; celownik rysujesz sam w edytorze, z szablonami, miękką obwódką i własnymi presetami.',
      pt: 'Para jogos sem uma boa mira: o Fadenkreuz coloca a sua exatamente no centro do ecrã principal — sempre à frente, e os cliques passam diretamente para o jogo. Um programa minúsculo para Windows com cerca de 1 MB de RAM; a mira é você quem a desenha no editor, com modelos, um contorno suave e predefinições próprias.',
      tr: 'İyi bir nişangâhı olmayan oyunlar için: Fadenkreuz, kendi nişangâhınızı ana ekranın tam ortasına koyar — her zaman önde durur ve tıklamalar doğrudan oyuna geçer. Yaklaşık 1 MB RAM kullanan minicik bir Windows programı; nişangâhı düzenleyicide kendiniz çizersiniz: şablonlar, yumuşak bir kenarlık ve kendi ön ayarlarınızla.',
      ru: 'Для игр без хорошего прицела: Fadenkreuz ставит ваш собственный прицел точно в центр основного экрана — всегда поверх всего, а щелчки проходят прямо в игру. Крошечная программа для Windows, которой хватает примерно 1 МБ оперативной памяти; прицел вы рисуете сами в редакторе — с шаблонами, мягкой обводкой и собственными пресетами.',
      hi: 'उन गेम के लिए जिनमें अच्छा क्रॉसहेयर नहीं है: Fadenkreuz आपका अपना क्रॉसहेयर मुख्य स्क्रीन के ठीक बीच में रखता है — हमेशा सबसे आगे, और क्लिक सीधे गेम तक पहुँचते हैं। लगभग 1 MB RAM वाला एक छोटा-सा Windows प्रोग्राम; क्रॉसहेयर आप एडिटर में खुद बनाते हैं — टेम्पलेट, नरम किनारे और अपने प्रीसेट के साथ।',
      zh: '适合没有好准星的游戏：Fadenkreuz 把你自己的准星放在主屏幕的正中央——始终在最前面，点击直接穿透到游戏里。这是一个只占约 1 MB 内存的小小 Windows 程序；准星由你在编辑器里亲手绘制，可用模板、柔和描边和自己的预设。',
      ja: 'よい照準がないゲームのために: Fadenkreuz は自分だけの照準をメイン画面のちょうど中央に置きます。常に最前面に表示され、クリックはそのままゲームに届きます。メモリ約 1 MB で動く小さな Windows プログラムで、照準はエディターで自分で描きます。テンプレート、やわらかい縁取り、自分のプリセットも使えます。',
      ko: '좋은 조준선이 없는 게임을 위한 도구입니다. Fadenkreuz는 나만의 조준선을 메인 화면 정중앙에 놓습니다. 늘 맨 앞에 있고, 클릭은 그대로 게임으로 전달됩니다. 메모리를 약 1 MB만 쓰는 작은 Windows 프로그램이며, 조준선은 에디터에서 직접 그립니다. 템플릿, 부드러운 테두리, 나만의 프리셋도 쓸 수 있습니다.'
    },
    shots: [
      {
        files: {
          de: ['fadenkreuz-de.webp', 1360, 1250],
          en: ['fadenkreuz-en.webp', 1360, 1250]
        },
        alt: {
          de: 'Der Fadenkreuz-Editor: links ein kariertes Zeichenfeld mit einem grünen Kreuz samt dünnem schwarzem Rand, rechts Farbe, Umrandung, eigene Fadenkreuze, Vorlagen und eine Vorschau vor einer Spielszene.',
          en: 'The Fadenkreuz editor: on the left a chequered drawing grid with a green cross and a thin black outline, on the right colour, outline, your own crosshairs, templates and a preview against a game scene.',
          es: 'El editor de Fadenkreuz: a la izquierda, una cuadrícula de dibujo a cuadros con una cruz verde y un fino borde negro; a la derecha, color, borde, tus propias miras, plantillas y una vista previa sobre una escena de juego.',
          fr: 'L’éditeur de Fadenkreuz : à gauche, une grille de dessin en damier avec une croix verte et un fin contour noir ; à droite, la couleur, le contour, vos propres réticules, des modèles et un aperçu sur une scène de jeu.',
          it: 'L’editor di Fadenkreuz: a sinistra una griglia di disegno a scacchi con una croce verde e un sottile bordo nero, a destra colore, bordo, i tuoi mirini, modelli e un’anteprima su una scena di gioco.',
          nl: 'De editor van Fadenkreuz: links een geblokt tekenraster met een groen kruis en een dunne zwarte rand, rechts kleur, rand, je eigen viziers, sjablonen en een voorbeeld tegen een gamescène.',
          pl: 'Edytor Fadenkreuz: po lewej pole do rysowania w kratkę z zielonym krzyżem i cienką czarną obwódką, po prawej kolor, obwódka, własne celowniki, szablony i podgląd na tle sceny z gry.',
          pt: 'O editor do Fadenkreuz: à esquerda, uma grelha de desenho em xadrez com uma cruz verde e um contorno preto fino; à direita, cor, contorno, as suas próprias miras, modelos e uma pré-visualização sobre uma cena de jogo.',
          tr: 'Fadenkreuz düzenleyicisi: solda yeşil bir artı ve ince siyah kenarlık bulunan damalı bir çizim ızgarası; sağda renk, kenarlık, kendi nişangâhlarınız, şablonlar ve bir oyun sahnesi önünde önizleme.',
          ru: 'Редактор Fadenkreuz: слева клетчатое поле для рисования с зелёным крестом и тонкой чёрной обводкой, справа цвет, обводка, собственные прицелы, шаблоны и предпросмотр на фоне игровой сцены.',
          hi: 'Fadenkreuz एडिटर: बाईं ओर चौखानेदार ड्रॉइंग ग्रिड, जिसमें पतले काले किनारे वाला हरा क्रॉस है; दाईं ओर रंग, किनारा, आपके अपने क्रॉसहेयर, टेम्पलेट और एक गेम-दृश्य के सामने प्रीव्यू।',
          zh: 'Fadenkreuz 编辑器：左侧是棋盘格绘图区，上面有一个带细黑描边的绿色十字；右侧是颜色、描边、自己的准星、模板，以及在游戏场景前的预览。',
          ja: 'Fadenkreuz のエディター: 左は市松模様の描画グリッドで、細い黒の縁取りがある緑の十字が描かれています。右には色、縁取り、自分の照準、テンプレート、ゲーム風の背景でのプレビューがあります。',
          ko: 'Fadenkreuz 에디터: 왼쪽에는 가는 검은 테두리가 있는 녹색 십자가 그려진 체크무늬 그리기 격자가 있고, 오른쪽에는 색, 테두리, 나만의 조준선, 템플릿, 게임 장면 위의 미리보기가 있습니다.'
        }
      },
      {
        // Neben dem Editor: die Mitte von vier Bildschirmen in voller Höhe (2×2), damit
        // man sieht, wie klein das Kreuz im Spiel wirklich ist. Das Format 0,85 : 1 füllt
        // bei voller Spaltenbreite genau die Lücke neben dem Editor-Bild (gleiche Höhe 380).
        file: 'fadenkreuz-klein.webp', w: 1234, h: 1456,
        alt: {
          de: 'Die Mitte von vier Bildschirmen in voller Höhe, jeweils mit dem Fadenkreuz in der Mitte, auf grauem, lila, weißem und schwarzem Grund: so klein kann das Kreuz im Spiel wirken.',
          en: 'The middle of four screens at full height, each with the crosshair in the centre, on a grey, purple, white and black background: this is how small it can look in a game.',
          es: 'El centro de cuatro pantallas a toda altura, cada una con la mira en el medio, sobre fondo gris, morado, blanco y negro: así de pequeña puede verse en un juego.',
          fr: 'Le centre de quatre écrans sur toute leur hauteur, chacun avec le réticule au milieu, sur fond gris, violet, blanc et noir : voici à quel point il peut paraître petit en jeu.',
          it: 'La parte centrale di quattro schermi a tutta altezza, ciascuno con il mirino al centro, su sfondo grigio, viola, bianco e nero: ecco quanto può sembrare piccolo in gioco.',
          nl: 'Het midden van vier schermen over de volle hoogte, elk met het vizier in het midden, op een grijze, paarse, witte en zwarte achtergrond: zo klein kan het in een game lijken.',
          pl: 'Środek czterech ekranów na całej wysokości, na każdym celownik pośrodku, na szarym, fioletowym, białym i czarnym tle: tak mały może wyglądać w grze.',
          pt: 'O centro de quatro ecrãs em toda a altura, cada um com a mira ao meio, sobre fundo cinzento, roxo, branco e preto: é assim que pode parecer pequena num jogo.',
          tr: 'Dört ekranın tam yükseklikteki orta kısmı, her birinin ortasında nişangâh; gri, mor, beyaz ve siyah zemin üzerinde: nişangâh oyunda bu kadar küçük görünebilir.',
          ru: 'Середина четырёх экранов во всю высоту, на каждом прицел по центру — на сером, фиолетовом, белом и чёрном фоне: вот насколько маленьким он может выглядеть в игре.',
          hi: 'चार स्क्रीन का बीच वाला हिस्सा, पूरी ऊँचाई में, हर एक के बीच में क्रॉसहेयर — स्लेटी, बैंगनी, सफ़ेद और काली पृष्ठभूमि पर: गेम में यह इतना छोटा दिख सकता है।',
          zh: '四个屏幕的中间部分（完整高度），每个正中央都有准星，背景分别为灰色、紫色、白色和黑色：准星在游戏里可以这么小。',
          ja: '4つの画面の中央部分（高さはそのまま）。それぞれ真ん中に照準があり、背景はグレー、紫、白、黒です。ゲーム中の照準はこれほど小さく見えることがあります。',
          ko: '네 화면의 가운데 부분을 높이 그대로 담았고, 각각 정중앙에 조준선이 있습니다. 배경은 회색, 보라색, 흰색, 검은색입니다. 게임에서 조준선은 이만큼 작게 보일 수 있습니다.'
        }
      }
    ],
    steps: {
      de: [
        'Das Setup aus den Releases laden und ausführen. Windows meldet „Unbekannter Herausgeber“, weil die Datei nicht signiert ist — über „Weitere Informationen“ geht es weiter. „Installation nur für Sie“ braucht keine Adminrechte; Fadenkreuz und Editor lassen sich getrennt wählen.',
        '„Fadenkreuz“ starten: In der Bildschirmmitte erscheint ein grünes Kreuz. Strg+Alt+F9 blendet es aus und wieder ein, Strg+Alt+F12 beendet es — genau wie ein zweiter Klick auf die Verknüpfung.',
        'Im „Fadenkreuz-Editor“ zeichnen, einmal „Speichern unter …“ wählen und als fadenkreuz.bmp in Dokumente\\Fadenkreuz speichern. Mit „live“ übernimmt das Kreuz jede Änderung nach spätestens einer Sekunde.'
      ],
      en: [
        'Download the setup from the releases and run it. Windows will say “unknown publisher” because the file is not signed — continue via “more info”. “Install for me only” needs no admin rights; crosshair and editor can be chosen separately.',
        'Start “Fadenkreuz”: a green cross appears in the middle of the screen. Ctrl+Alt+F9 hides and shows it, Ctrl+Alt+F12 quits it — just like clicking the shortcut a second time.',
        'Draw in the “Fadenkreuz-Editor”, choose “Save as …” once and save as fadenkreuz.bmp in Documents\\Fadenkreuz. With “live” switched on, the crosshair picks up every change within a second.'
      ],
      es: [
        'Descarga el instalador desde las versiones y ejecútalo. Windows avisa de «Editor desconocido» porque el archivo no está firmado; se continúa con «Más información». «Install for me only» (instalar solo para mí) no necesita permisos de administrador; la mira y el editor se pueden elegir por separado.',
        'Inicia «Fadenkreuz»: en el centro de la pantalla aparece una cruz verde. Ctrl+Alt+F9 la oculta y la vuelve a mostrar, Ctrl+Alt+F12 la cierra, igual que un segundo clic en el acceso directo.',
        'Dibuja en el «Fadenkreuz-Editor», elige una vez «Save as …» (guardar como) y guarda como fadenkreuz.bmp en Documentos\\Fadenkreuz. Con «live» activado, la mira recoge cada cambio en un segundo como mucho.'
      ],
      fr: [
        'Télécharger l’installateur depuis les releases et le lancer. Windows signale « Éditeur inconnu », parce que le fichier n’est pas signé — on continue via « Informations complémentaires ». « Install for me only » (installer pour moi seulement) ne demande pas de droits d’administrateur ; le réticule et l’éditeur se choisissent séparément.',
        'Lancer « Fadenkreuz » : une croix verte apparaît au centre de l’écran. Ctrl+Alt+F9 la masque et la réaffiche, Ctrl+Alt+F12 la ferme — exactement comme un second clic sur le raccourci.',
        'Dessiner dans le « Fadenkreuz-Editor », choisir une fois « Save as … » (enregistrer sous) et enregistrer sous le nom fadenkreuz.bmp dans Documents\\Fadenkreuz. Avec « live » activé, le réticule reprend chaque modification en une seconde au plus.'
      ],
      it: [
        'Scarica il programma di installazione dalle release ed eseguilo. Windows segnala «Editore sconosciuto» perché il file non è firmato: prosegui con «Ulteriori informazioni». «Install for me only» (installa solo per me) non richiede diritti di amministratore; mirino ed editor si scelgono separatamente.',
        'Avvia «Fadenkreuz»: al centro dello schermo compare una croce verde. Ctrl+Alt+F9 la nasconde e la rimostra, Ctrl+Alt+F12 la chiude — proprio come un secondo clic sul collegamento.',
        'Disegna nel «Fadenkreuz-Editor», scegli una volta «Save as …» (salva con nome) e salva come fadenkreuz.bmp in Documenti\\Fadenkreuz. Con «live» attivo, il mirino recepisce ogni modifica entro un secondo.'
      ],
      nl: [
        'Download de installatie van de releases en voer hem uit. Windows meldt “Onbekende uitgever”, omdat het bestand niet ondertekend is — via “Meer informatie” ga je verder. “Install for me only” (alleen voor mij installeren) vraagt geen beheerdersrechten; vizier en editor kun je los kiezen.',
        'Start “Fadenkreuz”: midden op het scherm verschijnt een groen kruis. Ctrl+Alt+F9 verbergt en toont het, Ctrl+Alt+F12 sluit het af — net als een tweede klik op de snelkoppeling.',
        'Teken in de “Fadenkreuz-Editor”, kies één keer “Save as …” (opslaan als) en sla op als fadenkreuz.bmp in Documenten\\Fadenkreuz. Met “live” aan neemt het vizier elke wijziging binnen een seconde over.'
      ],
      pl: [
        'Pobrać instalator ze strony wydań i go uruchomić. Windows zgłosi „Nieznany wydawca”, bo plik nie jest podpisany — dalej prowadzi „Więcej informacji”. „Install for me only” (instalacja tylko dla mnie) nie wymaga uprawnień administratora; celownik i edytor można wybrać osobno.',
        'Uruchomić „Fadenkreuz”: na środku ekranu pojawi się zielony krzyż. Ctrl+Alt+F9 ukrywa go i pokazuje z powrotem, Ctrl+Alt+F12 go zamyka — tak samo jak drugie kliknięcie skrótu.',
        'Narysować celownik w „Fadenkreuz-Editor”, raz wybrać „Save as …” (zapisz jako) i zapisać jako fadenkreuz.bmp w folderze Dokumenty\\Fadenkreuz. Z włączonym „live” celownik przejmuje każdą zmianę najpóźniej po sekundzie.'
      ],
      pt: [
        'Transferir o instalador da página de versões e executá-lo. O Windows avisa «Editor desconhecido», porque o ficheiro não está assinado — continua-se através de «Mais informações». «Install for me only» (instalar só para mim) não precisa de direitos de administrador; a mira e o editor escolhem-se em separado.',
        'Iniciar o «Fadenkreuz»: no centro do ecrã aparece uma cruz verde. Ctrl+Alt+F9 esconde-a e volta a mostrá-la, Ctrl+Alt+F12 fecha-a — tal como um segundo clique no atalho.',
        'Desenhar no «Fadenkreuz-Editor», escolher uma vez «Save as …» (guardar como) e guardar como fadenkreuz.bmp em Documentos\\Fadenkreuz. Com «live» ligado, a mira assume cada alteração no máximo um segundo depois.'
      ],
      tr: [
        'Kurulum dosyasını sürümler sayfasından indirip çalıştırın. Dosya imzalı olmadığı için Windows “Bilinmeyen yayımcı” uyarısı verir — “Daha fazla bilgi” üzerinden devam edilir. “Install for me only” (yalnızca benim için kur) yönetici hakları gerektirmez; nişangâh ve düzenleyici ayrı ayrı seçilebilir.',
        'Fadenkreuz’u başlatın: ekranın ortasında yeşil bir artı belirir. Ctrl+Alt+F9 onu gizler ve yeniden gösterir, Ctrl+Alt+F12 kapatır — tıpkı kısayola ikinci kez tıklamak gibi.',
        '“Fadenkreuz-Editor” içinde çizin, bir kez “Save as …” (farklı kaydet) seçeneğini seçin ve dosyayı Belgeler\\Fadenkreuz klasörüne fadenkreuz.bmp adıyla kaydedin. “live” açıkken nişangâh her değişikliği en geç bir saniye içinde alır.'
      ],
      ru: [
        'Скачайте установщик со страницы релизов и запустите его. Windows сообщит «Неизвестный издатель», потому что файл не подписан, — продолжите через «Подробнее». Вариант «Install for me only» (установить только для меня) не требует прав администратора; прицел и редактор можно выбрать по отдельности.',
        'Запустите «Fadenkreuz»: в центре экрана появится зелёный крест. Ctrl+Alt+F9 скрывает и снова показывает его, Ctrl+Alt+F12 закрывает — так же, как повторный щелчок по ярлыку.',
        'Нарисуйте прицел в «Fadenkreuz-Editor», один раз выберите «Save as …» (сохранить как) и сохраните файл как fadenkreuz.bmp в папке Документы\\Fadenkreuz. Если включено «live», прицел подхватывает каждое изменение не позже чем через секунду.'
      ],
      hi: [
        'Releases से सेटअप डाउनलोड करके चलाएँ। फ़ाइल साइन की हुई नहीं है, इसलिए Windows “अज्ञात प्रकाशक” बताएगा — “अधिक जानकारी” से आगे बढ़ें। “Install for me only” (सिर्फ़ मेरे लिए इंस्टॉल करें) के लिए एडमिन अधिकार नहीं चाहिए; क्रॉसहेयर और एडिटर अलग-अलग चुने जा सकते हैं।',
        '“Fadenkreuz” शुरू करें: स्क्रीन के बीच में एक हरा क्रॉस दिखेगा। Ctrl+Alt+F9 उसे छिपाता और फिर दिखाता है, Ctrl+Alt+F12 उसे बंद करता है — ठीक शॉर्टकट पर दूसरी बार क्लिक करने की तरह।',
        '“Fadenkreuz-Editor” में बनाएँ, एक बार “Save as …” (इस रूप में सहेजें) चुनें और Documents\\Fadenkreuz में fadenkreuz.bmp नाम से सहेजें। “live” चालू होने पर क्रॉसहेयर हर बदलाव ज़्यादा से ज़्यादा एक सेकंड में अपना लेता है।'
      ],
      zh: [
        '从发布页下载安装程序并运行。因为文件没有签名，Windows 会提示“未知发布者”——点“更多信息”即可继续。选择“Install for me only”（仅为我安装）不需要管理员权限；准星和编辑器可以分开选择。',
        '启动“Fadenkreuz”：屏幕中央会出现一个绿色十字。Ctrl+Alt+F9 可隐藏或重新显示，Ctrl+Alt+F12 将其关闭——和再点一次快捷方式效果相同。',
        '在“Fadenkreuz-Editor”里绘制，点一次“Save as …”（另存为），把文件以 fadenkreuz.bmp 保存到“文档\\Fadenkreuz”。打开“live”后，准星最多一秒就会采用每次改动。'
      ],
      ja: [
        'リリースページからセットアップをダウンロードして実行します。ファイルに署名がないため Windows は「不明な発行元」と表示します — 「詳細情報」から先へ進めます。「Install for me only」（自分だけにインストール）なら管理者権限は不要で、照準とエディターは別々に選べます。',
        '「Fadenkreuz」を起動すると、画面の中央に緑の十字が現れます。Ctrl+Alt+F9 で隠したり再表示したりでき、Ctrl+Alt+F12 で終了します — ショートカットをもう一度クリックしても同じです。',
        '「Fadenkreuz-Editor」で描き、一度だけ「Save as …」（名前を付けて保存）を選んで、ドキュメント\\Fadenkreuz に fadenkreuz.bmp として保存します。「live」をオンにすると、照準は変更を遅くとも1秒以内に反映します。'
      ],
      ko: [
        '릴리스 페이지에서 설치 프로그램을 내려받아 실행합니다. 파일에 서명이 없어서 Windows가 “알 수 없는 게시자”라고 알립니다 — “추가 정보”를 눌러 계속하면 됩니다. “Install for me only”(나만 설치)는 관리자 권한이 필요 없고, 조준선과 에디터는 따로 고를 수 있습니다.',
        '“Fadenkreuz”를 실행하면 화면 가운데에 녹색 십자가 나타납니다. Ctrl+Alt+F9로 숨기거나 다시 보이게 하고, Ctrl+Alt+F12로 끕니다 — 바로 가기를 한 번 더 클릭해도 같습니다.',
        '“Fadenkreuz-Editor”에서 그린 다음, “Save as …”(다른 이름으로 저장)를 한 번 골라 문서\\Fadenkreuz에 fadenkreuz.bmp로 저장합니다. “live”를 켜 두면 조준선이 바뀐 내용을 늦어도 1초 안에 반영합니다.'
      ]
    },
    pitfalls: {
      de: [
        'Spiele im exklusiven Vollbild übermalen jedes Overlay. Stell das Spiel auf „Randloses Fenster“ oder „Vollbild im Fenster“.',
        'Strg+Alt+F10 im Spiel heißt: Ab jetzt erscheint das Kreuz nur noch, solange dieses Spiel vorne ist. Fehlt es in einem anderen Spiel, steht das nur noch nicht auf der Liste — dort ebenfalls Strg+Alt+F10 drücken; eine leere Dokumente\\Fadenkreuz\\programme.txt heißt: immer sichtbar.',
        'Über Startmenü, Taskleiste und manchen Overlays liegt das Kreuz nur mit „Installation für alle Benutzer“ und der Aufgabe „Über allem anzeigen“. Dafür legt das Setup ein Zertifikat an, das nur auf diesem PC gilt, und löscht den privaten Schlüssel gleich wieder.',
        'Fadenkreuz fasst das Spiel nicht an, es ist ein eigenes Fenster. Trotzdem mögen einige Wettkampf-Spiele keine Overlays — vor Ranglisten-Spielen prüfen.',
        'Nur der Hauptbildschirm. Editor und Setup sprechen Deutsch und Englisch. Edge und Chrome speichern direkt in die Datei, Firefox kann sie nur herunterladen.'
      ],
      en: [
        'Games in exclusive fullscreen draw over every overlay. Switch the game to “borderless window” or “windowed fullscreen”.',
        'Ctrl+Alt+F10 inside a game means: from now on the crosshair only appears while that game is in front. If it is missing in another game, that game is just not on the list yet — press Ctrl+Alt+F10 there too; an empty Documents\\Fadenkreuz\\programme.txt means: always visible.',
        'The crosshair only sits above the Start menu, the taskbar and some overlays with “Install for all users” and the task “Show on top of everything”. For that, the setup creates a certificate that is only valid on this PC and deletes its private key right away.',
        'Fadenkreuz does not touch the game — it is a window of its own. Still, a few competitive games dislike overlays; check before playing ranked.',
        'Main screen only. Editor and setup speak English and German. Edge and Chrome save straight into the file; Firefox can only download it.'
      ],
      es: [
        'Los juegos en pantalla completa exclusiva tapan cualquier superposición. Pon el juego en «ventana sin bordes» o «pantalla completa en ventana».',
        'Ctrl+Alt+F10 dentro de un juego significa: a partir de ahora la mira solo aparece mientras ese juego esté delante. Si falta en otro juego, es que ese juego aún no está en la lista: pulsa también allí Ctrl+Alt+F10; un Documentos\\Fadenkreuz\\programme.txt vacío significa: siempre visible.',
        'La mira solo queda por encima del menú Inicio, la barra de tareas y algunas superposiciones con «Install for all users» y la tarea «Show on top of everything». Para ello, el instalador crea un certificado válido solo en este PC y borra enseguida su clave privada.',
        'Fadenkreuz no toca el juego: es una ventana propia. Aun así, algunos juegos competitivos no se llevan bien con las superposiciones; compruébalo antes de jugar partidas clasificatorias.',
        'Solo la pantalla principal. El editor y el instalador están en inglés y en alemán. Edge y Chrome guardan directamente en el archivo; Firefox solo puede descargarlo.'
      ],
      fr: [
        'Les jeux en plein écran exclusif recouvrent toute surcouche. Passez le jeu en « fenêtre sans bordure » ou en « plein écran fenêtré ».',
        'Ctrl+Alt+F10 dans un jeu signifie : désormais, le réticule n’apparaît que tant que ce jeu est au premier plan. S’il manque dans un autre jeu, c’est simplement que celui-ci n’est pas encore sur la liste — appuyez aussi sur Ctrl+Alt+F10 là-bas ; un fichier Documents\\Fadenkreuz\\programme.txt vide signifie : toujours visible.',
        'Le réticule ne passe au-dessus du menu Démarrer, de la barre des tâches et de certaines surcouches qu’avec « Install for all users » et la tâche « Show on top of everything ». L’installateur crée pour cela un certificat valable uniquement sur ce PC et supprime aussitôt sa clé privée.',
        'Fadenkreuz ne touche pas au jeu : c’est une fenêtre à part. Certains jeux compétitifs n’aiment pourtant pas les surcouches ; vérifiez avant de jouer en classé.',
        'Écran principal uniquement. L’éditeur et l’installateur sont en anglais et en allemand. Edge et Chrome enregistrent directement dans le fichier ; Firefox ne peut que le télécharger.'
      ],
      it: [
        'I giochi a schermo intero esclusivo coprono qualsiasi overlay. Imposta il gioco su «finestra senza bordi» o «schermo intero in finestra».',
        'Ctrl+Alt+F10 dentro un gioco significa: da ora il mirino compare solo mentre quel gioco è in primo piano. Se manca in un altro gioco, quel gioco non è ancora nell’elenco: premi Ctrl+Alt+F10 anche lì; un Documenti\\Fadenkreuz\\programme.txt vuoto significa: sempre visibile.',
        'Il mirino sta sopra il menu Start, la barra delle applicazioni e alcuni overlay solo con «Install for all users» e l’attività «Show on top of everything». Per questo il programma di installazione crea un certificato valido solo su questo PC e ne cancella subito la chiave privata.',
        'Fadenkreuz non tocca il gioco: è una finestra a sé. Alcuni giochi competitivi però non amano gli overlay; controlla prima di giocare partite classificate.',
        'Solo lo schermo principale. Editor e programma di installazione sono in inglese e in tedesco. Edge e Chrome salvano direttamente nel file; Firefox può solo scaricarlo.'
      ],
      nl: [
        'Games in exclusief volledig scherm tekenen over elke overlay heen. Zet de game op ‘randloos venster’ of ‘volledig scherm in venster’.',
        'Ctrl+Alt+F10 in een game betekent: vanaf nu verschijnt het vizier alleen zolang die game op de voorgrond staat. Ontbreekt het in een andere game, dan staat die game nog niet op de lijst — druk daar ook op Ctrl+Alt+F10; een lege Documenten\\Fadenkreuz\\programme.txt betekent: altijd zichtbaar.',
        'Het vizier ligt alleen boven het Startmenu, de taakbalk en sommige overlays met “Install for all users” en de taak “Show on top of everything”. Daarvoor maakt de installatie een certificaat aan dat alleen op deze pc geldt, en wist de privésleutel meteen weer.',
        'Fadenkreuz raakt de game niet aan — het is een eigen venster. Toch houden sommige competitieve games niet van overlays; controleer dat vóór je ranked speelt.',
        'Alleen het hoofdscherm. Editor en installatie zijn er in het Engels en het Duits. Edge en Chrome slaan direct op in het bestand; Firefox kan het alleen downloaden.'
      ],
      pl: [
        'Gry w trybie wyłącznego pełnego ekranu zasłaniają każdą nakładkę. Przełącz grę na „okno bez ramki” lub „pełny ekran w oknie”.',
        'Ctrl+Alt+F10 w grze oznacza: od teraz celownik pojawia się tylko wtedy, gdy ta gra jest na pierwszym planie. Jeśli brakuje go w innej grze, tej gry po prostu nie ma jeszcze na liście — naciśnij tam też Ctrl+Alt+F10; pusty plik Dokumenty\\Fadenkreuz\\programme.txt oznacza: zawsze widoczny.',
        'Nad menu Start, paskiem zadań i niektórymi nakładkami celownik leży tylko przy „Install for all users” i zadaniu „Show on top of everything”. Instalator tworzy wtedy certyfikat ważny tylko na tym komputerze i od razu usuwa jego klucz prywatny.',
        'Fadenkreuz nie dotyka gry — to osobne okno. Mimo to niektóre gry rywalizacyjne nie lubią nakładek; sprawdź to przed grą rankingową.',
        'Tylko główny ekran. Edytor i instalator są po angielsku i po niemiecku. Edge i Chrome zapisują prosto do pliku; Firefox może go tylko pobrać.'
      ],
      pt: [
        'Os jogos em ecrã inteiro exclusivo tapam qualquer sobreposição. Ponha o jogo em «janela sem limites» ou «ecrã inteiro em janela».',
        'Ctrl+Alt+F10 dentro de um jogo significa: a partir daí, a mira só aparece enquanto esse jogo estiver à frente. Se faltar noutro jogo, é só porque esse jogo ainda não está na lista — carregue também aí em Ctrl+Alt+F10; um Documentos\\Fadenkreuz\\programme.txt vazio significa: sempre visível.',
        'A mira só fica por cima do menu Iniciar, da barra de tarefas e de algumas sobreposições com «Install for all users» e a tarefa «Show on top of everything». Para isso, o instalador cria um certificado válido só neste PC e apaga logo a sua chave privada.',
        'O Fadenkreuz não mexe no jogo — é uma janela própria. Ainda assim, alguns jogos competitivos não gostam de sobreposições; verifique antes de jogar partidas classificadas.',
        'Só o ecrã principal. O editor e o instalador estão em inglês e em alemão. O Edge e o Chrome guardam diretamente no ficheiro; o Firefox só o consegue transferir.'
      ],
      tr: [
        'Özel tam ekran modundaki oyunlar her katmanın üzerini kapatır. Oyunu “kenarlıksız pencere” ya da “pencereli tam ekran” moduna alın.',
        'Oyun içinde Ctrl+Alt+F10 şu anlama gelir: Artık nişangâh yalnızca o oyun öndeyken görünür. Başka bir oyunda görünmüyorsa, o oyun henüz listede değildir — orada da Ctrl+Alt+F10’a basın; boş bir Belgeler\\Fadenkreuz\\programme.txt dosyası “her zaman görünür” demektir.',
        'Nişangâh Başlat menüsünün, görev çubuğunun ve bazı katmanların üstünde yalnızca “Install for all users” ve “Show on top of everything” görevi seçildiğinde durur. Bunun için kurulum, yalnızca bu bilgisayarda geçerli bir sertifika oluşturur ve özel anahtarını hemen siler.',
        'Fadenkreuz oyuna dokunmaz — kendi başına bir penceredir. Yine de bazı rekabetçi oyunlar katmanları sevmez; dereceli oyunlardan önce kontrol edin.',
        'Yalnızca ana ekran. Düzenleyici ve kurulum İngilizce ve Almancadır. Edge ve Chrome doğrudan dosyaya kaydeder; Firefox dosyayı yalnızca indirebilir.'
      ],
      ru: [
        'Игры в эксклюзивном полноэкранном режиме перекрывают любой оверлей. Переключите игру в режим «окно без рамки» или «полноэкранный в окне».',
        'Ctrl+Alt+F10 в игре означает: теперь прицел появляется только тогда, когда эта игра на переднем плане. Если его нет в другой игре, значит, её просто ещё нет в списке, — нажмите Ctrl+Alt+F10 и там; пустой файл Документы\\Fadenkreuz\\programme.txt означает: виден всегда.',
        'Над меню «Пуск», панелью задач и некоторыми оверлеями прицел лежит только с вариантом «Install for all users» и задачей «Show on top of everything». Для этого установщик создаёт сертификат, действующий только на этом ПК, и сразу удаляет его закрытый ключ.',
        'Fadenkreuz не трогает игру — это отдельное окно. И всё же некоторые соревновательные игры не любят оверлеи; проверьте это перед рейтинговыми матчами.',
        'Только основной экран. Редактор и установщик — на английском и немецком. Edge и Chrome сохраняют прямо в файл; Firefox может его только скачать.'
      ],
      hi: [
        'एक्सक्लूसिव फ़ुलस्क्रीन वाले गेम हर ओवरले को ढक देते हैं। गेम को “बॉर्डरलेस विंडो” या “विंडो वाला फ़ुलस्क्रीन” पर रखें।',
        'गेम के अंदर Ctrl+Alt+F10 का मतलब है: अब से क्रॉसहेयर सिर्फ़ तभी दिखेगा, जब वही गेम सबसे आगे हो। अगर किसी दूसरे गेम में वह नहीं दिखता, तो वह गेम अभी सूची में नहीं है — वहाँ भी Ctrl+Alt+F10 दबाएँ; खाली Documents\\Fadenkreuz\\programme.txt का मतलब है: हमेशा दिखेगा।',
        'स्टार्ट मेन्यू, टास्कबार और कुछ ओवरले के ऊपर क्रॉसहेयर तभी रहता है, जब आप “Install for all users” और “Show on top of everything” कार्य चुनें। इसके लिए सेटअप एक ऐसा प्रमाणपत्र बनाता है जो सिर्फ़ इसी पीसी पर मान्य है, और उसकी निजी कुंजी तुरंत मिटा देता है।',
        'Fadenkreuz गेम को छूता नहीं — यह एक अलग विंडो है। फिर भी कुछ प्रतियोगी गेम ओवरले पसंद नहीं करते; रैंक्ड मैच से पहले जाँच लें।',
        'सिर्फ़ मुख्य स्क्रीन। एडिटर और सेटअप अंग्रेज़ी और जर्मन में हैं। Edge और Chrome सीधे फ़ाइल में सहेजते हैं; Firefox उसे सिर्फ़ डाउनलोड कर सकता है।'
      ],
      zh: [
        '独占全屏模式下的游戏会盖住所有覆盖层。请把游戏改成“无边框窗口”或“窗口化全屏”。',
        '在游戏里按 Ctrl+Alt+F10 的意思是：从现在起，只有这个游戏在最前面时才显示准星。如果在另一个游戏里看不到它，只是因为那个游戏还不在列表里——在那里也按一下 Ctrl+Alt+F10；“文档\\Fadenkreuz\\programme.txt”为空则表示：始终显示。',
        '只有选择“Install for all users”并勾选“Show on top of everything”时，准星才会位于开始菜单、任务栏和部分覆盖层之上。为此，安装程序会创建一个只在这台电脑上有效的证书，并立即删除其私钥。',
        'Fadenkreuz 不会碰游戏——它是一个独立的窗口。尽管如此，有些竞技游戏不喜欢覆盖层；打排位赛之前请先确认。',
        '仅支持主屏幕。编辑器和安装程序都有英语和德语。Edge 和 Chrome 能直接保存到文件；Firefox 只能下载。'
      ],
      ja: [
        '排他的フルスクリーンのゲームは、どんなオーバーレイも上から覆い隠します。ゲームを「ボーダーレスウィンドウ」か「ウィンドウ化フルスクリーン」にしてください。',
        'ゲーム内で Ctrl+Alt+F10 を押すと、それ以降はそのゲームが前面にあるときだけ照準が表示されます。別のゲームで照準が出ないのは、そのゲームがまだリストにないだけです — そこでも Ctrl+Alt+F10 を押してください。ドキュメント\\Fadenkreuz\\programme.txt が空なら、常に表示されます。',
        '照準がスタートメニュー、タスクバー、一部のオーバーレイより上に来るのは、「Install for all users」と「Show on top of everything」を選んだときだけです。そのためにセットアップは、この PC でだけ有効な証明書を作り、秘密鍵をすぐに削除します。',
        'Fadenkreuz はゲームに手を触れません — 独立したウィンドウです。それでも、オーバーレイを嫌う対戦ゲームもあります。ランクマッチの前に確認してください。',
        'メイン画面のみです。エディターとセットアップは英語とドイツ語に対応しています。Edge と Chrome はファイルに直接保存できますが、Firefox はダウンロードしかできません。'
      ],
      ko: [
        '독점 전체 화면 모드의 게임은 모든 오버레이를 덮어 버립니다. 게임을 “테두리 없는 창” 또는 “창 모드 전체 화면”으로 바꾸세요.',
        '게임 안에서 Ctrl+Alt+F10을 누르면, 그때부터 조준선은 그 게임이 맨 앞에 있을 때만 나타납니다. 다른 게임에서 보이지 않는다면 그 게임이 아직 목록에 없을 뿐입니다 — 거기서도 Ctrl+Alt+F10을 누르세요. 문서\\Fadenkreuz\\programme.txt가 비어 있으면 항상 보입니다.',
        '조준선이 시작 메뉴, 작업 표시줄, 일부 오버레이보다 위에 오려면 “Install for all users”와 “Show on top of everything” 작업을 골라야 합니다. 이를 위해 설치 프로그램은 이 PC에서만 유효한 인증서를 만들고, 개인 키는 곧바로 지웁니다.',
        'Fadenkreuz는 게임을 건드리지 않습니다 — 별도의 창일 뿐입니다. 그래도 일부 경쟁 게임은 오버레이를 싫어하니 랭크 게임 전에 확인하세요.',
        '메인 화면만 지원합니다. 에디터와 설치 프로그램은 영어와 독일어를 지원합니다. Edge와 Chrome은 파일에 바로 저장하지만, Firefox는 내려받기만 할 수 있습니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/fadenkreuz/blob/main/README.md'
    }
  },
  craftionary: {
    purpose: {
      de: 'Jedes Rezept aus Minecraft Java 26.3 so, wie es im Spiel aussieht – in der Werkbank, im Ofen, im Braustand oder wo es sonst entsteht. Dazu, wo du etwas findest (Erz-Höhen, Truhen, Kreaturen, Handel), fertige /give-Befehle und eine Werkstatt für Banner, Schilde und Krüge. Craftionary läuft im Browser auf dem Handy (Android und iOS) und am Desktop und lässt sich mit dem Knopf „Installieren“ als App einrichten.',
      en: 'Every recipe in Minecraft Java 26.3 the way the game shows it – at the crafting table, in the furnace, at the brewing stand or wherever it is made. Plus where to find things (ore heights, chests, mobs, trading), ready /give commands and a workshop for banners, shields and pots. Craftionary runs in the browser on your phone (Android and iOS) and on desktop, and the “Install” button sets it up as an app.',
      es: 'Cada receta de Minecraft Java 26.3 tal como la muestra el juego: en la mesa de crafteo, el horno, el soporte para pociones o donde se fabrique. Además, dónde encontrar cada cosa (alturas de minerales, cofres, criaturas, comercio), comandos /give listos y un taller de estandartes, escudos y vasijas. Craftionary funciona en el navegador del móvil (Android e iOS) y del ordenador, y el botón «Install» lo instala como app.',
      fr: 'Chaque recette de Minecraft Java 26.3 telle que le jeu l’affiche – à l’établi, au four, à l’alambic ou là où elle se fabrique. En plus : où trouver les objets (hauteurs des minerais, coffres, créatures, commerce), des commandes /give prêtes et un atelier pour bannières, boucliers et pots. Craftionary fonctionne dans le navigateur du téléphone (Android et iOS) et de l’ordinateur, et le bouton « Install » l’installe comme application.',
      it: 'Ogni ricetta di Minecraft Java 26.3 come la mostra il gioco: al banco da lavoro, nella fornace, nel banco di distillazione o dove viene creata. In più: dove trovare le cose (altezze dei minerali, bauli, creature, commercio), comandi /give pronti e un laboratorio per stendardi, scudi e vasi. Craftionary funziona nel browser del telefono (Android e iOS) e del computer, e il pulsante «Install» lo installa come app.',
      nl: 'Elk recept uit Minecraft Java 26.3 zoals het spel het laat zien – aan de werkbank, in de oven, in de brouwstandaard of waar het ook gemaakt wordt. Daarbij: waar je iets vindt (ertshoogtes, kisten, wezens, handel), kant-en-klare /give-commando’s en een werkplaats voor banieren, schilden en potten. Craftionary draait in de browser op je telefoon (Android en iOS) en op de computer, en de knop ‘Install’ installeert het als app.',
      pl: 'Każda receptura z Minecraft Java 26.3 tak, jak pokazuje ją gra – przy stole rzemieślniczym, w piecu, w statywie alchemicznym albo tam, gdzie powstaje. Do tego: gdzie co znaleźć (wysokości rud, skrzynie, stworzenia, handel), gotowe komendy /give i warsztat sztandarów, tarcz i naczyń. Craftionary działa w przeglądarce na telefonie (Android i iOS) i na komputerze, a przycisk „Install” instaluje go jako aplikację.',
      pt: 'Cada receita do Minecraft Java 26.3 tal como o jogo a mostra – na bancada de trabalho, na fornalha, no suporte de poções ou onde for feita. Além disso: onde encontrar cada coisa (alturas dos minérios, baús, criaturas, comércio), comandos /give prontos e uma oficina de estandartes, escudos e vasos. O Craftionary funciona no navegador do telemóvel (Android e iOS) e do computador, e o botão «Install» instala-o como app.',
      tr: 'Minecraft Java 26.3’teki her tarif, oyunda göründüğü gibi – çalışma masasında, fırında, simya standında ya da nerede yapılıyorsa orada. Ayrıca bir şeyi nerede bulacağınız (maden yükseklikleri, sandıklar, yaratıklar, ticaret), hazır /give komutları ve sancak, kalkan ve çömlekler için bir atölye. Craftionary telefonda (Android ve iOS) ve bilgisayarda tarayıcıda çalışır; “Install” düğmesi onu uygulama olarak kurar.',
      ru: 'Каждый рецепт Minecraft Java 26.3 в том виде, в каком его показывает игра, – на верстаке, в печи, в варочной стойке или там, где он создаётся. Кроме того: где что найти (высоты руд, сундуки, существа, торговля), готовые команды /give и мастерская флагов, щитов и горшков. Craftionary работает в браузере на телефоне (Android и iOS) и на компьютере, а кнопка «Install» устанавливает его как приложение.',
      hi: 'Minecraft Java 26.3 की हर रेसिपी वैसी ही, जैसी गेम में दिखती है – क्राफ़्टिंग टेबल, भट्टी, ब्रूइंग स्टैंड या जहाँ भी वह बनती है। साथ में: कौन-सी चीज़ कहाँ मिलती है (अयस्कों की ऊँचाई, संदूक, जीव, व्यापार), तैयार /give कमांड और बैनर, ढाल व मटकों की वर्कशॉप। Craftionary फ़ोन (Android और iOS) और डेस्कटॉप के ब्राउज़र में चलता है, और “Install” बटन से ऐप की तरह इंस्टॉल होता है।',
      zh: 'Minecraft Java 26.3 的每个配方，都按游戏里的样子显示——在工作台、熔炉、酿造台或任何制作它的地方。此外还有：东西在哪里找（矿石高度、箱子、生物、交易）、现成的 /give 命令，以及旗帜、盾牌和陶罐的工坊。Craftionary 可在手机（Android 和 iOS）和电脑的浏览器中运行，点“Install”按钮即可安装为应用。',
      ja: 'Minecraft Java 26.3 のすべてのレシピを、ゲームと同じ見た目で表示します。作業台でも、かまどでも、醸造台でも、作られる場所のとおりに。さらに、どこで手に入るか（鉱石の高さ、チェスト、モブ、取引）、すぐ使える /give コマンド、旗・盾・飾り壺の工房もあります。Craftionary はスマートフォン（Android と iOS）とパソコンのブラウザーで動き、「Install」ボタンでアプリとしてインストールできます。',
      ko: 'Minecraft Java 26.3의 모든 조합법을 게임에 나오는 모습 그대로 보여 줍니다. 제작대든 화로든 양조기든 만드는 곳 그대로요. 그리고 어디서 구하는지(광석 높이, 상자, 몹, 거래), 바로 쓰는 /give 명령어, 현수막·방패·항아리 공방도 있습니다. Craftionary는 휴대폰(Android와 iOS)과 데스크톱 브라우저에서 돌아가고, ‘Install’ 버튼으로 앱처럼 설치할 수 있습니다.'
    },
    shots: [
      {
        files: {
          de: ['craftionary-de.webp', 1446, 848],
          en: ['craftionary-en.webp', 1446, 848]
        },
        alt: {
          de: 'Drei Handy-Ansichten von Craftionary im Dunkelmodus: das Rezept für das Leuchtfeuer im Werkbank-Fenster mit fünf Glas, einem Netherstern und drei Obsidian; die Fundorte von Diamant als Höhenkurve mit der besten Höhe Y −59; die Muster-Werkstatt mit einem türkisen Banner und Schild samt Creeper-Gesicht, Rand und Farbverlauf.',
          en: 'Three phone screens of Craftionary in dark mode: the beacon recipe in the crafting table window with five glass, one nether star and three obsidian; where to find diamonds as a height curve with the best level at Y −59; the pattern workshop with a cyan banner and shield showing a creeper face, a border and a gradient.',
          es: 'Tres pantallas de móvil de Craftionary en modo oscuro: la receta del faro en la ventana de la mesa de crafteo con cinco cristales, una estrella del Nether y tres de obsidiana; dónde encontrar diamantes como curva de alturas con la mejor altura en Y −59; el taller de diseños con un estandarte y un escudo cian con cara de creeper, borde y degradado.',
          fr: 'Trois écrans de téléphone de Craftionary en mode sombre : la recette de la balise dans la fenêtre de l’établi avec cinq verres, une étoile du Nether et trois obsidiennes ; où trouver les diamants sous forme de courbe des hauteurs avec la meilleure hauteur en Y −59 ; l’atelier de motifs avec une bannière et un bouclier cyan portant une tête de creeper, une bordure et un dégradé.',
          it: 'Tre schermate di telefono di Craftionary in modalità scura: la ricetta del faro nella finestra del banco da lavoro con cinque vetri, una stella del Nether e tre ossidiane; dove trovare i diamanti come curva delle altezze con l’altezza migliore a Y −59; il laboratorio di motivi con uno stendardo e uno scudo ciano con faccia di creeper, bordo e sfumatura.',
          nl: 'Drie telefoonschermen van Craftionary in donkere modus: het recept voor het baken in het werkbankvenster met vijf glas, één Nether-ster en drie obsidiaan; waar je diamanten vindt als hoogtecurve met de beste hoogte op Y −59; de patroonwerkplaats met een cyaan banier en schild met creepergezicht, rand en kleurverloop.',
          pl: 'Trzy ekrany telefonu z Craftionary w trybie ciemnym: receptura latarni w oknie stołu rzemieślniczego z pięcioma szkłami, jedną gwiazdą Netheru i trzema obsydianami; gdzie znaleźć diamenty jako krzywa wysokości z najlepszą wysokością Y −59; warsztat wzorów z cyjanowym sztandarem i tarczą z twarzą creepera, obramowaniem i gradientem.',
          pt: 'Três ecrãs de telemóvel do Craftionary em modo escuro: a receita do sinalizador na janela da bancada de trabalho com cinco vidros, uma estrela do Nether e três obsidianas; onde encontrar diamantes como curva de alturas com a melhor altura em Y −59; a oficina de padrões com um estandarte e um escudo ciano com cara de creeper, borda e degradê.',
          tr: 'Craftionary’den koyu modda üç telefon ekranı: beş cam, bir Nether yıldızı ve üç obsidyenle çalışma masası penceresinde fener tarifi; en iyi yükseklik Y −59 olan yükseklik eğrisi olarak elmasların bulunduğu yerler; creeper yüzü, kenarlık ve renk geçişli camgöbeği bir sancak ve kalkanla desen atölyesi.',
          ru: 'Три экрана телефона с Craftionary в тёмной теме: рецепт маяка в окне верстака с пятью стёклами, звездой Незера и тремя обсидианами; где искать алмазы – кривая высот с лучшей высотой Y −59; мастерская узоров с бирюзовым флагом и щитом с лицом крипера, каймой и градиентом.',
          hi: 'डार्क मोड में Craftionary की तीन फ़ोन स्क्रीन: क्राफ़्टिंग टेबल की विंडो में बीकन की रेसिपी, पाँच ग्लास, एक नेदर स्टार और तीन ऑब्सीडियन के साथ; हीरे कहाँ मिलते हैं, ऊँचाई के कर्व के रूप में, सबसे अच्छी ऊँचाई Y −59; पैटर्न वर्कशॉप, जिसमें क्रीपर के चेहरे, किनारी और ग्रेडिएंट वाला सियान बैनर और ढाल है।',
          zh: 'Craftionary 深色模式下的三个手机画面：工作台窗口里的信标配方，需要五块玻璃、一颗下界之星和三块黑曜石；钻石的分布高度曲线，最佳高度为 Y −59；图案工坊里一面青色旗帜和盾牌，带苦力怕脸、边框和渐变。',
          ja: 'ダークモードの Craftionary のスマートフォン画面3枚：作業台の画面に表示したビーコンのレシピ（ガラス5個、ネザースター1個、黒曜石3個）、最適な高さ Y −59 を示したダイヤモンドの高さの曲線、クリーパーの顔と縁取りとグラデーションの入ったシアンの旗と盾を作る模様の工房。',
          ko: '어두운 모드의 Craftionary 휴대폰 화면 세 개: 제작대 창에 표시된 신호기 조합법(유리 다섯 개, 네더의 별 하나, 흑요석 세 개), 최적 높이 Y −59가 표시된 다이아몬드 높이 곡선, 크리퍼 얼굴과 테두리와 그라데이션이 들어간 청록색 현수막과 방패가 있는 무늬 공방.'
        }
      }
    ],
    steps: {
      de: [
        'Oben suchen, auf Deutsch oder Englisch – die Suche verträgt Tippfehler und Mengen („16 Fackeln“). Oder darunter eine der neun Stationen antippen und im Rezeptbuch blättern.',
        'Auf der Item-Seite zeigt „Herstellen“ das Rezept im Spielfenster samt Menge, Brennstoff und Resten, „Verwendet in“ alles, wofür du es brauchst, und „Fundorte“, wo es vorkommt – bei Erzen mit Höhenkurve und bester Y-Höhe. Darüber stehen die /give-Befehle zum Kopieren.',
        'Für die Optik wie im Spiel in den Einstellungen einmal „Von Mojang laden“ (rund 41 MB); danach läuft Craftionary auch ohne Netz. Zeigt der Browser oben den Knopf „Installieren“, richtet ein Tipp die App ein; auf dem iPhone geht das in Safari über Teilen und „Zum Home-Bildschirm“.'
      ],
      en: [
        'Search at the top, in English or German – the search copes with typos and amounts (“16 torches”). Or tap one of the nine stations below it and browse its recipe book.',
        'On an item page, “How to make” shows the recipe in the game window with amount, fuel and leftovers, “Used in” everything it is needed for, and “Where to find” where it turns up – for ores with a height curve and the best Y level. The /give commands to copy sit above.',
        'For the in-game look, tap “Load from Mojang” once in the settings (about 41 MB); after that Craftionary also works offline. If your browser shows the “Install” button at the top, one tap sets up the app; on an iPhone, use Share and “Add to Home Screen” in Safari.'
      ],
      es: [
        'Busca arriba, en inglés o alemán: la búsqueda tolera erratas y cantidades («16 torches»). O toca debajo una de las nueve estaciones y hojea su libro de recetas.',
        'En la página de un objeto, «How to make» muestra la receta en la ventana del juego con cantidad, combustible y sobrantes, «Used in» todo para lo que sirve y «Where to find» dónde aparece; en los minerales, con curva de alturas y la mejor altura Y. Encima están los comandos /give para copiar.',
        'Para el aspecto del juego, pulsa una vez «Load from Mojang» en los ajustes (unos 41 MB); después Craftionary funciona también sin conexión. Si el navegador muestra arriba el botón «Install», un toque instala la app; en el iPhone, usa Compartir y «Añadir a pantalla de inicio» en Safari.'
      ],
      fr: [
        'Cherchez en haut, en anglais ou en allemand – la recherche tolère les fautes de frappe et les quantités (« 16 torches »). Ou touchez l’un des neuf postes juste en dessous et feuilletez son livre de recettes.',
        'Sur la page d’un objet, « How to make » montre la recette dans la fenêtre du jeu avec quantité, combustible et restes, « Used in » tout ce à quoi il sert, et « Where to find » où il se trouve – pour les minerais avec une courbe des hauteurs et la meilleure hauteur Y. Les commandes /give à copier se trouvent au-dessus.',
        'Pour l’aspect du jeu, appuyez une fois sur « Load from Mojang » dans les réglages (environ 41 Mo) ; ensuite Craftionary fonctionne aussi hors ligne. Si votre navigateur affiche en haut le bouton « Install », un appui installe l’application ; sur iPhone, passez par Partager et « Sur l’écran d’accueil » dans Safari.'
      ],
      it: [
        'Cerca in alto, in inglese o tedesco: la ricerca tollera errori di battitura e quantità («16 torches»). Oppure tocca qui sotto una delle nove postazioni e sfoglia il suo libro delle ricette.',
        'Nella pagina di un oggetto, «How to make» mostra la ricetta nella finestra del gioco con quantità, combustibile e avanzi, «Used in» tutto ciò per cui serve e «Where to find» dove si trova; per i minerali con curva delle altezze e l’altezza Y migliore. Sopra ci sono i comandi /give da copiare.',
        'Per l’aspetto del gioco, tocca una volta «Load from Mojang» nelle impostazioni (circa 41 MB); poi Craftionary funziona anche offline. Se il browser mostra in alto il pulsante «Install», un tocco installa l’app; su iPhone usa Condividi e «Aggiungi alla schermata Home» in Safari.'
      ],
      nl: [
        'Zoek bovenaan, in het Engels of Duits – de zoekfunctie kan tegen typfouten en aantallen (‘16 torches’). Of tik eronder op een van de negen werkstations en blader door het receptenboek.',
        'Op een itempagina toont ‘How to make’ het recept in het spelvenster met aantal, brandstof en restjes, ‘Used in’ alles waarvoor je het nodig hebt en ‘Where to find’ waar het voorkomt – bij ertsen met een hoogtecurve en de beste Y-hoogte. Daarboven staan de /give-commando’s om te kopiëren.',
        'Voor het uiterlijk van het spel tik je in de instellingen één keer op ‘Load from Mojang’ (ongeveer 41 MB); daarna werkt Craftionary ook offline. Toont je browser bovenaan de knop ‘Install’, dan installeer je de app met één tik; op een iPhone gaat dat in Safari via Deel en ‘Zet op beginscherm’.'
      ],
      pl: [
        'Szukaj u góry, po angielsku lub niemiecku – wyszukiwarka radzi sobie z literówkami i ilościami („16 torches”). Albo dotknij pod spodem jednego z dziewięciu stanowisk i przeglądaj jego księgę receptur.',
        'Na stronie przedmiotu „How to make” pokazuje recepturę w oknie gry z ilością, paliwem i resztkami, „Used in” wszystko, do czego jest potrzebny, a „Where to find”, gdzie występuje – przy rudach z krzywą wysokości i najlepszą wysokością Y. Nad tym są komendy /give do skopiowania.',
        'Dla wyglądu jak w grze dotknij raz w ustawieniach „Load from Mojang” (ok. 41 MB); potem Craftionary działa też offline. Jeśli przeglądarka pokazuje u góry przycisk „Install”, jedno dotknięcie instaluje aplikację; na iPhonie użyj w Safari Udostępnij i „Do ekranu początkowego”.'
      ],
      pt: [
        'Pesquise no topo, em inglês ou alemão – a pesquisa aguenta erros de escrita e quantidades («16 torches»). Ou toque logo abaixo numa das nove estações e folheie o seu livro de receitas.',
        'Na página de um item, «How to make» mostra a receita na janela do jogo com quantidade, combustível e sobras, «Used in» tudo para que serve e «Where to find» onde aparece – nos minérios com curva de alturas e a melhor altura Y. Por cima estão os comandos /give para copiar.',
        'Para o aspeto do jogo, toque uma vez em «Load from Mojang» nas definições (cerca de 41 MB); depois o Craftionary também funciona offline. Se o navegador mostrar no topo o botão «Install», um toque instala a app; no iPhone, use Partilhar e «Adicionar ao ecrã principal» no Safari.'
      ],
      tr: [
        'Üstte İngilizce ya da Almanca arayın – arama yazım hatalarını ve miktarları kaldırır (“16 torches”). Ya da hemen altındaki dokuz istasyondan birine dokunup tarif kitabına göz atın.',
        'Bir eşya sayfasında “How to make” tarifi oyun penceresinde miktar, yakıt ve artanlarla gösterir, “Used in” neye yaradığını, “Where to find” ise nerede bulunduğunu – madenlerde yükseklik eğrisi ve en iyi Y yüksekliğiyle. Kopyalanacak /give komutları bunun üstündedir.',
        'Oyundaki görünüm için ayarlarda bir kez “Load from Mojang”a dokunun (yaklaşık 41 MB); sonra Craftionary çevrimdışı da çalışır. Tarayıcınız üstte “Install” düğmesini gösteriyorsa tek dokunuşla uygulama kurulur; iPhone’da Safari’de Paylaş ve “Ana Ekrana Ekle”yi kullanın.'
      ],
      ru: [
        'Ищите вверху на английском или немецком – поиск прощает опечатки и понимает количества («16 torches»). Или коснитесь под ним одной из девяти станций и листайте её книгу рецептов.',
        'На странице предмета «How to make» показывает рецепт в окне игры с количеством, топливом и остатками, «Used in» – всё, для чего он нужен, а «Where to find» – где он встречается; у руд с кривой высот и лучшей высотой Y. Над этим – команды /give для копирования.',
        'Для вида как в игре один раз нажмите в настройках «Load from Mojang» (около 41 МБ); после этого Craftionary работает и офлайн. Если браузер показывает вверху кнопку «Install», одно касание установит приложение; на iPhone используйте в Safari «Поделиться» и «На экран „Домой“».'
      ],
      hi: [
        'ऊपर अंग्रेज़ी या जर्मन में खोजें – खोज टाइपो और मात्राएँ समझती है (“16 torches”)। या उसके नीचे नौ स्टेशनों में से किसी पर टैप करके उसकी रेसिपी बुक देखें।',
        'आइटम पेज पर “How to make” रेसिपी को गेम की विंडो में मात्रा, ईंधन और बचे सामान के साथ दिखाता है, “Used in” वह सब जिसमें यह लगता है, और “Where to find” कि यह कहाँ मिलता है – अयस्कों के लिए ऊँचाई कर्व और सबसे अच्छी Y ऊँचाई के साथ। ऊपर कॉपी करने के लिए /give कमांड हैं।',
        'गेम जैसे रूप के लिए सेटिंग्स में एक बार “Load from Mojang” दबाएँ (लगभग 41 MB); उसके बाद Craftionary ऑफ़लाइन भी चलता है। अगर ब्राउज़र ऊपर “Install” बटन दिखाता है, तो एक टैप से ऐप इंस्टॉल हो जाता है; iPhone पर Safari में शेयर और “होम स्क्रीन में जोड़ें” इस्तेमाल करें।'
      ],
      zh: [
        '在顶部用英语或德语搜索——搜索能容忍错别字，也认得数量（“16 torches”）。也可以点下方九个工作站之一，翻看它的配方书。',
        '在物品页上，“How to make”在游戏窗口里显示配方及数量、燃料和剩余，“Used in”列出它的所有用途，“Where to find”显示在哪里出现——矿石还有高度曲线和最佳 Y 高度。上方是可复制的 /give 命令。',
        '想要游戏里的外观，在设置里点一次“Load from Mojang”（约 41 MB）；之后 Craftionary 也能离线使用。如果浏览器在顶部显示“Install”按钮，点一下即可安装应用；在 iPhone 上，请用 Safari 的“分享”和“添加到主屏幕”。'
      ],
      ja: [
        '上の検索欄に英語かドイツ語で入力します。打ち間違いや数量（「16 torches」）にも対応します。または、その下の9つの作業場所のどれかをタップしてレシピブックを見ます。',
        'アイテムのページでは「How to make」がレシピをゲーム画面のとおりに数量・燃料・余りつきで、「Used in」が使い道を、「Where to find」が入手場所を表示します。鉱石なら高さの曲線と最適な Y 座標も。その上にコピーできる /give コマンドがあります。',
        'ゲームと同じ見た目にするには、設定で一度「Load from Mojang」（約 41 MB）を押します。その後はオフラインでも使えます。ブラウザーが上部に「Install」ボタンを表示していれば、タップでアプリをインストールできます。iPhone では Safari の共有から「ホーム画面に追加」を使います。'
      ],
      ko: [
        '위에서 영어나 독일어로 검색합니다. 오타와 수량(‘16 torches’)도 알아듣습니다. 또는 그 아래 아홉 작업대 중 하나를 눌러 조합법 책을 넘겨 보세요.',
        '아이템 페이지에서 ‘How to make’는 조합법을 게임 창 그대로 수량, 연료, 남는 양과 함께 보여 주고, ‘Used in’은 쓰이는 곳을, ‘Where to find’는 나오는 곳을 보여 줍니다. 광석이면 높이 곡선과 최적 Y 높이까지요. 그 위에 복사할 /give 명령어가 있습니다.',
        '게임 같은 모습을 원하면 설정에서 ‘Load from Mojang’을 한 번 누르세요(약 41 MB). 그 뒤로는 오프라인에서도 작동합니다. 브라우저가 위쪽에 ‘Install’ 버튼을 보여 주면 한 번 눌러 앱을 설치하고, iPhone에서는 Safari의 공유 → ‘홈 화면에 추가’를 쓰면 됩니다.'
      ]
    },
    pitfalls: {
      de: [
        'Craftionary kennt Minecraft Java 26.3. Bedrock und ältere Versionen haben zum Teil andere Rezepte.',
        'Die /give-Befehle brauchen eingeschaltete Cheats. Was länger als 256 Zeichen ist, passt nicht in den Chat – dann einen Befehlsblock nehmen.',
        'Die Chancen unter „Fundorte“ sind ohne Glück, Plünderung und Behutsamkeit gerechnet. Strukturnamen haben im Spiel keine offizielle Übersetzung.',
        'Craftionary bringt keine Minecraft-Grafiken mit: Ohne geladene Texturen stehen in den Feldern Buchstaben mit Legende. Wer die Texturen vor der Muster-Werkstatt geladen hat, lädt sie für deren Vorschau einmal neu.',
        'Die App gibt es auf Deutsch und Englisch.'
      ],
      en: [
        'Craftionary covers Minecraft Java 26.3. Bedrock and older versions sometimes have different recipes.',
        'The /give commands need cheats switched on. Anything longer than 256 characters does not fit into chat – use a command block instead.',
        'The chances under “Where to find” leave out Fortune, Looting and Silk Touch. Structure names have no official translation in the game.',
        'Craftionary ships no Minecraft artwork: without loaded textures the slots show letters with a key. If you loaded the textures before the pattern workshop existed, load them once more for its preview.',
        'The app speaks English and German.'
      ],
      es: [
        'Craftionary cubre Minecraft Java 26.3. Bedrock y las versiones antiguas tienen a veces otras recetas.',
        'Los comandos /give necesitan los trucos activados. Lo que pase de 256 caracteres no cabe en el chat: entonces usa un bloque de comandos.',
        'Las probabilidades de «Where to find» no incluyen Fortuna, Botín ni Toque de seda. Los nombres de las estructuras no tienen traducción oficial en el juego.',
        'Craftionary no trae gráficos de Minecraft: sin texturas cargadas, las casillas muestran letras con una leyenda. Si cargaste las texturas antes de que existiera el taller de diseños, vuelve a cargarlas una vez para su vista previa.',
        'La app está en inglés y alemán.'
      ],
      fr: [
        'Craftionary couvre Minecraft Java 26.3. Bedrock et les anciennes versions ont parfois d’autres recettes.',
        'Les commandes /give demandent les commandes de triche activées. Au-delà de 256 caractères, cela ne tient pas dans le chat – utilisez alors un bloc de commande.',
        'Les probabilités de « Where to find » ne tiennent pas compte de Fortune, Butin ni Toucher de soie. Les noms des structures n’ont pas de traduction officielle dans le jeu.',
        'Craftionary ne fournit aucun graphisme de Minecraft : sans textures chargées, les cases affichent des lettres avec une légende. Si vous avez chargé les textures avant l’atelier de motifs, rechargez-les une fois pour son aperçu.',
        'L’application existe en anglais et en allemand.'
      ],
      it: [
        'Craftionary copre Minecraft Java 26.3. Bedrock e le versioni più vecchie hanno a volte ricette diverse.',
        'I comandi /give richiedono i trucchi attivi. Ciò che supera i 256 caratteri non entra nella chat: in quel caso usa un blocco comandi.',
        'Le probabilità sotto «Where to find» non tengono conto di Fortuna, Saccheggio e Tocco di velluto. I nomi delle strutture non hanno una traduzione ufficiale nel gioco.',
        'Craftionary non include grafica di Minecraft: senza texture caricate gli slot mostrano lettere con una legenda. Se hai caricato le texture prima che esistesse il laboratorio di motivi, ricaricale una volta per la sua anteprima.',
        'L’app è in inglese e tedesco.'
      ],
      nl: [
        'Craftionary kent Minecraft Java 26.3. Bedrock en oudere versies hebben soms andere recepten.',
        'De /give-commando’s werken alleen met cheats aan. Wat langer is dan 256 tekens past niet in de chat – gebruik dan een opdrachtblok.',
        'De kansen onder ‘Where to find’ zijn berekend zonder Fortuin, Plundering en Zijdezachte aanraking. Namen van bouwwerken hebben in het spel geen officiële vertaling.',
        'Craftionary levert geen Minecraft-afbeeldingen mee: zonder geladen texturen tonen de vakjes letters met een legenda. Heb je de texturen geladen vóór de patroonwerkplaats bestond, laad ze dan voor het voorbeeld nog één keer.',
        'De app is er in het Engels en Duits.'
      ],
      pl: [
        'Craftionary obejmuje Minecraft Java 26.3. Bedrock i starsze wersje mają czasem inne receptury.',
        'Komendy /give wymagają włączonych kodów. Co ma ponad 256 znaków, nie zmieści się na czacie – wtedy użyj bloku poleceń.',
        'Szanse w „Where to find” są liczone bez Szczęścia, Grabieży i Jedwabnego dotyku. Nazwy struktur nie mają w grze oficjalnego tłumaczenia.',
        'Craftionary nie zawiera grafik z Minecrafta: bez wczytanych tekstur pola pokazują litery z legendą. Jeśli wczytano tekstury przed powstaniem warsztatu wzorów, wczytaj je raz jeszcze dla jego podglądu.',
        'Aplikacja jest po angielsku i niemiecku.'
      ],
      pt: [
        'O Craftionary cobre o Minecraft Java 26.3. A Bedrock e as versões antigas têm por vezes receitas diferentes.',
        'Os comandos /give precisam de cheats ligados. O que passar de 256 caracteres não cabe no chat – nesse caso use um bloco de comando.',
        'As probabilidades em «Where to find» não contam Fortuna, Saque nem Toque Suave. Os nomes das estruturas não têm tradução oficial no jogo.',
        'O Craftionary não traz gráficos do Minecraft: sem texturas carregadas, os espaços mostram letras com legenda. Se carregou as texturas antes de existir a oficina de padrões, carregue-as mais uma vez para a pré-visualização.',
        'A app existe em inglês e alemão.'
      ],
      tr: [
        'Craftionary Minecraft Java 26.3’ü kapsar. Bedrock ve eski sürümlerde bazı tarifler farklıdır.',
        '/give komutları için hileler açık olmalıdır. 256 karakterden uzun olan sohbete sığmaz – o zaman bir komut bloğu kullanın.',
        '“Where to find” altındaki şanslar Servet, Yağma ve İpeksi Dokunuş olmadan hesaplanır. Yapı adlarının oyunda resmî çevirisi yoktur.',
        'Craftionary Minecraft grafikleri içermez: Dokular yüklenmeden kutularda açıklamalı harfler görünür. Dokuları desen atölyesinden önce yüklediyseniz önizleme için bir kez yeniden yükleyin.',
        'Uygulama İngilizce ve Almanca’dır.'
      ],
      ru: [
        'Craftionary охватывает Minecraft Java 26.3. В Bedrock и старых версиях некоторые рецепты отличаются.',
        'Для команд /give нужны включённые читы. То, что длиннее 256 символов, не помещается в чат – тогда используйте командный блок.',
        'Шансы во «Where to find» посчитаны без Удачи, Добычи и Шёлкового касания. У названий построек в игре нет официального перевода.',
        'Craftionary не содержит графики Minecraft: без загруженных текстур в ячейках видны буквы с легендой. Если текстуры загружены до появления мастерской узоров, загрузите их ещё раз для её превью.',
        'Приложение на английском и немецком.'
      ],
      hi: [
        'Craftionary Minecraft Java 26.3 पर आधारित है। Bedrock और पुराने वर्ज़न में कुछ रेसिपी अलग होती हैं।',
        '/give कमांड के लिए चीट्स चालू होने चाहिए। 256 अक्षरों से लंबा कमांड चैट में नहीं आता – तब कमांड ब्लॉक इस्तेमाल करें।',
        '“Where to find” के मौके Fortune, Looting और Silk Touch के बिना गिने गए हैं। संरचनाओं के नामों का गेम में कोई आधिकारिक अनुवाद नहीं है।',
        'Craftionary के साथ Minecraft के ग्राफ़िक्स नहीं आते: टेक्सचर लोड किए बिना खानों में लेजेंड के साथ अक्षर दिखते हैं। अगर आपने पैटर्न वर्कशॉप से पहले टेक्सचर लोड किए थे, तो उसके प्रीव्यू के लिए उन्हें एक बार फिर लोड करें।',
        'ऐप अंग्रेज़ी और जर्मन में है।'
      ],
      zh: [
        'Craftionary 对应 Minecraft Java 26.3。基岩版和旧版本的部分配方不同。',
        '/give 命令需要开启作弊。超过 256 个字符的命令放不进聊天栏——这时请用命令方块。',
        '“Where to find”里的概率未计入时运、抢夺和精准采集。结构名称在游戏中没有官方译名。',
        'Craftionary 不附带 Minecraft 图像：未加载材质时，格子里显示字母和图例。如果在图案工坊出现之前加载过材质，请再加载一次以显示它的预览。',
        '应用只有英语和德语。'
      ],
      ja: [
        'Craftionary は Minecraft Java 26.3 に対応しています。統合版や古いバージョンでは一部のレシピが違います。',
        '/give コマンドにはチートの有効化が必要です。256 文字を超えるとチャットに入らないので、その場合はコマンドブロックを使います。',
        '「Where to find」の確率は幸運、ドロップ増加、シルクタッチなしで計算しています。構造物の名前にはゲーム内の公式な訳がありません。',
        'Craftionary には Minecraft の画像は含まれていません。テクスチャを読み込まないと、マスには凡例つきの文字が表示されます。模様の工房ができる前にテクスチャを読み込んだ場合は、プレビューのために一度読み込み直してください。',
        'アプリは英語とドイツ語です。'
      ],
      ko: [
        'Craftionary는 Minecraft Java 26.3 기준입니다. 베드락과 이전 버전은 일부 조합법이 다릅니다.',
        '/give 명령어는 치트가 켜져 있어야 합니다. 256자를 넘으면 채팅에 들어가지 않으니 명령 블록을 쓰세요.',
        '‘Where to find’의 확률은 행운, 약탈, 섬세한 손길 없이 계산했습니다. 구조물 이름은 게임에 공식 번역이 없습니다.',
        'Craftionary에는 Minecraft 그래픽이 들어 있지 않습니다. 텍스처를 불러오지 않으면 칸에 범례와 함께 글자가 표시됩니다. 무늬 공방이 생기기 전에 텍스처를 불러왔다면 미리 보기를 위해 한 번 더 불러오세요.',
        '앱은 영어와 독일어로 되어 있습니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      en: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/craftionary/blob/main/README.md'
    }
  },
  vault: {
    purpose: {
      de: 'Das Handbuch für Borderlands 4 nach der Kampagne: Meta-Builds für alle sechs Vault Hunter, alle Legendaries und Pearls mit Fundort und Drop-Chance, Raid-Guides, Firmware, ein Farm-Planer und jede Woche das Neueste. Das Vault-Handbuch läuft im Browser auf dem Handy (Android und iOS) und am Desktop und lässt sich als App installieren.',
      en: 'The handbook for Borderlands 4 after the campaign: meta builds for all six Vault Hunters, every legendary and Pearl with location and drop chance, raid guides, firmware, a farm planner and the latest news every week. The Vault-Handbuch runs in the browser on your phone (Android and iOS) and on desktop, and installs as an app.',
      es: 'El manual de Borderlands 4 tras la campaña: builds meta para los seis Vault Hunters, todos los legendarios y Pearls con ubicación y probabilidad de botín, guías de raids, firmware, un planificador de farmeo y cada semana lo último. El Vault-Handbuch funciona en el navegador del móvil (Android e iOS) y del ordenador, y se instala como app.',
      fr: 'Le manuel de Borderlands 4 après la campagne : builds méta pour les six Vault Hunters, tous les légendaires et Pearls avec lieu et taux de drop, guides de raids, firmware, un planificateur de farm et chaque semaine les dernières infos. Le Vault-Handbuch fonctionne dans le navigateur du téléphone (Android et iOS) et de l’ordinateur, et s’installe comme application.',
      it: 'Il manuale di Borderlands 4 dopo la campagna: build meta per tutti e sei i Vault Hunter, tutti i leggendari e le Pearls con luogo e probabilità di drop, guide ai raid, firmware, un pianificatore di farm e ogni settimana le ultime novità. Il Vault-Handbuch funziona nel browser del telefono (Android e iOS) e del computer, e si installa come app.',
      nl: 'Het handboek voor Borderlands 4 na de campagne: metabuilds voor alle zes Vault Hunters, alle legendaries en Pearls met vindplaats en dropkans, raidguides, firmware, een farmplanner en elke week het nieuwste. Het Vault-Handbuch draait in de browser op je telefoon (Android en iOS) en op de computer, en installeert als app.',
      pl: 'Podręcznik do Borderlands 4 po kampanii: buildy meta dla wszystkich sześciu Vault Hunterów, wszystkie legendarne przedmioty i Pearls z miejscem i szansą dropu, poradniki do raidów, firmware, planer farmienia i co tydzień najnowsze informacje. Vault-Handbuch działa w przeglądarce na telefonie (Android i iOS) i na komputerze i instaluje się jako aplikacja.',
      pt: 'O manual de Borderlands 4 depois da campanha: builds meta para os seis Vault Hunters, todos os lendários e Pearls com local e chance de drop, guias de raids, firmware, um planejador de farm e todas as semanas as novidades. O Vault-Handbuch funciona no navegador do telemóvel (Android e iOS) e do computador, e instala-se como app.',
      tr: 'Kampanyadan sonrası için Borderlands 4 el kitabı: altı Vault Hunter’ın tümü için meta buildler, konum ve düşme şansıyla tüm efsaneviler ve Pearls, raid rehberleri, firmware, bir farm planlayıcı ve her hafta en yeni bilgiler. Vault-Handbuch telefonda (Android ve iOS) ve bilgisayarda tarayıcıda çalışır ve uygulama olarak kurulabilir.',
      ru: 'Справочник по Borderlands 4 после кампании: мета-билды для всех шести Vault Hunter, все легендарки и Pearls с местом и шансом дропа, гайды по рейдам, прошивки, планировщик фарма и каждую неделю свежие новости. Vault-Handbuch работает в браузере на телефоне (Android и iOS) и на компьютере и устанавливается как приложение.',
      hi: 'कैंपेन के बाद के लिए Borderlands 4 की हैंडबुक: सभी छह Vault Hunter के मेटा बिल्ड, जगह और ड्रॉप चांस के साथ सारे लेजेंडरी और Pearls, रेड गाइड, फ़र्मवेयर, फ़ार्म प्लानर और हर हफ़्ते ताज़ा जानकारी। Vault-Handbuch फ़ोन (Android और iOS) और डेस्कटॉप के ब्राउज़र में चलता है और ऐप की तरह इंस्टॉल होता है।',
      zh: '通关剧情后的 Borderlands 4 手册：全部六位秘藏猎人的 Meta 配装、所有传奇与 Pearls 的掉落地点和概率、团本攻略、固件、刷宝规划，每周还有最新资讯。Vault-Handbuch 可在手机（Android 和 iOS）和电脑的浏览器中运行，也能安装为应用。',
      ja: 'キャンペーン後の Borderlands 4 ハンドブック。6人すべての Vault Hunter のメタビルド、すべてのレジェンダリーと Pearls の入手場所とドロップ率、レイドガイド、ファームウェア、周回計画、そして毎週の最新情報。Vault-Handbuch はスマートフォン（Android と iOS）とパソコンのブラウザーで動き、アプリとしてインストールできます。',
      ko: '캠페인 이후를 위한 Borderlands 4 핸드북: 여섯 Vault Hunter 모두의 메타 빌드, 위치와 드롭 확률이 담긴 모든 전설과 Pearls, 레이드 가이드, 펌웨어, 파밍 플래너, 그리고 매주 새 소식. Vault-Handbuch는 휴대폰(Android와 iOS)과 데스크톱 브라우저에서 돌아가고 앱으로 설치할 수 있습니다.'
    },
    shots: [
      {
        file: 'vault-de.webp',
        w: 1446,
        h: 848,
        alt: {
          de: 'Drei Handy-Ansichten des BL4 Vault-Handbuchs: der Fahrplan mit dem erledigten Schritt „UVH 5 freischalten“ und den Wildcard-Missionen dafür; ein Build für C4SH mit Spielstil und Action Skill; die eigene Sammlung als Kacheln nach Waffen, Schilden, Klassenmods und weiteren Gruppen.',
          en: 'Three phone screens of the BL4 Vault-Handbuch: the roadmap with the finished step “unlock UVH 5” and the Wildcard Missions it takes; a build for C4SH with play style and action skill; your own collection as tiles by weapons, shields, class mods and other groups.',
          es: 'Tres pantallas de móvil del BL4 Vault-Handbuch: la hoja de ruta con el paso completado «desbloquear UVH 5» y las Wildcard Missions necesarias; un build para C4SH con estilo de juego y habilidad de acción; tu colección en mosaicos por armas, escudos, mods de clase y otros grupos.',
          fr: 'Trois écrans de téléphone du BL4 Vault-Handbuch : la feuille de route avec l’étape terminée « débloquer UVH 5 » et les Wildcard Missions nécessaires ; un build pour C4SH avec style de jeu et compétence d’action ; votre collection en tuiles par armes, boucliers, mods de classe et autres groupes.',
          it: 'Tre schermate di telefono del BL4 Vault-Handbuch: la tabella di marcia con il passo completato «sbloccare UVH 5» e le Wildcard Mission necessarie; una build per C4SH con stile di gioco e abilità d’azione; la tua collezione in riquadri per armi, scudi, mod di classe e altri gruppi.',
          nl: 'Drie telefoonschermen van het BL4 Vault-Handbuch: het routeplan met de voltooide stap ‘UVH 5 vrijspelen’ en de Wildcard Missions die daarvoor nodig zijn; een build voor C4SH met speelstijl en action skill; je eigen collectie als tegels per wapens, schilden, class mods en andere groepen.',
          pl: 'Trzy ekrany telefonu z BL4 Vault-Handbuch: plan z ukończonym krokiem „odblokuj UVH 5” i potrzebnymi Wildcard Missions; build dla C4SH ze stylem gry i umiejętnością akcji; własna kolekcja w kafelkach według broni, tarcz, modów klas i innych grup.',
          pt: 'Três ecrãs de telemóvel do BL4 Vault-Handbuch: o plano com o passo concluído «desbloquear UVH 5» e as Wildcard Missions necessárias; um build para C4SH com estilo de jogo e habilidade de ação; a sua coleção em mosaicos por armas, escudos, mods de classe e outros grupos.',
          tr: 'BL4 Vault-Handbuch’tan üç telefon ekranı: tamamlanmış “UVH 5’i aç” adımı ve bunun için gereken Wildcard Mission’larla yol planı; oynanış tarzı ve aksiyon yeteneğiyle C4SH için bir build; silahlar, kalkanlar, sınıf modları ve diğer gruplara göre kutucuklar hâlinde kendi koleksiyonunuz.',
          ru: 'Три экрана телефона с BL4 Vault-Handbuch: маршрут с выполненным шагом «открыть UVH 5» и нужными для этого Wildcard Missions; билд для C4SH со стилем игры и активным навыком; ваша коллекция в плитках по оружию, щитам, классовым модам и другим группам.',
          hi: 'BL4 Vault-Handbuch की तीन फ़ोन स्क्रीन: पूरा हो चुके चरण “UVH 5 अनलॉक करें” और उसके लिए ज़रूरी Wildcard Missions वाला रोडमैप; खेलने के अंदाज़ और एक्शन स्किल के साथ C4SH का एक बिल्ड; हथियार, ढाल, क्लास मॉड और दूसरे समूहों की टाइलों में आपका अपना कलेक्शन।',
          zh: 'BL4 Vault-Handbuch 的三个手机画面：路线图，显示已完成的“解锁 UVH 5”及所需的 Wildcard Mission；C4SH 的一套配装，含玩法风格和主动技能；按武器、护盾、职业模组等分组的个人收藏方块。',
          ja: 'BL4 Vault-Handbuch のスマートフォン画面3枚：完了した「UVH 5 の解放」とそのための Wildcard Mission を示したロードマップ、プレイスタイルとアクションスキルつきの C4SH のビルド、武器・シールド・クラスMODなどのグループ別タイルで表示した自分のコレクション。',
          ko: 'BL4 Vault-Handbuch 휴대폰 화면 세 개: 완료된 ‘UVH 5 해금’ 단계와 필요한 Wildcard Mission이 있는 로드맵, 플레이 스타일과 액션 스킬이 담긴 C4SH 빌드, 무기·실드·클래스 모드 등 그룹별 타일로 보이는 내 수집 현황.'
        }
      }
    ],
    steps: {
      de: [
        'Oben deinen UVH-Rang einstellen. Dann rechnet das Handbuch die Drop-Chancen passend aus, und „Dein Fahrplan“ hebt hervor, was als Nächstes dran ist.',
        'Über „Menü“ zu Klassen & Builds, Waffen, Firmware, Loot-Datenbank oder Farming springen – oder oben nach Item, Boss oder Skill suchen. In der Loot-Datenbank hakst du mit „Hab ich“ ab, was du schon hast.',
        '„Diese Woche“ zeigt Big-Encore-Boss, Wildcard Mission, Maurice’s Black Market und aktive SHiFT-Codes zum Kopieren; das Update läuft donnerstagabends. Unten im Menü steht der Knopf „App installieren“, auf dem iPhone der Weg über Teilen und „Zum Home-Bildschirm“. Nach dem ersten Besuch geht das Handbuch auch offline.'
      ],
      en: [
        'Set your UVH rank at the top. The handbook then works out the drop chances for it, and “Dein Fahrplan” (your roadmap) highlights what comes next.',
        'Use “Menü” (menu) to jump to classes and builds, weapons, firmware, the loot database or farming – or search for an item, boss or skill at the top. In the loot database, “Hab ich” (got it) ticks off what you already own.',
        '“Diese Woche” (this week) shows the Big Encore boss, the Wildcard Mission, Maurice’s Black Market and active SHiFT codes to copy; it updates on Thursday evenings. At the bottom of the menu sits the “App installieren” (install app) button, on an iPhone the way via Share and “Add to Home Screen”. After the first visit the handbook also works offline.'
      ],
      es: [
        'Elige arriba tu rango UVH. El manual calcula entonces las probabilidades de botín para él, y «Dein Fahrplan» (tu hoja de ruta) resalta lo siguiente que toca.',
        'Con «Menü» (menú) salta a clases y builds, armas, firmware, la base de datos de botín o el farmeo, o busca arriba un objeto, jefe o habilidad. En la base de datos de botín, «Hab ich» (lo tengo) marca lo que ya tienes.',
        '«Diese Woche» (esta semana) muestra el jefe de Big Encore, la Wildcard Mission, Maurice’s Black Market y los códigos SHiFT activos para copiar; se actualiza los jueves por la noche. Abajo en el menú está el botón «App installieren» (instalar app); en el iPhone, el camino por Compartir y «Añadir a pantalla de inicio». Tras la primera visita, el manual funciona también sin conexión.'
      ],
      fr: [
        'Réglez en haut votre rang UVH. Le manuel calcule alors les taux de drop correspondants, et « Dein Fahrplan » (votre feuille de route) met en avant l’étape suivante.',
        'Avec « Menü » (menu), allez aux classes et builds, aux armes, au firmware, à la base de butin ou au farm – ou cherchez en haut un objet, un boss ou une compétence. Dans la base de butin, « Hab ich » (je l’ai) coche ce que vous possédez déjà.',
        '« Diese Woche » (cette semaine) montre le boss du Big Encore, la Wildcard Mission, Maurice’s Black Market et les codes SHiFT actifs à copier ; la mise à jour se fait le jeudi soir. En bas du menu se trouve le bouton « App installieren » (installer l’application), sur iPhone le chemin par Partager et « Sur l’écran d’accueil ». Après la première visite, le manuel fonctionne aussi hors ligne.'
      ],
      it: [
        'Imposta in alto il tuo rango UVH. Il manuale calcola allora le probabilità di drop adatte, e «Dein Fahrplan» (la tua tabella di marcia) evidenzia il prossimo passo.',
        'Con «Menü» (menu) passa a classi e build, armi, firmware, database del loot o farm, oppure cerca in alto un oggetto, un boss o un’abilità. Nel database del loot, «Hab ich» (ce l’ho) spunta ciò che possiedi già.',
        '«Diese Woche» (questa settimana) mostra il boss del Big Encore, la Wildcard Mission, Maurice’s Black Market e i codici SHiFT attivi da copiare; si aggiorna il giovedì sera. In fondo al menu c’è il pulsante «App installieren» (installa app), su iPhone la via con Condividi e «Aggiungi alla schermata Home». Dopo la prima visita il manuale funziona anche offline.'
      ],
      nl: [
        'Stel bovenaan je UVH-rang in. Het handboek rekent dan de dropkansen daarvoor uit, en ‘Dein Fahrplan’ (je routeplan) laat zien wat er nu aan de beurt is.',
        'Ga via ‘Menü’ (menu) naar klassen en builds, wapens, firmware, de lootdatabase of farmen – of zoek bovenaan een item, baas of skill. In de lootdatabase vink je met ‘Hab ich’ (heb ik) af wat je al hebt.',
        '‘Diese Woche’ (deze week) toont de Big Encore-baas, de Wildcard Mission, Maurice’s Black Market en actieve SHiFT-codes om te kopiëren; de update komt op donderdagavond. Onderaan in het menu staat de knop ‘App installieren’ (app installeren), op een iPhone de weg via Deel en ‘Zet op beginscherm’. Na het eerste bezoek werkt het handboek ook offline.'
      ],
      pl: [
        'Ustaw u góry swoją rangę UVH. Podręcznik przelicza wtedy szanse dropu, a „Dein Fahrplan” (twój plan) wyróżnia, co teraz jest do zrobienia.',
        'Przez „Menü” (menu) przejdź do klas i buildów, broni, firmware’u, bazy lootu albo farmienia – albo szukaj u góry przedmiotu, bossa lub umiejętności. W bazie lootu „Hab ich” (mam) odhacza to, co już masz.',
        '„Diese Woche” (w tym tygodniu) pokazuje bossa Big Encore, Wildcard Mission, Maurice’s Black Market i aktywne kody SHiFT do skopiowania; aktualizacja przychodzi w czwartki wieczorem. Na dole menu jest przycisk „App installieren” (zainstaluj aplikację), na iPhonie droga przez Udostępnij i „Do ekranu początkowego”. Po pierwszej wizycie podręcznik działa też offline.'
      ],
      pt: [
        'Defina no topo o seu rank UVH. O manual calcula então as chances de drop para ele, e «Dein Fahrplan» (o seu plano) destaca o próximo passo.',
        'Com «Menü» (menu) salte para classes e builds, armas, firmware, a base de dados de loot ou o farm – ou pesquise no topo um item, chefe ou habilidade. Na base de dados de loot, «Hab ich» (já tenho) marca o que já tem.',
        '«Diese Woche» (esta semana) mostra o chefe do Big Encore, a Wildcard Mission, Maurice’s Black Market e os códigos SHiFT ativos para copiar; a atualização chega às quintas à noite. No fundo do menu está o botão «App installieren» (instalar app), no iPhone o caminho por Partilhar e «Adicionar ao ecrã principal». Depois da primeira visita, o manual também funciona offline.'
      ],
      tr: [
        'Üstte UVH rütbenizi seçin. El kitabı düşme şanslarını buna göre hesaplar ve “Dein Fahrplan” (yol planınız) sıradakini öne çıkarır.',
        '“Menü” ile sınıflar ve buildler, silahlar, firmware, ganimet veritabanı ya da farm bölümüne gidin – veya üstte eşya, boss ya da yetenek arayın. Ganimet veritabanında “Hab ich” (bende var) zaten sahip olduklarınızı işaretler.',
        '“Diese Woche” (bu hafta) Big Encore boss’unu, Wildcard Mission’ı, Maurice’s Black Market’i ve kopyalanacak etkin SHiFT kodlarını gösterir; güncelleme perşembe akşamları gelir. Menünün altında “App installieren” (uygulamayı yükle) düğmesi, iPhone’da ise Paylaş ve “Ana Ekrana Ekle” yolu durur. İlk ziyaretten sonra el kitabı çevrimdışı da çalışır.'
      ],
      ru: [
        'Выберите вверху свой ранг UVH. Справочник пересчитает под него шансы дропа, а «Dein Fahrplan» (ваш маршрут) выделит следующий шаг.',
        'Через «Menü» (меню) переходите к классам и билдам, оружию, прошивкам, базе лута или фарму – или ищите вверху предмет, босса или навык. В базе лута «Hab ich» (есть) отмечает то, что у вас уже есть.',
        '«Diese Woche» (на этой неделе) показывает босса Big Encore, Wildcard Mission, Maurice’s Black Market и действующие SHiFT-коды для копирования; обновление выходит по четвергам вечером. Внизу меню есть кнопка «App installieren» (установить приложение), на iPhone – путь через «Поделиться» и «На экран „Домой“». После первого посещения справочник работает и офлайн.'
      ],
      hi: [
        'ऊपर अपनी UVH रैंक चुनें। हैंडबुक उसके हिसाब से ड्रॉप चांस निकालती है, और “Dein Fahrplan” (आपका रोडमैप) अगला कदम उभारकर दिखाता है।',
        '“Menü” (मेन्यू) से क्लास और बिल्ड, हथियार, फ़र्मवेयर, लूट डेटाबेस या फ़ार्मिंग पर जाएँ – या ऊपर कोई आइटम, बॉस या स्किल खोजें। लूट डेटाबेस में “Hab ich” (मेरे पास है) से जो आपके पास है, उस पर निशान लगाएँ।',
        '“Diese Woche” (इस हफ़्ते) Big Encore बॉस, Wildcard Mission, Maurice’s Black Market और कॉपी करने लायक सक्रिय SHiFT कोड दिखाता है; अपडेट गुरुवार शाम आता है। मेन्यू में नीचे “App installieren” (ऐप इंस्टॉल करें) बटन है, iPhone पर शेयर और “होम स्क्रीन में जोड़ें” का रास्ता। पहली विज़िट के बाद हैंडबुक ऑफ़लाइन भी चलती है।'
      ],
      zh: [
        '在顶部设定你的 UVH 等级。手册会据此算出掉落概率，“Dein Fahrplan”（你的路线图）会突出显示下一步。',
        '通过“Menü”（菜单）跳到职业与配装、武器、固件、战利品数据库或刷宝，或在顶部搜索物品、首领或技能。在战利品数据库里，用“Hab ich”（已拥有）勾掉已有的东西。',
        '“Diese Woche”（本周）显示 Big Encore 首领、Wildcard Mission、Maurice’s Black Market 和可复制的有效 SHiFT 兑换码；每周四晚上更新。菜单底部有“App installieren”（安装应用）按钮，iPhone 上则是“分享”→“添加到主屏幕”。首次访问后，手册也能离线使用。'
      ],
      ja: [
        '上部で自分の UVH ランクを設定します。するとそのランクに合わせてドロップ率が計算され、「Dein Fahrplan」（あなたのロードマップ）が次にやることを強調します。',
        '「Menü」（メニュー）からクラスとビルド、武器、ファームウェア、ルートデータベース、周回へ移動するか、上部でアイテム・ボス・スキルを検索します。ルートデータベースでは「Hab ich」（持っている）で入手済みにチェックを付けられます。',
        '「Diese Woche」（今週）は Big Encore のボス、Wildcard Mission、Maurice’s Black Market、コピーできる有効な SHiFT コードを表示し、毎週木曜の夜に更新されます。メニューの下に「App installieren」（アプリをインストール）ボタンがあり、iPhone では共有から「ホーム画面に追加」を使います。初回アクセス後はオフラインでも使えます。'
      ],
      ko: [
        '위에서 자신의 UVH 등급을 고르세요. 그러면 그에 맞춰 드롭 확률이 계산되고, ‘Dein Fahrplan’(로드맵)이 다음에 할 일을 강조합니다.',
        '‘Menü’(메뉴)로 클래스와 빌드, 무기, 펌웨어, 전리품 데이터베이스, 파밍으로 이동하거나 위에서 아이템, 보스, 스킬을 검색하세요. 전리품 데이터베이스에서는 ‘Hab ich’(가지고 있음)로 이미 가진 것을 표시합니다.',
        '‘Diese Woche’(이번 주)는 Big Encore 보스, Wildcard Mission, Maurice’s Black Market, 복사할 수 있는 유효한 SHiFT 코드를 보여 주며 매주 목요일 저녁에 업데이트됩니다. 메뉴 아래에 ‘App installieren’(앱 설치) 버튼이 있고, iPhone에서는 공유 → ‘홈 화면에 추가’를 씁니다. 첫 방문 후에는 오프라인에서도 작동합니다.'
      ]
    },
    pitfalls: {
      de: [
        'Die App ist auf Deutsch. Item-Namen bleiben wie im deutschen Spiel meist englisch; die Suche findet auch die wenigen übersetzten.',
        'Builds und Ranglisten sind Einschätzungen aus der Community mit Quellenangabe, nicht offiziell – ein Patch kann sie verschieben.',
        'Bis zum Update am Donnerstagabend zeigt „Diese Woche“ manchmal noch die Vorwoche; das steht dann ausdrücklich dabei.',
        'Dein UVH-Rang und was du abgehakt hast, liegen nur in diesem Browser.'
      ],
      en: [
        'The app is in German. Item names mostly stay English, as in the German game, and the search also finds the few translated ones.',
        'Builds and rankings are community assessments with their sources named, not official – a patch can shift them.',
        'Until the Thursday evening update, “Diese Woche” sometimes still shows last week; it then says so.',
        'Your UVH rank and what you ticked off live only in this browser.'
      ],
      es: [
        'La app está en alemán. Los nombres de objetos siguen casi siempre en inglés, como en el juego en alemán, y la búsqueda encuentra también los pocos traducidos.',
        'Los builds y rankings son valoraciones de la comunidad con sus fuentes, no oficiales: un parche puede cambiarlos.',
        'Hasta la actualización del jueves por la noche, «Diese Woche» a veces aún muestra la semana anterior; entonces lo indica.',
        'Tu rango UVH y lo que has marcado solo se guardan en este navegador.'
      ],
      fr: [
        'L’application est en allemand. Les noms d’objets restent le plus souvent en anglais, comme dans le jeu allemand, et la recherche trouve aussi les rares traduits.',
        'Les builds et classements sont des avis de la communauté avec leurs sources, pas officiels – un patch peut les faire bouger.',
        'Jusqu’à la mise à jour du jeudi soir, « Diese Woche » affiche parfois encore la semaine précédente ; c’est alors indiqué.',
        'Votre rang UVH et ce que vous avez coché restent uniquement dans ce navigateur.'
      ],
      it: [
        'L’app è in tedesco. I nomi degli oggetti restano quasi sempre in inglese, come nel gioco tedesco, e la ricerca trova anche i pochi tradotti.',
        'Build e classifiche sono valutazioni della community con le fonti indicate, non ufficiali: una patch può spostarle.',
        'Fino all’aggiornamento del giovedì sera, «Diese Woche» a volte mostra ancora la settimana precedente; in quel caso lo dice.',
        'Il tuo rango UVH e ciò che hai spuntato restano solo in questo browser.'
      ],
      nl: [
        'De app is in het Duits. Itemnamen blijven meestal Engels, net als in het Duitse spel, en de zoekfunctie vindt ook de paar vertaalde.',
        'Builds en ranglijsten zijn inschattingen uit de community met bronvermelding, niet officieel – een patch kan ze verschuiven.',
        'Tot de update op donderdagavond toont ‘Diese Woche’ soms nog de vorige week; dat staat er dan bij.',
        'Je UVH-rang en wat je hebt afgevinkt staan alleen in deze browser.'
      ],
      pl: [
        'Aplikacja jest po niemiecku. Nazwy przedmiotów zostają zwykle po angielsku, jak w niemieckiej wersji gry, a wyszukiwarka znajduje też te nieliczne przetłumaczone.',
        'Buildy i rankingi to oceny społeczności z podanymi źródłami, nie oficjalne – patch może je zmienić.',
        'Do czwartkowej aktualizacji wieczorem „Diese Woche” czasem pokazuje jeszcze poprzedni tydzień; wtedy jest to zaznaczone.',
        'Twoja ranga UVH i to, co odhaczono, są zapisane tylko w tej przeglądarce.'
      ],
      pt: [
        'A app está em alemão. Os nomes dos itens ficam quase sempre em inglês, como no jogo em alemão, e a pesquisa também encontra os poucos traduzidos.',
        'Builds e rankings são avaliações da comunidade com fontes indicadas, não oficiais – um patch pode mudá-los.',
        'Até à atualização de quinta à noite, «Diese Woche» às vezes ainda mostra a semana anterior; nesse caso isso é indicado.',
        'O seu rank UVH e o que marcou ficam só neste navegador.'
      ],
      tr: [
        'Uygulama Almancadır. Eşya adları, Almanca oyunda olduğu gibi çoğunlukla İngilizce kalır; arama az sayıdaki çevrilmiş adları da bulur.',
        'Buildler ve sıralamalar kaynakları belirtilmiş topluluk değerlendirmeleridir, resmî değildir – bir yama onları değiştirebilir.',
        'Perşembe akşamı güncellemesine kadar “Diese Woche” bazen hâlâ önceki haftayı gösterir; o zaman bu açıkça yazar.',
        'UVH rütbeniz ve işaretledikleriniz yalnızca bu tarayıcıda durur.'
      ],
      ru: [
        'Приложение на немецком. Названия предметов, как и в немецкой версии игры, в основном остаются английскими; поиск находит и немногие переведённые.',
        'Билды и рейтинги – оценки сообщества с указанием источников, не официальные: патч может их сдвинуть.',
        'До обновления в четверг вечером «Diese Woche» иногда ещё показывает прошлую неделю; тогда это прямо указано.',
        'Ваш ранг UVH и отмеченные предметы хранятся только в этом браузере.'
      ],
      hi: [
        'ऐप जर्मन में है। आइटम के नाम, जर्मन गेम की तरह, ज़्यादातर अंग्रेज़ी में ही रहते हैं; खोज कुछ अनूदित नाम भी ढूँढ लेती है।',
        'बिल्ड और रैंकिंग स्रोतों के साथ कम्युनिटी के आकलन हैं, आधिकारिक नहीं – कोई पैच इन्हें बदल सकता है।',
        'गुरुवार शाम के अपडेट तक “Diese Woche” कभी-कभी पिछला हफ़्ता दिखाता है; तब यह साफ़ लिखा रहता है।',
        'आपकी UVH रैंक और जिन पर निशान लगाया, वे सिर्फ़ इसी ब्राउज़र में रहते हैं।'
      ],
      zh: [
        '应用只有德语。物品名称和德语版游戏一样大多保留英文；搜索也能找到少数已翻译的名称。',
        '配装和排名是标明来源的社区评估，并非官方——补丁可能改变它们。',
        '在周四晚上更新之前，“Diese Woche”有时仍显示上一周；这时会明确注明。',
        '你的 UVH 等级和勾选记录只保存在这个浏览器里。'
      ],
      ja: [
        'アプリはドイツ語です。アイテム名はドイツ語版のゲームと同じくほとんど英語のままですが、検索は数少ない翻訳名も見つけます。',
        'ビルドとランキングは出典を示したコミュニティの評価で、公式ではありません。パッチで変わることがあります。',
        '木曜夜の更新までは「Diese Woche」がまだ先週の内容のことがあり、その場合ははっきり表示されます。',
        'UVH ランクとチェックした内容は、このブラウザーの中にだけ保存されます。'
      ],
      ko: [
        '앱은 독일어입니다. 아이템 이름은 독일어판 게임처럼 대부분 영어로 남아 있고, 검색은 몇 안 되는 번역된 이름도 찾습니다.',
        '빌드와 순위는 출처를 밝힌 커뮤니티 평가일 뿐 공식이 아닙니다. 패치로 바뀔 수 있습니다.',
        '목요일 저녁 업데이트 전까지 ‘Diese Woche’는 가끔 지난주 내용을 보여 주며, 그때는 분명히 표시됩니다.',
        'UVH 등급과 표시한 항목은 이 브라우저에만 저장됩니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      en: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      es: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      fr: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      it: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      nl: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      pl: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      pt: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      tr: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      ru: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      hi: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      zh: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      ja: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4',
      ko: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/bl4'
    }
  },
  ruestkammer: {
    purpose: {
      de: 'Das Nachschlagewerk zu Call of Duty: Modern Warfare 4: alle Waffen mit Werten, Meta-Builds, Apex-Aufsatz und Time to Kill, dazu Tierlisten, empfohlene Klassen und die Patch-Chronik. Die Rüstkammer läuft im Browser auf dem Handy (Android und iOS) und am Desktop und lässt sich als App installieren.',
      en: 'The reference for Call of Duty: Modern Warfare 4: every weapon with stats, meta builds, Apex attachment and time to kill, plus tier lists, recommended classes and the patch history. The Rüstkammer runs in the browser on your phone (Android and iOS) and on desktop, and installs as an app.',
      es: 'La referencia de Call of Duty: Modern Warfare 4: todas las armas con estadísticas, builds meta, accesorio Apex y time to kill, además de listas de niveles, clases recomendadas y el historial de parches. La Rüstkammer funciona en el navegador del móvil (Android e iOS) y del ordenador, y se instala como app.',
      fr: 'La référence de Call of Duty: Modern Warfare 4 : toutes les armes avec statistiques, builds méta, accessoire Apex et time to kill, plus tier lists, classes recommandées et historique des patchs. La Rüstkammer fonctionne dans le navigateur du téléphone (Android et iOS) et de l’ordinateur, et s’installe comme application.',
      it: 'Il riferimento per Call of Duty: Modern Warfare 4: tutte le armi con statistiche, build meta, accessorio Apex e time to kill, più tier list, classi consigliate e cronologia delle patch. La Rüstkammer funziona nel browser del telefono (Android e iOS) e del computer, e si installa come app.',
      nl: 'Het naslagwerk voor Call of Duty: Modern Warfare 4: alle wapens met statistieken, metabuilds, Apex-attachment en time to kill, plus tierlijsten, aanbevolen klassen en de patchgeschiedenis. De Rüstkammer draait in de browser op je telefoon (Android en iOS) en op de computer, en installeert als app.',
      pl: 'Kompendium do Call of Duty: Modern Warfare 4: wszystkie bronie ze statystykami, buildami meta, dodatkiem Apex i time to kill, do tego tier listy, polecane klasy i historia patchy. Rüstkammer działa w przeglądarce na telefonie (Android i iOS) i na komputerze i instaluje się jako aplikacja.',
      pt: 'A referência de Call of Duty: Modern Warfare 4: todas as armas com estatísticas, builds meta, acessório Apex e time to kill, mais tier lists, classes recomendadas e o histórico de patches. A Rüstkammer funciona no navegador do telemóvel (Android e iOS) e do computador, e instala-se como app.',
      tr: 'Call of Duty: Modern Warfare 4 başvuru kaynağı: istatistikleri, meta buildleri, Apex eklentisi ve time to kill değeriyle tüm silahlar; ayrıca tier listeleri, önerilen sınıflar ve yama geçmişi. Rüstkammer telefonda (Android ve iOS) ve bilgisayarda tarayıcıda çalışır ve uygulama olarak kurulabilir.',
      ru: 'Справочник по Call of Duty: Modern Warfare 4: всё оружие с характеристиками, мета-сборками, модулем Apex и time to kill, а также тир-листы, рекомендуемые классы и история патчей. Rüstkammer работает в браузере на телефоне (Android и iOS) и на компьютере и устанавливается как приложение.',
      hi: 'Call of Duty: Modern Warfare 4 की संदर्भ पुस्तिका: हर हथियार उसके आँकड़ों, मेटा बिल्ड, Apex अटैचमेंट और time to kill के साथ, साथ में टियर लिस्ट, सुझाई गई क्लास और पैच इतिहास। Rüstkammer फ़ोन (Android और iOS) और डेस्कटॉप के ब्राउज़र में चलता है और ऐप की तरह इंस्टॉल होता है।',
      zh: 'Call of Duty: Modern Warfare 4 资料库：所有武器的数值、Meta 配装、Apex 配件和击杀时间，另有梯队榜、推荐配装和补丁记录。Rüstkammer 可在手机（Android 和 iOS）和电脑的浏览器中运行，也能安装为应用。',
      ja: 'Call of Duty: Modern Warfare 4 のリファレンス。全武器のステータス、メタビルド、Apex アタッチメント、キルタイムに加え、ティアリスト、おすすめクラス、パッチ履歴。Rüstkammer はスマートフォン（Android と iOS）とパソコンのブラウザーで動き、アプリとしてインストールできます。',
      ko: 'Call of Duty: Modern Warfare 4 참고서: 모든 무기의 능력치, 메타 빌드, Apex 부착물, 킬 타임과 함께 티어 리스트, 추천 클래스, 패치 기록. Rüstkammer는 휴대폰(Android와 iOS)과 데스크톱 브라우저에서 돌아가고 앱으로 설치할 수 있습니다.'
    },
    shots: [
      {
        file: 'ruestkammer-de.webp',
        w: 1446,
        h: 848,
        alt: {
          de: 'Drei Handy-Ansichten der MW4 Rüstkammer: das Arsenal mit Suche, Filtern nach Waffenart und den Sturmgewehren samt Kadenz, Time to Kill und Tier; die Han 86 mit Tier, Nutzung und Werten wie Kadenz, Magazin und Freischaltung; die TTK-Analyse mit Messung, Distanz und Klasse und der schnellsten Waffe zuerst.',
          en: 'Three phone screens of the MW4 Rüstkammer: the Arsenal with search, filters by weapon type and the assault rifles with fire rate, time to kill and tier; the Han 86 with tier, usage and stats such as fire rate, magazine and unlock; the TTK analysis with measurement, range and class and the fastest weapon first.',
          es: 'Tres pantallas de móvil de la MW4 Rüstkammer: el Arsenal con búsqueda, filtros por tipo de arma y los fusiles de asalto con cadencia, time to kill y nivel; la Han 86 con nivel, uso y estadísticas como cadencia, cargador y desbloqueo; el análisis de TTK con medición, distancia y clase, y el arma más rápida primero.',
          fr: 'Trois écrans de téléphone de la MW4 Rüstkammer : l’Arsenal avec recherche, filtres par type d’arme et les fusils d’assaut avec cadence, time to kill et tier ; la Han 86 avec tier, taux d’utilisation et statistiques comme la cadence, le chargeur et le déblocage ; l’analyse du TTK avec mesure, distance et classe, l’arme la plus rapide en tête.',
          it: 'Tre schermate di telefono della MW4 Rüstkammer: l’Arsenal con ricerca, filtri per tipo di arma e i fucili d’assalto con cadenza, time to kill e tier; la Han 86 con tier, utilizzo e statistiche come cadenza, caricatore e sblocco; l’analisi del TTK con misurazione, distanza e classe e l’arma più veloce in cima.',
          nl: 'Drie telefoonschermen van de MW4 Rüstkammer: het Arsenal met zoeken, filters op wapentype en de aanvalsgeweren met vuursnelheid, time to kill en tier; de Han 86 met tier, gebruik en statistieken zoals vuursnelheid, magazijn en ontgrendeling; de TTK-analyse met meting, afstand en klasse en het snelste wapen bovenaan.',
          pl: 'Trzy ekrany telefonu z MW4 Rüstkammer: Arsenal z wyszukiwaniem, filtrami według rodzaju broni i karabinami szturmowymi z szybkostrzelnością, time to kill i tierem; Han 86 z tierem, popularnością i statystykami jak szybkostrzelność, magazynek i odblokowanie; analiza TTK z pomiarem, dystansem i klasą, najszybsza broń na górze.',
          pt: 'Três ecrãs de telemóvel da MW4 Rüstkammer: o Arsenal com pesquisa, filtros por tipo de arma e as espingardas de assalto com cadência, time to kill e tier; a Han 86 com tier, utilização e estatísticas como cadência, carregador e desbloqueio; a análise de TTK com medição, distância e classe, e a arma mais rápida primeiro.',
          tr: 'MW4 Rüstkammer’dan üç telefon ekranı: arama, silah türü filtreleri ve atış hızı, time to kill ve tier ile saldırı tüfekleriyle Arsenal; tier, kullanım oranı ve atış hızı, şarjör, kilit açma gibi değerlerle Han 86; ölçüm, mesafe ve sınıfla, en hızlı silah önde olacak şekilde TTK analizi.',
          ru: 'Три экрана телефона с MW4 Rüstkammer: Arsenal с поиском, фильтрами по типу оружия и штурмовыми винтовками со скорострельностью, time to kill и тиром; Han 86 с тиром, популярностью и характеристиками вроде скорострельности, магазина и разблокировки; анализ TTK по замеру, дистанции и классу, самое быстрое оружие сверху.',
          hi: 'MW4 Rüstkammer की तीन फ़ोन स्क्रीन: खोज, हथियार के प्रकार के फ़िल्टर और फ़ायर रेट, time to kill व टियर के साथ असॉल्ट राइफ़लों वाला Arsenal; टियर, इस्तेमाल और फ़ायर रेट, मैगज़ीन व अनलॉक जैसे आँकड़ों के साथ Han 86; माप, दूरी और क्लास के साथ TTK विश्लेषण, सबसे तेज़ हथियार सबसे ऊपर।',
          zh: 'MW4 Rüstkammer 的三个手机画面：Arsenal，带搜索、武器类型筛选，以及列出射速、击杀时间和梯队的突击步枪；Han 86，显示梯队、使用率以及射速、弹匣、解锁等数值；TTK 分析，可按测量方式、距离和类别查看，最快的武器排在最前。',
          ja: 'MW4 Rüstkammer のスマートフォン画面3枚：検索と武器種フィルター、連射速度・キルタイム・ティアつきのアサルトライフルが並ぶ Arsenal、ティア・使用率と連射速度・マガジン・解除条件などのステータスを示した Han 86、測定方法・距離・クラスで並べ替え、最速の武器が先頭に来る TTK 分析。',
          ko: 'MW4 Rüstkammer 휴대폰 화면 세 개: 검색, 무기 종류 필터, 연사 속도·킬 타임·티어가 표시된 돌격소총이 있는 Arsenal, 티어·사용률과 연사 속도·탄창·해금 같은 능력치가 있는 Han 86, 측정 방식·거리·클래스별로 가장 빠른 무기부터 보여 주는 TTK 분석.'
        }
      }
    ],
    steps: {
      de: [
        'Unten zwischen Arsenal, Meta, TTK, Klassen und Intel wechseln. Im Arsenal nach Waffe, Apex oder Klasse suchen oder nach Waffenart filtern.',
        'Eine Waffe antippen: Werte, Time to Kill, Meta-Builds und Apex-Aufsatz; unter „Mein Waffenlevel“ trägst du deinen Stand ein. Unter TTK vergleichst du nach Messung, Distanz und Klasse.',
        'Unter Intel stehen Datenstand und Patches, „Nach Updates suchen“ und – wo der Browser es anbietet – der Knopf „App installieren“; auf dem iPhone geht das in Safari über Teilen und „Zum Home-Bildschirm“. Nach dem ersten Besuch läuft die Rüstkammer auch offline.'
      ],
      en: [
        'Switch between Arsenal, Meta, TTK, Klassen (classes) and Intel at the bottom. In the Arsenal, search for a weapon, Apex or class, or filter by weapon type.',
        'Tap a weapon: stats, time to kill, meta builds and the Apex attachment; under “Mein Waffenlevel” (my weapon level) you enter your progress. Under TTK you compare by measurement, range and class.',
        'Intel holds the data date and patches, “Nach Updates suchen” (check for updates) and, where your browser offers it, the “App installieren” (install app) button; on an iPhone, use Share and “Add to Home Screen” in Safari. After the first visit the Rüstkammer also works offline.'
      ],
      es: [
        'Cambia abajo entre Arsenal, Meta, TTK, Klassen (clases) e Intel. En el Arsenal, busca un arma, un Apex o una clase, o filtra por tipo de arma.',
        'Toca un arma: estadísticas, time to kill, builds meta y accesorio Apex; en «Mein Waffenlevel» (mi nivel de arma) anotas tu progreso. En TTK comparas por medición, distancia y clase.',
        'En Intel están la fecha de los datos y los parches, «Nach Updates suchen» (buscar actualizaciones) y, donde el navegador lo ofrece, el botón «App installieren» (instalar app); en el iPhone, usa Compartir y «Añadir a pantalla de inicio» en Safari. Tras la primera visita, la Rüstkammer funciona también sin conexión.'
      ],
      fr: [
        'En bas, passez d’Arsenal à Meta, TTK, Klassen (classes) et Intel. Dans l’Arsenal, cherchez une arme, un Apex ou une classe, ou filtrez par type d’arme.',
        'Touchez une arme : statistiques, time to kill, builds méta et accessoire Apex ; sous « Mein Waffenlevel » (mon niveau d’arme), vous notez votre progression. Sous TTK, vous comparez selon la mesure, la distance et la classe.',
        'Intel regroupe la date des données et les patchs, « Nach Updates suchen » (rechercher des mises à jour) et, là où le navigateur le propose, le bouton « App installieren » (installer l’application) ; sur iPhone, passez par Partager et « Sur l’écran d’accueil » dans Safari. Après la première visite, la Rüstkammer fonctionne aussi hors ligne.'
      ],
      it: [
        'In basso passa tra Arsenal, Meta, TTK, Klassen (classi) e Intel. Nell’Arsenal cerca un’arma, un Apex o una classe, oppure filtra per tipo di arma.',
        'Tocca un’arma: statistiche, time to kill, build meta e accessorio Apex; in «Mein Waffenlevel» (il mio livello arma) inserisci i tuoi progressi. In TTK confronti per misurazione, distanza e classe.',
        'In Intel ci sono la data dei dati e le patch, «Nach Updates suchen» (cerca aggiornamenti) e, dove il browser lo offre, il pulsante «App installieren» (installa app); su iPhone usa Condividi e «Aggiungi alla schermata Home» in Safari. Dopo la prima visita la Rüstkammer funziona anche offline.'
      ],
      nl: [
        'Wissel onderaan tussen Arsenal, Meta, TTK, Klassen (klassen) en Intel. Zoek in het Arsenal naar een wapen, Apex of klasse, of filter op wapentype.',
        'Tik op een wapen: statistieken, time to kill, metabuilds en de Apex-attachment; onder ‘Mein Waffenlevel’ (mijn wapenlevel) vul je je voortgang in. Onder TTK vergelijk je op meting, afstand en klasse.',
        'Intel bevat de datum van de gegevens en de patches, ‘Nach Updates suchen’ (naar updates zoeken) en, waar je browser het aanbiedt, de knop ‘App installieren’ (app installeren); op een iPhone gebruik je in Safari Deel en ‘Zet op beginscherm’. Na het eerste bezoek werkt de Rüstkammer ook offline.'
      ],
      pl: [
        'Na dole przełączaj między Arsenal, Meta, TTK, Klassen (klasy) i Intel. W Arsenalu szukaj broni, Apexu lub klasy albo filtruj według rodzaju broni.',
        'Dotknij broni: statystyki, time to kill, buildy meta i dodatek Apex; w „Mein Waffenlevel” (mój poziom broni) wpisujesz swój postęp. W TTK porównujesz według pomiaru, dystansu i klasy.',
        'W Intel są data danych i patche, „Nach Updates suchen” (sprawdź aktualizacje) oraz – tam, gdzie przeglądarka to oferuje – przycisk „App installieren” (zainstaluj aplikację); na iPhonie użyj w Safari Udostępnij i „Do ekranu początkowego”. Po pierwszej wizycie Rüstkammer działa też offline.'
      ],
      pt: [
        'Em baixo, alterne entre Arsenal, Meta, TTK, Klassen (classes) e Intel. No Arsenal, pesquise uma arma, um Apex ou uma classe, ou filtre por tipo de arma.',
        'Toque numa arma: estatísticas, time to kill, builds meta e acessório Apex; em «Mein Waffenlevel» (o meu nível da arma) regista o seu progresso. Em TTK compara por medição, distância e classe.',
        'Em Intel estão a data dos dados e os patches, «Nach Updates suchen» (procurar atualizações) e, onde o navegador o oferece, o botão «App installieren» (instalar app); no iPhone, use Partilhar e «Adicionar ao ecrã principal» no Safari. Depois da primeira visita, a Rüstkammer também funciona offline.'
      ],
      tr: [
        'Altta Arsenal, Meta, TTK, Klassen (sınıflar) ve Intel arasında geçiş yapın. Arsenal’de silah, Apex ya da sınıf arayın veya silah türüne göre filtreleyin.',
        'Bir silaha dokunun: istatistikler, time to kill, meta buildler ve Apex eklentisi; “Mein Waffenlevel” (silah seviyem) altında ilerlemenizi girersiniz. TTK’da ölçüm, mesafe ve sınıfa göre karşılaştırırsınız.',
        'Intel’de veri tarihi ve yamalar, “Nach Updates suchen” (güncellemeleri ara) ve tarayıcının sunduğu yerde “App installieren” (uygulamayı yükle) düğmesi bulunur; iPhone’da Safari’de Paylaş ve “Ana Ekrana Ekle”yi kullanın. İlk ziyaretten sonra Rüstkammer çevrimdışı da çalışır.'
      ],
      ru: [
        'Внизу переключайтесь между Arsenal, Meta, TTK, Klassen (классы) и Intel. В Arsenal ищите оружие, Apex или класс либо фильтруйте по типу оружия.',
        'Коснитесь оружия: характеристики, time to kill, мета-сборки и модуль Apex; в «Mein Waffenlevel» (мой уровень оружия) вы отмечаете свой прогресс. В TTK сравнивайте по замеру, дистанции и классу.',
        'В Intel – дата данных и патчи, «Nach Updates suchen» (проверить обновления) и, где браузер это предлагает, кнопка «App installieren» (установить приложение); на iPhone используйте в Safari «Поделиться» и «На экран „Домой“». После первого посещения Rüstkammer работает и офлайн.'
      ],
      hi: [
        'नीचे Arsenal, Meta, TTK, Klassen (क्लास) और Intel के बीच बदलें। Arsenal में कोई हथियार, Apex या क्लास खोजें, या हथियार के प्रकार से छाँटें।',
        'किसी हथियार पर टैप करें: आँकड़े, time to kill, मेटा बिल्ड और Apex अटैचमेंट; “Mein Waffenlevel” (मेरा हथियार लेवल) में आप अपनी प्रगति भरते हैं। TTK में माप, दूरी और क्लास के हिसाब से तुलना करें।',
        'Intel में डेटा की तारीख़ और पैच, “Nach Updates suchen” (अपडेट खोजें) और – जहाँ ब्राउज़र यह देता है – “App installieren” (ऐप इंस्टॉल करें) बटन है; iPhone पर Safari में शेयर और “होम स्क्रीन में जोड़ें” इस्तेमाल करें। पहली विज़िट के बाद Rüstkammer ऑफ़लाइन भी चलता है।'
      ],
      zh: [
        '在底部切换 Arsenal、Meta、TTK、Klassen（配装）和 Intel。在 Arsenal 里可搜索武器、Apex 或配装，或按武器类型筛选。',
        '点一把武器：数值、击杀时间、Meta 配装和 Apex 配件；在“Mein Waffenlevel”（我的武器等级）里记录你的进度。在 TTK 里按测量方式、距离和类别比较。',
        'Intel 里有数据日期和补丁、“Nach Updates suchen”（检查更新），以及在浏览器支持时出现的“App installieren”（安装应用）按钮；在 iPhone 上请用 Safari 的“分享”和“添加到主屏幕”。首次访问后，Rüstkammer 也能离线使用。'
      ],
      ja: [
        '下部で Arsenal、Meta、TTK、Klassen（クラス）、Intel を切り替えます。Arsenal では武器・Apex・クラスで検索するか、武器種で絞り込みます。',
        '武器をタップすると、ステータス、キルタイム、メタビルド、Apex アタッチメントが表示されます。「Mein Waffenlevel」（武器レベル）に自分の進み具合を入力できます。TTK では測定方法・距離・クラスで比較します。',
        'Intel にはデータの日付とパッチ、「Nach Updates suchen」（更新を確認）、そしてブラウザーが対応していれば「App installieren」（アプリをインストール）ボタンがあります。iPhone では Safari の共有から「ホーム画面に追加」を使います。初回アクセス後はオフラインでも使えます。'
      ],
      ko: [
        '아래에서 Arsenal, Meta, TTK, Klassen(클래스), Intel 사이를 오갑니다. Arsenal에서는 무기, Apex, 클래스로 검색하거나 무기 종류로 거릅니다.',
        '무기를 누르면 능력치, 킬 타임, 메타 빌드, Apex 부착물이 나옵니다. ‘Mein Waffenlevel’(내 무기 레벨)에 진행 상황을 넣으세요. TTK에서는 측정 방식, 거리, 클래스별로 비교합니다.',
        'Intel에는 데이터 날짜와 패치, ‘Nach Updates suchen’(업데이트 확인), 그리고 브라우저가 지원하면 ‘App installieren’(앱 설치) 버튼이 있습니다. iPhone에서는 Safari의 공유 → ‘홈 화면에 추가’를 쓰세요. 첫 방문 후에는 오프라인에서도 작동합니다.'
      ]
    },
    pitfalls: {
      de: [
        'Die App ist auf Deutsch.',
        'Die Hardcore-Werte (≈) sind geschätzt, nicht gemessen.',
        'Nach einem Tuning-Patch können Werte veralten. Oben stehen der Datenstand und, wenn angekündigt, ein Tuning-Hinweis.',
        'Dein Waffenlevel und deine Einstellungen liegen nur in diesem Browser.'
      ],
      en: [
        'The app is in German.',
        'Hardcore values (≈) are estimates, not measurements.',
        'A tuning patch can make values outdated. The data date sits at the top, together with a notice when tuning has been announced.',
        'Your weapon level and settings live only in this browser.'
      ],
      es: [
        'La app está en alemán.',
        'Los valores de Hardcore (≈) son estimaciones, no mediciones.',
        'Tras un parche de ajustes, los valores pueden quedar desfasados. Arriba están la fecha de los datos y, si se ha anunciado, un aviso de ajustes.',
        'Tu nivel de arma y tus ajustes solo se guardan en este navegador.'
      ],
      fr: [
        'L’application est en allemand.',
        'Les valeurs Hardcore (≈) sont des estimations, pas des mesures.',
        'Après un patch d’équilibrage, des valeurs peuvent être dépassées. En haut figurent la date des données et, s’il est annoncé, un avertissement d’équilibrage.',
        'Votre niveau d’arme et vos réglages restent uniquement dans ce navigateur.'
      ],
      it: [
        'L’app è in tedesco.',
        'I valori Hardcore (≈) sono stime, non misurazioni.',
        'Dopo una patch di bilanciamento i valori possono essere superati. In alto ci sono la data dei dati e, se annunciato, un avviso di bilanciamento.',
        'Il tuo livello arma e le tue impostazioni restano solo in questo browser.'
      ],
      nl: [
        'De app is in het Duits.',
        'Hardcore-waarden (≈) zijn schattingen, geen metingen.',
        'Na een tuningpatch kunnen waarden verouderd zijn. Bovenaan staan de datum van de gegevens en, als het is aangekondigd, een tuningmelding.',
        'Je wapenlevel en instellingen staan alleen in deze browser.'
      ],
      pl: [
        'Aplikacja jest po niemiecku.',
        'Wartości Hardcore (≈) są szacunkami, nie pomiarami.',
        'Po patchu balansującym wartości mogą się zdezaktualizować. U góry jest data danych i – jeśli zapowiedziano – informacja o zmianach balansu.',
        'Twój poziom broni i ustawienia są zapisane tylko w tej przeglądarce.'
      ],
      pt: [
        'A app está em alemão.',
        'Os valores de Hardcore (≈) são estimativas, não medições.',
        'Depois de um patch de ajuste, os valores podem ficar desatualizados. No topo estão a data dos dados e, se anunciado, um aviso de ajuste.',
        'O seu nível de arma e as definições ficam só neste navegador.'
      ],
      tr: [
        'Uygulama Almancadır.',
        'Hardcore değerleri (≈) tahmindir, ölçüm değildir.',
        'Bir ayar yamasından sonra değerler eskiyebilir. Üstte veri tarihi ve duyurulduysa bir ayar uyarısı yer alır.',
        'Silah seviyeniz ve ayarlarınız yalnızca bu tarayıcıda durur.'
      ],
      ru: [
        'Приложение на немецком.',
        'Значения для Hardcore (≈) – оценки, а не замеры.',
        'После патча с балансировкой значения могут устареть. Вверху указаны дата данных и, если объявлено, предупреждение о балансировке.',
        'Ваш уровень оружия и настройки хранятся только в этом браузере.'
      ],
      hi: [
        'ऐप जर्मन में है।',
        'Hardcore मान (≈) अनुमान हैं, माप नहीं।',
        'ट्यूनिंग पैच के बाद मान पुराने पड़ सकते हैं। ऊपर डेटा की तारीख़ और, घोषणा होने पर, ट्यूनिंग की सूचना रहती है।',
        'आपका हथियार लेवल और सेटिंग्स सिर्फ़ इसी ब्राउज़र में रहती हैं।'
      ],
      zh: [
        '应用只有德语。',
        'Hardcore 数值（≈）是估算，不是实测。',
        '平衡调整补丁之后，数值可能过时。顶部有数据日期，宣布调整时还会有提示。',
        '你的武器等级和设置只保存在这个浏览器里。'
      ],
      ja: [
        'アプリはドイツ語です。',
        'Hardcore の値（≈）は推定で、実測ではありません。',
        '調整パッチの後は値が古くなることがあります。上部にデータの日付と、予告があれば調整の注意が表示されます。',
        '武器レベルと設定は、このブラウザーの中にだけ保存されます。'
      ],
      ko: [
        '앱은 독일어입니다.',
        'Hardcore 수치(≈)는 측정값이 아니라 추정치입니다.',
        '밸런스 패치 뒤에는 수치가 낡을 수 있습니다. 위쪽에 데이터 날짜와, 예고가 있으면 밸런스 안내가 표시됩니다.',
        '무기 레벨과 설정은 이 브라우저에만 저장됩니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      en: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      es: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      fr: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      it: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      nl: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      pl: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      pt: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      tr: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      ru: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      hi: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      zh: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      ja: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4',
      ko: 'https://github.com/Dennismit2n/dennismit2n.github.io/tree/main/tools/mw4'
    }
  },
  pocketsum: {
    purpose: {
      de: 'Für die kleinen Rechnungen zwischendurch: Was kostet das netto? Wie viel Trinkgeld, und was zahlt jeder? Was macht der neue Spritpreis im Monat aus? Was bleibt von der Dividende nach Steuern? Und was kostet es wirklich, 250 € in Bitcoin zu stecken? Fünf Rechner in einer Datei, die auf deinem Gerät rechnet und deine Eingaben nirgendwohin schickt.',
      en: 'For the small sums in between: what is that net of VAT? How much tip, and what does everyone pay? What does the new fuel price add up to each month? What is left of a dividend after tax? And what does it really cost to put €250 into Bitcoin? Five calculators in one file that works on your device and never sends what you enter anywhere.',
      es: 'Para las pequeñas cuentas del día a día: ¿cuánto es sin IVA? ¿Cuánta propina, y cuánto paga cada uno? ¿Qué supone el nuevo precio del combustible al mes? ¿Qué queda de un dividendo después de impuestos? ¿Y cuánto cuesta de verdad meter 250 € en Bitcoin? Cinco calculadoras en un archivo que calcula en tu dispositivo y no envía a ningún sitio lo que introduces.',
      fr: 'Pour les petits calculs du quotidien : combien cela fait-il hors taxes ? Quel pourboire, et combien paie chacun ? Que représente le nouveau prix du carburant par mois ? Que reste-t-il d’un dividende après impôts ? Et que coûte vraiment un placement de 250 € en Bitcoin ? Cinq calculatrices dans un seul fichier qui calcule sur votre appareil et n’envoie nulle part ce que vous saisissez.',
      it: 'Per i piccoli conti di tutti i giorni: quanto fa senza IVA? Quanta mancia, e quanto paga ognuno? Quanto pesa al mese il nuovo prezzo del carburante? Cosa resta di un dividendo dopo le tasse? E quanto costa davvero mettere 250 € in Bitcoin? Cinque calcolatrici in un solo file che calcola sul tuo dispositivo e non invia da nessuna parte ciò che inserisci.',
      nl: 'Voor de kleine sommetjes tussendoor: wat is dat zonder btw? Hoeveel fooi, en wat betaalt ieder? Wat scheelt de nieuwe brandstofprijs per maand? Wat blijft er van een dividend over na belasting? En wat kost het echt om € 250 in bitcoin te steken? Vijf rekenhulpjes in één bestand dat op je apparaat rekent en wat je invult nergens naartoe stuurt.',
      pl: 'Do drobnych obliczeń na co dzień: ile to netto? Jaki napiwek i ile płaci każdy? Ile miesięcznie kosztuje nowa cena paliwa? Co zostaje z dywidendy po podatkach? I ile naprawdę kosztuje włożenie 250 € w bitcoina? Pięć kalkulatorów w jednym pliku, który liczy na twoim urządzeniu i nigdzie nie wysyła tego, co wpisujesz.',
      pt: 'Para as pequenas contas do dia a dia: quanto é sem IVA? Quanta gorjeta, e quanto paga cada um? Quanto pesa por mês o novo preço do combustível? O que sobra de um dividendo depois dos impostos? E quanto custa realmente pôr 250 € em Bitcoin? Cinco calculadoras num só ficheiro que calcula no seu dispositivo e não envia para lado nenhum o que introduz.',
      tr: 'Aradaki küçük hesaplar için: Bu KDV’siz ne kadar? Ne kadar bahşiş, kim ne öder? Yeni yakıt fiyatı ayda ne kadar tutar? Vergiden sonra temettüden ne kalır? Ve 250 €’yu Bitcoin’e yatırmak gerçekte kaça mal olur? Cihazınızda hesaplayan ve girdiklerinizi hiçbir yere göndermeyen tek bir dosyada beş hesap makinesi.',
      ru: 'Для маленьких расчётов между делом: сколько это без НДС? Сколько оставить чаевых и сколько платит каждый? Во что обходится новая цена топлива за месяц? Что остаётся от дивиденда после налогов? И сколько на самом деле стоит вложить 250 € в биткоин? Пять калькуляторов в одном файле, который считает на вашем устройстве и никуда не отправляет то, что вы вводите.',
      hi: 'बीच-बीच की छोटी गणनाओं के लिए: VAT के बिना यह कितना है? कितनी टिप, और हर कोई कितना दे? नई ईंधन कीमत से हर माह कितना फ़र्क पड़ता है? कर के बाद लाभांश में से कितना बचता है? और Bitcoin में 250 € लगाना असल में कितना पड़ता है? एक फ़ाइल में पाँच कैलकुलेटर, जो आपके डिवाइस पर गणना करते हैं और आप जो भरते हैं उसे कहीं नहीं भेजते।',
      zh: '用于日常的小计算：不含税是多少？给多少小费，每人付多少？新油价每月要多花多少？股息扣税后还剩多少？把 250 欧元投进比特币，实际要花多少成本？一个文件里的五个计算器，在你的设备上计算，不会把你输入的内容发送到任何地方。',
      ja: 'ちょっとした計算のために：税抜きだといくら？ チップはいくらで、1人いくら払う？ 新しい燃料価格で毎月いくら変わる？ 税引き後に配当はいくら残る？ そして 250 ユーロをビットコインに入れると実際いくらかかる？ あなたの端末の中で計算し、入力した内容をどこにも送らない、1つのファイルに入った5つの計算機です。',
      ko: '틈틈이 하는 작은 계산을 위해: 부가세 빼면 얼마일까? 팁은 얼마이고 각자 얼마를 낼까? 새 연료 가격이면 한 달에 얼마가 더 들까? 세금 떼고 배당은 얼마가 남을까? 그리고 250 €를 비트코인에 넣으면 실제로 비용이 얼마나 들까? 기기 안에서 계산하고 입력한 내용을 어디로도 보내지 않는, 파일 하나에 담긴 계산기 다섯 개입니다.'
    },
    shots: [
      {
        files: {
          de: ['pocketsum-de.webp', 1440, 874],
          en: ['pocketsum-en.webp', 1440, 874]
        },
        alt: {
          de: 'Drei Handy-Ansichten von Pocketsum: Trade-Kosten für 250 Euro in Bitcoin mit Gebühr, Aufschlag, erhaltener Stückzahl, effektivem Kurs und dem nötigen Kursanstieg bis zur Gewinnschwelle; Dividende mit Netto pro Jahr und Monat und der Zahl der Aktien für ein Wunsch-Netto; Spritpreis mit dem Anstieg in Prozent, den Mehrkosten pro Monat und einer Tabelle für Tankfüllung, 100 km, Monat und Jahr.',
          en: 'Three phone screens of Pocketsum: trading costs for 250 euros in Bitcoin with fee, markup, units received, effective price and the rise needed to break even; dividends with net per year and month and the number of shares for a desired net income; fuel price with the increase in percent, the extra cost per month and a table for a full tank, 100 km, a month and a year.',
          es: 'Tres pantallas de móvil de Pocketsum: costes de comprar 250 euros en Bitcoin con comisión, recargo, unidades recibidas, precio efectivo y la subida necesaria para no perder; dividendos con el neto al año y al mes y el número de acciones para un neto deseado; precio del combustible con la subida en porcentaje, el gasto extra al mes y una tabla para depósito lleno, 100 km, mes y año.',
          fr: 'Trois écrans de téléphone de Pocketsum : frais d’un achat de 250 euros en Bitcoin avec commission, majoration, unités reçues, cours effectif et la hausse nécessaire pour rentrer dans ses frais ; dividendes avec le net par an et par mois et le nombre d’actions pour un net souhaité ; prix du carburant avec la hausse en pour cent, le surcoût par mois et un tableau pour un plein, 100 km, un mois et une année.',
          it: 'Tre schermate di telefono di Pocketsum: costi di un acquisto di 250 euro in Bitcoin con commissione, ricarico, unità ricevute, prezzo effettivo e l’aumento necessario per andare in pari; dividendi con il netto all’anno e al mese e il numero di azioni per un netto desiderato; prezzo del carburante con l’aumento in percentuale, il costo in più al mese e una tabella per pieno, 100 km, mese e anno.',
          nl: 'Drie telefoonschermen van Pocketsum: kosten van 250 euro in bitcoin met provisie, opslag, ontvangen stuks, effectieve koers en de stijging die nodig is om quitte te spelen; dividend met netto per jaar en per maand en het aantal aandelen voor een gewenst netto; brandstofprijs met de stijging in procent, de extra kosten per maand en een tabel voor een volle tank, 100 km, een maand en een jaar.',
          pl: 'Trzy ekrany telefonu z Pocketsum: koszty zakupu bitcoina za 250 euro z prowizją, narzutem, liczbą otrzymanych jednostek, kursem efektywnym i wzrostem potrzebnym do wyjścia na zero; dywidendy z kwotą netto rocznie i miesięcznie oraz liczbą akcji dla wymarzonego netto; cena paliwa ze wzrostem w procentach, dodatkowym kosztem na miesiąc i tabelą dla pełnego baku, 100 km, miesiąca i roku.',
          pt: 'Três ecrãs de telemóvel do Pocketsum: custos de comprar 250 euros em Bitcoin com comissão, acréscimo, unidades recebidas, cotação efetiva e a subida necessária para empatar; dividendos com o líquido por ano e por mês e o número de ações para um líquido desejado; preço do combustível com a subida em percentagem, o custo a mais por mês e uma tabela para depósito cheio, 100 km, mês e ano.',
          tr: 'Pocketsum’dan üç telefon ekranı: komisyon, ek fiyat, alınan adet, efektif fiyat ve başa baş için gereken artışla 250 euroluk Bitcoin alımının maliyeti; yıllık ve aylık net temettü ile istenen net için gereken hisse sayısı; yüzde olarak artış, aylık ek maliyet ve dolu depo, 100 km, ay ve yıl için bir tabloyla yakıt fiyatı.',
          ru: 'Три экрана телефона с Pocketsum: расходы на покупку биткоина на 250 евро с комиссией, наценкой, полученным количеством, фактической ценой и ростом, нужным для выхода в ноль; дивиденды с суммой нетто за год и в месяц и числом акций для желаемого дохода; цена топлива с ростом в процентах, дополнительными расходами в месяц и таблицей для полного бака, 100 км, месяца и года.',
          hi: 'Pocketsum की तीन फ़ोन स्क्रीन: Bitcoin में 250 यूरो लगाने की लागत, शुल्क, अतिरिक्त, मिली यूनिट, असल भाव और ब्रेक-ईवन तक ज़रूरी बढ़ोतरी के साथ; प्रति वर्ष और प्रति माह नेट लाभांश और चाही गई नेट आय के लिए शेयरों की संख्या; ईंधन की कीमत, प्रतिशत में बढ़ोतरी, हर माह का अतिरिक्त ख़र्च और पूरी टंकी, 100 किमी, माह और वर्ष की तालिका के साथ।',
          zh: 'Pocketsum 的三个手机画面：用 250 欧元买比特币的成本，含手续费、加价、得到的份数、实际价格和回本所需的涨幅；股息，含每年和每月的税后金额，以及达到目标税后收入所需的股数；油价，含上涨百分比、每月多花的钱，以及加满一箱、100 公里、每月和每年的对比表。',
          ja: 'Pocketsum のスマートフォン画面3枚: 250 ユーロ分のビットコイン購入にかかるコスト（手数料、上乗せ、受け取る量、実質価格、損益ゼロに必要な値上がり）、配当（年間と月あたりの手取り、目標の手取りに必要な株数）、燃料価格（値上がり率、月あたりの増加額、満タン・100 km・月・年の比較表）。',
          ko: 'Pocketsum 휴대폰 화면 세 개: 비트코인 250유로어치 매수 비용(수수료, 가산, 받는 수량, 실제 단가, 본전까지 필요한 상승), 배당(연간·월간 세후 금액과 원하는 세후 금액에 필요한 주식 수), 연료 가격(인상률, 월 추가 비용, 가득 주유·100 km·월·연 비교표).'
        }
      }
    ],
    steps: {
      de: [
        'Pocketsum öffnen und oben einen der fünf Rechner wählen. Sprache und Darstellung stehen ganz oben; Zahlen schreibst du so, wie man sie in deiner Sprache schreibt – auf Deutsch ist „5.000“ fünftausend.',
        'Werte eintragen, Pocketsum rechnet sofort mit. Ein roter Rahmen heißt: Diese Eingabe versteht Pocketsum nicht. Beim Trade-Rechner zuerst ein Gebühren-Beispiel wählen und dann die Preisliste deines Anbieters eintragen.',
        '„Ergebnis kopieren“ legt eine Zusammenfassung in die Zwischenablage, „Zurücksetzen“ holt die Startwerte dieses Rechners zurück; sonst bleiben deine Eingaben gespeichert. Nach dem ersten Besuch läuft Pocketsum auch ohne Netz, und ganz unten gibt es die App als eine Datei zum Herunterladen. Zeigt dein Browser oben den Knopf „Installieren“, richtet ein Tipp darauf Pocketsum als App ein.'
      ],
      en: [
        'Open Pocketsum and pick one of the five calculators at the top. Language and appearance sit right at the top; write numbers the way your language writes them – in English, “5,000” is five thousand.',
        'Enter your values and the result updates instantly. A red outline means Pocketsum cannot read that input. In the trading calculator, pick a sample fee model first, then enter your provider’s price list.',
        '“Copy result” puts a summary on the clipboard, “Reset” brings back that calculator’s starting values; otherwise your entries stay saved. After the first visit Pocketsum also works without a connection, and at the very bottom you can download the whole app as a single file. If your browser shows the “Install” button at the top, one tap sets Pocketsum up as an app.'
      ],
      es: [
        'Abre Pocketsum y elige arriba una de las cinco calculadoras. El idioma y la apariencia están arriba del todo; escribe los números como se escriben en tu idioma: en español, «5.000» son cinco mil.',
        'Introduce los valores y el resultado se calcula al instante. Un marco rojo significa que Pocketsum no entiende esa entrada. En la calculadora de operaciones, elige primero un modelo de comisiones de ejemplo y luego introduce las tarifas de tu proveedor.',
        '«Copiar resultado» copia un resumen al portapapeles y «Restablecer» recupera los valores iniciales de esa calculadora; si no, tus datos quedan guardados. Tras la primera visita Pocketsum funciona también sin conexión, y abajo del todo puedes descargar la app entera como un solo archivo. Si tu navegador muestra arriba el botón «Instalar», con un toque Pocketsum se instala como app.'
      ],
      fr: [
        'Ouvrir Pocketsum et choisir en haut l’une des cinq calculatrices. La langue et l’apparence se trouvent tout en haut ; écrivez les nombres comme on les écrit dans votre langue – en français, « 5 000 » fait cinq mille.',
        'Saisir les valeurs : le résultat se calcule aussitôt. Un cadre rouge signifie que Pocketsum ne comprend pas cette saisie. Dans la calculatrice de frais, choisir d’abord un modèle de frais d’exemple, puis saisir la grille tarifaire de votre fournisseur.',
        '« Copier le résultat » place un résumé dans le presse-papiers, « Réinitialiser » rétablit les valeurs de départ de cette calculatrice ; sinon, vos saisies restent enregistrées. Après la première visite, Pocketsum fonctionne aussi sans connexion, et tout en bas l’application entière se télécharge en un seul fichier. Si votre navigateur affiche en haut le bouton « Installer », un appui installe Pocketsum comme application.'
      ],
      it: [
        'Apri Pocketsum e scegli in alto una delle cinque calcolatrici. Lingua e aspetto sono proprio in cima; scrivi i numeri come si scrivono nella tua lingua: in italiano «5.000» sono cinquemila.',
        'Inserisci i valori e il risultato si aggiorna subito. Un bordo rosso vuol dire che Pocketsum non capisce quell’inserimento. Nella calcolatrice delle operazioni scegli prima un modello di commissioni di esempio, poi inserisci il listino del tuo fornitore.',
        '«Copia risultato» mette un riepilogo negli appunti, «Reimposta» riporta i valori iniziali di quella calcolatrice; altrimenti i tuoi dati restano salvati. Dopo la prima visita Pocketsum funziona anche senza connessione, e in fondo alla pagina puoi scaricare l’intera app come un unico file. Se il browser mostra in alto il pulsante «Installa», con un tocco Pocketsum si installa come app.'
      ],
      nl: [
        'Open Pocketsum en kies bovenaan een van de vijf rekenhulpjes. Taal en weergave staan helemaal bovenaan; schrijf getallen zoals jouw taal ze schrijft – in het Nederlands is ‘5.000’ vijfduizend.',
        'Vul de waarden in, het resultaat rekent meteen mee. Een rode rand betekent dat Pocketsum die invoer niet begrijpt. Kies in de transactiecalculator eerst een voorbeeld-kostenmodel en vul daarna de prijslijst van je aanbieder in.',
        '‘Resultaat kopiëren’ zet een samenvatting op het klembord, ‘Herstellen’ haalt de startwaarden van dat rekenhulpje terug; verder blijft wat je invult bewaard. Na het eerste bezoek werkt Pocketsum ook zonder verbinding, en helemaal onderaan kun je de hele app als één bestand downloaden. Toont je browser bovenaan de knop ‘Installeren’, dan installeer je Pocketsum met één tik als app.'
      ],
      pl: [
        'Otwórz Pocketsum i wybierz u góry jeden z pięciu kalkulatorów. Język i wygląd są na samej górze; liczby zapisuj tak, jak zapisuje się je w twoim języku – po polsku „5000” to pięć tysięcy.',
        'Wpisz wartości, a wynik przelicza się od razu. Czerwona ramka oznacza, że Pocketsum nie rozumie tego wpisu. W kalkulatorze transakcji wybierz najpierw przykładowy model opłat, a potem wpisz cennik swojego dostawcy.',
        '„Kopiuj wynik” kopiuje podsumowanie do schowka, „Resetuj” przywraca wartości początkowe tego kalkulatora; poza tym twoje wpisy zostają zapisane. Po pierwszej wizycie Pocketsum działa też bez internetu, a na samym dole można pobrać całą aplikację jako jeden plik. Jeśli przeglądarka pokazuje u góry przycisk „Zainstaluj”, jedno dotknięcie instaluje Pocketsum jako aplikację.'
      ],
      pt: [
        'Abra o Pocketsum e escolha em cima uma das cinco calculadoras. O idioma e o aspeto estão mesmo no topo; escreva os números como se escrevem no seu idioma – em português, «5000» são cinco mil.',
        'Introduza os valores e o resultado é calculado de imediato. Uma moldura vermelha significa que o Pocketsum não percebe esse valor. Na calculadora de operações, escolha primeiro um modelo de comissões de exemplo e depois introduza o preçário do seu fornecedor.',
        '«Copiar resultado» copia um resumo para a área de transferência, «Repor» volta aos valores iniciais dessa calculadora; de resto, os seus dados ficam guardados. Depois da primeira visita o Pocketsum também funciona sem ligação, e no fundo da página pode descarregar a app inteira como um único ficheiro. Se o navegador mostrar no topo o botão «Instalar», um toque instala o Pocketsum como app.'
      ],
      tr: [
        'Pocketsum’u açın ve üstten beş hesap makinesinden birini seçin. Dil ve görünüm en üstte; sayıları dilinizde nasıl yazılıyorsa öyle yazın – Türkçede “5.000” beş bindir.',
        'Değerleri girin, sonuç anında hesaplanır. Kırmızı çerçeve, Pocketsum’un o girdiyi anlamadığı anlamına gelir. İşlem hesaplayıcısında önce örnek bir ücret modeli seçin, sonra sağlayıcınızın fiyat listesini girin.',
        '“Sonucu kopyala” bir özeti panoya alır, “Sıfırla” o hesap makinesinin başlangıç değerlerini geri getirir; bunun dışında girdikleriniz kayıtlı kalır. İlk ziyaretten sonra Pocketsum bağlantı olmadan da çalışır ve sayfanın en altında uygulamanın tamamını tek bir dosya olarak indirebilirsiniz. Tarayıcınız üstte “Yükle” düğmesini gösteriyorsa, tek dokunuşla Pocketsum uygulama olarak kurulur.'
      ],
      ru: [
        'Откройте Pocketsum и выберите вверху один из пяти калькуляторов. Язык и оформление — в самом верху; пишите числа так, как их пишут на вашем языке: по-русски «5 000» — это пять тысяч.',
        'Введите значения — результат пересчитывается сразу. Красная рамка означает, что Pocketsum не понимает этот ввод. В калькуляторе сделок сначала выберите примерную модель комиссий, а затем введите тарифы своего провайдера.',
        '«Скопировать результат» кладёт сводку в буфер обмена, «Сбросить» возвращает начальные значения этого калькулятора; в остальном введённое сохраняется. После первого посещения Pocketsum работает и без интернета, а в самом низу можно скачать всё приложение одним файлом. Если браузер показывает вверху кнопку «Установить», одно касание установит Pocketsum как приложение.'
      ],
      hi: [
        'Pocketsum खोलें और ऊपर पाँच में से कोई एक कैलकुलेटर चुनें। भाषा और रूप सबसे ऊपर हैं; संख्याएँ वैसे लिखें जैसे आपकी भाषा में लिखी जाती हैं – हिन्दी में “5,000” पाँच हज़ार है।',
        'मान भरें, नतीजा तुरंत बदलता है। लाल किनारे का मतलब है कि Pocketsum वह प्रविष्टि नहीं समझता। ट्रेड कैलकुलेटर में पहले कोई उदाहरण शुल्क मॉडल चुनें, फिर अपने प्रदाता की रेट लिस्ट भरें।',
        '“नतीजा कॉपी करें” एक सारांश क्लिपबोर्ड में रखता है, “रीसेट करें” इस कैलकुलेटर के शुरुआती मान वापस लाता है; वरना आपकी प्रविष्टियाँ सहेजी रहती हैं। पहली विज़िट के बाद Pocketsum बिना इंटरनेट के भी चलता है, और सबसे नीचे पूरी ऐप एक फ़ाइल के रूप में डाउनलोड की जा सकती है। अगर ब्राउज़र ऊपर “इंस्टॉल करें” बटन दिखाता है, तो एक टैप से Pocketsum ऐप की तरह इंस्टॉल हो जाता है।'
      ],
      zh: [
        '打开 Pocketsum，在顶部选择五个计算器之一。语言和外观在最上方；数字按你的语言习惯书写——中文里“5,000”就是五千。',
        '填入数值，结果会立刻更新。红框表示 Pocketsum 看不懂这个输入。在交易计算器里，先选一个示例收费模式，再填入你的服务商价目表。',
        '“复制结果”会把摘要放进剪贴板，“重置”恢复该计算器的初始值；不重置的话，你的输入会一直保留。首次访问后，Pocketsum 无需联网也能使用，页面最底部还可以把整个应用下载为单个文件。如果浏览器在顶部显示“安装”按钮，点一下即可把 Pocketsum 安装为应用。'
      ],
      ja: [
        'Pocketsum を開き、上で5つの計算機のどれかを選びます。言語と表示はいちばん上にあります。数字はあなたの言語の書き方で入力します。日本語なら「5,000」は五千です。',
        '値を入れると結果がすぐに計算されます。赤い枠は、Pocketsum がその入力を読み取れないという意味です。取引の計算では、まず手数料のサンプルを選び、それから利用先の料金表を入れてください。',
        '「結果をコピー」で要約がクリップボードに入り、「リセット」でその計算機の初期値に戻ります。リセットしない限り、入力した内容は保存されたままです。一度アクセスすればオフラインでも動き、ページのいちばん下からアプリ全体を1つのファイルとしてダウンロードできます。ブラウザーが上部に「インストール」ボタンを表示していれば、タップするだけで Pocketsum をアプリとしてインストールできます。'
      ],
      ko: [
        'Pocketsum을 열고 위에서 계산기 다섯 개 중 하나를 고릅니다. 언어와 화면 모드는 맨 위에 있습니다. 숫자는 사용하는 언어의 표기대로 쓰면 됩니다. 한국어라면 ‘5,000’은 오천입니다.',
        '값을 넣으면 결과가 바로 계산됩니다. 빨간 테두리는 Pocketsum이 그 입력을 이해하지 못한다는 뜻입니다. 거래 계산기에서는 먼저 예시 수수료 모델을 고르고, 그다음 이용하는 곳의 요금표를 넣으세요.',
        '‘결과 복사’는 요약을 클립보드에 넣고, ‘초기화’는 그 계산기의 처음 값으로 되돌립니다. 초기화하지 않으면 입력한 내용은 저장된 채로 남습니다. 처음 한 번 방문한 뒤에는 인터넷 없이도 작동하며, 맨 아래에서 앱 전체를 파일 하나로 내려받을 수 있습니다. 브라우저가 위쪽에 ‘설치’ 버튼을 보여 주면 한 번 눌러 Pocketsum을 앱으로 설치할 수 있습니다.'
      ]
    },
    pitfalls: {
      de: [
        'Der Dividendenrechner folgt dem deutschen Steuerrecht in vereinfachter Form: keine Günstigerprüfung, keine Verlustverrechnung, keine Vorabpauschale bei Fonds. Wer nicht in Deutschland steuerpflichtig ist, nimmt den Haken bei „Steuern nach deutschem Recht abziehen“ heraus.',
        'Die Gebühren-Beispiele sind Musterfälle, keine Preislisten echter Anbieter. Was dein Anbieter nimmt, steht in seinem Preisverzeichnis – bei Krypto-Apps steckt ein Teil oft im Kurs statt in der Gebühr.',
        '„Aufschlag je Kauf oder Verkauf“ zählt beim Kauf und beim Verkauf je einmal. Nennt dein Anbieter einen Geld-Brief-Spread, trag nur die Hälfte ein.',
        '19 % und 7 % sind die deutschen Mehrwertsteuersätze. Für andere Länder den eigenen Satz wählen.',
        'Die Eingaben liegen nur im Browser dieses Geräts. Wer die Browserdaten löscht, löscht sie mit, und ein anderes Gerät sieht sie nicht.'
      ],
      en: [
        'The dividend calculator follows German tax law in a simplified form: no lower-rate check against your personal income tax, no offsetting of losses, no advance lump sum (Vorabpauschale) on funds. If you are not taxed in Germany, untick “Deduct taxes under German law”.',
        'The fee examples are generic models, not price lists of real providers. What your provider charges is in its price list – with crypto apps, part of the cost is often hidden in the price rather than in the fee.',
        '“Markup per buy or sell” counts once when buying and once when selling. If your provider quotes a bid-ask spread, enter only half of it.',
        '19% and 7% are the German VAT rates. For other countries, choose your own rate.',
        'Your entries live only in this device’s browser. Clearing the browser data clears them too, and another device does not see them.'
      ],
      es: [
        'La calculadora de dividendos sigue la ley fiscal alemana de forma simplificada: sin comparación con el tipo personal (Günstigerprüfung), sin compensación de pérdidas y sin el pago anticipado a tanto alzado (Vorabpauschale) de los fondos. Si no tributas en Alemania, desmarca «Descontar impuestos según la ley alemana».',
        'Las comisiones de ejemplo son modelos orientativos, no tarifas de proveedores reales. Lo que cobra tu proveedor está en su lista de precios; en las apps de cripto, parte del coste suele ir en el precio en lugar de en la comisión.',
        '«Recargo por compra o venta» cuenta una vez al comprar y otra al vender. Si tu proveedor indica un diferencial de compraventa, introduce solo la mitad.',
        'El 19 % y el 7 % son los tipos de IVA de Alemania. Para otros países, elige tu propio tipo.',
        'Tus datos solo están en el navegador de este dispositivo. Si borras los datos del navegador, también se borran, y otro dispositivo no los ve.'
      ],
      fr: [
        'La calculatrice de dividendes suit le droit fiscal allemand de façon simplifiée : pas de comparaison avec le barème personnel (Günstigerprüfung), pas d’imputation des pertes, pas de forfait anticipé (Vorabpauschale) sur les fonds. Si vous n’êtes pas imposable en Allemagne, décochez « Déduire les impôts selon le droit allemand ».',
        'Les frais d’exemple sont des cas types, pas les grilles tarifaires de vrais fournisseurs. Ce que prend votre fournisseur figure dans sa grille tarifaire – dans les applis crypto, une partie du coût se cache souvent dans le cours plutôt que dans les frais.',
        '« Majoration par achat ou vente » compte une fois à l’achat et une fois à la vente. Si votre fournisseur indique un écart achat-vente, n’en saisissez que la moitié.',
        '19 % et 7 % sont les taux de TVA allemands. Pour d’autres pays, choisissez votre propre taux.',
        'Vos saisies ne se trouvent que dans le navigateur de cet appareil. Effacer les données du navigateur les efface aussi, et un autre appareil ne les voit pas.'
      ],
      it: [
        'La calcolatrice dei dividendi segue il fisco tedesco in forma semplificata: niente confronto con l’aliquota personale (Günstigerprüfung), niente compensazione delle perdite, niente imposta anticipata forfettaria (Vorabpauschale) sui fondi. Se non paghi le tasse in Germania, togli la spunta da «Detrai le tasse secondo la legge tedesca».',
        'Le commissioni di esempio sono tipologie, non listini di fornitori reali. Quanto chiede il tuo fornitore sta nel suo listino; nelle app di cripto una parte del costo spesso è nascosta nel prezzo invece che nella commissione.',
        '«Ricarico per acquisto o vendita» conta una volta all’acquisto e una alla vendita. Se il tuo fornitore indica uno spread denaro-lettera, inseriscine solo la metà.',
        '19% e 7% sono le aliquote IVA tedesche. Per altri paesi scegli la tua aliquota.',
        'I tuoi dati stanno solo nel browser di questo dispositivo. Se cancelli i dati del browser, cancelli anche questi, e un altro dispositivo non li vede.'
      ],
      nl: [
        'De dividendcalculator volgt het Duitse belastingrecht in vereenvoudigde vorm: geen vergelijking met je persoonlijke tarief (Günstigerprüfung), geen verliesverrekening, geen voorschotheffing (Vorabpauschale) op fondsen. Ben je niet in Duitsland belastingplichtig, haal dan het vinkje bij ‘Belasting volgens Duits recht aftrekken’ weg.',
        'De voorbeeldkosten zijn typen, geen prijslijsten van echte aanbieders. Wat jouw aanbieder rekent, staat in diens prijslijst – bij crypto-apps zit een deel vaak in de koers in plaats van in de kosten.',
        '‘Opslag per aan- of verkoop’ telt één keer bij aankoop en één keer bij verkoop. Noemt je aanbieder een bied-laatspread, vul dan alleen de helft in.',
        '19% en 7% zijn de Duitse btw-tarieven. Kies voor andere landen je eigen tarief.',
        'Wat je invult staat alleen in de browser van dit apparaat. Wie de browsergegevens wist, wist het mee, en een ander apparaat ziet het niet.'
      ],
      pl: [
        'Kalkulator dywidend stosuje niemieckie prawo podatkowe w uproszczeniu: bez porównania z osobistą stawką (Günstigerprüfung), bez rozliczania strat, bez zaliczkowego ryczałtu (Vorabpauschale) od funduszy. Jeśli nie płacisz podatków w Niemczech, odznacz „Odlicz podatki według prawa niemieckiego”.',
        'Przykładowe opłaty to typy, a nie cenniki prawdziwych dostawców. Ile bierze twój dostawca, znajdziesz w jego cenniku – w aplikacjach kryptowalutowych część kosztu często kryje się w kursie, a nie w opłacie.',
        '„Narzut na kupno lub sprzedaż” liczy się raz przy kupnie i raz przy sprzedaży. Jeśli dostawca podaje spread kupna-sprzedaży, wpisz tylko połowę.',
        '19% i 7% to niemieckie stawki VAT. Dla innych krajów wybierz własną stawkę.',
        'Twoje wpisy są tylko w przeglądarce tego urządzenia. Usunięcie danych przeglądarki usuwa także wpisy, a inne urządzenie ich nie widzi.'
      ],
      pt: [
        'A calculadora de dividendos segue a lei fiscal alemã de forma simplificada: sem comparação com a taxa pessoal (Günstigerprüfung), sem compensação de perdas e sem o pagamento antecipado fixo (Vorabpauschale) dos fundos. Se não paga impostos na Alemanha, desmarque «Descontar impostos segundo a lei alemã».',
        'As comissões de exemplo são casos-tipo, não preçários de fornecedores reais. O que o seu fornecedor cobra está no preçário dele – nas apps de cripto, parte do custo está muitas vezes na cotação e não na comissão.',
        '«Acréscimo por compra ou venda» conta uma vez na compra e outra na venda. Se o seu fornecedor indicar um spread de compra e venda, introduza só metade.',
        '19% e 7% são as taxas de IVA alemãs. Para outros países, escolha a sua própria taxa.',
        'Os seus dados ficam só no navegador deste dispositivo. Quem apaga os dados do navegador apaga-os também, e outro dispositivo não os vê.'
      ],
      tr: [
        'Temettü hesaplayıcısı Alman vergi hukukunu basitleştirilmiş biçimde uygular: kişisel orana göre karşılaştırma (Günstigerprüfung) yok, zarar mahsubu yok, fonlar için peşin götürü vergi (Vorabpauschale) yok. Almanya’da vergi mükellefi değilseniz “Vergileri Alman hukukuna göre düş” işaretini kaldırın.',
        'Örnek ücretler birer türdür, gerçek sağlayıcıların fiyat listeleri değildir. Sağlayıcınızın ne aldığı kendi fiyat listesinde yazar – kripto uygulamalarında maliyetin bir kısmı çoğu zaman ücrette değil fiyatın içindedir.',
        '“Alış veya satış başına ek fiyat” alışta bir kez, satışta bir kez sayılır. Sağlayıcınız bir alış-satış farkı belirtiyorsa yalnızca yarısını girin.',
        '%19 ve %7 Almanya’daki KDV oranlarıdır. Başka ülkeler için kendi oranınızı seçin.',
        'Girdikleriniz yalnızca bu cihazın tarayıcısında durur. Tarayıcı verilerini silen onları da siler ve başka bir cihaz onları görmez.'
      ],
      ru: [
        'Калькулятор дивидендов упрощённо следует немецкому налоговому праву: без сравнения с личной ставкой (Günstigerprüfung), без зачёта убытков, без авансового паушального налога (Vorabpauschale) для фондов. Если вы не платите налоги в Германии, снимите флажок «Вычесть налоги по немецкому праву».',
        'Примеры комиссий — это типы, а не тарифы настоящих провайдеров. Сколько берёт ваш провайдер, написано в его тарифах; в криптоприложениях часть расходов часто спрятана в цене, а не в комиссии.',
        '«Наценка на покупку или продажу» учитывается один раз при покупке и один раз при продаже. Если провайдер указывает спред между покупкой и продажей, введите только половину.',
        '19 % и 7 % — немецкие ставки НДС. Для других стран выберите свою ставку.',
        'Введённое хранится только в браузере этого устройства. Кто удаляет данные браузера, удаляет и его, а на другом устройстве его не видно.'
      ],
      hi: [
        'लाभांश कैलकुलेटर जर्मन कर क़ानून को सरल रूप में अपनाता है: निजी दर से तुलना (Günstigerprüfung) नहीं, घाटे का समायोजन नहीं, और फ़ंड के लिए अग्रिम एकमुश्त कर (Vorabpauschale) नहीं। अगर आप जर्मनी में कर नहीं भरते, तो “जर्मन क़ानून के अनुसार कर घटाएँ” का निशान हटा दें।',
        'उदाहरण वाले शुल्क सिर्फ़ प्रकार हैं, असली प्रदाताओं की रेट लिस्ट नहीं। आपका प्रदाता कितना लेता है, यह उसकी रेट लिस्ट में लिखा है – क्रिप्टो ऐप में लागत का एक हिस्सा अक्सर शुल्क में नहीं, भाव में छिपा होता है।',
        '“हर ख़रीद या बिक्री पर अतिरिक्त” एक बार ख़रीद पर और एक बार बिक्री पर गिना जाता है। अगर आपका प्रदाता बिड-आस्क स्प्रेड बताता है, तो सिर्फ़ उसका आधा भरें।',
        '19% और 7% जर्मनी की VAT दरें हैं। दूसरे देशों के लिए अपनी दर चुनें।',
        'आपकी प्रविष्टियाँ सिर्फ़ इसी डिवाइस के ब्राउज़र में रहती हैं। ब्राउज़र का डेटा मिटाने पर ये भी मिट जाती हैं, और दूसरे डिवाइस पर ये नहीं दिखतीं।'
      ],
      zh: [
        '股息计算器以简化方式遵循德国税法：不做与个人税率的比较（Günstigerprüfung），不做亏损抵扣，也不计基金的预缴定额税（Vorabpauschale）。如果你不在德国纳税，请取消勾选“按德国法律扣税”。',
        '示例费用只是类型，不是真实服务商的价目表。你的服务商收多少钱，请看它的价目表——在加密货币应用里，部分成本常常藏在价格里，而不在手续费里。',
        '“每次买入或卖出的加价”在买入时算一次，卖出时再算一次。如果服务商给出的是买卖价差，请只填一半。',
        '19% 和 7% 是德国的增值税税率。其他国家请选择自定义税率。',
        '你的输入只保存在这台设备的浏览器里。清除浏览器数据会一并清除它们，换一台设备也看不到。'
      ],
      ja: [
        '配当の計算はドイツの税法を簡略化して使っています。個人の税率との比較（Günstigerprüfung）、損失の通算、ファンドの前払い一括課税（Vorabpauschale）は含みません。ドイツで納税していない場合は「ドイツの法律に従って税金を差し引く」のチェックを外してください。',
        '手数料の例は型であって、実在する業者の料金表ではありません。利用先が実際にいくら取るかは、その料金表に書いてあります。暗号資産アプリでは、コストの一部が手数料ではなく価格に含まれていることがよくあります。',
        '「売買ごとの上乗せ」は、購入時と売却時にそれぞれ1回ずつかかります。利用先が売値と買値の差（スプレッド）を示している場合は、その半分だけを入れてください。',
        '19% と 7% はドイツの付加価値税率です。ほかの国では「その他」を選んで税率を入れてください。',
        '入力した内容はこの端末のブラウザーの中にだけあります。ブラウザーのデータを消すと一緒に消え、別の端末からは見えません。'
      ],
      ko: [
        '배당 계산기는 독일 세법을 단순화해서 따릅니다. 개인 세율과의 비교(Günstigerprüfung), 손실 상계, 펀드의 선납 정액세(Vorabpauschale)는 계산하지 않습니다. 독일에서 세금을 내지 않는다면 ‘독일 법에 따라 세금 공제’ 체크를 해제하세요.',
        '수수료 예시는 유형일 뿐, 실제 회사의 요금표가 아닙니다. 이용하는 곳이 얼마를 받는지는 그곳의 요금표에 나와 있습니다. 암호화폐 앱에서는 비용 일부가 수수료가 아니라 가격에 숨어 있는 경우가 많습니다.',
        '‘매수 또는 매도마다 붙는 가산액’은 매수할 때 한 번, 매도할 때 한 번 계산됩니다. 이용하는 곳이 매수·매도 호가 차이(스프레드)를 알려 준다면 절반만 넣으세요.',
        '19%와 7%는 독일의 부가가치세율입니다. 다른 나라는 ‘직접 입력’을 골라 세율을 넣으세요.',
        '입력한 내용은 이 기기의 브라우저에만 있습니다. 브라우저 데이터를 지우면 함께 지워지고, 다른 기기에서는 보이지 않습니다.'
      ]
    },
    docs: {
      de: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.de.md',
      en: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      es: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      fr: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      it: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      nl: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      pl: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      pt: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      tr: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      ru: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      hi: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      zh: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      ja: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md',
      ko: 'https://github.com/Dennismit2n/pocketsum/blob/main/README.md'
    }
  }
};
