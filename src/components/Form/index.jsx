import "./Form.css";
export function Form({ handleAddActivity }) {
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const result = {
      name: data.name,
      isForGoodWeather: data.isForGoodWeather === "on",
    };

    console.log(result);
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
