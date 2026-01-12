const ResetButton = ({ setHistory }) => {
  const handleReset = () => {
    setHistory(Array(9).fill(null));
  };

  return (
    <button
      onClick={handleReset}
      className="px-4 py-2 mt-4 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-500 
                 transition duration-200 shadow-md"
    >
      Reset Game
    </button>
  );
};

export default ResetButton;
