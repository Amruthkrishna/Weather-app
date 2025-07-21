// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

dotenv.config();
const app = express();
const PORT = 3000;

// Enable CORS so your frontend can talk to the backend
app.use(cors());

// Serve frontend files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Endpoint to call OpenWeatherMap securely
app.get("/weather", async (req, res) => {
  const { city } = req.query;

  try {
    const apiKey = process.env.API_KEY;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(weatherUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// Start the server


app.get("/forecast", async (req, res) => {
  const { city } = req.query;

  try {
    const apiKey = process.env.API_KEY;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(forecastUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch forecast data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




