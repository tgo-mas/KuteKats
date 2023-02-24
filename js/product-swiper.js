
const products = new Swiper('.swiper-products', {

    slidesPerView: 4,
    spaceBetween: 15,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    setWrapperSize: true,
    freeMode:{
        enabled: true,
        sticky: false,
        momentumBounce:false
    },
    breakpoints: {
        '@0.25':{
            slidesPerView: 2
        },
        '@0.50':{
            slidesPerView: 3
        },
        '@0.75':{
            slidesPerView: 3
        },
        '@1.00':{
            slidesPerView: 5
        }
    },
})
