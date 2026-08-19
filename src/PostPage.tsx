import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Post} from "./models/Post.ts";

export function PostPage() {

    const {id} = useParams<{ id: string }>();
    const [post, setPost] = useState<Post[]>([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost([json]))
    }, [id]);


    return (
        <>
            {post.map(post =>
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            )}
        </>
    )

}