import React from "react";
import { Expense, ExpenseTableProps } from "../../types/Expense-table/expenseTable"; // ایمپورت اینترفیس‌ها از types

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, setSelectedExpense, handleDeleteExpense }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 mt-4 mb-20">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">#</th>
          <th className="border p-2">نوع هزینه</th>
          <th className="border p-2">تاریخ</th>
          <th className="border p-2">مبلغ</th>
          <th className="border p-2">عملیات</th> {/* ستون حذف */}
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={expense.id} className="text-center">
            <td className="border p-2 border-white text-white text-xl">{index + 1}</td>
            <td className="border p-2 border-white text-white text-xl">{expense.type}</td>
            <td className="border p-2 border-white text-white text-xl">{expense.date}</td>
            <td className="border p-2 border-white text-white text-xl">{expense.amount} تومان</td>
            <td className="border p-2 border-white">
              <button
                onClick={() => handleDeleteExpense(expense.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                حذف
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
