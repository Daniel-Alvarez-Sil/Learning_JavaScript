// Como dentro del HTML, el archivo persona.js fue definido antes que este archivo, podemos usar la clase "Persona" sin ningún problema
console.log("Listado de Personas. ");

const personas = [
    new Persona('Daniel','Alvarez'), 
    new Persona('Mariana', 'Alvarez')
];

// Imprimimos las personas cargadas inicialmente
function mostrarPersonas(){
    console.log("Mostrar personas...");
    let listaHTML = "";
    for (let persona of personas)
        listaHTML += '<li>' + persona.cNombre + " " + persona.cApellido + "</li>";    
    document.getElementById('personas').innerHTML = listaHTML;
}

// Función para ejecutar cuando se agregue una nueva persona
function agregarPersona(){
    const forma = document.getElementById('forma');
    let objetoNombre = forma[0];
    let objetoApellido = forma[1];
    if (objetoNombre.value == '' && objetoApellido.value == '')
        console.log("No hay valor en la casilla de Nombre. ")    
    else{
        let personaNueva = new Persona(objetoNombre.value, objetoApellido.value);
        document.getElementById('personas').innerHTML += '<li>' + personaNueva.cNombre + " " + personaNueva.cApellido + "</li>";       
        objetoNombre.value = '';
        objetoApellido.value = '';
    }
    // console.log(`{${objetoNombre.value}}-{${objetoNombre.value}}`); 
}