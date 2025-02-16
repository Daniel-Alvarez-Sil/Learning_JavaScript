// El comando "instanceof" nos permite corroborar si un objeto es una instancia de cierta clase

// Ejemplo
    // Clases
    class Padre{
        constructor(){

        }
    }
    class Hijo extends Padre {
        constructor(){
            super();
        }
    }
    // Pruebas
    let padre   = new Padre();
    let hijo    = new Hijo();

    // Uso de instanceof
    if (hijo instanceof Padre) // <-- Un objeto hijo es una instancia de la clase padre correspondiente, pero no viceversa
        console.log("Hijo es Padre");
    if (padre instanceof Hijo)
        console.log("Padre es Hijo")


