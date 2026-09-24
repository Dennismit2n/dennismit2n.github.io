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
  var THEME_KEY = 'dennismit2n-home.theme';

  function storedTheme() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') { return saved; }
    } catch (e) { /* storage may be unavailable */ }
    return 'system';
  }

  function showTheme(value) {
    if (value === 'light' || value === 'dark') {
      document.documentElement.setAttribute('data-theme', value);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  function initTheme() {
    // The inline snippet in <head> already applied a stored choice before the
    // first paint; all that is left here is building the dropdown.
    var themeSelect = document.getElementById('themeSelect');
    if (!themeSelect) { return; }

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

    themeSelect.value = storedTheme();

    themeSelect.addEventListener('change', function () {
      var value = themeSelect.value;
      showTheme(value);
      try { localStorage.setItem(THEME_KEY, value); } catch (err) { /* ignore */ }
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

  // GoatCounter (anonymous, cookieless — disclosed in the footer). Anything
  // carrying a data-count attribute is counted under exactly that name, so the
  // HTML says what is being counted instead of it being guessed from classes.
  function count(path, title) {
    if (!window.goatcounter || !window.goatcounter.count) { return; }
    window.goatcounter.count({ path: path, title: title || path, event: true });
  }

  function initCounting() {
    // One listener on the document: werkstatt.html rebuilds its links on every
    // language change, and re-binding them each time would be easy to forget.
    document.addEventListener('click', function (event) {
      var node = event.target;
      while (node && node !== document.body) {
        if (node.getAttribute && node.getAttribute('data-count')) {
          count(node.getAttribute('data-count'));
          return;
        }
        node = node.parentNode;
      }
    });
  }

  function init() {
    initTheme();
    initCounting();
    initLang();
    initReturn();
  }

  return { init: init, count: count };
})();
