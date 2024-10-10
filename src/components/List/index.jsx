import "./List.css";

export function List({ activities, onDeleteActivity, isGoodWeather }) {
  return (
    <div className="list-container">
      <h2>
        {isGoodWeather ? "Good Weather Activities" : "Bad Weather Activities"}
      </h2>
      <ul className="list">
        {activities
          .filter((item) => item.isForGoodWeather === isGoodWeather)
          .map((item) => (
            <li key={item.id} className="list__item">
              {item.name}
              <button type="button" onClick={() => onDeleteActivity(item.id)}>
                X
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
