import "./Form.css";
import { uid } from "uid";

export function Form({ onAddActivity }) {
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const result = {
      id: uid(),
      name: data.name,
      isForGoodWeather: data.isForGoodWeather === "on",
    };

    onAddActivity(result);
    event.currentTarget.reset();
    event.currentTarget.elements.name.focus();
  }

  return (
    <form aria-labelledby="title" className="activity-form" onSubmit={onSubmit}>
      <h2 id="title">Add new Activity</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="good-weather">Good-weather activity</label>
        <input type="checkbox" name="isForGoodWeather" id="good-weather" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
