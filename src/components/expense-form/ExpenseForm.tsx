import React from "react";
import InputField from "../field/InputField";
import Button from "../button/Button";
import { ExpenseFormProps } from "../../types/Accounting/accountingTypes"; // ایمپورت اینترفیس از types

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
    <div className="flex gap-2 mb-4">
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
        hoverColor="hover:bg-blue-700"
        className="bg-green-500 hover:bg-green-700 text-white font-semibold px-2 rounded-lg transition duration-300 shadow-md"
      />
    </div>
  );
};

export default ExpenseForm;

