import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();
    const [posts, setPosts] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [postId])
    return (
        <div>
            <h2>This is post Details page. Post Id: {posts.id}</h2>
            <h4>Post Title: {posts.title}</h4>
            <p>{posts.body}</p>
        </div>
    );
};

export default PostDetail; <h2>This is post Details page</h2>