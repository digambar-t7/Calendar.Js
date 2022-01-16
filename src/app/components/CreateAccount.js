import React, { useState } from 'react'

const CreateAccount = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cnfmpassword, setCnfmPassword] = useState('')

    const changeUsername = (e) => {
        setUsername(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changeCnfmPassword = (e) => {
        setCnfmPassword(e.target.value)
    }

    return (
        <section id='Login'>
            <form action="/" method="post">
                <h1 className="login-heading">Calendar.js</h1>
                <div className="container">
                    <label htmlFor="uname" className='entries' >Enter Username</label>
                    <input type="text" placeholder="Enter Username" name="uname" value={username} onChange={changeUsername} required />

                    <label htmlFor="psw" className='entries'>Enter Password</label>
                    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={changePassword} required />
                    <label htmlFor="cnfmpsw" className='entries'>Confirm Password</label>
                    <input type="password" placeholder="Enter Password" name="cnfmpsw" value={cnfmpassword} onChange={changeCnfmPassword} required />

                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button id='signup' type="submit">Signup</button>
                </div>

            </form>

        </section >
    )
}

export default CreateAccount
