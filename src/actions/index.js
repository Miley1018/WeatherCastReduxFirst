import axios from 'axios';
const API_KEY='3dc4576c0d384b1c8b0bf075dedbd549';
const ROOT_URL=`//api.openweathermap.org/data/2.5/forecast?&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return{
        type:FETCH_WEATHER,
        payload:request// return promise as the payload.then promise resolved, then pass data as new action to reducers
    }
}