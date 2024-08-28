export const createTodayInfoCard = () => {
    const todayInfoCard = document.querySelector('.today-info-card');
    
    return todayInfoCard.innerHTML = `
        <h3 id="location"></h3>
        <p id="temperature"></p>
        <p id="feelsLike">Feels like:</p>
        <p id="humidity">Humidity:</p>
        <p id="wind">Wind:</p>
    `;   
}

