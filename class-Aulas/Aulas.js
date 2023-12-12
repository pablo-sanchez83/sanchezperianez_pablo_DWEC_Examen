//Creo la clase Aula.
class Aula{

    //Creo el constructor de la clase con los parametros de entrada 'numero' y 'capacidad' que al guardarse se almacenan como numero entero.
    constructor(numero, capacidad){
        this.numero = parseInt(numero);
        this.capacidad = parseInt(capacidad);
    }

    //Creo el metodo 'presentarMateriales' sin parametros de entrada.
    presentarMateriales(){

        //Devuelvo mediante return un mensaje con la informacion de la clase.
        return `Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas`;
    }
}

//Crea la clase Musica extendiendo a la clase Aula
class Musica extends Aula{

    //Creo el constructor de la clase con los parametros de entrada del padre y el instrumento
    constructor(instrumento, numero, capacidad){
        super(numero, capacidad)
        this.instrumento = instrumento;
    }

    //Creo el metodo 'presentarMateriales' sin parametros de entrada.
    presentarMateriales(){

        //Devuelvo mediante return un mensaje con la informacion de la clase.
        return `Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad} plazas`;
    }
}

//Crea la clase Tecnología extendiendo a la clase Aula
class Tecnologia extends Aula{

    //Creo el constructor de la clase con los parametros de entrada del padre y la cantidad de ordenadores que se guarda como numero entero
    constructor(cantidadOrdenadores, numero, capacidad){
        super(numero, capacidad);
        this.cantidadOrdenadores = parseInt(cantidadOrdenadores);
    }

    //Creo el metodo 'presentarMateriales' sin parametros de entrada.
    presentarMateriales(){

        //Devuelvo mediante return un mensaje con la informacion de la clase.
        return `Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy hemos comprador ${this.cantidadOrdenadores} ordenadores adicionales para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad`;
    }
}
//Instancio las clases en 3 constantes distintas
const clase1 = new Tecnologia(10, 101, 25);
const clase2 = new Musica('guitarra española', 102, 25);
const clase3 = new Aula(103, 15);

//Muestro el valor que devuelve metodo de todas las clases en consola.
console.log(clase1.presentarMateriales())
console.log(clase2.presentarMateriales())
console.log(clase3.presentarMateriales())

console.log('La caracteristica se llama polimorfismo')