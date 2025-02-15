import React from 'react'
import StudentChildone from './StudentChildone'
import StudentChildtwo from './StudentChildtwo'

function StudentParentpage() {
const amount = "8000";
const pricelist=[50,30,60,80,70,40,90,60];

const messages = ()=>{
    alert("welcome to props");
}

  return (
    <div className='container-fluid bg-light'>
        <div className='row'>
            <div className='col-12'>
            <h1>parent {amount}</h1>
            <input type='button' onClick={messages} value="show message"/>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 p-4'>
                    <div className='card'>
                    <h1>child1</h1>
                        <StudentChildone price={amount} name="ravi" cusfnc={messages}></StudentChildone>
                    </div>
            </div>
            <div className='col-md-6 p-4'>
            <div className='card'>
                <h1>child2</h1>
                <StudentChildtwo plist={pricelist}></StudentChildtwo>
            </div>

            </div>
        </div>
    </div>
  )
}

export default StudentParentpage