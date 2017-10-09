import axios from 'axios';

const API_KEY = '537cd34b3347dd1c22ec05f6f0f98076';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);

  //console.log('Request:', request); redux-promise


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
