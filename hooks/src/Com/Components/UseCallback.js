import React,{useState,useCallback} from 'react';
import CallA from './CallA';

const UseCallback = () => {
const[add,setAdd]=useState(1)

  return (
    <div>
       <h3>use of useCallback hook</h3> 
       <h4>{add}</h4>
        <button onClick={()=>setAdd(add+1)}>add</button>
        <CallA/>
    </div>
  )
}

export default UseCallback