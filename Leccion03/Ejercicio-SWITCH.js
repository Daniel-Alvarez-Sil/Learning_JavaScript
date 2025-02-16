// Ejercicio para calcular la estación del año

let iMes = 4; 
let cEstacion = ""; 

switch (iMes){ // La comparación de tipos con una sentencia de control SWITCH es estricta
               // Ejemplo: 4 == "4" ? = false
    case 12: 
    case 1: 
    case 2: 
        cEstacion = "Invierno";
        break; 
    case 3:
    case 4:
    case 5:
        cEstacion = "Primavera";
        break;
    case 6:
    case 7:
    case 8: 
        cEstacion = "Verano";
        break; 
    case 9: case 10: case 11: 
        cEstacion = "Otoño";
        break; 
    default: 
        cEstacion = "Estación desconocida";
        break; 
}

console.log(cEstacion);