import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Form } from "./components/Form";
import { LocationForm } from "./components/LocationForm";
import { List } from "./components/List";
import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState({});

  const [location, setLocation] = useLocalStorageState("location", {
    defaultValue: "europe",
  });

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather/${location}`
        );

        if (!response.ok) {
          console.error("API ERROR:", response.status);
          return;
        }

        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    }

    fetchWeather();

    const intervalId = setInterval(fetchWeather, 5000);
    return () => clearInterval(intervalId);
  }, [location]);

  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  function handleLocationChange(newLocation) {
    setLocation(newLocation);
  }

  return (
    <>
      <h1 id="title">Weather Activities</h1>
      <LocationForm
        location={location}
        onLocationChange={handleLocationChange}
      />
      <h2>Current Weather</h2>
      <p className="weather-conditions">
        {weather.condition} {weather.temperature}°C
      </p>
      <p>
        {weather.isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </p>
      <List
        activities={activities}
        onDeleteActivity={handleDeleteActivity}
        isGoodWeather={weather.isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
