import React from "react";
import { PopupProps } from "../../types/Popup/Popup";


const Popup: React.FC<PopupProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-semibold text-center mb-4">{message}</h2>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={onCancel}
          >
            خیر
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={onConfirm}
          >
            بله
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
