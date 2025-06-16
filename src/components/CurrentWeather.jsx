import WeatherGlance from "./WeatherGlance";
import WeatherInfo from "./WeatherInfo";

export default function CurrentWeather({
  currentTemp,
  currentDescription,
  highTemp,
  lowTemp,
  currentFeelsLike,
  currentHumidity,
  currentWind,
  currentRain,
  currentSunrise,
  currentSunset,
}) {
  return (
    <div className="current-weather">
      {/* Weather Snippet */}
      <WeatherGlance
        temp={currentTemp}
        description={currentDescription}
        high={highTemp}
        low={lowTemp}
      />

      {/* Weather Information */}
      <WeatherInfo
        feelsLike={currentFeelsLike}
        humidity={currentHumidity}
        wind={currentWind}
        rain={currentRain}
        sunrise={currentSunrise}
        sunset={currentSunset}
      />
    </div>
  );
}
