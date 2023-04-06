import * as React from 'react';
import PostsPage from '../../pages/PostsPage/PostsPage';
import { Post } from '../../types/Post';

const PostsPageConatiner = () => {

    const [posts, setPosts] = React.useState<Post[]>([])

    React.useEffect(() => {
        !posts.length && fetch('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => resp.json())
            .then((json) => setPosts(json))
    }, [posts])

    return ( 
        <PostsPage posts={posts} />
     );
}
 
export default React.memo(PostsPageConatiner);