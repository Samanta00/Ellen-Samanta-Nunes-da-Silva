import React from 'react';
import { Route, } from 'react-router-dom';
import AuthLayout from '../../component/index';

import PagesHome from '../../pages/Home/home';
import PagesHTTP from '../../pages/PageHTTP/PagesHTTP';
import Pagesdog from '../../pages/CutDog/PagesCutDog';
import PagesForm from '../../pages/Cadastro/formulario';
import PagesEditForm from '../../pages/Cadastro/atualizandoCadastro/editar';

export const PrivateRoutes = () => (
    <>
        <Route element={<AuthLayout />}>

            <Route path="/home" element={<PagesHome />} />
            <Route path="/pageshttp" element={<PagesHTTP />} />
            <Route path="/dog" element={<Pagesdog />} />
            <Route path="/form" element={<PagesForm />} />
            <Route path="/editform/:id" element={<PagesEditForm />} />

        </Route>
    </>
)