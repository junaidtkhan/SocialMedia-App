import { useState } from "react"
import Button from '@mui/material/Button'
import Box from "@mui/material/Box"

export default function Login() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const emailHandler = event => {
        setEmail(event.target.value)
    }
    const display = (event) => {
        event.preventDefault()
        console.log(name, email)
    }
    return (


        <Box sx={{ display: 'flex' }} >
            <Box sx={{justifyContent:'center'}}>
                <form onSubmit={display}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' placeholder='Enter your email' onChange={nameHandler}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" id='password' placeholder='Enter password' onChange={emailHandler}></input>
                    </div>
                    <Button variant='contained'>Submit</Button>
                </form>
            </Box>
        </Box>
    )
}
