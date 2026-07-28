'use strict';

(function () {
  // ── Theme: System / Light / Dark ──────────────────────────────────
  // The head snippet already applied a stored choice before first
  // paint; here we just build the dropdown and wire it up.
  var THEME_KEY = 'dennismit2n-home.theme';
  var themeSelect = document.getElementById('themeSelect');
  var themeOptions = [
    { value: 'system', i18n: 'themeSystem' },
    { value: 'light', i18n: 'themeLight' },
    { value: 'dark', i18n: 'themeDark' }
  ];
  for (var t = 0; t < themeOptions.length; t++) {
    var themeOpt = document.createElement('option');
    themeOpt.value = themeOptions[t].value;
    themeOpt.setAttribute('data-i18n', themeOptions[t].i18n);
    themeSelect.appendChild(themeOpt);
  }

  var storedTheme = 'system';
  try {
    var savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') { storedTheme = savedTheme; }
  } catch (e) { /* storage may be unavailable */ }
  themeSelect.value = storedTheme;

  function applyTheme(value) {
    if (value === 'light' || value === 'dark') {
      document.documentElement.setAttribute('data-theme', value);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem(THEME_KEY, value); } catch (e) { /* ignore */ }
  }

  themeSelect.addEventListener('change', function () {
    applyTheme(themeSelect.value);
  });

  // ── Language ──────────────────────────────────────────────────────
  var select = document.getElementById('langSelect');
  var codes = Object.keys(I18N);
  for (var i = 0; i < codes.length; i++) {
    var opt = document.createElement('option');
    opt.value = codes[i];
    opt.textContent = I18N[codes[i]]._name;
    select.appendChild(opt);
  }

  var initial = i18n.detect();
  select.value = initial;
  i18n.apply(initial);

  select.addEventListener('change', function () {
    i18n.apply(select.value);
  });

  // ── GoatCounter: count tile clicks as events ──────────────────────
  // Shows up in the dashboard as "kachel-ram", "kachel-shrink", … so we
  // can see which tool actually gets picked up, not just page views.
  var cards = document.querySelectorAll('.tool-card');
  for (var c = 0; c < cards.length; c++) {
    cards[c].addEventListener('click', function () {
      if (!window.goatcounter || !window.goatcounter.count) { return; }
      var tool = (this.className.match(/tool-(?!card)([a-z]+)/) || [])[1] || 'unbekannt';
      var nameEl = this.querySelector('.tool-name');
      window.goatcounter.count({
        path: 'kachel-' + tool,
        title: nameEl ? nameEl.textContent : tool,
        event: true
      });
    });
  }
})();
