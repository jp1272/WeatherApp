import HourInfo from "./HourInfo";

export default function HourlyWeather({ hourlyWeather, hourTime }) {
  return (
    <div className="hourly-weather">
      <ul className="weather-list">
        <HourInfo hourData={hourlyWeather} time={hourTime} index={1} />
        <HourInfo hourData={hourlyWeather} time={hourTime} index={2} />
        <HourInfo hourData={hourlyWeather} time={hourTime} index={3} />
        <HourInfo hourData={hourlyWeather} time={hourTime} index={4} />
        <HourInfo hourData={hourlyWeather} time={hourTime} index={5} />
        <HourInfo hourData={hourlyWeather} time={hourTime} index={6} />
        <HourInfo hourData={hourlyWeather} time={hourTime} index={7} />
        <HourInfo hourData={hourlyWeather} time={hourTime} index={8} />
        <HourInfo hourData={hourlyWeather} time={hourTime} index={9} />
        <HourInfo hourData={hourlyWeather} time={hourTime} index={10} />
        <HourInfo hourData={hourlyWeather} time={hourTime} index={11} />
        <HourInfo hourData={hourlyWeather} time={hourTime} index={12} />
      </ul>
    </div>
  );
}
