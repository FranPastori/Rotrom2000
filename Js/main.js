const robotron = document.querySelector(".robo")
var braco = document.querySelector("#braco");
var tirar = document.querySelector("#subtrair");
var adicionar = document.querySelector("#soma");
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach(function(elemento){ elemento.addEventListener("click",(evento) =>{manipularDados(evento.target.textContent)});});


function manipularDados (operacao){

    if( operacao==="-"){
        braco.value = parseInt(braco.value) -1;
    }
    else{
        braco.value = parseInt(braco.value) +1;
    }
}


