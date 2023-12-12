//Guardo en una constante un string que contiene la informacion de GitHub
const cadenaJSON = new String(`{
    "login": "pablo-sanchez83",
    "id": 149807125,
    "email": null,
    "public_repos": 8
}`);

//Creo la clase DatosGitHub
class DatosGitHub{

    //Creo el constructor con el parametro de entrada 'informacion'
    constructor (informacion){

        //Convierto el parametro de entrada a JSON (objeto)
        this.infoJSON = JSON.parse(informacion);

        //Defino las propiedades extrayendo los datos de this.infoJSON
        this.login = this.infoJSON.login;
        this.id = this.infoJSON.id;
        this.email = this.infoJSON.email;
        this.public_repos = this.infoJSON.public_repos;
    }

    //Creo el metodo datosRecibidos()
    datosRecibidos() {

        //Muestro la informacion del usuario
        console.log(`El Usuario de GitHub ${this.login} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.public_repos} repositorios públicos.`);
    }
}

//Guardo en la constante datosGitHubInstandia una instancia de la clase DatosGitHub con cadenaJSON previamente definida como paramtro de entrada
const datosGitHubInstancia = new DatosGitHub(cadenaJSON);

//Ejecuto el metodo 'datosRecibidos' para mostrar los datos de la instancia
datosGitHubInstancia.datosRecibidos();

//Modifica el atributo email de la instancia previamente null
datosGitHubInstancia.email = 'pablosanchezperianez83@gmail.com';

//Ejecuto el metodo 'datosRecibidos' para mostrar los datos de la instancia
datosGitHubInstancia.datosRecibidos();