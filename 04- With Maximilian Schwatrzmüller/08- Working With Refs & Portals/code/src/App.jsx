import Player from "./components/PlayerRef.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

const App = () => {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}></TimerChallenge>
        <TimerChallenge title="Not Easy" targetTime={5}></TimerChallenge>
      </div>
    </>
  );
};

export default App;
