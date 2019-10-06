import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <Link to="/login">Login design</Link>
                <Link to="/register">Register design</Link>
            </nav>
        </header>
    )
}

export default Header;
