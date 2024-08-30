export const renderDailyWeather = (weather) => {
    const weekWeatherInfoContainer = document.querySelector('.week-weather-info-container');

    weather.weekForecast.map((element) => {       
        weekWeatherInfoContainer.innerHTML += `
        <div class="week-day-weather-row">
          <div class="week-day-name">${element.weekDay}</div>
          <div class="week-day-weather-image">${element.icon}
             <img
              class="week-day-weather-icon"
              src=""
              alt=""
              />
          </div>    
          <div class="week-day-temperature">${element.maxTemperature}</div>
          <div class="week-night-temperature">${element.minTemperature}</div>
                
        </div>`         
    });
}

export const renderTodayWeatherInfoCard = (weather) => {
    const todayWeatherInfoCard = document.querySelector('.today-info-card');
    
    const mainWeatherInfoDiv = document.createElement('div');
    mainWeatherInfoDiv.innerHTML = `
        <h3 class="location-name">${weather.location}</h3>
        <p class="today-temperature">${weather.temperature}</p>
        <img src="images/drizzle.svg" id="today-weather-icon" alt="today-weather-icon"> 
        <p class="today-conditions">${weather.conditions}</p>
       
    `; 
    
    const additionalWeatherInfoDiv = document.createElement('div');
    additionalWeatherInfoDiv.innerHTML = `
        <p id="humidity">Humidity:${weather.humidity}</p>
        <p id="wind">Wind:${weather.windSpeed}</p>
    `;

    const hourlyWeatherInfoDiv = document.createElement('div');
    hourlyWeatherInfoDiv.classList.add('hourly-weather-info-container');
    // hourlyWeatherInfoDiv.innerHTML = "HOURLY INFO DIV"

    todayWeatherInfoCard.append(mainWeatherInfoDiv, additionalWeatherInfoDiv, hourlyWeatherInfoDiv);
    
    renderHourlyWeatherInfo(weather);

    return todayWeatherInfoCard;
}

const renderHourlyWeatherInfo = (weather) => {
    const hourlyWeatherInfoContainer = document.querySelector('.hourly-weather-info-container');

    weather.hourlyForecast.map((hour) => {       
        hourlyWeatherInfoContainer.innerHTML += `
        <div class="hourly-weather-column">
          <div class="hourly-weather-time">${hour.time}</div>
          <div class="hourly-weather-image">${hour.icon}
             <img
              class="hourly-weather-image"
              src=""
              alt=""
              />
          </div>    
          <div class="hourly-weather-temperature">${hour.temperature}</div>               
        </div>`         
    });
}
