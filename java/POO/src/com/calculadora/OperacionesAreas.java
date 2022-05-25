package com.calculadora;

public class OperacionesAreas {

	public int calcularAreaCuadrado(int lado) {
		System.out.println("Área del cuadrado");
		return lado*lado;
	}
	
	public double calcularAreaTriangulo(int altura, int base) {
		System.out.println("Área del triángulo");
		return (base*altura)/2;
	}
	
}