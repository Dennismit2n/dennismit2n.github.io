'use strict';

(function () {
  // ── Date in the line under each tile ──────────────────────────────
  // That line is a SIBLING of the tile, not part of it: the tile is one <a>,
  // and links inside links are invalid HTML. The date shown is that of the
  // newest entry in news.js — filled in automatically, so nobody has to think
  // about it when an entry is added.
  var linkRows = document.querySelectorAll('.tool-links');

  function fillDates(lang) {
    for (var i = 0; i < linkRows.length; i++) {
      var key = linkRows[i].getAttribute('data-tool');
      var slot = linkRows[i].querySelector('.tool-links-date');
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
  // see which tool actually gets picked up, not just page views. The links in
  // the line below are counted via data-count, handled by Header.init().
  var cards = document.querySelectorAll('.tool-card');
  for (var c = 0; c < cards.length; c++) {
    cards[c].addEventListener('click', function () {
      var tool = (this.className.match(/tool-(?!card)([a-z]+)/) || [])[1] || 'unbekannt';
      var nameEl = this.querySelector('.tool-name');
      Header.count('kachel-' + tool, nameEl ? nameEl.textContent : tool);
    });
  }
})();
