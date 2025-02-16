let arreglo = [1, 2, 3, 4, 5]; 
console.log(arreglo);

// Añadimos un elemento al final del arreglo, usando push
arreglo.push(6);
console.log(arreglo);

// Añadimos un elemento al final del arreglo, usando el largo del arreglo
arreglo[arreglo.length] = 7; 
console.log(arreglo);

// Añadimos un elemento más allá del final del arreglo
arreglo[10] = 1000;
console.log(arreglo);