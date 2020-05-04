import React, { useState } from 'react'

function Hook() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setNome('')
        setSobrenome('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    name="nome"
                    value={nome}
                    placeholder="Entre com seu nome"
                    onChange={e => setNome(e.target.value)}
                />
            </div>
            <div>
                <input
                    name="sobrenome"
                    value={sobrenome}
                    placeholder="Entre com seu sobrenome"
                    onChange={e => setSobrenome(e.target.value)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Hook