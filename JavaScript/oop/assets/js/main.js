//plano que nos permite cerar nuestros objetos
//las clases siempre comienzan en mayuscula

class Persona {
	//atributos
	#id = 0;
	static #contador = 0;
	#nombre = ''; // variable privada
	#edad = 0;
	#correo = '';
	//en js no es necesario declararlos

	constructor(nombre, edad, correo) {
		//asignar datos el valor que pertenece a la clase
		this.#nombre = nombre;
		this.edad = edad;
		this.correo = correo;
		this.#id = ++Persona.#contador;
	}
	// Setters & Getters
	// set & get se utilizan como atributos

	get getNombre() {
		return this.#nombre;
	}

	get getEdad() {
		return this.#edad;
	}

	get getCorreo() {
		return this.#correo;
	}

	set setNombre(nombre) {
		this.#nombre = nombre;
	}

	set setEdad(edad) {
		this.#edad = edad;
	}

	set setCorreo(correo) {
		this.#correo = correo;
	}

	#saludar() {
		let mensaje = `Hola mi nombre es ${this.#nombre}`;
		return mensaje;
	}

	mostrarSaludo() {
		return this.#saludar();
	}

	set cambiarNombre(nombre) {
		this.#nombre = nombre;
	}

	static mostrarContador() {
		return Persona.#contador;
	}
}
//crear objeto=instancia
const persona1 = new Persona('Víctor', 25, 'alexandervictor550@gamil.com');
const persona2 = new Persona('Soto', 28, 'Soto@gmail.com');
const persona3 = new Persona('Mitzi', 23, 'mavis@gmail.com');

// console.log(persona1.getNombre);
// persona1.setNombre = 'Manolo';
// console.log(persona1.getNombre);
// persona1.cambiarNombre = 'Potter';
// console.log(persona1.getNombre);

// persona1.getEdad;
// persona1.setEdad = 33;
// persona1.getCorreo;
// persona1.setCorreo = 'loquesea@gmail.com';

// console.log(persona1.mostrarSaludo());
// console.log(persona2.mostrarSaludo());
console.log(Persona.mostrarContador());
console.log(persona1);
console.log(persona2);
console.log(persona3);

// console.log(Persona.contador);