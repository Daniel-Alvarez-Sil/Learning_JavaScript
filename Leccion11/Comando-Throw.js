// Nosotros podemos arrojar errores con el comando "throw"
// Sintáxis de throw
// throw <error>

try {
    throw "Error Personalizado"; // <-- Este error no tiene atributos
}
catch(cError){
    console.log("Error: " + cError);
}