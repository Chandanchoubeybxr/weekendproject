import React, { useEffect } from 'react'
var sname = "rohit singh";

function StudentChildone(props) {
    
    useEffect(()=>{
        localStorage.setItem("mydata",sname);
    },[])
  return (
    <div className='container-fluid bg-danger text-white'>
        <div className='row'>
            <div className='col-12'>
                <h4>child1 page</h4>
                {props.price}
                {props.name}
                <button type='button' onClick={props.cusfnc}>show message</button>
                {sname}
            </div>
        </div>
    </div>
  )
}

export default StudentChildone