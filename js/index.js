document.addEventListener("DOMContentLoaded", function () {
    const slider1 = new Swiper('.hero__swiper', {
        slidePerGroup: 1,
        loop:true,
    })
    const slider2 = new Swiper('.space__swiper', {
        slidePerGroup: 3,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        navigation: {
            nextEl : '.swiper-btn-next',
            prevEl : '.swiper-btn-prev',
        },
        loop:true,
    })
    const slider3 = new Swiper('.gallery__swiper', {
       
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
            nextEl : '.swiper-btn-next',
            prevEl : '.swiper-btn-prev',
        },
        loop: true,
    })
    const slider4 = new Swiper('.reviews__swiper', {
        slidePerGroup: 3,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
            nextEl : '.swiper-btn-next',
            prevEl : '.swiper-btn-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
          },
      
        loop: true,
    })

    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('active')
    
      })
      document.querySelector('#close-menu').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('active')
      })


});