import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./Button.css"; // Assume you have created Button.css for the new button styles

function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch news based on country
  const fetchNews = async (country) => {
    try {
      const response = await axios.get("/.netlify/functions/get-news", {
        params: { country },
      });
      setNews(response.data.articles);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setError(error.toString());
    }
  };

  // Fetch US news on component mount
  useEffect(() => {
    fetchNews("us");
  }, []);

  return (
    <div className="App">
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <ul>
          {news.map((item, index) => {
            // Split the title into main title and source note
            let [mainTitle, sourceNote] = item.title.split(/ - | -- | —— /);
            return (
              <li key={index}>
                <a href={item.url} className="title-link">
                  <span className="title">{mainTitle}</span>
                  {sourceNote && <span className="note"> - {sourceNote}</span>}
                </a>
              </li>
            );
          })}
        </ul>
      )}
      <div className="button-group">
        <button className="button button-jp" onClick={() => fetchNews("jp")}>
          Today JP
        </button>
        <button className="button button-cn" onClick={() => fetchNews("cn")}>
          Today CN
        </button>
        <button className="button button-us" onClick={() => fetchNews("us")}>
          Today US
        </button>
      </div>
    </div>
  );
}

export default App;
