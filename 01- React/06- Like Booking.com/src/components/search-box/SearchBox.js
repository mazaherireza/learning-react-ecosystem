import "./SearchBox.css";
import countries from "./countries";
import { useState } from "react";

export default function SearchBox() {
  const [cities, setCities] = useState([]);

  const onChangeHandler = ({ target }) => {
    if (target.value == -1) {
      setCities([]);
    } else {
      const selectedCountry = target.value;
      setCities(countries[selectedCountry]);
    }
  };

  return (
    <div className="search-box-container">
      <select name="country" id="country" onChange={onChangeHandler}>
        <option value="-1">Where From? (Country)</option>
        {Object.keys(countries).map((country, index) => {
          return (
            <option value={country} key={index}>
              {country}
            </option>
          );
        })}
      </select>
      <select name="city" id="city">
        <option value="-1">Where from? (City)</option>
        {cities.map((city, index) => {
          return (
            <option value={city} key={index}>
              {city}
            </option>
          );
        })}
      </select>
      <button className="search-box-btn">Search</button>
    </div>
  );
}
