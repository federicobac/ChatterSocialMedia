import {useState} from "react";
import {useNavigate} from "react-router";

export function CreatePost() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const navigate = useNavigate();

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
        navigate("/");
    }

    return (
        <>

            <div>
                <h1>Create post</h1>
            </div>

            <div>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Enter Post Title"
                />
            </div>

            <div>
                <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder="Enter Post Body"
                />
            </div>

            <div>
            <button onClick={createPost}>
                Create Post
            </button>
            </div>
            
        </>
    )

}