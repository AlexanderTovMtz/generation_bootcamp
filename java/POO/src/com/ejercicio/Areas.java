package com.ejercicio;

public class Areas {
	public double obtenerAreaTriangulo(double altura, double base) {
		return (base*altura)/2;
	}
	
	public double obtenerAreaCuadrado(double lado) {
		return lado*lado;
	}
	
	public double obtenerAreaCirculo(double radio) {
		return 3.1416*(radio*radio);
	}
}
