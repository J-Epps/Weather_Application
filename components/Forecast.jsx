import React from "react";

const Forecast = ({ forecastData }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold mb-4">Weather Forecast</h2>
      {forecastData.map((data) => (
        <div key={data.id} className="flex items-center mb-2">
          <span className="text-gray-600 mr-4">{data.day}</span>
          <img src={data.iconUrl} alt={data.weather} className="w-8 h-8" />
          <span className="text-gray-600 ml-2">{data.temperature}°C</span>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
