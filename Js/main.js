const robotron = document.querySelector(".robo")
var braco = document.querySelector("#braco");
var tirar = document.querySelector("#subtrair");
var adicionar = document.querySelector("#soma");

tirar.addEventListener("click",remove);
adicionar = addEventListener("click", somar)



function remove (){ 
    braco.value =  parseInt(braco.value) -1;
}

function somar (){ 

  braco.value = parseInt(braco.value) +1;
}
