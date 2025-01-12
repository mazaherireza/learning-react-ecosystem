import { createRoot } from "react-dom/client";
import store from "./redux/store";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

const render = () => root.render(<App />);
render();
const unsubscribe = store.subscribe(render);

setTimeout(() => unsubscribe(), 25_000);
