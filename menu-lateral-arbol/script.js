//Guardo en una constante 'arrows' un array que contiene todos los elementos con la clase '.arrow'.
const arrows = document.querySelectorAll('.arrow');

//Recorro el array 'arrows' ejecutando una funcion en cada elemento del array.
arrows.forEach((arrow) => {

    //Añade un evento a la flecha al hacer click, el evento ejecuta una función.
    arrow.addEventListener('click', () => {

        //Guarda en una constante el siguiente hermano del padre de la flecha sobre la que se esta haciendo click. Por como está estructurado el HTML, el siguiente hermano del padre siempre será el submenu oculto.
        const menuOculto = arrow.parentElement.nextElementSibling;

        /**
         * Alterna la clase 'show' en la constante 'menuOculto'.
         * Alterna la clase 'rotate-arrow' en la flecha, que es el elemento sobre el que creamos el evento 'click'.
         */
        menuOculto.classList.toggle('show');
        arrow.classList.toggle('rotate-arrow');
    })
})