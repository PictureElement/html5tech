/* SERVICE WORKER SCRIPT */ 

var CACHE_NAME = 'my-site-cache-v1';

/* Files to be cached */
var urlsToCache = [
  '/css/style.css',
  '/script/site.js',
  './data-realated.html',
  './introduction.html'
];

/* 
  If all the files are successfully cached, then the service worker will be 
  installed. If any of the files fail to download, then the install step will 
  fail. You need to be careful with the list of files you decide to cache in the 
  install step. Defining a long list of files will increase the chance that one 
  file may fail to cache, leading to your service worker not getting installed.
*/ 
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});