var windowW = $(window).width();

if (windowW > 490) {
  var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    freeMode: false,
    direction: "vertical",
    loop: false,
    loopedSlides: 8,
    mousewheel: {
      releaseOnEdges: true,
    },
  });

  swiper.on('slideChange', function () {
    setTimeout(() => {
      if ($('.swiper-slide-active').hasClass('nav_About')) {
        $('.menu li a').removeClass('menuActive')
        $('.menuAbout').addClass('menuActive')
        //About Active
      } else if ($('.swiper-slide-active').hasClass('nav_Clients')) {
        $('.menu li a').removeClass('menuActive')
        $('.menuClients').addClass('menuActive')
        //Clients Active
      } else if ($('.swiper-slide-active').hasClass('nav_Work')) {
        $('.menu li a').removeClass('menuActive')
        $('.menuWork').addClass('menuActive')
        //Work Active
      } else if ($('.swiper-slide-active').hasClass('nav_Contact')) {
        $('.menu li a').removeClass('menuActive')
        $('.menuContact').addClass('menuActive')
        //Contact Active
      }
    });
  }, 500);


} else {
  $('body').attr('style', 'overflow-x')
  $('.swiperMobWrapper').removeClass('swiper-wrapper')

  $('.vinarteImageFull').attr('src', 'images/vinarte_mob.png')
  $('.vinarteDouble').attr('src', 'images/vinarteDouble.png')
  $('.draftMobile').attr('src', 'images/draftMobile.png')
  
}