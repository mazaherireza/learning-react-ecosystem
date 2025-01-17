import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

export default router;
