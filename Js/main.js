const robotron = document.querySelector(".robo")
let braco = document.querySelector("#braco");
const tirar = document.querySelector("#subtrair");
const adicionar = document.querySelector("#adicionar");

tirar.addEventListener("click",subtrair);
adicionar = addEventListener("click", somar)
function subtrair (){ 
    braco.value =  parseInt(braco.value) -=1 ;
}

function somar (){ 

  braco.value =  parseInt(braco.value) +=1 ;
}
