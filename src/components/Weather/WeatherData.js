import React from "react";
import './WeatherData.css';

export default function WeatherData({
  img,
  name,
  weather,
  description,
  temperature,
  feelsLike,
}) {
  return (
    <div>
      <div className="weather-data">
        <h1>{name}</h1>
        <img alt="" src={img}></img>
      </div>
      <div>
        <h4>{weather}</h4>
        <h4>{description}</h4>
        <h4>Temp: {temperature} &deg;F</h4>
        <h4>Feels Like: {feelsLike} &deg;F</h4>
      </div>
    </div>
  );
}
