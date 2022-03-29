import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { userId } = useParams();
    const [user, setUsers] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <div>
            <h2>This is user Details</h2>
            <h3>Name: {user.name}</h3>
            <h4>Email: {user.email}</h4>
            <h5>Website: {user.website}</h5>
        </div>
    );
};

export default UserDetails;