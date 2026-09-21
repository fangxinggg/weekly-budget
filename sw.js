// Weekly Budget service worker — makes the app work offline.
// When you change index.html, bump the version below so phones pick up the update.
const CACHE = 'weekly-budget-v2';
const CHART_JS = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.js';
const FONTS_CSS = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&display=swap';
const ASSETS = [FONTS_CSS, './', './index.html', './manifest.webmanifest',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', CHART_JS];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c =>
    Promise.all(ASSETS.map(url => c.add(url).catch(() => {})))   // one failure shouldn't block install
  ).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Stale-while-revalidate: answer instantly from cache, refresh the cache in the background.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const fontHost = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (url.origin !== location.origin && req.url !== CHART_JS && !fontHost) return;
  e.respondWith(caches.open(CACHE).then(async (cache) => {
    const cached = await cache.match(req, {ignoreSearch: !fontHost}) ||
                   (req.mode === 'navigate' ? await cache.match('./index.html') || await cache.match('./') : null);
    const network = fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    }).catch(() => cached);
    return cached || network;
  }));
});
