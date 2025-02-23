import React from "react";
import { ButtonProps } from "../../types/Button/Button"; // ایمپورت تایپ

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      {label}
    </button>
  );
};

export default Button;
