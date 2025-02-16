"use strict" // <-- Habilitamos el modo estricto

// Manejo de errores
try {
    x = 10; // En JavaScript, podemos usar variables sin declararlas antes (sin el modo estricto)
}
catch (cError){
    console.log(cError);
    // Atributos del Error
    console.log(cError.name);
    console.log(cError.message);
}
finally { // <-- Este bloque se ejecuta, no importa que pase (es opcional)
    console.log("¡Hasta pronto!");
}