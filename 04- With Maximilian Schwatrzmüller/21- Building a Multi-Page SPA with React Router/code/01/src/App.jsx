import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";

const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/products" element={<Products></Products>}></Route>
  </Route>
);

const router = createBrowserRouter(routes);
const App = () => <RouterProvider router={router}></RouterProvider>;

export default App;
