import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const changeUsername = (e) => {
        setUsername(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <section id='Login'>
            <form action="/" method="post">
                <h1 className="login-heading">Calendar.js</h1>
                <div className="container">
                    <label htmlFor="uname" className='entries' >Username</label>
                    <input type="text" placeholder="Enter Username" name="uname" value={username} onChange={changeUsername} required />

                    <label htmlFor="psw" className='entries'>Password</label>
                    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={changePassword} required />

                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="submit" className='submit'>Login</button>
                    <span className="psw"><Link to='/login/createaccount' className='createacc'>Create new Account</Link></span>
                </div>

            </form>

        </section >
    )
}

export default Login
