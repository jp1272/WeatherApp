export default function WeatherInfo({
  feelsLike,
  humidity,
  wind,
  rain,
  sunrise,
  sunset,
}) {
  return (
    <div className="weather-info">
      <div className="info-group">
        <div className="info-item">
          <p>
            {feelsLike} <span>°F</span>
          </p>
          <p className="info-title">Feels Like</p>
        </div>
        <div className="info-item">
          <p>{humidity}%</p>
          <p className="info-title">Humidity</p>
        </div>
      </div>
      <div className="info-group">
        <div className="info-item">
          <p>{wind}mph</p>
          <p className="info-title">Wind</p>
        </div>
        <div className="info-item">
          <p>{rain}%</p>
          <p className="info-title">Rain</p>
        </div>
      </div>
      <div className="info-group">
        <div className="info-item">
          <p>{sunrise}</p>
          <p className="info-title">Sunrise</p>
        </div>
        <div className="info-item">
          <p>{sunset}</p>
          <p className="info-title">Sunset</p>
        </div>
      </div>
    </div>
  );
}
