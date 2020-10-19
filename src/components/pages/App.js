import React, {useContext} from 'react';
import './App.css';
import {ThemeContext} from "../../api/ThemeContext";
import Navbar from "../fragments/Navbar";
import WeatherCard from "../fragments/WeatherCard";
import BottomTab from "../fragments/BottomTab";
import Wind from '../assets/img/icons8-air-48.png';
import Humid from '../assets/img/icons8-humidity-48.png';
import Temp from '../assets/img/icons8-thermometer-48.png';

const App = () => {

    const Theme = useContext(ThemeContext);

    return (
        <div className={"App"}>
            <header className="App-header">
                <Navbar/>
            </header>
            <main className="App-body">
                <WeatherCard/>
            </main>
            <footer className={"App-footer"}>
                <BottomTab icon={Wind} type={"wind"} />
                <BottomTab icon={Humid} type={"humidity"}  />
                <BottomTab icon={Temp} type={"tempMinMax"}/>
            </footer>
        </div>
    );
}
/*
* <a target="_blank" href="https://icons8.com/icons/set/air-element">Air icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
* */
export default App;