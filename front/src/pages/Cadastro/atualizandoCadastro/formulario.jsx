import React, { useState, navigate } from 'react';

const Form = () => {
    return (
        <section className="container">
            <h2 id="titulo-form">Editar Usuário</h2>
            <ul id="mensagens-erro"></ul>

            <form id="form-adiciona" >
                <div className="">
                    <label for="nome">Nome:</label>
                    <input id="nome" name="nome" type="text" placeholder="digite o nome do seu cliente" className="campo" />
                </div>
                <div className="grupo">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="digite o email do seu cliente" className="campo campo-medio" />
                </div>
                <div className="grupo">
                    <label for="telefone">Telefone:</label>
                    <input id="telefone" name="telefone" type="text" placeholder="digite o telefone do seu cliente" className="campo campo-medio" />
                </div>
                <div className="grupo">
                    <label for="endereco">Endereco:</label>
                    <input id="endereco" type="endereco" placeholder="digite o endereço do seu cliente" className="campo campo-medio" />
                </div>
                <div className="grupo">
                    <label for="cpf">CPF:</label>
                    <input id="cpf" type="cpf" placeholder="digite o cpf do seu cliente" className="campo campo-medio" />
                </div>
            </form>
        </section>
    )
}

export default Form