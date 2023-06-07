import React from "react";
import {
  WeatherCard,
  Searchbar,
  Forecast,
  Header,
  Footer
} from "../components";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <Searchbar />
          <WeatherCard />
          <Forecast />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
