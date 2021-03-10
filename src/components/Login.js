import React from 'react'
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="login__background">
                <img
                    className="login__logo"
                    src="https://netflix-clone-fcd36.web.app/netflix-logo.png"
                    alt=""
                />
                <button 
                    className="login__button">
                    Sign In
                </button>

                <div className="login__gradient" />
            </div>

            <div className="login__body">
                <>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                </>
            </div>
        </div>
    )
}

export default Login
