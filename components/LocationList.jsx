import React from "react";

const LocationList = ({ locations }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">Locations</h2>
      <ul className="mt-4 space-y-2">
        {locations.map((location, index) => (
          <li key={index} className="text-gray-700">
            {location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
