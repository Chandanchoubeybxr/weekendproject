import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaTachometerAlt } from "react-icons/fa";
import propic from '../../images/img1.jpg';
import { Link } from 'react-router-dom';

function Sidebarpage() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
            <img src={propic} alt='pro_picture' className='rounded-circle' width={100} height={100}/>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">

                <span className="fs-6">Student Name</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        <IoHomeSharp/>
                        Home

                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        <FaTachometerAlt/>
                        Dashboard
                    </a>
                </li>
                <li>
                    <Link to="apidata" className="nav-link link-body-emphasis">Api Data</Link>
                </li>
                <li>
                <Link to="graph" className="nav-link link-body-emphasis">Graph Page</Link>
                </li>
                <li>
                <Link to="propspage" className="nav-link link-body-emphasis">Props</Link>
                </li>
                <li>
                <Link to="reduxpage" className="nav-link link-body-emphasis">Redux</Link>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">Orders</a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">Orders</a>
                </li>
            </ul>


        </div>
    )
}

export default Sidebarpage