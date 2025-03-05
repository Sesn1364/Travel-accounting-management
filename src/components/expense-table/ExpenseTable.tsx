import React from "react";
import { Expense, ExpenseTableProps } from "../../types/Expense-table/expenseTable"; // ایمپورت اینترفیس‌ها از types

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, setSelectedExpense, handleDeleteExpense }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg border border-gray-300 mt-4 mb-20">
      <div className="max-h-[300px] overflow-y-auto">
      <table className="w-full border-collapse">
        <thead className="sticky top-0">
          <tr className="bg-gray-200">
            <th className="border p-2 rounded-tl-lg border-white">#</th>
            <th className="border p-2 border-white">نوع هزینه</th>
            <th className="border p-2 border-white">تاریخ</th>
            <th className="border p-2 border-white">مبلغ</th>
            <th className="border p-2 rounded-tr-lg border-white">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={expense.id} className="text-center">
              <td className="border p-2 border-white text-white text-xl">{index + 1}</td>
              <td className="border p-2 border-white text-white text-xl">{expense.type}</td>
              <td className="border p-2 border-white text-white text-xl">{expense.date}</td>
              <td className="border p-2 border-white text-white text-xl">{expense.amount} تومان</td>
              <td className="border p-2 border-white text-white text-xl">
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
      </div>
    </div>
  );
};

export default ExpenseTable;
