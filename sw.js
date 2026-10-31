const CACHE_NAME = 'redevet-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/redevet/',
        '/redevet/index.html',
        '/redevet/logotipo.png',
        '/redevet/logotipo.ico',
        '/redevet/qrcode-pix.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});