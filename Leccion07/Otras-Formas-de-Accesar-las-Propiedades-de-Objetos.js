// Creación del objeto
let persona = {
    cNombre: 'Mario', 
    cApellido: 'Rodriguez'
}

// Acceso a las propiedas del objeto
console.log(persona['cNombre']);
console.log(persona['cApellido']);

// Uso de For In
for (atributo in persona) // <-- Iteramos los nombres de las propiedades de nuestro objeto
    console.log(persona[atributo]);