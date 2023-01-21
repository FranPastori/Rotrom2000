const robotron = document.querySelector(".robo")

var tirar = document.querySelector("#subtrair");
var adicionar = document.querySelector("#soma");
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach(function(elemento){ elemento.addEventListener("click",(evento) =>{manipularDados(evento.target.textContent,evento.target.parentNode)});});


function manipularDados (operacao,controle){
    var peca = controle.querySelector(".controle-contador");
    if( operacao==="-"){
        peca.value = parseInt(peca.value) -1;
    }
    else{
        peca.value = parseInt(peca.value) +1;
    }
}


