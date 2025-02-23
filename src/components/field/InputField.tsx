import React from "react";
import { InputFieldProps } from "../../types/InputField/InputField";

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded p-2"
      />
    </div>
  );
};

export default InputField;
