export default function SearchBar({ getWeatherInfo }) {
  const API_KEY = "bff8740ca461401a912210259251006";

  function handleSearch(e) {
    e.preventDefault();
    const cityName = e.target.querySelector(".search-input");
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName.value}`;
    getWeatherInfo(API_URL);
  }

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleSearch}>
        <span className="material-symbols-rounded">search</span>
        <input className="search-input" placeholder="Enter a city name"></input>
      </form>
      <button className="location-button">
        <span className="material-symbols-rounded">my_location</span>
      </button>
    </div>
  );
}
