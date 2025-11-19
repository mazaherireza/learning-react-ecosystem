import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { BASE_URL } from "../constants";
import EventsList from "../components/EventsList";

const loadEvents = async () => {
  const response = await fetch(`${BASE_URL}events`);
  if (!response.ok) {
    throw new Response(
      {
        message: "Could not fetch events.",
      },
      {
        status: 500,
      }
    );
    /*
    Or:
    throw json(
      {
        message: "Could not fetch events.",
      },
      {
        status: 500,
      }
    );
    */
  } else {
    const { events } = await response.json();
    return events;
  }
};

const EventsPage = () => {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents}></EventsList>}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

export const loader = () => ({
  events: loadEvents(),
});
