import React from "react";

const WeatherCard = ({ city, temperature, description }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">{city}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="flex items-center mt-2">
        <span className="text-3xl font-bold">{temperature}°C</span>
      </div>
    </div>
  );
};

export default WeatherCard;
