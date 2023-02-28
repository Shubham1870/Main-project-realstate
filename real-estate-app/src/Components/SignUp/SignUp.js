import React from "react"
import { useState } from "react"
import {useNavigate,Link} from "react-router-dom"
import "./SignUp.css"
const url="http://localhost/8080"
const SignUp = () => {
    const [userdetail,setuserdetail]=useState({
        email:"",
        password:"",
        confirmpassword:""
    })
    navigate=useNavigate()
    const handlechange=(e)=>{
       setuserdetail({ ...userdetail, [e.target.name]: e.target.value })
    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        const data=await fetch(`${url}/signup`,{
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body:JSON.stringify(userdetail),
}).then((data)=>data.json())
if(data.status==="success"){
    navigate("/signin")
}
    }
    return (
        <>
            <div>
                <div id="main-container">
                    <h1 id="heading">Logo</h1>
                    <h6 id="heading-2">Create New Account</h6>
                    <div id="Signup-form">
                        <form onSubmit={handlesubmit}>
                        <div><input
                                className="Signup-input"
                                type="email"
                                placeholder="Email ID"
                                
                                onChange={handlechange}
                            /></div>
                            <div><input
                                className="Signup-input"
                                type="password"
                                placeholder="Password"
                                
                                onChange={handlechange}
                            /></div>
                            <div><input
                                className="Signup-input"
                                type="password"
                                placeholder="Confirm Password"
                           
                                onChange={handlechange}

                            /></div>
                            <div>
                                <input
                                    className="Signup-input"
                                    id="button-signup"
                                    type="Submit"
                                    value="Sign Up"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div id="noaccount"><h4><a href="/"> Sign In</a>
                </h4>
                </div>

            </div>

        </>
    )
}
export default SignUp