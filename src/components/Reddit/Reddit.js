import React, {useState, useEffect} from 'react';
import './Reddit.css';
import Article from './Article';
import Loader from '../Loader/Loader';

export default function Reddit() {
    const [articles, setArticle] = useState();
    const [subReddits, setSubReddits] = useState("webdev")
    
   


    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subReddits}.json?&limit=10`)
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
        
          <div>
              <form>
            <select 
            onChange={handleChange}
            name="dropdown"
            style={{display: "block"}}
            value={subReddits}
            >
            <option value=""></option>
            <option value="webdev">Web Dev</option>
            <option value="reactjs">React JS</option>
            <option value="software">Software</option>
            </select>
              </form>
              {getArticles}
          </div>  
    )

}

