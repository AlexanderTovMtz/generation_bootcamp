
class Pokemon{
    #nombre = '';
    #edad = 0;
    #evolucion = '';

    constructor(nombre, edad, evolucion, tipo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#evolucion = evolucion;
    }

    get nombre(){
        return
    }

    atacar(){
        return console.log(`${this.#nombre}, esta atacando`);
    }

    evolucionar(){
        // operador de corto circuito
        // false => toma el valor de la izq.
        // true => toma el valor de la der.

        if (this.#evolucion === ''){
            let mensaje = 'No puedo evolucionar';
            console.log(mensaje)

        }else{

		   let mensaje = `${this.#nombre} ha evolucionado a 
            ${this.#evolucion}`;
            this.$nombre = this.#evolucion;
            console.log(mensaje);
		} 
          
    }

}

    // const charmander = new Pokemon('Charmander', 2, 'Charmeleon', 'Fuego');
    // const bulbasaur = new Pokemon('Bulbasaur', 1, 'Ivisaur', 'Planta')

    // console.log(charmander);
    // console.log(bulbasaur);
    // charmander.atacar();
    // charmander.evolucionar();

    class TipoFuego extends Pokemon{
        #tipo = '';
        constructor(nombre, edad, evolucion, tipo){
            super(nombre, edad, evolucion);
            this.#tipo = 'Fuego';
        }
    }

    const charmander =  new TipoFuego('Charmander', 2, 'Charmeleon');
    console.log(charmander);

    charmander.atacar();
    charmander.evolucionar();