// El comando de prototype nos permite agregar una nueva propiedad o método a todos los objetos correspondientes al mismo constructor o clase

function Persona(cArgNombre, cArgApellido, iArgEdad){
    this.cNombre = cArgNombre;
    this.cApellido = cArgApellido; 
    this.iEdad = iArgEdad; 
}

let persona1 = new Persona("Pepe", "Juarez", 35);
let persona2 = new Persona("Andrés", "Quintana", 40);

console.log(persona1); 
console.log(persona2);

// Uso de prototype
Persona.prototype.cNacionalidad = 'MX'; 
Persona.prototype.imprimir = function () {return this.cNombre + " " + this.cApellido + "; " + this.cNacionalidad};

console.log(persona1.imprimir());
console.log(persona2.imprimir());

