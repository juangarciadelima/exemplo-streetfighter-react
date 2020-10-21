import React from 'react'

function ListaPersonagens({ personagens }) {
    return personagens.map((personagemSelecionado) => {
        return  <div>
             {personagemSelecionado.nome}
       
            </div> 
    })
}

export default ListaPersonagens