import React, { useState, useEffect } from 'react';

const WeatherAPI = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    useEffect(() => {
        if (city) {
            const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => setWeather(data));
            
        }
    }, [city])

    return ( 
        <div>
            <input type="text" value={city} onChange={handleCityChange} placeholder='Enter city name'/>
            {weather && <div>{JSON.stringify(weather)}</div>}
        </div>
     );
}
 
export default WeatherAPI;