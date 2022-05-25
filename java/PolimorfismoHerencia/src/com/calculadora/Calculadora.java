package com.calculadora;

public class Calculadora {
	int a;
	int b;
	int c;
	int resultado;
	
	public Calculadora (int a, int b) {
		this.a = a;
		this.b = b;
	}
	
	public Calculadora (int a, int b, int c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}
	
	public void sumar(int a, int b) {
		resultado = a + b;
		System.out.println("El resultado de la suma es: " +  resultado);
	}
	
	public void sumar(int a, int b, int c) {
		resultado = a + b + c;
		System.out.println("El resultado de la suma es: " +  resultado);
	}
	
	public int getA() {
		return a;
	}

	public void setA(int a) {
		this.a = a;
	}

	public int getB() {
		return b;
	}

	public void setB(int b) {
		this.b = b;
	}
	
}
