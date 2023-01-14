import React from 'react';
import Button from './PutButton';
import Formulario from '../formulario/formulario';

const PagesEditForm = () => {
    return (
        <section className="container">
            <h2 id="titulo-form">Editar Usuário</h2>
            <ul id="mensagens-erro"></ul>
           
                <Formulario />
                <Button />
          

        </section>
    )
}
export default PagesEditForm