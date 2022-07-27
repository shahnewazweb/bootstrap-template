$(document).ready(function () {
  //header slider start//
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    navText: ["PREV", "NEXT"],
    smartSpeed: 1000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });
  //header slider end//
  //project slider start//
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    margin: 24,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });
  //project slider end//

  //reviews slider//
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items:1
    
  });
  //reviews slider//
});
