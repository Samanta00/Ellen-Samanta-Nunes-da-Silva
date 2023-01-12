import React, { Fragment, useEffect, useState } from 'react';
// import Api from '../services/apiRandom';
import axios from 'axios'


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
      Parabéns, você conseguiu, aperte no botão para pesquisar uma pessoa novamente
      <br />
      <h1>Lista de Pessoas</h1>
      <button type="button" onClick={onTeste}>Buscar</button>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className='app_user'>
          {userData.map((user, index) => {
            return (
              <div key={user.id}>
                <img src={user.picture.large} />
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
              </div>
            )
          })}
        </div>
      )}
    </div>
  )

};





export default PagesHome;