import React from "react";
import {SummaryTableExpenseProps} from "../../types/Accounting/accountingTypes"


const SummaryTableExpense: React.FC<SummaryTableExpenseProps> = ({ totalExpenses }) => {
  return (
    <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">💵 مجموع کل هزینه‌ها:</h3>
      <table className="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b">مجموع هزینه‌ها</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-sm text-gray-700">{totalExpenses.toLocaleString()} تومان</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTableExpense;
