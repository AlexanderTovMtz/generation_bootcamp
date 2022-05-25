package com.model;

public class Perro {
	int edad;
	int anios;
	String raza;
	String nombre;
	
	public Perro(int edad, int anios, String nombre, String raza) {
		this.edad = edad;
		this.anios = anios;
		this.nombre = nombre;
		this.raza = raza;
	}

	@Override
	public String toString() {
		return "Perro [edad=" + edad + ", anios=" + anios + ", raza=" + raza + ", nombre=" + nombre + "]";
	}

	public void comer() {
		System.out.println(nombre +  " esta comiendo.");
	}

	private int getEdad() {
		return edad;
	}

	private void setEdad(int edad) {
		this.edad = edad;
	}

	private int getAnios() {
		return anios;
	}

	private void setAnios(int anios) {
		this.anios = anios;
	}

	private String getRaza() {
		return raza;
	}

	private void setRaza(String raza) {
		this.raza = raza;
	}

	private String getNombre() {
		return nombre;
	}

	private void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
}
