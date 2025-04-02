import { useState } from "react";

interface User {
    id:number;
    username:string;
    fullName:string;
}

export default function Komentarz(props: {id:number, body:string, postId:number, likes:number, user:User}) {
    const [likeCount, setLikeCount] = useState(props.likes);

    const handleLike = () => setLikeCount(likeCount + 1);
    const handleDislike = () => setLikeCount(likeCount - 1);

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "8px" }}>
          <h3>Użytkownik: {props.user.fullName} (@{props.user.username})</h3>
          <p><strong>Treść:</strong> {props.body}</p>
          <p><strong>Post ID:</strong> {props.postId}</p>
          <div>
            <button onClick={handleLike} style={{ marginRight: "10px" }}>👍</button>
            <button onClick={handleDislike}>👎</button>
            <span style={{ marginLeft: "10px" }}>Polubienia: {likeCount}</span>
          </div>
        </div>
      );
}