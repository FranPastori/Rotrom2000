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


controle.forEach(function (elemento) {
    elemento.addEventListener("click", (evento) => {
        manipularDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.pecas);
    });
});



function manipularDados(operacao, controle) {
    var peca = controle.querySelector(".controle-contador");
    if (operacao === "-" & peca.value>0) {
        peca.value = parseInt(peca.value) - 1;
    }
    else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca) {
estatistica.forEach(
    (elemento)=> {
        console.log()
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
    }
)   
}


