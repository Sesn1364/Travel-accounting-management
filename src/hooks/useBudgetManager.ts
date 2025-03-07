import { useState } from "react";
import { Passenger } from "../types/Accounting/accountingTypes";
import { updatePassengerBudget } from "../services/budgetService"; // 🔹 اضافه شد

const useBudgetManager = (passengers: Passenger[], updatePassengers: () => void) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const currentDate = new Date().toISOString().split("T")[0];

  const handleAddBudget = async () => {
    if (!name || !date || !amount) {
      setError("لطفا تمام فیلدها را مقداردهی نمایید");
      return;
    }
  
    const passenger = passengers.find((p) => p.name === name);
    if (!passenger) {
      setError("این سرپرست در این سفر وجود ندارد");
      return;
    }
  
    if (!passenger?.id) {
      setError("شناسه سرپرست معتبر نیست");
      return;
    }
  
    if (date < currentDate) {
      setError("این تاریخ گذشته است");
      return;
    }
  
    const parsedAmount = Number(amount);
    if (parsedAmount <= 0) {
      setError("مبلغ واریزی نباید 0 یا منفی باشد.");
      return;
    }
  
    const updatedBudget = Number(passenger.depositGeneralBudget) + parsedAmount;
  
    try {
      await updatePassengerBudget(passenger.id, updatedBudget);
      updatePassengers();
  
      setError("");
      setName("");
      setDate("");
      setAmount("");
    } catch (error) {
      setError("خطا در ذخیره‌سازی اطلاعات");
    }
  };
  

  return {
    name, setName,
    date, setDate,
    amount, setAmount,
    error, 
    handleAddBudget,
  };
};

export default useBudgetManager;
