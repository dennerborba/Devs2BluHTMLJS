const operacao = document.getElementById('operacao')
const numeros = document.querySelectorAll('.botoes button')
const btnExecutarOperacao = document.getElementById('executarOperacao')
const btnClear = document.getElementById('clear')
const btnBack = document.getElementById('back')

const conta = []

numeros.forEach(numero => {
    numero.addEventListener('click', (e) => {
        const valor = e.target.value
        if (valor && valor !== undefined) {
            conta.push(valor)
            operacao.innerText = conta.join('')
        }
    })
});


const btnClearClick = () => {
    conta.length = 0
    operacao.innerText = 0
}

btnBackClick = () => {
    conta.pop()
    operacao.innerText = conta.join('')
}

const btnExecutarOperacaoClick = () => {
    if (conta.length > 0) {
        try {
            const expressao = conta.join('')
            const result = eval(expressao)

            operacao.innerText = result
            conta.length = 0
            conta.push(result.toString())
        }
        catch (e) {
            operacao.innerText = 'Erro'
        }
    }
}


btnClear.addEventListener('click', btnClearClick)
btnExecutarOperacao.addEventListener('click', btnExecutarOperacaoClick)
btnBack.addEventListener('click', btnBackClick)