// Habilitamos un modo de pruebas
let lPruebas = false; 
if (lPruebas)
    for (let objetoHTML of document.getElementsByTagName('*')){
        objetoHTML.classList.add('border-pruebas');
    }

// Definimos los arreglos de datos
    // Ingresos
    const arrayIngresos = [/*new Ingreso('Sueldo', 3000), new Ingreso('Dinero Jenny', 1000)*/];
    // Egresos
    const arrayEgresos = [/*new Egreso('Manga', 149)*/];

// Definimos las funciones flecha de la app
    // Programa para actualizar toda la app
    let actualizarApp = () => {
        actualizarPresupuestoCabecero();
        cargarIngresos();
        cargarEgresos();
    };
    // Programa para actualizar el cabecero
    let actualizarPresupuestoCabecero = () => {
        let iTotalIngresos  = totalIngresos();
        let iTotalEgresos   = totalEgresos(); 
        document.getElementById('iPresupuestoTotal').innerHTML = moneda(iTotalIngresos - iTotalEgresos);
        document.getElementById('iIngresoTotal').innerHTML = moneda(iTotalIngresos); 
        document.getElementById('iEgresoTotal').innerHTML = moneda(iTotalEgresos);
        document.getElementById('iPorcentajeEgresos').innerHTML = porcentaje(iTotalEgresos / iTotalIngresos);
    };
    // Programas para calcular totales
        // Ingresos
        let totalIngresos = () => {
            let iIngresos = 0.00; 
            for (let ingreso of arrayIngresos)
                iIngresos += ingreso.iValor;
            return iIngresos; 
        };
        // Egresos      
        let totalEgresos = () => {
            let iEgresos = 0.00; 
            for (let egreso of arrayEgresos)
                iEgresos += egreso.iValor;
            return iEgresos; 
        };
    // Programas para dar formato a valores 
        // Formato de Moneda
        let moneda = (fArgValor) => {
            if (!isNaN(fArgValor))
                return fArgValor.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimiumFractionDigits: 2});
            else 
                return '$0.00';
        };
        let porcentaje = (fArgPorcentaje) => {
            if (!isNaN(fArgPorcentaje))
                return fArgPorcentaje.toLocaleString('en-US', {style: 'percent', minimumFracctionDigits: 2});
            else 
                return '0.00%';
        };
    // Programas para cargar Ingresos y Egresos
        // Ingresos
        let cargarIngresos = () => {
            let cIngresosHTML = '';
            for (ingreso of arrayIngresos)
                cIngresosHTML += ingresoHTML(ingreso); 
            document.getElementById('lista-ingresos').innerHTML = cIngresosHTML; 
        };
        // Egresos
        let cargarEgresos = () => {
            let cEgresosHTML = '';
            for (egreso of arrayEgresos)
                cEgresosHTML += egresoHTML(egreso);
            document.getElementById('lista-egresos').innerHTML = cEgresosHTML;
        };
    // Programas para crear los elementos HTML de Ingreso y Egresos
        // Ingresos
        let ingresoHTML = ingresoArg => {
            return `<div class = "elemento limpiarEstilos">
            <div class = 'elemento_descripcion'> ${ingresoArg.cDescripcion} </div>
            <div class = 'elemento_eliminar'>
                <button class = 'elemento_eliminar--btn'>
                    <ion-icon name = 'close-circle-outline' onclick = 'eliminarIngreso(${ingresoArg.iIngreso})'>                                
                    </ion-icon>
                </button>
            </div>
            <div class = 'elemento_valor'> +${moneda(ingresoArg.iValor)} </div>                    
        </div>`;
        };
        // Egresos
        let egresoHTML = egresoArg => {
            return `<div class = 'elemento limpiarEstilos'>
            <div class = 'elemento_descripcion'> ${egresoArg.cDescripcion} </div>
            <div class = 'elemento_eliminar'>
                <button class = 'elemento_eliminar--btn'>
                    <ion-icon name = 'close-circle-outline' onclick = 'eliminarEgreso(${egresoArg.iEgreso})'>
                    </ion-icon>
                </button>
            </div>
            <div class = 'elemento_porcentaje'> ${porcentaje(egresoArg.iValor / totalEgresos())} </div>
            <div class = 'elemento_valor'> -${moneda(egresoArg.iValor)} </div>                                       
        </div>`; 
        };
    // Programas para eliminar datos
        // Ingresos
        let eliminarIngreso = iArgIngreso => {
            arrayIngresos.splice(arrayIngresos.findIndex(ingresoArg => ingresoArg.iIngreso === iArgIngreso), 1);
            actualizarPresupuestoCabecero();
            cargarIngresos();
        };
        // Egresos
        let eliminarEgreso = iArgEgreso => {
            arrayEgresos.splice(arrayEgresos.findIndex(egresoArg => egresoArg.iEgreso === iArgEgreso), 1);
            actualizarPresupuestoCabecero();
            cargarEgresos();
        };
    // Programa para guardar los cambios
    let agregarDato = () => {
        let objetoFormulario    = document.forms['formulario'];        
        let cDescripcion        = objetoFormulario['cDescripcion'].value;
        let iValor              = objetoFormulario['iValor'].value;
        if (cDescripcion !== '' && iValor !== ''){
            let cTipo          = objetoFormulario['boxTipo'].value;
            if (cTipo === 'ingreso')
                arrayIngresos.push(new Ingreso(cDescripcion, +iValor));      
            else if (cTipo === 'egreso')
                arrayEgresos.push(new Egreso(cDescripcion, +iValor));
            objetoFormulario['boxTipo'].value       = 'ingreso';
            objetoFormulario['cDescripcion'].value  = '';
            objetoFormulario['iValor'].value        = '';
            actualizarApp();
            console.log(arrayIngresos, arrayEgresos);
        }
        else
            window.alert('Por favor ingresa la información requerida. ');

    }
        
