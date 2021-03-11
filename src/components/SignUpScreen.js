import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignUpScreen.css';

function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value 
            )
            .then( (authUser) => {
                console.log(authUser);
            })
            .catch(error => console.log('Register Error: ',error))
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then(authUser => {
            console.log(authUser)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input
                    ref={emailRef}
                    placeholder="Email"
                    type="email"
                />
                <input 
                    ref={passwordRef}
                    placeholder="Password"
                    type="password"
                />
                <button 
                    onClick={signIn}
                    type="submit">
                    Sign In
                </button>
                <h4>
                    <span className="signUpScreen__gray">
                        New to Netflix?&nbsp;
                    </span>

                    <span 
                        onClick={register}
                        className="signUpScreen__link">
                        Sign up now.
                    </span>
                </h4>
                
            </form>
            
        </div>
    )
}

export default SignUpScreen
