//incializar variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let turnos = 0;
let buenas = 0;
let temporizador = false;
let timer = 180;
let tiempoRegresivoId = null;
let timerInicial = 180;
let puntuacion = 0;
let userName = "";

requestUserName();


// apuntadores  a los elementos del html    
let mostrarMovimientos = document.getElementById("turnos");
let mostarBuenas = document.getElementById("buenas");
let mostrarTiempo = document.getElementById("t-180");
//variables de audios
let winAudio = new Audio("./audios/win.wav");
let loseAudio = new Audio("./audios/lose.wav");
let clickAudio = new Audio("./audios/click.wav");
let rightAudio = new Audio("./audios/right.wav");
let wrongAudio = new Audio("./audios/wrong.wav");
// ⚠️⚠️
let mostrarPuntuacion = document.getElementById("puntuacion");
//generacion de numeros random
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];   
/*
usamos Math.random() para que nos devuelva un numero aleatorio entre 0 y 1
pero para obtener numeros positivos y negativos restamos -0.5 
y estos seran el parametro para el metodo sort dandonos un arreglo de numeros ordenadoa aleatoriamente
*/
numeros = numeros.sort(()=>{return Math.random()-0.5});


console.log(numeros);
// funciones
function requestUserName() {
    userName = prompt("Por favor, ingresa tu nombre de usuario:");
    if (userName === null || userName.trim() === "") {
    requestUserName();
    }
}
function saveScore() {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({ name: userName, score: puntuacion });
    localStorage.setItem("scores", JSON.stringify(scores));
}

function contarTiempo(){
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `🕰️Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
            loseAudio.play();
            alert("Perdiste, se un poco mas rapido la proxima vez😅");
        }
    },1000);
}
//mostramos las tarjeras si al jugador se le acaba el tiempo
function bloquearTarjetas(){   
    for(let i=0; i<=15; i++){
        let tarjetaBloqueada  = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="./imagenes/${numeros[i]}.png" alt="">`;
        tarjetaBloqueada.disabled = true;
    }
}
//funcion de reiniciar la pagina
function reiniciar(){
    window.location.reload();
}

function displayScores() {
let scores = JSON.parse(localStorage.getItem("scores")) || [];
scores.sort((a, b) => b.score - a.score);

let scoreTable = document.getElementById("scoreTable");
scoreTable.innerHTML = "";

scores.forEach((score, index) => {
    let row = document.createElement("tr");
    let rankCell = document.createElement("td");
    let nameCell = document.createElement("td");
    let scoreCell = document.createElement("td");

    rankCell.textContent = index + 1;
    nameCell.textContent = score.name;
    scoreCell.textContent = score.score;

    row.appendChild(rankCell);
    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    scoreTable.appendChild(row);
});
}

//funcion principal
function destapar(id){

        if(temporizador == false){
            contarTiempo();
            temporizador = true;
        }
        tarjetasDestapadas++;
        //console.log(tarjetasDestapadas);

        if(tarjetasDestapadas== 1){
            //mostramos el primera tarjeta
            //tarjeta1 = document.getElementById(id);
            tarjeta1 = document.getElementById(id);
            primerResultado = numeros[id];
            tarjeta1.innerHTML = `<img src="./imagenes/${primerResultado}.png" alt="">`;
            clickAudio.play();

            //desactivamos el primer boton
            tarjeta1.disabled = true;
            
        }else if(tarjetasDestapadas == 2){
            //mostramos segunda tarjeta
            tarjeta2 = document.getElementById(id);
            segundoResultado = numeros[id];
            tarjeta2.innerHTML = `<img src="./imagenes/${segundoResultado}.png" alt="">`; 
            //desabilitamos el segundo boton
            tarjeta2.disabled = true;

            //incrementamos turnos
            turnos++;
            mostrarMovimientos.innerHTML = `🎫Turnos: ${turnos}`;
            
            //comparar resultados   
            if(primerResultado == segundoResultado){
                //reinicio de tarjetas destapadas
                tarjetasDestapadas = 0;
                //reproducir sonido de correcta eleccion
                rightAudio.play();

                //aumentar buenas
                buenas++;
                mostarBuenas.innerHTML = `👍Buenas: ${buenas}✅`;

                if(buenas == 8){
                    //reproducir sonido de victoria
                    winAudio.play();
                    //terminar juego
                    // calcula puntuacion
                    puntuacion = 100*(timer/timerInicial).toFixed(3);
                    clearInterval(tiempoRegresivoId);
                    mostarBuenas.innerHTML = `Buenas: ${buenas}👌✅`;
                    mostrarTiempo.innerHTML = `Terminaste en:${timerInicial - timer} Segundos ⏱️`;
                    mostrarMovimientos.innerHTML = `🎫turnos: ${turnos} 🙌`;
                    mostrarPuntuacion.innerHTML = `🏆Puntuacion: ${puntuacion}`;

                    alert("Ganaste loco!😎");
                    saveScore();
                    displayScores();
                
                }
            }else{
                //reproducir sonido de incorrecta eleccion
                wrongAudio.play();
                //mostrar momentaneamente tarjetas y volver a tapar
                setTimeout(()=>{
                    tarjeta1.innerHTML = "";
                    tarjeta2.innerHTML = "";
                    tarjeta1.disabled = false;
                    tarjeta2.disabled = false;
                    //reinicio de tarjetas destapadas
                    tarjetasDestapadas = 0;
                },800);
        }
    }
}