import React from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import OneMinGaming from "./components/OneMinGaming/OneMinGaming";
import Weather from "./components/Weather/Weather";

export default function App() {
    return (
        <div>
            <NavBar />
            <News />
            <OneMinGaming />
            <Weather />
        </div>
    )
}


