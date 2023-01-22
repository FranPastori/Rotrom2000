const robotron = document.querySelector(".robo")

var tirar = document.querySelector("#subtrair");
var adicionar = document.querySelector("#soma");
const controle = document.querySelectorAll(".controle-ajuste");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatistica = document.querySelectorAll("[data-estatisticas]");
var corRobo = document.querySelectorAll(".cor-imagem");
var imagemPrincipal = document.querySelector(".robo");
var srcList = [];

console.log(imagemPrincipal);
console.log(srcList);
controle.forEach(function (elemento) {
    elemento.addEventListener("click", (evento) => {
        manipularDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.pecas);
    });
});
//adicionando envento de click na imagem
for (var i=0; i < corRobo.length; i++){
    var src = corRobo[i].src.split("/").pop();
    srcList.push(src);
    corRobo[i].addEventListener("click",function(){imagemPrincipal.src = srcList [i]})
    ;
    }


function manipularDados(operacao, controle) {
    var peca = controle.querySelector(".controle-contador");
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    }
    else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca) {
estatistica.forEach(
    (elemento)=> {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
    }
)   
}


