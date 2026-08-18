/* AC 시리즈 — 시트 키보드 이동
   ← →  이전 / 다음 등급      Esc  목록으로 */
(function () {
  var bar = document.querySelector('.acnav');
  if (!bar) return;
  var links = bar.querySelectorAll('.acnav-move a');
  var prev = null, next = null;
  for (var i = 0; i < links.length; i++) {
    if (links[i].textContent.indexOf('←') > -1) prev = links[i].getAttribute('href');
    if (links[i].textContent.indexOf('→') > -1) next = links[i].getAttribute('href');
  }
  document.addEventListener('keydown', function (e) {
    var t = e.target.tagName;
    if (t === 'INPUT' || t === 'TEXTAREA' || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowLeft'  && prev) { e.preventDefault(); location.href = prev; }
    if (e.key === 'ArrowRight' && next) { e.preventDefault(); location.href = next; }
    if (e.key === 'Escape') { location.href = '../index.html'; }
  });
})();
