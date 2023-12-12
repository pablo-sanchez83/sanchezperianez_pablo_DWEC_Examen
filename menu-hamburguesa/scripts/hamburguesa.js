/**
 * Guardo una constante boton que almacena el elemento con la clase '.hamburger'
 * Guardo una constante que almacena los enlaces que mediante el media-query quedan ocultos y queremos mostrar al pulsar el boton
 */
const boton = document.querySelector('.hamburger');
const linksOcultos = document.querySelector('.nav-links');

//Añado un evento de escucha al boton, que una vez recibe el evento de click ejecuta una función.
boton.addEventListener('click', () => {
    
    //La funcion alterna una la clase active haciendo que este o no este dependiendo del click del usuario.
    linksOcultos.classList.toggle('active');
})




/* 
//Otros metodos:
//Funcion anonima.
boton.addEventListener('click', function (){
    linksOcultos.classList.toggle('active');
})

//Llamar a funcion ya generada.

boton.addEventListener('click', toggleNav);

function toggleNav(){
    linksOcultos.classList.toggle('active');
} 
*/