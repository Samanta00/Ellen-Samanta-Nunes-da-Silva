import React from 'react';
import api from "../apiCadastros"
import { useNavigate } from 'react-router-dom';

const Buttons = (props) => {

	const navigate=useNavigate()
	const editarPessoa = async (e) => {
		const idCliente = e.target.ariaLabel
		return navigate(`/editformulario/${idCliente}`)
	}

	const excluirPessoa = async (e) => {
		const idCliente = e.target.ariaLabel
		try {
			await api.delete(`/customers/${idCliente}`)
		}
		catch (error) {
			console.log(error)
		}
	}
	
	const visualizar = async (e) => {
		console.log(e)
		const idCliente = e.target.ariaLabel
	
		try {
			const response = await api.get(`/customers/${idCliente}`)
			const pessoa = response.data
			window.alert(`Dados Completos sobre essa Pessoa
						Email: ${pessoa.email}
						telefone:${pessoa.telefone}  
						endereço: ${pessoa.endereco}  
						cpf: ${pessoa.cpf}`)
		}
		catch (error) {
			console.log(error)
		}
	}
	return (
		<div className='botoes'>
		<button  aria-label={props.cliente} className='delete' onClick={excluirPessoa}>Apagar</button>	
		<button  aria-label={props.cliente} className='edit'   onClick={editarPessoa}>Editar</button>
		<button  aria-label={props.cliente} className='view'   onClick={visualizar}>visualizar mais</button>
		</div>
	)

}

export default Buttons