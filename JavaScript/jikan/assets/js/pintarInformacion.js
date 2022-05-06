const id = window.location.href.split('=').pop();
console.log(id);
const $imagenPortada = document.getElementById('imagenPortada');
const $infoAnime = document.getElementById('infoAnime');
const url = `https://api.jikan.moe/v4/anime/${id}`;
// console.log(url);

fetch(url)
	.then((response) => response.json())
	.then((datos) => {
		const datosNecesarios = {
			id: datos.data.mal_id,
			imagen: datos.data.images.jpg.large_image_url,
			sinopsis: datos.data.synopsis,
			nombre: datos.data.title,
		};
		$imagenPortada.innerHTML += `<img src="${datosNecesarios.imagen}" alt="" class="img-fluid" />`;
		const template = `
    <h1>${datosNecesarios.nombre}</h1>
    <p>${datosNecesarios.sinopsis}</p
    <div class="favorito">
      <button type="button" id="agregarFavoritos" class="btn btn-dark">Agregar a favoritos</button>
    </div>
    `;
		$infoAnime.innerHTML = template;
		const agregarFavoritos = document.getElementById('agregarFavoritos');
		agregarFavoritos.addEventListener('click', () => {
			const datos = {
				id: datosNecesarios.id,
				nombre: datosNecesarios.nombre,
				imagen: datosNecesarios.imagen,
			};

			if (localStorage.getItem('favoritos')) {
				console.log('Existe un elemento');
				const favoritos = JSON.parse(localStorage.getItem('favoritos'));
				favoritos = favoritos.filter((el) => el.nombre != datos.nombre);
				favoritos.push(datos);
				localStorage.setItem('favoritos', JSON.stringify(favoritos));
				console.log(favoritos);
				window.location.href = 'favoritos.html';
			} else {
				console.log('No tienes favoritos');
				const favoritos = [];
				favoritos.push(datos);
				localStorage.setItem('favoritos', JSON.stringify(favoritos));
			}

			// JSON.parse(localStorage.getItem('favoritos'));
			// localStorage.setItem('favoritos', JSON.stringify(favoritos));
		});
	});