let a = 1, b = 2, z; 

// Incremento
    // Pre - incremento
    z = ++a; // Incrementamos el valor de a antes de asignarlo a la variable z
    console.log("z = " + z);
    console.log("a = " + a);
    // Post - incremento   
    z = a++; // Primero asignamos el valor de a --> z y despues se incrementa el valor de a
    console.log("z = " + z);
    console.log("a = " + a)

// Decremento
    // Pre - decremento
    z = --b; 
    console.log("z = " + z);
    console.log("b = " + b);
    // Post - decremento
    z = b--; 
    console.log("z = " + z); 
    console.log("b = " + b);