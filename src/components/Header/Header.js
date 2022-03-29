import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>
            <h1>Welcome to React Router !!</h1>
            <nav>
                <Link className='nav-item' to="/">Home</Link>
                <Link className='nav-item' to="/users">Users</Link>
                <Link className='nav-item' to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;