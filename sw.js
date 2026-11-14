// ============================================================================
// SCAYA ULTRA-FAST SERVICE WORKER (CACHE-FIRST ДЛЯ КАРТИНОК /img/* = 0ms ЗАГРУЗКА!)
// ============================================================================

const CACHE_NAME = 'scaya-groovy-v35';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || req.url.includes('/api/')) {
    return;
  }

  // Для всех иллюстраций (/img/*.png, /img/*.jpg) используем мгновенный CACHE-FIRST (0 мс без похода в сеть!)
  if (req.url.includes('/img/') || /\.(png|jpg|jpeg|webp|ico)(\?|$)/i.test(req.url)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(req).then((cachedRes) => {
          if (cachedRes) {
            return cachedRes;
          }
          return fetch(req).then((netRes) => {
            if (netRes && netRes.status === 200) {
              cache.put(req, netRes.clone()).catch(() => {});
            }
            return netRes;
          });
        })
      )
    );
    return;
  }

  // Для HTML/JS/CSS — быстрый ответ из сети с резервом в кэше
  event.respondWith(
    fetch(req)
      .then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
        }
        return networkRes;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match('./')))
  );
});
