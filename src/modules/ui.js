export function updateTodayInfoCard(location, temperature) {
    document.querySelector('#location').innerHTML = location;
    document.querySelector('#temperature').innerHTML = temperature;

}