import {useEffect, useState} from 'react'
import './App.css'
import type {Post} from "./model.ts";

export default function App() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    const response = await fetch('https://dummyjson.com/posts/search?q=love');
    const json = await response.json();
    setPosts(json.posts)
  }

  return (
      <>
        <div>
          {posts.map(p => {
                return <PostDetails post={p} />;
          })}
        </div>
      </>
  );
}


interface PostDetailsProps {
  post: Post
}

function PostDetails({post}: PostDetailsProps) {
  return (
      <div>
        <h1>{post.title}</h1>

        <p>body is:
          {post.body}
        </p>
      </div>
  )
}