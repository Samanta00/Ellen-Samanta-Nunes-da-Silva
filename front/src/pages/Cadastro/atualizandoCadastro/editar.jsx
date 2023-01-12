import React, { useState, navigate } from 'react';
import api from '../apiCadastros';
import { useParams } from 'react-router-dom';
import Form from './formulario';

const PagesEditForm = () => {

    const { id } = useParams()
    const editar = async (dados) => {
        try {
            const response = await api.put(`/customers/${id}`, dados)
            window.alert('Editado com sucesso')
        }
        catch (error) {
            console.log(error)
        }
    }
    function submit(e) {
        e.preventDefault()
        const atualizacaoPessoas = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            endereco: document.getElementById('endereco').value,
            cpf: document.getElementById('cpf').value
        }
        editar(atualizacaoPessoas)
    }


    return (
        <>
            <Form />
            <button id="adicionar-paciente" onClick={submit} className="botao bto-principal">Editar</button>
        </>

    )
}

export default PagesEditForm