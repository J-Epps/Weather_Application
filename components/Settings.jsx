import React, { useState } from "react";

const Settings = () => {
  const [unit, setUnit] = useState("celsius");

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">Settings</h2>
      <div className="mt-4">
        <label htmlFor="unitSelect" className="text-gray-700">
          Unit:
        </label>
        <select
          id="unitSelect"
          className="block mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={unit}
          onChange={handleUnitChange}
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
