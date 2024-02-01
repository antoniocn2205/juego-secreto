let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //Retorno de la función.
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //Hemos especificado el id como ValorUsuario en
    // el archivo .html en la línea de 'input'.
    //console.log(numeroDeUsuario === numeroSecreto); //El triple igual es un 
    // nivel de validación más detallado (tiene que ser igual en valor y en TIPO de dato)
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez':'veces' }`)
        document.getElementById('reiniciar').removeAttribute('disabled');


    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            asignarTextoElemento('p', ' El número secreto es mayor')
        }

        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = ''; //similar al getElementById
    //valorCaja.value = '';
}

//asignarTextoElemento('h1', 'Juego del número secreto!'); //Llamando a la función.
// Hoisting = Movimiento de las variables de las funciones al inicio
// para que ya queden disponibles (sin importar donde uno las escriba)

//asignarTextoElemento('p', 'Indica un número del 1 al 10')

function generarNumeroSecreto() {
    //Poder retornar un valor por parte de nuestra función
    //En este caso, vamos a RETORNAR el número secreto.
    // return Math.floor(Math.random()*10)+1;
    //Cuando ejecutemos esta función, nos VA RETORNAR UN VALOR.

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Si el número generado está incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //Pseudocódigo
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el bóton de 'Nuevo Juego'
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


