import React, { useState } from 'react'

const CreateAccount = () => {

    const [details, setDetails] = useState({
        name: '',
        email: '',
        password: '',
        cnfmpassword: '',
    })

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        const { name, email, password } = details
        const response = await fetch('http://localhost:3131/api/auth/createaccount', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })
        const json = await response.json()
        console.log(json.username)
        if (json.success) {
            localStorage.setItem('token', json.token)
        } else {
            alert(json.error)
        }
    }

    return (
        <section id='Login'>
            <form onSubmit={handleSignup}>
                <h1 className="login-heading">Calendar.js</h1>
                <div className="container">
                    <label htmlFor="name" className='entries' >Enter Name</label>
                    <input type="text" placeholder="Enter Name" name="name" value={details.name} onChange={handleChange} required />
                    <label htmlFor="email" className='entries' >Enter EmailId</label>
                    <input type="email" placeholder="Enter EmailId" name="email" value={details.email} onChange={handleChange} required />

                    <label htmlFor="password" className='entries'>Enter Password</label>
                    <input type="password" placeholder="Enter Password" name="password" value={details.password} onChange={handleChange} required />
                    <label htmlFor="cnfmpsw" className='entries'>Confirm Password</label>
                    <input type="password" placeholder="Enter Password" name="cnfmpassword" value={details.cnfmpassword} onChange={handleChange} required />

                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button id='signup' className='submit' type="submit">Signup</button>
                </div>

            </form>

        </section >
    )
}

export default CreateAccount
