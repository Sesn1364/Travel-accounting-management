// Button.tsx
import React from "react";
import { ButtonProps } from "../../types/Button/Button"; // ایمپورت تایپ

const Button: React.FC<ButtonProps> = ({ label, onClick, backgroundColor = "bg-blue-500", hoverColor = "hover:bg-blue-600", className = "text-white p-2 rounded-lg transition" }) => {
  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} ${hoverColor} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
