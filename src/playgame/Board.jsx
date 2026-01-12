import Square from "./Square";
import { useState } from "react";
import calculateWinner from "./calculateWinner";
import ResetButton from "./ResetBtn";
import PlayerInputs from "./PlayerInput";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState(Array(9).fill(null));
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");
  const winner = calculateWinner(history);

  const handlePlay = (i) => {
    if (!playerX || !playerO) {
      alert("Please input both player names!");
      return;
    }
    if (history[i] || winner) return;

    const nextSquares = history.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setHistory(nextSquares);
    setXIsNext(!xIsNext);
  };

  return ( 
    <div className="flex flex-col items-center p-6 bg-amber-200 rounded-2xl shadow-lg max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-bold text-cyan-500 mb-4">Tic Tac Toe</h2>

      <PlayerInputs
        playerX={playerX}
        playerO={playerO}
        setPlayerX={setPlayerX}
        setPlayerO={setPlayerO}
      />

      <div className="mt-6 grid grid-cols-3 gap-2">
        {history.map((value, index) => (
          <Square key={index} value={value} onClick={() => handlePlay(index)} />
        ))}
      </div>

      <div className="mt-4 text-lg font-semibold text-gray-700">
        {winner
          ? `🎉 Winner: ${winner === "X" ? playerX : playerO}`
          : `Next Turn: ${xIsNext ? playerX || "Player X" : playerO || "Player O"}`}
      </div>

      <ResetButton setHistory={setHistory} />
    </div>
  );
};

export default Board;
