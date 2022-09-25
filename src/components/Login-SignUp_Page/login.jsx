import { useState } from "react"
import { useappStore } from "../Store/Store"
import Box from "@mui/material/Box"
import { auth } from "../../FirebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { v4 } from "uuid"
import { FetchingFeed } from "../Store/FetchingFeed"

export default function Login(props) {

    const [enteredPassword, setEnteredPassword] = useState()
    const [enteredEmail, setEnteredEmail] = useState()
    const setLoggedIn = useappStore((state) => (state.setLoggedIn))
    const setUser = useappStore((state) => (state.setUser))

    

    const enteredPasswordHandler = (event) => {
        setEnteredPassword(event.target.value)
    }
    const enteredEmailHandler = event => {
        setEnteredEmail(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, enteredEmail, enteredPassword).then((cred) => {
            alert('user logged in')


            setUser(cred.user)
            setLoggedIn(true)
        }).catch((err) => {
            console.log(err.message)
        })


    }

    FetchingFeed()

    return (
        <Box display='flex' alignItems='center' justifyContent='center' mt={5} >
            <form onSubmit={submitHandler}>
                <Box display='flex' p={1} justifyContent='space-between'>
                    <label htmlFor="enteredEmail">Email</label>
                    <input style={{ marginLeft: '28px' }} type="text" id='enteredEmail' placeholder='Enter your enteredEmail' onChange={enteredEmailHandler}></input>
                </Box>
                <Box display='flex' p={1} justifyContent='space-between'>
                    <label htmlFor="password">Password</label>
                    <input style={{ marginLeft: '6px' }} type="text" id='password' placeholder='Enter password' onChange={enteredPasswordHandler}></input>
                </Box>
                <button >
                    Login
                </button>
            </form>
        </Box>

    )
}
