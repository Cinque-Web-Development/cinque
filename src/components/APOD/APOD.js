import React from 'react';
import './APOD.css'

export default function APOD({title, picture, description, media}) {
    
    
    return (
        <div className="apod">
            <h1 className="apod-title">{title}</h1>
            {media === 'video' ? <iframe className="apod-vid" title="APOD video" src={picture}></iframe> :
            <img alt="" src={picture} className="apod-pic"></img>
            }
            <p className="apod-descrip">{description}</p>
            <p className="apod-descrip">NASA Astronomy Picture of the Day</p>
        </div>
    )
}
