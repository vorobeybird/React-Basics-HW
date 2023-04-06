import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types/Post';
import './PostComponent.css'

interface PostProps {
    post: Post
}

const PostComponent = (props: PostProps) => {

    const {post} = props; 

    return (
        <div className='post__container' key={post.id}>
            <div className='post__item'>UserID: {post.userId}</div>
            <Link to={`${post.id}`} className='post__item'>Post number {post.id} </Link>
            <div className='post__item'>Title: {post.title}</div>
            <div className='post__item'>{post.body}</div>
        </div>
    );
}

export default React.memo(PostComponent);