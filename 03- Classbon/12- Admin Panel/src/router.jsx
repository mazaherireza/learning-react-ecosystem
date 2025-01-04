import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main/main";
import Courses, { coursesLoader } from "./pages/courses/courses";
import IdentityLayout from "./layout/identity/identity/";
import Login, { loginAction } from "./features/identity/login/login";
import Register, {
  registerAction,
} from "./features/identity/register/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: coursesLoader,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
]);

export default router;
