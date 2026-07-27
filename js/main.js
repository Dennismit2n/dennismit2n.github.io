'use strict';

(function () {
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
})();
