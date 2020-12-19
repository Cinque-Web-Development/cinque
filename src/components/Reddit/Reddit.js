import React, {useState, useEffect} from 'react';
import './Reddit.css';
import axios from 'axios';
import Article from './Article';

export default function Reddit() {
    const [articles, setArticle] = useState({});
   


    useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
        .then(res => {
            if(res.status !== 200) {
                console.log("Error")
                return;
            }
            console.log(res.data.data.children)
            setArticle(res.data.data.children)
        })
    }, [])
    

    console.log(articles)
    return (
        <div>
           {articles.map((article, index) => 
               <Article key={index} article={article.data} />
           )}
        </div>
    )
}
