package Ciclos;

import java.util.Scanner;

public class Ejercicio_1 {

	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		System.out.println("Ingresa un correo: ");
		String palabra = entrada.nextLine();
		char [] texto  = new char[palabra.length()];
		texto = palabra.toCharArray();
		
		for(int i=0; i<texto.length; i++) {
			if(texto[i]=='@') {
				System.out.println("Hay un arroba");
			}
		}
	}
}
