import React from "react";
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon"
import axios from "axios";

export default function WeatherForecast(){
    function handleResponse(response){
        console.log(response.data);
    }
    let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
    let lat = 40.7;
    let lon = 74;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thu</div>
                <div className="WeatherForecast-icon"><WeatherIcon className="WeatherForecast-icon" code="01d" /></div>
                <div className="WeatherForecast-temperature">
                    <span className="WeatherTemperature-max">19</span>`
                    <span className="WeatherTemperature-min">11</span>
                </div>
            </div>
        </div>
    </div>
    );
}