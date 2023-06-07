import React from "react";
import { Line } from "react-chartjs-2";

const TemperatureChart = ({ chartData }) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 40
      }
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">Temperature Chart</h2>
      <div className="mt-4">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TemperatureChart;
