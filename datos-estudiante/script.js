/**
 * Pedimos los datos almacenandolos en 4 variables locales.
 * Poniendo el dato por defecto DAW en el prompt de la variable ciclo.
 */
let nombre = prompt('Introduce tu nombre:');
let apellidos = prompt('Introduce tus apellidos:');
let edad = prompt('Introduce tu edad:');
let ciclo = prompt('Introduce el ciclo formativo que estas cursando:', 'DAW');


//Mostramos los datos en la página.
document.write(nombre);
document.write(apellidos);
document.write(edad);
document.write(ciclo);