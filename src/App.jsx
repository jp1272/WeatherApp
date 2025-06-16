import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [cityTemp, setCityTemp] = useState();
  const [cityDesc, setCityDesc] = useState("");
  const [cityHigh, setCityHigh] = useState();
  const [cityLow, setCityLow] = useState();
  const [cityFeels, setCityFeels] = useState();
  const [cityHumidity, setCityHumidity] = useState();
  const [cityWind, setCityWind] = useState();
  const [cityRain, setCityRain] = useState();
  const [citySunrise, setCitySunrise] = useState();
  const [citySunset, setCitySunset] = useState();
  const [hourlyData, setHourlyData] = useState([]);
  const [currentHour, setCurrentHour] = useState();

  async function getWeatherInfo(API_URL) {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);

      const temp = data.current.temp_f;
      const description = data.current.condition.text;
      const high = data.forecast.forecastday[0].day.maxtemp_f;
      const low = data.forecast.forecastday[0].day.mintemp_f;
      const feels = data.current.feelslike_f;
      const humidity = data.current.humidity;
      const wind = data.current.wind_mph;
      const rain = data.forecast.forecastday[0].day.daily_chance_of_rain;
      const sunrise = data.forecast.forecastday[0].astro.sunrise;
      const sunset = data.forecast.forecastday[0].astro.sunset;
      const hourly = data.forecast.forecastday[0].hour;
      const hour = Math.floor(data.current.last_updated_epoch / 3600) * 3600;

      console.log(hour);

      setCityTemp(temp);
      setCityDesc(description);
      setCityHigh(high);
      setCityLow(low);
      setCityFeels(feels);
      setCityHumidity(humidity);
      setCityWind(wind);
      setCityRain(rain);
      setCitySunrise(sunrise);
      setCitySunset(sunset);
      setHourlyData(hourly);
      setCurrentHour(hour);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      {/* Search Bar */}
      <SearchBar getWeatherInfo={getWeatherInfo} />

      <div className="weather-section">
        {/* Current Weather */}
        <CurrentWeather
          currentTemp={Math.round(cityTemp)}
          currentDescription={cityDesc}
          highTemp={Math.round(cityHigh)}
          lowTemp={Math.round(cityLow)}
          currentFeelsLike={Math.round(cityFeels)}
          currentHumidity={cityHumidity}
          currentWind={cityWind}
          currentRain={cityRain}
          currentSunrise={citySunrise}
          currentSunset={citySunset}
        />
        {/* Hourly */}
        <HourlyWeather hourlyWeather={hourlyData} hourTime={currentHour} />
      </div>
    </div>
  );
}

export default App;
