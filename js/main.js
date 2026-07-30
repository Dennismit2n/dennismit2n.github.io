'use strict';

(function () {
  // ── Date on the "News" mini tile ──────────────────────────────────
  // The date shown is that of the newest entry in news.js — filled in
  // automatically, so nobody has to think about it when an entry is added.
  var miniRows = document.querySelectorAll('.tool-mini');

  function fillDates(lang) {
    for (var i = 0; i < miniRows.length; i++) {
      var key = miniRows[i].getAttribute('data-tool');
      var slot = miniRows[i].querySelector('.tool-mini-date');
      if (!slot) { continue; }
      var entries = (typeof NEWS !== 'undefined' && NEWS[key]) || [];
      slot.textContent = entries.length ? Dates.short(entries[0].date, lang) : '';
    }
  }

  i18n.onApply(fillDates);

  // ── Header: appearance and language ───────────────────────────────
  Header.init();

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
