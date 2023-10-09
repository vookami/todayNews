// 正确的导入顺序
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function News({ onBack }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get("/api/news");
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Failed to fetch news:", error.message);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="news-list">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      {articles.map((article, index) => (
        <div className="news-item" key={article.url}>
          <div className="news-header">
            <span className="news-number">{index + 1}.</span>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-title"
            >
              {article.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [showNews, setShowNews] = useState(false);

  return (
    <div className="app">
      {showNews ? (
        <News onBack={() => setShowNews(false)} />
      ) : (
        <button className="news-button" onClick={() => setShowNews(true)}>
          Today News
        </button>
      )}
    </div>
  );
}

export default App;
