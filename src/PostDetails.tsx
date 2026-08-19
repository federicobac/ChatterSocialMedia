import type {Post} from "./models/Post.ts";
import {useNavigate} from "react-router";

interface PostDetailsProps {
    post: Post,
    onDelete: (id: number) => void,
}

export function PostDetails({post, onDelete}: PostDetailsProps) {

    const navigate = useNavigate();

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <button onClick={() => navigate(`/post/${post.id}`)}>
                Open post
            </button>

            <button onClick={() => onDelete(post.id)}>
                Delete post
            </button>

        </div>
    )
}
