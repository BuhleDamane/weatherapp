import React, { useEffect } from "react";
import "./Date.css";

export default function FormattedDate(props) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    useEffect(() => {
        const formattedDateElement = document.querySelector(".formatted-date");

        // Slide down and become visible
        formattedDateElement.classList.add("visible");

        
        const fadeOutTimeout = setTimeout(() => {
            
            formattedDateElement.classList.add("fade-out");

            
            const removeElementTimeout = setTimeout(() => {
                formattedDateElement.style.display = "none";
            }, 1000); 

          
            return () => clearTimeout(removeElementTimeout);
        }, 90000); 

       
        return () => clearTimeout(fadeOutTimeout);
    }, []); 

    return (
        <div className="formatted-date">
            Updated on <span className="date"> {day} {hours}:{minutes}</span>
        </div>
    );
}
