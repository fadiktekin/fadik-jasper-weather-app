import "./LocationForm.css";

export function LocationForm({ onLocationChange, location }) {
  function handleChange(event) {
    onLocationChange(event.target.value.toLowerCase());
  }

  return (
    <form aria-labelledby="location-title" className="location-form">
      <h2 id="location-title">Select Your Location</h2>
      <div className="location-buttonContainer">
        {["Europe", "Arctic", "Sahara", "Rainforest"].map((value) => (
          <div key={value}>
            <input
              id={value}
              type="radio"
              name="location"
              value={value.toLowerCase()}
              checked={location === value.toLowerCase()}
              onChange={handleChange}
            />
            <label htmlFor={value}>{value}</label>
          </div>
        ))}
      </div>
    </form>
  );
}
