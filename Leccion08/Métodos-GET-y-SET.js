class Persona{
    constructor(cArgNombre, cArgApellido){
        this._cNombre = cArgNombre;
        this._cApellido = cArgApellido; 
        // NOTA: 
        // Los atributos no pueden tener el mismo nombre que sus métodos GET y SET respectivos
        // Por ello, los atributos son precedidos por un guión bajo
    }

    // Métodos GET y SET
    // Mediante estos métodos, nos aseguramos que los atributos solo sean accesados o modificados dentro de la clase
        // _cNombre
        get cNombre(){
            return this._cNombre; 
        }
        set cNombre(cArgNombre){
            this._cNombre = cArgNombre; 
        }
}

// Prueba: 
let persona1 = new Persona("Daniel", "Alvarez"); 
console.log(persona1);
console.log(persona1.cNombre); 
persona1.cNombre = "Manuel";
console.log(persona1);