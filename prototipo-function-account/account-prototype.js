//Creo la funcion prototipo con los parametros de entrada 'nombre', 'dni', y 'saldo'
function CuentaBancaria(nombre, dni, saldo){

    //Almaceno los datos como propiedades del prototipo
    this.nombre = nombre;
    this.dni = dni;

    //Compruebo si 'saldo' no ha sido introducido, en cullo caso, lo establezco a cero, de no ser así, almaceno el atributo como ha sido introducido.
    if (saldo == undefined){
        this.saldo = 0;
    } else{
        this.saldo = parseInt(saldo);
    }

    //Almaceno en la propiedad del prototipo 'numeroCuenta' un valor generado de forma pseudoaleatoria.
    this.numeroCuenta = "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');

    //Creo el metodo 'mostrarDatos()' que muestra en la consola de forma estilizada las propiedades del prototipo
    this.mostrarDatos = function () {
        console.log(`
            Nombre: ${this.nombre} \n
            DNI: ${this.dni} \n
            Número de Cuenta: ${this.numeroCuenta} \n
            Saldo: ${this.saldo}€
        `);
    }

    //Creo el metodo 'realizarIngreso(dinero)' con un parametro de entrada.
    this.realizarIngreso = function (dinero) {

        //Compruebo si es mayor o igual a cero para no crear errores.
        if (dinero >= 0){
            
            //Añade el valor del parametro de entrada a la propiedad del prototipo y lo muestra
            this.saldo += dinero;
            console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}€`);
        } else{

            //De no ser mayor o igual a cero el parametro de entrada, muestra un error para evitar fallos de JS
            console.log('ERROR');
        }
    }

    //Creo el metodo 'realizarRetiro(dinero)' con un parametro de entrada.
    this.realizarRetiro = function (dinero) {

        //Compruebo si el parametro es mayor o igual a cero, y compruebo que el parametro no sea mayor al saldo de la cuenta para no crear errores.
        if ( ( dinero >= 0 ) && ( dinero <= this.saldo ) ){

            //Resta el valor del parametro de entrada a la propiedad del prototipo
            this.saldo -= dinero;
            console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}€`);
        } else{

            //De no cumplir las comprobaciones, muestra un error para evitar fallos de JS
            console.log('ERROR');
        }
    }

    //Creo el metodo 'realizarTransferencia(cuentaDestino, dinero)' con dos parametro de entrada.
    this.realizarTransferencia = function (cuentaDestino, dinero){

        //Compruebo si el parametro es mayor o igual a cero, y compruebo que el parametro no sea mayor al saldo de la cuenta para no crear errores.
        if ( ( dinero >= 0) && ( dinero <= this.saldo ) ){

            //Ejecuta el metodo 'realizarIngreso(dinero)' en la cuentaDestino con el valor introducido para realizar el ingreso y resta el valor del parametro de entrada a la propiedad del prototipo.
            cuentaDestino.realizarIngreso(dinero);
            this.saldo -= dinero;
            console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}€`);
        } else{

            //De no cumplir las comprobaciones, muestra un error para evitar fallos de JS
            console.log('ERROR');
        }
    }
}
//Guardo en constantes las instancias de la funcion prototipo con los datos necesarios.
const persona1 = new CuentaBancaria('Juan Pérez', '12345678A', 1000);
const persona2 = new CuentaBancaria('Ana Gómez', '87654321B', 500);

//Ejecuto los metodos en el orden preciso para mostrar la informacion solicitada y realizar los cambios solicitados
persona1.mostrarDatos();
persona2.mostrarDatos();

persona1.realizarTransferencia(persona2, 100);

persona1.mostrarDatos();
persona2.mostrarDatos();