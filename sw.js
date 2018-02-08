/* SERVICE WORKER SCRIPT */ 

var cacheName = 'html5tech-cache';

var filesToCache = [];

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