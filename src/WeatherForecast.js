import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect (() =>{
        setLoaded(false);
    }, [props.coordinates]);


    function handleResponse(response){
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true)
        
    }


    if(loaded){
        return (
            <div>
                <div className="row weather">
                    {forecast.map(function (dailyForecast, index){
                        if (index < 6){
                            return(
                                <div className="col-2" key={index}>
                            <WeatherForecastDay data={dailyForecast}/>
                        </div>
                            )
                        }else{
                            return null;
                        }
                    }
                  
                )}
                  
                </div>
            </div>
            );
     
    } else{
        let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        
        return null;
}
}