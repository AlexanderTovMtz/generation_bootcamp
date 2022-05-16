
import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {		
		
		Scanner sc = new Scanner(System.in);

		System.out.println("Que tipo de operacion quieres realizar:");
		String TipoDeOperacion = sc.nextLine();
		
		
		switch(TipoDeOperacion.toLowerCase()) {
		case "suma" :
			System.out.println("Introduce tu primer numero:");
			System.out.println("Introduce tu segundo numero:");
		}
		
		System.out.println("Introduce el numero de la operacion a realizar");
		System.out.println("1) Suma   2) Resta   3) Multiplicacion   4) Division");


	}

}
