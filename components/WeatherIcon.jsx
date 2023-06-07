import React from "react";

const WeatherIcon = ({ iconUrl, altText }) => {
  return (
    <div className="flex items-center justify-center w-12 h-12">
      <img src={iconUrl} alt={altText} className="w-full h-full" />
    </div>
  );
};

export default WeatherIcon;
