// Uso de hoisting
miFuncion(5, 10);

// Definicion de funciones
function miFuncion(/*Argumentos de la función*/ iNum1, iNum2){
    console.log("Suma: " + (iNum1 + iNum2));
    return ;
}

// Hoisting - la acción de definir automáticamente las funciones al inicio del archivo
// Javascript implementa el método de hoisting, por lo que podemos llamar a funciones antes y despues de definirlas

miFuncion(1, 10);
miFuncion(20, 5);