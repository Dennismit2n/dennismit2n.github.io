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

  function fillDates(lang) {
    for (var i = 0; i < miniRows.length; i++) {
      var key = miniRows[i].getAttribute('data-tool');
      var slot = miniRows[i].querySelector('.tool-mini-date');
      if (!slot) { continue; }
      if (newsPending) {
        slot.textContent = Dates.short(STAND_IN, lang);
        slot.style.visibility = 'hidden';
        continue;
      }
      var entries = (typeof NEWS !== 'undefined' && NEWS[key]) || [];
      slot.textContent = entries.length ? Dates.short(entries[0].date, lang) : '';
      slot.style.visibility = '';
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
