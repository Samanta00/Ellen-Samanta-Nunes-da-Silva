import React from 'react';
import api from '../apiCadastros';
import { useParams, useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate()
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
            if (!atualizacaoPessoas.nome.trim() || atualizacaoPessoas.nome == undefined || atualizacaoPessoas.nome.length <= 1 || atualizacaoPessoas.nome == "") {
                window.alert('Nome está sendo Passado indefinidamente.')
            }
            else if (!atualizacaoPessoas.email.trim() || atualizacaoPessoas.email == undefined || atualizacaoPessoas.email.length <= 5 || atualizacaoPessoas.email.includes("@") == false || atualizacaoPessoas.email == "") {
                window.alert('email esta sendo passado indefinidamente.')
            }
            else if (!atualizacaoPessoas.telefone.trim() || atualizacaoPessoas.telefone == undefined || atualizacaoPessoas.telefone.length < 10 || atualizacaoPessoas.telefone == "") {
                window.alert('Telefone está sendo Passado indefinidamente.')
            }
            else if (!atualizacaoPessoas.endereco.trim() || atualizacaoPessoas.endereco == undefined || atualizacaoPessoas.endereco.length < 5 || atualizacaoPessoas.endereco == "") {
                window.alert('Endereço está sendo passado indefinidamente.')
            }
            else if (!atualizacaoPessoas.cpf.trim() || atualizacaoPessoas.cpf == undefined || atualizacaoPessoas.cpf.length < 11 || atualizacaoPessoas.cpf == "") {
                window.alert('CPF está sendo passado indefinidamente.')
            }
            else{
               editar(atualizacaoPessoas) 
            }
            
        }

    function Voltar() {
            return navigate(`/form`)
        }
        return (
            <>
                <button onClick={Voltar}>Voltar</button>
                <button id="adicionar-paciente" onClick={submit} className="botao bto-principal">Editar</button>
            </>

        )
    }

    export default Button