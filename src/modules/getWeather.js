import { updateTodayInfoCard } from "./ui";

export const getWeather = async (location) => {
    const apiKey = 'ZFEZ9FB6LLYZUZ9DFDU7GJTMD';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

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
        location: data.resolvedAddress,
        temperature: data.currentConditions.temp,
        conditions: data.currentConditions.conditions,
        humidity: data.currentConditions.humidity,
        windSpeed: data.currentConditions.windspeed,
        icon: data.currentConditions.icon,
        hourelyForecast: data.days[0].hours.map(hour => ({
                            time: hour.datetime,
                            temperature: hour.temp,
                            icon: hour.icon
                        })),
        weekForecast: data.days.slice(1, 8).map(day => ({
                            weekDay: new Date(day.datetime).toLocaleDateString('en-US', {weekday: 'long'}),
                            maxTemperature: day.tempmax,
                            minTemperature: day.tempmin,                        
                            icon: day.icon
                        }))
        
    };
}