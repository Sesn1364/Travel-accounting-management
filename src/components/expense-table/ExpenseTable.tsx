// import React from "react";

// interface Expense {
//   id: string;
//   type: string;
//   date: string;
//   amount: string;
// }

// interface ExpenseTableProps {
//   expenses: Expense[];
// }

// const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses }) => {
//   return (
//     <table className="w-full border-collapse border border-gray-300">
//       <thead>
//         <tr className="bg-gray-200">
//           <th className="border p-2">#</th>
//           <th className="border p-2">نوع هزینه</th>
//           <th className="border p-2">تاریخ</th>
//           <th className="border p-2">مبلغ</th>
//         </tr>
//       </thead>
//       <tbody>
//         {expenses.map((expense, index) => (
//           <tr key={expense.id} className="text-center">
//             <td className="border p-2">{index + 1}</td>
//             <td className="border p-2">{expense.type}</td>
//             <td className="border p-2">{expense.date}</td>
//             <td className="border p-2">{expense.amount}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ExpenseTable;



import React from "react";

interface Expense {
  id: string;
  type: string;
  date: string;
  amount: number;
}

interface ExpenseTableProps {
  expenses: Expense[];
  setSelectedExpense: (id: string | null) => void;
  handleDeleteExpense: (id: string) => void; // اینجا نوع را اصلاح کن
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, setSelectedExpense, handleDeleteExpense }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 mt-4">
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
            <td className="border p-2">{index + 1}</td>
            <td className="border p-2">{expense.type}</td>
            <td className="border p-2">{expense.date}</td>
            <td className="border p-2">{expense.amount}</td>
            <td className="border p-2">
            <button
  onClick={() => handleDeleteExpense(expense.id)} // ارسال id هنگام حذف
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

