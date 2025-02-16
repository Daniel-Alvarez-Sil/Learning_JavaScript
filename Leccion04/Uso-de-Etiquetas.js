// Las etiquetas fungen como checkpoints a los que se puede accesar dentro del sistema
// El uso de etiquetas no es ideal

inicio: // <-- Uso de etiquetas
for (let f = 0; f <= 10; f++){
    if (f % 2 != 0)
        continue inicio; // <-- Regresa al código que está después de inicio
    console.log(f);
}

inicio2: 
for (let f = 0; f <= 10; f++){
    if (f % 2 != 0)
        break inicio2; // <-- Rompe el ciclo que procede a la etiqueta
    console.log(f);
}