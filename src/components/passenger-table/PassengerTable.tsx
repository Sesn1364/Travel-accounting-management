import React from "react";
import Button from "../../components/button/Button";
import {PassengerTableProps} from "../../types/Accounting/accountingTypes"


const PassengerTable: React.FC<PassengerTableProps> = ({ passengers, setSelectedTraveler }) => {
  return (
    <>
    <h3 className="text-3xl font-semibold mb-2 text-center text-white">پنل مسافران</h3>
    <div className="overflow-x-auto max-h-48 overflow-y-auto border border-gray-300 rounded-t-lg mb-20">
      <table className="min-w-full table-auto border-collapse bg-white shadow-lg">
        <thead className="bg-gray-200 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-2 text-lg font-medium text-gray-700 border-b">نام سرپرست</th>
            <th className="px-4 py-2 text-lg font-medium text-gray-700 border-b">تاریخ ورود به سفر</th>
            <th className="px-4 py-2 text-lg font-medium text-gray-700 border-b">تعداد اعضای خانواده</th>
            <th className="px-4 py-2 text-lg font-medium text-gray-700 border-b">واریزی به بودجه کل</th>
            <th className="px-4 py-2 text-lg font-medium text-gray-700 border-b">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr key={passenger.id} className="border-b">
              <td className="px-4 py-2 text-lg text-gray-700 text-center bg-purple-400">{passenger.name}</td>
              <td className="px-4 py-2 text-lg text-gray-700 text-center bg-linear-to-r from-purple-400 to-purple-300">{passenger.dateArrival}</td>
              <td className="px-4 py-2 text-lg text-gray-700 text-center bg-linear-to-r from-purple-300 to-purple-200">{passenger.numberFamilyMembers}</td>
              <td className="px-4 py-2 text-lg text-gray-700 text-center bg-linear-to-r from-purple-200 to-purple-100">{passenger.depositGeneralBudget} تومان</td>
              <td className="px-4 py-2 text-sm text-gray-700 text-center bg-purple-100">
                <Button
                  label="حذف مسافر"
                  onClick={() => setSelectedTraveler(passenger.id ?? null)}
                  backgroundColor="bg-red-500"
                  hoverColor="hover:bg-red-700"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default PassengerTable;