import React, { useContext } from 'react';
import StoreContext from '../Store/context';
import PagesLogin from '../pages/Login/login';
import { Navigate, Route, Outlet } from 'react-router-dom';


//Verifica se existe há autenticação, se não existir irá voltar para a página inicial
const AuthLayout = () => {
    const { token } = useContext(StoreContext);
    return token ? <Outlet /> : <Navigate to={"/"} replace />;
};


export default AuthLayout



