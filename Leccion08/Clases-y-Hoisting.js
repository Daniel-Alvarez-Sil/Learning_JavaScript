// Funciones -> aplica hoisting
// Clases -> no aplica hoisting

// Ejemplo: 

let persona2 = new Persona("Daniel", "Alvarez");

class Persona{
    constructor(cArgNombre, cArgApellido){
        this._cNombre = cArgNombre; 
        this._cApellido = cArgApellido; 
    }
}

let persona1 = new Persona("Daniel", "Alvarez"); 