import React,{useState} from 'react'

const Login = () => {
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[UsernameErr,setUsernameErr]=useState(false)
    const[passwordErr,setPasswordErr]=useState(false)


function getSubmitData(e){
   
    if(name.length<3 || password.length<3){
        alert("fill all the field")
    }
    else{
        alert("login successfully")
    }
    
    e.preventDefault();
}

function handleName(e){
      let item=e.target.value;
      if(item.length<3){
          setUsernameErr(true)
      }
      else{
        setUsernameErr(false)
      }
      setName(item)
}

function handlePassword(e){
    let itemPassword=e.target.value;
      if(itemPassword.length<3){
          setPasswordErr(true)
      }
      else{
        setPasswordErr(false)
      }
      setPassword(itemPassword)
}
  return (
    <div>
        <h3>Login form</h3> 
        <form onSubmit={getSubmitData}>
            <input type="text" placeholder='name' onChange={handleName}/>{UsernameErr?<h3>invalid name</h3>:""}
            <br/>
            <input type="text" placeholder='password' onChange={handlePassword}/>{passwordErr?<h3>invalid password</h3>:""}
            <br/>
            <input type="submit"/>
        </form>

    </div>
  )
}

export default Login