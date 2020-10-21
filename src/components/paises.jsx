import React from 'react'

function Paises({ pais }) {
    return pais.map((Bandeira) => {
        return <h1>{Bandeira.nome}</h1>
    })
}

export default Paises