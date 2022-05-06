const urlTop = "https://api.jikan.moe/v4/top/anime"
const $listatop = document.getElementById("listaTop")

fetch(urlTop)
    .then((Response) => response.json())
    .then(datos => {

    const animesTop = datos.data.slice(0,8);
    animesTop.map((anime) => {
        const infoAnime = {
            nombre: anime.title,
        };

        const template = ` <a href="#" class="list-group-item list-group-item-action">${infoAnime.nombre}</a>`;

        $listatop.innerHTML += template;
    });
    
});