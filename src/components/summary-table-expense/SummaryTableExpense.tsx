import React from "react";
import { SummaryTableExpenseProps } from "../../types/Accounting/accountingTypes";

const SummaryTableExpense: React.FC<SummaryTableExpenseProps> = ({ totalExpenses, title, label }) => {
  return (
    <div className="relative w-full max-w-4xl p-6 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-xl border border-gray-100/40 overflow-hidden flex flex-col items-center justify-center mt-10">
      {/* افکت گرادینت بالای جدول */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>

      {/* عنوان جدول */}
      <h3 className="text-4xl font-extrabold text-white mb-6 drop-shadow-md text-center">{title}</h3>

      <table className="min-w-full table-auto border-collapse bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl overflow-hidden">
        <thead>
          <tr className="text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-lg font-semibold">
            <th className="px-6 py-4 text-center">{label}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
            <td className="relative py-6 px-8 text-center text-white text-2xl font-medium bg-gradient-to-r from-purple-500 to-indigo-500 rounded-bl-3xl">
              {totalExpenses.toLocaleString()} تومان
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTableExpense;