import React from "react";

const PlayerInputs = ({ playerX, playerO, setPlayerX, setPlayerO }) => {
  const handlePlayerNameChange = (player, e) => {
    if (player === "X") {
      setPlayerX(e.target.value);
    } else {
      setPlayerO(e.target.value);
    }
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-3">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <label className="font-semibold text-gray-700">Player X:</label>
        <input
          type="text"
          value={playerX}
          onChange={(e) => handlePlayerNameChange("X", e)}
          placeholder="Enter name"
          className="border text-amber-600 border-gray-300 rounded-md p-2 w-48 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2">
        <label className="font-semibold text-gray-700">Player O:</label>
        <input
          type="text"
          value={playerO}
          onChange={(e) => handlePlayerNameChange("O", e)}
          placeholder="Enter name"
          className="border text-amber-600 border-gray-300 rounded-md p-2 w-48 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
    </div>
  );
};

export default PlayerInputs;
