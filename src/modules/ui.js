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
        <p id="feelsLike">Feels like:</p>
       
    `; 
    
    const additionalWeatherInfoDiv = document.createElement('div');
    additionalWeatherInfoDiv.innerHTML = `
        <p id="humidity">Humidity:${weather.humidity}</p>
        <p id="wind">Wind:${weather.windSpeed}</p>
    `;

    todayWeatherInfoCard.append(mainWeatherInfoDiv, additionalWeatherInfoDiv);

    return todayWeatherInfoCard;
}
