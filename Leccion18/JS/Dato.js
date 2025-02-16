// Definimos la clase de Datos
// Padre de Ingreso y Egreso

class Dato{
    // Atributos
        // Dinámicos
        constructor(cArgDescripcion, iArgValor){
            this._cDescripcion  = cArgDescripcion;
            this._iValor        = iArgValor; 
        }
    // Métodos
        // GET y SET
            // _cDescripcion
            get cDescripcion(){
                return this._cDescripcion; 
            }            
            set cDescripcion(cArgDescripcion){
                this._cDescripcion = cArgDescripcion; 
            }
            // _iValor
            get iValor(){
                return this._iValor;
            }
            set iValor(iArgValor){
                this._iValor = iArgValor;
            }
}