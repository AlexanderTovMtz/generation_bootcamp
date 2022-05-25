package com.ejercicio;

import java.util.Scanner;

public class CalculadoraGeometrica {

	public static void main(String[] args) {
		
		Perimetro perimetro = new Perimetro();
		Areas area = new Areas();
		Scanner entrada = new Scanner(System.in);
		System.out.println("Men�\n1.-�rea del c�rculo\n2.-�rea del cuadrado"
				+ "\n3.-�rea del tri�ngulo\n4.-Perimetro del c�rculo"
				+ "\n5.-Perimetro del cuadrado\n6.-Perimetro del tri�ngulo");
		System.out.println("Ingresa una opci�n");
		int opcion = entrada.nextInt();
		double radio = 0;
		double altura = 0;
		double base = 0;
		double lado = 0;
		double diametro = 0;
		switch(opcion) {
			case 1:
				System.out.println("Ingresa el radio: ");
				radio = entrada.nextDouble();
				System.out.println("El �rea del c�rculo es: " + area.obtenerAreaCirculo(radio));
				break;
			case 2:
				System.out.println("Ingresa el lado del cuadrado: ");
				lado = entrada.nextDouble();
				System.out.println("El �rea del cuadrado es: " +area.obtenerAreaCuadrado(lado));
				break;
			case 3:
				System.out.println("Ingresa la altura del tri�ngulo: ");
				altura = entrada.nextDouble();
				System.out.println("Ingresa la altura de la base: ");
				base = entrada.nextDouble();
				System.out.println("El �rea del tri�ngulo es: " +area.obtenerAreaTriangulo(altura, base));				
				break;
			case 4:
				System.out.println("Ingresa el diametro: ");
				diametro = entrada.nextDouble();
				System.out.println("Perimetro del c�rculo es: " +perimetro.obtenerPerimetroCirculo(diametro));
				break;
			case 5:
				System.out.println("Ingresa el lado del cuadrado: ");
				lado = entrada.nextDouble();
				System.out.println("Perimetro del cuadrado es: " +perimetro.obtenerPerimetroCuadrado(lado));
				break;
			case 6:
				System.out.println("Ingresa el lado del tri�ngulo: ");
				lado = entrada.nextDouble();
				System.out.println("Perimetro del tri�ngulo:  " +perimetro.obtenerPerimetroTriangulo(lado));
				break;
			default:
				System.out.println("No ha ingresado una opci�n correcta");
				break;
		}
		System.out.println("El programa ha finalizado");
	}

}
