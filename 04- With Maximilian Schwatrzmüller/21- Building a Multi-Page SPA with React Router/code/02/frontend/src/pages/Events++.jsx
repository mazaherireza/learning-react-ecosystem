import { useEffect, useState } from "react";
import EventsList from "../components/EventsList";

const EventsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/events");
      if (!response.ok) {
        setError("Fetching events failed.");
      } else {
        const { events } = await response.json();
        setFetchedEvents(events);
      }
      setIsLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
};

export default EventsPage;
