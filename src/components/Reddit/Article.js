import React from 'react';
import './Articles.css'

export default function Article({article, link, subReddit}) {
    return (
        <div className="article">
            <a className="reddit" href={"https://reddit.com" + link} rel="noreferrer" target="_blank">
                <h2 className="reddit-title">{article} - <span className="subreddit">{subReddit}</span></h2>
            </a>
        </div>
    )
}
