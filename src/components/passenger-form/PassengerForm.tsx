// import React from "react";
// import InputField from "../field/InputField";
// import Button from "../button/Button";
// import {PassengerFormProps} from "../../types/Accounting/accountingTypes"

// const PassengerForm: React.FC<PassengerFormProps> = ({
//   passengerName,
//   dateArrival,
//   numberFamilyMembers,
//   depositGeneralBudget,
//   setPassengerName,
//   setDateArrival,
//   setNumberFamilyMembers,
//   setDepositGeneralBudget,
//   handleRegisterPassenger,
// }) => {
//   return (
//     <div className="flex gap-2 mb-4">
//       <InputField
//         label="نام مسافر"
//         type="text"
//         value={passengerName}
//         onChange={(e) => setPassengerName(e.target.value)}
//         textColor="text-black"
//       />
//       <InputField
//         label="تاریخ ورود به سفر"
//         type="date"
//         value={dateArrival}
//         onChange={(e) => setDateArrival(e.target.value)}
//         textColor="text-black"
//       />
//       <InputField
//         label="تعداد خانواده"
//         type="number"
//         value={numberFamilyMembers}
//         onChange={(e) => setNumberFamilyMembers(e.target.value)}
//         textColor="text-black"
//       />
//       <InputField
//         label="واریزی به بودجه کل"
//         type="number"
//         value={depositGeneralBudget}
//         onChange={(e) => setDepositGeneralBudget(e.target.value)}
//         textColor="text-black"
//       />
//       <Button
//         label="ثبت مسافر"
//         onClick={handleRegisterPassenger}
//         backgroundColor="bg-green-400"
//         hoverColor="hover:bg-green-700"
//       />
//     </div>
//   );
// };

// export default PassengerForm;


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
    <div className="max-w-3xs bg-black/30 backdrop-invert backdrop-opacity-20 shadow-lg rounded-l-2xl p-6 space-y-4 ">
      <h2 className="text-xl font-semibold text-white pb-2">فرم ثبت مسافر</h2>
      <div className="grid grid-cols-1 gap-4">
        <InputField
          label="نام مسافر"
          type="text"
          value={passengerName}
          onChange={(e) => setPassengerName(e.target.value)}
          textColor="text-white"
          className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg px-3 py-2"
        />
        <InputField
          label="تاریخ ورود به سفر"
          type="date"
          value={dateArrival}
          onChange={(e) => setDateArrival(e.target.value)}
          textColor="text-white"
          className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg px-3 py-2"
        />
        <InputField
          label="تعداد خانواده"
          type="number"
          value={numberFamilyMembers}
          onChange={(e) => setNumberFamilyMembers(e.target.value)}
          textColor="text-white"
          className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg px-3 py-2"
        />
        <InputField
          label="واریزی به بودجه کل"
          type="number"
          value={depositGeneralBudget}
          onChange={(e) => setDepositGeneralBudget(e.target.value)}
          textColor="text-white"
          className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg px-3 py-2"
        />
      </div>
      <Button
        label="ثبت مسافر"
        onClick={handleRegisterPassenger}
        className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
      />
    </div>
  );
};

export default PassengerForm;
