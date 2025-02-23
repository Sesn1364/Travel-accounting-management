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

  // تابع ثبت سفر
  const handleRegisterTrip = () => {
    if (!tripName || !tripDate) {
      setError("نام و تاریخ سفر را مشخص کنید");
      return;
    }
    setError(null);

    // ارسال داده جدید به API
    axios.post("http://localhost:5000/trips", { name: tripName, date: tripDate })
      .then(response => {
        dispatch(setTrips([...trips, response.data])); // اضافه کردن سفر جدید به لیست
        dispatch(setTripName(""));
        dispatch(setTripDate(""));
      })
      .catch(error => {
        console.error("خطا در ثبت سفر:", error);
      });
  };

  // تابع حذف سفر
  const handleDeleteTrip = (tripId: number) => {
    axios.delete(`http://localhost:5000/trips/${tripId}`)
      .then(() => {
        // حذف سفر از Redux
        const updatedTrips = trips.filter((trip) => trip.id !== tripId);
        dispatch(setTrips(updatedTrips));
      })
      .catch(error => {
        console.error("خطا در حذف سفر:", error);
      });
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

