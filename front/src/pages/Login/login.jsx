import React, { useState, useContext } from 'react';
import StoreContext from '../../Store/context';
import { useNavigate } from 'react-router-dom';
// import RoutesPrivate from '../../routers/private/private';
import './login.css';
import api from '../Cadastro/apiCadastros';

const UserLogin = () => {
  const [values, setValues] = useState({
    nome: "desafiosharenergy",
    senha: "sh@r3n3rgy"
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



  function onSubmit(event) {
    event.preventDefault();
    api.post("/auth/login", values)
      .then(response => response.data)

      .then(data => {
        setToken(data.token)
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
 
        <br /><br />
        <input type={"button"} value={"enviar"} onClick={onSubmit} />
      </form>
    </div>
  );
};

export default UserLogin;