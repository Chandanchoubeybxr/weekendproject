import React from 'react'
import Mysrcimg from './images/img2.jpg';

const myimg= "https://c.ndtvimg.com/2023-07/unkplddg_cars-submerged-noida-hindon-650_625x300_25_July_23.jpg";
const a = 500;
const b = 40;                               

function Mybootstrappage() {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="card">
                        <img src="https://c.ndtvimg.com/2023-07/unkplddg_cars-submerged-noida-hindon-650_625x300_25_July_23.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">CDN direct image </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card">
                        <img src="photo/img1.jpg" className="card-img-top" alt='sdfjd'/>
                            <div className="card-body">
                                <h5 className="card-title">public folder</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card">
                        <img src={Mysrcimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">src folder</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card">
                        <img src={myimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">cnd variable</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card">
                       <h1>Total number: {802+30}</h1>
                       <h1>Total number: {a+b}</h1>
                       <h1>use of ternary operator: {a>=100 ? "true" : "false"}</h1>
                       <h1>use of ternary operator: {a>=100 ? "Yes" : "No"}</h1>
                       <h5>use of ternary operator: {a>=100 ? <span>this is greager then {a}</span> : <span>Nothing</span>}</h5>
                       
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Mybootstrappage