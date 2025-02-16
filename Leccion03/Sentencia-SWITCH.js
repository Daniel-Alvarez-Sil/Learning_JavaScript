// Estructura SWITH

let iNumero =  1; 
let cNumero = "";

switch(iNumero){
    case 1:
        cNumero = "Número uno. "
        break; 
    case 2: 
        cNumero = "Número dos. ";
        break; 
    case 3: 
        cNumero = "Número tres. ";
        break; 
    case 4:
        cNumero = "Número cuatro. ";
        break; 
    default: 
        cNumero = "Número desconocido. "; 
        break; 
}

console.log(cNumero);