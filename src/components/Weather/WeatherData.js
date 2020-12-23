import React, {useState, useEffect} from "react";
import './WeatherData.css';
import Cloudy from '../../Assets/cloudy.jpg';
import Clear from '../../Assets/clearsky.jpg';
import Rain from '../../Assets/rain.jpg'
import Fog from '../../Assets/fog2.jpg';
import Snow from '../../Assets/snow3.jpg'

export default function WeatherData({
  name,
  weather,
  description,
  temperature,
  feelsLike,
}) {

const [style, setStyle] = useState();

useEffect(() => {
  if(weather === "Clouds") {
    setStyle({
      background: `url(${Cloudy}) no-repeat center center `,
      height: '100%',
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover"
    })
  } else if(weather === "Clear") {
    setStyle({
      background: `url(${Clear}) no-repeat top center `,
      height: '100%',
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover"
    })
  } else if(weather === 'Rain') {
    setStyle({
      background: `url(${Rain}) no-repeat top center`,
      height: '100%',
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover"
    })
  } else if(weather === "Fog") {
    setStyle({
      background: `url(${Fog}) no-repeat center center`,
      height: '100%',
      WebkitBackgroundSize: "100%",
      MozBackgroundSize: "100%",
      OBackgroundSize: "100%"
    })
  } else if(weather === "Snow") {
    setStyle({
      background: `url(${Snow}) no-repeat center 60%`,
      height: '100%',
      WebkitBackgroundSize: "100%",
      MozBackgroundSize: "100%",
      OBackgroundSize: "100%"
    })
  } else {
    setStyle({
      background: `url(${Clear}) no-repeat center center`,
      height: '100%',
      WebkitBackgroundSize: "100%",
      MozBackgroundSize: "100%",
      OBackgroundSize: "100%"
    })
  }

})



  return (
    <div className="weather" style={style}>
      <div className="weather-content">
        <h1>{name}</h1>
        <h4>{description}</h4>
        <h4>Temp: {temperature} &deg;F</h4>
        <h4>Feels Like: {feelsLike} &deg;F</h4>
      </div>
    </div>
  );
}
