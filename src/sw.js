// SERVICE WORKER SCRIPT

var cacheName = 'html5tech-cache';

// Files to cache
// Beware that index.html may also be requested as /
var filesToCache = [
  '/html5tech/',
  '/html5tech/index.html',
  '/html5tech/classes.html',
  '/html5tech/data-related.html',
  '/html5tech/dom.html',
  '/html5tech/dom-manipulation.html',
  '/html5tech/expressions-and-operators.html',
  '/html5tech/flow-control.html',
  '/html5tech/function-related.html',
  '/html5tech/functions.html',
  '/html5tech/introduction.html',
  '/html5tech/object-related.html',
  '/html5tech/objects.html',


  '/html5tech/css/style.css',
  '/html5tech/css/prettify.css',
  '/html5tech/css/bootstrap.min.css',

  '/html5tech/js/site.js',
  '/html5tech/js/bootstrap.min.js',
  '/html5tech/js/jquery.min.js',
  '/html5tech/js/popper.min.js',
  '/html5tech/js/run_prettify.js',

  '/html5tech/demos/js/2.js',
  '/html5tech/demos/js/3.js',
  '/html5tech/demos/js/5.js',
  '/html5tech/demos/1-1.html',
  '/html5tech/demos/1-2.html',
  '/html5tech/demos/2-1.html',
  '/html5tech/demos/2-2.html',
  '/html5tech/demos/3.html',
  '/html5tech/demos/4.html',
  '/html5tech/demos/5.html',
  '/html5tech/demos/6-1.html',
  '/html5tech/demos/6-2.html',
  '/html5tech/demos/7-1.html',
  '/html5tech/demos/7-2.html',
  '/html5tech/demos/8-1.html',
  '/html5tech/demos/8-2.html',
  '/html5tech/demos/9-1.html',
  '/html5tech/demos/9-2.html',
  '/html5tech/demos/10.html',
  '/html5tech/demos/11.html',
  '/html5tech/demos/12-1.html',
  '/html5tech/demos/12-2.html',
  '/html5tech/demos/13-1.html',
  '/html5tech/demos/13-2.html',

  '/html5tech/images/150x100.png',
  '/html5tech/images/100x100.png',
  '/html5tech/images/agpl-v3.svg',
  '/html5tech/images/cc-by-sa-4.svg',

  '/html5tech/fonts/audiowide-v6-latin-regular.eot',
  '/html5tech/fonts/audiowide-v6-latin-regular.eot?#iefix',
  '/html5tech/fonts/audiowide-v6-latin-regular.woff2',
  '/html5tech/fonts/audiowide-v6-latin-regular.woff',
  '/html5tech/fonts/audiowide-v6-latin-regular.ttf',
  '/html5tech/fonts/audiowide-v6-latin-regular.svg#Audiowide',

  '/html5tech/svg-with-js/css/fa-svg-with-js.css',
  '/html5tech/svg-with-js/js/fontawesome-all.min.js'
];

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
