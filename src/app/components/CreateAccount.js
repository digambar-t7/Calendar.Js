import React, { useState } from 'react'

const CreateAccount = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cnfmpassword, setCnfmPassword] = useState('')

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
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
                    <label htmlFor="name" className='entries' >Enter Name</label>
                    <input type="text" placeholder="Enter Name" name="name" value={name} onChange={changeName} required />
                    <label htmlFor="email" className='entries' >Enter EmailId</label>
                    <input type="email" placeholder="Enter EmailId" name="email" value={email} onChange={changeEmail} required />

                    <label htmlFor="password" className='entries'>Enter Password</label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={changePassword} required />
                    <label htmlFor="cnfmpsw" className='entries'>Confirm Password</label>
                    <input type="password" placeholder="Enter Password" name="cnfmpsw" value={cnfmpassword} onChange={changeCnfmPassword} required />

                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button id='signup' className='submit' type="submit">Signup</button>
                </div>

            </form>

        </section >
    )
}

export default CreateAccount
