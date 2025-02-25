import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Trip, Passenger } from "../types/Accounting/accountingTypes";

export const useAccounting = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [passengerName, setPassengerName] = useState("");
  const [dateArrival, setDateArrival] = useState("");
  const [numberFamilyMembers, setNumberFamilyMembers] = useState("");
  const [depositGeneralBudget, setDepositGeneralBudget] = useState("");
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
    if (passengerName && dateArrival && numberFamilyMembers && depositGeneralBudget) {
      const newPassenger: Passenger = {
        id: new Date().getTime().toString(), // می‌توانید از UUID هم استفاده کنید
        name: passengerName,
        tripId: tripId!,
        dateArrival,
        numberFamilyMembers,
        depositGeneralBudget,
      };

      fetch('http://localhost:5000/passengers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        .catch((error) => console.error('Error:', error));
    } else {
      alert("لطفاً تمام فیلدها را پر کنید.");
    }
  };

  // حذف مسافر
  const handleDeletePassenger = (passengerId: string) => {
    fetch(`http://localhost:5000/passengers/${passengerId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setPassengers((prev) => prev.filter((passenger) => passenger.id !== passengerId));
      })
      .catch((error) => console.error("Error deleting passenger:", error));
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
    handleRegisterPassenger, // ✅ این خط را بررسی کن
    handleDeletePassenger, // برای حذف مسافر
  };
  
};
