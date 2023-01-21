const robotron = document.querySelector(".robo")
var braco = document.querySelector("#braco");
var tirar = document.querySelector("#subtrair");
var adicionar = document.querySelector("#soma");
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach (function(evento){ elemento.addEventListener("click", manipularDados (evento.target.textContent))});


function manipularDados (operacao){

    if( operacao==="-"){
        braco.value = parseInt(braco.value) -1;
    }
    else{
        braco.value = parseInt(braco.value) +1;
    }
}


