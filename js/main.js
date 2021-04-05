$(function() {
  $('.menu-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.menu-layer').toggleClass('active');
    $('.header-flex').toggleClass('active');
    $('.black-layer').fadeToggle();
  });

  $('.black-layer').on('click', function(){
    $('.menu-btn').toggleClass('active');
    $('.menu-layer').toggleClass('active');
    $('.header-flex').toggleClass('active');
    $(this).fadeToggle();
  });
});
