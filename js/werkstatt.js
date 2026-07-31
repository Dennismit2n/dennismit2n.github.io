/*
 * dennismit2n.github.io — werkstatt.html
 *
 * Builds the page from news.js and guides.js. All tools sit one below the
 * other in the document (no switching), so anchors work natively and a shared
 * link lands exactly where it should. The demo of fontART links here by hand
 * (werkstatt.html#fontart) — that anchor is this section's id, so it only
 * exists as long as fontart stays in the list below.
 *
 * Rebuilt on every language change — date notation, text language and the
 * notice for the ten languages without their own texts all depend on it.
 */
'use strict';

(function () {
  // Same order as the tiles on the start page.
  var TOOLS = [
    { key: 'ram', name: 'Real_RAM_cooler', icon: './assets/ramcooler.svg',
      url: 'https://github.com/Dennismit2n/Real_RAM_cooler/releases/latest', ctaKey: 'downloadTool' },
    { key: 'shrink', name: 'shrinkling', icon: './assets/shrinkling.svg',
      url: 'https://dennismit2n.github.io/shrinkling/', ctaKey: 'openTool' },
    { key: 'wifi', nameKey: 'wifiName', icon: './assets/wifi-qr.svg',
      url: 'https://dennismit2n.github.io/wifi-qr/', ctaKey: 'openTool' },
    { key: 'collective', name: 'Collective-Calc', icon: './assets/collective-calc.svg',
      url: 'https://dennismit2n.github.io/collective-calc/', ctaKey: 'openTool' },
    { key: 'bigday', name: 'bigday', icon: './assets/bigday.svg',
      url: 'https://dennismit2n.github.io/bigday/', ctaKey: 'openTool' },
    { key: 'rad', name: 'Dreh das Rad', icon: './assets/dreh-das-rad.svg',
      url: 'https://dennismit2n.github.io/dreh-das-rad/', ctaKey: 'openTool' },
    { key: 'zaehlwerk', name: 'Zählwerk', icon: './assets/zaehlwerk.svg',
      url: 'https://dennismit2n.github.io/zaehlwerk/', ctaKey: 'openTool' },
    { key: 'fontart', name: 'fontART Designer', icon: './assets/fontart.svg',
      url: 'https://dennismit2n.github.io/fontART-demo/', ctaKey: 'openTool' }
  ];

  // Texts exist in German and English; every other language gets the English
  // version plus a notice in its own language.
  var TEXT_LANGS = { de: true, en: true };

  var navList = document.getElementById('wkNavList');
  var content = document.getElementById('wkContent');
  var notice = document.getElementById('wkLangNotice');

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text !== undefined && text !== null) { node.textContent = text; }
    return node;
  }

  function toolName(tool) {
    return tool.nameKey ? i18n.t(tool.nameKey) : tool.name;
  }

  function list(tag, className, items) {
    var wrapper = el(tag, className);
    for (var i = 0; i < items.length; i++) {
      wrapper.appendChild(el('li', null, items[i]));
    }
    return wrapper;
  }

  function arrow(sign) {
    var span = el('span', 'wk-arrow', sign);
    span.setAttribute('aria-hidden', 'true');
    return span;
  }

  function externalLink(text, url, countPath) {
    var link = el('a', 'wk-external', text);
    link.href = url;
    link.rel = 'noopener';
    if (countPath) { link.setAttribute('data-count', countPath); }
    link.appendChild(document.createTextNode(' '));
    link.appendChild(arrow('↗'));
    return link;
  }

  function buildGuide(tool, textLang, target) {
    var guide = GUIDES[tool.key];
    if (!guide) { return; }

    var heading = el('h3', 'wk-section', i18n.t('secGuide'));
    heading.id = tool.key + '-anleitung';
    target.appendChild(heading);

    target.appendChild(el('h4', 'wk-sub', i18n.t('guidePurpose')));
    target.appendChild(el('p', 'wk-text', guide.purpose[textLang]));

    // Optional, and so far only fontART has it: the tool whose full version is
    // meant to cost money needs room to say what the trial leaves out and why
    // there is a price tag at all. Several paragraphs, hence an array.
    if (guide.full) {
      target.appendChild(el('h4', 'wk-sub', i18n.t('guideFull')));
      for (var p = 0; p < guide.full[textLang].length; p++) {
        target.appendChild(el('p', 'wk-text', guide.full[textLang][p]));
      }
    }

    target.appendChild(el('h4', 'wk-sub', i18n.t('guideSteps')));
    target.appendChild(list('ol', 'wk-steps', guide.steps[textLang]));

    target.appendChild(el('h4', 'wk-sub', i18n.t('guideTrouble')));
    target.appendChild(list('ul', 'wk-pitfalls', guide.pitfalls[textLang]));

    var docs = el('p', 'wk-docs');
    docs.appendChild(externalLink(i18n.t('guideDocs'), guide.docs[textLang],
      'werkstatt-' + tool.key + '-readme'));
    target.appendChild(docs);
  }

  function buildNews(tool, textLang, lang, target) {
    var entries = NEWS[tool.key] || [];

    var heading = el('h3', 'wk-section', i18n.t('secNews'));
    heading.id = tool.key + '-neuigkeiten';
    target.appendChild(heading);

    var listEl = el('ol', 'wk-news');
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var item = el('li');

      var meta = el('p', 'wk-news-meta');
      var time = el('time', 'wk-news-date', Dates.long(entry.date, lang));
      time.setAttribute('datetime', entry.date);
      meta.appendChild(time);
      if (entry.version) {
        meta.appendChild(el('span', 'wk-news-version', entry.version));
      }
      item.appendChild(meta);

      item.appendChild(el('p', 'wk-text', entry[textLang]));

      if (entry.link) {
        var release = el('p', 'wk-docs');
        release.appendChild(externalLink(i18n.t('viewRelease'), entry.link,
          'werkstatt-' + tool.key + '-release'));
        item.appendChild(release);
      }
      listEl.appendChild(item);
    }
    target.appendChild(listEl);
  }

  function build(lang) {
    var textLang = TEXT_LANGS[lang] ? lang : 'en';
    notice.hidden = !!TEXT_LANGS[lang];

    navList.textContent = '';
    content.textContent = '';

    for (var i = 0; i < TOOLS.length; i++) {
      var tool = TOOLS[i];

      var navLink = el('a', 'wk-nav-button tool-' + tool.key);
      navLink.href = '#' + tool.key;
      var dot = el('span', 'wk-nav-dot');
      dot.setAttribute('aria-hidden', 'true');
      navLink.appendChild(dot);
      navLink.appendChild(document.createTextNode(toolName(tool)));
      navList.appendChild(navLink);

      var section = el('section', 'wk-tool tool-' + tool.key);
      section.id = tool.key;

      var head = el('header', 'wk-tool-head');
      var icon = el('img');
      icon.src = tool.icon;
      icon.alt = '';
      icon.width = 40;
      icon.height = 40;
      head.appendChild(icon);
      head.appendChild(el('h2', 'wk-tool-name', toolName(tool)));

      var cta = el('a', 'wk-tool-cta', i18n.t(tool.ctaKey));
      cta.href = tool.url;
      cta.rel = 'noopener';
      cta.setAttribute('data-count', 'werkstatt-' + tool.key + '-open');
      cta.appendChild(document.createTextNode(' '));
      cta.appendChild(arrow('→'));
      head.appendChild(cta);
      section.appendChild(head);

      var body = el('div', 'wk-body');
      buildGuide(tool, textLang, body);
      buildNews(tool, textLang, lang, body);
      section.appendChild(body);

      content.appendChild(section);
    }

    updateCurrent();
  }

  // ── Which entry the sidebar marks ──────────────────────────────────
  // Deliberately by scroll position rather than IntersectionObserver: the
  // sections differ a lot in height, and "the last one whose start has already
  // passed" is the rule that feels predictable.
  var pending = false;

  function updateCurrent() {
    pending = false;
    var buttons = navList.querySelectorAll('.wk-nav-button');
    var sections = content.querySelectorAll('.wk-tool');
    if (!buttons.length) { return; }

    var active = 0;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= 130) { active = i; }
    }
    // At the very bottom the last section wins, even if it is short.
    if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight - 4) {
      active = sections.length - 1;
    }
    for (var k = 0; k < buttons.length; k++) {
      if (k === active) {
        buttons[k].setAttribute('aria-current', 'true');
      } else {
        buttons[k].removeAttribute('aria-current');
      }
    }
  }

  window.addEventListener('scroll', function () {
    if (pending) { return; }
    pending = true;
    window.requestAnimationFrame(updateCurrent);
  }, { passive: true });

  // Once everything has loaded the layout is final — and by then the browser
  // has settled on its scroll position, whether that came from the anchor
  // below or from restoring the previous one.
  window.addEventListener('load', updateCurrent);

  // ── Start ──────────────────────────────────────────────────────────
  i18n.onApply(build);
  Header.init();

  // The browser looked for the anchor in vain while loading — the sections
  // only exist now. So jump there afterwards, and mark the sidebar by hand:
  // waiting for the scroll event would leave the wrong entry marked in a tab
  // that is not being painted yet.
  if (location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      target.scrollIntoView();
      updateCurrent();
    }
  }
})();
