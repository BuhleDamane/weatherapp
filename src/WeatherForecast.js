import React from "react";
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon"

export default function WeatherForecast(){
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