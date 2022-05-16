
import java.util.Scanner;

public class ControlDeFlujo {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Cual es tu edad:");
		int edad = sc.nextInt();
		
		
		if(edad >= 18) {
			
			System.out.println("Eres mayor de edad");
		}else {
			System.out.println("Eres menor de edad");
		}
		
		String mensaje = (edad >= 18) ? ("Eres mayor de edadx2") : ("eres menor de edadx2");
		System.out.println(mensaje);
		
		System.out.print("En que dia estamos: ");
		sc.nextLine();
		String dia = sc.nextLine();
		sc.close();
		
		switch(dia.toLowerCase()) {
		case "lunes":
			System.out.println("5 min. mas");
			break;
		case "martes":
			System.out.println("no te cases ni te enbarques");
			break;
		case "miercoles":
			System.out.println("Ombligo de semana");
			break;
		case "jueves":
			System.out.println("viernes chikito");
			break;
		case "viernes":
			System.out.println("dia de Chelas!");
			break;
		default:
			System.out.println("Dia no valido");
			break;
		}
	}

}
