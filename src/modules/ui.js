export const renderDailyWeather = (weather) => {
    const weekWeatherInfoContainer = document.querySelector('.week-weather-info-container');

    weather.weekForecast.map((element) => {       
        weekWeatherInfoContainer.innerHTML += `
        <div class="week-day-weather-row">
          <div class="week-day-name">${element.weekDay}</div>
          <div class="week-day-weather-image">
             <img
              class="week-day-weather-icon"
              src="images/weather-images-filled/${element.icon}.svg"
              alt=""
              />
          </div>    
          <div class="week-day-temperature">${element.maxTemperature}</div>
          <div class="week-night-temperature">${element.minTemperature}</div>                
        </div>`                 
    });

    weekWeatherInfoContainer.children[0].style.border = 'none';
}

export const renderTodayWeatherInfoCard = (weather) => {
    const todayWeatherInfoCard = document.querySelector('.today-info-card');
    
    const mainWeatherInfoDiv = document.createElement('div');
    mainWeatherInfoDiv.innerHTML = `
        <h3 class="location-name">${weather.location}</h3>
        <p class="today-temperature">${weather.temperature}</p>
        <img src="images/weather-images-filled/${weather.icon}.svg"> 
        <p class="today-conditions">${weather.conditions}</p>
       
    `; 
    
    const additionalWeatherInfoDiv = document.createElement('div');
    additionalWeatherInfoDiv.innerHTML = `
        <p id="humidity">Humidity:${weather.humidity}</p>
        <p id="wind">Wind:${weather.windSpeed}</p>
    `;
    
    const hourlyWeatherInfoContainer = document.createElement('div');
    hourlyWeatherInfoContainer.classList.add('hourly-weather-info-container');

    const sliderWrap = document.createElement('div');
    
    hourlyWeatherInfoContainer.innerHTML = renderSliderNavigationPanel();
    hourlyWeatherInfoContainer.appendChild(sliderWrap);

    sliderWrap.classList.add('slider-wrap');
    sliderWrap.innerHTML = renderSlider();   

    todayWeatherInfoCard.append(mainWeatherInfoDiv, additionalWeatherInfoDiv, hourlyWeatherInfoContainer);
    
    renderHourlyWeatherInfo(weather);

    return todayWeatherInfoCard;
}

const renderHourlyWeatherInfo = (weather) => {
    const sliderContent = document.querySelector('.slider-content');

    weather.hourlyForecast.map((hour) => {       
        sliderContent.innerHTML += `
        <div class="hourly-weather-column">
          <div class="hourly-weather-time">${hour.time}</div>
          <div class="hourly-weather-image">
             <img
              class="hourly-weather-image"
              src="images/weather-images-lined/${hour.icon}.svg"
              alt=""
              />
          </div>    
          <div class="hourly-weather-temperature">${hour.temperature}</div>               
        </div>`         
    });
}

const renderSlider = () => {
    return `        
        <div class="slider-content"></div>                
    `;
}

const renderSliderNavigationPanel = () => {
    return `
        <div class="nav-container">
            <button id="button-previous"></button>
            <div class="round-buttons-container">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <button id="button-next"></button>            
        </div> 
    `
}

