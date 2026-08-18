import type {Post} from "./model.ts";

interface PostDetailsProps {
    post: Post
}

export function PostDetails({post}: PostDetailsProps) {
    return (
        <div>
            <h1>{post.title}</h1>

            <p>body is:
                {post.body}
            </p>
        </div>
    )
}
