import React from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import OneMinGaming from "./components/OneMinGaming/OneMinGaming";
import Weather from "./components/Weather/Weather";
import APODComp from './components/APOD/APODComp';
import Reddit from './components/Reddit/Reddit';

export default function App() {
    return (
        <div>
            <NavBar />
            <div className="weather-news-section">
                <Weather />
                <News />
            </div>
            <APODComp />
            <div className="gaming-reddit">
                <OneMinGaming />
                <Reddit />
            </div>
        </div>
    )
}


