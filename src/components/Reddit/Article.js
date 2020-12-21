import React from 'react';
import './Articles.css'

export default function Article({articles, links, subReddit}) {
    return (
        <div className="reddit-section">
            <a className="reddit" href={"https://reddit.com" + links} rel="noreferrer" target="_blank">
               <h3>{articles}</h3>
              <h5>{subReddit}</h5>
            </a>
        </div>
    )
}
