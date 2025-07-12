import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

const AvailablePlaces = ({ onSelectPlace }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  /*
   0) Wrong way
   This code has a huge flaw ... create an infinite loop.
   
   fetch("http:localhost:3000/places")
    .then((response) => response.json())
    .then(({ places }) => setAvailablePlaces(places));
   */

  /*
    1)
    useEffect(() => {
    fetch("http:localhost:3000/places")
      .then((response) => response.json())
      .then(({ places }) => setAvailablePlaces(places));
  }, []);
  */
  useEffect(() => {
    setIsFetching(true);
    const fetchData = async () => {
      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            const sortedPlaces = sortPlacesByDistance(
              places,
              latitude,
              longitude
            );
            setAvailablePlaces(sortedPlaces);
            setIsFetching(false);
          }
        );
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, please try again later.",
        });
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);
  if (error)
    return <Error title="An error occured!" message={error.message}></Error>;
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={false}
      loadingText=""
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
};

export default AvailablePlaces;
