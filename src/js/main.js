'use strict'

import {getFilmes, getFilme, postFilme, putFilme} from "./filmes.js"


async function preencherContainerSerie () {
    const containerSerie = document.getElementById('containerSerie')

    const filme = await getFilmes ()
    const titulo = document.createElement ('h1')
    titulo.textContent = "Serie"

    filme.forEach (filme => {
        const card = document.createElement('div')
        const containerFilme = document.getElementById('containerSerie')
    // const titulo = document.createElement('h2')
    // titulo.textContent = filme.nome

    // const texto = document.createElement ('textarea')
    // texto.textContent = filme.sinopse

    const capa = document.createElement ('img')
    capa.src = filme.foto_capa
    capa.classList.add(
        'border-vermelho',
        'border-4',
        'h-full',
        'min-w-72',
        'rounded-md',
        'gap-y-10',
    )

    card.appendChild(capa)
        containerFilme.appendChild(card)
        console.log (card)
    })
}

async function preencherContainerFilme () {
    const containerFilme = document.getElementById('containerFilme')

    const filme = await getFilmes ()
    const titulo = document.createElement ('h1')
    titulo.textContent = "Filme"

    filme.forEach (filme => {
        const card = document.createElement('div')
        const containerFilme = document.getElementById('containerFilme')
    // const titulo = document.createElement('h2')
    // titulo.textContent = filme.nome

    // const texto = document.createElement ('textarea')
    // texto.textContent = filme.sinopse

    const capa = document.createElement ('img')
    capa.src = filme.foto_capa
    capa.classList.add(
        'border-vermelho',
        'border-4',
        'h-full',
        'min-w-56',
        'rounded-md',
        'gap-y-10',
    )

    card.appendChild(capa)
        containerFilme.appendChild(card)
        console.log (card)
    })
}

preencherContainerFilme()
preencherContainerSerie()

//const filme = {  
//    "id": "1",
//    "nome": "Velozes e Furiosos",
//    "sinopse": "Brian O Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado.",
//    "duracao": "1:46:00",
//    "data_lancamento": "2001-09-28",
//    "data_relancamento": null,
//    "foto_capa": "https://img.quizur.com/f/img64e7eff7856cd4.31473663.jpg?lastEdited=1692921859",
//    "valor_unitario": 30.00
//}

//postFilme (filme)