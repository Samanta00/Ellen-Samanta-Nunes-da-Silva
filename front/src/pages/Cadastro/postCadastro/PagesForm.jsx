import React, { useEffect, useState, useContext } from 'react';
import api from '../apiCadastros';
import Cadastro from './cadastro';
import StoreContext from '../../../Store/context';
import '../../../assets/css/Styles/cadastro.css';
import '../../../assets/css/Styles/reset.css';
import Buttons from './Buttons';

 const PagesForm=()=>{
	const [listClientes, setListClientes]=useState([])
	const { token } = useContext(StoreContext);
	const apiClientes = async()=>{
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
		apiClientes()
	},[])

return(
    <div>
  		<header>
			<div className="container">
				<h2 className="titulo">Editar Clientes</h2>
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
					<Buttons cliente={cliente._id}/>
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
