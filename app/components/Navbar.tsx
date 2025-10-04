import React from 'react'
import { Link } from 'react-router'; // Or your router of choice

const Navbar: () => Element = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">Skillara</p>
            </Link>

            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    );
};

export default Navbar;