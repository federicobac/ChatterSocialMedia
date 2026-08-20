import {useEffect, useState} from 'react'
import './App.css'
import type {Post} from "./models/Post.ts";
import {PostInFeed} from "./PostInFeed.tsx";
import {useNavigate} from "react-router";
import SearchBar from "./SearchBar.tsx";

export function Feed() {
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
            <header>
                <h1>Chatter Social Media</h1>
            </header>

            <div>
                <SearchBar
                    value={searchTerm}
                    onChange={setSearchTerm}
                    onClick={getData}
                />
            </div>

            <header>

                <button onClick={() => navigate("/create")}>
                    Create Post
                </button>

            </header>

            <main>
                {posts.map(post => {
                    return <PostInFeed
                        key={post.id}
                        post={post}
                        onDelete={deletePost}
                    />;
                })}
            </main>
        </>
    );
}

