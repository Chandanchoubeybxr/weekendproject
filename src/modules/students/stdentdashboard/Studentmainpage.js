
import React from 'react'
import { Outlet } from 'react-router-dom'
import StudentProfile from './pages/StudentProfile'
import Sidebarpage from '../../sharescomponent/Sidebarpage'

function Studentmainpage() {
  return (
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-2'>
            <Sidebarpage></Sidebarpage>
        </div>
        <div className='col-10'>
            <Outlet></Outlet>
        </div>
    </div>
   </div>
  )
}

export default Studentmainpage