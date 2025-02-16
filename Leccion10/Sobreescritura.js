// La sobreescritura es un concepto innato de la herencia de clases
// La sobreescritura se refiere al acto de: una clase hija modificar el comportamiento de una clase padre

// Ejemplo: 
    // Clase Padre
    class Empleado{
        // Atributos
            // Dinámicos
            constructor(cArgNombre, fArgSueldo){
                this.cNombre = cArgNombre; 
                this.fSueldo = fArgSueldo; 
            }
        // Métodos
        obtenerDetalles(){
            return `Empleado -> Nombre: ${this.cNombre}, Sueldo: ${this.fSueldo}`;
        } 
    }
    // Clase Hija
    class Gerente extends Empleado{
        // Atributos 
            // Dinámicos
            constructor(cArgNombre, fArgSueldo, cArgDepto){
                super(cArgNombre, fArgSueldo);
                this.cDepto = cArgDepto; 
            }
        // Métodos
            // Sobreescritos
            obtenerDetalles(){
                return super.obtenerDetalles() + ", Gerente: " + this.cDepto; 
            }
    }

    // Pruebas:
    let empleado1 = new Empleado("Daniel", 3000);
    console.log(empleado1.obtenerDetalles());
    let gerente1 = new Gerente("Fernando", 9000, "Sistemas");
    console.log(gerente1.obtenerDetalles());