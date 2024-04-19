import { useState, useEffect } from 'react';

const WeathAPI = () => {
    const [data, setData] = useState([]);
    const accessToken = 'enter API key here'
    const location = 'London' // Change this later so that it can retrieve the data from the entered location

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${accessToken}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({ location })
            });
            const jsonResult = await result.json();

            setData(jsonResult);
        }

        fetchData();
    }, [])


    return ( 
        <div>
            Test
        </div>
    );
}
 
export default WeathAPI;