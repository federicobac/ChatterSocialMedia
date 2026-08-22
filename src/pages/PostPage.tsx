import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Post} from "../models/Post.ts";
import type {Comment} from "../models/Comment.ts";

export function PostPage() {

    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        getPost();

        getComments();

    }, [id]);

    async function getPost() {
        const response = await fetch(
            `https://dummyjson.com/posts/${id}`,
        )

        const json: Post = await response.json();
        setPost(json);
    }

    async function getComments() {
        const response = await fetch(
            `https://dummyjson.com/posts/${id}/comments`,
        )

        const json = await response.json();
        setComments(json.comments);
    }

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

    if (post === null) {
        return <p>Loading...</p>
    }


    return (
        <main>

            <article>
                <h1>{post.title}</h1>
                <p>{post.body}</p>

                <p>
                    👍{post.reactions.likes}
                    👎{post.reactions.dislikes}
                    👁 {post.views}
                </p>

                <button onClick={deletePost}>
                    Delete Post
                </button>

            </article>

            <section>
                <h2>Comment Section</h2>

                {comments.map(comment =>
                    <div key={comment.id}>
                        <h3>{comment.user.username}</h3>
                        <p>{comment.body}</p>
                    </div>
                )}
            </section>

        </main>
    )

}