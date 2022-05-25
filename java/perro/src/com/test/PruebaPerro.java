package com.test;

import com.model.Perro;

public class PruebaPerro {

	public static void main(String[] args) {
		Perro pelusa = new Perro(0, 0, "Pelusa", "French");
		System.out.println(pelusa);
		pelusa.comer();
	}
	
	
}
