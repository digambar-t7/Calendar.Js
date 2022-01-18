import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3131/api/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        if (json.success) {
            localStorage.setItem('token', json.token)
            alert(`Welcome ${json.username.toUpperCase()}`)
        }
    }

    return (
        <section id='Login'>
            <form onSubmit={handleLogin}>
                <h1 className="login-heading">Calendar.js</h1>
                <div className="container">
                    <label htmlFor="email" className='entries' >Email</label>
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={changeEmail} required />

                    <label htmlFor="password" className='entries'>Password</label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={changePassword} required />

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
