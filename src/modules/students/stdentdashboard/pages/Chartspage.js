import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];



function Chartspage() {
    const [card, updatecard] = useState([])
    const [data,setdata]=useState([])
    const [rat,setrat]=useState([]);
    

    const apifunc = () => {
      axios.get("https://dummyjson.com/products").then((d) => {
        updatecard(d.data.products);
        setdata(d.data.products);
        const myreating = d.data.products.map((r)=>{
            // return {reating:r.rating,pricesss:r.price}
            return r.rating
        });
        setrat([...new Set(myreating)])

        console.log(myreating);
      })
    }
  
    useEffect(() => {
      apifunc();
    }, []);
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
                <div className='card'>
                    <p>Total Products </p>
                    <h1>{card.length}</h1>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <p>beauty </p>
                    <h1>{0}</h1>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <p>fragrances </p>
                    <h1>0</h1>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <p>fragrances </p>
                    <h1>0</h1>
                </div>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-md-8 border bg-dark text-white'>
            <BarChart
          width={800}
          height={400}
          data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="brand" fill="#8884d8"/> */}
          <Bar dataKey="stock" fill="red"/>
        </BarChart>
            </div>
            <div className='col-md-4'>

                <p>Custom Graph Design</p>
                <ul className='customgraph'>
                {rat.map((d)=>{
                    return <li style={{width:`${d*10}%`}}>{d}</li>
                })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Chartspage