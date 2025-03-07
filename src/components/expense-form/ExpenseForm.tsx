import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-3xl w-full bg-[#0f172a]/60 backdrop-blur-lg p-8 mx-auto mt-10 rounded-2xl shadow-2xl border border-white/20"
    >
      <h2 className="text-2xl font-semibold text-gray-100 text-center mb-8 drop-shadow-lg">
        ثبت هزینه جدید
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InputField
          label="نوع هزینه"
          type="text"
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
          className="bg-white/10 text-gray-200 border border-white/30 rounded-lg p-3 backdrop-blur-lg focus:ring-2 focus:ring-blue-500"
        />

        <InputField
          label="تاریخ هزینه"
          type="date"
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
          className="bg-white/10 text-gray-200 border border-white/30 rounded-lg p-3 backdrop-blur-lg focus:ring-2 focus:ring-blue-500"
        />

        <InputField
          label="مبلغ هزینه"
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          className="bg-white/10 text-gray-200 border border-white/30 rounded-lg p-3 backdrop-blur-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          label="ثبت هزینه"
          onClick={handleRegisterExpense}
          className="bg-green-500 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md py-3 px-8 transform hover:scale-105"
        />
      </div>
    </motion.div>
  );
};

export default ExpenseForm;
