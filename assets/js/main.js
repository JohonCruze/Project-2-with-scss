$(document).ready(function () {
  $('.project-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
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

});

$(window).load(function(){
  $(window).on('scroll', function(){
    if($(window).scroolTop() > 50){
      $('.header-area').addClass('sticky');
    }
    else{
      $('.header-area').removeClass('sticky');
    }
  })
})