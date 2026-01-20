const Square = ({ value, onClick }) => {
  return (
    <button
      className="w-10 h-10 border-2 text-black border-gray-400 text-3xl font-bold flex items-center justify-center 
                 hover:bg-cyan-200 active:bg-cyan-300 transition duration-200 rounded-lg shadow-md"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Square;
