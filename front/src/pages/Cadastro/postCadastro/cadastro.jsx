import React from "react";
import ButtonsNavegation from "../../buttonsNavegation/buttonNavegation";
import ButtonCadastro from "./PostButton";
import Formulario from "../formulario/formulario";


const Cadastro = () => {
    return (
        <div>
            <section className="container">
                <h2 id="titulo-form">Adicionar novo Usuário</h2>
                <ul id="mensagens-erro"></ul>
                <>
                    <Formulario />
                    <ButtonCadastro />
                </>
            </section>
            <ButtonsNavegation rota1='/pageshttp' rota2="/home" />
        </div>
    )
}

export default Cadastro