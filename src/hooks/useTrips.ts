import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setTripName, setTripDate, setTrips } from "../store/slices/tripSlice";
import { Trip } from "../types/Trip/tripTypes";
import { fetchTrips, registerTrip, deleteTrip } from "../services/tripService";

export const useTrips = () => {
  const dispatch = useDispatch();
  const tripName = useSelector((state: RootState) => state.trip.tripName);
  const tripDate = useSelector((state: RootState) => state.trip.tripDate);
  const trips = useSelector((state: RootState) => state.trip.trips) as Trip[];
  const [error, setError] = useState<string | null>(null);

  // دریافت لیست سفرها از API هنگام لود شدن صفحه
  useEffect(() => {
    fetchTrips()
      .then((data) => dispatch(setTrips(data)))
      .catch((error) => console.error("خطا در دریافت سفرها:", error));
  }, [dispatch]);

  // حذف خودکار پیام‌های خطا بعد از ۳ ثانیه
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // تابع ثبت سفر
  const handleRegisterTrip = async () => {
    if (!tripName || !tripDate) {
      setError("نام و تاریخ سفر را مشخص کنید");
      return;
    }

    const enteredDate = new Date(tripDate + "T00:00:00");
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    if (enteredDate < todayDate) {
      setError("این تاریخ گذشته است.");
      return;
    }

    const isDuplicate = trips.some(trip => trip.name === tripName && trip.date === tripDate);
    if (isDuplicate) {
      setError("این سفر قبلاً ثبت شده است.");
      return;
    }

    setError(null);

    try {
      const newTrip = await registerTrip(tripName, tripDate);
      dispatch(setTrips([...trips, newTrip]));
      dispatch(setTripName(""));
      dispatch(setTripDate(""));
    } catch (error) {
      console.error("خطا در ثبت سفر:", error);
      setError("مشکلی در ثبت سفر به وجود آمد.");
    }
  };

  // تابع حذف سفر
  const handleDeleteTrip = async (tripId: number) => {
    try {
      await deleteTrip(tripId);
      dispatch(setTrips(trips.filter((trip) => trip.id !== tripId)));
    } catch (error) {
      console.error("خطا در حذف سفر:", error);
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
    handleDeleteTrip,
  };
};
