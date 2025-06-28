import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Lucknow",
    feelsLike: 28.37,
    temp: 29.92,
    tempMin: 29.92,
    tempMax : 29.92,
    humidity: 45,
    weather: "clear sky",

  });

  let updateInfo = (newinfo) =>{
    setWeatherInfo(newinfo);

  }


    return( 
    <div style={{textAlign:"center"}}>
        <h2>Weather-app</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>

    </div>
    );

}