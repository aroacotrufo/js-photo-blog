const endpoint ='https://lanciweb.github.io/demo/api/pictures/'
const cardEl = document.querySelector('.card')

fetch(endpoint)
.then(response => response.json())  // Trasforma la risposta in JSON
.then(data => {            

    console.log(data);
    console.log(cardEl)
    cardEl.innerHTML = ""

    data.forEach(function(item){
        const imgEl = document.createElement('img')
        imgEl.src = item.url
        imgEl.alt = item.title
        cardEl.appendChild(imgEl)
    })
})