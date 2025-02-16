// El comando apply nos permite reutilizar los métodos de un objeto
// Apply se diferencia de call, ya que al utilizar apply los parámetros deben ser pasados como un array

let persona1 = {
    cNombre: 'Daniel', 
    cApellido: 'Alvarez',
    imprimir: function (cArgTitulo, cArgFecha) {
        return cArgTitulo + " (" + cArgFecha + "): " + this.cNombre + " " + this.cApellido;
    }
}

let persona2 = {
    cNombre: 'Daniel', 
    cApellido: 'Fernandez'
}

console.log(persona1.imprimir("persona1", "01/01/23"));
// Uso de apply 
let arrayParametros = ["persona2", "02/02/23"];
console.log(persona1.imprimir.apply(persona2, arrayParametros))