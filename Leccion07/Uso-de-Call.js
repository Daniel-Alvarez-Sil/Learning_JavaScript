// Call es un método que nos permite reutilizar el método de un objeto 
// Ejemplo: 

let persona1 = {
    cNombre: 'Daniel', 
    cApellido: 'Alvarez', 
    imprimir: function (cArgTitulo) {
        return cArgTitulo + ": " + this.cNombre + " " + this.cApellido; 
    }
}

let persona2 = {
    cNombre: 'Daniel', 
    cApellido: 'Fernandez', 
}

console.log(persona1.imprimir("persona1")); 
// Uso de call
console.log(persona1.imprimir.call(persona2, "persona2"))