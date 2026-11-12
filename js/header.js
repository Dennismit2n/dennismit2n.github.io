/*
 * dennismit2n.github.io — shared page header
 *
 * index.html and werkstatt.html build the appearance and language dropdowns
 * the same way, so the code lives here instead of twice: whoever touches the
 * theme values should have to touch them in one place only.
 *
 * Header.init() ends by calling i18n.apply(). Pages that build content from
 * data register with i18n.onApply() BEFORE calling init().
 */
'use strict';

var Header = (function () {
  // One choice for the whole workshop (31.10.2026): every tool lives on the
  // same origin, so they all read and write this key. The old key of this
  // site is only read as a fallback, so a choice made before still counts.
  // The inline snippet in the <head> of each page does the same resolving
  // before the first paint — keep both in step.
  var THEME_KEY = 'werkstatt.darstellung';
  var OLD_THEME_KEY = 'dennismit2n-home.theme';
  var THEMES = ['system', 'light', 'dark', 'hc-dark', 'hc-light', 'cvd-dark', 'cvd-light', 'invert'];

  // Values from other tools that this page does not know (Spectroton has
  // its own "soft-dark") count as their nearest family.
  function normalise(value) {
    if (THEMES.indexOf(value) >= 0) { return value; }
    if (/dark/.test(value || '')) { return 'dark'; }
    if (/light/.test(value || '')) { return 'light'; }
    return 'system';
  }

  function storedTheme() {
    try {
      return normalise(localStorage.getItem(THEME_KEY) || localStorage.getItem(OLD_THEME_KEY));
    } catch (e) { /* storage may be unavailable */ }
    return 'system';
  }

  function media(query) {
    return !!(window.matchMedia && window.matchMedia(query).matches);
  }

  // data-theme carries light/dark as before, data-vision the three aids.
  // High contrast and colour-blind always come with a fixed data-theme, also
  // when "System" follows the device's "increase contrast".
  function showTheme(value) {
    var theme = null;
    var vision = null;
    if (value === 'light' || value === 'dark') {
      theme = value;
    } else if (value === 'hc-dark' || value === 'hc-light') {
      theme = value.slice(3); vision = 'contrast';
    } else if (value === 'cvd-dark' || value === 'cvd-light') {
      theme = value.slice(4); vision = 'cvd';
    } else if (value === 'invert') {
      vision = 'invert';
    } else if (media('(prefers-contrast: more)')) {
      theme = media('(prefers-color-scheme: dark)') ? 'dark' : 'light';
      vision = 'contrast';
    }
    var root = document.documentElement;
    if (theme) { root.setAttribute('data-theme', theme); } else { root.removeAttribute('data-theme'); }
    if (vision) { root.setAttribute('data-vision', vision); } else { root.removeAttribute('data-vision'); }
  }

  function initTheme() {
    // The inline snippet in <head> already applied a stored choice before the
    // first paint; all that is left here is building the dropdown.
    var themeSelect = document.getElementById('themeSelect');
    if (!themeSelect) { return; }

    var themeOptions = [
      { value: 'system', i18n: 'themeSystem' },
      { value: 'light', i18n: 'themeLight' },
      { value: 'dark', i18n: 'themeDark' },
      { value: 'hc-dark', i18n: 'themeHcDark' },
      { value: 'hc-light', i18n: 'themeHcLight' },
      { value: 'cvd-dark', i18n: 'themeCvdDark' },
      { value: 'cvd-light', i18n: 'themeCvdLight' },
      { value: 'invert', i18n: 'themeInvert' }
    ];
    for (var t = 0; t < themeOptions.length; t++) {
      var themeOpt = document.createElement('option');
      themeOpt.value = themeOptions[t].value;
      themeOpt.setAttribute('data-i18n', themeOptions[t].i18n);
      themeSelect.appendChild(themeOpt);
    }

    themeSelect.value = storedTheme();

    themeSelect.addEventListener('change', function () {
      var value = themeSelect.value;
      showTheme(value);
      try { localStorage.setItem(THEME_KEY, value); } catch (err) { /* ignore */ }
    });

    // "System" follows the device live, also for "increase contrast".
    if (window.matchMedia) {
      var follow = function () { if (storedTheme() === 'system') { showTheme('system'); } };
      var queries = ['(prefers-color-scheme: dark)', '(prefers-contrast: more)'];
      for (var q = 0; q < queries.length; q++) {
        var list = window.matchMedia(queries[q]);
        if (list.addEventListener) { list.addEventListener('change', follow); }
        else if (list.addListener) { list.addListener(follow); }
      }
    }

    // A choice made in another tab of the workshop (any tool) shows here too.
    window.addEventListener('storage', function (event) {
      if (event.key !== THEME_KEY) { return; }
      var value = storedTheme();
      showTheme(value);
      themeSelect.value = value;
    });
  }

  function initLang() {
    var select = document.getElementById('langSelect');
    if (!select) { return; }

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
  }

  // Coming back to a page. Both dropdowns carry autocomplete="off" in the
  // HTML: without it Chrome refilled them after the back button with the
  // values of the earlier visit, while the page already showed the stored
  // language and appearance. From the back/forward cache, though, the page
  // returns exactly as it was left — even if both were changed on the other
  // page meanwhile — so take the stored choice again. That also rights the
  // dropdowns should a browser reset them on the way back, as the HTML spec
  // asks for fields with autocomplete="off".
  function initReturn() {
    window.addEventListener('pageshow', function (event) {
      if (!event.persisted) { return; }
      var theme = storedTheme();
      showTheme(theme);
      var themeSelect = document.getElementById('themeSelect');
      if (themeSelect) { themeSelect.value = theme; }

      var select = document.getElementById('langSelect');
      if (!select) { return; }
      var lang = i18n.detect();
      select.value = lang;
      if (lang !== i18n.lang) { i18n.apply(lang); }
    });
  }

  // GoatCounter, since 12.11.2026 for tile clicks ONLY (Dennis' wish: nothing
  // else, and nothing at all in the apps, PWAs and programs).
  // - count.js is loaded on index.html and gaming.html only, the two pages
  //   with tiles, and with no_onload: it never counts a page view by itself.
  //   The only thing that reaches GoatCounter is what count() sends.
  // - count() sends nothing whose name does not match the tile scheme:
  //   "kachel-<tool>" for the tile itself (its stretched .tool-open link),
  //   "kachel-<tool>-<part>" for a mini tile inside it (news, anleitung,
  //   bilder, readme, overview, windows). <tool> is the tool-<tool> class of
  //   the card. Besucher-Ticker 1.3.0 groups by exactly this scheme.
  // - Only links inside a .tool-card are looked at. A data-count anywhere else
  //   would still not be counted.
  // Without count.js (werkstatt.html, mods.html) count() returns at once.
  var TILE_COUNT = /^kachel-[a-z]+(-[a-z]+)?$/;

  function count(path, title) {
    if (!TILE_COUNT.test(path || '')) { return; }
    if (!window.goatcounter || !window.goatcounter.count) { return; }
    window.goatcounter.count({ path: path, title: title || path, event: true });
  }

  function initCounting() {
    // One listener on the document instead of one per link. The title is the
    // tool name on the card, the same for the tile and its mini tiles, so the
    // dashboard (and the ticker) can name every tile. A name that gets
    // translated (WiFi QR Card) carries data-count-title with a fixed name,
    // otherwise the title would change with the visitor's language.
    function onClick(event) {
      // auxclick: the middle button opens a link in a new tab and fires no
      // click event. Right-click "open in new tab" cannot be seen at all.
      if (event.type === 'auxclick' && event.button !== 1) { return; }
      var link = event.target && event.target.closest ? event.target.closest('a[data-count]') : null;
      var card = link ? link.closest('.tool-card') : null;
      if (!card) { return; }
      var nameEl = card.querySelector('.tool-name');
      var title = nameEl ? (nameEl.getAttribute('data-count-title') || nameEl.textContent.trim()) : '';
      count(link.getAttribute('data-count'), title);
    }
    document.addEventListener('click', onClick);
    document.addEventListener('auxclick', onClick);
  }

  function init() {
    initTheme();
    initCounting();
    initLang();
    initReturn();
  }

  return { init: init, count: count };
})();
