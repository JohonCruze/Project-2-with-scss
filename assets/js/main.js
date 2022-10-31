$(document).ready(function () {
  $('.project-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('#nav').onePageNav({
    currentClass: 'active',
  });

  $('.video').magnificPopup({
    type: 'iframe'
  });

  $('.counter').counterUp();

  $('.testimonial').slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
    dots: true
  });

  $('.ripple').ripples({
    resulation: 1200,
    dropRadius: 20,
    perturbance: 0.01,
  });
});

$(window).on('scroll', function() {
  if($(this).scrollTop() > 20){
    $('.header-area').addClass('sticky');
  }
  else{
    $('.header-area').removeClass('sticky');
  }
})