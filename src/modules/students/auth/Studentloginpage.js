import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Authpagelogin from './Authpagelogin';


function Studentloginpage() {
  const customnav = useNavigate()
  const [loaderpage, updateloaderpage] = useState("none");
  const [loginpage, updatelogin] = useState({
    email: "",
    password: ""
  })

  const stateupdate = (e) => {
    const { name, value } = e.target;
    updatelogin((attr) => {
      return {
        ...attr,
        [name]: value
      }
    })

  }


  const myloginpage = () => {
    console.log(loginpage);
    if (loginpage.email === "" || loginpage.password === "") {
      toast.error("wrong",{position: "top-left",theme: "dark",autoClose: 2000});
    }
    else {
      alert("wecome to dashboard");
      updateloaderpage("flex");
      setTimeout(()=>{
        updateloaderpage("none");
        customnav('dashboard');
      },2000)

    }

  }




  return (
    <Fragment>
      <ToastContainer></ToastContainer>
      <div className='container '>
        <div className='row justify-content-center'>
          <div className='col-md-6 shadow p-5'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={loginpage.email} onInput={stateupdate} />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={loginpage.password} onInput={stateupdate} />
                  </div>
                </div>
                <div className='col-md-12 text-end'>
                  <div className="mb-3">
                    <button className='btn btn-success' onClick={myloginpage}> Login</button>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className="mb-3">
                  
                  <Authpagelogin></Authpagelogin>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='userloaderpage' style={{display:`${loaderpage}`}}>
        <section>
          <div className="d-flex align-items-center">
            <strong role="status">Loading...</strong>
            <div className="spinner-border ms-auto"></div>
          </div>
        </section>
      </div>
    </Fragment>
  )
}

export default Studentloginpage