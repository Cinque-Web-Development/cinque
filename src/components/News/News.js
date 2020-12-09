import React, { useEffect, useState } from "react";
import "./News.css";

import {fetchNews} from "../../services/news-api";

export default function News() {
  const [allNews, setAllNews] = useState([]);
  const [displayNews, setDisplayNews] = useState([])

  async function getNews() {
    const newsResults = await fetchNews();
    setAllNews(newsResults.data.articles);
    setDisplayNews(allNews.slice(0,4));
  }
  
  useEffect(() => {
    getNews();
  }, [])

    
    let newsComp = displayNews.length ? (
      <div>
          {displayNews.map(n => <a href={n.url} key={n.publishedAt}><h2>{n.title}</h2></a>)}
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
