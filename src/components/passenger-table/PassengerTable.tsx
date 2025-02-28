import React from "react";
import Button from "../../components/button/Button";
import {PassengerTableProps} from "../../types/Accounting/accountingTypes"


const PassengerTable: React.FC<PassengerTableProps> = ({ passengers, setSelectedTraveler }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b">نام مسافر</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b">تاریخ ورود</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b">تعداد خانواده</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b">واریزی</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr key={passenger.id} className="border-b">
              <td className="px-4 py-2 text-sm text-gray-700">{passenger.name}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{passenger.dateArrival}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{passenger.numberFamilyMembers}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{passenger.depositGeneralBudget} تومان</td>
              <td className="px-4 py-2 text-sm text-gray-700">
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
  );
};

export default PassengerTable;