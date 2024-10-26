import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherSummary = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/weather?locations=${location}'); // Adjust the URL as needed
                setWeatherData(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching weather data');
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Daily Weather Summary</h1>
            <ul>
                {weatherData.map((data) => (
                    <li key={data.id}>
                        <strong>{data.location}:</strong> Temp: {data.temperature.toFixed(2)}°C, Condition: {data.condition}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherSummary;