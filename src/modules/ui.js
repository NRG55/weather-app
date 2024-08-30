export function updateTodayWeatherInfoCard(location, temperature, icon) {
    document.querySelector('#location').innerHTML = location;
    document.querySelector('#temperature').innerHTML = temperature;
    document.querySelector('#icon').src = 'images/drizzle.svg';
}

export const renderDailyWeather = (weather) => {
    const weekWeatherInfoContainer = document.querySelector('.week-weather-info-container');

    weather.weekForecast.map((element) => {       
        weekWeatherInfoContainer.innerHTML += `
        <div class="week-day-weather-row">
          <div class="week-day-name">${element.weekDay}</div>
          <div class="week-day-temperature">${element.maxTemperature}</div>
          <div class="week-night-temperature">${element.minTemperature}</div>
          <div class="week-day-weather-image">${element.icon}
             <img
              class="week-day-weather-icon"
              src=""
              alt=""
              />
          </div>          
        </div>`         
    });
}
