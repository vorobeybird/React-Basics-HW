import * as React from 'react';
import { useState, useEffect } from 'react';
import PostComponent from '../../components/PostComponent';
import { Post } from '../../types/Post';

const PostsPage = (props: {posts: Post[]}) => {

    const {posts} = props; 

    return (
        <div>
            {
                posts.map((item) => (
                    <PostComponent key={item.id} post={item} />
                ))
            }
        </div>
    );
}

export default React.memo(PostsPage);
