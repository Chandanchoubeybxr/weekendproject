import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appmainpage from './modules/Appmainpage';
import Studentloginpage from './modules/students/auth/Studentloginpage';
import Errorpage from './modules/sharescomponent/Errorpage';
import Studentmainpage from './modules/students/stdentdashboard/Studentmainpage';
import Studentmasterpage from './modules/students/stdentdashboard/Studentmasterpage';
import StudentProfile from './modules/students/stdentdashboard/pages/StudentProfile';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Appmainpage />}></Route>
        <Route path='students' element={<Studentmasterpage />}>
          <Route path='' element={<Studentloginpage />}></Route>
          <Route path='dashboard' element={<Studentmainpage />}>
            <Route path='' element={<StudentProfile />}></Route>
            <Route path='*' element={<Errorpage />}></Route>
          </Route>
          <Route path='*' element={<Errorpage />}></Route>
        </Route>
        <Route path='*' element={<Errorpage />}></Route>


      </Routes>

    </BrowserRouter>


  </React.StrictMode>
);

