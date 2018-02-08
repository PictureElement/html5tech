/* SERVICE WORKER SCRIPT */ 

var CACHE_NAME = 'my-site-cache-v1';

var urlsToCache = [
  '/',
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
  'objects.html',
  'demos/1-1.html',
  'demos/1-2.html',
  'demos/2-1.html',
  'demos/2-2.html',
  'demos/3.html',
  'demos/4.html',
  'demos/5.html',
  'demos/6-1.html',
  'demos/6-2.html',
  'demos/7-1.html',
  'demos/7-2.html',
  'demos/8-1.html',
  'demos/8-2.html',
  'demos/9-1.html',
  'demos/9-2.html',
  'demos/10.html',
  'demos/11.html',
  'demos/12-1.html',
  'demos/12-2.html',
  'demos/13-1.html',
  'demos/13-2.html',
  'demos/js/2.js',
  'demos/js/3.js',
  'demos/js/5.js',
  'images/icon-512x512.png'
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