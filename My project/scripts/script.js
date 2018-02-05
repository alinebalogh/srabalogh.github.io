
$(document).ready(function(){
//======== navbar script=============//

  //toggleClass for mobile
  $('.hamburger-wrap').on('click',function(){
	  $('.ul-icon').toggleClass("navbar-open")
  })
  // scroll to SCRIPT
  $("nav").find("a").click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(section).offset().top
      },1100);
  });

  // $(window).scroll(function(){
  //   console.log("scrooling");
  //   $('nav').addClass('navbar-on');
  // });

  var lastScroll = 0;
  var limit = $('#skills').outerHeight(true);

  $(window).scroll(function(e){
  var scroll = $(this).scrollTop();

  if (scroll > lastScroll && scroll > limit ) {
    $('nav').removeClass('navbar-on');
    $('nav').css({
      'transform' : 'translateY(-50px)'
    });
  } else if(scroll > limit) {
    $('nav').addClass('navbar-on');
    $('nav').css({
      'transform' : 'translateY(0px)'
    });
  }else if (scroll < limit) {
    $('nav').removeClass('navbar-on');
  }
  lastScroll = scroll;
  });

//======== button script=============//
  $('#btn-contact').on('click',function(){
    $('.contact-form').toggleClass('contact-form-on')
  })
});
