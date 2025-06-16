export default function HourInfo({ hourData, time, index }) {
  const multiplier = index * 3600;

  const epochTimeStamp = (multiplier + time) * 1000;
  const date = new Date(epochTimeStamp);
  const hourMil = date.getHours();
  let hour = hourMil;
  let afterTime = "";
  let picture = "";
  let description = "";

  if (hour > 12) {
    afterTime = "PM";
  } else {
    afterTime = "AM";
  }

  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }

  description = hourData[hourMil]
    ? hourData[hourMil].condition.text
    : "Partly Cloudy";

  if (description.toLowerCase() === "partly cloudy ") {
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
  } else if (description === "Cloudy " || "Overcast ") {
    picture = "overcast";
  }

  return (
    <li className="weather-item">
      <p>
        {hour}
        {afterTime}
      </p>
      <img src={`icons/${picture}.svg`} className="weather-icon" />
      <p>
        {hourData[hourMil] ? Math.round(hourData[hourMil].temp_f) : 65}
        <span>°F</span>
      </p>
    </li>
  );
}
