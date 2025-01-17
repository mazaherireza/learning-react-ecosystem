import { RouterProvider } from "react-router-dom";
import router from "./router";
import TheHeader from "./components/the-header/TheHeader";
import "./core/i18n";
import "./App.css";

function App() {
  return (
    <RouterProvider router={router}>
      <TheHeader></TheHeader>
    </RouterProvider>
  );
}

export default App;
