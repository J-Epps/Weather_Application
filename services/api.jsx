import axios from "axios";

const BASE_URL = "https://api.example.com"; // Replace with your API endpoint

// Function to fetch weather data for a specific location
export const fetchWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?location=${location}`
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

// Function to fetch location information based on coordinates
export const fetchLocation = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/location?lat=${latitude}&lng=${longitude}`
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching location:", error);
    throw error;
  }
};
