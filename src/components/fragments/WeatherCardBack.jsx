import React from 'react';
import '../assets/scss/WeatherCardBack.scss';

const WeatherCardBack = (props) => {
    return (
        <div className={"WeatherCardBack"}>
            <img src={props.icon} alt={props.name}/>
            <p>{props.name} {props.value}</p>
        </div>
    );
}

export default WeatherCardBack;