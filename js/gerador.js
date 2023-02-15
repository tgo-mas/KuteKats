
function getPhoto(){
    let img = document.createElement('img')
    img.classList.add('img-gerador')
    let div = document.querySelector("#img-container")

    fetch('https://api.thecatapi.com/v1/images/search')
        .then((res) => {
            return res.json()
        }).then((json) => {
            let objUrl = json[0].url
            img.src = objUrl
            div.innerHTML = ''
            div.appendChild(img)
        })
}
