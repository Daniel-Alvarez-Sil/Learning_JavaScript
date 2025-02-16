// Calcular la estación del año

let iMes = 4; 
let cEstacion = "";

if (iMes == 12 || iMes == 1 || iMes == 2)
    cEstacion = "Invierno";
else if (iMes == 3 || iMes == 4 || iMes == 5)
    cEstacion = "Primavera";
else if (iMes == 6 || iMes == 7 || iMes == 8)
    cEstacion = "Verano";
else if (iMes == 9 || iMes == 10 || iMes == 11)
    cEstacion = "Otoño";
else
    cEstacion = "Estación Desconocida";

console.log("La estación es: " + cEstacion);