import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./stores/stores";
import { LanguageProvider } from "./core/contexts/language/context";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Provider>
);
