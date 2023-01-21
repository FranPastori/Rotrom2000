const robotron = document.querySelector(".robo")
var braco = document.querySelector("#braco");
var tirar = document.querySelector("#subtrair");
var adicionar = document.querySelector("#soma");
tirar.addEventListener("click", function(){
manipularDados("tirar")});
adicionar.addEventListener("click", function(){
    manipularDados("adiconar")});

function manipularDados (operacao){

    if( operacao==="tirar"){
        braco.value = parseInt(braco.value) -1;
    }
    else{
        braco.value = parseInt(braco.value) +1;
    }
}