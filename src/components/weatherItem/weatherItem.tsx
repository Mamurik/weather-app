import React, { FC } from "react";
import { weather } from "../../types/types";
import classes from "./weatherItem.module.css";

interface WeatherItemProps {
  weatherData: weather | undefined;
}

const weatherImages: { [key: string]: string } = {
  "clear sky": "/ClearSky.png",
  "few clouds": "/FewClouds.png",
  "scattered clouds": "/ScatteredClouds.png",
  "broken clouds": "/BrokenClouds.png",
  "overcast clouds": "/OvercastClouds.png",
  "moderate rain": "/ModerateRain.png",
};

const WeatherItem: FC<WeatherItemProps> = ({ weatherData }) => {
  const weatherDescription = weatherData?.weather[0].description;
  const image = weatherDescription ? weatherImages[weatherDescription] : "";

  return (
    <div className={classes.container}>
      {weatherData ? (
        <>
          <h2 className={classes.weater_name}>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className={classes.weater_text}>
            Температура: {weatherData.main.temp} °C
          </p>
          <p className={classes.weater_text}>
            Ощущается как: {weatherData.main.feels_like} °C
          </p>
          <p className={classes.weater_text}>
            Влажность: {weatherData.main.humidity}%
          </p>
          <p className={classes.weater_text}>Описание: {weatherDescription}</p>
          {image && (
            <img
              className={classes.weather_image}
              src={image}
              alt={weatherDescription}
            />
          )}
        </>
      ) : (
        <div>
          <h1>Город не найден</h1>
        </div>
      )}
    </div>
  );
};

export default WeatherItem;
