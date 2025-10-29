import { useState } from "react";
import Player from "./components/Player/Player";
import Board from "./components/Board/Board";
import Log from "./components/Log/Log";
import GameOver from "./components/GameOver/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import "./App.css";

const BOARD = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const deriveBoard = (turns) => {
  const board = [...BOARD.map((row) => [...row])];

  turns.forEach((turn) => {
    const {
      square: { rowIndex, colIndex },
    } = turn;

    const { player: symbol } = turn;

    board[rowIndex][colIndex] = symbol;
  });

  return board;
};

const deriveActivePlayer = (list) => {
  let activePlayer = "X";

  if (list.length > 0 && list[0].player === "X") {
    activePlayer = "O";
  }

  return activePlayer;
};

const deriveWinner = (board, players) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = board[combination[0].row][combination[0].column];
    const secondSymbol = board[combination[1].row][combination[1].column];
    const thirdSymbol = board[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      secondSymbol === thirdSymbol
    )
      winner = players[firstSymbol];
  }

  return winner;
};

const App = () => {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });

  const [turns, setTurns] = useState([]);

  const activePlayer = deriveActivePlayer(turns);
  const board = deriveBoard(turns);
  const winner = deriveWinner(board, players);

  const hasDraw = turns.length === 9 && !winner;

  const handleClick = (rowIndex, colIndex) => {
    setTurns((prev) => {
      const player = deriveActivePlayer(prev);

      return [{ square: { rowIndex, colIndex }, player }, ...prev];
    });
  };

  const handleRematch = () => {
    setTurns([]);
  };

  const handlePlayerNameChange = (symbol, name) => {
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol]: name,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChange={handlePlayerNameChange}
          ></Player>
          <Player
            initialName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChange={handlePlayerNameChange}
          ></Player>
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRematch={handleRematch}></GameOver>
        )}
        <Board board={board} onClick={handleClick}></Board>
      </div>
      <Log turns={turns}></Log>
    </main>
  );
};

export default App;
