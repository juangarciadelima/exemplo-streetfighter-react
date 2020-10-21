import React from 'react'

function ListaPersonagens({ personagens }) {
    return personagens.map((personagemSelecionado,index) => {
        return  <div key={index}>
             {personagemSelecionado.nome}
       
            </div> 
    })
}

export default ListaPersonagens