import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/index";
import "./index.css";

const entryPoint = document.getElementById("root");
const root = createRoot(entryPoint);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
