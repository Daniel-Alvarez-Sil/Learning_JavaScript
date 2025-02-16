// Funciónes Async

// Ejemplos: 
    // Función Async
    async function miFuncionAsync(){
        return "Valor Default"; 
    }
    // Función Async pero elaborada de manera manual
    function miFuncionAsync2 (){
        return Promise.resolve("Valor Default"); // Esta sintáxis retorna una promesa con un valor para resolver predeterminado
    }

    // Definición de la función a llamar en la promesa
    function funcionDesdePromesa(cArgMensaje){
        console.log(cArgMensaje); 
    }

    // Uso de las funciones async (manual y automática)
    miFuncionAsync().then(funcionDesdePromesa);
    miFuncionAsync2().then(funcionDesdePromesa);