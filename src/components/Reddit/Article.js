import React from 'react';
import './Articles.css'

export default function Article({article, link, subReddit}) {
    return (
        <div className="reddit-section">
            <a className="reddit" href={"https://reddit.com" + link} rel="noreferrer" target="_blank">
               <h3>{article}</h3>
              <h5>{subReddit}</h5>
            </a>
        </div>
    )
}
