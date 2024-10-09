import "./List.css";

export function List({ activities, onDeleteActivity }) {
  return (
    <div className="list-container">
      <h2>List of Activities</h2>
      <ul className="list">
        {activities
          .filter((item) => item.isForGoodWeather)
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
