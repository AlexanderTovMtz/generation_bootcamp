package com.arreglos;

import java.util.Arrays;

public class Arreglos {
	public static void main(String[] args) {
		int [] arregloNumeros = new int [5];
		//arregloNumeros[0] = 1;
		//arregloNumeros[1] = 2;
		//arregloNumeros[2] = 3;
		//arregloNumeros[3] = 4;
		//arregloNumeros[4] = Integer.parseInt("5");
		System.out.println("----------------------------------");
		System.out.println("VALORES ALMACENADOS EN EL ARREGLO");
		System.out.println("----------------------------------");
		for(int i=0; i<arregloNumeros.length; i++) {
			System.out.println("arregloNumeros[" + i + "] es " + arregloNumeros[i]);
		}
		System.out.println("----------------------------------");
		int i = 0;
		for (int elemento : arregloNumeros) {
			 i++;
			//System.out.println("elemento = " + elemento);
			arregloNumeros[elemento] = i;
			System.out.println(arregloNumeros[elemento]);
		}
		System.out.println("----------------------------------");
		Persona persona1 = new Persona("Luis", 30);
		Persona persona2 = new Persona("Raúl", 31);
		//Object arrPersona[] = new Object[3];
		Persona arrPersonas[] = new Persona[3];
		arrPersonas[0] = persona1;
		arrPersonas[1] = persona2;
		arrPersonas[2] = new Persona("Juan", 25);
		System.out.println(Arrays.toString(arrPersonas));
		
		for (Persona elemento : arrPersonas) {
			System.out.println(elemento.nombre);
			System.out.println(elemento.edad);
		}
	}
}
