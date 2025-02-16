// El contexto estático se refiere a los atributos y métodos relacionados directamente con la clase
// El contexto dinámico se refiera a los atributos y métodos relacionados directamente con las instancias de la clase
// En JavaScript: 
    // El contexto estático (clases) no tiene acceso al contexto dinámico (instancias de las clases)
    // El contexto dinámico no tiene acceso al contexto estático

// Clase Padre
class Persona {
    // Atributos
        // Atributos estáticos
        static iPersona = 0;
            // Constante 
            static get NACIONALIDAD(){
                return 'MX'; 
            }
            
        // Atributos dinámicos
        cNacionalidad = Persona.NACIONALIDAD; 
        constructor (cArgNombre, cArgApellido){
            this.cNombre = cArgNombre; 
            this.cApellido = cArgApellido; 
            this.iPersona = Persona.iPersona++; 
        }

    // Métodos
        // Métodos estáticos
        static saludar(){
            console.log("Hola desde Método Static. ");
        }
        static saludar(argPersona){
            console.log("Hola " + argPersona.cNombre + " " + argPersona.iPersona + " desde Método Static. ");
        }
}

// Clase Hija
class Empleado extends Persona{

    constructor(cArgNombre, cArgApellido, cArgDepartamento){
        super(cArgNombre, cArgApellido);
        this.cDepartamento = cArgDepartamento; 
    }
}

// Creación de Clases
let persona1 = new Persona("Daniel", "Alvarez");
let empleado1 = new Empleado("Mariana", "Alvarez", "Medicina"); 

// Uso de método estáticos
Persona.saludar(persona1);
Persona.saludar(empleado1); // <-- Cuando una función espera como argumento una clase padre, una clase hija puede ser usada como parámetro

// Los métodos y atributos estáticos son heredables
Empleado.saludar(persona1);
console.log(Empleado.iPersona);
console.log(Persona.iPersona);

// Impresión de Atributo Dinámico
console.log(persona1.cNacionalidad);