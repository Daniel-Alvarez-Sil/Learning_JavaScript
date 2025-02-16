// Paso por valor -> cuando el argumento no es un objeto
// Paso por referencia -> cuando el argumento es un objeto (tiene propiedades y métodos)

// Paso por Valor: 

    // Valor primitivo
    let x = 10; 

    // Intentamos modificar la antedicha variable con una función
    function cambiarValor_noFunciona(a){
        a = 20; 
    }

    console.log(x);
    // Esto es un ejemplo de paso por valor y no por referencia
    cambiarValor_noFunciona(20); 
    console.log(x);

// Paso por referencia

    // Objeto
    const persona = {
        nombre: 'Juan', 
        apellido: 'Perez'
    }

    // Intentamos modificar el objeto mediante una función
    function cambiarValor_siFunciona(p1){
        p1.nombre = 'Daniel'; 
        p1.apellido = 'Alvarez'; 
    }

    console.log(persona); 
    // Esto es un ejemplo de paso por referencia
    cambiarValor_siFunciona(persona);
    console.log(persona);