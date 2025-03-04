import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Trip, Passenger, Expense } from "../types/Accounting/accountingTypes";
import {
  fetchTrip,
  fetchPassengers,
  fetchExpenses,
  registerPassenger,
  deletePassenger,
  registerExpense,
  deleteExpense,
} from "../services/accountingService";

export const useAccounting = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [passengerName, setPassengerName] = useState("");
  const [dateArrival, setDateArrival] = useState("");
  const [numberFamilyMembers, setNumberFamilyMembers] = useState("");
  const [depositGeneralBudget, setDepositGeneralBudget] = useState("");
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseType, setExpenseType] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  useEffect(() => {
    if (!tripId) return;

    fetchTrip(tripId).then(setTrip);
    fetchPassengers(tripId).then(setPassengers);
    fetchExpenses(tripId).then(setExpenses);
  }, [tripId]);

  const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  const remainingBudget =
    passengers.reduce((acc, passenger) => acc + parseFloat(passenger.depositGeneralBudget || "0"), 0) - totalExpenses;

  const handleRegisterPassenger = async () => {
    if (!passengerName || !dateArrival || !numberFamilyMembers || !depositGeneralBudget) {
      alert("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // حذف ساعت، دقیقه و ثانیه برای مقایسه صحیح

    const dateArrivalFormatted = new Date(dateArrival + "T00:00:00"); // تبدیل ورودی به تاریخ معتبر

    if (dateArrivalFormatted < today) {
      alert("تاریخ ورود به سفر معتبر نیست.");
      return;
    }

    const isDuplicate = passengers.some((passenger) => passenger.name === passengerName);
    if (isDuplicate) {
      alert("این مسافر قبلاً ثبت شده است.");
      return;
    }

    if (Number(depositGeneralBudget) < 0) {
      alert("مبلغ واریزی به بودجه کل نباید منفی باشد.");
      return;
    }

    if (Number(numberFamilyMembers) <= 0) {
      alert("تعداد اعضای خانواده نباید منفی یا 0 باشد.");
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

    try {
      const data = await registerPassenger(newPassenger);
      setPassengers((prev) => [...prev, data]);
      setPassengerName("");
      setDateArrival("");
      setNumberFamilyMembers("");
      setDepositGeneralBudget("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeletePassenger = async (id: string) => {
    try {
      await deletePassenger(id);
      setPassengers((prev) => prev.filter((passenger) => passenger.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRegisterExpense = async () => {
    if (!expenseType || !expenseDate || !expenseAmount) {
      alert("لطفاً تمام فیلدهای هزینه را پر کنید.");
      return;
    }

    if (passengers.length === 0) {
      alert("حداقل یک مسافر باید ثبت شود قبل از اینکه هزینه‌ای اضافه کنید.");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expenseDateFormatted = new Date(expenseDate + "T00:00:00");

    if (expenseDateFormatted < today) {
      alert("تاریخ ثبت هزینه معتبر نیست.");
      return;
    }

    if (Number(expenseAmount) <= 0) {
      alert("هزینه نباید منفی یا 0 باشد.");
      return;
    }

    if (Number(expenseAmount) > remainingBudget) {
      alert("مقدار هزینه از بودجه ی باقی مانده بیشتر است");
      return;
    }

    const newExpense: Expense = {
      id: new Date().getTime().toString(),
      tripId: tripId!,
      type: expenseType,
      date: expenseDate,
      amount: expenseAmount,
    };

    try {
      const data = await registerExpense(newExpense);
      setExpenses((prev) => [...prev, data]);
      setExpenseType("");
      setExpenseDate("");
      setExpenseAmount("");
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const handleDeleteExpense = async (id: string) => {
    try {
      await deleteExpense(id);
      setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
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
    expenses,
    expenseType,
    setExpenseType,
    expenseDate,
    setExpenseDate,
    expenseAmount,
    setExpenseAmount,
    setExpenses,
    totalExpenses,
    remainingBudget,
    handleDeleteExpense,
    handleRegisterExpense,
  };
};
