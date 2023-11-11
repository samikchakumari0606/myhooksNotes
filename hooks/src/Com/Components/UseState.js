import React,{useState} from 'react'

const UseState = () => {

    const[count,setCount]=useState(0)

    function Increament(){
       setCount(count+1)
    }

    function Decreament(){
        setCount(count-1)
    }
    
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={Increament}>Increment</button>
        <button onClick={Decreament}>Decrement</button>
    </div>
  )
}

export default UseState