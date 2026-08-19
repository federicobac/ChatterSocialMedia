import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Post} from "./models/Post.ts";
import type {Comment} from "./models/Comment.ts";

export function PostPage() {

    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [post, setPost] = useState<Post[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost([json]))

        fetch(`https://dummyjson.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(json => setComments(json.comments));

    }, [id]);

    async function deletePost() {

        const response = await fetch(
            `https://dummyjson.com/posts/${id}`,
            {
                method: "DELETE"
            }
        );

        const json = await response.json();
        console.log(json);

        navigate("/");

    }


    return (
        <>
            {post.map(post =>
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>

                    <button onClick={deletePost}>
                        Delete Post
                    </button>
                </div>
            )}

            <h2>Comment Section</h2>

            {comments.map(comment =>
                <div key={comment.id}>
                    <h3>{comment.user.username}</h3>
                    <p>{comment.body}</p>
                </div>
            )}
        </>
    )

}