import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    // console.log(users);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <div>
            <h2>This is users list page.</h2>
            {
                users.map(user => <User
                    key={user.id}
                    user={user}
                ></User>)
            }
            
        </div>
    );
};

export default Users;