
import React, {useState, useEffect} from 'react';
import './APODComp.css';
import axios from 'axios'
import APOD from './APOD';

const API_KEY=process.env.REACT_APP_API_KEY
console.log(API_KEY)

export default function APODComp() {
    const [picture, setPicture] = useState()
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        const getAPOD = () => {
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&concept_tags=true`)
            .then(response => {
                setPicture(response.data.url)
                setDescription(response.data.explanation)
                setTitle(response.data.title)    
            })
        }
        getAPOD()
    }, [])


    return (
        <div className="apod-comp">
           <APOD title={title} picture={picture} description={description} />
        </div>
    )
}
