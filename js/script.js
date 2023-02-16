let navButton = document.querySelector("#button-nav")
let navMenu = document.querySelector("#menu-nav")
let navLinks = document.getElementsByTagName(".navbar a")

allEventListener()

function allEventListener() {
    navButton.addEventListener('click', event => {
        navButton.classList.toggle("toggler-open")
        navMenu.classList.toggle("open")
    })
    for (let i = 0; i < navLinks.length; i++) {
        navLinks.item(i).addEventListener("click", event => {
            if (navMenu.classList.contains('open')) {
                navButton.click()
            }
        })
    }
}

const swiper = new Swiper('.swiper', {

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
