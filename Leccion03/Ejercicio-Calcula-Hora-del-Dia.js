let iHora = 11; 
let cMensaje = "";

if (iHora >= 6 && 11 >= iHora)
    cMensaje = "Buenos dias "; 
else if (iHora >= 12 && 18 >= iHora)
    cMensaje = "Buenas tardes ";
else if (iHora >= 19 && 24 >= iHora)
    cMensaje = "Buenas noches "; 
else if (iHora >= 0 && 6 >= iHora)
    cMensaje = "Durmiendo... ";
else 
    cMensaje = "Hora invalida. ";

console.log(cMensaje);
