
const swiper = new Swiper('#catswiper', {

    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.scrollbar'
    },

    breakpoints: {
        '@0.75':{
            slidesPerView: 2
        },
        '@1.00':{
            slidesPerView: 3
        }
    }

})
