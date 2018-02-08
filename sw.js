/* SERVICE WORKER SCRIPT */ 

var CACHE_NAME = 'my-site-cache-v1';

var urlsToCache = [
  'css/style.css',
  'js/site.js',
  'classes.html',
  'data-related.html',
  'dom.html',
  'dom-manipulation.html',
  'events.html',
  'expressions-and-operators.html',
  'flow-control.html',
  'function-related.html',
  'functions.html',
  'index.html',
  'introduction.html',
  'object-related.html',
  'objects.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});