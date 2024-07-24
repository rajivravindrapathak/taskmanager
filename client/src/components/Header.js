import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        </nav>
    </header>
);

export default Header;
