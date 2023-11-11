import React,{useState,useEffect} from 'react';
import axios from "axios";

const AxiosPost = () => {
   const data={fname:"",lastname:""};
   const [inputData,setInputData]=useState(data);

   function handleData(e){
         setInputData({...inputData,[e.target.name]:e.target.value})
   }

   function handleSubmit(e){
       e.preventDefault();

       axios.post("https://jsonplaceholder.typicode.com/posts",inputData)
       .then((res)=>{
        console.log(res)

       })
   }


   function handleUpdate(e){
      e.preventDefault();
      axios.put("https://jsonplaceholder.typicode.com/posts/1",inputData)
      .then((res)=>{
       console.log(res)

      })
   }

   function handleDelete(e){
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=>{
         console.log(res)
  
        })
   }
  return (
    <div>
        <label>First Name:</label>
        <input type="text" name="fname" value={inputData.fname} onChange={handleData} /><br/>
        <label>Lat Name:</label>
        <input type="text" name="lastname"  value={inputData.lastname} onChange={handleData}/><br/>
        <button onClick={handleSubmit}>post button</button>
        <button onClick={handleUpdate}>update</button>
        <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default AxiosPost