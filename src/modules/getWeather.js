export const getWeather = async (location) => {
    const apiKey = 'b87c3740ed6b4c5db6522324242508';
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`;

    const response = await fetch(url, { mode: 'cors'});
    const data = await response.json();

    return data;
}