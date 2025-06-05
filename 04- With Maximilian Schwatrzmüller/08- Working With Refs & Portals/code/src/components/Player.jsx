import { useState } from "react";

const Player = () => {
  const [playerName, setPlayerName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = ({ target }) => {
    setPlayerName(target.value);
    setIsSubmitted(false);
  };

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? playerName : "Unknown"}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleChange} />
        <button onClick={() => setIsSubmitted(true)}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
