import React from "react";
import { SummaryTableProps } from "../../types/Accounting/accountingTypes";

const SummaryTable: React.FC<SummaryTableProps> = ({ totalFamilyMembers, totalDeposit, numberSupervisors }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* عنوان */}
      <h3 className="text-4xl font-extrabold text-white mb-6 drop-shadow-md">
         جمع ورودی‌های سفر 
      </h3>

      {/* کانتینر جدول با افکت شیشه‌ای و نئومورفیسم */}
      <div className="relative w-full max-w-4xl p-6 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-xl border border-gray-100/40 overflow-hidden">
        {/* نور بالای جدول */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>

        <table className="w-full border-separate border-spacing-0">
          {/* سر جدول */}
          <thead>
            <tr className="text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-lg font-semibold">
              <th className="py-4 px-6 text-center">تعداد سرپرست‌ها</th>
              <th className="py-4 px-6 text-center">تعداد خانواده‌ها</th>
              <th className="py-4 px-6 text-center">جمع واریزی‌ها</th>
            </tr>
          </thead>

          {/* بدنه جدول */}
          <tbody>
            <tr className="transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <td className="relative py-4 px-6 text-center text-white text-xl font-medium bg-gradient-to-r from-purple-500 to-indigo-500 rounded-bl-3xl">
                {numberSupervisors}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-bl-3xl"></div>
              </td>
              <td className="relative py-4 px-6 text-center text-white text-xl font-medium bg-gradient-to-r from-indigo-500 to-blue-500">
                {totalFamilyMembers}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </td>
              <td className="relative py-4 px-6 text-center text-white text-xl font-medium bg-gradient-to-r from-blue-500 to-cyan-500 rounded-br-3xl">
                {totalDeposit} تومان
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-br-3xl"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryTable;
