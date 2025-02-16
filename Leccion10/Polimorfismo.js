// En POO, el polimorfismo se refiera a la capacidad de reutilizar código que funcione de manera distinte dependiendo de la circunstancia bajo la que se ejecuta

// Ejemplo: 
    // Clases
    class Padre {
        constructor(cArgNombre){
            this.cNombre = cArgNombre; 
        }
        imprimir(){
            return "Padre: " + this.cNombre; 
        }
    }
    class Hijo extends Padre{
        constructor(cArgNombre){
            super(cArgNombre); 
        }
        imprimir(){
            return "Hijo: " + this.cNombre; 
        }
    }

    // Uso de polimorfismo
    function imprimir(clase){
        console.log(clase.imprimir());
    }

    // Prueba
    let padre = new Padre("Jose");
    let hijo = new Hijo("Alberto");
    imprimir(padre);
    imprimir(hijo);

