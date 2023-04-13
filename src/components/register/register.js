import React from "react";
import './register.css';
import { useState } from "react";

function Register(){

    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    });

    const changeHandler=(e)=>{
        
        const{name,value}=e.target;
        console.log(name,value);
    }
    
    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} onChange={changeHandler} placeholder="Your Name"></input>
            <input type="text" name="email" value={user.email} onChange={changeHandler} placeholder="Your Email"></input>
            <input type="password" name="password" value={user.password} onChange={changeHandler} placeholder="Your Password"></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={changeHandler} placeholder="Re-enter Password"></input>
            <div className="button">Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}

export default Register;