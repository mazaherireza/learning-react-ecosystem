import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main/Main";
import Profile from "./pages/profile/Profile";
import Courses from "./pages/courses/Courses";
import CourseDetails from "./pages/course-details/CourseDetails";

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
        path: "courses/:_id",
        element: <CourseDetails></CourseDetails>,
      },
    ],
  },
]);

export default router;
