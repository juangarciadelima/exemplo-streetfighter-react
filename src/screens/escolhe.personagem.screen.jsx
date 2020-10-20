import React from 'react'


function EscolhePersonagem() {
    function Titulo() {
        return <h1>Player Select</h1>
    }
    function MapaMundi(pais) {
        return <> 
        <h1>{pais.nome}</h1></>
    }

    function ListaPersonagens({personagens}) {
        return personagens.map((personagemSelecionado) => {
        return <> {personagemSelecionado.nome} </>
        })
        }
    
    function Personagem() {
        return <>
            <span> Salve</span>
            <h1>Oi</h1>
        </>
    }
    function Paises({pais}) {
        return pais.map((Bandeira) => {
           return <> {Bandeira.nome} </> 
        })
    }
    const p1 = {}
    const p2 = {}
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
        nome: 'U.S.A',
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
    }]
    return <>
        <Titulo />
        <ListaPersonagens personagens={personagens} />
        <Personagem posicao='left' selecionado={p1} />
        <Personagem posicao='right' selecionado={p2} />
        <MapaMundi />
        <Paises pais ={paises} />
    </>
}

export default EscolhePersonagem