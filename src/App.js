import React from 'react'

import News from "./components/News/News";
import OneMinGaming from "./components/OneMinGaming/OneMinGaming";
import Weather from "./components/Weather/Weather";
import APODComp from './components/APOD/APODComp';

export default function App() {
    return (
        <div>
            <News />
            <OneMinGaming />
            <Weather />
            <APODComp />
        </div>
    )
}


