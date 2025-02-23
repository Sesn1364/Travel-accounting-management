import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setTripName, setTripDate, addTrip } from "../store/slices/tripSlice";

export const useTrips = () => {
  const dispatch = useDispatch();
  const tripName = useSelector((state: RootState) => state.trip.tripName);
  const tripDate = useSelector((state: RootState) => state.trip.tripDate);
  const trips = useSelector((state: RootState) => state.trip.trips);
  const [error, setError] = useState<string | null>(null);

  const handleRegisterTrip = () => {
    if (!tripName || !tripDate) {
      setError("نام و تاریخ سفر را مشخص کنید");
      return;
    }
    setError(null);
    dispatch(addTrip());
  };

  return {
    tripName,
    tripDate,
    trips,
    error,
    setError,
    setTripName: (value: string) => dispatch(setTripName(value)),
    setTripDate: (value: string) => dispatch(setTripDate(value)),
    handleRegisterTrip,
  };
};
