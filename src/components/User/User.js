import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = (props) => {
    const { name, username, id } = props.user;

    const navigate = useNavigate();

    const handleUserDetail = () => {
        navigate('/users/' + id);
    }

    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>User Name: {username}</h4>
            <button onClick={handleUserDetail}>Details</button>
        </div>
    );
};

export default User;