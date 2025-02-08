import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Productdetailspage() {
    const {id}= useParams();
    console.log(id);

    const [product, updatecard] = useState({})
    const [a,smg]=useState();

  const apifunc = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
      console.log(d.data);
      updatecard(d.data);
      smg(d.data.images[0]);
    })
  }

  useEffect(()=>{
    apifunc();
  },[])

  return (
    <div className='container-fluid'>
        <div className='row bg-dark'>
            <div className='col-12 text-end p-3'>
                <Link to="/students/dashboard/apidata" className="btn btn-info">Back</Link>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-4'>
                <img src={a} alt={product.id} className='img-fluid'/>
            </div>
            <div className='col-md-8'>
                <h1>Id: {product.id}</h1>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <h2>Stock Avail: {product.stock}</h2>

            </div>
        </div>
    </div>
  )
}

export default Productdetailspage