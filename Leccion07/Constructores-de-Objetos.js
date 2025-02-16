// Es importante recordar que en JavaScript es posible la creación de objetos
// que no son instancias de ninguna clase. 
// Habiendo mencionado esto, podemos generar una función constructora para crear objetos
// Esto es posible, ya que las funciones en JavaScript pueden ser vistas como objetos

function Persona (cArgNombre, cArgApellido, iArgEdad){
    // Creamos, de manera dinámica, propiedades de la función (objeto)
    this.cNombre = cArgNombre; 
    this.cApellido = cArgApellido;
    this.iEdad = iArgEdad; 
    // Creación de un método del objeto
    this.nombreCompleto = function (){return this.cApellido + ", " + this.cNombre};
}

// El código anterior funge básicamente como una clase, pero sin serlo
let persona1 = new Persona("Daniel", "Alvarez", 19); 
let persona2 = new Persona("Mariana", "Alvarez", 21);

console.log(persona1.nombreCompleto()); 
console.log(persona2.nombreCompleto()); 