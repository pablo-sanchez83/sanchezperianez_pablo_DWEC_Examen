//Creo una funcion sin parametros de entrada.
function saludarSegunHora() {

    /**
     * Creo una constante 'hora' que guarde la hora mediante el objeto de JS Date() y su metodo getHours()
     * Inicializo la variable 'saludo'
     */
    const hora = new Date().getHours();
    let saludo;

    //Compruebo los distintos valores de hora estableciendo el valor de 'saludo' en consecuencia
    if ((hora >= 5) && (hora <= 12)) {
        saludo = 'Buenos dias';
    } else if ((hora > 12) && (hora < 19)) {
        saludo = 'Buenas tardes';
    } else {
        saludo = 'Buenas noches';
    }

    //Devuelvo el valor de saludo.
    return saludo;
}

//Creo una constante 'parrafo' que crea un elemento <p> en el documento.
const parrafo = document.createElement("p");

//Guardo dentro de parrafo el valor que devuelve la funcion 'saludarSegunHora()', en este caso el saludo.
parrafo.innerHTML = saludarSegunHora();

//Añado al body como hijo el parrafo que he creado, de forma que se muestra al cargar la página como parte del body.
document.body.appendChild(parrafo);