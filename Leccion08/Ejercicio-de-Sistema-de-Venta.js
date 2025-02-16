// Ejercicio de Sistema de Venta

class Producto {
    // Atributos
        // Estáticos 
        static iNextProducto = 0;
        // Dinámicos
        constructor (cArgNombre, fArgPrecio){
            this._iProducto = ++Producto.iNextProducto;
            this._cNombre   = cArgNombre;
            this._fPrecio   = fArgPrecio; 
        }

    // Métodos
        // Métodos GET y SET
            // _iProducto
            get iProducto(){
                return this._iProducto; 
            }
            // _cNombre
            get cNombre (){
                return this._cNombre; 
            }
            set cNombre(cArgNombre){
                this._cNombre = cArgNombre; 
            }
            // _fPrecio
            get fPrecio(){
                return this._fPrecio; 
            }
            set fPrecio(fArgPrecio){
                this._fPrecio = fArgPrecio; 
            }
        // Métodos Sobreescritos
            // toString
            toString(){
                return this._cNombre + "\t\t" + this._fPrecio; 
            }
}

class Orden {
    // Atributos
        // Estáticos
        static iNextOrden = 0; 
        static get iMAX_PRODUCTOS (){
            return 5;
        }
        // Dinámicos
        _productos = new Array();
        constructor(){
            this._iOrden         = ++Orden.iNextOrden; 
            this._iNumProductos  = 0; 
        }
    // Métodos
        // Para agregar un producto a la orden
        agregarProducto(argProducto){
            if (this._iNumProductos < Orden.iMAX_PRODUCTOS)
                this._productos[this._iNumProductos++] = argProducto;
            else console.log("ERROR: Se ha alcanzado el límite de productos. ");
        }
        // Calcular Total
        calcularTotal(){
            let fTotal = 0.00;
            for (let f = 0; f < this._iNumProductos; f++)
                fTotal += this._productos[f].fPrecio;
            return fTotal; 
        }
        // Métodos GET
            // _productos
            get productos(){
                return this._productos; 
            }
            // _iOrden
            get iOrden(){
                return this._iOrden; 
            }
            // _iNumProductos
            get iNumProductos(){
                return this._iNumProductos; 
            }
        // Métodos Sobreescritos
            // toString
            toString(){
                let cToString = "";
                cToString = "Artículos\tPrecio\n---------------------------------\n";
                for (let f = 0; f < this._iNumProductos; f++)
                    cToString += (this._productos[f].toString() + "\n");
                cToString += ("---------------------------------\nTotal: \t\t" + this.calcularTotal());
                return cToString;
            }
}

// Pruebas
let producto1 = new Producto("Manga", 129.00);
console.log(producto1.toString())
let producto2 = new Producto("Playera", 200.20);
console.log(producto2.toString());
let producto3 = new Producto("Panes", 50.00);
let producto4 = new Producto("Netflix", 149.99);
let producto5 = new Producto("Agua", 25.00);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5); 
orden1.agregarProducto(producto3);
console.log(orden1.toString());

let orden2 = new Orden(); 
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto1);
console.log(orden2.toString());
