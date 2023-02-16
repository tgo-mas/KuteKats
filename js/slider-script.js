
const slider = new Swiper('#slider', {

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    loop: true,
})

setInterval(() => {
    slider.slideNext(300)
}, 4000)
