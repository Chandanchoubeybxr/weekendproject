import React from 'react'
import { Link } from 'react-router-dom'
import erropageimag from '../../images/errorpage.png';

function Errorpage() {
  return (
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-12 text-center'>
            <img src={erropageimag} alt='myerropage'/><br/>
            <Link to="/" className="btn btn-success">Back to Home Page</Link>
        </div>
    </div>
   </div>
  )
}

export default Errorpage


