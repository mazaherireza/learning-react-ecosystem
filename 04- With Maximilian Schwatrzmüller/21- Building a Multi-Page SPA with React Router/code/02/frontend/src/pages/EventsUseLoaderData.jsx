import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { BASE_URL } from "../constants";

const EventsPage = () => {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;

export const loader = async () => {
  const response = await fetch(`${BASE_URL}events`);
  
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    const { events } = await response.json();
    return events;
  }
};
