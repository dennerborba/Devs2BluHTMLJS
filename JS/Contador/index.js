const btnContador = document.getElementById("btnContador")
const btnLimpar = document.getElementById("btnLimpar")
const btnDado = document.getElementById("btnDado")
const hContador = document.getElementById("hContador")
const sFaces = document.getElementById("sFaces")
const btnLimparDados = document.getElementById('btnLimparDados')
const nDados = document.getElementById("iNumeroDados")
const btnCentral = document.querySelector('.btnCentral');

const cores = ['#13218a', '#911372', '#d66e0d']
let iCor = 0

const btnDadoClick = () => {
    const faces = parseInt(sFaces.value);
    document.querySelectorAll(".container-dados").forEach(element => element.remove());

    let container = document.createElement('div');
    container.classList.add('container-dados');
    container.style.display = "flex"; 
    container.style.gap = "1.5em"; 

    let qtdDados = parseInt(nDados.value);
    while (qtdDados > 0) {
        let dadoValor = document.createElement('span');
        dadoValor.innerText = obterNumeroAleatorio(1, faces);

        let dado = document.createElement('h1');
        dado.classList.add('hContador');

        dado.appendChild(dadoValor);
        container.appendChild(dado);
        qtdDados--;
    }

    btnCentral.appendChild(container); 
};

const btnLimparDadosClick = () => {
    document.querySelectorAll(".container-dados").forEach(element => element.remove());
}


const btnContadorClick = () => {
    let valorAtual = parseInt(hContador.innerText.replace("Resultado: ", "")) || 0;
    hContador.innerText = valorAtual + 1
}

const btnLimparClick = () => {
    hContador.innerText = 0
    btnContador.style.backgroundColor = 'darkslategrey'
}

const btnCorClick = () => {
    for (let i = 0; i < cores.length; i++) {
        if (i == iCor) {
            btnContador.style.backgroundColor = cores[i]
            break
        }
    }
    iCor = (iCor + 1) % cores.length
}

function obterNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

btnContador.addEventListener('click', btnContadorClick)
btnContador.addEventListener('click', btnCorClick)
btnLimpar.addEventListener('click', btnLimparClick)
btnDado.addEventListener('click', btnDadoClick)
btnLimparDados.addEventListener('click', btnLimparDadosClick)
