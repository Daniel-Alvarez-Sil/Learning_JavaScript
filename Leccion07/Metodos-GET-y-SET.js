let persona = {
    cNombre: 'Daniel', 
    cApellido: 'Alvarez', 
    iEdad: 19, 
    cIdioma: 'mx',
    // Método GET
    // Estos Métodos nos permiten accesar métodos del objeto como si fuesen propiedades
    get nombreCompleto() {
        return this.cNombre + " " + this.cApellido;
    },
    get lenguaje(){
        return this.cIdioma.toUpperCase();
    }, 
    // Método SET
    // Métodos para modificar la información de las propiedades
    // Este método también puede ser accesado como una propiedad
    set lenguaje(cParamLang){
        this.cIdioma = cParamLang; 
    }
}

console.log(persona.nombreCompleto); 
console.log(persona.lenguaje); 

// Uso del método set
persona.lenguaje = "us"; 
console.log(persona.lenguaje);