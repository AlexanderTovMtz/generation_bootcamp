package com.calculadora;

public class OperacionesAreas {

	public int calcularAreaCuadrado(int lado) {
		System.out.println("�rea del cuadrado");
		return lado*lado;
	}
	
	public double calcularAreaTriangulo(int altura, int base) {
		System.out.println("�rea del tri�ngulo");
		return (base*altura)/2;
	}
	
}