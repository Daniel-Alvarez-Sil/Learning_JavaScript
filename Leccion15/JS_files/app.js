function sumar(){
    /*Recuperamos el objeto del formulario (el formulario contiene los objetos de input)*/
    const forma = document.getElementById('formulario');
    let iOperandoA = parseInt(forma[0].value);
    let iOperandoB = parseInt(forma[1].value);
    let iResultado = iOperandoA + iOperandoB;
    let cResultado = "";
    /*Desplegamos el resultado en la ventana*/
    if (isNaN(iResultado))
        cResultado = 'Por favor ingresa 2 operandos. ';
    else
        cResultado = String(iResultado);
    document.getElementById('resultado').innerHTML = cResultado;

}