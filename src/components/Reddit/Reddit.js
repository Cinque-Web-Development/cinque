import React, {useState, useEffect} from 'react';
import './Reddit.css';
import Article from './Article';

export default function Reddit() {
    const [articles, setArticle] = useState();
    const [links, setLinks] = useState('');
    const [subReddit, setSubReddit] = useState('')
   


    useEffect(() => {
        fetch(`https://www.reddit.com/r/webdev.json?&limit=10`)
        .then(res => {
            if(res.status !== 200) {
                console.log("Error")
                return;
            }
            res.json().then((response) => {
                response.data.children.map((item) => {
                    console.log(item.data)
                    setArticle(item.data.title)
                    setLinks(item.data.permalink)
                    setSubReddit(item.data.subreddit)
                })
            })
        })
    }, [])

    console.log(articles)
    console.log(links)
    console.log(subReddit)
    

    console.log(articles)
    return (
        <div> 
            <Article articles={articles} links={links} subReddit={subReddit} />      
        </div>
    )
}
