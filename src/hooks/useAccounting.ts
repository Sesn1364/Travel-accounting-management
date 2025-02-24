import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Trip, Passenger } from "../types/Accounting/accountingTypes";

export const useAccounting = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [passengerName, setPassengerName] = useState("");
  const [passengers, setPassengers] = useState<Passenger[]>([]);

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

  // ثبت مسافر جدید
  const handleRegisterPassenger = () => {
    if (passengerName) {
      const newPassenger: Passenger = { name: passengerName, tripId: tripId! };

      fetch('http://localhost:5000/passengers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPassenger),
      })
        .then((response) => response.json())
        .then((data) => {
          setPassengers((prev) => [...prev, data]);
          setPassengerName("");
        })
        .catch((error) => console.error('Error:', error));
    }
  };

  return {
    trip,
    passengerName,
    setPassengerName,
    passengers,
    handleRegisterPassenger,
  };
};
