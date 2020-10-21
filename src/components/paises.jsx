import React from 'react'

function Paises({ pais }) {
    return pais.map((bandeira) => {
        return <div><h2 key={index}>{bandeira.nome}</h2></div>
    })
}

export default Paises