import React from "react";
import InputField from "../field/InputField";
import Button from "../button/Button";
import { PassengerFormProps } from "../../types/Accounting/accountingTypes";

const PassengerForm: React.FC<PassengerFormProps> = ({
  passengerName,
  dateArrival,
  numberFamilyMembers,
  depositGeneralBudget,
  setPassengerName,
  setDateArrival,
  setNumberFamilyMembers,
  setDepositGeneralBudget,
  handleRegisterPassenger,
}) => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-gray-900 shadow-xl rounded-3xl p-8 w-full max-w-2xl mx-auto mt-10 border border-gray-700">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        فرم ثبت مسافر
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="نام مسافر"
          type="text"
          value={passengerName}
          onChange={(e) => setPassengerName(e.target.value)}
          textColor="text-white"
          className="bg-gray-800 border border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 rounded-xl px-4 py-3 w-full placeholder-gray-400"
        />
        <InputField
          label="تاریخ ورود به سفر"
          type="date"
          value={dateArrival}
          onChange={(e) => setDateArrival(e.target.value)}
          textColor="text-white"
          className="bg-gray-800 border border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 rounded-xl px-4 py-3 w-full"
        />
        <InputField
          label="تعداد خانواده"
          type="number"
          value={numberFamilyMembers}
          onChange={(e) => setNumberFamilyMembers(e.target.value)}
          textColor="text-white"
          className="bg-gray-800 border border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 rounded-xl px-4 py-3 w-full"
        />
        <InputField
          label="واریزی به بودجه کل"
          type="number"
          value={depositGeneralBudget}
          onChange={(e) => setDepositGeneralBudget(e.target.value)}
          textColor="text-white"
          className="bg-gray-800 border border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 rounded-xl px-4 py-3 w-full"
        />
      </div>

      <div className="flex justify-center mt-6">
        <Button
          label="ثبت مسافر"
          onClick={handleRegisterPassenger}
          className="bg-green-500 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md py-3 px-8 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default PassengerForm;
