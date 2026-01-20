export default function ResetButton({ setSquares }) {
  return (
    <button
      onClick={() => setSquares(Array(9).fill(null))}
      className="mt-2 text-[10px] px-2 py-1 bg-red-600 rounded"
    >
      Reset
    </button>
  );
}
