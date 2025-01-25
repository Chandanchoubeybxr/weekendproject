import React,{useState} from 'react';
import { Link } from 'react-router-dom';


function Studentloginpage() {
const [sv,sf]=useState("defautvalue");
  const xyz = ()=>
  {
    sf("ooooooooooo");
  }

  const updateinput = (e)=>{
    console.log(e.target.value);
    sf(e.target.value);

  }

const [a,b]=useState(90)
const fontsizechange=(p)=>{
    b(parseInt(p.target.value));
}

const w = "warn";

  return (
    <div className='container '>
      <div className='row justify-content-center'>
        <div className='col-md-6 shadow p-5'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12'>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" value={sv} onInput={updateinput}/>
                  {sv}
                  <p>{sv.length>=10 ?  <span className="text-success bg-dark">success</span> : sv.length>=5 ? <span className="text-warning bg-dark">warning</span> : "minimum length 5 char"}</p>
                  <h1 style={{color:'red',backgroundColor:'lightgray',fontSize:a}}>{sv}</h1>
                  <input type='number' onInput={fontsizechange}/>

                  <h2 className={w==="warning" ? "text-warning" : "text-danger"}>apply condition base class</h2>

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
                  <button className='btn btn-success' onClick={xyz}> Login</button>
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