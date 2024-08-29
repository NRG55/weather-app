export function updateTodayWeatherInfoCard(location, temperature, icon) {
    document.querySelector('#location').innerHTML = location;
    document.querySelector('#temperature').innerHTML = temperature;
    document.querySelector('#icon').src = 'images/drizzle.svg';
}

const weather = [1, 2, 3, 4, 5, 6, 7]
export const renderDailyWeather = () => {
    const weekWeatherInfoContainer = document.querySelector('.week-weather-info-container');

    weather.map((day) => {       
        weekWeatherInfoContainer.innerHTML += `
        <div className="week-day-weather-row">
          <div className="week-day-name">${day}</div>
          <div className="week-day-temperature">dayTemperature</div>
          <div className="week-night-temperature">nightTemeperature</div>
          <div className="week-day-weather-image">Image
             <img
              className="week-day-weather-icon"
              src=""
              alt=""
              />
          </div>          
        </div>`         
    });
}
