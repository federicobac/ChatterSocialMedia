import type {Post} from "./model.ts";
import {useNavigate} from "react-router";

interface PostDetailsProps {
    post: Post
}

export function PostDetails({post}: PostDetailsProps) {

    const navigate = useNavigate();

    return (
        <div>
            <h1>{post.title}</h1>
            <p>body is:
                {post.body}
            </p>

            <button onClick={() => navigate(`/post/${post.id}`)}>
                Open post
            </button>

        </div>
    )
}
