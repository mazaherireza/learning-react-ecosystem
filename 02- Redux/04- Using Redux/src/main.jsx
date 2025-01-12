import { createRoot } from "react-dom/client";
import store from "./redux/store";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

const render = () => root.render(<App />);
render();
store.subscribe(render);
