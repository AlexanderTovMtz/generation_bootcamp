package com.arreglos;

// Ctrl +shift + 'o' Agrega paquetes necesarios 
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {
	
	public static void main(String[] args) {
		// List - ArrayList
		List<String> miArray = new ArrayList<String>();
		miArray.add("María");
		miArray.add("Yair");
		miArray.add("María");
		miArray.remove(1);
		boolean elemento = miArray.remove("Yair");
		System.out.println(miArray);
		System.out.println(miArray.size());
		System.out.println(elemento);
		Colecciones.imprimir(miArray);
		
		List<Integer> miArrayDos = new ArrayList<Integer>();
		miArrayDos.add(3);
		System.out.println(miArrayDos);
		
		System.out.println("\t Set --- HashSet");
		Set<String> miSet = new HashSet<String>();
		//No acepta elementos duplicados
		//No los guarda en un orden específico
		//La colección que funciona más rápido
		miSet.add("Martha");
		miSet.add("Martha");
		miSet.add("Lupe");
		miSet.add("Juan");
		miSet.add("Juan");
		miSet.remove("Lupe");
		System.out.println(miSet);
		imprimir(miSet);
		
		//Map -- hashMap --Índice
		System.out.println("\t Map --- HashMap");
		Map<String, Integer> miMap = new HashMap<String, Integer>();
		miMap.put("Valor 1", 45);
		miMap.put("Valor 2", 50);
		System.out.println(miMap);
		System.out.println(miMap.values());
		System.out.println(miMap.keySet());
		System.out.println(miMap.get("Valor 1"));
		for(String llave : miMap.keySet()) {
			System.out.println(llave + ": " + miMap.get(llave));
		}
	}
	
	public static void imprimir(Collection coleccion) {
		
		for(Object elemento : coleccion) {
			System.out.println("Elemento = " + elemento);
		}
		
	}
	
}
