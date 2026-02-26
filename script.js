const endpoint ='https://lanciweb.github.io/demo/api/pictures/'
const cardContainer = document.querySelector('#card-container')

fetch(endpoint)
.then(response => response.json())  // Trasforma la risposta in JSON
.then(data => {            

   const pictures = data.data || data // Verifica se i dati sono in un oggetto "data" o direttamente nell'array
    cardContainer.innerHTML = ""          //svuota il contenuto della card prima di aggiungere le nuove immagini

    pictures.forEach(function(item){                        
        const c