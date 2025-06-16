export default function WeatherGlance({ temp, description, high, low }) {
  let picture = "";

  if (description.toLowerCase() === "partly cloudy") {
    picture = "clouds";
  } else if (description === "Mist") {
    picture = "mist";
  } else if (description === "Sunny" || description === "Clear") {
    picture = "clear";
  } else if (
    description === "Heavy rain" ||
    description === "Moderate rain" ||
    description === "Moderate or heavy rain shower"
  ) {
    picture = "moderate_heavy_rain";
  } else if (description === "Light rain") {
    picture = "rain";
  } else if (description === "Overcast") {
    picture = "overcast";
  }

  if (description === "Moderate or heavy rain shower") {
    description = "Rain showers";
  }

  return (
    <div className="weather-glance">
      <img src={`icons/${picture}.svg`} className="weather-icon" />
      <h2 className="temp">
        {temp} <span>°F</span>
      </h2>
      <p className="description">{description}</p>
      <p className="description">
        High: {high}
        <span>°F</span> Low: {low}
        <span>°F</span>
      </p>
    </div>
  );
}
