import {useEffect, useState} from 'react'
import './App.css'
import type {Post} from "./models/Post.ts";
import {PostDetails} from "./PostDetails.tsx";

export function App() {
    const [posts, setPosts] = useState<Post[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")


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
                {posts.map(p => {
                    return <PostDetails post={p} />;
                })}
            </div>
        </>
    );
}

