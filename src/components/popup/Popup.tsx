import React from "react";
import { motion } from "framer-motion";
import { PopupProps } from "../../types/Popup/Popup";

const Popup: React.FC<PopupProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
      {/* انیمیشن ورودی زیبا */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md relative"
      >
        {/* آیکون هشدار */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 p-3 rounded-full shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M5 12h14"></path>
          </svg>
        </div>

        {/* پیام هشدار */}
        <h2 className="text-xl font-bold text-center mt-6">{message}</h2>

        {/* دکمه‌ها با استایل حرفه‌ای */}
        <div className="flex justify-between mt-6">
          <button
            className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:bg-red-600 hover:scale-105"
            onClick={onCancel}
          >
            لغو
          </button>
          <button
            className="px-5 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:bg-green-600 hover:scale-105"
            onClick={onConfirm}
          >
            تأیید
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Popup;
