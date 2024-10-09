import "./List.css";

export function List() {
  const items = [
    { id: 1, name: "Item 1", isGoodWeather: true },
    { id: 2, name: "Item 2", isGoodWeather: false },
    { id: 3, name: "Item 3", isGoodWeather: true },
  ];

  return (
    <div className="list-container">
      <h2>List of Activities</h2>
      <ul className="list">
        {items
          .filter((item) => item.isGoodWeather)
          .map((item) => (
            <li key={item.id} className="listItem">
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
