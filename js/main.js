'use strict';

(function () {
  // ── Date on the "News" mini tile ──────────────────────────────────
  // The date shown is that of the newest entry in news.js — filled in
  // automatically, so nobody has to think about it when an entry is added.
  // news.js only arrives after the first translation (see below). Until
  // then every slot holds a hidden stand-in date in the same notation: day
  // and month have two digits and the digits are tabular, so the real date
  // later takes exactly the same room and "Guide" next to it does not move.
  // Only Spanish drops the leading zeros ("23/9"); "10/1" is the middle of
  // two to four digits, so there it is off by one digit at most (~7 px).
  var miniRows = document.querySelectorAll('.tool-mini');
  var newsSrc = document.currentScript && document.currentScript.getAttribute('data-news');
  var newsPending = typeof NEWS === 'undefined' && !!newsSrc;
  var STAND_IN = '2000-01-10';

  // data-tool may name several keys, separated by spaces (the Gaming tile
  // collects craftionary, vault, ruestkammer and fadenkreuz). Their entries
  // are merged, newest first.
  function collect(keys) {
    var all = [];
    if (typeof NEWS === 'undefined') { return all; }
    var list = String(keys || '').split(' ');
    for (var k = 0; k < list.length; k++) {
      var entries = NEWS[list[k]] || [];
      for (var e = 0; e < entries.length; e++) {
        all.push({ key: list[k], entry: entries[e], order: all.length });
      }
    }
    all.sort(function (a, b) {
      return a.entry.date < b.entry.date ? 1 : a.entry.date > b.entry.date ? -1 : a.order - b.order;
    });
    return all;
  }

  function fillDates(lang) {
    for (var i = 0; i < miniRows.length; i++) {
      var slot = miniRows[i].querySelector('.tool-mini-date');
      if (!slot) { continue; }
      if (newsPending) {
        slot.textContent = Dates.short(STAND_IN, lang);
        slot.style.visibility = 'hidden';
        continue;
      }
      var all = collect(miniRows[i].getAttribute('data-tool'));
      slot.textContent = all.length ? Dates.short(all[0].entry.date, lang) : '';
      slot.style.visibility = '';
    }
    fillNewsList(lang);
  }

  // ── News list on gaming.html (#neuigkeiten) ───────────────────────
  // The newest entries of the keys in data-news-keys, each with the tool's
  // name (taken from its tile on the same page) linking to its full list on
  // werkstatt.html. Hidden while news.js is missing.
  function fillNewsList(lang) {
    var list = document.querySelector('[data-news-keys]');
    if (!list) { return; }
    var box = list.closest('#neuigkeiten');
    var all = newsPending ? [] : collect(list.getAttribute('data-news-keys'));
    all = all.slice(0, Number(list.getAttribute('data-news-max')) || all.length);
    // Stays in place while news.js is still loading, so a jump to
    // #neuigkeiten finds it; only an empty result hides it.
    box.hidden = !newsPending && !all.length;
    list.textContent = '';
    for (var i = 0; i < all.length; i++) {
      var entry = all[i].entry;
      var item = document.createElement('li');
      var meta = document.createElement('p');
      meta.className = 'wk-news-meta';
      var time = document.createElement('time');
      time.className = 'wk-news-date';
      time.setAttribute('datetime', entry.date);
      time.textContent = Dates.long(entry.date, lang);
      meta.appendChild(time);
      var nameEl = document.getElementById('name-' + all[i].key);
      var tool = document.createElement('a');
      tool.className = 'wk-news-version';
      tool.href = './werkstatt.html#' + all[i].key + '-neuigkeiten';
      tool.setAttribute('data-count', 'werkstatt-' + all[i].key + '-news');
      tool.textContent = nameEl ? nameEl.textContent : all[i].key;
      meta.appendChild(tool);
      item.appendChild(meta);
      var text = document.createElement('p');
      text.className = 'wk-text';
      text.textContent = entry[lang] || entry.en;
      item.appendChild(text);
      list.appendChild(item);
    }
  }

  i18n.onApply(fillDates);

  // ── Header: appearance and language ───────────────────────────────
  Header.init();
  // Translated now: show what the snippet in <head> hid (.i18n-wartet).
  document.documentElement.classList.remove('i18n-wartet');

  // ── news.js: only after the first translation ─────────────────────
  // As a plain script tag it shared the slow line with i18n.js and held up
  // the translation by about half a second (Fast 3G, local test). If it
  // fails, the slots are simply emptied, as they were before.
  if (newsPending) {
    var newsScript = document.createElement('script');
    newsScript.src = newsSrc;
    newsScript.onload = newsScript.onerror = function () {
      newsPending = false;
      fillDates(i18n.lang);
      // The list only got its height now: land on it again after a jump.
      var target = location.hash === '#neuigkeiten' && document.getElementById('neuigkeiten');
      if (target && !target.hidden) { target.scrollIntoView(); }
    };
    document.body.appendChild(newsScript);
  }

  // ── GoatCounter: count tile clicks as events ──────────────────────
  // Shows up in the dashboard as "kachel-ram", "kachel-shrink", … so we can
  // see which tool actually gets picked up, not just page views.
  // The listener sits on the stretched link, NOT on the whole tile: since the
  // mini tiles moved inside the card, a listener on the tile would count every
  // click on "News" or "Guide" as a tool click too. Those two count themselves
  // via data-count, handled by Header.init().
  var opens = document.querySelectorAll('.tool-card .tool-open');
  for (var c = 0; c < opens.length; c++) {
    opens[c].addEventListener('click', function () {
      var card = this.closest('.tool-card');
      var tool = (card.className.match(/tool-(?!card)([a-z]+)/) || [])[1] || 'unbekannt';
      var nameEl = card.querySelector('.tool-name');
      Header.count('kachel-' + tool, nameEl ? nameEl.textContent : tool);
    });
  }
})();
