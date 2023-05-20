//incializar variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;


//generacion de numeros random
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];   
/*
usamos Math.random() para que nos devuelva un numero aleatorio entre 0 y 1
pero para obtener numeros positivos y negativos restamos -0.5 
y estos seran el parametro para el metodo sort dandonos un arreglo de numeros ordenadoa aleatoriamente
*/
numeros = numeros.sort(()=>{return Math.random()-0.5});

console.log(numeros);

//funcion principal para destapar
function destapar(id){
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas== 1){
        //mostramos el primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = primerResultado;

        //desactivamos el primer boton
        tarjeta1.disabled = true;
        


    }
}