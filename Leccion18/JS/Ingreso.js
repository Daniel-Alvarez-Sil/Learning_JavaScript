// Clase de Ingreso
// Hija de Dato

class Ingreso extends Dato{
    // Atributos
        // Estáticos
        static iNextIngreso = 0;
        // Dinámicos
        constructor (cArgDescripcion, iArgValor){
            super(cArgDescripcion, iArgValor);
            this._iIngreso = ++Ingreso.iNextIngreso;
        }
    // Métodos
        // GET 
            // _iIngreso
            get iIngreso(){
                return this._iIngreso;
            }
}