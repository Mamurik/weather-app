import { useState } from "react";
import axios from "axios";
import { weather } from "../types/types";

function useFetching() {
  const [weatherData, setWeatherData] = useState<weather | undefined>(
    undefined
  );
  const [input, setInput] = useState<string>("Gomel");

  const fetchWeather = async () => {
    if (!input) return;
    try {
      const response = await axios.get<weather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=4b2204920805cde43f0fd0ffe2d8b8d2&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      setWeatherData(undefined);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return { weatherData, fetchWeather, handleInput, input };
}

export default useFetching;
