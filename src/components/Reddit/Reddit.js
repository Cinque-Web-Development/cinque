import React, {useState, useEffect} from 'react';
import './Reddit.css';
import Article from './Article';
import Loader from '../Loader/Loader';

export default function Reddit() {
    const [articles, setArticle] = useState();
    
   


    useEffect(() => {
        fetch(`https://www.reddit.com/r/webdev.json?&limit=10`)
        .then(res => {
            if(res.status !== 200) {
                console.log("Error")
                return;
            }
        res.json().then((response) => {
            setArticle(response.data.children)
        })
        })
    }, [])

    console.log(articles)
    // console.log(links)
    // console.log(subReddit)

    const getArticles = articles ? articles.map((article) => 
        <Article  article={article.data.title} link={article.data.permalink} subReddit={article.data.subReddit} />      
    ) : <Loader />
    

   
    return (
        
          <div>
              {getArticles}
          </div>  
    )

}

