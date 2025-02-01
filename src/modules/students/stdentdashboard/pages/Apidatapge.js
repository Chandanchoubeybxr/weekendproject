import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Apidatapge() {
    const[card, updatecard]=useState([])

    const apifunc = ()=>
    {
        axios.get("https://dummyjson.com/products").then((d)=>{
            console.log(d.data.products);
            updatecard(d.data.products);
        })
    }

    useEffect(()=>{
        apifunc();
    },[]);



  return (
    <div>Apidatapge
        
    </div>

  )
}

export default Apidatapge