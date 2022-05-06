// setTimeout(() =>{
//     console.log("ejecutando despues de 3 segundos");
// },3000)


const datos = [
    {
        nombre: "alex",
        edad: 23,
    },
    {
        nombre: "alex2",
        edad: 24,
    },
    {
        nombre: "alex3",
        edad: 25,
    }
]

function obtenerDatos(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(datos) 
        },3000)
    })

}
    
obtenerDatos().then((datos) => {
    console.log(datos);
})

async function obtenerDatosAsync() {
    const datosObtenidos = await obtenerDatos()
    console.log(datosObtenidos);
}
obtenerDatosAsync()