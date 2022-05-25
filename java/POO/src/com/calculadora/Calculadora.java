package com.calculadora;

public class Calculadora {

	public static void main(String[] args) {
		OperacionesBasicas operacionBasica = new OperacionesBasicas();
		OperacionesAreas operacionArea = new OperacionesAreas();
		System.out.println("---------------------------");
		System.out.println("\tCALCULADORA");
		System.out.println("---------------------------");
		System.out.println(operacionBasica.sumar(1, 2));
		System.out.println("---------------------------");
		System.out.println(operacionBasica.restar(3, 1));
		System.out.println("---------------------------");
		System.out.println(operacionBasica.dividir(10, 2));
		System.out.println("---------------------------");
		System.out.println(operacionArea.calcularAreaCuadrado(5));
		System.out.println("---------------------------");
		System.out.println(operacionArea.calcularAreaTriangulo(10, 5));
		System.out.println("---------------------------");

	}
}