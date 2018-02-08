/* 
  Register the service worker
  ---------------------------
  This code checks to see if the service worker API is available, and if it is, 
  the service worker at /sw.js is registered once the page is loaded.
*/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

/* 
  jQuery Methods
  --------------
  .click(): Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
  .scroll(): Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
  .scrollTop(): Get the current vertical position of the scroll bar for the first element in the set of matched elements.
  .fadeIn(): Display the matched elements by fading them to opaque.
  .fadeOut(): Hide the matched elements by fading them to transparent.
  .animate(): Perform a custom animation of a set of CSS properties.
*/

/* INITIALIZATION */

let viewportW = $(window).width();

if(viewportW >= 768) {
  $('.sidebar-links').collapse('show');
  $('header').addClass("sticky-top");
}
else {
  $('.sidebar-links').collapse('hide');
  $('.sidebar').addClass("sticky-top");
}  

/* EVENTS */

/* Collapse state on different viewport sizes */
$(window).resize(function() { 
  let viewportW = $(window).width();
  if(viewportW >= 768) {
    $('.sidebar-links').collapse('show');
    $('header').addClass("sticky-top");
    $('.sidebar').removeClass("sticky-top");
  }
  else {
    $('.sidebar-links').collapse('hide');
    $('header').removeClass("sticky-top");
    $('.sidebar').addClass("sticky-top");
  }
});


/* Display/Hide return to top button */
$(window).scroll(function() {
  /* Height (in pixels) of the browser window viewport including, if rendered, the horizontal scrollbar */
  var intViewportHeight = window.innerHeight;
  if($(this).scrollTop() > intViewportHeight) {
    $('#return-to-top').fadeIn(200);
  }
  else {
    $('#return-to-top').fadeOut(200);
  }
});

/* Return to top */
$('#return-to-top').click(function() {
  $('html').animate({
    // scrollTop is a property of the DOM object */
    // Return the scrollTop property: element.scrollTop
    // Set the scrollTop property: element.scrollTop = pixels
    scrollTop: 0
  }, 500);
});

/* Smooth scrolling (content navigation) */
$('.content-nav li a').click(function() {
  let viewportW = $(window).width();
  if(viewportW >= 768) {
    $('html').animate({
      /* .offset() returns an object containing the properties 'top' and 'left' */
      /* -100 to adjust for sticky header */
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 500);
  }
  else {
    $('html').animate({
      /* -60 to adjust for sticky sidebar */
      scrollTop: $($(this).attr('href')).offset().top - 60
    }, 500);
  }
});