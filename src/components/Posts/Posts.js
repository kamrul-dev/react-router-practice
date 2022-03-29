import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);
    return (
        <div>
            <h2>This is post page.</h2>
        </div>
    );
};

export default Posts;