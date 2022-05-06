const url = "https://jsonplaceholder.typicode.com/albums/1/photos"

const $card = document.querySelector(".row")

fetch(url).then(resp => resp.json().then(datos => {
    
    const cuadrosAll = datos
    datos.forEach(cuadros =>{

        console.log(cuadros.url);

        const template = `<div class="col mb-4">
        <div class="card h-100">
          <img src="${cuadros.url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${cuadros.title}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>`
        $card.innerHTML += template
    } )
   
   
    
}));
