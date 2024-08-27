

export const renderMainInfoCard = () => {
    const mainInfoCard = document.querySelector('.main-info-card');

    mainInfoCard.innerHTML = `
        <h3 id="cityName">City:</h3>
        <p id="temperature">Temperature:</p>
        <p id="feelsLike">Feels like:</p>
        <p id="humidity">Humiditu:</p>
        <p id="wind">Wind:</p>
    `;   
}