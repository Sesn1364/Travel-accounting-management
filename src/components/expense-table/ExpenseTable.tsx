import React from "react";

interface Expense {
  id: string;
  type: string;
  date: string;
  amount: string;
}

interface ExpenseTableProps {
  expenses: Expense[];
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">#</th>
          <th className="border p-2">نوع هزینه</th>
          <th className="border p-2">تاریخ</th>
          <th className="border p-2">مبلغ</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={expense.id} className="text-center">
            <td className="border p-2">{index + 1}</td>
            <td className="border p-2">{expense.type}</td>
            <td className="border p-2">{expense.date}</td>
            <td className="border p-2">{expense.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
