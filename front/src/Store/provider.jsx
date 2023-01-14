import React, { useState } from 'react';
import api from '../pages/Cadastro/apiCadastros';
import StoreContext from './context';


const StoreProvider = ({ children }) => {
  const [token, setToken] = useState("");

  // useEffect(()=>{
  //   api.defaults.headers.authorization=`Bearer ${token}`
  // })

  const saveToken = token => {
    api.defaults.headers.authorization = `Bearer ${token}`
    setToken(token)
  }
  return (
    <StoreContext.Provider
      value={{
        token,
        setToken: saveToken
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}


export default StoreProvider;