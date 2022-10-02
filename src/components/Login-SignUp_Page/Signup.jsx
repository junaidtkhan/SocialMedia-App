import { useRef, useState } from "react"
import Box from "@mui/material/Box"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../FirebaseConfig"
import { useappStore } from "../Store/Store"
import { db } from '../../FirebaseConfig'
import { addDoc, doc, collection, setDoc } from 'firebase/firestore'
import { v4 } from "uuid"

export default function Signup(props) {
    const [enteredPassword, setEnteredPassword] = useState()
    const [enteredName, setEnteredName] = useState()
    const [enteredEmail, setEnteredEmail] = useState()
    const setLoggedIn = useappStore((state) => (state.setLoggedIn))

    const enteredPasswordHandler = (event) => {
        setEnteredPassword(event.target.value)
    }
    const enteredEmailHandler = event => {
        setEnteredEmail(event.target.value)
    }
    const enteredNameHandler = event => {
        setEnteredName(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword).then((cred) => {
            console.log(`'user created:'+${cred.user}`)

            setDoc(doc(db, 'users', `${cred.user.uid}`), { Posts: [], name: enteredName })

            props.setsignup(false)
            setEnteredEmail('')
            setEnteredPassword('')
        }).catch(err => {
            alert(err.message)
        })


    }

    return (
        <Box display='flex' alignItems='center' justifyContent='center' mt={5} >
            <form onSubmit={submitHandler}>
                <Box display='flex' p={1} justifyContent='space-between'>
                    <label htmlFor="name">name</label>
                    <input style={{ marginLeft: '6px' }} type="text" id='name' value={enteredName} placeholder='Enter name' onChange={enteredNameHandler}></input>
                </Box>
                <Box display='flex' p={1} justifyContent='space-between'>
                    <label htmlFor="enteredEmail">Email</label>
                    <input style={{ marginLeft: '28px' }} type="text" id='enteredEmail' value={enteredEmail} placeholder='Enter your enteredEmail' onChange={enteredEmailHandler}></input>
                </Box>
                <Box display='flex' p={1} justifyContent='space-between'>
                    <label htmlFor="password">Password</label>
                    <input style={{ marginLeft: '6px' }} type="text" id='password' value={enteredPassword} placeholder='Enter password' onChange={enteredPasswordHandler}></input>
                </Box>
                <button>
                    SignUp
                </button>
            </form>

        </Box>

    )
}
