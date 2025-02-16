// El uso de promesas nos permite ejecutar procesos asíncronos
// Asimismo, es posible encadenar promesas unas con otras

// Uso de promesas con el comando setTimeout:

// Promesa:
let myPromise = new Promise (
    success => { // <-- Solo pasamos 1 de las 2 funciones que puede recibir una promesa
        console.log("Inicio de ejecución de promesa. ");
        // success("Promesa asíncrona. ");
        setTimeout(() => success("Promesa asíncrona 2"), 4000); 
        console.log("Fin de ejecución de promesa. ");
    }
);
// Promesa para pasar como parámetro a la función:
function functionSuccess(cArgMensaje){
    console.log(cArgMensaje); 
}
// Ejecución de la promesa
myPromise.then(functionSuccess);

