// import React from "react";
// import { InputFieldProps } from "../../types/InputField/InputField";

// const InputField: React.FC<InputFieldProps> = ({ label, type = "text", value, onChange, backgroundColor = 'bg-gray-300', textColor = 'text-white' }) => {
//   return (
//     <div className="flex flex-col gap-1">
//       <label className={`${textColor}`}>{label}</label>
//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         className={`border border-gray-300 rounded p-2 ${backgroundColor}`}
//       />
//     </div>
//   );
// };

// export default InputField;


import React from "react";
import { InputFieldProps } from "../../types/InputField/InputField";

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", value, onChange, backgroundColor = 'bg-gray-300', textColor = 'text-white', width = 'w-full' }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className={`${textColor}`}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`border border-gray-300 rounded p-2 ${backgroundColor} ${width}`} // استفاده از width در className
      />
    </div>
  );
};

export default InputField;
