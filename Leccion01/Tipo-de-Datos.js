/*Nota: 
    Para ejecutar el programa, presionamos CTRL + SHIFT + P 
    Después, seleccionamos la opción de "Quokka.js: Start on current file"*/

/*Las variables en JavaScript son dinámicas como en Python */

// Distintos tipos de datos
    // String
    var cNombre = "Daniel";
    console.log(cNombre);
    // Number 
    var iNumero = 10;
    console.log(iNumero);
    // Object
    var objeto = {
        nombre: 'Juan',
        apellido: "Perez",
        telefono: "55443322"
    }
    console.log(objeto);
        // Dinamismo de variables
        objeto = 1;
        console.log(objeto);
        console.log(typeof objeto)
    // Boolean (variables bandera)
    var boolBandera = true; // o false
    console.log(boolBandera);
    // Funcion (es un tipo de dato en JavaScript)
    function miFuncion(){}
    console.log(miFuncion);
    // Symbol 
    var simbolo = Symbol("mi simbolo");
    console.log(simbolo);
    // Clase (es una funcion)
    class Persona{
        constructor(cArgNombre, cArgApellido){
            this.cNombre = cArgNombre; 
            this.cApellido = cArgApellido; 
        }
    }
    console.log(typeof Persona);
    // Tipo Undefined
    var x; 
    x = undefined; // <-- Este código es redundante
    console.log(typeof x);
    // Null (ausencia de valor) (es un objeto)
    var y = null; 
    console.log(typeof y);
    // Arrays (es un objeto)
    var iNumeros = ['a', 1];
    console.log(iNumeros);
    console.log(typeof iNumeros)

