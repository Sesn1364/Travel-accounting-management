import React from "react";
import { SummaryTableProps } from "../../types/Accounting/accountingTypes"


const SummaryTable: React.FC<SummaryTableProps> = ({ totalFamilyMembers, totalDeposit, numberSupervisors }) => {
  return (
    <>
      <h3 className="text-3xl text-white font-semibold mb-2 text-center">جمع ورودی های سفر</h3>
      <table className="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg mb-20">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-lg font-medium text-gray-700 border-b">تعداد سرپرست ها</th>
            <th className="px-4 py-2 text-lg font-medium text-gray-700 border-b">تعداد خانواده‌ها</th>
            <th className="px-4 py-2 text-lg font-medium text-gray-700 border-b">جمع واریزی‌ها</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-lg text-gray-700 text-center bg-linear-to-r from-purple-400 to-purple-300">{numberSupervisors}</td>
            <td className="px-4 py-2 text-lg text-gray-700 text-center bg-linear-to-r from-purple-300 to-purple-200">{totalFamilyMembers}</td>
            <td className="px-4 py-2 text-lg text-gray-700 text-center bg-linear-to-r from-purple-200 to-purple-100">{totalDeposit} تومان</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SummaryTable;