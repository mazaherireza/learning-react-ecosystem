import { useState } from "react";
import "./Player.css";

const Player = ({ initialName, symbol, isActive, onChange }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) onChange(symbol, playerName);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={({ target }) => setPlayerName(target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
