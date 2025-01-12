import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Xys from './About';

import Mynav from './Mynavbar';
import Mybootstrappage from './Mybootstrappage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <Aboutpage></Aboutpage> */}
    <Mynav></Mynav>
    <Xys></Xys>
    <h1>use of bootstrap</h1>
    <Mybootstrappage></Mybootstrappage>

  </React.StrictMode>
);

