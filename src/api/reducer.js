import {combineReducers} from "redux";

export const initState = {
    weatherData: null
};

export const WeatherReducer = (state=initState,action) => {
    switch (action.type){
        case "SET_WEATHER_DATA":
            return {
                ...state,
                weatherData:action.payload
            };
        default:
            return state;
    }
};

const reducer = combineReducers({
    WeatherReducer
});

export default reducer;