import { useState } from "react"
import Button from '@mui/material/Button'
import Grid from "@mui/material/Grid"
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
    const submitHandler = (event) => {
        event.preventDefault()
        fetch('')
    }
    return (

        <div style={{display:'flex',justifyContent:'center'}}>
            <div container sx={{     marginLeft: '658px',marginTop:'200px' }}>

                <form onSubmit={submitHandler}>
                    <div item style={{ margin: '20px 0px' }}>
                        <label htmlFor="email">Email</label>
                        <input style={{marginLeft:'28px'}} type="text" id='email' placeholder='Enter your email' onChange={nameHandler}></input>
                    </div>
                    <div item style={{ margin: '20px 0px' }}>
                        <label htmlFor="password">Password</label>
                        <input style={{marginLeft:'6px'}} type="text" id='password' placeholder='Enter password' onChange={emailHandler}></input>
                    </div>
                    <Button variant='contained'>Submit</Button>
                </form>


            </div>
        </div>
    )
}
