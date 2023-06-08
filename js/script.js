$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView : 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        speed: 1000,

        navigation: {
            nextEl: ".next-btn1",
            prevEl: ".prev-btn1",
        },
    });
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView : 1,
        loop: true,
        speed: 1000,

        navigation: {
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        
        if(sct >= 100){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }
    });
    $('header').mouseenter(function(){
        $(this).addClass('on');
    });
    $('header').mouseleave(function(){
        $(this).removeClass('on');
    });

    AOS.init();
})