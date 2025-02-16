// Una funcion self-invoking es una funcion que se llama a sí misma y que no es reutilizable
// Sintáxis
// (function (<argumentos>) {<cuerpo de la funcion>}) (); 

(function (){
    console.log("Ejecutando la función self-invoking");
})(); 

(function (iNum1, iNum2){
    console.log("Suma: " + (iNum1 + iNum2));
})(10, 20);