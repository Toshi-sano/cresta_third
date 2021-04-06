$(function() {
  var $window = $(window),
      toggleHeight = $('.header-visual').outerHeight() - 30;


  // リサイズ時のtoggleHeightの変化を反映
  $window.on('resize', $.throttle(1000 / 15, function() {
    toggleHeight = $('.header-visual').outerHeight() - 30;
  }));

  // ハンバーガーメニューをクリックしたときのドロワー開閉
  $('.menu-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.menu-layer').toggleClass('active');
    $('.header-flex').toggleClass('active');
    $('.black-layer').fadeToggle();
  });

  // ドロワーの外をクリックしたときのドロワー閉
  $('.black-layer').on('click', function(){
    $('.menu-btn').toggleClass('active');
    $('.menu-layer').toggleClass('active');
    $('.header-flex').toggleClass('active');
    $(this).fadeToggle();
  });

  // ロゴとハンンバーガーメニューの色変化
  $window.on('scroll', $.throttle(1000 / 15, function() {
    if($window.scrollTop() > toggleHeight) {
      $('.menu-btn').addClass('alternative');
      $('h1 a.another').addClass('alternative');
    } else {
      $('.menu-btn').removeClass('alternative');
      $('h1 a.another').removeClass('alternative');
    }
  }));

});
