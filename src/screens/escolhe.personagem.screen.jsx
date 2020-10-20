
import React from 'react';
import '../screens/escolhe-personagem.css';


function EscolhePersonagem() {
    function Titulo() {
        return <h1 className="titulo">Player Select</h1>
    }
    function MapaMundi(pais) {
        return <p>{pais.nome}</p>
    }

    function ListaPersonagens({ personagens }) {
        return personagens.map((personagemSelecionado) => {
            return  <div className = 'Personagens'>
                 {personagemSelecionado.nome}
           
                </div> 
        })
    }

    function Personagem({posicao,selecionado}) {
        return <>
            <h1>{posicao == 'left' ?  'P1' : 'P2'}</h1>
    <p>{selecionado == 'p1' ? 'Ryu' : 'Ken'}</p>
    <img src="" alt="Imagem do Personagem Selecionado"/>
        </>
    }
    function Paises({ pais }) {
        return pais.map((Bandeira) => {
            return <div className = 'Mapa'>{Bandeira.nome}</div>
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
    return <>
        <Titulo />
        <MapaMundi />
        <Paises pais={paises} />
        <Personagem posicao ='left' selecionado='p1' />
        <Personagem posicao ='right' selecionado='p2' />
        <ListaPersonagens personagens={personagens} />


    </>
}

export default EscolhePersonagem