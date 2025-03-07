import React from "react";
import Button from "../../components/button/Button";
import { PassengerTableProps } from "../../types/Accounting/accountingTypes";

const PassengerTable: React.FC<PassengerTableProps> = ({ passengers, setSelectedTraveler }) => {
  return (
    <div className="bg-gray-900 shadow-2xl rounded-3xl p-6 w-full max-w-5xl mx-auto mt-10 border border-gray-800">
      <h3 className="text-3xl font-bold text-white text-center mb-6">پنل مسافران</h3>
      <div className="overflow-x-auto max-h-64 overflow-y-auto border border-gray-700 rounded-xl shadow-lg">
        <table className="min-w-full table-auto border-collapse bg-gray-800 text-white rounded-xl">
          <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white sticky top-0 z-1">
            <tr>
              {[
                "نام سرپرست",
                "تاریخ ورود به سفر",
                "تعداد اعضای خانواده",
                "واریزی به بودجه کل",
                "عملیات",
              ].map((header, index) => (
                <th key={index} className="px-6 py-3 text-lg font-semibold border-b text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {passengers.map((passenger, index) => (
              <tr
                key={passenger.id}
                className={
                  index % 2 === 0
                    ? "bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600"
                    : "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500"
                }
              >
                <td className="px-6 py-4 text-lg text-center font-medium">{passenger.name}</td>
                <td className="px-6 py-4 text-lg text-center">{passenger.dateArrival}</td>
                <td className="px-6 py-4 text-lg text-center">{passenger.numberFamilyMembers}</td>
                <td className="px-6 py-4 text-lg text-center">{passenger.depositGeneralBudget} تومان</td>
                <td className="px-6 py-4 text-center">
                  <Button
                    label="حذف مسافر"
                    onClick={() => setSelectedTraveler(passenger.id ?? null)}
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold rounded-xl px-5 py-2 shadow-md transform hover:scale-105 transition-all duration-300"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PassengerTable;
