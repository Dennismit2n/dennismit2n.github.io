/*
 * dennismit2n.github.io — mods.html
 *
 * Füllt die Prompts der fünf Mods in der Sprache der Seite (Platzhalter in
 * i18n modsPrompt), setzt die Bildbeschreibungen (data-i18n-alt, das i18n.js
 * selbst nicht kennt) und bedient die Kopierknöpfe. Wie main.js: erst den
 * Hörer anmelden, dann Header.init(), das die erste Übersetzung anstößt.
 */
'use strict';

(function () {
  var MARKET = 'Dennismit2n/werkstatt-mods';

  // Die Mods können nur Deutsch und Englisch; jede andere Seitensprache
  // bekommt den englischen Mod.
  function modLang(lang) { return lang === 'de' ? 'de' : 'en'; }

  function fillPrompts(lang) {
    var code = modLang(lang);
    var mods = document.querySelectorAll('details.mod');
    for (var i = 0; i < mods.length; i++) {
      var el = mods[i];
      var name = el.getAttribute('data-mod');
      var commands = el.getAttribute('data-commands') || '';
      var line = 'claude plugin install ' + name + ' --marketplace ' + MARKET + ' --config language=' + code;
      var text = i18n.t('modsPrompt')
        .replace('{name}', name)
        .replace('{line}', line)
        .replace('{commands}', commands)
        .replace('{lang}', code);
      var slot = el.querySelector('[data-prompt]');
      if (slot) { slot.textContent = text; }
    }
    var alts = document.querySelectorAll('[data-i18n-alt]');
    for (var a = 0; a < alts.length; a++) {
      alts[a].setAttribute('alt', i18n.t(alts[a].getAttribute('data-i18n-alt')));
    }
  }

  i18n.onApply(fillPrompts);
  Header.init();
  document.documentElement.classList.remove('i18n-wartet');

  // ── Kopierknöpfe ─────────────────────────────────────────────────
  function fallbackCopy(text) {
    var box = document.createElement('textarea');
    box.value = text;
    box.setAttribute('readonly', '');
    box.style.position = 'fixed';
    box.style.opacity = '0';
    document.body.appendChild(box);
    box.select();
    try { document.execCommand('copy'); } catch (e) { /* dann bleibt nur Markieren von Hand */ }
    document.body.removeChild(box);
  }

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.copy-btn');
    if (!btn) { return; }
    var box = btn.closest('.mod-code, .mods-all');
    var code = box && box.querySelector('code');
    if (!code) { return; }
    var text = code.textContent;
    var label = btn.querySelector('span');
    var done = function () {
      btn.classList.add('is-copied');
      if (label) { label.textContent = i18n.t('modsCopied'); }
      setTimeout(function () {
        btn.classList.remove('is-copied');
        if (label) { label.textContent = i18n.t('modsCopy'); }
      }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text);
      done();
    }
  });
})();
