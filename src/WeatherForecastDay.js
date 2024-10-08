import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    function maxTemperature (){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemperature (){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }
    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        return days[day];
    }
    return (
        <div className="WeatherForecast">
            <div className="WeatherForecast-day">{day()}</div>
                        <div className="WeatherForecast-icon"><WeatherIcon code={props.data.weather[0].icon}/></div>
                        <div className="WeatherForecast-temperature">
                            <span className="WeatherTemperature-max">{maxTemperature()}</span>
                            <span className="WeatherTemperature-min">{minTemperature()}</span>
                        </div>
                        </div>
    )
}