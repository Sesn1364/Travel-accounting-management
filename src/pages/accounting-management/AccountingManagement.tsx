import React from "react";
import { useAccounting } from "../../hooks/useAccounting";
import { useDeleteTravelerPopup } from "../../hooks/useDeleteTravelerPopup";
import InputField from "../../components/field/InputField";
import Button from "../../components/button/Button";
import Popup from "../../components/popup/Popup";

const AccountingManagement: React.FC = () => {
  const { trip, passengerName, dateArrival, numberFamilyMembers, depositGeneralBudget, setPassengerName, setDateArrival, setNumberFamilyMembers, setDepositGeneralBudget, passengers, handleDeletePassenger: deletePassenger,handleRegisterPassenger  } = useAccounting();
  
  const { selectedTraveler, setSelectedTraveler, confirmDelete, cancelDelete } = useDeleteTravelerPopup(deletePassenger);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">مدیریت حسابداری</h1>

      {trip ? (
        <div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">🛫 نام سفر: {trip.name}</h2>
            <h3 className="text-lg font-medium text-gray-700">📅 تاریخ سفر: {trip.date}</h3>
          </div>

          <div className="flex gap-2 mb-4">
            <InputField label="نام مسافر" type="text" value={passengerName} onChange={(e) => setPassengerName(e.target.value)} textColor="text-black" />
            <InputField label="تاریخ ورود به سفر" type="date" value={dateArrival} onChange={(e) => setDateArrival(e.target.value)} textColor="text-black" />
            <InputField label="تعداد خانواده" type="number" value={numberFamilyMembers} onChange={(e) => setNumberFamilyMembers(e.target.value)} textColor="text-black" />
            <InputField label="واریزی به بودجه کل" type="number" value={depositGeneralBudget} onChange={(e) => setDepositGeneralBudget(e.target.value)} textColor="text-black" />
            <Button label="ثبت مسافر" onClick={handleRegisterPassenger} backgroundColor="bg-green-400" hoverColor="hover:bg-green-700" />
          </div>

          <h3 className="text-lg font-semibold mb-2">🧳 مسافران:</h3>
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

          {selectedTraveler && (
            <Popup
              message="آیا مطمئن هستید که می‌خواهید این مسافر را حذف کنید؟"
              onConfirm={confirmDelete}
              onCancel={cancelDelete}
            />
          )}
        </div>
      ) : (
        <p className="text-gray-600 text-center">⏳ در حال بارگذاری...</p>
      )}
    </div>
  );
};

export default AccountingManagement;
