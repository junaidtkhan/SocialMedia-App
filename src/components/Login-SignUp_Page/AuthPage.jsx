import React, { useState } from 'react'

import SignIn from './Signup2'
import Login from './Login2'
export const AuthPage = () => {
    const [signUp, setSignUp] = useState(false)
    const [signedInEmail, setSignedInEmail] = useState()

    const setLoginHandler = () => {
        setSignUp(!signUp)
    }
    const sendToSignUp = email => {
        console.log('im here')
        setSignedInEmail(email)
    }
    return (
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center" }} >
            {/*signup={setSignUp*/}
            <div>
                {signUp && <SignIn  setsignup={setSignUp} />}
                {!signUp && <Login sendToSignup={sendToSignUp} />}
            </div>

            <div>
                <br />
                <span onClick={setLoginHandler}>{signUp ? 'Already have an account?  login' : "signup"}</span>
            </div>
            <br />
            <div>
                <span>{signedInEmail} </span>
            </div>

        </div>

    )
}
