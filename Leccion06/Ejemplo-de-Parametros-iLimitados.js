function SumaIlimitada(){
    let suma = 0; 
    for (let f = 0; f < arguments.length; f++)
        suma += arguments[f];      
    console.log("Suma: " + suma);
}

SumaIlimitada(1,2,3,4,5,6,7);
SumaIlimitada(0,3,1000);
