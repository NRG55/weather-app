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
const hourlyWeatherColumns = document.querySelectorAll(".hourly-weather-column");
const buttonNext = document.getElementById("button-next");
const buttonPrevious = document.getElementById("button-previous");
const roundButtons = document.querySelectorAll(".round-buttons-container > button");
const sliderContent = document.querySelector(".slider-content");

let currentIndex = 0;

const slide = (index) => {   
    if (index < 0) {
        index = hourlyWeatherColumns.length -1;        
    };

    if (index >= hourlyWeatherColumns.length) {
        index = 0;        
    };     
   
    console.log(`translateX(-${(index / hourlyWeatherColumns.length) * 100}%)`)
    sliderContent.style.transform = `translateX(-${(index / hourlyWeatherColumns.length) * 100}%)`;
    currentIndex = index;   
};

buttonNext.onclick = () => { 
    console.log("click!")    
    slide(currentIndex + 1);
};

buttonPrevious.onclick = () => {   
    slide(currentIndex - 1);
};

roundButtons.forEach((button, index) => {   
    button.addEventListener("click", () => {      
        slide(index);
    });
});

roundButtons[0].classList.add("active");
