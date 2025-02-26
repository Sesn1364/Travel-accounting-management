import React from "react";
import InputField from "../field/InputField"; // مسیر صحیح را تنظیم کنید
import Button from "../button/Button"; // مسیر صحیح را تنظیم کنید

interface ExpenseFormProps {
  expenseType: string;
  setExpenseType: (value: string) => void;
  expenseDate: string;
  setExpenseDate: (value: string) => void;
  expenseAmount: string;
  setExpenseAmount: (value: string) => void;
  handleRegisterExpense: () => void;
}

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
  );
};

export default ExpenseForm;
