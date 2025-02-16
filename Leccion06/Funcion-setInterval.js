// Función setInterval
// Esta función es parecida a la función setTimeout
// La diferencia principal es que setInterval llama, de manera asíncrona y repetitiva, a la función callback

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`); 
}

// ¡Funciona como un reloj!:
setInterval(reloj, 10000);