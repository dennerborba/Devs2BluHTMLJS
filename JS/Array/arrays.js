console.log("Exercício 1 \n--------------------------------------------")


const carros = [
    {
        nome: "Clio",
        marca: "Renault",
        ano: 2001
    },
    {
        nome: "Gol",
        marca: "Volkswagen",
        ano: 2003
    },
    {
        nome: "Astra",
        marca: "Chevrolet",
        ano: 2007
    }
]

console.log("Exercício 2 \n--------------------------------------------")

const data = new Date()
let dataAtual = data.getFullYear()

carros.forEach(carro => {
    carro.ano = dataAtual
    carro.cor = "Branco"
});


for (let carro of carros) {
    console.log(carro)
}

console.log("Exercício 3 \n--------------------------------------------")

const livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J. K. Rowling",
    ano: 1997,
    imprimir: function () {
        console.log(`Título do livro: ${livro.titulo} \n Autor: ${livro.autor} \n Ano: ${livro.ano}`)
    }
}

livro.imprimir()

console.log("Exercício 4 \n--------------------------------------------")

const cores = ["Azul", "Vermelho", "Amarelo"]

cores[1] = "Verde"
cores[2] = "Laranja"

for (cor of cores) {
    console.log(cor)
}

console.log("Exercício 5 \n--------------------------------------------")

let numeros = [1, 2, 3, 4]
let total = 0

numeros.forEach(numero => {
    let quadrado = Math.pow(numero, 2)
    console.log(`O quadrado de ${numero} é ${quadrado}`)
    total += quadrado
});

console.log(`Total dos números: ${total}`)

console.log("Exercício 6 \n--------------------------------------------")

const alunos = [
    {
        nome: "Jonas",
        notaFinal: 8.5
    },
    {
        nome: "Luizo",
        notaFinal: 9
    },
    {
        nome: "Lucia",
        notaFinal: 7
    },
    {
        nome: "Ednaldo",
        notaFinal: 2.75
    },
    {
        nome: "Leôncio",
        notaFinal: 10
    }
]

alunos.forEach(aluno => {
    if (aluno.notaFinal >= 7) {
        console.log("Alunos com nota maior que 7: \n")
        console.log(aluno)
    }
});

for (aluno of alunos) {
    console.log(aluno)
}

console.log("Exercício 7 \n--------------------------------------------")

const alunos2 = alunos.map(aluno => {
    let notas = [aluno.notaFinal, aluno.notaFinal - 2, aluno.notaFinal + 0.5]
    let media = notas.reduce((a, nota) => a + nota, 0) / notas.length
    return { nome: aluno.nome, notas, media: media.toFixed(2) }
})

alunos2.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}, Notas: [${aluno.notas.join(", ")}], Média: ${aluno.media}`)
});

console.log("Exercício 8 \n--------------------------------------------")

const listaTarefas = [
    {
        descricao: "Comprar comida",
        status: "Pendente",
        cumprir: false
    },
    {
        descricao: "Estudar JavaScript",
        status: "Concluído",
        cumprir: true
    },
    {
        descricao: "Fazer exercícios físicos",
        status: "Concluído",
        cumprir: false
    },
    {
        descricao: "Lavar a louça",
        status: "Concluído",
        cumprir: false
    },
    {
        descricao: "Finalizar projeto do curso",
        status: "Pendente",
        cumprir: true
    },
]

function cumprirTarefa(tarefa) {
    if (tarefa.cumprir) {
        return "Cumprir"
    } else return "Desistir"
}

listaTarefas.forEach(tarefa => {
    console.log(`Lista de tarefas \nDescrição da tarefa: ${tarefa.descricao}, Status: ${tarefa.status}, ${cumprirTarefa(tarefa)}`)
});