'use strict'

const tbl_filmes = document.getElementById('tbl_filme')

async function criarLinhaFilme() {
    const filmes = await getFilmes()

    filmes.forEach((filme, index) => {
        const tr = document.createElement('tr')

        // Adicionando classes de cor alternadas
        tr.classList.add(index % 2 === 0 ? 'bg-[#8E0000]' : 'bg-red-900')

        const id = document.createElement('td')
        id.classList.add('text-blue-500', 'px-16')
        id.textContent = filme.id

        const nome = document.createElement('td')
        nome.classList.add('px-16')
        nome.textContent = filme.nome

        const lancamento = document.createElement('td')
        lancamento.classList.add('px-16')
        const isoString = filme.data_lancamento
        const date = new Date(isoString)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        lancamento.textContent = `${day}/${month}/${year}`

        const duracao = document.createElement('td')
        duracao.classList.add('px-16')
        duracao.textContent = filme.duracao

        const preco = document.createElement('td')
        preco.classList.add('text-blue-500', 'px-16')
        preco.textContent = Number(filme.valor_unitario).toFixed(2)

        const editar = document.createElement('td')
        const imgEditar = document.createElement('img')
        imgEditar.src = '../img/editar.svg'

        const apagar = document.createElement('td')
        const imgApagar = document.createElement('img')
        imgApagar.src = '..img/lixo.svg'

        tr.replaceChildren(id, nome, lancamento, duracao, preco, editar, apagar)
        tbl_filmes.appendChild(tr)
    })
}

async function getFilmes() {
    const url = 'http://localhost:8080/v2/acmeFilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()

    return data.filmes
}

criarLinhaFilme()
