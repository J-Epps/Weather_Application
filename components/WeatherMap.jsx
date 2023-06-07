import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const WeatherMap = ({ coordinates }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">Weather Map</h2>
      <div className="mt-4">
        <MapContainer center={coordinates} zoom={10} className="h-80">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data © OpenStreetMap contributors"
          />
          <Marker position={coordinates} />
        </MapContainer>
      </div>
    </div>
  );
};

export default WeatherMap;
