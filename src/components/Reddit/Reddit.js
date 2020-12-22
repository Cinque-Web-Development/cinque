import React, {useState, useEffect} from 'react';
import './Reddit.css';
import Article from './Article';
import Loader from '../Loader/Loader';

export default function Reddit() {
    const [articles, setArticle] = useState();
    const [subReddits, setSubReddits] = useState("webdev")
    
   


    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subReddits}.json?&limit=7`)
        .then(res => {
            if(res.status !== 200) {
                console.log("Error")
                return;
            }
        res.json().then((response) => {
            setArticle(response.data.children)
        })
        })
    }, [subReddits])

    

    const getArticles = articles ? articles.map((article) => 
        <Article  article={article.data.title} link={article.data.permalink} subReddit={article.data.subReddit} />      
    ) : <Loader />
    

    const handleChange = (e) => {
        setSubReddits(e.target.value)
    }

  
   
    return (
        
          <div className="reddit-section">
              <h1 className="reddit-logo"><i className="reddit-logo fab fa-reddit-alien fa-2x"></i>Subreddits</h1>
              <form >
            <select 
            onChange={handleChange}
            name="dropdown"
            style={{display: "block"}}
            value={subReddits}
            className="doprdown-form"
            >
            <option value=""></option>
            <option value="webdev">Web Dev</option>
            <option value="reactjs">React JS</option>
            <option value="softwareengineering">Software Engineering</option>
            <option value="javascript">JavaScript</option>
            <option value="technology">Technology</option>
           
            </select>
              </form>
              {getArticles}
          </div>  
    )

}

