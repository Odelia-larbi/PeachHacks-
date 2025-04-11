// src/components/WeatherWidget.tsx
import React, { useEffect, useState } from 'react';

const WeatherWidget: React.FC = () => {
  const [weatherData, setWeatherData] = useState({
    city: 'New York',
    description: 'Sunny',
    temperature: 25,
  });

  // This is where you would fetch real weather data using an API like OpenWeatherMap
  useEffect(() => {
    // Placeholder function for fetching weather data (here, we're using fake data)
    const getFakeWeather = () => {
      setWeatherData({
        city: 'New York',
        description: 'Sunny',
        temperature: 25,
      });
    };

    // Fetch the weather data
    getFakeWeather();
  }, []);

  return (
    <div className="weather-widget">
      <p className="weather-title">Current Weather</p>
      <p className="weather-info">
        <strong>{weatherData.city}</strong>
        <br />
        {weatherData.description}
        <br />
        {weatherData.temperature}°C
      </p>
    </div>
  );
};

export default WeatherWidget;
