import useStore from "./store/store";
import "./App.css";

function App() {
  const { username } = useStore();
  return (
    <div className="container">
      <span>{username}</span>
    </div>
  );
}

export default App;
