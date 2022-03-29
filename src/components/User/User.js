import React from 'react';

const User = (props) => {
    const { name, username } = props.user;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>User Name: {username}</h4>
        </div>
    );
};

export default User;