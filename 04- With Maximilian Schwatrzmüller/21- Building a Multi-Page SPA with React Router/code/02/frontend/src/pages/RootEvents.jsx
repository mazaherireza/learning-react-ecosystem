import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

const EventsRoot = () => {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <Outlet></Outlet>
    </>
  );
};

export default EventsRoot;
