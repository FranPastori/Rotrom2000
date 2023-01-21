const robotron = document.querySelector(".robo")
var braco = document.querySelector("#braco");
var tirar = document.querySelector("#subtrair");
var adicionar = document.querySelector("#soma");

tirar.addEventListener("click",function(evento){braco.value = parseInt(braco.value) -1;});
adicionar = addEventListener("click", function(evento){braco.value = parseInt(braco.value) +1;});
