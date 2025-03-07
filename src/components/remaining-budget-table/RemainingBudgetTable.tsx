import React from "react";
import { useShareCalculation } from "../../hooks/useCalculateShare";
import { RemainingBudgetTableProps } from "../../types/Accounting/accountingTypes";

interface Props extends RemainingBudgetTableProps {
  setRemainingBudgetCount: (count: number) => void;
}

const RemainingBudgetTable: React.FC<Props> = ({ passengers, expenses, setRemainingBudgetCount }) => {
  const calculateShare = useShareCalculation(passengers, expenses);

  const positiveRecords = passengers.filter(passenger => {
    const share = parseFloat(calculateShare(passenger.name));
    const deposit = parseFloat(passenger.depositGeneralBudget);
    return deposit - share > 0;
  });

  React.useEffect(() => {
    setRemainingBudgetCount(positiveRecords.length);
  }, [positiveRecords.length, setRemainingBudgetCount]);

  return (
    <div className="relative w-full max-w-2xl p-6 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-xl border border-gray-100/40 overflow-hidden flex flex-col items-center justify-center mt-10">
      {/* افکت گرادینت بالای جدول */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>

      {/* عنوان جدول */}
      <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-md text-center">
        باقی‌مانده‌ی هر سرپرست از بودجه‌ی واریزی
      </h2>

      <div className="max-h-[300px] overflow-y-auto w-full">
        <table className="min-w-full table-auto border-collapse bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl overflow-hidden">
          <thead>
            <tr className="text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-lg font-semibold">
              <th className="px-6 py-4 text-center">نام سرپرست</th>
              <th className="px-6 py-4 text-center">باقی‌مانده از بودجه</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map(passenger => {
              const share = parseFloat(calculateShare(passenger.name));
              const deposit = parseFloat(passenger.depositGeneralBudget);
              const remainingBudget = deposit - share;

              return (
                <tr key={passenger.name} className="transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                  <td className="relative py-6 px-8 text-center text-white text-xl font-medium bg-gradient-to-r from-purple-500 to-indigo-500">
                    {passenger.name}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </td>
                  <td className="relative py-6 px-8 text-center text-white text-xl font-medium bg-gradient-to-r from-indigo-500 to-blue-500">
                    {remainingBudget.toFixed()} تومان
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

export default RemainingBudgetTable;
