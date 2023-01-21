const robotron = document.querySelector(".robo")
var braco = document.querySelector("#braco");
var tirar = document.querySelector("#subtrair");
var adicionar = document.querySelector("#soma");

tirar.addEventListener("click",subtrair);
adicionar = addEventListener("click", somar)



function subtrair (){ 
    braco.value =  parseInt(braco.value) -1;
}

function somar (){ 

  braco.value = parseInt(braco.value) +1;
}
