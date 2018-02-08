// SERVICE WORKER SCRIPT

var cacheName = 'html5tech-cache';

// Files to cache
// Beware that index.html may also be requested as /
var filesToCache = ['/', '/index.html'];

// When the service worker is registered, an 'install' event is triggered the 
// first time the user visits the page
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    // Open cache
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      // Takes a list of URLs, then fetches them from the server and adds the 
      // response to the cache. This method is atomic and if any of the files 
      // fail, the entire cache step fails
      return cache.addAll(filesToCache);
    })
  );
});

// The 'activate' event is fired when the service worker starts up
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  // Logic to update the cache whenever any of the app shell files change
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// We've cached the app shell components, but we still need to load them from 
// the local cache.
self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    // Evaluate the web request to see if it's available in the cache. It then 
    // either responds with the cached version, or uses fetch to get a copy from 
    // the network. The response is passed back to the web page with 
    // e.respondWith().
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});