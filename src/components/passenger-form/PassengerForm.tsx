import React from "react";
import InputField from "../field/InputField";
import Button from "../button/Button";
import {PassengerFormProps} from "../../types/Accounting/accountingTypes"

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
  );
};

export default PassengerForm;
