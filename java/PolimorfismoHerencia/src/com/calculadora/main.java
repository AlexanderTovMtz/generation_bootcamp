package com.calculadora;

public class main {

	public static void main(String[] args) {
		Calculadora calcUno  = new Calculadora(0, 0);
		calcUno.sumar(1, 2);
		Calculadora calcDos = new Calculadora(0, 0, 0);
		calcDos.sumar(1, 2, 3);
	}

}
