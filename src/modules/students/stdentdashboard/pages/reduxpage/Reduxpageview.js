import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './Myactionlist';
function Reduxpageview() {

    const count = useSelector((state) => state.counter.abc)
    const sendfunc = useDispatch();

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <h1>default state value : {count}</h1>
                <button onClick={()=>sendfunc(increment())}>increment</button>
            </div>

        </div>
    </div>
  )
}

export default Reduxpageview