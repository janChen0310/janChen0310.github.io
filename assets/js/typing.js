// Types out the homepage greeting one character at a time.
(function () {
  var el = document.querySelector('.typing-title');
  if (!el) return;

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Array.from keeps emoji (surrogate pairs) as single characters
  var chars = Array.from(el.textContent);
  var typed = document.createElement('span');
  var cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.textContent = '|';

  el.textContent = '';
  el.appendChild(typed);
  el.appendChild(cursor);

  var i = 0;
  (function type() {
    if (i >= chars.length) return;
    typed.textContent += chars[i++];
    setTimeout(type, 65);
  })();
})();
