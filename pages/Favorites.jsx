import React from "react";
import { Header, WeatherCard, Loader, Footer } from "../components";

const FavoritesPage = () => {
  const favorites = []; // Replace with your favorites data

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Favorites</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.length > 0 ? (
            favorites.map((favorite) => (
              <WeatherCard key={favorite.id} data={favorite} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FavoritesPage;
