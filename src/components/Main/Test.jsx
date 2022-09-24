import React, { useState } from 'react'

export const Test = () => {
    const [des, setDes] = useState('')
    const submitHandler=(e) => {
        e.preventDefault()
        console.log(des)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => { setDes(e.target.value) }} />

                <button type='submit'>Submit</button>
            </form>

        </div >
    )
}
