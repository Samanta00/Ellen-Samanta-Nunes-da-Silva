import React, { useState, useContext } from 'react';
import StoreContext from '../../Store/context';
import { useNavigate } from 'react-router-dom';

// import RoutesPrivate from '../../routers/private/private';

import './login.css';
import api from '../Cadastro/apiCadastros';



const UserLogin = () => {
  const [values, setValues] = useState({
    nome: "ellen",
    senha: "123"
  });


  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);


  const navigate = useNavigate()
  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }


  function CheckBox(e) {
    console.log('eii')
    console.log(e)
  }


  function onSubmit(event) {
    event.preventDefault();
    console.log(event)
    api.post("/auth/login", values)
      .then(response => response.data)

      .then(data => {
        setToken(data.token)
        console.log(data)
        navigate('/home')

      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form>
        <div className="user-login__form-control">
          <label htmlFor="nome">Usuário</label>
          <input
            id="nome"
            type="text"
            name="nome"
            defaultValue={values.nome}
            onChange={onChange}
            value={values.nome}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="senha"
            name="senha"
            defaultValue={values.senha}
            onChange={onChange}
            value={values.senha}
          />
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}
        <input type="checkbox" name='checkbox' onClick={CheckBox} />
        <label htmlFor="senha">relembra senha e nome</label>
        <br /><br />
        <input type={"button"} value={"enviar"} onClick={onSubmit} />
      </form>
    </div>
  );
};

export default UserLogin;