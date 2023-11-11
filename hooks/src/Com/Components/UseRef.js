import React,{useRef,useState} from 'react';

const UseRef = () => {
  const[name,setName]=useState("");

  const refElement=useRef("");
  console.log(refElement)

    function handleSubmit(){
        setName("")
        refElement.current.focus()
    }

  return (
    <div>
        <h3>Use of useRef</h3>
        <input ref={refElement} type="text" placeholder='type your text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handleSubmit}>submit</button>

    </div>
  )
}

export default UseRef