import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

function Studentmasterpage() {
  return (
    <Fragment>
        <Outlet></Outlet>
    </Fragment>
  )
}

export default Studentmasterpage