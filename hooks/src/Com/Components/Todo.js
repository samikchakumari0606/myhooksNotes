import React,{useState} from 'react'

const Todo = () => {
const[text,setText]=useState("");
const[list,setList]=useState([])

function add(){

    setList([...list,text])
    console.log(list)

}

function del(i){
  let copyData=list.filter((elem,id)=>{
    return i!=id
  })
  setList(copyData)
}


function all(){
    setList([])
}

  return (
    <div>
        <input type="text" placeholder='add text' value={text} onChange={(e)=>{setText(e.target.value)}}/>
        <button onClick={add}>add</button>
        <p>list:-
            {
                list.map((item,i)=>{
                   return (
                    <div key={i}>
                  <h1>{item}</h1>
                  <button onClick={()=>del(i)}>delete</button>
                    </div>
                   )
                })
            }
            <button onClick={all}>romove all</button>
        </p>
    </div>
  )
}

export default Todo