// Definición de una clase
class Persona{
    // Constructor, por lo general aquí se inicializan los atributos/propiedades de las instancias clase
    constructor(cArgNombre, cArgApellido){
        // Propiedades
        this.cNombre = cArgNombre; 
        this.cApellido = cArgApellido; 
    }
}

// Creación de instancias de un objeto
let persona1 = new Persona("Daniel", "Alvarez"); // <-- Con esto se llama al constructor, por lo que hay que pasar la  información de inicialización
console.log(persona1); 

let persona2 = new Persona("Martin", "Gutierrez");
console.log(persona2); 