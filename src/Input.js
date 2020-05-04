import React from 'react'

class Input extends React.Component {
    state = {
        nome: '',
        sobrenome: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.nome, " ", this.state.sobrenome)
        this.setState({
            nome: '',
            sobrenome: ''
        })
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        name="nome"
                        value={this.state.nome}
                        placeholder="Entre com seu nome"
                        onChange={this.handleInput}
                    />
                </div>
                <div>
                    <input
                        name="sobrenome"
                        value={this.state.sobrenome}
                        placeholder="Entre com seu sobrenome"
                        onChange={this.handleInput}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default Input