import { createBrowserRouter } from "react-router-dom";
import IdentityLayout from "./layout/identity-layout";
import Login from "./features/identity/login/login";
import Register, {
  registerAction,
} from "./features/identity/register/register";

const router = createBrowserRouter([
  {
    element: <IdentityLayout></IdentityLayout>,
    children: [
      {
        path: "login",
        element: <Login />,
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
