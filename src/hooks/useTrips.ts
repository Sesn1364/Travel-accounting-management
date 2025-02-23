// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store/store";
// import { setTripName, setTripDate, addTrip } from "../store/slices/tripSlice";

// export const useTrips = () => {
//   const dispatch = useDispatch();
//   const tripName = useSelector((state: RootState) => state.trip.tripName);
//   const tripDate = useSelector((state: RootState) => state.trip.tripDate);
//   const trips = useSelector((state: RootState) => state.trip.trips);
//   const [error, setError] = useState<string | null>(null);

//   const handleRegisterTrip = () => {
//     if (!tripName || !tripDate) {
//       setError("نام و تاریخ سفر را مشخص کنید");
//       return;
//     }
//     setError(null);
//     dispatch(addTrip());
//   };

//   return {
//     tripName,
//     tripDate,
//     trips,
//     error,
//     setError,
//     setTripName: (value: string) => dispatch(setTripName(value)),
//     setTripDate: (value: string) => dispatch(setTripDate(value)),
//     handleRegisterTrip,
//   };
// };


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../store/store";
import { setTripName, setTripDate, setTrips } from "../store/slices/tripSlice";

export const useTrips = () => {
  const dispatch = useDispatch();
  const tripName = useSelector((state: RootState) => state.trip.tripName);
  const tripDate = useSelector((state: RootState) => state.trip.tripDate);
  const trips = useSelector((state: RootState) => state.trip.trips);
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

  return {
    tripName,
    setTripName: (value: string) => dispatch(setTripName(value)),
    tripDate,
    setTripDate: (value: string) => dispatch(setTripDate(value)),
    trips,
    error,
    setError,
    handleRegisterTrip,
  };
};
