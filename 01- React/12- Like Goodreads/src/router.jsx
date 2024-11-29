import Login from "./components/login/Login.jsx";
import Home from "./components/home/Home.jsx";
import Books from "./components/books/Books.jsx";
import ShowBook from "./components/show-book/ShowBook.jsx";
import Recommendations from "./components/recommendations/Recommendations.jsx";
import Groups from "./components/recommendations/groups/Groups.jsx";
import Discussions from "./components/recommendations/discussions/Discussions.jsx";
import NotFound from "./components/not-found/NotFound.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

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
