import React from "react"
import { useState } from "react"
import "./SignIn.css"
const SignIn = () => {
    const [userid, setuserid] = useState("")
    const [password, setpassword] = useState("")

    return (
        <>
            <div>
                <div id="main-container">
                    <h1 id="heading">Logo</h1>
                    <h6 id="heading-2">Enter Your Credentials To access your Account</h6>
                    <div id="Signin-form">
                        <form >
                            <div><input
                                className="Signin-input"
                                type="text"
                                placeholder="User ID"
                                value={userid}
                                onChange={(e) => setuserid(e.target.value)}
                            /></div>
                            <div><input
                                className="Signin-input"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}

                            /></div>
                            <div>
                                <input
                                    className="Signin-input"
                                    id="button-signin"
                                    type="Submit"
                                   
                                />
                                <div id="Signup">
                                    <a href="/SignUp">Sign Up</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="noaccount"><h4>Don't have an Account ?  <a href="/SignUp"> Sign Up</a>
                </h4>
                </div>

            </div>

        </>
    )
}
export default SignIn