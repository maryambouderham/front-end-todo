import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [firstName,setfirstName]=useState("")
  const [lastName,setlastName]=useState("")
  const [Avatar,setAvatar]=useState("")
  const [userName,setuserName]=useState("")
  const [Password,setPassword]=useState("")

  // useEffect(() => {
  //   axios.get("http://localhost:9000/users/add").then((d)=>{
  //     console.log(d)
  //     alert("successful insert")
  //   }).catch((err)=>{console.log(err)})
  
    
  // }, [])


  const submitRegister=()=>{
    axios.post("http://localhost:9000/users/add",{
    FirstName:firstName,
    LastName:lastName,
    avatar:Avatar,
    UserName:userName,
    password:Password,}).then((d)=>{
      console.log(d)
      alert("successful insert")
    }).catch((err)=>{console.log(err)})
  }
  return (
    <div className="App">
      <h1>SIGN IN:</h1>
      <div className="form">
      <label>FirstName:</label>
      <input
       type="text"
       name="FirstName"
       onChange={(e)=>{
         setfirstName(e.target.value)
       }}></input>
      <label>LastName:</label>
      <input 
      type="text"
      name="LastName"
      onChange={(e)=>{
        setlastName(e.target.value)
      }}></input>
      <label>Avatar:</label>
      <input 
      type="text" 
      name="Avatar"
      onChange={(e)=>{
        setAvatar(e.target.value)
      }}></input>
      <label>UserName:</label>
      <input 
      type="text" 
      name="UserName"
      onChange={(e)=>{
        setuserName(e.target.value)
      }}></input>
      <label>Password:</label>
      <input 
      type="text" 
      name="Password"
      onChange={(e)=>{
        setPassword(e.target.value)
      }}></input>
      <button onClick={submitRegister}>Register</button>
      </div>
    </div>
  )
}

export default App
