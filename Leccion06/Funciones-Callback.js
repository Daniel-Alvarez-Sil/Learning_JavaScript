// Las Funciones CallBack consisten en llamar a una función (no de manera recursiva) dentro de otra función 
// Esto se logra al pasar la referencia de la función a llamar como argumento a la función que se encarga de llamarla
// Las funciones CallBack comienzan a cobrar sentido con el concepto de código asíncrono


// Funcion de tipo CallBack
// Ejemplo: 

function imprimir (cArgMensaje){
    console.log(cArgMensaje); 
}

function sumar (iArgOp1, iArgOp2, argFuncion){ 
    argFuncion((iArgOp1 + iArgOp2));
}

sumar(1,2, imprimir);