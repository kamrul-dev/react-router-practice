import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <div>
            <h2>This is users list page.</h2>
        </div>
    );
};

export default Users;