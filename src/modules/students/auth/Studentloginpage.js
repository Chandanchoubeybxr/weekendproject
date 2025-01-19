import React from 'react';
import { Link } from 'react-router-dom';

function Studentloginpage() {
  return (
    <div className='container '>
      <div className='row justify-content-center'>
        <div className='col-md-6 shadow p-5'>

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12'>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className='col-md-12'>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className='col-md-12 text-end'>
                <div className="mb-3">
                  <button className='btn btn-success'> Login</button>
                  <Link to="dashboard" className="btn btn-warning ms-3">Fake login</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Studentloginpage