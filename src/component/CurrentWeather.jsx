import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);
  const apiKey = "32ac6973f08a261a320f6fd54aa378cc";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => setWeather(data))
        .catch((err) => console.error("天気取得エラー:", err));
    });
  }, []);

  if (!weather) return <p className="text-gray-400 mx-32"><FiLoader /></p>;

  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  return (
    <div className=" p-6  text-center">
      <div>
        <img
          src={iconUrl}
          alt={weather.weather[0].description}
          className="w-48 h-48 mx-auto animate-float drop-shadow-lg mb-0"

        />
      </div>

      {/* <p className="capitalize text-lg mb-2">{weather.weather[0].description}</p> */}

      <div className="space-y-1 text-sm font-bold font-edu mt-0">
        <h4 className=" text-lg mb-2">{weather.name} の天気</h4>
        <p>🌡 気温: {weather.main.temp}°C</p>
        <p>💧 湿度: {weather.main.humidity}%</p>
        <p>🌪 風速: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default CurrentWeather;