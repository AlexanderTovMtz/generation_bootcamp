package com.perritos;

public class Perro {

	String nombre;
	int edad;
	String raza;
	String tamanio;
	
	public Perro(String nombre, int edad, String raza, String tamanio) {
		this.nombre = nombre;
	}
	
	public void ladrar() {
		System.out.println("El perro " + nombre +" esta ladrando");
	}
	
	public int edadPerruna() {
		return edad * 7;
	}
	
	public static void mensaje() {
		System.out.println("Clase perro");
	}
}