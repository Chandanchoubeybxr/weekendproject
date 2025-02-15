import React, { useEffect, useState } from 'react'

function StudentChildtwo(props) {
    const [a,b]=useState("")

    const getmydata = ()=>{
        b(localStorage.getItem('mydata'));
    }
  return (
    <div className='container-fluid bg-warning text-white'>
        <div className='row'>
            <div className='col-12'>
                <h4>child2 page</h4>
                {/* {props.plist} */}
                <select>
                    <option hidden>select price list</option>
                    {props.plist.map((d)=>{
                        return <option>{d}</option>
                    })}
                </select><br/>
                <button onClick={getmydata}>getdata from child one</button>
                <h3>{a}</h3>
            </div>
        </div>
    </div>
  )
}

export default StudentChildtwo