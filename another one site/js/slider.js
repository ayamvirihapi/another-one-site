$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  });
});


/**/