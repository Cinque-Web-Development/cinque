import React, { useEffect, useState } from "react";
import "./News.css";

import {fetchNews} from "../../services/news-api";

export default function News() {
  const [allNews, setAllNews] = useState([]);

  async function getNews() {
    const newsResults = await fetchNews();
    setAllNews(newsResults.data.articles.slice(0,5));
  }
  
  useEffect(() => {
    getNews();
  }, [])

    
    let newsComp = allNews.length ? (
      <div>
          {allNews.map(n => <a href={n.url} key={n.publishedAt}><h2>{n.title}</h2></a>)}
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
