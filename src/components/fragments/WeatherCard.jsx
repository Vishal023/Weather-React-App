import React, {useState} from 'react';
import '../assets/scss/WeatherCard.scss';
import {useSelector} from "react-redux";
import {Visibility} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import Feel from '../assets/img/icons8-weather-50.png';
import Ground from '../assets/img/icons8-soil-48.png';
import Sea from '../assets/img/icons8-sea-waves-48.png';
import Pressure from '../assets/img/icons8-pressure-48.png';
import Sunrise from '../assets/img/icons8-sunrise-50.png';
import Sunset from '../assets/img/icons8-sunset-48.png';
import WeatherCardBack from "./WeatherCardBack";

const WeatherCard = () => {

    let date = new Date();
    let today = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    const {weatherData} = useSelector(state => state.WeatherReducer);
    const icon = weatherData && weatherData.weather[0].icon;
    const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    const [isHovered,setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!isHovered);
    };

    const hoverStyle = {
        transition: "3s",
        transform: "rotateY(180deg)",
        opacity:0
    };
    const hoverStyleBack = {
        transition: "1s",
        transitionDelay:"2s",
        transform: "rotateY(360deg)",
        opacity: 1,
    };


    return (
        <div className={"WeatherCard"}>
            {
                weatherData &&
                <React.Fragment>
                    <IconButton className={"WeatherCard-knowMore"} style={{width:"fit-content",float:"right"}} onClick={handleHover}>
                        <Visibility />
                    </IconButton>
                    <div style={isHovered ? hoverStyle : null}  className="WeatherCard-frontFlip">
                        <div className="WeatherCard-city">
                            <h3>{weatherData && weatherData.name}</h3>
                            <h6>{today}</h6>
                        </div>
                        <div className="WeatherCard-temp">
                            <h3>{weatherData && (weatherData.main.temp.toFixed(1))}<sup>&#8451;</sup></h3>
                            <span>------------------</span>
                            <h6>{weatherData && weatherData.weather[0].description}</h6>
                        </div>
                        <div className="WeatherCard-icon">
                            <img src={weatherData && imgUrl} alt=""/>
                        </div>
                    </div>
                    <div style={isHovered ? hoverStyleBack : null   } className="WeatherCard-backFlip">
                        <WeatherCardBack icon={Feel} name={"Feels Like"} value={weatherData.main.feels_like} />

                        {weatherData.main.grnd_level &&
                        <WeatherCardBack icon={Ground} name={"Ground"} value={weatherData.main.grnd_level}/>}
                        {weatherData.main.sea_level &&
                        <WeatherCardBack icon={Sea} name={"Sea"} value={weatherData.main.sea_level}/>}

                        <WeatherCardBack icon={Pressure} name={"Pressure"} value={weatherData.main.pressure} />
                        <WeatherCardBack icon={Sunrise} name={"Sunrise"} value={weatherData.sys.sunrise} />
                        <WeatherCardBack icon={Sunset} name={"Sunset"} value={weatherData.sys.sunset} />
                    </div>
                </React.Fragment>
            }

        </div>
    );
}

export default WeatherCard;