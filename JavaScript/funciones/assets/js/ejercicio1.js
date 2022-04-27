// // const invertir = (palabra = "") => {
// //     if(palabra.length <=1) return console.log("no ingresaste texto");

// //     if (typeof(palabra) !== "string") return console.log("el valor no es una palabra");
    

// //     let arreglo = palabra.split("");
// //     let reverso = arreglo.reverse();
// //     let unir = reverso.join("");

// //     return console.log(unir);;
// // }

// // invertir("a");


// // ejercicio4

// // function factorial(n) {
// //     if (n == 1) {
// //         return 1;
// //     }
// //     return n * factorial(n - 1);
// // }
// // console.log(factorial(5));

// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }
// palindrome("level")

// console.log();


// /* ejercio 1 */
// function palindromo(str) {
//     const strReversed = str.split("").reverse().join("");
  
//     return strReversed === str ? "es palindromo" : "no es palindromo";
//   }
//   console.log(palindromo("hola")); // es palindromo


/*  ejericio 2 */
/*  function repetir(cadena){
        let cadenaRepetida = cadena.repeat(3);
        console.log(cadenaRepetida);
    }
 repetir(" hola mundo "); */


/*  ejercicio 3 */
/* let cadena ="hola mundo"

function cortarcadena(cadena, numero){

    let extraida = cadena.substring(0, numero);
    console.log(extraida);
}
cortarcadena(cadena , 6) */


/* ejericio 4 */
/* const factorial = (numero=undefined)=>{
    if (numero === 0)return console.error("El número no puede ser 0");
    let factorial=1;
    for (let i=numero;i>1;i--){
        factorial *=i;
    }
    return console.log(`El factorial de ${numero} es ${factorial}`);
}
factorial (5); */

// let cadena ="hola mundo"

// function cortarcadena(cadena, numero){

//     let extraida = cadena.substring(0, numero);
//     console.log(extraida);
// }
// cortarcadena(cadena , 5)



