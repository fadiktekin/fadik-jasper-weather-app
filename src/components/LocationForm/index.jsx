import "./LocationForm.css";

export function LocationForm({ onLocationChange, location }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const selectedLocation = form.location.value;
    onLocationChange(selectedLocation);
  }

  function handleChange(event) {
    onLocationChange(event.target.value.toLowerCase());
  }

  return (
    <form
      aria-labelledby="location-title"
      className="location-form"
      onSubmit={handleSubmit}
    >
      <h2 id="location-title">Select Your Location</h2>
      <div className="location-buttonContainer">
        {["Europe", "Arctic", "Sahara", "Rainforest"].map((value) => (
          <div key={value}>
            <label>
              <input
                type="radio"
                name="location"
                value={value.toLowerCase()}
                checked={location === value.toLowerCase()}
                onChange={handleChange}
              />
              {value}
            </label>
          </div>
        ))}
      </div>
    </form>
  );
}
