import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar animate-in fade-in slide-in-from-top-4 duration-700">
            <Link to="/" className="transition-all duration-300 hover:scale-105">
                <p className="text-2xl font-bold text-gradient hover:drop-shadow-sm transition-all duration-300">Skillara</p>
            </Link>

            <Link to="/upload" className="primary-button w-fit transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                Upload Resume
            </Link>
        </nav>
    );
};

export default Navbar;