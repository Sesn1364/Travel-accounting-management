import React from "react";
import { useShareCalculation } from "../../hooks/useCalculateShare";
import { RemainingBudgetTableProps } from "../../types/Accounting/accountingTypes";

interface Props extends RemainingBudgetTableProps {
  setRemainingBudgetCount: (count: number) => void; // تابع برای ارسال تعداد رکوردهای مثبت
}

const RemainingBudgetTable: React.FC<Props> = ({ passengers, expenses, setRemainingBudgetCount }) => {
  const calculateShare = useShareCalculation(passengers, expenses);

  const positiveRecords = passengers.filter(passenger => {
    const share = parseFloat(calculateShare(passenger.name));
    const deposit = parseFloat(passenger.depositGeneralBudget);
    return deposit - share > 0;
  });

  // ارسال تعداد رکوردهای مثبت به والد
  React.useEffect(() => {
    setRemainingBudgetCount(positiveRecords.length);
  }, [positiveRecords.length, setRemainingBudgetCount]);

  return (
    <div className="mt-6 p-4 bg-green-100 rounded-lg shadow-md w-1/2 mb-20 overflow-hidden">
      <h2 className="text-xl font-semibold mb-4 text-center">باقی‌مانده‌ی هر سرپرست از بودجه‌ی واریزی</h2>
      <div className="max-h-[150px] overflow-y-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead className="sticky top-0">
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
                <td className="border border-gray-300 px-4 py-2 text-center">{passenger.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {remainingBudget.toFixed()} تومان
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
