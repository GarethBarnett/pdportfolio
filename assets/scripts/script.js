// $("body").css('overflow', 'hidden');

//  setTimeout(() => {
//  $("body").css('overflow', 'unset');
//  $(".loader").fadeOut(300);
//  $(".content-container").removeClass('hide');
//  AOS.init();
//  }, 800);


// function dom_loaded(){

    // var scroll = new SmoothScroll('a[href*="#"]');

    // document.title = "Gareth Barnett - Portfolio"

    var Swipes = new Swiper('.swiper-container', {
        effect: 'fade',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 2000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
   
        // pagination: {
        //     el: '.swiper-pagination',
        // },
    });


  


// document.addEventListener("DOMContentLoaded", dom_loaded);