import { useRouteLoaderData, redirect, Await } from "react-router-dom";
import { Suspense } from "react";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { BASE_URL } from "../constants";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading Event ...</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent}></EventItem>}
        </Await>
      </Suspense>

      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading Events ...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents}></EventsList>}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch(`${BASE_URL}events/${id}`);
  if (!response.ok)
    throw new Response(
      JSON.stringify(
        { message: "Could not fetch details for selected event." },
        {
          status: 500,
        }
      )
    );
  /*
  Or:
  throw json(
    { message: "Could not fetch details for selected event." },
    {
      status: 500,
    }
  );  
   */

  const { event } = await response.json();
  return event;
};

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
    )
    */
  } else {
    const { events } = await response.json();
    return events;
  }
};

export const loader = async ({ params: { eventId: id } }) => {
  return {
    event: await loadEvent(id),
    events: loadEvents(),
  };
};

export const action = async ({
  request: { method },
  params: { eventId: id },
}) => {
  const response = await fetch(`${BASE_URL}events/${id}`, { method });
  if (!response.ok)
    throw new Response(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  /*
  Or: 
    throw json(
    { message: "Could not delete event." },
    {
      status: 500,
    }
  );
  */
  return redirect("/events");
};
