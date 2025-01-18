import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main/Main";
import Courses from "./pages/courses/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "courses",
        element: <Courses></Courses>,
      },
    ],
  },
]);

export default router;
