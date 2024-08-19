import React from "react";
import "./Weather.css";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
   
    function mapIconToState(icon) {
        switch (icon) {
            case "01d":
                return "sunny";
            case "01n":
                return "clear-night";
            case "02d":
            case "02n":
                return "partlycloudy";
            case "03d":
            case "03n":
                return "cloudy";
            case "04d":
            case "04n":
                return "cloudy"; 
            case "09d":
            case "09n":
                return "rainy";
            case "10d":
            case "10n":
                return "pouring";
            case "11d":
            case "11n":
                return "lightning";
            case "13d":
            case "13n":
                return "snowy";
            case "50d":
            case "50n":
                return "fog";
            default:
                return "sunny"; 
        }
    }


    const weatherState = mapIconToState(props.code);

    return (
        <div className="WeatherIcon">
            <WeatherSvg state={weatherState} width={65} height={65} />
        </div>
    );
}
