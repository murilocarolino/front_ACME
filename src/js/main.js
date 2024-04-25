'use strict'

import {getFilmes, getFilme, postFilme, putFilme} from "./filmes.js"


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
        'h-80',
        'min-w-56',
        'max-w-44',
        'rounded-md',
        'gap-y-10',
    ),
    card.addEventListener('click',()=> {
        window.location.href='../sobre.html?id='+filme.id
    })


    card.appendChild(capa)
        containerFilme.appendChild(card)
        console.log (card)
    })
}

preencherContainerFilme()