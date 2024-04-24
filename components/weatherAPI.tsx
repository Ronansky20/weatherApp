// WeatherAPI.tsx
import React, { useState } from 'react';

const WeatherAPI = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (city) {
            const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
            fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}&key=${apiKey}`)
                .then(response => response.json())
                .then(data => setWeather(data));
        }
    };

    return { weather, handleCityChange, handleSubmit };
}

export default WeatherAPI;