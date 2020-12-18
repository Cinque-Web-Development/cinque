import React, { useEffect, useState } from "react";
import "./News.css";

import {fetchNews} from "../../services/news-api";
import Loader from "../Loader/Loader";

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
      <div className="NewsComp">
        <h1>Top U.S. Stories</h1>
          {allNews.map(n => 
            <a href={n.url} key={n.publishedAt} className="news-link"><h2>{n.title}</h2></a>
          )}
      </div>
    ) : (
      <>
        <Loader />
      </>
    )
      

    return (
      <div className="news-section">
        {newsComp}
      </div>
    )
}
