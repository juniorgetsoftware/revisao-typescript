let quantidade = 20;


//quantidade = '20'; {{ NÃO COMPILA }}


let numeros = [1, 2, 3, null];

//numeros[0] = true;  {{ NÃO COMPILA }}



//CONTEXTUAL TYPING
window.onmousedown = function(event){ // infere o MouseEvent
    console.log(event.button);
    //console.log(event.buton); {{ NÃO COMPILA }}
}
