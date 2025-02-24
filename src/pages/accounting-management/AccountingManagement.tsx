import React from "react";
import { useAccounting } from "../../hooks/useAccounting";

const AccountingManagement: React.FC = () => {
  const { trip, passengerName, setPassengerName, passengers, handleRegisterPassenger } = useAccounting();

  return (
    <div>
      <h1>مدیریت حسابداری</h1>
      {trip ? (
        <div>
          <h2>نام سفر: {trip.name}</h2>
          <h3>تاریخ سفر: {trip.date}</h3>

          <input
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            placeholder="نام مسافر"
          />
          <button onClick={handleRegisterPassenger}>ثبت مسافر</button>

          <h3>مسافران:</h3>
          <ul>
            {passengers.map((passenger) => (
              <li key={passenger.id}>{passenger.name}</li>
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
