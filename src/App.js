import React from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import OneMinGaming from "./components/OneMinGaming/OneMinGaming";
import Weather from "./components/Weather/Weather";
import APODComp from './components/APOD/APODComp';
import Reddit from './components/Reddit/Reddit';
import Sports from "./components/Sports/Sports";
import Footer from './components/Footer/Footer';

export default function App() {
    return (
        <div>
            <NavBar />
            <Sports />
            <div className="weather-news-section">
                <Weather />
                <News />
            </div>
            <APODComp />
            <div className="gaming-reddit">
                <OneMinGaming />
                <Reddit />
            </div>
            <Footer />
        </div>
    )
}


