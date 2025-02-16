// Formas de Imprimir un Objeto

// Creación del objeto
let persona = {
    // Propiedades
    cNombre: 'Mariano', 
    cApellido: 'Villegas', 
    // Métodos
        // Concatenación de propiedades
    cPersona: function(){
        return this.cNombre + ", " + this.cApellido; 
    }
}

console.log(persona.cPersona());

// Impresión mediante el ciclo FOR IN y las llaves de propiedad
for (llave in persona)
    console.log(persona[llave]);

// Impresión mediante el uso de la propiedad de Object, values
console.log(Object.values(persona));

// Impresión mediante el método de JSON, stringify
console.log(JSON.stringify(persona));


