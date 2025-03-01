import { Trip, Passenger, Expense } from "../types/Accounting/accountingTypes";

const API_BASE_URL = "http://localhost:5000";

// دریافت اطلاعات یک سفر خاص
export const fetchTrip = async (tripId: string): Promise<Trip | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/trips/${tripId}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching trip:", error);
    return null;
  }
};

// دریافت لیست مسافران یک سفر خاص
export const fetchPassengers = async (tripId: string): Promise<Passenger[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/passengers?tripId=${tripId}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching passengers:", error);
    return [];
  }
};

// دریافت لیست هزینه‌های یک سفر خاص
export const fetchExpenses = async (tripId: string): Promise<Expense[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/expenses?tripId=${tripId}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return [];
  }
};

// ثبت مسافر جدید
export const registerPassenger = async (newPassenger: Passenger) => {
  try {
    const response = await fetch(`${API_BASE_URL}/passengers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPassenger),
    });
    return response.json();
  } catch (error) {
    console.error("Error registering passenger:", error);
    throw error;
  }
};

// حذف مسافر
export const deletePassenger = async (id: string) => {
  try {
    await fetch(`${API_BASE_URL}/passengers/${id}`, { method: "DELETE" });
  } catch (error) {
    console.error("Error deleting passenger:", error);
    throw error;
  }
};

// ثبت هزینه جدید
export const registerExpense = async (newExpense: Expense) => {
  try {
    const response = await fetch(`${API_BASE_URL}/expenses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExpense),
    });
    return response.json();
  } catch (error) {
    console.error("Error registering expense:", error);
    throw error;
  }
};

// حذف هزینه
export const deleteExpense = async (id: string) => {
  try {
    await fetch(`${API_BASE_URL}/expenses/${id}`, { method: "DELETE" });
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
};
