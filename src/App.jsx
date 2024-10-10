import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import "./App.css";

function App() {
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchWeather() {
      try {
        const respose = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );

        if (!respose.ok) {
          console.log("API ERROR:", respose.status);
          return;
        }

        const data = await respose.json();
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchWeather();

    const intervalId = setInterval(fetchWeather, 1000);
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
        {weather.condition}
        {weather.temperature}
      </h1>
      <p>
        {weather.isGoodWeather
          ? `The weather is awesome! Go outside and:`
          : `Bad weather outside! Here's what you can do now:`}
      </p>
      <List
        activities={activities}
        onDeleteActivity={handleDeleteActivity}
        isGoodWeather={weather.isGoodWeather}
      ></List>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
