import React, {useState, useEffect} from 'react'
import WeatherData from './WeatherData';
import Loader from '../Loader/Loader';
const API_KEY=process.env.REACT_APP_WEATHER_API_KEY;

export default function Weather() {
  const [weather, setWeather] = useState({cod: "400"});
  const [lat, setLat] = useState(40.7128);
  const [lon, setLon] = useState(-74.0060)

 
  
  useEffect(() => {
    const getLocation = () => {
      window.navigator.geolocation.getCurrentPosition(
         (position) => {
           setLat(position.coords.latitude)
           setLon(position.coords.longitude)
         }, 
         () => console.log("Error")
       )
     }
     getLocation()
  }, [])

  useEffect(() => {
   if(lat) {
    const getWeather = async () => {
     const response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`,
     )
      .then(res => res.json())
     setWeather(response);
   };
    getWeather()
   } 
  }, [lat, lon])



  return (
    <>
      {weather.cod !== "400" ? (
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
