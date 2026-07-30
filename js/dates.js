/*
 * dennismit2n.github.io — date display
 *
 * news.js stores dates as ISO strings (2026-07-29); they are shown in the
 * notation of the selected language.
 *
 * Careful: new Date('2026-07-29') is read as midnight UTC, so west of
 * Greenwich the previous day would appear. Hence a local date is built by hand.
 */
'use strict';

var Dates = (function () {
  function local(iso) {
    var parts = String(iso).split('-');
    return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  }

  function format(iso, lang, options, fallback) {
    var date = local(iso);
    try {
      return new Intl.DateTimeFormat(lang, options).format(date);
    } catch (e) {
      return fallback(date);
    }
  }

  // Long: "29. Juli 2026" — for werkstatt.html.
  function long(iso, lang) {
    return format(iso, lang, { day: 'numeric', month: 'long', year: 'numeric' }, function (d) {
      return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    });
  }

  // Short: "29.07." — for the line under a tile, where every character counts.
  function short(iso, lang) {
    return format(iso, lang, { day: '2-digit', month: '2-digit' }, function (d) {
      return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.';
    });
  }

  return { long: long, short: short };
})();
