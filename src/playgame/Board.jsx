import { useState } from "react";
import Square from "./Square";
import calculateWinner from "./calculateWinner";
import ResetButton from "./ResetBtn";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const next = [...squares];
    next[i] = xIsNext ? "X" : "O";
    setSquares(next);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="flex flex-col items-center p-3">
      <h2 className="text-sm font-bold mb-2 text-black">Tic Tac Toe</h2>

      <div className="grid grid-cols-3 gap-1">
        {squares.map((v, i) => (
          <Square key={i} value={v} onClick={() => handleClick(i)} />
        ))}
      </div>

      <p className="text-xs mt-2 text-black">
        {winner ? `Winner: ${winner}` : `Next: ${xIsNext ? "X" : "O"}`}
      </p>

      <ResetButton setSquares={setSquares} />
    </div>
  );
}
