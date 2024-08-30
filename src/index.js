import './style.css';
import { getWeather } from './modules/getWeather';
import { renderDailyWeather } from './modules/ui';
import { renderTodayWeatherInfoCard } from './modules/ui';
const weatherData = await getWeather("Dublin");    
 console.log(weatherData)
// // async function run() {
// //     const weatherData = await getWeather("Dublin");
// //     console.log(weatherData)
//     createTodayWeatherInfoCard();
    
// // }
// updateTodayWeatherInfoCard(weatherData.location, weatherData.temperature, weatherData.icon)
renderTodayWeatherInfoCard(weatherData)
// run()
renderDailyWeather(weatherData)
// const weekWeatherInfoContainer = document.querySelector('.week-weather-info-container')
// console.log(renderDailyWeather())
// weekWeatherInfoContainer.append(renderDailyWeather())