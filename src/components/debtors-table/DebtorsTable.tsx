import React from "react";
import { RemainingBudgetTableProps } from "../../types/Accounting/accountingTypes";
import { useShareCalculation } from "../../hooks/useCalculateShare";

const DebtorsTable: React.FC<RemainingBudgetTableProps & { numberSupervisors: number; remainingBudgetCount: number }> = ({ passengers, expenses, numberSupervisors, remainingBudgetCount }) => {
  const calculateShare = useShareCalculation(passengers, expenses);

  const debtors = passengers.filter(passenger => {
    const share = parseFloat(calculateShare(passenger.name));
    const deposit = parseFloat(passenger.depositGeneralBudget);
    return deposit - share < 0;
  });

  // تقسیم مقدار بدهی بر تعداد سرپرستانی که بودجه‌ی باقی‌مانده‌ی آنها مثبت است
  const denominator = remainingBudgetCount || 1; // اگر مقدار 0 شد، تقسیم بر 1 می‌شود تا خطا ندهد

  return (
    <div className="mt-6 p-4 bg-red-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">🚨 بدهکاران</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">نام سرپرست</th>
            <th className="border border-gray-300 px-4 py-2">مقدار بدهی</th>
            <th className="border border-gray-300 px-4 py-2">توضیحات</th>
          </tr>
        </thead>
        <tbody>
          {debtors.map(debtor => {
            const share = parseFloat(calculateShare(debtor.name));
            const deposit = parseFloat(debtor.depositGeneralBudget);
            const debtAmount = share - deposit;
            const adjustedAmount = (debtAmount / denominator).toFixed();

            return (
              <tr key={debtor.name} className="bg-white">
                <td className="border border-gray-300 px-4 py-2">{debtor.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-red-600">{debtAmount.toFixed()} تومان</td>
                <td className="border border-gray-300 px-4 py-2">{adjustedAmount} تومان</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DebtorsTable;
