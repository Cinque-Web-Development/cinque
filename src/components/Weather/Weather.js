import React, {useState, useEffect} from 'react'
import './Weather.css';
import WeatherData from './WeatherData';
import Loader from '../Loader/Loader';
const API_KEY=process.env.REACT_APP_WEATHER_API_KEY;

export default function Weather() {
  const [weather, setWeather] = useState();

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=lafayette&appid=${API_KEY}&units=imperial`,
    );
    const data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    getWeather();
  }, [])


  return (
    <>
      {weather ? (
        <div>
          <WeatherData 
           key={weather.id}
           img={weather.weather[0].icon}
           name={weather.name}
           weather={weather.weather[0].main}
           description={weather.weather[0].description}
           temperature={weather.main.temp}
           feelsLike={weather.main.feels_like}
          />
        </div>
      ): (
        <Loader />
      )}
    </>
  )
}
