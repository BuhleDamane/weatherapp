import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css"

export default function WeatherInfo(props){
    return(
        
        <div className="WeatherInfo">
             <FormattedDate  date={props.data.date}/>
            <h1>{props.data.city}</h1>
           <div className="row">
            <div className="col">
                <div className="clearFix">
                <div className="float-left">
                <WeatherIcon code={props.data.icon}/>
                </div>
            </div>
            <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature}/>
                </div>
            </div>
            <ul className="lol">
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className=" conditions">
            <ul>
                <li>
                    Humidity: {props.data.humidity}%
                </li>
                <li>
                wind: {Math.round(props.data.wind)} km/h

                </li>
            </ul>
            </div>
           </div>
        </div>
    );
}