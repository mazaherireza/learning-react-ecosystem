import "./Log.css";

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => {
        const {
          square: { rowIndex, colIndex },
          player,
        } = turn;
        return (
          <li
            key={`${rowIndex}${colIndex}`}
          >{`Player ${player} selected: ${rowIndex}, ${colIndex}`}</li>
        );
      })}
    </ol>
  );
};

export default Log;
