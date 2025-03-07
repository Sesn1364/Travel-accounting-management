import React from "react";
import { Expense, ExpenseTableProps } from "../../types/Expense-table/expenseTable"; // ایمپورت اینترفیس‌ها از types

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, setSelectedExpense, handleDeleteExpense }) => {
  return (
    <div className="bg-gray-900 shadow-2xl rounded-3xl p-6 w-full max-w-5xl mx-auto mt-10 border border-gray-800">
      <div className="overflow-x-auto max-h-64 overflow-y-auto border border-gray-700 rounded-xl shadow-lg">
        <table className="min-w-full table-auto border-collapse bg-gray-800 text-white rounded-xl">
          <thead className="text-white sticky top-0 z-10">
            <tr className="bg-gray-200 bg-gradient-to-r from-indigo-500 to-purple-600">
              <th className="px-6 py-3 text-lg font-semibold border-b text-center">#</th>
              <th className="px-6 py-3 text-lg font-semibold border-b text-center">نوع هزینه</th>
              <th className="px-6 py-3 text-lg font-semibold border-b text-center">تاریخ</th>
              <th className="px-6 py-3 text-lg font-semibold border-b text-center">مبلغ</th>
              <th className="px-6 py-3 text-lg font-semibold border-b text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr
                key={expense.id}
                className={
                  index % 2 === 0
                    ? "bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600"
                    : "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500"
                }
              >
                <td className="px-6 py-4 text-lg text-center font-medium">{index + 1}</td>
                <td className="px-6 py-4 text-lg text-center">{expense.type}</td>
                <td className="px-6 py-4 text-lg text-center">{expense.date}</td>
                <td className="px-6 py-4 text-lg text-center">{expense.amount} تومان</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDeleteExpense(expense.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold rounded-xl px-5 py-2 shadow-md transform hover:scale-105 transition-all duration-300"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;
