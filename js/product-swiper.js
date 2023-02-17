
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
        sticky: true,
        momentumBounce:false
    }
})
