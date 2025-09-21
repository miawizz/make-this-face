const CACHE_VERSION = "v2";
const CACHE_NAME = `mtf-${CACHE_VERSION}`;
const SCOPE = "/make-this-face/";
const PRECACHE = [
  `${SCOPE}index.html`,
  `${SCOPE}styles.css?v=3`,
  `${SCOPE}app.js?v=5`,
  `${SCOPE}manifest.webmanifest?v=1`,
  `${SCOPE}icons/icon-192.png`,
  `${SCOPE}icons/icon-512.png`
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => { if (!k.startsWith("mtf-")) return caches.delete(k); }))
    ).then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.method !== "GET") return;
  event.respondWith(
    caches.match(request).then(cached => {
      const fetchPromise = fetch(request).then(response => {
        try {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        } catch {}
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
