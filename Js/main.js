const robotron = document.querySelector(".robo")
const braco = document.querySelector("#braco");
const tirar = document.querySelector("#subtrair");
const somar = document.querySelector("#adicionar");

tirar.addEventListener("click",subtrair);
somar = addEventListener("click",somar)
function subtrair (){ 
    braco.value =  parseInt(braco.value) -=1 ;
}

function somar (){ 

  braco.value =  parseInt(braco.value) +=1 ;
}
