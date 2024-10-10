import "./List.css";

export function List({ activities, onDeleteActivity, isGoodWeather }) {
  return (
    <div className="list-container">
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
