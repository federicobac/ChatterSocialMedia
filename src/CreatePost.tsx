import {useState} from "react";

export function CreatePost() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    async function createPost() {

        const response = await fetch(
            "https://dummyjson.com/posts/add",
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 1
                })
            }
        );

        const json = await response.json();

        console.log(json);

    }

    return (

        <div>
            <h1>Create post</h1>

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter Post Title"
            />

            <textarea
                value={body}
                onChange={e => setBody(e.target.value)}
                placeholder="Enter Post Body"
            />

            <button onClick={createPost}>
                Create Post
            </button>

        </div>

    )

}