const CACHE_VERSION = "v3";           // bump when you ship changes
const CACHE_NAME = `mtf-${CACHE_VERSION}`;
const PRECACHE = [
  `index.html`,
  `styles.css?v=4`,
  `app.js?v=6`,
  `manifest.webmanifest?v=1`,
  `icons/icon-192.png`,
  `icons/icon-512.png`,
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(PRECACHE)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => { if (!k.startsWith("mtf-")) return caches.delete(k); }))
    ).then(()=>self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetcher = fetch(e.request).then(res => {
        try { const copy = res.clone(); caches.open(CACHE_NAME).then(c => c.put(e.request, copy)); } catch {}
        return res;
      }).catch(()=>cached);
      return cached || fetcher;
    })
  );
});
