const btnContador = document.getElementById("btnContador")
const btnDado = document.getElementById("btnDado")
const hContador = document.getElementById("hContador")
const sFaces = document.getElementById("sFaces")
const nDados = document.getElementById("iNumeroDados")

const cores = ['#13218a', '#911372', '#d66e0d']
let iCor = 0

const btnDadoClick = () => {
    const faces = parseInt(sFaces.value)
    const result = obterNumeroAleatorio(1, faces)
    hContador.innerText = `Resultado dado: ${result}`
}

const btnContadorClick = () => {
    let valorAtual = parseInt(hContador.innerText.replace("Resultado: ", "")) || 0;
    hContador.innerText = valorAtual + 1
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
btnDado.addEventListener('click', btnDadoClick)

