// Una función en JavaScript tiene métodos y propiedades como un objeto

function miFuncion(iNum1, iNum2){
    // Propiedad para saber el número de argumentos en la función
    // Sólo la podemos llamar dentro de la funcion
    console.log(miFuncion.arguments.length);
    // Método de la función 
    // El método puede ser llamado fuera de la función
    console.log(miFuncion.toString()); 
}

console.log(miFuncion.toString());
miFuncion(1, 2);
