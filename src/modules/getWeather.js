import { updateTodayInfoCard } from "./ui";

export const getWeather = async (location) => {
    const apiKey = 'b87c3740ed6b4c5db6522324242508';
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`;

    try {
    const response = await fetch(url, { mode: 'cors'});
    
    const data = weatherDataMapper(await response.json());    
    
    console.log(data)
    return data;

    } catch (error) {
        console.error('Fetch weather API is failed', error);
    };
}

function weatherDataMapper(data) {
    console.log(data)
    return {
        city: data.location.name,
        temperature: data.current.temp_c,

    }

}