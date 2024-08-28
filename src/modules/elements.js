export const createTodayWeatherInfoCard = () => {
    const todayWeatherInfoCard = document.querySelector('.today-info-card');
    
    const mainWeatherInfoDiv = document.createElement('div');
    mainWeatherInfoDiv.innerHTML = `
        <h3 id="location"></h3>
        <p id="temperature"></p>
        <img id="icon" alt="weather-icon"> 
        <p id="feelsLike">Feels like:</p>
       
    `; 
    
    const additionalWeatherInfoDiv = document.createElement('div');
    additionalWeatherInfoDiv.innerHTML = `
        <p id="humidity">Humidity:</p>
        <p id="wind">Wind:</p>
    `;

    todayWeatherInfoCard.append(mainWeatherInfoDiv, additionalWeatherInfoDiv);

    return todayWeatherInfoCard;
}

