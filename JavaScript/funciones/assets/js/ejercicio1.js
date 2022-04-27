const invertir = (palabra = "") => {
    if(palabra.length <=1) return console.log("no ingresaste texto");

    if (typeof(palabra) !== "string") return console.log("el valor no es una palabra");
    

    let arreglo = palabra.split("");
    let reverso = arreglo.reverse();
    let unir = reverso.join("");

    return console.log(unir);;
}

invertir("a");
