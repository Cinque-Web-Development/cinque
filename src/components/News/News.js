import React, { useEffect, useState } from "react";
import "./News.css";

import {fetchNews} from "../../services/news-api";

export default function News() {
  const [news, setNews] = useState([]);

  async function getNews() {
    const newsResults = await fetchNews();
    setNews(newsResults.data.articles);
  }
  
  useEffect(() => {
    getNews();
    console.log(news);
  }, [])

    
    let newsComp = news.length ? (
      <div>
          News component
      </div>
    ) : (
      <>
      <h1>Loading</h1>
      </>
    )
      

    return (
      newsComp
    )
}
