import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";
import { Circles } from 'react-loader-spinner';
import { FaSearch } from 'react-icons/fa';
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [searchActive, setSearchActive] = useState(false);
    const timer = useRef(null); // Use useRef instead of useState for the timer

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }

    function search() {
        const apiKey = "9cb72bec958f8fb02391985ed7b219d2";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function handleSearchClick() {
        setSearchActive(true);
        resetTimer();
    }

    function resetTimer() {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setSearchActive(false);
        }, 15000);
    }

    useEffect(() => {
        if (searchActive) {
            resetTimer();
        }

        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, [searchActive]);

    if (weatherData.ready) {
        return (
            <div className="Weather">
                {!searchActive && (
                    <div className="search-icon" onClick={handleSearchClick}>
                        <FaSearch size="2x" />
                    </div>
                )}
                {searchActive && (
                    <form onSubmit={handleSubmit} onMouseMove={resetTimer}>
                        <div className="row">
                            <div className="col-9">
                                <input
                                    type="search"
                                    placeholder="Search for a City..."
                                    className="form-control input-search"
                                    autoFocus
                                    onChange={handleCityChange}
                                />
                            </div>
                            <div className="col-3">
                                <input type="submit" value="Search" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                )}
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates}/>
            </div>
        );
    } else {
        search();
        return (
            <div className="loader">
                <Circles
                    height="80"
                    width="80"
                    color="rgb(201, 37, 64)"
                    ariaLabel="circles-loading"
                    visible={true}
                />
            </div>
        );
    }
}
