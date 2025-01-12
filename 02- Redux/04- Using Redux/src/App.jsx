import Counter from "./components/counter/Counter";
import store from "./redux/store";
import { decAction, resetAction, incAction } from "./redux/creators";

function App() {
  return (
    <Counter
      counter={store.getState()}
      onDec={() => store.dispatch(decAction())}
      onReset={() => store.dispatch(resetAction())}
      onInc={() => store.dispatch(incAction())}
    ></Counter>
  );
}

export default App;
