// Sintáxis para eliminar la propiedad de un objeto
// delete <objeto>.<propiedad a eliminar>; 

let persona = {
    cNombre: 'Alfredo', 
    cApellido: 'Gutierrez'
}

console.log(persona); 
delete persona.cNombre; 
console.log(persona); 