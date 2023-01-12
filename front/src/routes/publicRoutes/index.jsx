import React from 'react';
import { Route } from 'react-router-dom';
import PagesLogin from '../../pages/Login/login';


export const PublicRoutes = () => (
  <React.Fragment>
    <Route path="/" element={<PagesLogin />} />
  </React.Fragment>
)





