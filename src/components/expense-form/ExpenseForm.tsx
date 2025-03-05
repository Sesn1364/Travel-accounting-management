import React from "react";
import InputField from "../field/InputField";
import Button from "../button/Button";
import { ExpenseFormProps } from "../../types/Accounting/accountingTypes";

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  expenseType,
  setExpenseType,
  expenseDate,
  setExpenseDate,
  expenseAmount,
  setExpenseAmount,
  handleRegisterExpense,
}) => {
  return (
    <div className="flex gap-2 mb-4 items-end">
      <InputField
        label="نوع هزینه"
        type="text"
        value={expenseType}
        onChange={(e) => setExpenseType(e.target.value)}
        textColor="text-white"
      />
      <InputField
        label="تاریخ هزینه"
        type="date"
        value={expenseDate}
        onChange={(e) => setExpenseDate(e.target.value)}
        textColor="text-white"
      />
      <InputField
        label="مبلغ هزینه"
        type="number"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
        textColor="text-white"
      />
      <Button
        label="ثبت هزینه"
        onClick={handleRegisterExpense}
        backgroundColor="bg-green-500"
        hoverColor="hover:bg-green-700"
        className="h-full px-4 py-2.5 text-white font-medium bg-green-500 hover:bg-green-700 rounded-md transition duration-300 shadow-sm"
      />
    </div>
  );
};

export default ExpenseForm;

