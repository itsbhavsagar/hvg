$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1, // Number of items to display in the carousel
    loop: true, // Infinite loop
    autoplay: true, // Auto-play the carousel
    autoplayTimeout: 3000, // Auto-play interval in milliseconds (3 seconds in this example)
    autoplayHoverPause: true, // Pause auto-play when hovering over the carousel
  });
});

// $(document).ready(function () {
//   var $carousel = $('.owl-carousel').owlCarousel({
//     items: 1, // Number of items to display in the carousel
//     loop: true, // Infinite loop
//     autoplay: true, // Auto-play the carousel
//     autoplayTimeout: 3000, // Auto-play interval in milliseconds (3 seconds in this example)
//     autoplayHoverPause: true, // Pause auto-play when hovering over the carousel
//     dots: true, // Show dots navigation
//     dotsContainer: '.owl-dots', // Define the dots container
//   });

//   // Update active state of dots on slide change
//   $carousel.on('changed.owl.carousel', function (event) {
//     var currentItemIndex = event.item.index % event.item.count;
//     $('.owl-dot').removeClass('active');
//     $('.owl-dot').eq(currentItemIndex).addClass('active');
//   });
// });
