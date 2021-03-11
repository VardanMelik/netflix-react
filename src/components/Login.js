import React, { useState } from 'react'
import './Login.css';

function Login() {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="login">
            <div className="login__background">
                <img
                    className="login__logo"
                    src="https://netflix-clone-fcd36.web.app/netflix-logo.png"
                    alt=""
                />
                <button 
                    onClick={ () => setSignIn(true)}
                    className="login__button">
                    Sign In
                </button>

                <div className="login__gradient" />
            </div>

            <div className="login__body">
                <>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="login__input">
                        <form>
                            <input 
                                type="email" 
                                placeholder="Email address" />
                            <button 
                                onClick={ () => setSignIn(true)}
                                className="login__tryButton">
                                Try 30 Days Free 
                            </button>
                        </form>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Login
