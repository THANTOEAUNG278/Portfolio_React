//const API_KEY = "32ac6973f08a261a320f6fd54aa378cc";

import { useEffect, useState } from "react";
import RainEffect from "./RainEffect";
import SnowEffect from "./SnowEffect";
import LightningFlash from "./LightningFlash";
import ShootingStars from "./ShootingStars";
import Earths from "./Earths";

const API_KEY = "32ac6973f08a261a320f6fd54aa378cc";

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}&units=metric`
        )
          .then((res) => res.json())
          .then((data) => setWeather(data))
          .catch((err) => console.error(err));
      },
      (err) => {
        console.error("Location error:", err);
      }
    );
  }, []);

  if (!weather) return null;

  const main = weather.weather[0].main;
  const isNight = weather.weather[0].icon.includes("n");

  return (
    <div className="weather-wrapper relative text-white">

      {main === "Rain" && <RainEffect />}
      {main === "Snow" && <SnowEffect />}
      {main === "Thunderstorm" && <LightningFlash />}
      {isNight && <ShootingStars />}

      <div className="absolute  mt-45 top-8 left-1/2 -translate-x-1/2 z-30
                      bg-black/50 backdrop-blur-md
                      px-6 py-4 rounded-2xl text-center shadow-xl">
        <h2 className="text-xl font-bold tracking-wide">
           {weather.name}
        </h2>

        <p className="text-4xl font-extrabold mt-1 text-cyan-400">
          {Math.round(weather.main.temp)}°C
        </p>

        <p className="mt-1 text-sm uppercase tracking-widest text-gray-200">
          {weather.weather[0].description}
          {isNight && " 🌙"}
        </p>
      </div>

      <div className="h-64 mb-40 relative z-10">
        <Earths weather={main} />
      </div>
    </div>
  );
};

export default CurrentWeather;
