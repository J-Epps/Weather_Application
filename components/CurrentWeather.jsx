import React from "react";

const CurrentWeather = ({ temperature, description, windSpeed, humidity }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">Current Weather</h2>
      <div className="flex items-center mt-4">
        <span className="text-3xl font-bold">{temperature}°C</span>
        <span className="text-gray-600 ml-2">{description}</span>
      </div>
      <div className="flex items-center mt-2">
        <span className="text-gray-600">Wind Speed: {windSpeed} km/h</span>
        <span className="text-gray-600 ml-4">Humidity: {humidity}%</span>
      </div>
    </div>
  );
};

export default CurrentWeather;
