import React from "react";
import './../styles/App.css';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Default weather data
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);
  return (
    <div>
        {/* Do not remove the main div */}
       <h1>Weather App</h1>
      <WeatherDisplay weather={weather} />
    </div>
  )
}

export default App
