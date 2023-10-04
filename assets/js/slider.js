/*=============== Slick===============*/

$(document).ready(function() {
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      appendArrows: $(".custom-arrows"),
      prevArrow: '<div class="container_prev"><button class="slick-prev">‹</button></div>',
      nextArrow: '<div class="container_next"><button class="slick-next">›</button></div>',
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 4.5,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 3.5,
            infinite: false,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
            infinite: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
      ]
    });
  });