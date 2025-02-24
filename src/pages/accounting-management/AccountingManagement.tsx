import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // برای گرفتن پارامتر از URL

const AccountingManagement: React.FC = () => {
  const { tripId } = useParams<{ tripId: string }>(); // گرفتن tripId از URL
  const [trip, setTrip] = useState<any>(null);
  const [passengerName, setPassengerName] = useState("");
  const [passengers, setPassengers] = useState<any[]>([]); // ذخیره مسافران

  // بارگذاری اطلاعات سفر با استفاده از tripId
  useEffect(() => {
    fetch(`http://localhost:5000/trips/${tripId}`)
      .then((response) => response.json())
      .then((data) => setTrip(data))
      .catch((error) => console.error("Error fetching trip:", error));
  }, [tripId]);

  // بارگذاری مسافران برای tripId خاص
  useEffect(() => {
    fetch(`http://localhost:5000/passengers?tripId=${tripId}`)
      .then((response) => response.json())
      .then((data) => setPassengers(data)) // مسافران مربوط به سفر را ذخیره می‌کند
      .catch((error) => console.error("Error fetching passengers:", error));
  }, [tripId]);

  const handleRegisterPassenger = () => {
    if (passengerName) {
      const newPassenger = { name: passengerName, tripId: tripId };

      // ارسال داده به سرور (json-server)
      fetch('http://localhost:5000/passengers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPassenger),
      })
        .then((response) => response.json())
        .then((data) => {
          setPassengers((prev) => [...prev, data]); // به لیست مسافران اضافه می‌شود
          setPassengerName(""); // پاک کردن فیلد بعد از ثبت
        })
        .catch((error) => console.error('Error:', error));
    }
  };

  return (
    <div>
      <h1>مدیریت حسابداری برای سفر {tripId}</h1>
      {trip ? (
        <div>
          {/* نمایش اطلاعات سفر */}
          <h2>نام سفر: {trip.name}</h2>
          <h3>تاریخ سفر: {trip.date}</h3>

          {/* فرم ثبت مسافر */}
          <input
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            placeholder="نام مسافر"
          />
          <button onClick={handleRegisterPassenger}>ثبت مسافر</button>

          {/* نمایش مسافران ثبت‌شده */}
          <h3>مسافران:</h3>
          <ul>
            {passengers.map((passenger, index) => (
              <li key={index}>{passenger.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>در حال بارگذاری...</p>
      )}
    </div>
  );
};

export default AccountingManagement;
