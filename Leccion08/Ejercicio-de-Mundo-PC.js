// Clases: 
    // Dispositivo Entrada
    class DispositivoEntrada{
        // Atributos
            // Dinámicos
            constructor (cArgTipoEntrada, cArgMarca){
                this._cTipoEntrada  = cArgTipoEntrada; 
                this._cMarca        = cArgMarca; 
            }
        // Métodos
            // GET y SET
                // _cTipoEntrada
                get cTipoEntrada(){
                    return this._cTipoEntrada;
                }
                set cTipoEntrada(cArgTipoEntrada){
                    this._cTipoEntrada = cArgTipoEntrada;
                }
                // _cMarca
                get cMarca(){
                    return this._cMarca;                 
                }
                set cMarca(cArgMarca){
                    this._cMarca = cArgMarca; 
                }     
    }
    // Raton
    class Raton extends DispositivoEntrada{
        // Atributos
            // Estáticos
            static iNextRaton = 0; 
            // Dinámicos
            constructor(cArgTipoEntrada, cArgMarca){
                super(cArgTipoEntrada, cArgMarca);
                this._iRaton = ++Raton.iNextRaton; 
            }
        // Métodos 
            // GET
                // _iRaton
                get iRaton(){
                    return this._iRaton; 
                }
            // Sobreescritos
                // toString
                toString(){
                    return "Raton #" + this._iRaton + " -> " + "Marca: " + this._cMarca + ", Tipo de Entrada: " + this._cTipoEntrada; 
                }
    }
    // Teclado
    class Teclado extends DispositivoEntrada {
        // Atributos
            // Estáticos
            static iNextTeclado = 0; 
            // Dinámicos
            constructor(cArgTipoEntrada, cArgMarca){
                super(cArgTipoEntrada, cArgMarca);
                this._iTeclado = ++Teclado.iNextTeclado; 
            }
        // Métodos
            // GET 
                // _iTeclado
                get iTeclado(){
                    return this._iTeclado; 
                }
            // Sobreescritos
                // toString
                toString(){
                    return "Teclado #" + this._iTeclado + " -> " +  "Marca: " + this._cMarca + ", Tipo de Entrada: " + this._cTipoEntrada; 
                }    
    }
    // Monitor
    class Monitor {
        // Atributos
            // Estáticos
            static iNextMonitor = 0; 
            // Dinámicos
            constructor(cArgMarca, fArgTamano){
                this._iMonitor  = ++Monitor.iNextMonitor; 
                this._cMarca    = cArgMarca; 
                this._fTamano   = fArgTamano; 
            }
        // Métodos 
            // GET y SET
                // _iMonitor
                get iMonitor(){
                    return this._iMonitor; 
                }
                // _cMarca
                get cMarca(){
                    return this._cMarca; 
                }
                set cMarca(cArgMarca){
                    this._cMarca = cArgMarca; 
                }
                // _fTamano
                get fTamano(){
                    return this._fTamano; 
                }
                set fTamano(fArgTamano){
                    this._fTamano = fArgTamano; 
                }
            // Sobreescritos
                // toString
                toString(){
                    return "Monitor #" + this._iMonitor + " -> " + "Marca: " + this._cMarca + ", Tamaño: " + this._fTamano; 
                }
    }
    // Computadora
    class Computadora{
        // Atributos
            // Estáticos
            static iNextComputadora = 0; 
            // Dinámicos
            constructor(cArgNombre, monitorArg, tecladoArg, ratonArg){
                this._iComputadora  = ++Computadora.iNextComputadora;
                this._cNombre       = cArgNombre; 
                this._monitor       = monitorArg; 
                this._teclado       = tecladoArg; 
                this._raton         = ratonArg; 
            }        
        // Métodos
            // GET y SET
                // _iComputadora
                get iComputador(){
                    return this._iComputadora; 
                }
                // _cNombre
                get cNombre(){
                    return this._cNombre;                     
                }
                set cNombre(cArgNombre){
                    this._cNombre = cArgNombre; 
                }
                // _monitor
                get monitor(){
                    return this._monitor; 
                }
                set monitor(monitorArg){
                    this._monitor = monitorArg; 
                }
                // _teclado 
                get teclado(){
                    return this._teclado; 
                }
                set teclado(tecladoArg){
                    this._teclado = tecladoArg; 
                }
                // _raton
                get raton(){
                    return this._raton; 
                }                
                set raton(ratonArg){
                    this._raton = ratonArg; 
                }
            // Sobreescritos
                // toString
                toString(){
                    return "Computadora #" + this._iComputadora + ", " + this._cNombre + " -> " + "\n\t" + this._monitor.toString() + "\n\t" + this._teclado.toString() + "\n\t" + this._raton.toString()
                }
    }
    // Orden
    class Orden {
        // Atributos
            // Estáticos
            static iNextOrden = 0; 
            // Dinámicos
            constructor(){
                this._iOrden        = ++Orden.iNextOrden; 
                this._computadoras  = new Array();
            }
        // Métodos
            // GET
                // _iOrden
                get iOrden(){
                    return this._iOrden; 
                }
                // _computadores
                get computadoras(){
                    return this._computadoras; 
                }
            // Para agregar una computadora
            agregarComputadora(computadoraArg){
                this._computadoras.push(computadoraArg);
            }
            // Imprimir la orden
            imprimirOrden(){
                console.log(this.toString());
            }
            // Sobreescritos
                // toString
                toString(){
                    let cToString = "Orden #" + this._iOrden + ": \n"; 
                    for (let computadora of this._computadoras)
                        cToString += (computadora.toString() + "\n");
                    return cToString; 
                }
    }

// Pruebas
    // Ratones
    let raton1 = new Raton("Bluetooth", "HP");
    let raton2 = new Raton("USB-C", "HP");
    console.log(raton1.toString());
    console.log(raton2.toString());
    // Teclados
    let teclado1 = new Teclado("Bluetooth", "HP");
    let teclado2 = new Teclado("USB-A", "HP");
    console.log(teclado1.toString());
    console.log(teclado2.toString());
    // Monitores
    let monitor1 = new Monitor("Samsung", "32");
    let monitor2 = new Monitor("Dell", "16");
    console.log(monitor1.toString());
    console.log(monitor2.toString());
    // Computadoras
    let computadora1 = new Computadora("DAS", monitor1, teclado1, raton1);
    let computadora2 = new Computadora("Pruebas", monitor2, teclado2, raton2);
    let computadora3 = new Computadora("Mary", monitor1, teclado2, raton2);
    let computadora4 = new Computadora("Andres", monitor2, teclado1, raton1);
    console.log(computadora1.toString());
    console.log(computadora2.toString());
    console.log(computadora3.toString());
    console.log(computadora4.toString());
    // Ordenes
    let orden1 = new Orden();
    orden1.agregarComputadora(computadora1);
    orden1.agregarComputadora(computadora2);
    orden1.agregarComputadora(computadora3);
    let orden2 = new Orden();
    orden2.agregarComputadora(computadora4); 
    console.log(orden1.toString());
    console.log(orden2.toString());