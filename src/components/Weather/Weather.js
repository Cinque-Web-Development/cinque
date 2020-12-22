import React, {useState, useEffect} from 'react'
import './Weather.css';
import WeatherData from './WeatherData';
import Loader from '../Loader/Loader';
const API_KEY=process.env.REACT_APP_WEATHER_API_KEY;

export default function Weather() {
  const [weather, setWeather] = useState();
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null)
  const [error, setError] = useState('')

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`,
    );
    const data = await response.json();
    setWeather(data);
  };

  const getLocation = () => {
   window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      }, 
      (err) => setError("Error")
    )
  }

  useEffect(() => {
    getLocation()
    getWeather()
  }, [])



  return (
    <>
      {weather ? (
        <div>
          <WeatherData 
           key={weather.id}
           name={weather.name}
           weather={weather.weather[0].main}
           description={weather.weather[0].description}
           temperature={weather.main.temp}
           feelsLike={weather.main.feels_like}
          />
        </div>
      ): (
        <Loader message="Allow location services before application can proceed"/>
      )}
    </>
  )
}
