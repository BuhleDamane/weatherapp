import React, {useState} from "react";
import axios from "axios";
import './Weather.css'
import WeatherInfo from "./WeatherInfo";
import { Circles } from 'react-loader-spinner'



export default function Weather(props){
    const [city, setCity] = useState (props.defaultCity);
    const [weatherData, setWeatherData] = useState ({ready: false});
    function handleResponse(response){
        console.log(response.data)

        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.temp,
            city: response.data.name

        });
    }
 function search(){
    const apiKey = "9cb72bec958f8fb02391985ed7b219d2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   
 }
function handleSubmit(event){
    event.preventDefault();
    search(city);
}
function handleCityChange(event){
setCity(event.target.value);

}
    if(weatherData.ready){
       return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-9">
        <input type="Search" placeholder="Search for a City..." 
        className="form-control input-search" 
        autoFocus="on"  
        onChange={handleCityChange}
        />
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className=" btn btn-primary" />
        </div>
        </div>
        <WeatherInfo data={weatherData}/>
     </form>
            
            </div>
        );

    } else{
        search()
       return(
 <div className="loader">     
        
  <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  </div>  
       );
    }
    
}