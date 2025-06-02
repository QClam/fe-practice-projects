import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function WeatherApp() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const inputRef = useRef(null);
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&lang=vi`
      );

      const data = await response.json();
      setWeatherData(data);
      console.log("Thời tiết: ", data);
    } catch (error) {
      alert("Có lỗi trong quá trình lấy Thời tiết", error);
    }
  };

  return (
    <div>
      <div className="flex shadow bg-gray-200 rounded-full justify-between w-full">
        <input
          type="text"
          placeholder="Nhập tên thành phố"
          className="p-4 mx-2 focus:outline-none rounded-full"
          ref={inputRef}
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />

        <button
          className="bg-white rounded-full text-lg font-bold p-2 hover:scale-110 transition"
          onClick={() => {
            inputRef.current.focus();
            handleSearchWeather();
          }}
        >
          Xem thời tiết
        </button>
      </div>
      {weatherData && (
        <div
          className="mt-6 bg-white p-6 rounded-xl text-center space-y-2 text-gray-700"
          key={weatherData.current.cloud}
        >
          <AnimatePresence>
            <motion.h2
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1.5 }}
            >
              {weatherData.location.name}, {weatherData.location.country}
            </motion.h2>
            <motion.p
              className="text-4xl font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1.5 }}
            >
              {weatherData.current.temp_c}°C
            </motion.p>
            <motion.p
              className="text-lg capitalize"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1.5 }}
            >
              {weatherData.current.condition.text}
            </motion.p>
            <motion.img
              src={weatherData.current.condition.icon}
              alt="weather icon"
              className="mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1.5 }}
            />
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
