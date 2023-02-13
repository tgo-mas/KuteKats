let navButton = document.querySelector("#button-nav")
let navMenu = document.querySelector("#menu-nav")
let navLinks = document.getElementsByTagName(".navbar a")

allEventListener()

function allEventListener(){
    navButton.addEventListener('click', event => {
        navButton.classList.toggle("toggler-open")
        navMenu.classList.toggle("open")
    })
    for(let i = 0; i < navLinks.length; i++){
    navLinks.item(i).addEventListener("click", event => {
        if(navMenu.classList.contains('open')){
            navButton.click()
        }
    })}
}
