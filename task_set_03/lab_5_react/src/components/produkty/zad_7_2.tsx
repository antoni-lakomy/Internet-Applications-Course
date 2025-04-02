import { useState, useEffect } from "react";
import Komentarz from "./zad_7_1.tsx";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export default function Komentarze() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setComments(data.comments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Błąd pobierania danych:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Ładowanie komentarzy...</p>;
  }

  return (
    <div>
      <h1>Komentarze</h1>
      {comments.map((comment) => (
        <Komentarz
          key={comment.id}
          id={comment.id}
          body={comment.body}
          postId={comment.postId}
          likes={comment.likes}
          user={{
            id: comment.user.id,
            username: comment.user.username,
            fullName: comment.user.fullName, 
          }}
        />
      ))}
    </div>
  );
}
