// Herencia
// Por medio de este concepto, las clases pueden heredar atributos y/o métodos se la clase padre
// Ejemplo: 

class Persona extends Object{ // <-- Todas las clase heredan implícitamente de la clase Object
    constructor(cArgNombre, cArgApellido){
        super();
        this._cNombre = cArgNombre;
        this._cApellido = cArgApellido; 
    }
    // Métodos GET y SET
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
    // Impresión de Atributos
    imprimir (){
        return this.cNombre + " " + this.cApellido; 
    }
}

class Empleado extends Persona { // <-- Esta clase hereda de la clase Persona, es decir tiene acceso a la información de la clase Padre
    constructor(cArgNombre, cArgApellido, cArgDepartamento){
        super(cArgNombre, cArgApellido); // <-- Llamamos al constructor de la clase padre mediante el comando "super". El comando super es equivalente a una llamada a la referencia de la clase padre
        this._cDepartamento = cArgDepartamento; 
    }
    // Métodos GET y SET
        // _cDepartamento
        get cDepartamento(){
            return this._cDepartamento; 
        }
        set cDepartamento(cArgDepartamento){
            this._cDepartamento = cArgDepartamento; 
        }
    // Sobreescrituro del método "imprimir" de la clase padre
    imprimir(){
        return super.imprimir() + ", Departamento: " + this._cDepartamento;
    }

    // Sobreescritura del método "toString" de la clase abuela, la clase Object
    toString(){
        return this.imprimir();
    }

}

let persona1 = new Persona("Daniel", "Alvarez"); 
console.log(persona1); 

let empleado1 = new Empleado("Daniel", "Alvarez", "Sistemas");
console.log(empleado1);
// Métodos sobreescritos de las clases que hereda la clase Empleado: 
console.log(empleado1.imprimir());
console.log(empleado1.toString());