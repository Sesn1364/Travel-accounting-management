import React from "react";
import { useShareCalculation } from "../../hooks/useCalculateShare";
import {RemainingBudgetTableProps} from "../../types/Accounting/accountingTypes"


const RemainingBudgetTable: React.FC<RemainingBudgetTableProps> = ({ passengers, expenses }) => {
  const calculateShare = useShareCalculation(passengers, expenses);

  return (
    <div className="mt-6 p-4 bg-green-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">👤 باقی‌مانده‌ی هر سرپرست از بودجه‌ی واریزی</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">نام سرپرست</th>
            <th className="border border-gray-300 px-4 py-2">باقی‌مانده از بودجه</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map(passenger => {
            const share = parseFloat(calculateShare(passenger.name));
            const deposit = parseFloat(passenger.depositGeneralBudget);
            const remainingBudget = deposit - share;

            return (
              <tr key={passenger.name} className="bg-white">
                <td className="border border-gray-300 px-4 py-2">{passenger.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {remainingBudget.toFixed()} تومان
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RemainingBudgetTable;
