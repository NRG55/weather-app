import './style.css';
import { getWeather } from './modules/getWeather';
import { createTodayInfoCard } from './modules/elements';
import { updateTodayInfoCard } from './modules/ui';

 const weatherData = await getWeather("Dublin");    
 
// async function run() {
//     const weatherData = await getWeather("Dublin");
     console.log(weatherData)
    createTodayInfoCard();
    
// }
updateTodayInfoCard(weatherData.city, weatherData.temperature)

// run()