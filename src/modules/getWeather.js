import { renderDailyWeather } from './ui';
import { renderTodayWeatherInfoCard } from "./ui";

export const getWeather = async (location) => {
    const apiKey = 'ZFEZ9FB6LLYZUZ9DFDU7GJTMD';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}`;

    try {
    const response = await fetch(url, { mode: 'cors'});    
    const data = weatherDataMapper(await response.json()); 
   
    
    renderTodayWeatherInfoCard(data);
    renderDailyWeather(data);
    console.log(data);

    
    return data;

    } catch (error) {
        console.error('Fetch weather API is failed', error);
    };
}

function weatherDataMapper(data) {
    console.log(data)
    return {
        location: data.resolvedAddress.split(",")[0],
        temperature: String(data.currentConditions.temp).split(".")[0],
        conditions: data.currentConditions.conditions,
        humidity: data.currentConditions.humidity,
        windSpeed: data.currentConditions.windspeed,
        icon: data.currentConditions.icon,
        hourlyForecast: data.days[0].hours.map(hour => ({
                            time: hour.datetime.slice(0, 2),
                            temperature: String(hour.temp).split(".")[0],
                            icon: hour.icon
                        })),
        weekForecast: data.days.slice(1, 8).map(day => ({
                            weekDay: new Date(day.datetime).toLocaleDateString('en-US', {weekday: 'long'}),
                            maxTemperature: String(day.tempmax).split(".")[0],
                            minTemperature: String(day.tempmin).split(".")[0],                        
                            icon: day.icon
                        }))
        
    };
}