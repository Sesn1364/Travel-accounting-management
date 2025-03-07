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

  const denominator = remainingBudgetCount || 1;

  return (
    <div className="relative w-full max-w-4xl p-6 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-xl border border-gray-100/40 overflow-hidden flex flex-col items-center justify-center mt-10">
      {/* افکت گرادینت بالای جدول */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>

      {/* عنوان جدول */}
      <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-md text-center">
        بدهکاران
      </h2>

      <div className="max-h-[300px] overflow-y-auto w-full">
        <table className="min-w-full table-auto border-collapse bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl overflow-hidden">
          <thead>
            <tr className="text-white bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-lg font-semibold">
              <th className="px-6 py-4 text-center">نام سرپرست</th>
              <th className="px-6 py-4 text-center">مقدار بدهی</th>
              <th className="px-6 py-4 text-center">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            {debtors.map(debtor => {
              const share = parseFloat(calculateShare(debtor.name));
              const deposit = parseFloat(debtor.depositGeneralBudget);
              const debtAmount = share - deposit;
              const adjustedAmount = (debtAmount / denominator).toFixed();

              return (
                <tr key={debtor.name} className="transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                  <td className="relative py-6 px-8 text-center text-white text-xl font-medium bg-gradient-to-r from-red-500 to-orange-500">
                    {debtor.name}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </td>
                  <td className="relative py-6 px-8 text-center text-white text-xl font-medium bg-gradient-to-r from-orange-500 to-yellow-500">
                    {debtAmount.toFixed()} تومان
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </td>
                  <td className="relative py-6 px-8 text-center text-white text-xl font-medium bg-gradient-to-r from-yellow-500 to-red-500">
                    {adjustedAmount} تومان
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DebtorsTable;