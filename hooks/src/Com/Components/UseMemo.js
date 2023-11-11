import React,{useState,useMemo,useEffect} from 'react'

const UseMemo = () => {
const[add,setAdd]=useState(1)
const[minus,setMinus]=useState(100)

const result=useMemo(function multiply(){
    console.log("***************") 
    return add*10
    
 },[add])


return (
    <div>
        <h3>use of useMemo</h3>
        <h3>{add}</h3>
        <h3>{minus}</h3>
        <h3>{result}</h3> 
        <button onClick={()=>setAdd(add+1)}>add</button>
        <button onClick={()=>setMinus(minus-1)}>minus</button>
    </div>
  )
}

export default UseMemo