import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Books from "./components/books/Books";
import ShowBook from "./components/show-book/ShowBook";
import Recommendations from "./components/recommendations/Recommendations";
import Groups from "./components/recommendations/groups/Groups";
import Discussions from "./components/recommendations/discussions/Discussions";
import NotFound from "./components/not-found/NotFound";
import PrivateRoute from "./PrivateRoute";

const router = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books",
    element: (
      <PrivateRoute>
        <Books></Books>
      </PrivateRoute>
    ),
  },
  {
    path: "/show-book/:bookID",
    element: <ShowBook />,
  },
  {
    path: "/recommendations/*",
    element: <Recommendations />,
    children: [
      {
        path: "groups",
        element: <Groups></Groups>,
      },
      {
        path: "discussions",
        element: <Discussions></Discussions>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
