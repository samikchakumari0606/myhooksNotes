import React,{useState} from 'react'

const useCount = () => {

    const[add,setAdd]=useState(1);
    
    function Increament(){
        setAdd(add+1)
     }
 
     function Decreament(){
         setAdd(add-1)
     }
 
     return [add,Increament,Decreament]
}

export default useCount