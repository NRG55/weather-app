import './style.css';
import { getWeather } from './modules/getWeather';
import { renderMainInfoCard } from './modules/elements';

const weatherData = getWeather("Dublin");

console.log(weatherData)

renderMainInfoCard();