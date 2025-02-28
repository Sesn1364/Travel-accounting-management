import axios from "axios";
import { Trip } from "../types/Trip/tripTypes";

const API_URL = "http://localhost:5000";

// دریافت لیست سفرها
export const fetchTrips = async (): Promise<Trip[]> => {
  const response = await axios.get(`${API_URL}/trips`);
  return response.data;
};

// ثبت سفر جدید
export const registerTrip = async (name: string, date: string): Promise<Trip> => {
  const response = await axios.post(`${API_URL}/trips`, { name, date });
  return response.data;
};

// حذف سفر و داده‌های مرتبط (مسافران و هزینه‌ها)
export const deleteTrip = async (tripId: number) => {
  const [passengersResponse, expensesResponse] = await Promise.all([
    axios.get(`${API_URL}/passengers`),
    axios.get(`${API_URL}/expenses`)
  ]);

  const passengers = passengersResponse.data.filter((p: any) => p.tripId === tripId);
  const expenses = expensesResponse.data.filter((e: any) => e.tripId === tripId);

  await Promise.all([
    ...passengers.map((p: any) => axios.delete(`${API_URL}/passengers/${p.id}`)),
    ...expenses.map((e: any) => axios.delete(`${API_URL}/expenses/${e.id}`))
  ]);

  await axios.delete(`${API_URL}/trips/${tripId}`);
};
