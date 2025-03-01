import React from "react";
import {SummaryTableProps} from "../../types/Accounting/accountingTypes"


const SummaryTable: React.FC<SummaryTableProps> = ({ totalFamilyMembers, totalDeposit ,numberSupervisors  }) => {
  return (
    <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">تعداد و بودجه ی کل:</h3>
      <table className="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b">تعداد سرپرست ها</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b">تعداد خانواده‌ها</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b">جمع واریزی‌ها</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-sm text-gray-700">{numberSupervisors}</td>
            <td className="px-4 py-2 text-sm text-gray-700">{totalFamilyMembers}</td>
            <td className="px-4 py-2 text-sm text-gray-700">{totalDeposit} تومان</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;