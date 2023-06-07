import React from "react";
import { Header, WeatherCard, Forecast, Footer } from "../components";

const DetailsPage = () => {
  const weatherData = {}; // Replace with your weather data

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {weatherData ? (
          <div>
            <WeatherCard data={weatherData} />
            <Forecast data={weatherData.forecast} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DetailsPage;
