import React from 'react';
import './APOD.css'

export default function APOD({title, picture, description}) {
    return (
        <div>
            <h2>{title}</h2>
            <img alt="" src={picture}></img>
            <p>{description}</p>
        </div>
    )
}
