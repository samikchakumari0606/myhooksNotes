import React,{useEffect,useState} from 'react'

const UseEffect = () => {
const[count,setCount]=useState(0);
const[number,setNumber]=useState(10);

useEffect(()=>{
    console.log("useEffect when count changes")
},[count])

function handleCount(){
    setCount(count+1);
}

function handleNumber(){
    setNumber(number+1);
}

  return (
    <div>
        <h3>{count}</h3>
        <h3>{number}</h3>
        <button onClick={handleCount}>count</button>
        <button onClick={handleNumber}>number</button>
    </div>
  )
}

export default UseEffect