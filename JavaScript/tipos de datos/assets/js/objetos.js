const nombre = "alex";
const nombre2 = new String("alex");

console.log(nombre);
console.log(nombre2);

const persona = new Object();
persona.edad = "23"
persona.nombre = "alex"
persona.apellido = "tovar"

console.log(persona);

const nuevaPersona = {
    nombreCompleto: {
        nombre: "alex",
        apellido: "tovar",
    },
    edad: 24,
    pasatiempos: ["nadar","dibujar","anime"],
    tieneTrabajo: true,
    saludar: function () {
        console.log("hola")
        
    }
}

nuevaPersona.saludar()