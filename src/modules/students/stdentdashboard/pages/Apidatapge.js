import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Apidatapge() {
  const [searchby, setsearchby] = useState([])

  const [card, updatecard] = useState([])

  const apifunc = () => {
    axios.get("https://dummyjson.com/products").then((d) => {
      console.log(d.data.products);
      updatecard(d.data.products);
    })
  }

  useEffect(() => {
    apifunc();
  }, []);
  const [df,sdf]=useState("");
  const [x, y] = useState([]);
  const searchByfunc = (e) => {
    const t = e.target.value;
    sdf(t);
    const a = card.map((d) => {
      return d[t]
    })
    y([...new Set(a)]);

  }

  const [filterdata,setfilter]=useState("")
    const myfilter = (e)=>{
       const a = e.target.value;
       console.log(a);
        const abc = card.filter((d)=>{
            return d[df]===a
        })
        console.log(abc);
        setfilter(abc);
        

    }


  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 g-0'>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex" role="search">
                  <select class="form-select form-select-sm" aria-label="Small select example" onChange={searchByfunc}>
                    <option hidden>Search By</option>
                    <option>id</option>
                    <option>price</option>
                    <option>category</option>
                    <option>brand</option>
                  </select>

                  <select class="form-select form-select-sm" aria-label="Small select example" onChange={myfilter}>
                    {x.map((d, no = 1) => {
                      return (
                        <option key={no++}>{d}</option>
                      )
                    })}
                  </select>

                </form>
              </div>
            </nav>
          </div>
        </div>

        <div className='row'>

          {filterdata.length<=0 ? card.map((d)=>{
            return (
              <div className='col-md-3 mt-2' key={d.id} >
                <div className='card'>
                  <img src={d.images[0]} alt="Product Image" style={{ height: 200 }} />
                  <h2>Product Name</h2>
                  <p className="price">{d.price}</p>
                  <p className='title'>{d.title}</p>
                  <Link className="btn btn-info" to={'productdetails/'+d.id}>View Details</Link>
                </div>
              </div>)

          }):
          filterdata.map((d) => {
            return (
              <div className='col-md-3 mt-2' key={d.id} >
                <div className='card'>
                  <img src={d.images[0]} alt="Product Image" style={{ height: 200 }} />
                  <h2>Product Name</h2>
                  <p className="price">{d.price}</p>
                  <p className='title'>{d.title}</p>
                  <Link className="btn btn-info" to={'productdetails/'+d.id}>View Details</Link>
                </div>
              </div>)
          })
          
          }
         

        </div>
      </div>



    </div>

  )
}

export default Apidatapge