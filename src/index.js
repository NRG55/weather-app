import './style.css';
import { getWeather } from './modules/getWeather';
import { createTodayWeatherInfoCard } from './modules/elements';
import { updateTodayWeatherInfoCard } from './modules/ui';
const weatherData = await getWeather("Dublin");    
 console.log(weatherData)
// // async function run() {
// //     const weatherData = await getWeather("Dublin");
//     console.log(weatherData)
    createTodayWeatherInfoCard();
    
// // }
updateTodayWeatherInfoCard(weatherData.location, weatherData.temperature, weatherData.icon)

// run()