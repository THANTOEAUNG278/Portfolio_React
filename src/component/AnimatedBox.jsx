
import React from "react";
import "../index.css"; // Ensure this file exists

const AnimatedBox = ({ direction, children, className }) => {
  return <div className={`animated-box ${direction} ${className}`}>{children}</div>;
};

export default AnimatedBox;