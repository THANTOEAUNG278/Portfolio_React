const CustomButton = ({
  text = "Click Me",
  onClick,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  fontSize = "text-base",
  fontWeight = "font-semibold",
  padding = "px-4 py-2",
  rounded = "rounded-md",
  hover = "hover:bg-blue-600",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} ${fontSize} ${fontWeight} ${padding} ${rounded} ${hover} transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;