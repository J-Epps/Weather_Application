import React from "react";
import { LocationList, Searchbar, Header, Footer } from "../components";

const LocationsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Locations</h1>
          <Searchbar />
          <LocationList />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocationsPage;
