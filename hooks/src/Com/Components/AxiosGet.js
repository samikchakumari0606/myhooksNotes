import React,{useState,useEffect} from 'react';
import axios from "axios";

const AxiosGet = () => {
    const[userData,setUserData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>{
            console.log(res)
            setUserData(res.data)
        })
    },[])


  return (
    <div>
      <h1>{

        userData.map((data)=>{
            return (
                <>
                <h1>{data.title}</h1>
                </>
            )
        })
       }</h1>  
    </div>
  )
}

export default AxiosGet