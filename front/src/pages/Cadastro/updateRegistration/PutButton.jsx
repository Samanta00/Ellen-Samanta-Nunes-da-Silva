import React from 'react';
import api from '../apiCadastros';
import { useParams, useNavigate } from 'react-router-dom';

const Button= () => {
    const navigate=useNavigate()
    const { id } = useParams()
    const editar = async (dados) => {
        try {
            await api.put(`/customers/${id}`, dados)
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

    function Voltar(){
        return navigate(`/form`)
    }
    return(
        <>
        <button onClick={Voltar}>Voltar</button>
        <button id="adicionar-paciente" onClick={submit} className="botao bto-principal">Editar</button>     
        </>

    )
}

export default Button