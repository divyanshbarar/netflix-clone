import React, { useState } from 'react'
import "./Login.css"
import logo from "./netflix.png"
import SignIn from './SignIn'
function Login() {


const [signIn, setSignIn] = useState(false)


    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img className="logo" src={logo} alt="" />
                <button 
                onClick={()=>setSignIn(true)}
                className="loginScreen__button">Sign In</button>

                <div className="loginScreen__gradient">
                </div>

                <div className="loginScreen__body">
                    {signIn ? (
                        <SignIn/>
                    ): (
<>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className="loginScreen__input">
                            <form >
                                <input type="email" placeholder="Email " />
                                <button 
                                 onClick={()=>setSignIn(true)}
                                className="loginScreen__getStarted">Get Started </button>
                               
                            </form>
                        </div>
                    </>
          
                    )}
                          </div>
       
            </div>


        </div>
    )
}

export default Login
