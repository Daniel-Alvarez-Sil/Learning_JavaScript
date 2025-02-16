var cPalabra1 = "Concatenacion";
var cPalabra2 = "de Cadenas";

// Concatenacion de Variables
var nombreCompleto = cPalabra1 + " " + cPalabra2;
console.log(nombreCompleto);

// Concatenacion de String y Numero con contexto de String, es decir el numero se toma como una cadena
var concatenacion = "Juan" + 2 + 60;
console.log(concatenacion);

// Concatenación de String y Número con la realización de una suma antes de aplicar el contexto String
concatenacion = "Juan" + (2 + 60);
console.log(concatenacion);
