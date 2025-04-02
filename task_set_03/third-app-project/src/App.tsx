import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import './App.css';

interface Article {
  id: number;
  title: string;
  content: string;
}

export default function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/">Strona główna</Link> | <Link to="/blog">Blog</Link> | <Link to="/dodaj">Dodaj artykuł</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/dodaj" element={<AddArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Witamy na stronie głównej!</h1>
      <Link to="/blog">Przejdź do bloga</Link>
    </div>
  );
}

function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem("articles") || "[]");
    setArticles(savedArticles);
  }, []);

  return (
    <div className="blog-list">
      <h1>Blog</h1>
      {articles.length === 0 ? (
        <p>Brak artykułów.</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <Link to={`/article/${article.id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Article() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem("articles") || "[]");
    const foundArticle = savedArticles.find((a: Article) => a.id === parseInt(id || "", 10));
    setArticle(foundArticle);
  }, [id]);

  return (
    <div className="article">
      {article ? (
        <>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </>
      ) : (
        <p>Artykuł nie znaleziony.</p>
      )}
    </div>
  );
}

function AddArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!title || !content) {
      alert("Proszę wypełnić wszystkie pola.");
      return;
    }

    const savedArticles = JSON.parse(localStorage.getItem("articles") || "[]");
    const newArticle: Article = {
      id: savedArticles.length + 1,
      title,
      content,
    };

    localStorage.setItem("articles", JSON.stringify([...savedArticles, newArticle]));
    navigate("/blog");
  };

  return (
    <div>
      <h1>Dodaj artykuł</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <label>
          Tytuł:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Treść:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}
