// Un objeto se diferencia de un valor primitivo por la posesión de atributos(propiedades) y métodos

// Definición de un objeto
let persona = {
    // Propiedades
    cNombre: 'Daniel',
    cApellido: 'Alvarez', 
    cMail: 'daniel.gmail.com', 
    iEdad: 19,
    // Métodos
        // El comando this nos permite accesar al objeto con el que se está trabajando en ese momento
    nombreCompleto: function(){return this.cApellido + ", " + this.cNombre}
}

// Acceso a las propiedades de un objeto
console.log(persona.cNombre);
console.log(persona.cApellido); 
    // etc...

// Acceso a los métodos de un objeto
console.log(persona.nombreCompleto());