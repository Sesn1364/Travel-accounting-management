// Button.tsx
import React from "react";
import { ButtonProps } from "../../types/Button/Button"; // ایمپورت تایپ

const Button: React.FC<ButtonProps> = ({ label, onClick, backgroundColor = "bg-blue-500", hoverColor = "hover:bg-blue-600" }) => {
  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} ${hoverColor} text-white px-4 py-2 rounded-lg transition`}
    >
      {label}
    </button>
  );
};

export default Button;
