import React from "react";
import { useAccounting } from "../../hooks/useAccounting";
import { useDeleteTravelerPopup } from "../../hooks/useDeleteTravelerPopup";
import InputField from "../../components/field/InputField";
import Button from "../../components/button/Button";
import Popup from "../../components/popup/Popup";
import PassengerTable from "../../components/passenger-table/PassengerTable";
import SummaryTable from "../../components/summary-table/SummaryTable";

const AccountingManagement: React.FC = () => {
  const {
    trip,
    passengerName,
    dateArrival,
    numberFamilyMembers,
    depositGeneralBudget,
    setPassengerName,
    setDateArrival,
    setNumberFamilyMembers,
    setDepositGeneralBudget,
    passengers,
    handleRegisterPassenger,
    handleDeletePassenger: deletePassenger,
    expenseType,
    expenseDate,
    expenseAmount,
    setExpenseType,
    setExpenseDate,
    setExpenseAmount,
    handleRegisterExpense,
    expenses,
  } = useAccounting();

  const { selectedTraveler, setSelectedTraveler, confirmDelete, cancelDelete } =
    useDeleteTravelerPopup(deletePassenger);

  const currentDate = new Date().toLocaleDateString();
  const totalFamilyMembers = passengers.reduce(
    (acc, passenger) => acc + parseInt(passenger.numberFamilyMembers),
    0
  );
  const totalDeposit = passengers.reduce(
    (acc, passenger) => acc + parseFloat(passenger.depositGeneralBudget),
    0
  );

  return (
    <div className="p-4">
      <p className="text-black text-right text-sm mb-4">{currentDate}</p>
      <h1 className="text-2xl font-bold mb-4 text-center">مدیریت حسابداری</h1>

      {trip ? (
        <div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">🛫 نام سفر: {trip.name}</h2>
            <h3 className="text-lg font-medium text-gray-700">
              📅 تاریخ سفر: {trip.date}
            </h3>
          </div>

          <div className="flex gap-2 mb-4">
            <InputField
              label="نام مسافر"
              type="text"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              textColor="text-black"
            />
            <InputField
              label="تاریخ ورود به سفر"
              type="date"
              value={dateArrival}
              onChange={(e) => setDateArrival(e.target.value)}
              textColor="text-black"
            />
            <InputField
              label="تعداد خانواده"
              type="number"
              value={numberFamilyMembers}
              onChange={(e) => setNumberFamilyMembers(e.target.value)}
              textColor="text-black"
            />
            <InputField
              label="واریزی به بودجه کل"
              type="number"
              value={depositGeneralBudget}
              onChange={(e) => setDepositGeneralBudget(e.target.value)}
              textColor="text-black"
            />
            <Button
              label="ثبت مسافر"
              onClick={handleRegisterPassenger}
              backgroundColor="bg-green-400"
              hoverColor="hover:bg-green-700"
            />
          </div>

          <h3 className="text-lg font-semibold mb-2">🧳 مسافران:</h3>
          <PassengerTable
            passengers={passengers}
            setSelectedTraveler={setSelectedTraveler}
          />

          <SummaryTable
            totalFamilyMembers={totalFamilyMembers}
            totalDeposit={totalDeposit}
          />

          {selectedTraveler && (
            <Popup
              message="آیا مطمئن هستید که می‌خواهید این مسافر را حذف کنید؟"
              onConfirm={confirmDelete}
              onCancel={cancelDelete}
            />
          )}

          {/* بخش هزینه‌ها */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">💰 هزینه‌ها</h2>
            <div className="flex gap-2 mb-4">
              <InputField
                label="نوع هزینه"
                type="text"
                value={expenseType}
                onChange={(e) => setExpenseType(e.target.value)}
                textColor="text-black"
              />
              <InputField
                label="تاریخ هزینه"
                type="date"
                value={expenseDate}
                onChange={(e) => setExpenseDate(e.target.value)}
                textColor="text-black"
              />
              <InputField
                label="مبلغ هزینه"
                type="number"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                textColor="text-black"
              />
              <Button
                label="ثبت هزینه"
                onClick={handleRegisterExpense}
                backgroundColor="bg-blue-500"
                hoverColor="hover:bg-blue-700"
              />
            </div>

            {/* جدول هزینه‌ها */}
            {expenses.length > 0 && (
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">#</th>
                    <th className="border p-2">نوع هزینه</th>
                    <th className="border p-2">تاریخ</th>
                    <th className="border p-2">مبلغ</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense, index) => (
                    <tr key={expense.id} className="text-center">
                      <td className="border p-2">{index + 1}</td>
                      <td className="border p-2">{expense.type}</td>
                      <td className="border p-2">{expense.date}</td>
                      <td className="border p-2">{expense.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center">⏳ در حال بارگذاری...</p>
      )}
    </div>
  );
};

export default AccountingManagement;
