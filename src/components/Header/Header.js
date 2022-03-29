import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <h1>Welcome to React Router !!</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;