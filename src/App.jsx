import { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import "./App.css";

function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
  }
  return (
    <>
      <List activities={activities}></List>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
