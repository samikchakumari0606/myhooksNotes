import React,{useState} from 'react';
import useCount from './useCount';

const CustomHook = () => {
   const[add,Increament,Decreament]=useCount();
  return (
    <div>
        <h3>Use of custom hook</h3>
        <h3>{add}</h3>
       
        <button onClick={Increament}>Increment</button>
        <button onClick={Decreament}>Decrement</button>
    </div>
  )
}

export default CustomHook
