import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Appmainpage from './modules/Appmainpage';
import Studentloginpage from './modules/students/auth/Studentloginpage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='' element={<Appmainpage/>}></Route>
          <Route path='students' element={<Studentloginpage/>}></Route>


        </Routes>
    
    </BrowserRouter>


  </React.StrictMode>
);

