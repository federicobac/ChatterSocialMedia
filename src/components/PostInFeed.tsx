import type {Post} from "../models/Post.ts";
import {useNavigate} from "react-router";

interface PostInFeedProps {
    post: Post,
    onDelete: (id: number) => void,
}

export function PostInFeed({post, onDelete}: PostInFeedProps) {

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
