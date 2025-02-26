import React from "react";
import { useAccounting } from "../../hooks/useAccounting";
import { useDeleteTravelerPopup } from "../../hooks/useDeleteTravelerPopup";
import InputField from "../../components/field/InputField";
import Button from "../../components/button/Button";
import Popup from "../../components/popup/Popup";
import PassengerTable from "../../components/passenger-table/PassengerTable";
import SummaryTable from "../../components/summary-table/SummaryTable";
import PassengerForm from "../../components/passenger-form/PassengerForm";
import ExpenseForm from "../../components/expense-form/ExpenseForm";
import ExpenseTable from "../../components/expense-table/ExpenseTable";

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

          <PassengerForm
            passengerName={passengerName}
            dateArrival={dateArrival}
            numberFamilyMembers={numberFamilyMembers}
            depositGeneralBudget={depositGeneralBudget}
            setPassengerName={setPassengerName}
            setDateArrival={setDateArrival}
            setNumberFamilyMembers={setNumberFamilyMembers}
            setDepositGeneralBudget={setDepositGeneralBudget}
            handleRegisterPassenger={handleRegisterPassenger}
          />

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
            <ExpenseForm
              expenseType={expenseType}
              setExpenseType={setExpenseType}
              expenseDate={expenseDate}
              setExpenseDate={setExpenseDate}
              expenseAmount={expenseAmount}
              setExpenseAmount={setExpenseAmount}
              handleRegisterExpense={handleRegisterExpense}
            />

            {/* جدول هزینه‌ها */}
            {expenses.length > 0 && <ExpenseTable expenses={expenses} />}
            {/* {expenses.length > 0 && (
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
            )} */}
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center">⏳ در حال بارگذاری...</p>
      )}
    </div>
  );
};

export default AccountingManagement;
