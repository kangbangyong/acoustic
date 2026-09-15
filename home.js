// 각 페이지 </body> 앞에 <script src="/acoustic/home.js"></script> 한 줄만 넣으면 됨.
// 앱(전체창)으로 열렸을 때만 오른쪽 아래에 홈 버튼을 띄운다. 브라우저 탭에서는 안 보임.
(function () {
  var standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  if (!standalone || location.pathname === '/acoustic/app.html') return;
  var a = document.createElement('a');
  a.href = '/acoustic/app.html';
  a.setAttribute('aria-label', '홈');
  a.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0f283c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>';
  a.style.cssText = 'position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:99999;' +
    'width:48px;height:48px;border-radius:50%;background:#f2c14e;display:flex;align-items:center;justify-content:center;' +
    'box-shadow:0 4px 14px rgba(0,0,0,.35);text-decoration:none';
  document.body.appendChild(a);
})();
