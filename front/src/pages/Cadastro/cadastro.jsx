import React, {useState} from "react";
import api from "./apiCadastros";
import { useNavigate } from 'react-router-dom';



const Cadastro=()=>{
  
    const navigate=useNavigate()


       const cadastrandoApi = async(pessoa)=>{
      
 		try{
 			const response= await api.post('/sharenergy', pessoa)
             .then((response)=>{
                return navigate("/form")
             });

 		
		}
	    catch(error){
			console.log(error)
		}
 	}

    function submit(){
        const cadastroPessoas={
            nome:document.getElementById('nome').value,
            email:document.getElementById('email').value,
            telefone:document.getElementById('telefone').value,
            endereco:document.getElementById('endereco').value,
            cpf:document.getElementById('cpf').value
        }

        cadastrandoApi(cadastroPessoas)
    }

    
    return(
        <section className="container">

        <h2 id="titulo-form">Adicionar novo Usuário</h2>
        <ul id="mensagens-erro"></ul>

        <form id="form-adiciona" onSubmit={submit}>
            <div className="">
                <label for="nome">Nome:</label>
                <input id="nome" name="nome" type="text" placeholder="digite o nome do seu cliente" className="campo"/>
                
            </div>
            <div className="grupo">
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="digite o email do seu cliente" className="campo campo-medio"/>
            </div>
            <div className="grupo">
                <label for="telefone">Telefone:</label>
                <input id="telefone" name="telefone" type="text" placeholder="digite o telefone do seu cliente" className="campo campo-medio"/>
            </div>
            <div className="grupo">
                <label for="endereco">Endereco:</label>
                <input id="endereco" type="endereco" placeholder="digite o endereço do seu cliente" className="campo campo-medio"/>
            </div>
            <div className="grupo">
                <label for="cpf">CPF:</label>
                <input id="cpf" type="cpf" placeholder="digite o cpf do seu cliente" className="campo campo-medio"/>
            </div>

            <button id="adicionar-paciente" className="botao bto-principal" >Adicionar</button>
        </form>
    </section>
    )
}

export default Cadastro