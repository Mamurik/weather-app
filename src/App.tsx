import { FC } from "react";
import FindModal from "./components/FindModal/FindModal";
import WeatherItem from "./components/weatherItem/weatherItem";
import useFetching from "./hooks/useFetching";
import "./App.css";
const App: FC = () => {
  const { weatherData, fetchWeather, handleInput, input } = useFetching();

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "darkblue", fontStyle: "italic" }}>WEATHER APP</h1>
      <FindModal
        value={input}
        onClick={fetchWeather}
        onChange={handleInput}
      ></FindModal>
      <WeatherItem weatherData={weatherData} />
    </div>
  );
};

export default App;
