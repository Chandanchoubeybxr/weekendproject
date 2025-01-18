import React from 'react'
import { Link } from 'react-router-dom'
import { FcBusinessman } from "react-icons/fc";
import { RiAdminFill } from "react-icons/ri";

function Appmainpage() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 text-center'>
                    <Link to='students' className='card'>
                    <h1> <FcBusinessman/></h1>
                    <p>Student Login</p>
                    
                    </Link>
                </div>
                <div className='col-md-6 text-center'>
                    <Link to='students' className='card'>
                    <h1> <RiAdminFill/></h1>
                    <p>Admin Login</p>
                    
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appmainpage