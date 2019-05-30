import React, { useState } from 'react';
import '../css/LocationForm.css';

// Form to enter the location for the weather request

const LocationForm = props => {
  // Use state hook
  const [location, setLocation] = useState('');

  const handleChange = event => {
    setLocation(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.handleLocationChange(location);
    // Reset input after submit
    event.target.reset();
  };

  return (
    <form className="location-form" onSubmit={handleSubmit}>
      <input
        placeholder="enter a city"
        className="location-form__input"
        name="location"
        onChange={handleChange}
        type="text"
      />
      <input className="location-form__btn" type="submit" value="Check weather &rarr;" />
    </form>
  );
};

export default LocationForm;
