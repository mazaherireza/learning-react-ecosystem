import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

const fetchSortedPlaces = async () => {
  const places = await fetchAvailablePlaces();
  return new Promise((resolve, _) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const sortedPlaces = sortPlacesByDistance(places, latitude, longitude);
        resolve(sortedPlaces);
      }
    );
  });
};

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    fetchData: availablePlaces,
    setFetchedData: setAvailablePlaces,
    error,
  } = useFetch(fetchSortedPlaces, []);
  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
