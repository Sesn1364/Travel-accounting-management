import React, { useState } from "react";
import { useAccounting } from "../../hooks/useAccounting";
import { useDeleteTravelerPopup } from "../../hooks/useDeleteTravelerPopup";
import Popup from "../../components/popup/Popup";
import PassengerTable from "../../components/passenger-table/PassengerTable";
import SummaryTable from "../../components/summary-table/SummaryTable";
import PassengerForm from "../../components/passenger-form/PassengerForm";
import ExpenseForm from "../../components/expense-form/ExpenseForm";
import ExpenseTable from "../../components/expense-table/ExpenseTable";
import SummaryTableExpense from "../../components/summary-table-expense/SummaryTableExpense";
import ShareTable from "../../components/share-table/ShareTable"; // 📌 اضافه شد
import RemainingBudgetTable from "../../components/remaining-budget-table/RemainingBudgetTable"
import DebtorsTable from "../../components/debtors-table/DebtorsTable"

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
    totalExpenses,
    handleDeleteExpense,
  } = useAccounting();

  const { selectedTraveler, setSelectedTraveler, confirmDelete, cancelDelete } =
    useDeleteTravelerPopup(deletePassenger);

  const [selectedExpense, setSelectedExpense] = useState<string | null>(null);

  const currentDate = new Date().toLocaleDateString();
  const totalFamilyMembers = passengers.reduce(
    (acc, passenger) => acc + parseInt(passenger.numberFamilyMembers),
    0
  );

  const totalDeposit =
    passengers.reduce(
      (acc, passenger) => acc + parseFloat(passenger.depositGeneralBudget || "0"),
      0
    );

  const remainingBudget =
    passengers.reduce(
      (acc, passenger) => acc + parseFloat(passenger.depositGeneralBudget || "0"),
      0
    ) - totalExpenses;

  const formattedExpenses = expenses.map(expense => ({
    ...expense,
    amount: Number(expense.amount),
  }));

  const numberSupervisors = passengers.length;
  const [remainingBudgetCount, setRemainingBudgetCount] = useState(0);

  return (
    <div className="p-4">
      <p className="text-black text-right text-sm mb-4">{currentDate}</p>
      <h1 className="text-2xl font-bold mb-4 text-center">مدیریت حسابداری</h1>

      {trip ? (
        <div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">🛫 نام سفر: {trip.name}</h2>
            <h3 className="text-lg font-medium text-gray-700">📅 تاریخ سفر: {trip.date}</h3>
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
          <PassengerTable passengers={passengers} setSelectedTraveler={setSelectedTraveler} />

          <SummaryTable numberSupervisors={numberSupervisors} totalFamilyMembers={totalFamilyMembers} totalDeposit={totalDeposit} />

          {selectedTraveler && (
            <Popup
              message="آیا مطمئن هستید که می‌خواهید این مسافر را حذف کنید؟"
              onConfirm={confirmDelete}
              onCancel={cancelDelete}
            />
          )}

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

            {expenses.length > 0 && (
              <>
                <ExpenseTable
                  expenses={formattedExpenses}
                  setSelectedExpense={setSelectedExpense}
                  handleDeleteExpense={handleDeleteExpense}
                />
                <SummaryTableExpense totalExpenses={totalExpenses} title="💰 مجموع هزینه ها" label="هزینه کل"/>
                <SummaryTableExpense totalExpenses={remainingBudget} title="💰 باقیمانده بودجه با کسر هزینه ها" label="بودجه باقی مانده"/>
              </>
            )}
          </div>

          {/* 📌 این بخش حالا درون `ShareTable` قرار گرفته */}
          <ShareTable passengers={passengers} expenses={expenses} />

        </div>
      ) : (
        <p className="text-gray-600 text-center">⏳ در حال بارگذاری...</p>
      )}

      <div>
        <h1 className="text-2xl font-bold">مدیریت حسابداری</h1>
        <RemainingBudgetTable passengers={passengers} expenses={expenses} setRemainingBudgetCount={setRemainingBudgetCount} />
        <DebtorsTable passengers={passengers} expenses={expenses} numberSupervisors={numberSupervisors} remainingBudgetCount={remainingBudgetCount} />
      </div>
    </div>
  );
};

export default AccountingManagement;
