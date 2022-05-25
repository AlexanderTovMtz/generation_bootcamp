package com.pokemon;

public class TipoPlanta extends Pokemon{
	
	private int numeroHojas;
	
	public TipoPlanta(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas) {
		super(id, edad, nivel, nombre, evolucion);
		this.numeroHojas = numeroHojas;
	}

	public void paralizar() {
		System.out.println(getNombre() + " paraliza");
	}
	
	public void envenenar() {
		System.out.println(getNombre() + " envenena");
	}

	public int getNumeroHojas() {
		return numeroHojas;
	}

	public void setNumeroHojas(int numeroHojas) {
		this.numeroHojas = numeroHojas;
	}
	
	
}
