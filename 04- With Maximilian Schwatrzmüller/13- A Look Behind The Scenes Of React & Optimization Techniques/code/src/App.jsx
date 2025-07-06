import { useState } from "react";
import Header from "./components/Header.jsx";
import Counter from "./components/Counter/Counter++.jsx";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";
import { log } from "./log.js";

const App = () => {
  log("<App /> rendered");
  const [chosenCount, setChosenCount] = useState(0);
  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={setChosenCount}></ConfigureCounter>
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
};

export default App;
