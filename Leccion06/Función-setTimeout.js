// Proceso asíncronos (procesos persistentes), es decir se pueden ejecutar simultaneamente (no lineal)

// Ejemplo de una llamada asíncrona con uso de setTimeout
function miFuncionCallBack(){
    console.log("Saludo asíncrono, después de 3 segundos");
}

// Uso de la función setTimeout
// Esta función nos permite pasar como parámetro una función callback y el tiempo que queremos que pase antes de que se ejecute dicha función
// La función setTimeout nos permite ejecutar proceso simultaneos o que se solapan 
setTimeout(miFuncionCallBack, 10000); // <-- La unidad de tiempo son milisegundos

console.log("Código escrito después del saludo asíncrono");