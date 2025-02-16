// Funciones Flecha
// Similar a las funciones de tipo expresión 
// Sintáxis
// const <variable que almacene la referencia de la función> = (<argumentos de la funcion>) => {<valor a retornar o comando a ejecutar (si solo es una línea de código en el cuerp, no necesitamos envolver el cuepo de la función con "{}")>};
// NOTA: Si solo es una línea de código y es un comando return, no hay necesidad de escribir "return"
// NOTA: Si solo hay un parámetro, no hay necesidad de envolverlo entre parentesis
// Con las funciones flecha, no podemos usar el concepto de hoisting


const SumarFuncionTipoFlecha = (a, b) => a + b;
const HolaFuncionTipoFlecha = (cNombre) => {console.log("Hola " + cNombre)}; 

console.log("Suma: " + SumarFuncionTipoFlecha(10, 20));
HolaFuncionTipoFlecha("Daniel");

