$(function() {
  $('.menu-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.menu-layer').toggleClass('active');
    $('.header-flex').toggleClass('active');
    $('.bar-top').toggleClass('active');
    $('.bar-middle').toggleClass('active');
    $('.bar-bottom').toggleClass('active');
    $('.black-layer').fadeToggle();
  });

  $('.black-layer').on('click', function(){
    $('.menu-btn').toggleClass('active');
    $('.menu-layer').toggleClass('active');
    $('.header-flex').toggleClass('active');
    $('.bar-top').toggleClass('active');
    $('.bar-middle').toggleClass('active');
    $('.bar-bottom').toggleClass('active');
    $(this).fadeToggle();
  });
});
