// Grid-A 4U 방음 PWA — /acoustic/ 범위만 제어. 정적 파일만 캐시, AppsScript 등 외부 통신은 절대 캐시하지 않음.
const CACHE = 'grida-acoustic-v7';
const SHELL = ['app.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/ci-wide.png', 'home.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;                       // POST(접수 저장 등)은 건드리지 않음
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;             // 구글 스크립트·폰트 등 외부는 그대로
  // 네트워크 우선, 실패 시 캐시 (페이지가 자주 바뀌므로)
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req))
  );
});
