export function updateTodayWeatherInfoCard(location, temperature, icon) {
    document.querySelector('#location').innerHTML = location;
    document.querySelector('#temperature').innerHTML = temperature;
    document.querySelector('#icon').src = 'images/drizzle.svg';
}