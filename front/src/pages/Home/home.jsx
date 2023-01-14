import React, { useState } from 'react';
import axios from 'axios'
import ButtonsNavegation from '../buttonsNavegation/buttonNavegation';

function PagesHome(props) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoagind] = useState(false);
  const onTeste = () => {
    setLoagind(true)
    axios.get('https://randomuser.me/api/')
      .then((response) => {
        setUserData(response.data.results)
      }).catch((error) => [
        console.log(error),
        setLoagind(true),
      ]).finally(() => {
        setLoagind(false);
      })
  }
  return (
    <div className="pages-home">
     <h1> Parabéns, você conseguiu. aperte no botão para pesquisar uma pessoa, caso queira ver outra pessoa, apenas só click novamente. </h1>
      <br />
      <h1>Lista de Pessoas</h1>
      <button type="button" onClick={onTeste}>Buscar</button>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className='app_user'>
          {userData.map((user) => {
            return (
              <div key={user.id}>
                <img src={user.picture.large} alt="Peoples"/>
                <table>
                  <thead >
                    <tr>
                      <th>Nome Completo</th>
                      <th>Email</th>
                      <th>Login</th>
                      <th>Idade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{user.name.first}  {user.name.last}</td>
                      <td>{user.email}</td>
                      <td>{user.login.username}</td>
                      <td>{user.dob.age}</td>
                    </tr>
                  </tbody>
                </table>
              <ButtonsNavegation rota1="/" rota2='/pageshttp'/>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )

};

export default PagesHome;