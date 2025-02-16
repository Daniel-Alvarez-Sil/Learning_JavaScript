// Creación de una función async para usar el comando await
async function aplicacion(){
    // Creación de nuestra promesa
    let miPromesa = new Promise(
        (resolver, error) => {
            if (true == false)
                // Ejecutamos la función de éxito junto con un timeout
                setTimeout(() => resolver("Aplicación de Conocimientos Aprendidos"), 10000);
            else 
                error("Error");
        }
    );
    // Consumamos la promesa e imprimimos su valor resuelto (resolved value)
    console.log(await miPromesa);
}

aplicacion();