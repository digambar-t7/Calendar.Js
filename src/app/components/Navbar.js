import React from 'react'
import '../styles/Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id='Navbar'>
            <u>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/events' >Events</Link></li>
                <li><Link to='/login' >Login</Link></li>
                <li><Link to='/adminpanel' >Admin</Link></li>
            </u>
        </nav>
    )
}

export default Navbar
