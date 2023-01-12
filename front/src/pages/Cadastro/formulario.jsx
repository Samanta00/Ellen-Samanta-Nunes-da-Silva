import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from './apiCadastros';
import Cadastro from './cadastro';
import StoreContext from '../../Store/context';
import PagesEditForm from './atualizandoCadastro/editar';



import '../../assets/css/Styles/cadastro.css'
import '../../assets/css/Styles/reset.css'


 const PagesForm=()=>{
	const navigate=useNavigate()
	const [listClientes, setListClientes]=useState([])
	const { token } = useContext(StoreContext);
	const listandoClientes = async()=>{
		try{
			const response= await api.get('/customers', {
				headers:{ authorization: `Bearer ${token}`} 
			})
			const data=response.data
			setListClientes(data)
		}
		catch(error){
			console.log(error)
		}
	}
	useEffect(()=>{
		listandoClientes()
	},[])


	const editarPessoa=async(e)=>{
		const idCliente=e.target.ariaLabel
		return navigate(`/editform/${idCliente}`)
	}
	const excluirPessoa=async(e)=>{
		const idCliente=e.target.ariaLabel
		console.log(idCliente)
		try{
			const response= await api.delete(`/customers/${idCliente}`)
		}
		catch(error){
			console.log(error)
		}
		
	}
	const visualizar=async(e)=>{
		const idCliente=e.target.ariaLabel
		try{
			const response= await api.get(`/customers/${idCliente}`)
			const pessoa=response.data
			window.alert(`Dados Completos sobre essa Pessoa
						Email: ${pessoa.email}
						telefone:${pessoa.telefone}  
						endereço: ${pessoa.endereco}  
						cpf: ${pessoa.cpf}`)
		}
		catch(error){
			console.log(error)
		}

	}

return(
    <div>
  		<header>
			<div className="container">
				<h2 className="titulo">Clientes Cadastrados</h2>
			</div>
		</header>

		<Cadastro/>
		
		<br/><br/>
		{listClientes.length===0?(
			<p>Carregando...</p>
		):(
			listClientes.map((cliente)=>(
				<div key={cliente.id} className='post'>
					<section>
						<table>
							<thead >
								<tr id="primeiro-paciente">
									<th scope="col" className='info-title'>Nome</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="info-data">{cliente.nome}</td>
								</tr>
							</tbody>
						</table>
							<div className='botoes'>
								<button aria-label={cliente._id} className='delete' onClick={excluirPessoa}>Apagar</button>	
								<button aria-label={cliente._id} className='edit' onClick={editarPessoa}>Editar</button>
								<button aria-label={cliente._id} className='view' onClick={visualizar}>visualizar mais</button>
							</div>

					</section>
				</div>
			))
		)}
        <div>

        </div>

    </div>
	)
}



export default PagesForm		
