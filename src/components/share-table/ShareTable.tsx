import React from "react";
import { useShareCalculation } from "../../hooks/useCalculateShare";
import {ShareTableProps} from "../../types/Accounting/accountingTypes"


const ShareTable: React.FC<ShareTableProps> = ({ passengers, expenses }) => {
  const calculateShare = useShareCalculation(passengers, expenses);

  return (
    <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow-md w-1/2 mb-20 overflow-hidden">
      <h2 className="text-xl font-semibold mb-4 text-center">سهم هر سرپرست از هزینه‌ها</h2>
      <div className="max-h-[150px] overflow-y-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead className="sticky top-0">
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">نام مسافر</th>
            <th className="border border-gray-300 px-4 py-2">سهم از هزینه‌ها</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map(passenger => (
            <tr key={passenger.name} className="bg-white">
              <td className="border border-gray-300 px-4 py-2 text-center">{passenger.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{calculateShare(passenger.name)} تومان</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ShareTable;
