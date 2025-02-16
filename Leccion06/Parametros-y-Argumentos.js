function miFuncion (iNum1 = 0, iNum2 = 0 /*Estos son argumentos*/){ // <-- A los argumentos de esta función les hemos establecido valores por default
                                                                    // <-- Es decir, si no se manda ningún parametro para suplir al argumento, el valor por default es usado
    console.log("Suma: " + (iNum1 + iNum2));
    // Impresión de los argumentos de la función
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

miFuncion(10/*Estos son parámetros*/, 11, 12); // <-- La cantidad de parámetros puede ser mayor que la cantidad de argumentos correspondientes 





