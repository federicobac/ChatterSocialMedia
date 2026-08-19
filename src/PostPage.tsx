import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Post} from "./model.ts";

export function PostPage() {

    const {id} = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        getPost();
    }, [id]);

    async function getPost() {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);

        const json: Post = await response.json();
        setPost(json);
    }

    if(post === null) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )

}