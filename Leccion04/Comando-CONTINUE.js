// El comando continue nos permite saltar la presente iteración de un ciclo y proceder a la siguiente

for (let f = 0; f <= 10; f++){
    if (f % 2 != 0)
        continue; // Salta a la siguiente iteración
    console.log(f);
}