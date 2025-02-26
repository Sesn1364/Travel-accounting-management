import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Trip, Passenger, Expense } from "../types/Accounting/accountingTypes";

export const useAccounting = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [passengerName, setPassengerName] = useState("");
  const [dateArrival, setDateArrival] = useState("");
  const [numberFamilyMembers, setNumberFamilyMembers] = useState("");
  const [depositGeneralBudget, setDepositGeneralBudget] = useState("");
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  
  
  // استیت‌های مربوط به هزینه‌ها
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseType, setExpenseType] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  // دریافت اطلاعات سفر
  useEffect(() => {
    fetch(`http://localhost:5000/trips/${tripId}`)
      .then((response) => response.json())
      .then((data) => setTrip(data))
      .catch((error) => console.error("Error fetching trip:", error));
  }, [tripId]);

  // دریافت مسافران مربوط به این سفر
  useEffect(() => {
    fetch(`http://localhost:5000/passengers?tripId=${tripId}`)
      .then((response) => response.json())
      .then((data) => setPassengers(data))
      .catch((error) => console.error("Error fetching passengers:", error));
  }, [tripId]);

  // دریافت لیست هزینه‌های ثبت‌شده
  useEffect(() => {
    fetch(`http://localhost:5000/expenses?tripId=${tripId}`)
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error("Error fetching expenses:", error));
  }, [tripId]);

  const handleRegisterPassenger = () => {
    if (!passengerName || !dateArrival || !numberFamilyMembers || !depositGeneralBudget) {
      alert("لطفاً تمام فیلدها را پر کنید.");
      return;
    }
  
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];
  
    if (dateArrival < formattedToday) {
      alert("تاریخ ورود به سفر معتبر نیست.");
      return;
    }
  
    const isDuplicate = passengers.some((passenger) => passenger.name === passengerName);
    if (isDuplicate) {
      alert("این مسافر قبلاً ثبت شده است.");
      return;
    }
  
    const newPassenger: Passenger = {
      id: new Date().getTime().toString(),
      name: passengerName,
      tripId: tripId!,
      dateArrival,
      numberFamilyMembers,
      depositGeneralBudget,
    };
  
    fetch("http://localhost:5000/passengers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPassenger),
    })
      .then((response) => response.json())
      .then((data) => {
        setPassengers((prev) => [...prev, data]);
        setPassengerName("");
        setDateArrival("");
        setNumberFamilyMembers("");
        setDepositGeneralBudget("");
      })
      .catch((error) => console.error("Error:", error));
  };
  

  // تابع ثبت هزینه
  const handleRegisterExpense = () => {
    if (!expenseType || !expenseDate || !expenseAmount) {
      alert("لطفاً تمام فیلدهای هزینه را پر کنید.");
      return;
    }

    const newExpense: Expense = {
      id: new Date().getTime().toString(), // شماره ردیف یکتا
      tripId: tripId!,
      type: expenseType,
      date: expenseDate,
      amount: expenseAmount,
    };

    // ذخیره در db.json
    fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExpense),
    })
      .then((response) => response.json())
      .then((data) => {
        setExpenses((prev) => [...prev, data]); // افزودن به لیست هزینه‌ها
        setExpenseType("");
        setExpenseDate("");
        setExpenseAmount("");
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleDeletePassenger = (id: string) => {
    fetch(`http://localhost:5000/passengers/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setPassengers((prev) => prev.filter((passenger) => passenger.id !== id));
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleDeleteExpense = (id: string) => {
    fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setExpenses((prev) => prev.filter((expense) => expense.id !== id)); // حذف از استیت
      })
      .catch((error) => console.error("Error deleting expense:", error));
  };
  
  

  return {
    trip,
    passengerName,
    setPassengerName,
    dateArrival,
    setDateArrival,
    numberFamilyMembers,
    setNumberFamilyMembers,
    depositGeneralBudget,
    setDepositGeneralBudget,
    passengers,
    handleRegisterPassenger,
    handleDeletePassenger,
    expenses, // ✅ لیست هزینه‌ها
    expenseType,
    setExpenseType,
    expenseDate,
    setExpenseDate,
    expenseAmount,
    setExpenseAmount,
    setExpenses,
    handleDeleteExpense,
    handleRegisterExpense, // ✅ ثبت هزینه
  };
};
