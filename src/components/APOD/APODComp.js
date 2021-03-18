import React from 'react';
import axios from 'axios'
import useSWR from 'swr'

import './APODComp.css';
import APOD from './APOD';

const API_KEY=process.env.REACT_APP_API_KEY
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&concept_tags=true`
const fetcher = url => axios.get(url).then(res => res.data)

export default function APODComp() {
    const { data, error } = useSWR(url, fetcher)

    return (
        <div className="apod-comp">
           { data && <APOD media={data.media_type} title={data.title} picture={data.url} description={data.explanation} /> }
        </div>
    )
}
