import React,{useState} from 'react';


const Text = () => {
const[text,setText]=useState("Enter text here");

function handleChange(event){
     console.log("On Change")
     setText(event.target.value);
}
    function upperCase(){
        console.log("uppercase" +text)
        let newText=text.toUpperCase();
          setText(newText)
    }

    function lowerCase(){
        console.log("lowercase" +text)
        let newTextlower=text.toLowerCase();
          setText(newTextlower)
    }
  return (
    <div>
    <textarea style={{height:"300px",width:"300px",border:"2px solid red"}}
     value={text} onChange={handleChange}>
      
       
    </textarea>
    <br/> 
    <button onClick={upperCase}>UperCase</button>
    <button onClick={lowerCase}>LowerCase</button>
    <h1>Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length } Minutes to read</p>
    </div>
  )
}

export default Text