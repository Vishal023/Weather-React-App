import React from 'react';
import '../assets/scss/BottomTab.scss';
import {useSelector} from "react-redux";

const BottomTab = (props) => {
    const {weatherData} = useSelector(state => state.WeatherReducer);
    const getCurrTab = (props) => {
        switch (props.type){
            case "tempMinMax":
                return (
                    <>
                        <p>Min: {weatherData && weatherData.main.temp_max}</p>
                        <p>Max: {weatherData && weatherData.main.temp_min}</p>
                    </>
                )
            case "wind":
                return (
                    <>
                        <p>Speed: {weatherData && weatherData.wind.speed}</p>
                        <p>Degree: {weatherData && weatherData.wind.deg}</p>
                    </>
                )
            case "humidity":
                return (
                    <>
                        <p>{weatherData && weatherData.main.humidity}% Humid</p>
                    </>
                )
        }
    }
    return (
        <div className={`BottomTab ${props.className && props.className}`}>
            <img src={props.icon} alt="weather-icons"/>
            {
                getCurrTab(props)
            }
        </div>
    );
}

export default BottomTab;