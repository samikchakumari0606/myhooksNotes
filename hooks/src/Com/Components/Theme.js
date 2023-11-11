import React,{useState} from 'react'

const Theme = () => {
const[style,setMyStyle]=useState({
           color:"red",
           backgroundColor:"black"
})

function change(){
    if(style.color=="red"){
        setMyStyle({
            color:"green",
            backgroundColor:"black"
        })
        
    }
}
  return (
    <div>
        <h1 style={style}>change color</h1>
        <button onClick={change}>Toggle</button>
    </div>
  )
}

export default Theme