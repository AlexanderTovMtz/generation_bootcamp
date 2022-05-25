package com.pokemon;

public class Main {

	public static void main(String[] args) {
		
		Pokemon chikorita = new Pokemon(152, 1, 20, "Chikorita", false);
		TipoPlanta chikoritaDos = new TipoPlanta(152, 1, 20, "Chikorita", false, 1);
		
		chikorita.atacar();
		chikorita.dormir();
		chikorita.comer();
		chikoritaDos.atacar();
		chikoritaDos.comer();
		chikoritaDos.dormir();
		chikoritaDos.envenenar();
		chikoritaDos.paralizar();
	}
	
}
