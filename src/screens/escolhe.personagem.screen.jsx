
import React from 'react';
import '../screens/escolhe-personagem.css';
import Avatar from '../components/avatar'
import Paises from '../components/paises'
import Titulo from '../components/titulo'
import ListaPersonagens from '../components/personagens'

function EscolhePersonagem() {
   

    
    
    
    
    const paises = [{
        nome: 'U.S.S.R',
        imagem: null
    },
    {
        nome: 'Japan',
        imagem: null
    },
    {
        nome: 'Brazil',
        imagem: null
    },
    {
        nome: 'India',
        imagem: null
    },
    {
        nome: 'Spain',
        imagem: null
    },
    {
        nome: 'China',
        imagem: null
    },
    {
        nome: 'U.S.A',
        imagem: null
    },
    {
        nome: 'Japan',
        imagem: null
    }]
    const personagens = [{
        nome: 'Ryu',
        imagem: null
    },
    {
        nome: 'Ken',
        imagem: null
    }, {
        nome: 'Dhalsin',
        imagem: null
    }, {
        nome: 'Guile',
        imagem: null
    }, {
        nome: 'Zangief',
        imagem: null
    }, {
        nome: 'Chun-Li',
        imagem: null
    }, {
        nome: 'Vega',
        imagem: null
    }, {
        nome: 'Honda',
        imagem: null
    }

    ]

    const p1 = personagens[0]
    const p2 = personagens[1]
    return <>
        <Titulo texto = "Salve" />
        <Paises pais={paises} />
        <ListaPersonagens personagens={personagens} />
        <Avatar posicao = "left" personagemSelecionado={p1} />
        <Avatar  posicao = "right" personagemSelecionado={p2} />
    </>
}

export default EscolhePersonagem