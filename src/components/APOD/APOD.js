import React from 'react';
import './APOD.css'

export default function APOD({title, picture, description}) {
    return (
        <div className="apod">
            <h1 className="apod-title">{title}</h1>
            <img alt="" src={picture} className="apod-pic"></img>
            <p className="apod-descrip">{description}</p>
            <p className="apod-descrip">NASA Astronomy Picture of the Day</p>
        </div>
    )
}
