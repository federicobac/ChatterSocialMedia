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
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <footer>
                <button onClick={() => navigate(`/post/${post.id}`)}>
                    Open post
                </button>

                <button onClick={() => onDelete(post.id)}>
                    Delete post
                </button>
            </footer>

        </div>
    )
}
