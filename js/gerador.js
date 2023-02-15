let div = document.querySelector("#img-container")
let loader = document.querySelector("#loading")

function getPhoto(){
    loader.classList.remove('loader')
    div.innerHTML = ''
    let img = document.createElement('img')
    img.classList.add('img-gerador')
    fetch('https://api.thecatapi.com/v1/images/search')
        .then((res) => {
            return res.json()
        }).then((json) => {
            let objUrl = json[0].url
            img.src = objUrl
            div.innerHTML = ''
            div.appendChild(img)
            loader.classList.add('loader')
        })
}
