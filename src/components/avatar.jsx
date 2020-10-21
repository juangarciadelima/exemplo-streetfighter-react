import React from 'react'

function Avatar({posicao,personagemSelecionado}) {
    return <div>
        <h2>{posicao == "left" ? "P1" : "P2"}</h2>
         <h3>{personagemSelecionado.nome}</h3>
        <img src={personagemSelecionado.imagem} alt={`O ${posicao == "left" ? "P1" : "P2"} selecionou o personagem ${personagemSelecionado.nome} que possui imagem`}/>
        </div>
}

export default Avatar