console.log("Clase de Persona. ");
class Persona{
    // Atributos dinámicos
    constructor(cArgNombre, cArgApellido){
        this._cNombre = cArgNombre; 
        this._cApellido = cArgApellido; 
    }
    // Métodos 
        // GET y SET
            // _cNombre
            get cNombre(){
                return this._cNombre; 
            }
            set cNombre(cArgNombre){
                this._cNombre = cArgNombre; 
            }
            // _cApellido
            get cApellido(){
                return this._cApellido; 
            }
            set cApellido(cArgApellido){
                this._cApellido = cArgApellido; 
            }
}