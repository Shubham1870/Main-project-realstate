import React from "react"
import { useState } from "react"
import "./SignUp.css"
const SignUp = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cnfpassword, setcnfpassword] = useState("")
    return (
        <>
            <div>
                <div id="main-container">
                    <h1 id="heading">Logo</h1>
                    <h6 id="heading-2">Create New Account</h6>
                    <div id="Signup-form">
                        <form >
                        <div><input
                                className="Signup-input"
                                type="email"
                                placeholder="Email ID"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            /></div>
                            <div><input
                                className="Signup-input"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            /></div>
                            <div><input
                                className="Signup-input"
                                type="password"
                                placeholder="Confirm Password"
                                value={cnfpassword}
                                onChange={(e) => setcnfpassword(e.target.value)}

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