import { useState, useRef } from "react";

const Player = () => {
  const [enteredName, setEnteredName] = useState("");
  const playerName = useRef();

  const handleClick = () => {
    setEnteredName(playerName.current.value);
    // playerName.current.value = ""; Imperative Code X
  };

  return (
    <section id="player">
      <h2>Welcome {enteredName || "Unknown"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
