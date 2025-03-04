// INDEX.JS
import React from "react";
import ReactDOM from "react-dom/client";
// import Data from "./Data";
import Form from "./Form";



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
    <Form/>
    
    </React.StrictMode>
)

// FORM.JS
import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleName=(e)=>{
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmail=(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={handleName}></input>
      </label>
      <label>
        Email:
        <input type='email' value={email} onChange={handleEmail}></input>
      </label>
      <label>
        Password:
        <input type='password' value={password} onChange={handlePassword}></input>
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form;
