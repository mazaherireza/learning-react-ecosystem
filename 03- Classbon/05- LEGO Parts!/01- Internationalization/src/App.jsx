import Header from "./components/Header/header";
import Main from "./components/Main/main";
import { AppProvider } from "./contexts/app/app-context";
import "./core/i18n";

function App() {
  return (
    <div>
      <AppProvider>
        <Header></Header>
        <Main></Main>
      </AppProvider>
    </div>
  );
}

export default App;
