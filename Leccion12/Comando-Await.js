// El comando await nos permite esperar la ejecución de una promesa
// De esta manera, detenemos momentaneamente la ejecución asíncrona de los procesos
// El comando retorna, el valor resuelto de la promesa

async function miFuncion (){
    let miPromesa = new Promise(
        resolver => {
            if (true)
                return resolver("xd");
        }
    );
    console.log(await miPromesa); 
}

miFuncion();