import './style.css';
import { getWeather } from './modules/getWeather';

const weatherData = getWeather("Dublin");

console.log(weatherData)