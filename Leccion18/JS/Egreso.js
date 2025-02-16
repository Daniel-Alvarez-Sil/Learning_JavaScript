// Clase de Egreso
// Hija de Datos

class Egreso extends Dato{
    // Atributos
        // Estáticos
        static iNextEgreso = 0;
        // Dinámicos
        constructor(cArgDescripcion, iArgValor){
            super(cArgDescripcion, iArgValor);
            this._iEgreso = ++Egreso.iNextEgreso;
        }
    // Métodos
        // GET y SET
            // _iEgreso
            get iEgreso(){
                return this._iEgreso; 
            }
}