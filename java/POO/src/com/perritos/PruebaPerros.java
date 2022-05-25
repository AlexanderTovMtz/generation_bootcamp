package com.perritos;

public class PruebaPerros {

	public static void main(String[] args) {
		System.out.println("\tPERRITOS");
		
		Perro perroUno = new Perro("", 0, "", "");
		perroUno.nombre = "patitas";
		perroUno.edad = 3;
		perroUno.raza = "Husky";
		perroUno.tamanio = "Mediano";
		perroUno.ladrar();
		System.out.println("La edad perruna es: " + perroUno.edadPerruna());

		Perro perroDos = new Perro("", 0, "", "");
		perroDos.nombre = "cookies";
		perroDos.edad = 1;
		perroDos.raza = "Dalmata";
		perroDos.tamanio = "Grande";
		perroDos.ladrar();
		System.out.println("La edad perruna es: " + perroDos.edadPerruna());
		
		Perro.mensaje();
	}

}
