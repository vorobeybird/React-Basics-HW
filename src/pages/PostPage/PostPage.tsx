import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { PostComment } from "../../types/Comments";
import { Post } from "../../types/Post";
import "./PostPage.css"


const PostPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const [post, setPost] = useState<Post>();
    const [comments, setComments] = useState<PostComment[]>();

    useEffect(() => {
        const post = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const postComments = fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        Promise.all([post, postComments])
            .then((resp) => Promise.all([resp[0].json(), resp[1].json()]))
            .then(([post, comments]) => {
                setPost(post);
                setComments(comments);
            })
    }, [])



    return (
        <div className="post__container">
            <div className="post__info">
                <div>
                    <div>ID: {post?.id}</div>
                    <div>Title: {post?.title}</div>
                </div>
                <div>{post?.body}</div>
            </div>
            <div className="post__comments__container">
                Comments:
                {
                    comments?.map((comment) => (
                        <div className="post__comments__comment">
                            <p>{comment.email}</p>
                            <p>{comment.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PostPage;