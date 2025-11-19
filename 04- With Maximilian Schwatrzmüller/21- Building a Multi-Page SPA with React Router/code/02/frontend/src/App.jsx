import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import EventsPage, {
  loader as eventsLoader,
} from "./pages/EventsUseLoaderData";
import EventDetailPage, {
  loader as loadEventById,
  action as deleteEventAction,
} from "./pages/EventDetail";
import NewEventPage, { action as sendEventAction } from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventsRoot from "./pages/RootEvents";
import ErrorPage from "./pages/Error";
import { action as manipulateEventAction } from "./components/EventForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "events",
        element: <EventsRoot></EventsRoot>,
        children: [
          {
            index: true,
            element: <EventsPage></EventsPage>,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: loadEventById,
            children: [
              {
                index: true,
                action: deleteEventAction,
                element: <EventDetailPage></EventDetailPage>,
              },
              {
                path: "edit",
                action: manipulateEventAction,
                element: <EditEventPage></EditEventPage>,
              },
            ],
          },

          {
            path: "new",
            action: manipulateEventAction,
            element: <NewEventPage></NewEventPage>,
          },
        ],
      },
    ],
  },
]);

const App = () => <RouterProvider routes={routes}></RouterProvider>;

export default App;
