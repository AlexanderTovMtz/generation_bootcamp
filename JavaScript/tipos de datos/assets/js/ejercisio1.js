
// const anioNacimiento = parseInt(prompt("escribe tu año de nacimeinto: "));
// const anioActual = 2022;
// console.log(anioNacimiento)

// console.log(`tienes ${anioActual - anioNacimiento} años`)


// const anioActual = 2022;

// function calcularEdad() {
//     const anioNacimiento = parseInt(document.getElementById("anio").value);
//     console.log(anioNacimiento);
//     console.log(`tienes ${anioActual - anioNacimeinto} años`)
    
// }

// const boton = document.getElementById("calcular");
// console.log(boton);

// boton.addEventListener("click", () =>{
//     onst anioNacimiento = parseInt(document.getElementById("anio").value);
//     console.log(anioNacimiento);
//     console.log(`tienes ${anioActual - anioNacimeinto} años`)

// })

const fecha = new Date()

const anioActual = fecha.getFullYear() + 1
console.log(anio)

const mesActual = fecha.getMonth() + 1
console.log(mes)

const diaActual = fecha.getDate() +1
console.log(dia);

// const añoActual = 2022
// const mesActual = 4
// const diaActual = 27

function mostrarDatos() {
    
    const nacimeinto =  document.getElementById("anio").value;
    console.log(nacimeinto);
    const nacimeintoDividido = nacimeinto.split("-")
    console.log(nacimientoDividido);
    const anioNaciemiento = parseInt(nacimeintoDividido[0])
    const mesNaciemiento = parseInt(nacimeintoDividido[1])
    const diaNaciemiento = parseInt(nacimeintoDividido[2])
    console.log(anioNaciemiento,mesNaciemiento,diaNaciemiento);

    if (mesNaciemiento <= mesActual && diaNaciemiento <= diaActual) {
        console.log(`tienes ${anioActual - anioNacimiento} años`) 
    }else{
        console.log(`tienes ${anioActual - anioNacimiento - 1} años`)
    }

}



