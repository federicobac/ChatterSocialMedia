import {useEffect, useState} from 'react'
import './App.css'
import type {Post} from "./models/Post.ts";
import {PostDetails} from "./PostDetails.tsx";
import {useNavigate} from "react-router";

export function App() {
    const [posts, setPosts] = useState<Post[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")

    const navigate = useNavigate();

    useEffect(() => {
        getData()
    }, []);

    async function getData() {
        const url = searchTerm
            ? `https://dummyjson.com/posts/search?q=${searchTerm}`
            : 'https://dummyjson.com/posts';

        const response = await fetch(url);
        const json = await response.json();
        setPosts(json.posts)
    }

    async function deletePost(id: number) {
        await fetch(`https://dummyjson.com/posts/${id}`, {
            method: "DELETE",
        });

        setPosts(posts.filter(post => post.id !== id));
    }

    return (
        <>
            <div>
                <input
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />

                <button onClick={() => getData()}>
                    Search
                </button>

            </div>

            <div>

                <button onClick={() => navigate("/create")}>
                    Create Post
                </button>

            </div>

            <div>
                {posts.map(post => {
                    return <PostDetails
                        key={post.id}
                        post={post}
                        onDelete={deletePost}
                    />;
                })}
            </div>
        </>
    );
}

