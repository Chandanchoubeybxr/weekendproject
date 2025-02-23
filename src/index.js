import React from 'react';
import { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./modules/css/global.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appmainpage from './modules/Appmainpage';
import Studentloginpage from './modules/students/auth/Studentloginpage';
import Errorpage from './modules/sharescomponent/Errorpage';
import Studentmainpage from './modules/students/stdentdashboard/Studentmainpage';
import Studentmasterpage from './modules/students/stdentdashboard/Studentmasterpage';
import StudentProfile from './modules/students/stdentdashboard/pages/StudentProfile';
import Apidatapge from './modules/students/stdentdashboard/pages/Apidatapge';
import Productdetailspage from './modules/students/stdentdashboard/pages/Productdetailspage';
import Chartspage from './modules/students/stdentdashboard/pages/Chartspage';
import StudentParentpage from './modules/students/stdentdashboard/pages/StudentParentpage';
import { Provider } from 'react-redux';
import { mystorage } from './modules/students/stdentdashboard/pages/reduxpage/Mystore';
import Reduxpageview from './modules/students/stdentdashboard/pages/reduxpage/Reduxpageview';
import Authpagelogin from './modules/students/auth/Authpagelogin';
// import ReactLasypage from './modules/students/stdentdashboard/pages/ReactLasypage';
const ReactLasypage = lazy(()=>import('./modules/students/stdentdashboard/pages/ReactLasypage'));





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={mystorage}>
      <Routes>
        <Route path='' element={<Appmainpage />}></Route>
        <Route path='students' element={<Studentmasterpage />}>
          <Route path='' element={<Studentloginpage />}></Route>
          {/* <Route path='' element={<Authpagelogin/>}/> */}
          <Route path='dashboard' element={<Studentmainpage />}>
            <Route path='' element={<StudentProfile />}></Route>
            <Route path='apidata' element={<Apidatapge />}></Route>
            <Route path='apidata/productdetails/:id' element={<Productdetailspage/>}></Route>
            <Route path='graph' element={<Chartspage />}></Route>
            <Route path='propspage' element={<StudentParentpage />}></Route>
            <Route path='reduxpage' element={<Reduxpageview/>}></Route>
            <Route path='lazypage' element={<Suspense fallback={<h1 className='myloader'>Loading Page</h1>}>
              <ReactLasypage/>
            </Suspense>}></Route>
            <Route path='*' element={<Errorpage />}></Route>
          </Route>
          <Route path='*' element={<Errorpage />}></Route>
        </Route>
        <Route path='*' element={<Errorpage />}></Route>
      </Routes>
      </Provider>

    </BrowserRouter>


  </React.StrictMode>
);

