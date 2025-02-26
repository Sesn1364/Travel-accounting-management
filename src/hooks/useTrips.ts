import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../store/store";
import { setTripName, setTripDate, setTrips } from "../store/slices/tripSlice";
import { Trip } from "../types/Trip/tripTypes"; // وارد کردن نوع Trip

export const useTrips = () => {
  const dispatch = useDispatch();
  const tripName = useSelector((state: RootState) => state.trip.tripName);
  const tripDate = useSelector((state: RootState) => state.trip.tripDate);
  const trips = useSelector((state: RootState) => state.trip.trips) as Trip[]; // تعیین نوع trips
  const [error, setError] = useState<string | null>(null);

  // دریافت لیست سفرها از API هنگام لود شدن صفحه
  useEffect(() => {
    axios.get("http://localhost:5000/trips")
      .then(response => {
        dispatch(setTrips(response.data));  // مقدار سفرها را در Redux ذخیره کن
      })
      .catch(error => {
        console.error("خطا در دریافت سفرها:", error);
      });
  }, [dispatch]);

  // گرفتن تاریخ امروز
  const currentDate = new Date().toISOString().split('T')[0]; // فرمت YYYY-MM-DD

  // تابع ثبت سفر
  const handleRegisterTrip = () => {
    if (!tripName || !tripDate) {
      setError("نام و تاریخ سفر را مشخص کنید");
      return;
    }
  
    // بررسی تاریخ گذشته بودن
    if (tripDate < currentDate) {
      setError("این تاریخ گذشته است.");
      return;
    }

    // بررسی وجود سفر تکراری
    const isDuplicate = trips.some(trip => trip.name === tripName && trip.date === tripDate);
    if (isDuplicate) {
      setError("این سفر قبلاً ثبت شده است.");
      return;
    }
  
    setError(null); // پاک کردن خطای قبلی
  
    // ارسال داده جدید به API
    axios.post("http://localhost:5000/trips", { name: tripName, date: tripDate })
      .then(response => {
        dispatch(setTrips([...trips, response.data])); // اضافه کردن سفر جدید به لیست
        dispatch(setTripName(""));
        dispatch(setTripDate(""));
      })
      .catch(error => {
        console.error("خطا در ثبت سفر:", error);
        setError("مشکلی در ثبت سفر به وجود آمد.");
      });
  };

  // حذف خودکار پیام خطا بعد از ۳ ثانیه
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer); // پاک کردن تایمر هنگام تغییر کامپوننت
    }
  }, [error]);

  const handleDeleteTrip = async (tripId: number) => {
    try {
      // دریافت لیست مسافران و هزینه‌ها
      const [passengersResponse, expensesResponse] = await Promise.all([
        axios.get("http://localhost:5000/passengers"),
        axios.get("http://localhost:5000/expenses")
      ]);

      const passengers = passengersResponse.data;
      const expenses = expensesResponse.data;

      // پیدا کردن مسافران و هزینه‌های مرتبط
      const passengersToDelete = passengers.filter((passenger: any) => passenger.tripId === tripId);
      const expensesToDelete = expenses.filter((expense: any) => expense.tripId === tripId);

      // حذف مسافران مرتبط
      const deletePassengerRequests = passengersToDelete.map((passenger: any) =>
        axios.delete(`http://localhost:5000/passengers/${passenger.id}`)
      );

      // حذف هزینه‌های مرتبط
      const deleteExpenseRequests = expensesToDelete.map((expense: any) =>
        axios.delete(`http://localhost:5000/expenses/${expense.id}`)
      );

      // اجرای تمام حذف‌ها قبل از حذف خود سفر
      await Promise.all([...deletePassengerRequests, ...deleteExpenseRequests]);

      // حذف سفر
      await axios.delete(`http://localhost:5000/trips/${tripId}`);

      // به‌روزرسانی لیست سفرها در Redux
      dispatch(setTrips(trips.filter((trip) => trip.id !== tripId)));
    } catch (error) {
      console.error("خطا در حذف سفر، مسافران و هزینه‌ها:", error);
    }
  };

  return {
    tripName,
    setTripName: (value: string) => dispatch(setTripName(value)),
    tripDate,
    setTripDate: (value: string) => dispatch(setTripDate(value)),
    trips,
    error,
    setError,
    handleRegisterTrip,
    handleDeleteTrip, // اضافه کردن تابع حذف سفر
  };
};
