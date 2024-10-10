import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Form } from "./components/Form";
import { List } from "./components/List";
import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
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
  }, []);

  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <>
      <h1>
        {weather.condition} {weather.temperature}°C
      </h1>
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
