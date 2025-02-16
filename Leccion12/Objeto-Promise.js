// Promise
// Las Promesas en JavaScript son objetos que nos permiten ejecutar 1 de 2 funciones callback, dependiendo de la condición determinada
// Ejemplo: 

let myPromise = new Promise(
    (success, failure) => {
        let boolCondicion = true; 
        if (boolCondicion)
            success("La condición es verdadera.");
        else
            failure("La condición es falsa");
    }
); // <-- El constructor de Promise requiere como parámetro una función que tenga como argumentos 2 funciones

// Creamos la funciones que la promesa usará
function functionSuccess (cArgMensaje){
    console.log(cArgMensaje); 
}
function functionFailure (cArgMensaje){
    console.log(cArgMensaje);
}

// Uso de la promesa: 
// La sintáxis es la siguiente
// <promesa>.then(<función a seguir if success>).catch(<función a seguir if failure>);
// Otra sintáxis:
// <promesa>.then(<función a seguir if success>, <función a seguir if failure>);
myPromise.then(functionSuccess).catch(functionFailure); 
