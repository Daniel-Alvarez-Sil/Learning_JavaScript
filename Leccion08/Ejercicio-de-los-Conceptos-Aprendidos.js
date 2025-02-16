// Ejercicio: 

// Clase Padre: 
class Persona {
    // Atributos 
        // Estáticos
        static iNextPersona = 1; 
        // Dinámicos            
        constructor(cArgNombre, cArgApellido, iArgEdad){
            this._iPersona  = Persona.iNextPersona++;
            this._cNombre   = cArgNombre; 
            this._cApellido = cArgApellido; 
            this._iEdad     = iArgEdad; 
        }
    // Métodos
        // Métodos GET y SET
            // _iPersona
            get iPersona(){
                return this._iPersona; 
            }
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
            // _iEdad
            get iEdad(){
                return this._iEdad; 
            }
            set iEdad(iArgEdad){
                this._iEdad = iArgEdad; 
            }
        // Métodos Sobreescritos
            // toString
            toString(){
                return "Nombre: " + this._cNombre + " " + this._cApellido +", Edad: " + this._iEdad; 
            }
}

// Clases Hijas
class Empleado extends Persona{
    // Atributos
        // Atributos Estáticos
        static iNextEmpleado = 1; 
        // Atributos Dinámicos
        constructor (cArgNombre, cArgApellido, iArgEdad, fArgSueldo){
            super(cArgNombre, cArgApellido, iArgEdad);      
            this._iEmpleado = Empleado.iNextEmpleado++;            
            this._fSueldo = fArgSueldo; 
        }
    // Métodos 
        // Métodos GET y SET
            // _iEmpleado
            get iEmpleado(){
                return this._iEmpleado; 
            }
            // _fSueldo
            get fSueldo(){
                return this._fSueldo; 
            }
            set fSueldo(fArgSueldo){
                this._fSueldo = fArgSueldo; 
            }
        // Métodos Sobreescritos
            // toString
            toString(){
                return "Empleado #" + this._iEmpleado + " -> " + super.toString() + ", Sueldo: " + this._fSueldo; 
            }
}

class Cliente extends Persona{
    // Atributos 
        // Atributos Estáticos
        static iNextCliente = 1; 
        // Atributos Dinámicos
        constructor(cArgNombre, cArgApellido, iArgEdad, fechaArgRegistro){
            super(cArgNombre, cArgApellido, iArgEdad);
            this._iCliente = Cliente.iNextCliente++;          
            this._fechaRegistro = fechaArgRegistro; 
        }
    // Métodos
        // Métodos GET y SET
            // _iCliente
            get iCliente(){
                return this._iCliente; 
            }
            // _fechaRegistro
            get fechaRegistro(){
                return this._fechaRegistro; 
            }
            set fechaRegistro(fechaArgRegistro){
                this._fechaRegistro = fechaArgRegistro;  
            }
        // Métodos Sobreescritos
            // toString
            toString(){
                return "Cliente #" + this._iCliente + " -> " + super.toString() + ", Fecha de Registro: " + this._fechaRegistro; 
            }
}


// Pruebas 
let persona1 = new Persona("Daniel", "Alvarez", 19);
console.log(persona1.toString())

let empleado1 = new Empleado("Daniel", "Alvarez", 19, 3000.00);
console.log(empleado1.toString());
let empleado2 = new Empleado("Mariana", "Alvarez", 19, 3000);
console.log(empleado2.toString())

let cliente1 = new Cliente("Gerardo", "Guzman", 25, new Date());
console.log(cliente1.toString());

