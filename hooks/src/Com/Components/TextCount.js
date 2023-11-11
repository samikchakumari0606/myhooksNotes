import React,{useState} from 'react'

const TextCount = () => {
    const[text,setText]=useState("")
    function upper(){
        let newText=text.toUpperCase();
        setText(newText)
    }

 function Mylower(){

    let mynew=text.toLowerCase();
    setText(mynew)
 }
  return (
    <div>
        <textarea value={text} placeholder='add text' onChange={(e)=>{setText(e.target.value)}}/>
        <br/>
        <button onClick={Mylower}>lowercase</button>
        <button onClick={upper}>uppercase</button>
        <h3>total word is {text.split(" ").length} and the char {text.length}</h3>
    </div>
  )
}

export default TextCount