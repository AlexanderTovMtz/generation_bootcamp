const expresiones = {
	usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// Para recuperar los valores de un formulario necesitamos
// Llamar al formulario con el dom y la etiqueta form

const formulario = document.querySelector('form');

// Llamar a todos los inputs con querySelectorAll
const inputs = document.querySelectorAll('input')
const $valNombre = document.getElementById('valNombre')
const $valApellido = document.getElementById('valApellido')
const $valMail = document.getElementById('valMail')
const $valPass = document.getElementById('valPass')
const $valTel = document.getElementById('valTel')

const areValid = {
	nombre: false,
	apellido: false,
	email: false,
	passwrd: false,
	tel: false,
}

inputs.forEach((input) => {
	input.addEventListener('keyup',(e)=>{
		switch(e.target.name){
			case "nombre":
				if (expresiones.nombre.test(e.target.value)) {
					$valNombre.textContent = ""
					areValid.nombre = true;
				} else {
					$valNombre.textContent = "Nombre incorrecto"
					areValid.nombre = false;
				}
				break;

			case 'apellido':
				if (expresiones.nombre.test(e.target.value)) {
					$valApellido.textContent = ""
					areValid.apellido = true;
				} else {
					$valApellido.textContent = "Apellido incorrecto"
					areValid.apellido = false;
				}
				break;

			case 'email':
				if (expresiones.email.test(e.target.value)) {
					$valMail.textContent = ""
					areValid.email = true;
				} else {
					$valMail.textContent = "Correo incorrecto"
					areValid.email = false;
				}
				break;

			case 'password':
				if (expresiones.password.test(e.target.value)) {
					$valPass.textContent = ""
					areValid.passwrd = true;
				} else {
					$valPass.textContent = "Contraseña inválida"
					areValid.passwrd = false;
				}
				break;

			case 'telefono':
				if (expresiones.telefono.test(e.target.value)) {
					$valTel.textContent = ""
					areValid.tel = true;
				} else {
					$valTel.textContent = "Teléfono inválido"
					areValid.tel = false;
				}
				break;
		}
	})
})

formulario.addEventListener("submit",(e) =>{
	// Evita que la página se recargue por el submit
	e.preventDefault();
	const check = document.querySelector('#terminos').checked;

	// También el método includes funciona includes(false)
	if (Object.values(areValid).every(
		value => value === true
	) && check) {
		console.log("Enviado");
		document.querySelector('.alert-danger').style.display = "none"
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos);
		// Limpia los campos del formulario si todo salió bien
		formulario.reset();
	} else {
		console.log('No enviado');
		document.querySelector('.alert-danger').style.display = "block"
	}
} )