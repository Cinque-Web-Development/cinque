import React from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import OneMinGaming from "./components/OneMinGaming/OneMinGaming";
import Weather from "./components/Weather/Weather";
import APODComp from './components/APOD/APODComp';

export default function App() {
    return (
        <div>
            <NavBar />
            <Weather />
            <News />
            <OneMinGaming />
            <APODComp />
        </div>
    )
}


