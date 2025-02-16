// Código para el funcionamiento de nuestro reloj: 

// Función asíncrona persistente para actualizar el tiempo (hora, minutos y segundos) de la fecha
const mostrarReloj = () =>{
    let fecha = new Date();
    let iTiempo = [fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()];
    document.getElementById('hora').innerHTML = `${iTiempo[0].toLocaleString('en-US', {minimumIntegerDigits: 2})}:${iTiempo[1].toLocaleString('en-US', {minimumIntegerDigits: 2})}:${iTiempo[2].toLocaleString('en-US', {minimumIntegerDigits: 2})}`;
    // Con la función toggle, si es que la clase no está presente en el objeto, podemos añadir una clase a un objeto HTML,
    // Si la clase ya está presente en el objeto, la clase es removida 
    document.getElementById('contenedor').classList.toggle('animar');
};

// Función para actualizar la fecha (día, mes y año)
const mostrarFecha = () => {
    let fecha = new Date();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dias  = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    document.getElementById('fecha').innerHTML = `${dias[fecha.getDay()]} ${fecha.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2})} de ${meses[fecha.getMonth()]}, ${fecha.getFullYear()}`    
};

// Comenzamos con la ejecución asíncrona, persistente de la actualización del tiempo
setInterval(mostrarReloj, 1000);