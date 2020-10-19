import React, {useContext, useEffect, useRef, useState} from 'react';
import '../assets/scss/Navbar.scss';
import {Button, IconButton} from "@material-ui/core";
import {ThemeContext} from "../../api/ThemeContext";
import {Menu, Search} from "@material-ui/icons";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setWeather} from "../../api/action";

const Navbar = () => {
    const Theme = useContext(ThemeContext);
    const [query,setQuery] = useState("");
    const [{latitude,longitude},setLocation] = useState({
        latitude: 0,
        longitude: 0
    });
    const [searchIcon,setSearchIcon] = useState("#191919");
    const [isOpen,setOpen] = useState(true);

    const search = useRef();
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const getLocation = ()=>{
        setOpen(false);
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    const showPosition = (position) =>{
        setLocation({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        });
    }

    useEffect(()=>{
        if (latitude !== 0 && longitude !== 0){
            const url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+process.env.REACT_APP_ID+"&units=metric";
            axios
                .get(url)
                .then((res)=>{
                    setSearchIcon("green");
                    dispatch(setWeather(res.data));
                })
                .catch((err)=>{
                    setSearchIcon("red")
                })
                .then(()=>{
                });
        }
    },[latitude,longitude])

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+process.env.REACT_APP_ID+"&units=metric";
        axios
            .get(url)
            .then((res)=>{
                setSearchIcon("green");
                dispatch(setWeather(res.data));
            })
            .catch((err)=>{
                setSearchIcon("red")
            })
            .then(()=>{
            });
    };

    return (
        <nav className={"Navbar"}>
            <div className="Brand">
                <img src={require("../assets/img/icon.png")} alt="Brand logo"/>
            </div>
            <form onSubmit={handleSubmit} className="Navbar-search">
                <input placeholder={"Enter a city name"}
                       ref={search}
                       onChange={handleSearch}
                       value={query}  type="search"/>
                <button type={"submit"}>
                    <Search style={{color:searchIcon}} />
                </button>
            </form>
            <div className="Navbar-navigation">
                <IconButton
                    style={{color:Theme.button.color}}>
                    <Menu/>
                </IconButton>
            </div>
            {
                isOpen &&
                <div className="Navbar-popup">
                    <div className={"Popup-d1"}>
                        <p>Weather wants to know your location!</p>
                        <div className={"Popup-d2"}>
                            <Button onClick={()=>{ setOpen(false); search.current.focus()}} color={"primary"} variant={"outlined"}>
                                No
                            </Button>
                            <Button onClick={getLocation} color={"secondary"} variant={"contained"}>
                                Yes
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </nav>
    );
}

export default Navbar;