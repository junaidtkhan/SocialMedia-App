import { useRef, useState } from "react"
import Button from '@mui/material/Button'
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

export default function Login(props) {
    const [enteredPassword, setEnteredPassword] = useState()
    const [enteredEmail, setEnteredEmail] = useState()
    const [isLogin, setIsLogin] = useState(false)

    const enteredPasswordHandler = (event) => {
        setEnteredPassword(event.target.value)
    }
    const enteredEmailHandler = event => {
        setEnteredEmail(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()

        var email;
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAHRxUxnC1aSFYlwY8y_KzFAG2uQBgxd0I'

        fetch(url,
            {
                method: "POST",
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                header: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            if (res.ok) {
                res.json().then(data => {
                    console.log(data.email)
                    
                    // console.log(email)
                    // props.sendToSignup(email)
                })

            }
            else {

                return res.json().then(data => {
                    let errorMessage = "Authentication failed"
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message

                    }
                    alert(errorMessage)
                })
            }
        })
    }
    return (
        <Box display='flex' alignItems='center' justifyContent='center' mt={5}>
            <form onSubmit={submitHandler}>
                <Box display='flex' p={1} justifyContent='space-between'>
                    <label htmlFor="enteredEmail">Email</label>
                    <input style={{ marginLeft: '28px' }} type="text" id='enteredEmail' placeholder='Enter your enteredEmail' onChange={enteredEmailHandler}></input>
                </Box>
                <Box display='flex' p={1} justifyContent='space-between'>
                    <label htmlFor="password">Password</label>
                    <input style={{ marginLeft: '6px' }} type="text" id='password' placeholder='Enter password' onChange={enteredPasswordHandler}></input>
                </Box>
                <button>
                    Login
                    {/* <Button sx={{ float: 'right', margin: 1 }} variant='contained'>Submit</Button> */}
                </button>
            </form>
        </Box>

    )
}
