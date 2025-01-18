import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main/Main";
import Profile from "./components/profile/Profile";
import Courses from "./pages/courses/Courses";
import CourseDetails from "./components/course-details/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        element: <Profile></Profile>,
        index: true,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        path: "courses/:id",
        element: <CourseDetails></CourseDetails>,
      },
    ],
  },
]);

export default router;
