import "./List.css";

export function List({ activities }) {
  console.log(activities);
  return (
    <div className="list-container">
      <h2>List of Activities</h2>
      <ul className="list">
        {activities
          .filter((item) => item.isForGoodWeather)
          .map((item) => (
            <li key={item.id} className="listItem">
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
