import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
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
        path: "/products",
        element: <ProductsPage></ProductsPage>,
      },
      {
        path: "/products/:id",
        element: <ProductDetail></ProductDetail>,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router}></RouterProvider>;

export default App;
