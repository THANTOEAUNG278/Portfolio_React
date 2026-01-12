const ServiceModal = ({ open, title, text, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onMouseDown={onClose}
    >
      <div
        className="bg-gray-900 text-white rounded-2xl p-8 max-w-md w-full"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 leading-relaxed">{text}</p>

        <button
          onClick={onClose}
          className="mt-8 px-6 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;
